# IoTEdges CMS Editor Handbook

Last updated: 2026-06-18

## 1. Scope

This handbook is for editors using Decap CMS to manage:

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

This is not a developer guide. The purpose is to update content without breaking site structure, SEO, or page layout assumptions.

## 2. Login Entry

CMS admin URL:

- `https://iotedges.com/admin/`

Login method:

- GitHub OAuth

If login fails, check:

- `https://cms-auth.iotedges.com/healthz`
- GitHub OAuth App callback URL equals `https://cms-auth.iotedges.com/callback`

For troubleshooting, use [docs/cms-troubleshooting.md](./cms-troubleshooting.md).

## 3. What To Edit In Each Collection

### Blog

Use Blog for:

- buyer guides
- industry trend posts
- application walkthroughs
- product selection articles

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
- `body`

### Knowledge Base

Use Knowledge Base for:

- protocol explainers
- interface and wiring guidance
- industrial communication topics such as MQTT, Modbus, and RS485

Key fields:

- `id`
- `title`
- `excerpt`
- `category`
- `primaryKeyword`
- `relatedProducts`
- `body`

### Products

Use Products to maintain:

- product title and summary
- hero image
- model code
- structured specs
- FAQ
- selection guidance
- accessory suggestions

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

### Solutions

Use Solutions to maintain:

- solution title and description
- hero image and architecture image
- recommended product type and uplink
- detailed content blocks
- hardware and software sections
- related products and related resources

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

### Accessories Overview

Use Accessories for structured overview content only.

Edit:

- overview cards
- accessory groups
- project kits
- CTA labels and links

Do not treat this collection as a free-form accessory page builder.

### Site Copy

Use Site Copy for controlled marketing copy only.

Edit:

- headlines
- descriptions
- CTA labels
- CTA links
- list-style supporting content

Do not use Site Copy fields to redesign page layout or introduce new sections that the frontend does not support.

## 4. Editing Rules

- Do not casually change `id`, `route`, or `link` after a page is live.
- Keep taxonomy values inside the controlled options in the CMS.
- Use Markdown for body content. Avoid large raw HTML blocks.
- Keep product and solution claims aligned with validated specs only.
- Treat image fields as production assets, not temporary placeholders.

## 5. Before Saving

Check:

- required fields are filled
- slugs and routes were not changed unintentionally
- uploaded images resolve under `/uploads/...`
- list fields remain in the intended order
- frontmatter still matches the collection structure

## 6. After Saving

Confirm:

- the CMS save completed successfully
- a draft, workflow item, or Git change was created
- the deployment workflow ran if applicable
- the live page still renders correctly

Use [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md) for end-to-end validation.

## 7. Related Docs

- [docs/decap-cms-config-draft.md](./decap-cms-config-draft.md)
- [docs/cms-field-glossary.md](./cms-field-glossary.md)
- [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md)
- [docs/cms-rollout-sequence.md](./cms-rollout-sequence.md)
- [docs/media-asset-guidelines.md](./media-asset-guidelines.md)
- [docs/cms-go-live-checklist.md](./cms-go-live-checklist.md)
- [docs/cms-troubleshooting.md](./cms-troubleshooting.md)
