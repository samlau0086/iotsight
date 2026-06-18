# Decap CMS Draft

Last updated: 2026-06-18

## Scope

This repo now contains a practical Decap CMS starting point for:

- Blog
- Knowledge Base
- Products
- Solutions
- Accessories Overview
- Site Copy
  - Homepage Copy
  - About Page Copy
  - Contact Page Copy
  - Gateway Page Copy
  - Demo Page Copy

Files included:

- `public/admin/index.html`
- `public/admin/config.yml`
- `docs/decap-cms-config-draft.md`
- `docs/decap-auth-rollout.md`
- `docs/decap-cms-qa-checklist.md`

## Current State

The Decap setup is real and file-backed, but still rollout-gated rather than fully production-open.

That distinction matters:

1. The content model is implemented in the repo.
2. The admin config now targets actual file-backed collections and single-file content sources.
3. The auth worker scaffold is in place.
4. Production use still depends on content QA, editor dry runs, media checks, and auth deployment.

## What Already Works Structurally

These content types are already implemented as file-backed CMS targets:

- `src/content/blog/*.md`
- `src/content/knowledge/*.md`
- `src/content/products/*.md`
- `src/content/solutions/*.md`
- `src/content/accessories/accessories-overview.md`
- `src/content/site-copy/homepage.md`
- `src/content/site-copy/aboutpage.md`
- `src/content/site-copy/contactpage.md`
- `src/content/site-copy/gatewaypage.md`
- `src/content/site-copy/demopage.md`

In other words, this repo is no longer at the stage of “maybe CMS later.” It is now at the stage of “controlled CMS rollout over an existing file-backed content model.”

## What Still Needs Work Before Broad Production Use

### 1. Editor dry-run validation

You still need real editing validation through `/admin/`:

- login flow
- existing file hydration
- nested field persistence
- image upload behavior
- route stability after save

### 2. Content QA

The CMS can load the content, but that does not automatically prove every page is editor-safe from a publishing perspective.

This is especially important for:

- Products
- Solutions
- Accessories Overview
- Site Copy files that affect core marketing routes

### 3. Auth deployment

The admin config points to the Cloudflare auth bridge, but production readiness still depends on the actual OAuth app and worker deployment being complete.

### 4. Operational discipline

Some routes are content-driven now, but still must keep strict boundaries:

- layout stays in code
- analytics stays in code
- live chat stays in code
- quote form behavior stays in code
- mock dashboard structure stays in code

## Rollout Recommendation

### Phase 1

Enable in this order:

1. Blog
2. Knowledge Base
3. Products
4. Solutions
5. Accessories Overview
6. Site Copy files

This is the least risky real rollout path for the current repo.

### Phase 2

Hardening and go-live work:

- run `/admin` dry runs
- verify media upload behavior
- validate nested field saves
- confirm prerender and SEO output remain correct
- finalize auth and editorial process

## Technical Notes

### 1. Nested frontmatter

The loaders use `gray-matter` through `src/lib/frontmatter.ts`.

That means:

- nested frontmatter is supported
- products and solutions can use structured arrays safely
- accessories overview can use grouped structured content
- site-copy files can use typed list sections without turning routes into page builders

### 2. Media storage

The current direction remains:

- `media_folder: public/uploads`
- `public_folder: /uploads`

This matches static hosting and Vite build expectations.

### 3. GitHub backend

The draft uses:

```yaml
backend:
  name: github
  repo: samla/iotsight
  branch: main
```

### 4. Auth

The repo includes a Cloudflare Worker auth bridge scaffold, but production rollout still depends on:

- GitHub OAuth app setup
- Worker deployment
- callback validation
- `/admin` login test

Recommended project-specific rollout notes live in:

- `docs/decap-cms-config-draft.md`
- `docs/decap-auth-rollout.md`
- `docs/decap-cms-qa-checklist.md`
- `docs/cms-rollout-sequence.md`
- `docs/decap-cms-config-draft.zh-CN.md`

## Recommendation

Do not treat “collections exist in config” as proof that Decap rollout is done.

The correct interpretation of the current repo state is:

1. The file-backed CMS model is now substantially implemented.
2. The remaining work is rollout safety, editorial discipline, and auth go-live.
3. The next meaningful risk is operational, not architectural.
