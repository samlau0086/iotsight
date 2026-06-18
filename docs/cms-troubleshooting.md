# CMS Go-Live Troubleshooting

Last updated: 2026-06-18

Use this document to troubleshoot these common go-live problems:

- `https://iotedges.com/admin/` does not load or loads blank
- GitHub OAuth login fails
- Cloudflare Worker health check fails
- GitHub Actions auth worker deployment fails
- GitHub Actions website deployment fails
- CMS content saves but does not publish successfully

Recommended troubleshooting order:

1. Check the Worker `/healthz` endpoint first
2. Check the GitHub OAuth App callback URL next
3. Check GitHub Actions secrets and variables
4. Check browser console output and Worker or Actions logs last

## 1. `/admin/` Does Not Open

Common symptoms:

- HTTP 404
- blank page
- homepage content shows instead of the CMS admin shell
- browser console errors

Check:

- the live website is deployed with the latest build
- `public/admin/index.html` exists in the deployed output
- `public/admin/config.yml` is deployed with the website
- `https://iotedges.com/admin/` is not being broken by a server rewrite rule
- the production server is not falling back to the SPA homepage for `/admin/`

Check first:

- whether the `Deploy to VPS` workflow succeeded
- whether `npm run verify:server-surface` passes locally after `npm run build`
- whether `npm run verify:production-surface` passes against the live site
- whether these URLs open directly:
- `https://iotedges.com/admin/`
- `https://iotedges.com/admin/config.yml`

If `/admin/` loads the homepage HTML instead of the CMS shell:

- check the production Express fallback logic first
- confirm `/admin` and `/admin/` are explicitly served from `dist/admin/index.html`
- confirm your reverse proxy or CDN is not rewriting `/admin/` to `/`
- if the response looks identical to the homepage, assume homepage fallback routing until proven otherwise

If `/admin/config.yml` opens as HTML instead of YAML:

- the site is likely falling back to the app shell for `/admin/config.yml`
- check the production server static-file routing for `/admin/config.yml`
- check CDN or reverse-proxy rewrite rules before blaming Decap config syntax
- if the content matches the homepage HTML, treat it as homepage fallback routing rather than a YAML syntax issue

## 2. Clicking GitHub Login Does Nothing

Common symptoms:

- no popup opens
- popup flashes and closes
- browser reports popup or CORS issues

Check:

- whether the browser is blocking popups
- whether `public/admin/config.yml` contains:
- `base_url: https://cms-auth.iotedges.com`
- `auth_endpoint: auth`
- whether `cms-auth.iotedges.com` is actually reachable

Suggested actions:

1. Open `https://cms-auth.iotedges.com/healthz` manually
2. Run `npm run verify:auth-worker-surface`
3. Inspect the browser console
4. Confirm the Worker deployment succeeded

## 3. `/healthz` Returns Failure

Common symptoms:

- HTTP 404
- HTTP 500
- JSON response contains `ok: false`
- HTML page is returned instead of JSON
- Cloudflare error page is returned instead of Worker JSON

Check:

- whether the Cloudflare Worker was deployed to the correct account
- whether `cms-auth.iotedges.com` is bound to the Worker
- whether these GitHub Actions secrets exist:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `DECAP_GITHUB_CLIENT_ID`
- `DECAP_GITHUB_CLIENT_SECRET`

If `/healthz` returns HTML or a Cloudflare-branded page:

- the custom domain may not actually be bound to the intended Worker
- DNS may point somewhere valid, but not to the Worker route you expect
- check Cloudflare Worker custom-domain binding before debugging OAuth code
- whether these recommended values are correct:
- `DECAP_OAUTH_REDIRECT_URI`
- `DECAP_OAUTH_SITE_ORIGIN`
- `DECAP_OAUTH_SCOPE`

If `ok: false` appears:

- the Worker is usually live but required secrets are missing or wrong

If you see `getaddrinfo ENOTFOUND`:

- `cms-auth.iotedges.com` does not currently resolve in DNS
- or the hostname has not been created / bound in Cloudflare yet

## 4. OAuth Returns To The Wrong Place Or Fails

Common symptoms:

- GitHub authorization finishes on an error page
- callback URL mismatch error
- CMS does not open after login

Check carefully:

- the GitHub OAuth App callback URL is exactly:
- `https://cms-auth.iotedges.com/callback`
- `DECAP_OAUTH_REDIRECT_URI` matches the same value
- `OAUTH_SITE_ORIGIN` is:
- `https://iotedges.com`
- `npm run verify:cms-external-config` passes with the current environment values

OAuth failures are often caused by a one-character mismatch here.

## 5. `Deploy Decap Auth Worker` Workflow Fails

Check first:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- whether the Cloudflare token has Worker deployment permission
- whether the workflow failed during:
- pre-deploy validation
- Wrangler deploy
- `/healthz` verification

If failure happens at `/healthz`:

- the Worker is often deployed but secrets were not injected correctly
- or `DECAP_AUTH_HEALTH_URL` points to the wrong domain
- or `/auth` is not redirecting with the expected callback URI

## 6. `Deploy to VPS` Workflow Fails

Check first:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `LIVE_CHAT_API_BASE_URL`
- `LIVE_CHAT_API_TOKEN`
- at least one analytics variable:
- `VITE_GA_MEASUREMENT_ID`
- `VITE_GTM_ID`

Common failure points:

- SSH cannot connect to the VPS
- required analytics variable is missing and the workflow fails fast
- build or prerender validation fails

## 7. CMS Save Does Not Publish

Check:

- whether `publish_mode: editorial_workflow` is enabled
- whether the user only created a draft without publishing it
- whether GitHub contains the related commit or editorial entry
- whether the website deployment workflow was triggered after save

If the CMS wrote content to GitHub but the live site did not update:

- inspect the `Deploy to VPS` workflow next

## 8. Page Looks Broken After Content Publish

Common symptoms:

- page shows `Untitled Product`
- blank page
- broken image path
- damaged YAML or frontmatter structure

Do this first:

1. Run:
   - `npm run verify:cms-preflight`
   - `npm run verify:cms`
   - `npm run verify:cms-runtime`
   - `npm run lint`
2. Inspect the related Markdown frontmatter for structural damage
3. Run the collection-level checks in `docs/decap-cms-qa-checklist.md`

For product and solution pages, check these fields first:

- `id`
- `title`
- `model`
- `route` or `link`
- `status`
- `specGroups`
- `selectionGuide`
- `bomGroups`
- `preSalesFaq`

With the stricter CMS schema now in place, many apparent page-rendering issues are actually invalid or incomplete frontmatter written by the CMS.

If you see `Untitled Product`, it usually means title or identity fields did not round-trip correctly, not that the frontend template stopped working.

## 9. Information To Gather Before Escalating

If further debugging is needed, collect these items together:

1. the failing page URL
2. the GitHub Actions workflow name
3. the exact workflow error text
4. browser console errors
5. the response body from `https://cms-auth.iotedges.com/healthz`
6. the most recently edited content file

That usually shortens the debugging loop and avoids repeated context gathering.
