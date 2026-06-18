# CMS Minimum Go-Live

Last updated: 2026-06-19

This document is the operator-facing minimum path for turning on Decap CMS for `iotedges.com`.

It is intentionally narrower than the full rollout documentation. The goal is to get one real editor through one safe production edit without opening the whole content model operationally on day one.

Use this together with:

- [docs/decap-cms-config-draft.md](./decap-cms-config-draft.md)
- [docs/github-cloudflare-cms-setup-runbook.md](./github-cloudflare-cms-setup-runbook.md)
- [docs/cms-go-live-checklist.md](./cms-go-live-checklist.md)
- [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md)

## 1. Minimum Scope

For the first real production pass:

- one editor account only
- one existing blog post edit only
- no new product pages
- no solution page restructuring
- no site copy edits
- no bulk image migration

This is an operational restriction, not a config restriction. The collections can exist in `public/admin/config.yml`, but the first production pass should stay inside the lowest-risk content surface.

## 2. Required Public Topology

The minimum production topology is:

- site: `https://iotedges.com`
- admin: `https://iotedges.com/admin/`
- auth worker: `https://cms-auth.iotedges.com`

Required URL alignment:

| Item | Expected Value |
| --- | --- |
| `APP_URL` | `https://iotedges.com` |
| `DECAP_OAUTH_SITE_ORIGIN` | `https://iotedges.com` |
| `DECAP_AUTH_HEALTH_URL` | `https://cms-auth.iotedges.com/healthz` |
| `DECAP_OAUTH_REDIRECT_URI` | `https://cms-auth.iotedges.com/callback` |
| `public/admin/config.yml` `base_url` | `https://cms-auth.iotedges.com` |

## 3. Minimum GitHub Actions Configuration

Website deployment secrets:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `LIVE_CHAT_API_BASE_URL`
- `LIVE_CHAT_API_TOKEN`
- `APP_URL`

Website deployment variables:

- `PORT=3005`
- at least one of:
  - `VITE_GTM_ID`
  - `VITE_GA_MEASUREMENT_ID`

Auth worker secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `DECAP_GITHUB_CLIENT_ID`
- `DECAP_GITHUB_CLIENT_SECRET`
- `DECAP_AUTH_HEALTH_URL`
- `DECAP_OAUTH_REDIRECT_URI`
- `DECAP_OAUTH_SITE_ORIGIN`

Recommended auth worker variable:

- `DECAP_OAUTH_SCOPE=repo,user`

## 4. Minimum Preflight

Before touching production login, run:

```bash
npm run verify:cms-preflight
```

Then validate the external URL matrix:

```bash
npm run verify:cms-external-config
```

Treat either failure as a stop condition.

## 5. Minimum Deployment Sequence

1. Run `Deploy Decap Auth Worker`.
2. Verify `https://cms-auth.iotedges.com/healthz` returns HTTP 200 and JSON with `"ok": true`.
3. Run:

```bash
npm run verify:auth-worker-surface
```

4. Run `Deploy to VPS`.
5. Verify:
   - `https://iotedges.com/admin/` loads the Decap shell
   - `https://iotedges.com/admin/config.yml` is reachable
   - `https://iotedges.com/robots.txt` contains `Disallow: /admin`
6. Run:

```bash
npm run verify:cms-live-surface
```

Do not proceed to editor login until all of the above pass.

Final combined gate:

```bash
npm run verify:cms-go-live
```

If both the auth worker and the website fail at the same time, use this order:

1. fix and verify `cms-auth.iotedges.com` first
2. redeploy the website after the worker hostname is healthy
3. rerun `npm run verify:cms-live-surface`

## 6. First Production Edit

Use one existing blog post only.

Required path:

1. Open `/admin/`.
2. Log in through GitHub OAuth.
3. Open one existing Blog entry.
4. Make one small, reversible text change.
5. Save through the configured editorial flow.
6. Confirm a Git commit or editorial workflow entry appears.
7. Confirm GitHub Actions deployment runs.
8. Confirm the live blog page shows the change.

Recommended test edit types:

- fix one sentence
- update one excerpt
- replace one paragraph

Avoid these on the first production edit:

- changing `id`
- changing image conventions
- changing related links in bulk
- changing product or solution content
- editing multiple collections in one pass

## 7. What Counts As Minimum Go-Live

Treat minimum go-live as achieved only when:

- auth worker surface passes
- `/admin/` loads correctly on the live site
- one editor login succeeds
- one existing blog edit completes end to end
- one deployment triggered by CMS content succeeds
- the changed live page renders correctly

This does not yet prove the full CMS rollout is complete for products, solutions, accessories, or site copy.

## 8. Next Operational Step After Minimum Go-Live

After the first successful blog edit:

1. repeat the same flow on one existing Knowledge Base page
2. run the full [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md)
3. fill [docs/cms-admin-dry-run-report-template.md](./cms-admin-dry-run-report-template.md)
4. only then start operational use of Products and Solutions

## 9. Current Failure Patterns To Expect

If the rollout fails, the most likely classes are:

- auth worker DNS or custom-domain binding is incomplete
- live `/admin/` is still serving the site shell instead of the CMS shell
- `public/admin/config.yml` and GitHub Actions URL values are inconsistent
- OAuth callback URL mismatch
- editor login works but deployment fails on the resulting content commit

For deeper diagnosis, use:

- [docs/cms-troubleshooting.md](./cms-troubleshooting.md)
