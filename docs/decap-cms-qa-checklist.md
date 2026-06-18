# Decap CMS QA Checklist

Last updated: 2026-06-18

## Goal

Use this checklist before declaring the IoTEdges Decap CMS rollout production-ready.

This checklist assumes:

- `/admin` is reachable
- GitHub authentication is connected
- content is stored in this repository
- GitHub Actions remains the deployment gate
- `npm run verify:cms-preflight` already passes locally

## 1. Login and Access

- [ ] OAuth bridge `/healthz` returns `ok: true`
- [ ] `public/admin/config.yml` points to the intended auth worker domain
- [ ] `/admin/` loads without console crash
- [ ] GitHub login completes successfully
- [ ] unauthorized GitHub user cannot edit the repository through the CMS
- [ ] authorized editor can open all six collections
- [ ] logout works and clears the session

## 2. Blog Collection

- [ ] existing entries load in the list
- [ ] title, excerpt, date, author, category, image, related products, related resources, and body render in the editor
- [ ] creating a new blog post saves a valid Markdown file under `src/content/blog/`
- [ ] updating an existing blog post preserves frontmatter structure
- [ ] deleting a blog post removes the file cleanly
- [ ] related resource routes stay as plain route strings, not malformed objects

## 3. Knowledge Collection

- [ ] existing entries load in the list
- [ ] title, excerpt, category, primary keyword, related products, order, and body render in the editor
- [ ] creating a new knowledge article saves a valid Markdown file under `src/content/knowledge/`
- [ ] updating an article preserves frontmatter structure
- [ ] deleting an article removes the file cleanly

## 4. Product Collection

- [ ] existing product entries load in the list
- [ ] image, spec groups, selection guide, BOM groups, pre-sales FAQ, and body all render in the editor
- [ ] editing an existing product preserves valid nested frontmatter under `src/content/products/`
- [ ] editing nested spec groups does not break YAML structure
- [ ] compare links save as `href` + `label`
- [ ] FAQ items save as `question` + `answer`
- [ ] saved product still renders correctly on `/products/:id`

## 5. Solution Collection

- [ ] existing solution entries load in the list
- [ ] icon key, image, architecture image, detailed content, hardware, software, related products, related resources, and body all render in the editor
- [ ] icon key saves one of the supported values:
  - `zap`
  - `sun`
  - `droplets`
  - `sprout`
  - `snowflake`
  - `shield`
- [ ] editing an existing solution preserves valid Markdown and frontmatter under `src/content/solutions/`
- [ ] saved solution still renders correctly on `/solutions/:id`

## 6. Accessories And Site Copy

- [ ] Accessories overview loads in the editor
- [ ] overview cards, accessory groups, project kits, and CTA fields render correctly
- [ ] saving Accessories preserves file-based frontmatter structure
- [ ] Site Copy files load in the editor
- [ ] homepage, about, contact, gateway, and demo copy fields render correctly
- [ ] saving Site Copy preserves file-based frontmatter structure

## 7. Media Uploads

- [ ] image upload opens successfully from the editor
- [ ] uploaded file is written under `public/uploads/`
- [ ] saved frontmatter path uses `/uploads/...`
- [ ] uploaded image renders on the corresponding page after build
- [ ] deleting media from an entry does not leave broken YAML

## 8. Git and Workflow

- [ ] create action generates a readable CMS commit message
- [ ] update action generates a readable CMS commit message
- [ ] delete action generates a readable CMS commit message
- [ ] media upload generates a readable CMS commit message
- [ ] editorial workflow status is understandable to non-developer editors

## 9. Build and Deploy Gates

After one CMS-authored commit:

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] prerendered route still exists in `dist`
- [ ] sitemap still includes the content route
- [ ] page HTML still contains expected metadata and JSON-LD where applicable
- [ ] GitHub Actions deploy workflow passes end to end

## 10. Frontend Rendering

Check at least one updated page from each collection.

- [ ] blog list and blog detail render correctly
- [ ] knowledge list and knowledge detail render correctly
- [ ] product list and product detail render correctly
- [ ] solution list and solution detail render correctly
- [ ] accessories page renders correctly
- [ ] site copy updates render correctly on the intended marketing pages
- [ ] light theme remains readable
- [ ] dark theme remains readable
- [ ] no layout break from long text, nested lists, or missing optional fields

## 11. SEO Integrity

- [ ] slug remains stable after edit
- [ ] canonical route still matches the intended page route
- [ ] title and excerpt still flow into metadata correctly
- [ ] sitemap includes the edited route
- [ ] no `Untitled Product` / `Untitled Solution` / empty excerpt regressions appear in built HTML

## 12. Rollback Readiness

- [ ] editors know content changes are Git commits
- [ ] maintainers know how to revert a bad CMS commit in GitHub
- [ ] maintainers know how to inspect failed GitHub Actions logs
- [ ] maintainers know where OAuth bridge logs are stored

## Exit Criteria

The Decap rollout should be treated as production-ready only when:

1. all six collections pass their intended checks
2. Blog and Knowledge pass create and update checks
3. Products, Solutions, Accessories, and Site Copy pass edit and save-structure checks
4. media uploads work end to end
5. GitHub login is restricted to intended editors
6. a CMS-authored commit passes the full GitHub Actions deployment pipeline
7. rendered pages remain visually correct and SEO-safe
