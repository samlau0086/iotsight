# IoTEdges CMS Field Glossary

Last updated: 2026-06-18

## 1. Purpose

This glossary explains the meaning of key Decap CMS fields and controlled values so editors use them consistently.

It does not replace `public/admin/config.yml`. It explains what fields mean, when to use them, and what to avoid.

Applies to:

- Blog
- Knowledge Base
- Products
- Solutions

## 2. Common Fields

### `id`

Used for:

- stable page identity
- URL generation in many collections

Rules:

- do not change casually after publish
- use lowercase English letters, numbers, and hyphens only

Examples:

- `how-to-choose-modbus-mqtt-gateway`
- `ier-140-4g-remote-relay-rtu`

### `title`

Used for:

- page H1
- list-card title
- one of the primary SEO title sources

Rules:

- describe the actual topic clearly
- do not use internal notes
- avoid empty or vague titles

### `excerpt`

Used for:

- list-card summary
- SEO description candidate

Rules:

- write a complete short value statement
- do not just repeat the title

### `order`

Used for:

- ordering items in list pages

Rules:

- use integers
- lower values usually sort first

### `body`

Used for:

- Markdown main content

Rules:

- use Markdown
- avoid large uncontrolled HTML blocks

## 3. Blog Fields

### `author`

Current controlled values:

- `Engineering Team`
- `Product Management`
- `Customer Success`

Rules:

- use the controlled team labels only
- do not mix person names, abbreviations, or case variants

### `category`

Current controlled values:

- `Buyer Guide`
- `Industry Trends`
- `Hardware Guide`
- `Case Studies`

Use:

- `Buyer Guide` for procurement, selection, and comparison content
- `Industry Trends` for market or directional content
- `Hardware Guide` for devices, interfaces, and deployment notes
- `Case Studies` for project examples and outcome stories

### `relatedProducts`

Use:

- product slugs only

Do not use:

- titles
- full URLs
- models without the slug form

### `relatedResources`

Use:

- site-relative routes such as `/knowledge/modbus`

Do not use:

- full external URLs
- free-form notes

## 4. Knowledge Fields

### `category`

This field is a content-type label, not a keyword bucket.

Current examples:

- `Protocol Guide`
- `MQTT Guide`
- `Wiring Guide`
- `Sensor Wiring Guide`
- `IO Guide`
- `Control Guide`
- `Selection Guide`
- `Accessory Guide`
- `Access Control Guide`
- `Connectivity Guide`
- `Application Guide`

### `primaryKeyword`

Use:

- the main protocol or search phrase that the page should focus on

Rule:

- keep it narrow and stable

## 5. Product Fields

### `model`

Use:

- the canonical model code such as `IEG-100` or `IER-140`

Rule:

- do not improvise alternate spellings once the model is live

### `status`

Current controlled values:

- `Published`
- `Available for project inquiry`
- `Preview`
- `Draft`

Use:

- `Published` for fully live-ready pages
- `Available for project inquiry` for valid inquiry-led pages
- `Preview` for roadmap-facing but not final pages
- `Draft` for not-ready content

### `route`

Use:

- the canonical site-relative product path

Example:

- `/products/ieg-100-ethernet-industrial-iot-gateway`

Rule:

- changing this changes page identity and SEO path expectations

### `specGroups`

Use:

- structured specs such as communication, I/O, protocols, power, environment, and control scope

Rule:

- keep key specs here instead of burying them only in `body`

### `selectionGuide`

Use:

- project-fit guidance
- wrong-fit boundary conditions

Rule:

- keep items short and practical

### `bomGroups`

Use:

- supporting accessories and project kit suggestions

Rule:

- list actual useful items, not generic marketing copy

### `preSalesFaq`

Use:

- real buyer questions about protocol support, delivery, samples, OEM or ODM scope, documentation, and certifications

## 6. Solution Fields

### `iconKey`

Use:

- the controlled icon mapping expected by the frontend

Rule:

- use only values defined in the CMS select field

### `recommendedProductType`

Use:

- a short, controlled recommendation such as `Gateway` or `RTU and Remote IO`

Rule:

- do not turn it into a sentence

### `recommendedUplink`

Use:

- a short controlled uplink direction such as `Ethernet first` or `4G first`

### `link`

Use:

- the canonical site-relative solution path

Example:

- `/solutions/factory-energy`

### `detailedContent`, `hardware`, `software`

Use:

- structured, readable page-building content that the template already expects

Rule:

- do not overload one field when another existing structured field is a better fit

## 7. Related Docs

- [docs/cms-editor-handbook.md](./cms-editor-handbook.md)
- [docs/decap-cms-config-draft.md](./decap-cms-config-draft.md)
- [docs/media-asset-guidelines.md](./media-asset-guidelines.md)
