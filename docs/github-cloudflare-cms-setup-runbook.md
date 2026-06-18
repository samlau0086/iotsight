# GitHub And Cloudflare CMS Setup Runbook

Last updated: 2026-06-18

## Goal

Use this runbook to finish the external setup required for:

- website deployment to the VPS
- Decap CMS GitHub authentication through Cloudflare Workers
- CMS login at `https://iotedges.com/admin/`

This document is written as an operator checklist, not architecture notes.

For the final short-form launch checklist, use:

- `docs/cms-go-live-checklist.md`
- `docs/cms-admin-dry-run-checklist.md`
- `docs/cms-troubleshooting.md`

Chinese versions:

- `docs/github-cloudflare-cms-setup-runbook.zh-CN.md`
- `docs/cms-go-live-checklist.zh-CN.md`
- `docs/cms-troubleshooting.zh-CN.md`

## 1. GitHub Secrets For Website VPS Deploy

Open:

- GitHub repository
- `Settings`
- `Secrets and variables`
- `Actions`

Create these **Secrets**:

| Name | Required | Example / Notes |
| --- | --- | --- |
| `VPS_HOST` | Yes | VPS IP or domain |
| `VPS_USER` | Yes | SSH deploy user |
| `VPS_SSH_KEY` | Yes | Private key used by GitHub Actions |
| `LIVE_CHAT_API_BASE_URL` | Yes | CRM origin |
| `LIVE_CHAT_API_TOKEN` | Yes | Live chat token |
| `APP_URL` | Yes | `https://iotedges.com`; required by deploy-time URL consistency checks |
| `VPS_PORT` | Optional | `22` if non-default |
| `VPS_DEPLOY_PATH` | Optional | `/var/www/iotedges` if different |
| `GEMINI_API_KEY` | Optional | Only if later server features need it |

Create these **Variables**:

| Name | Required | Example / Notes |
| --- | --- | --- |
| `PORT` | Recommended | `3005` |
| `VITE_GA_MEASUREMENT_ID` | One of GA/GTM required | `G-XXXXXXXXXX` |
| `VITE_GTM_ID` | One of GA/GTM required | `GTM-XXXXXXX` |

Important:

- at least one of `VITE_GA_MEASUREMENT_ID` or `VITE_GTM_ID` must be present
- do not prefix `LIVE_CHAT_API_TOKEN` with `VITE_`

## 2. GitHub Secrets For Decap Auth Worker

In the same GitHub Actions settings page, create these **Secrets**:

| Name | Required | Example / Notes |
| --- | --- | --- |
| `CLOUDFLARE_API_TOKEN` | Yes | Token with Worker deployment permissions |
| `CLOUDFLARE_ACCOUNT_ID` | Yes | Cloudflare account ID |
| `DECAP_GITHUB_CLIENT_ID` | Yes | GitHub OAuth App client ID |
| `DECAP_GITHUB_CLIENT_SECRET` | Yes | GitHub OAuth App client secret |
| `DECAP_AUTH_HEALTH_URL` | Yes | `https://cms-auth.iotedges.com/healthz` |
| `DECAP_OAUTH_REDIRECT_URI` | Yes | `https://cms-auth.iotedges.com/callback` |
| `DECAP_OAUTH_SITE_ORIGIN` | Yes | `https://iotedges.com` |

Create this **Variable**:

| Name | Required | Example / Notes |
| --- | --- | --- |
| `DECAP_OAUTH_SCOPE` | Recommended | `repo,user` |

You may store `APP_URL`, `DECAP_AUTH_HEALTH_URL`, `DECAP_OAUTH_REDIRECT_URI`, and `DECAP_OAUTH_SITE_ORIGIN` as Variables instead of Secrets if your policy allows it. Only the GitHub client secret and Cloudflare API token must stay secret.

## 3. GitHub OAuth App

Open:

- GitHub
- `Settings`
- `Developer settings`
- `OAuth Apps`

Create a new OAuth App with:

| Field | Value |
| --- | --- |
| Application name | `IoTEdges Decap CMS` |
| Homepage URL | `https://iotedges.com/admin/` |
| Authorization callback URL | `https://cms-auth.iotedges.com/callback` |

After creation:

1. copy the **Client ID** into `DECAP_GITHUB_CLIENT_ID`
2. generate a **Client Secret**
3. copy it into `DECAP_GITHUB_CLIENT_SECRET`

## 4. Cloudflare Worker Domain

In Cloudflare:

1. make sure `iotedges.com` DNS is managed there
2. create or reserve `cms-auth.iotedges.com`
3. let the Worker use this hostname

Recommended operator sequence inside Cloudflare:

1. open `Workers & Pages`
2. deploy or select the Decap auth Worker
3. add a **Custom Domain** binding for `cms-auth.iotedges.com`
4. wait until Cloudflare shows the domain as active
5. only then run external checks from GitHub Actions or local `verify:auth-worker-surface`

Expected endpoints after deploy:

- `https://cms-auth.iotedges.com/auth`
- `https://cms-auth.iotedges.com/callback`
- `https://cms-auth.iotedges.com/healthz`

If `cms-auth.iotedges.com` does not resolve at all, the Worker deploy may still have succeeded while the hostname binding is still missing.

## 4.1 Required Value Consistency

These values must match exactly across systems:

| Purpose | Expected value | Where it must appear |
| --- | --- | --- |
| CMS site origin | `https://iotedges.com` | `DECAP_OAUTH_SITE_ORIGIN`, Worker health output, live site origin |
| OAuth callback URL | `https://cms-auth.iotedges.com/callback` | GitHub OAuth App callback URL, `DECAP_OAUTH_REDIRECT_URI`, Worker redirect behavior |
| Worker health URL | `https://cms-auth.iotedges.com/healthz` | `DECAP_AUTH_HEALTH_URL`, manual health checks, GitHub Actions worker verification |
| CMS backend base URL | `https://cms-auth.iotedges.com` | `public/admin/config.yml` `base_url`, live `/admin/config.yml` |

Do not mix:

- `http` and `https`
- apex and `www`
- different callback hosts
- different auth subdomains

## 5. Deploy The Auth Worker

Use the workflow:

- `.github/workflows/deploy-decap-auth.yml`

Optional preflight validation workflow:

- `.github/workflows/validate-cms-rollout.yml`

Recommended order:

1. add all Worker-related GitHub secrets and variables
2. commit or confirm the current `main` branch state
3. run **Actions > Deploy Decap Auth Worker**
4. wait for the workflow to finish
5. run `npm run verify:auth-worker-surface`
6. open `https://cms-auth.iotedges.com/healthz`

Success criteria:

- HTTP 200
- JSON contains `"ok": true`
- JSON contains `"provider": "github"`
- `/auth` returns a GitHub OAuth redirect with the expected callback URI

If `npm run verify:auth-worker-surface` fails with `ENOTFOUND`:

- the Worker hostname is not resolving yet
- check the Cloudflare custom-domain binding before re-running the workflow

If it fails:

- verify `CLOUDFLARE_API_TOKEN`
- verify `CLOUDFLARE_ACCOUNT_ID`
- verify `DECAP_GITHUB_CLIENT_ID`
- verify `DECAP_GITHUB_CLIENT_SECRET`
- verify the OAuth callback URL exactly matches the GitHub OAuth App

## 6. Deploy The Website

Use the workflow:

- `.github/workflows/deploy.yml`

Recommended order:

1. confirm the website secrets and variables are already set
2. run **Actions > Deploy to VPS**
3. wait for build, prerender, and VPS restart to pass
4. open `https://iotedges.com`

Local repo self-checks available before running workflows:

```bash
npm run verify:cms-preflight
```

Equivalent step-by-step commands:

```bash
npm run lint
npm run verify:cms
npm run verify:cms-runtime
npm run build
npm run verify:cms-build
```

URL and origin consistency check:

```bash
npm run verify:cms-external-config
```

After the VPS deploy completes:

```bash
npm run verify:cms-live-surface
```

## 7. First CMS Login Test

After both workflows are green:

1. open `https://iotedges.com/admin/`
2. click login with GitHub
3. complete OAuth
4. confirm the CMS loads all six collections:
   - Blog
   - Knowledge Base
   - Products
   - Solutions
   - Accessories
   - Site Copy

If login fails:

- check browser console
- check Worker health endpoint
- run `npm run verify:auth-worker-surface`
- run `npm run verify:production-surface`
- check GitHub OAuth App callback URL
- check `public/admin/config.yml`

## 8. First Content Test

Use a low-risk edit first.

Recommended:

1. edit one existing blog post excerpt
2. save through the CMS
3. confirm a Git commit or editorial workflow entry appears
4. let GitHub Actions deploy
5. record the result in `docs/cms-admin-dry-run-report-template.md`
5. verify the page renders correctly on the live site

## 9. Final Acceptance

Treat setup as successful only when all are true:

1. Worker deploy workflow passes
2. Worker `/healthz` returns `ok: true`
3. `npm run verify:auth-worker-surface` passes
4. Website deploy workflow passes
5. `npm run verify:cms-live-surface` passes
6. `/admin/` login works
7. one CMS-authored content change deploys successfully
8. the edited page renders correctly on the live site
