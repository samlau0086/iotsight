# CMS Go-Live Checklist

Last updated: 2026-06-18

Use this checklist when you are ready to actually turn on Decap CMS for `iotedges.com`.

Use together with:

- `docs/cms-minimum-go-live.md`
- `docs/cms-rollout-sequence.md`
- `docs/cms-admin-dry-run-checklist.md`
- `docs/cms-admin-dry-run-report-template.md`

## 1. GitHub Repository

- [ ] `main` branch is up to date
- [ ] `public/admin/config.yml` contains:
  - [ ] `base_url: https://cms-auth.iotedges.com`
  - [ ] `auth_endpoint: auth`
  - [ ] `site_url: https://iotedges.com`
  - [ ] `display_url: https://iotedges.com`
- [ ] `.github/workflows/deploy.yml` exists
- [ ] `.github/workflows/deploy-decap-auth.yml` exists

## 2. GitHub Actions Secrets For Website

- [ ] `VPS_HOST`
- [ ] `VPS_USER`
- [ ] `VPS_SSH_KEY`
- [ ] `LIVE_CHAT_API_BASE_URL`
- [ ] `LIVE_CHAT_API_TOKEN`
- [ ] `APP_URL`
- [ ] at least one of:
  - [ ] `VITE_GA_MEASUREMENT_ID`
  - [ ] `VITE_GTM_ID`

## 3. GitHub Actions Secrets For Decap Auth Worker

- [ ] `CLOUDFLARE_API_TOKEN`
- [ ] `CLOUDFLARE_ACCOUNT_ID`
- [ ] `DECAP_GITHUB_CLIENT_ID`
- [ ] `DECAP_GITHUB_CLIENT_SECRET`

Required values present:

- [ ] `DECAP_AUTH_HEALTH_URL`
- [ ] `DECAP_OAUTH_REDIRECT_URI`
- [ ] `DECAP_OAUTH_SITE_ORIGIN`

Recommended value present:

- [ ] `DECAP_OAUTH_SCOPE`

## 4. GitHub OAuth App

- [ ] OAuth App created in GitHub
- [ ] Homepage URL is `https://iotedges.com/admin/`
- [ ] Callback URL is `https://cms-auth.iotedges.com/callback`
- [ ] Client ID copied into GitHub Actions secret
- [ ] Client Secret copied into GitHub Actions secret

## 5. Cloudflare

- [ ] `iotedges.com` zone is active in Cloudflare
- [ ] `cms-auth.iotedges.com` hostname is ready for Worker binding
- [ ] Worker secrets have been pushed by GitHub Actions deployment

## 6. Auth Worker Deployment

- [ ] `npm run verify:cms-auth-preflight` passes locally
- [ ] `npm run verify:cms-external-config` passes for Worker-related URLs
- [ ] Run `Deploy Decap Auth Worker`
- [ ] Workflow succeeds
- [ ] `https://cms-auth.iotedges.com/healthz` returns HTTP 200
- [ ] health JSON contains `"ok": true`
- [ ] health JSON contains `"provider": "github"`

## 7. Website Deployment

- [ ] `npm run verify:cms-preflight` passes locally
- [ ] `npm run verify:cms-external-config` passes for website and OAuth URLs
- [ ] `npm run verify:server-surface` passes locally after build
- [ ] Run `Deploy to VPS`
- [ ] Workflow succeeds
- [ ] `https://iotedges.com` loads normally
- [ ] `https://iotedges.com/admin/` loads normally
- [ ] deployed `robots.txt` contains `Disallow: /admin` and `Sitemap: https://iotedges.com/sitemap.xml`
- [ ] deployed `sitemap.xml` loads and does not contain `/admin`
- [ ] `npm run verify:auth-worker-surface` passes against the auth worker
- [ ] `npm run verify:production-surface` passes against the live site
- [ ] `npm run verify:cms-live-surface` passes against the full live CMS surface
- [ ] `npm run verify:cms-go-live` passes as the final end-to-end gate

## 8. First Login

- [ ] GitHub login popup opens from `/admin/`
- [ ] OAuth login completes
- [ ] CMS opens after login
- [ ] All collections are visible:
  - [ ] Blog
  - [ ] Knowledge Base
  - [ ] Products
  - [ ] Solutions
  - [ ] Accessories
  - [ ] Site Copy

## 9. First Content Edit

- [ ] Edit one existing blog entry
- [ ] Save successfully
- [ ] Git commit or editorial workflow entry is created
- [ ] related GitHub Actions deploy succeeds
- [ ] changed page renders correctly on the live site

## 10. Final Gate

- [ ] `docs/decap-cms-qa-checklist.md` has been run for broader validation
- [ ] `docs/cms-admin-dry-run-checklist.md` has been run for `/admin` smoke testing
- [ ] `docs/cms-admin-dry-run-report-template.md` has been filled with a real execution record
- [ ] a maintainer knows how to revert a CMS-authored Git commit
- [ ] a maintainer knows where to inspect Worker deploy logs
- [ ] a maintainer knows where to inspect VPS deploy logs

## Done Means

Treat CMS go-live as complete only when:

- [ ] auth worker is healthy
- [ ] `/admin/` login works
- [ ] one CMS-authored edit deploys successfully
- [ ] the edited live page renders correctly
