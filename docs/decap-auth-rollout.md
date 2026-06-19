# Decap CMS Auth Rollout

Last updated: 2026-06-18

## Goal

Make `/admin` usable in production for the current IoTEdges stack:

- website hosted from this repo and deployed by GitHub Actions
- production app served from a VPS
- content stored in the same GitHub repository

This document is the recommended rollout path for authentication and operations.

For the exact click-by-click external setup order, use:

- `docs/github-cloudflare-cms-setup-runbook.md`
- `docs/cms-go-live-checklist.md`
- `docs/cms-admin-dry-run-checklist.md`
- `docs/cms-troubleshooting.md`
- `docs/github-cloudflare-cms-setup-runbook.zh-CN.md`
- `docs/cms-go-live-checklist.zh-CN.md`
- `docs/cms-troubleshooting.zh-CN.md`

## Current Facts

- Decap config already exists at `public/admin/config.yml`
- The content model is now file-based for:
  - `src/content/blog/*.md`
  - `src/content/knowledge/*.md`
  - `src/content/products/*.md`
  - `src/content/solutions/*.md`
- Production deployment is driven by `.github/workflows/deploy.yml`
- The Decap `github` backend still needs a server-side authentication step for GitHub login

## Recommended Production Architecture

For the current VPS deployment, the cleanest approach is:

1. Keep the main site and `/admin` UI on the existing VPS deployment
2. Use the Decap `github` backend against the main content repository
3. Deploy a separate OAuth bridge for GitHub authentication
4. Restrict CMS access to invited GitHub users who already have repository write access

Recommended auth bridge placement:

- preferred: a small serverless auth bridge on Cloudflare Workers / Pages Functions / Vercel / Netlify Function
- acceptable: a small Node endpoint on the same VPS under a separate subdomain such as `cms-auth.iotedges.com`

Reason:

- the main site remains static-friendly and simple
- the auth bridge stays isolated from the website runtime
- GitHub Actions deployment does not need to be redesigned

## Recommended Domain Layout

- public site: `https://iotedges.com`
- CMS UI: `https://iotedges.com/admin/`
- OAuth bridge: `https://cms-auth.iotedges.com/`

Do not put the GitHub client secret in the frontend repo or in browser-exposed code.

## GitHub Access Model

Use the GitHub backend only for users who already have write access to the content repository.

Recommended access policy:

- create a small GitHub team for content editors
- grant that team write access only to this repository
- do not reuse personal owner accounts for routine editing
- keep `publish_mode: editorial_workflow` so content changes remain reviewable

## Rollout Steps

### Phase 1: GitHub OAuth app

Create a GitHub OAuth App dedicated to CMS login.

Use:

- a dedicated app name such as `IoTEdges Decap CMS`
- homepage URL pointing to `https://iotedges.com/admin/`
- callback URL matching the OAuth bridge you choose

Store the client ID and client secret outside the repo.

Recommended secret location:

- Cloudflare Worker / serverless platform secrets, or
- VPS environment variables if you host the bridge on the VPS

## Phase 2: OAuth bridge

Deploy a Decap-compatible GitHub OAuth bridge.

Recommended implementation rule:

- use a community-maintained GitHub OAuth bridge listed by Decap, rather than inventing a custom auth flow first

Pick one runtime you can operate comfortably:

- Node.js
- TypeScript serverless
- Cloudflare-compatible worker or function runtime

Minimum bridge responsibilities:

- redirect editor login to GitHub OAuth
- exchange the GitHub code for an access token server-side
- return the token to Decap in the format expected by the backend flow

Repository scaffold added for this project:

- `workers/decap-auth-cloudflare/src/index.ts`
- `workers/decap-auth-cloudflare/wrangler.jsonc`
- `workers/decap-auth-cloudflare/README.md`
- `.github/workflows/deploy-decap-auth.yml`

## Phase 3: CMS config finalization

Once the auth bridge is live, finalize `public/admin/config.yml` with the exact backend auth settings required by the chosen bridge implementation.

Keep these values aligned:

- `backend.name`
- repository owner/name
- branch
- auth endpoint or provider settings required by the bridge

For the current Cloudflare scaffold, the expected Decap settings are:

```yml
backend:
  name: github
  repo: samlau0086/iotsight
  branch: main
  base_url: https://cms-auth.iotedges.com
  auth_endpoint: auth
```

The repository now already uses these values in `public/admin/config.yml`.
If the worker domain changes, update the config accordingly.

## Phase 4: Access hardening

Before inviting editors:

1. verify only intended GitHub users can log in
2. confirm unauthorized users cannot edit content
3. test create, update, and delete on a non-critical branch or staging repository
4. confirm uploaded media lands in `public/uploads`
5. confirm GitHub Actions still builds successfully from CMS-authored commits

Recommended repository-side validation command for the auth bridge path:

```bash
npm run verify:cms-auth-preflight
```

Recommended external-config validation command before deployment:

```bash
npm run verify:cms-external-config
```

## Branch and Publishing Policy

Current recommendation:

- keep `branch: main`
- keep `publish_mode: editorial_workflow`

Why:

- this matches the current GitHub Actions deployment flow
- editorial workflow reduces the chance of accidental direct publish

If editorial workflow becomes noisy later, adjust after the team has real usage data.

## Media Policy

Current config:

- `media_folder: public/uploads`
- `public_folder: /uploads`

Operational requirement:

- uploaded media must be committed into the repo
- the VPS deployment bundle must include `public/uploads` assets in the built output path

Before rollout, verify at least:

1. upload an image in each collection that uses image fields
2. confirm the saved frontmatter path starts with `/uploads/`
3. run `npm run build`
4. confirm the image renders from the generated page

## Recommended Secrets and Settings

For the OAuth bridge runtime, keep these outside the repo:

- GitHub OAuth client ID
- GitHub OAuth client secret
- session signing secret if the bridge uses one
- allowed origin / callback base URL if required by the bridge implementation

For the website repo itself, no new browser-exposed `VITE_` variables are required just for CMS auth.

## GitHub Actions deployment path

This repository now includes a separate deployment workflow for the auth bridge:

- `.github/workflows/deploy-decap-auth.yml`

Required GitHub Actions secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `DECAP_GITHUB_CLIENT_ID`
- `DECAP_GITHUB_CLIENT_SECRET`

Required GitHub Actions variables or secrets:

- `DECAP_AUTH_HEALTH_URL`
- `DECAP_OAUTH_REDIRECT_URI`
- `DECAP_OAUTH_SITE_ORIGIN`

Recommended GitHub Actions variable:

- `DECAP_OAUTH_SCOPE`

Recommended values:

- `DECAP_AUTH_HEALTH_URL=https://cms-auth.iotedges.com/healthz`
- `DECAP_OAUTH_REDIRECT_URI=https://cms-auth.iotedges.com/callback`
- `DECAP_OAUTH_SITE_ORIGIN=https://iotedges.com`
- `DECAP_OAUTH_SCOPE=repo,user`

These values should remain consistent with:

- `public/admin/config.yml` `base_url`
- the GitHub OAuth App callback URL
- the public site origin in `APP_URL`

For the website deployment workflow, `APP_URL` should also be set and match `DECAP_OAUTH_SITE_ORIGIN`.

## Operational Notes

- `/admin` edits the hosted repository, not the local filesystem state
- editor changes will trigger the same GitHub Actions deployment pipeline as code commits
- CMS users should be told that publishing content can fail if required build checks fail
- this is desirable because it keeps SEO output and prerender integrity under the same gate as code changes
- use `npm run verify:auth-worker-surface` after the Worker custom domain is live
- use `npm run verify:cms-live-surface` after both the Worker and website deploys complete

## Recommended Immediate Next Step

Choose the OAuth bridge runtime first.

For this project, the most operationally consistent choices are:

1. Cloudflare Worker or Pages Function if DNS is already on Cloudflare
2. Small Node auth service on a dedicated subdomain if you want everything on the VPS

## Reference Notes

This rollout plan is based on Decap's official backend and configuration guidance:

- GitHub backend overview: `https://decapcms.org/docs/github-backend/`
- Config options: `https://decapcms.org/docs/configuration-options/`
- External OAuth client list: `https://decapcms.org/docs/external-oauth-clients/`
