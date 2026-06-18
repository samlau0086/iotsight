# IoTEdges Decap Auth Worker

This Worker is the recommended OAuth bridge scaffold for Decap CMS with the GitHub backend.

Routes:

- `/auth`
- `/callback`
- `/healthz`

## Required secrets

Set these in Cloudflare Worker secrets:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

Optional:

- `OAUTH_REDIRECT_URI`
- `OAUTH_SITE_ORIGIN`
- `OAUTH_SCOPE`

Local example file:

- copy `.dev.vars.example` to `.dev.vars`

## Suggested production values

- worker domain: `https://cms-auth.iotedges.com`
- CMS UI: `https://iotedges.com/admin/`
- callback: `https://cms-auth.iotedges.com/callback`
- health check: `https://cms-auth.iotedges.com/healthz`

These values must stay consistent across:

- GitHub OAuth App callback URL
- `DECAP_OAUTH_REDIRECT_URI`
- `DECAP_AUTH_HEALTH_URL`
- `public/admin/config.yml` `base_url`

## Suggested local commands

```bash
npx wrangler login
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler dev
```

## Repository validation commands

Use the repository-side checks before or alongside Worker deployment:

```bash
npm run verify:cms-auth-preflight
```

After the Worker is deployed and the custom domain is active:

```bash
npm run verify:auth-worker-surface
```

After both the Worker and website are deployed:

```bash
npm run verify:cms-live-surface
```

Equivalent step-by-step commands:

```bash
npm run verify:cms
npm run verify:cms-runtime
```

## Suggested Decap config after deployment

Do not enable this until the worker domain is live and tested.

```yml
backend:
  name: github
  repo: samla/iotsight
  branch: main
  base_url: https://cms-auth.iotedges.com
  auth_endpoint: auth
```

## Health check

Open:

```text
https://cms-auth.iotedges.com/healthz
```

Expected result:

- `ok: true` when required secrets are set
- `provider: "github"`
- `/auth` should return a GitHub OAuth redirect

## Suggested GitHub Actions secrets

For `.github/workflows/deploy-decap-auth.yml`:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `DECAP_GITHUB_CLIENT_ID`
- `DECAP_GITHUB_CLIENT_SECRET`

Optional:

- `DECAP_AUTH_HEALTH_URL`
- `DECAP_OAUTH_REDIRECT_URI`
- `DECAP_OAUTH_SITE_ORIGIN`
- `DECAP_OAUTH_SCOPE`

## Notes

- The callback uses the Decap popup handshake:
  - sends `authorizing:github`
  - waits for the opener message
  - posts back `authorization:github:success:...` or `authorization:github:error:...`
- The worker stores a short-lived OAuth state in an HTTP-only cookie and verifies it on callback
- If external verification fails with `ENOTFOUND`, check the Cloudflare custom-domain binding first
