# CMS Rollout Sequence

Last updated: 2026-06-18

## Goal

This document defines the minimum-risk order for turning on Decap CMS for IoTEdges.

The point is not to enable every collection at once. The point is to validate the editing flow in the simplest or most isolated content types first, then move into collections with heavier structured frontmatter or stronger page-layout coupling.

## Current Implemented Collections

The repo now contains these file-backed CMS targets:

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

## Recommended Order

Enable collections in this order:

1. Blog
2. Knowledge Base
3. Products
4. Solutions
5. Accessories Overview
6. Site Copy files

This order reflects real risk:

- Blog and Knowledge are the easiest Markdown-first collections.
- Products and Solutions have the heaviest structured frontmatter.
- Accessories is a single structured overview page.
- Site Copy files are safest after the main collections are already proven, because they affect important marketing routes directly.

## Phase 1: Blog

Why first:

- Lowest schema complexity
- Mostly title, excerpt, author, category, cover image, and Markdown body
- Lowest layout risk

Success criteria:

- Create a new post successfully
- Edit an existing post successfully
- Category select field behaves correctly
- Cover image upload works
- Markdown renders correctly after deployment

## Phase 2: Knowledge Base

Why next:

- Still Markdown-heavy
- Slightly more SEO-sensitive than Blog
- Good place to validate category control and primary keyword discipline

Success criteria:

- Existing pages load correctly in the editor
- Category select field behaves correctly
- `primaryKeyword` can be maintained consistently
- Related product links remain intact

## Phase 3: Products

Why later:

- Multi-layer structured frontmatter
- Directly affects product detail clarity and buyer confidence
- Higher risk of nested field breakage during editing

High-risk fields:

- `specGroups`
- `selectionGuide`
- `bomGroups`
- `preSalesFaq`
- `status`
- `category`

Success criteria:

- Existing product files load correctly in the editor
- Nested list fields preserve structure after save
- Product spec tables, FAQs, and compare links render correctly after deployment

## Phase 4: Solutions

Why next:

- Structured lists plus cross-linking behavior
- Affects CTA placement, related products, and related resources
- Higher risk of content-quality drift if opened too early

High-risk fields:

- `iconKey`
- `recommendedProductType`
- `recommendedUplink`
- `detailedContent`
- `relatedProducts`
- `relatedResources`

Success criteria:

- Existing solution files load correctly in the editor
- Controlled fields preserve current values
- Related products and related resources still render correctly
- Solution page CTA and section structure remain intact

## Phase 5: Accessories Overview

Why after Solutions:

- It is only one file, but it is still a structured overview page rather than a plain article
- It contains grouped lists, product-line mapping, and project-kit content
- It is a good bridge between collection-style content and single-file site copy

Success criteria:

- `src/content/accessories/accessories-overview.md` loads correctly
- Grouped list fields preserve structure after save
- The `/accessories` page still renders section order correctly
- Product-line accessory table and guide links remain intact

## Phase 6: Site Copy Files

Files in this phase:

- `src/content/site-copy/homepage.md`
- `src/content/site-copy/aboutpage.md`
- `src/content/site-copy/contactpage.md`
- `src/content/site-copy/gatewaypage.md`
- `src/content/site-copy/demopage.md`

Why last:

- These files directly affect core marketing routes
- They are safe only because layout is still controlled by code
- They should be enabled after the editor workflow has already been proven on the main content collections

Keep this boundary:

- CMS edits the copy
- Code still owns layout, mock UI, analytics wiring, live chat behavior, and quote form logic

Success criteria:

- Each file loads correctly in the editor
- Controlled text updates save without breaking page structure
- Homepage, About, Contact, Gateway, and Demo routes still render correctly after deployment
- No page loses required CTA, structured sections, or SEO output

## What Not To Do

Do not:

- Open every collection at once
- Let multiple editors start before dry-run validation
- Skip image rules before enabling uploads
- Treat successful login as proof that CMS rollout is complete

## Suggested Execution Rhythm

### Stage A

- Enable Blog
- Run the `/admin` dry run
- Fix schema or media issues

### Stage B

- Enable Knowledge Base
- Validate technical content editing

### Stage C

- Enable Products and Solutions
- Focus on nested fields, controlled labels, and page integrity

### Stage D

- Enable Accessories Overview
- Validate grouped content and internal route stability

### Stage E

- Enable Site Copy files
- Validate copy-only edits on core marketing routes

## Repeat These Checks For Every New Collection

Each time a new collection is enabled, repeat:

1. Login works
2. Existing content loads correctly in the editor
3. Controlled fields preserve valid existing values
4. Saved file structure stays stable
5. Deployment succeeds
6. Live page output is correct

## Related Docs

- `docs/cms-admin-dry-run-checklist.zh-CN.md`
- `docs/cms-admin-dry-run-checklist.md`
- `docs/cms-go-live-checklist.md`
- `docs/cms-go-live-checklist.zh-CN.md`
- `docs/decap-cms-draft.md`
- `docs/decap-cms-config-draft.zh-CN.md`

## Conclusion

For this project, the correct CMS rollout is:

- Blog first
- Knowledge Base second
- Products third
- Solutions fourth
- Accessories Overview fifth
- Site Copy files last

That sequence keeps risk low while preserving the current SEO, prerender, and deployment model.
