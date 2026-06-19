# Decap CMS Configuration Draft

Last updated: 2026-06-19

This document defines the Decap CMS baseline for the current IoTEdges site. It is the working configuration draft for `/admin`, not a generic Decap example.

The site remains file-backed and build-time rendered. Decap CMS only becomes the editing layer for structured marketing content.

The canonical field contract lives in [docs/content-model-schema.md](./content-model-schema.md).

## 1. Delivery Model

Current publishing path:

`Editor -> Decap CMS -> GitHub Repo -> GitHub Actions -> VPS / Cloudflare Pages`

This rollout does not change the frontend delivery model:

- content stays under `src/content/...`
- uploaded media stays under `public/uploads`
- GitHub remains the source of truth
- GitHub Actions still builds and deploys the site
- the frontend still renders from repo content at build time

## 2. Ownership Boundary

Decap CMS is responsible for content only:

- blog posts in `src/content/blog`
- knowledge pages in `src/content/knowledge`
- product pages in `src/content/products`
- solution pages in `src/content/solutions`
- accessories overview content in `src/content/accessories`
- single-file site copy in `src/content/site-copy`

Decap CMS is not responsible for:

- routing, layout, and component code
- theme logic
- deployment secrets
- analytics and tag manager IDs
- live chat runtime configuration
- request quote integration logic

## 3. Admin Baseline

The production draft for `public/admin/config.yml` is:

```yaml
backend:
  name: github
  repo: samlau0086/iotsight
  branch: main
  base_url: https://cms-auth.iotedges.com
  auth_endpoint: auth
  commit_messages:
    create: "cms: create {{collection}} {{slug}}"
    update: "cms: update {{collection}} {{slug}}"
    delete: "cms: delete {{collection}} {{slug}}"
    uploadMedia: "cms: upload {{path}}"
    deleteMedia: "cms: delete media {{path}}"

local_backend: true

site_url: https://iotedges.com
display_url: https://iotedges.com
logo_url: /uploads/iotedges-logo.png

media_folder: public/uploads
public_folder: /uploads

publish_mode: editorial_workflow

slug:
  encoding: ascii
  clean_accents: true
  sanitize_replacement: "-"

issue_reports:
  url: https://github.com/samlau0086/iotsight/issues/new
```

## 4. Deployment Configuration Matrix

These values must stay aligned across the website deployment, the auth worker deployment, and the live `/admin` surface.

| Item | Expected Value | Where It Must Match | Notes |
| --- | --- | --- | --- |
| Site origin | `https://iotedges.com` | `APP_URL`, `DECAP_OAUTH_SITE_ORIGIN`, live site origin | Do not mix `www` and apex unless the whole rollout uses the same host. |
| Auth health URL | `https://cms-auth.iotedges.com/healthz` | `DECAP_AUTH_HEALTH_URL`, worker health check, GitHub Actions verification | Must be HTTPS and must end with `/healthz`. |
| OAuth callback URL | `https://cms-auth.iotedges.com/callback` | GitHub OAuth App callback, `DECAP_OAUTH_REDIRECT_URI`, worker redirect target | Must be identical everywhere, including path. |
| CMS backend base URL | `https://cms-auth.iotedges.com` | `public/admin/config.yml` `base_url`, live `/admin/config.yml` | `auth_endpoint` remains `auth`, so login begins at `/auth`. |
| Public admin site URL | `https://iotedges.com` | `site_url`, `display_url`, live admin host | Keeps Decap previews and links consistent. |

Repository-side validation:

```bash
npm run verify:cms-external-config
```

Live verification after deployment:

```bash
npm run verify:cms-live-surface
```

## 5. Collection Baseline

### `blog`

- type: folder collection
- source: `src/content/blog`
- creation: enabled
- body: Markdown
- purpose: SEO articles and editorial content

Key fields:

- `id`
- `title`
- `excerpt`
- `date`
- `author`
- `category`
- `imageUrl`
- `relatedProducts`
- `relatedResources`
- `order`
- `body`

### `knowledge`

- type: folder collection
- source: `src/content/knowledge`
- creation: enabled
- body: Markdown
- purpose: protocol, wiring, selection, and technical education pages

Key fields:

- `id`
- `title`
- `excerpt`
- `category`
- `primaryKeyword`
- `relatedProducts`
- `order`
- `body`

### `products`

- type: folder collection
- source: `src/content/products`
- creation: disabled
- body: Markdown
- purpose: controlled editing of existing product pages

Key fields:

- `id`
- `title`
- `excerpt`
- `imageUrl`
- `category`
- `model`
- `status`
- `primaryKeyword`
- `route`
- `specGroups`
- `selectionGuide`
- `bomGroups`
- `preSalesFaq`
- `body`

Why `create: false`:

- product taxonomy is still curated in code and content planning
- product pages carry structured sections that are easy to break with uncontrolled new entries
- go-live should start with editing existing models before opening product creation

### `solutions`

- type: folder collection
- source: `src/content/solutions`
- creation: disabled
- body: Markdown plus structured blocks
- purpose: controlled editing of existing solution landing pages

Key fields:

- `id`
- `title`
- `description`
- `image`
- `architectureImage`
- `iconKey`
- `recommendedProductType`
- `recommendedUplink`
- `deploymentEnvironment`
- `link`
- `detailedContent`
- `hardware`
- `software`
- `relatedProducts`
- `relatedResources`
- `body`

### `accessories`

- type: file collection
- source: `src/content/accessories/accessories-overview.md`
- creation: not applicable
- purpose: structured accessories landing-page copy

### `siteCopy`

- type: file collection
- source: `src/content/site-copy/*.md`
- creation: not applicable
- purpose: controlled copy updates for template-driven pages

Files currently covered:

- `homepage.md`
- `aboutpage.md`
- `contactpage.md`
- `gatewaypage.md`
- `demopage.md`

## 6. Editorial Guardrails

The CMS must preserve route and schema stability.

Rules:

- keep `id`, `route`, `link`, and `model` values stable once a page is live
- do not invent new taxonomy values unless the frontend taxonomy is updated first
- store uploaded images under `public/uploads`
- use Markdown for body copy, not for rebuilding page layout
- keep unverified electrical, certification, or protocol claims out of product content

## 7. Rollout Order

Recommended rollout order:

1. Blog
2. Knowledge Base
3. Existing Products
4. Existing Solutions
5. Accessories Overview
6. Site Copy

This sequence keeps the higher-risk commercial landing pages under tighter control until the editor workflow is proven.

## 8. Runtime Prerequisites

Before `/admin` can be opened for real editing, all of the following must be true:

- `https://cms-auth.iotedges.com/healthz` returns HTTP 200
- GitHub OAuth callback URL is `https://cms-auth.iotedges.com/callback`
- `public/admin/config.yml` points to the same auth host
- `npm run verify:cms-external-config` passes against the intended deployment values
- `/admin/` loads on the deployed site
- `/admin/config.yml` is reachable on the deployed site and reflects the expected backend settings
- media uploaded to `public/uploads` survives deployment
- CMS-generated commits pass the deployment workflow
- `npm run verify:cms-live-surface` passes after deployment

## 9. Verification Commands

Local verification commands:

```bash
npm run verify:cms
npm run verify:cms-auth-preflight
npm run verify:cms-preflight
npm run verify:cms-external-config
```

After the website and auth worker are deployed:

```bash
npm run verify:cms-live-surface
```

These checks validate the repo baseline and the deployed CMS surface. They still do not replace one real browser dry run through deployed `/admin`.

## 10. Related Documents

- [docs/cms-minimum-go-live.md](./cms-minimum-go-live.md)
- [docs/decap-auth-rollout.md](./decap-auth-rollout.md)
- [docs/github-cloudflare-cms-setup-runbook.md](./github-cloudflare-cms-setup-runbook.md)
- [docs/cms-go-live-checklist.md](./cms-go-live-checklist.md)
- [docs/cms-rollout-sequence.md](./cms-rollout-sequence.md)
- [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md)
