# IoTEdges Content Model Schema

Last updated: 2026-06-18

## Goal

This schema defines the content fields that a future admin panel or CMS is allowed to manage.

The frontend keeps layout, section order, SEO rendering, and prerender behavior under code control.
The CMS should only manage structured content fields and Markdown body content.

Do not use a free-form page builder for product pages, solution pages, blog posts, knowledge pages, or the accessories overview page.

Parser baseline:

- Markdown frontmatter is parsed with `gray-matter`
- Nested arrays and objects are supported at the content parsing layer
- CMS migration work is now mainly a schema and data-location problem, not a parser limitation

## General Rules

- Slugs must stay stable after publishing.
- Rich text body content should be Markdown, not arbitrary HTML blocks.
- Product, solution, blog, and knowledge page layout must remain template-driven by the frontend.
- Section order should stay controlled by code so design and SEO output remain predictable.
- Image fields should store image URLs or managed asset references, not inline base64 content.
- Structured arrays such as specs, FAQs, BOM items, and related links should stay as typed fields.
- Site-level marketing copy should use small single-file models instead of loose global settings blobs.
- Product and solution pages should not depend on generic runtime fallback copy when structured content is present.

## 1. Product Schema

Use this schema for `/products/:id`.

### Required fields

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Stable slug, for example `ier-140-4g-remote-relay-rtu` |
| `title` | string | Product page H1 |
| `excerpt` | string | Product list summary and SEO description source |
| `category` | string | For example `Industrial RTU` |
| `model` | string | For example `IER-140` |
| `primaryKeyword` | string | Main SEO term |
| `route` | string | Canonical route |
| `order` | number | Product list ordering |
| `imageUrl` | string | Product hero/list image |
| `body` | markdown | Main body content |

### Required structured sections

| Field | Type | Notes |
| --- | --- | --- |
| `specGroups` | array | Fixed section on product detail page |
| `selectionGuide` | object | Fixed section on product detail page |
| `bomGroups` | array | Fixed section on product detail page |
| `preSalesFaq` | array | Fixed section on product detail page |

### Product object shape

```json
{
  "id": "ier-140-4g-remote-relay-rtu",
  "title": "IER-140 4G Remote Relay RTU",
  "excerpt": "4G LTE Cat1 remote relay RTU with MQTT, 2DI, 2DO, RS485 and remote control features.",
  "imageUrl": "https://example.com/products/ier-140-main.jpg",
  "category": "4G Remote Relay RTU",
  "model": "IER-140",
  "primaryKeyword": "IoT remote relay RTU",
  "route": "/products/ier-140-4g-remote-relay-rtu",
  "order": 7,
  "specGroups": [
    {
      "title": "Hardware I/O",
      "specs": [
        { "label": "Digital Inputs", "value": "2DI" },
        { "label": "Digital Outputs", "value": "2DO or relay outputs" },
        { "label": "Field Interface", "value": "1 x RS485" }
      ]
    }
  ],
  "selectionGuide": {
    "chooseWhen": [
      "The site is remote and needs 4G plus basic local relay control."
    ],
    "notFitWhen": [
      "You need more local signals such as 4DI, 4DO, or analog inputs."
    ],
    "compareLinks": [
      { "href": "/products/ier-141-4g-pump-valve-rtu", "label": "Compare with IER-141 Pump and Valve RTU" }
    ]
  },
  "bomGroups": [
    {
      "title": "Remote Cabinet BOM",
      "items": [
        "9-36VDC power supply or site DC source",
        "External 4G antenna",
        "SIM card with APN settings"
      ]
    }
  ],
  "preSalesFaq": [
    {
      "question": "Can relay behavior and timing be adapted for our control workflow?",
      "answer": "Usually yes. Pulse logic, schedule behavior, alarm rules, and command mapping can often be reviewed during project setup."
    }
  ],
  "body": "## 4G Remote Relay RTU\\n\\nMain body content here."
}
```

### Product section rules

- `specGroups` should only use fixed groups such as `Hardware I/O`, `Communication`, `Protocols`, `Power & Mounting`, `Environment`, `Platform Scope`, `Telemetry & Control`, `Operations Interface`.
- `selectionGuide` should stay concise and commercial.
- `bomGroups` should list supporting hardware, wiring, sensors, and setup items.
- `preSalesFaq` should answer recurring buyer questions, not duplicate the datasheet.
- `body` can contain application fit, architecture, accessory notes, related knowledge, and FAQ content that is still useful in long-form reading.

## 2. Solution Schema

Use this schema for `/solutions/:id`.

### Required fields

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Stable slug |
| `title` | string | Solution page H1 |
| `description` | string | Solution list summary and hero description |
| `image` | string | Hero/list image |
| `recommendedProductType` | string | For quick-fit blocks |
| `recommendedUplink` | string | For quick-fit blocks |
| `deploymentEnvironment` | string | For quick-fit blocks |
| `detailedContent` | array of strings | Hero/body summary paragraphs |
| `hardware` | array of strings | Hardware requirements section |
| `software` | array of strings | Software capabilities section |

### Optional fields

| Field | Type | Notes |
| --- | --- | --- |
| `relatedProducts` | array | Internal product links |
| `relatedResources` | array | Blog or knowledge links |
| `architectureImage` | string | Supporting solution visual |

### Solution object shape

```json
{
  "id": "water-management",
  "title": "Water Management",
  "description": "Remote monitoring for pump stations, tank levels, flow meters, and water quality sensors.",
  "image": "https://example.com/solutions/water.jpg",
  "recommendedProductType": "RTU and Remote IO",
  "recommendedUplink": "Ethernet or 4G",
  "deploymentEnvironment": "Pump stations, tanks, distributed utility cabinets",
  "detailedContent": [
    "Water distribution and treatment systems need reliable telemetry from pumps, tanks, valves, meters, and sensors."
  ],
  "hardware": [
    "IER-141 4G Pump & Valve RTU",
    "IEIO-100 Remote IO modules"
  ],
  "software": [
    "Pump station and tank dashboard",
    "Level, pressure, and flow trend analysis"
  ],
  "relatedProducts": [
    { "title": "IER-141 4G Pump & Valve RTU", "href": "/products/ier-141-4g-pump-valve-rtu" }
  ],
  "relatedResources": [
    { "title": "Pump Control RTU Guide", "href": "/knowledge/pump-control-rtu" }
  ]
}
```

## 3. Blog Schema

Use this schema for `/blog/:id`.

### Required fields

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Stable slug |
| `title` | string | Blog post H1 |
| `excerpt` | string | Blog list summary and SEO description source |
| `date` | string | Human-readable publish date |
| `author` | string | Display author |
| `category` | string | Buyer Guide, Protocol Guide, Case Study, etc. |
| `imageUrl` | string | Hero/list image |
| `body` | markdown | Main article body |

### Optional fields

| Field | Type | Notes |
| --- | --- | --- |
| `relatedProducts` | array of product IDs | Used to build related product links |
| `relatedResources` | array of routes | Blog, knowledge, or solution links |
| `order` | number | If manual ordering is needed |

### Blog object shape

```json
{
  "id": "how-to-choose-modbus-mqtt-gateway",
  "title": "How to Choose the Right Modbus to MQTT Gateway",
  "excerpt": "A practical buyer guide for Modbus data collection and MQTT telemetry projects.",
  "date": "April 02, 2026",
  "author": "Product Management",
  "category": "Buyer Guide",
  "imageUrl": "https://example.com/blog/modbus-mqtt.jpg",
  "relatedProducts": [
    "ieg-100-ethernet-industrial-iot-gateway"
  ],
  "relatedResources": [
    "/knowledge/modbus",
    "/products/ieg-100-ethernet-industrial-iot-gateway"
  ],
  "body": "# How to Choose...\\n\\nArticle body here."
}
```

## 4. Knowledge Base Schema

Use this schema for `/knowledge/:id`.

### Required fields

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Stable slug |
| `title` | string | Knowledge page H1 |
| `excerpt` | string | Knowledge list summary and SEO description source |
| `category` | string | Protocol Guide, Wiring Guide, etc. |
| `primaryKeyword` | string | Main search term |
| `body` | markdown | Main knowledge article |

### Optional fields

| Field | Type | Notes |
| --- | --- | --- |
| `relatedProducts` | array of product IDs | Used to render related product cards |
| `order` | number | List ordering |

## 5. Image Rules

- Products should always have a main image for both list and detail pages.
- Blog posts should always have a hero image.
- Solution pages should always have a list/hero image and may have an extra architecture image.
- If no final product photo exists yet, use a temporary controlled placeholder image, not an empty layout.
- Replace temporary placeholders with real product photos or branded renders later without changing page structure.
- Missing product or solution hero images are treated as invalid content during verification in the current repo.

## 6. Accessories Overview Schema

Use this schema for `/accessories`.

This is a single structured overview page, not a directory of accessory detail pages.

### Required fields

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Stable page identifier such as `accessories-overview` |
| `eyebrow` | string | Short hero label |
| `title` | string | Page H1 |
| `description` | string | Hero summary paragraph |
| `overviewCards` | array | Three short buyer-facing orientation cards |
| `groups` | array | Main accessory category cards |
| `selectionGuides` | array | Internal links to knowledge pages |
| `productAccessoryMap` | array | Table rows linking product lines to common accessory sets |
| `projectKits` | array | Bundle examples used on the page |
| `ctaLabel` | string | CTA button label |
| `ctaHref` | string | Site-relative CTA path |

### Accessories object shape

```json
{
  "id": "accessories-overview",
  "eyebrow": "Project Accessories",
  "title": "Industrial IoT accessories for RTU, gateway and Remote IO projects",
  "description": "Recommended and compatible accessories for IoTEdges deployments.",
  "overviewCards": [
    {
      "title": "Project accessory guidance",
      "text": "Accessories are listed as recommended or compatible project items.",
      "iconKey": "shield-check"
    }
  ],
  "groups": [
    {
      "title": "RS485 And Modbus Wiring",
      "description": "Field wiring accessories for Modbus RTU and remote IO cabinets.",
      "iconKey": "cable",
      "items": [
        "Shielded twisted-pair RS485 cable",
        "Pluggable terminal blocks"
      ]
    }
  ],
  "selectionGuides": [
    {
      "title": "RS485 Cable and Shielding Guide for Modbus RTU Installations",
      "href": "/knowledge/rs485-cable-shielding-guide",
      "summary": "Cable, shielding and surge protection notes for RS485 projects."
    }
  ],
  "productAccessoryMap": [
    {
      "product": "IEG-100 / IEG-120 Industrial IoT Gateway",
      "href": "/products/ieg-100-ethernet-industrial-iot-gateway",
      "accessories": "RS485 cable, Modbus meter, terminal blocks, Ethernet patch cable"
    }
  ],
  "projectKits": [
    {
      "title": "Modbus MQTT Gateway Kit",
      "iconKey": "router",
      "contents": [
        "IEG gateway",
        "RS485 cable",
        "register map worksheet"
      ]
    }
  ],
  "ctaLabel": "Request accessory BOM",
  "ctaHref": "/contact"
}
```

## 7. Homepage Site Copy Schema

Use this schema family for small site-owned copy sources such as:

- `src/content/site-copy/homepage.md`
- `src/content/site-copy/aboutpage.md`
- `src/content/site-copy/contactpage.md`
- `src/content/site-copy/gatewaypage.md`
- `src/content/site-copy/demopage.md`

This model is intentionally narrow. It controls headline and support copy only, not homepage layout, product-card selection logic, or the dashboard mockup.

### Required fields

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Stable file identifier such as `homepage` |
| `heroEyebrow` | string | Small hero label |
| `heroTitle` | string | Homepage H1 |
| `heroDescription` | string | Main hero paragraph |
| `stats` | array | Small metric strip under the hero |
| `trustEyebrow` | string | Trust bar label |
| `trustPills` | array | Short feature/support pills |
| `problemsTitle` | string | Problems section heading |
| `problemsDescription` | string | Problems section intro |
| `problemCards` | array | Structured problem cards |
| `solutionTitle` | string | Solution section heading |
| `solutionDescription` | string | Solution section intro |
| `solutionSteps` | array | Fixed sequence labels for the solution flow |
| `productsTitle` | string | Product section heading |
| `productsDescription` | string | Product section intro |
| `bottomCtaTitle` | string | Final CTA heading |
| `bottomCtaDescription` | string | Final CTA description |

### Rules

- Keep the homepage section order fixed in code.
- Keep product cards and dashboard illustration under code control.
- Use this file only for stable marketing copy that editors may need to tune over time.
- Use the same approach for About-page copy: controlled text blocks, fixed layout, no free-form builder.
- Use the same approach for Contact-page copy: hero, intro, contact details, and FAQ copy can move to content files, while submission logic stays in code.
- Use the same approach for Gateway-page copy: hero text, model summaries, supporting principles, and CTA copy can move to content files, while card layout and routing stay in code.
- Use the same approach for Demo-page copy: explanatory text, CTA labels, and architecture notes can move to content files, while the mock dashboard structure and simulated telemetry stay in code.

## 8. CMS Constraints

If a backend is added, it should follow these rules:

- Products, solutions, blog posts, and knowledge pages must be separate content types.
- Do not let editors add, remove, or reorder frontend sections arbitrarily.
- Do not use a generic WYSIWYG page builder for product or solution pages.
- Do not let editors inject arbitrary HTML, scripts, or inline CSS.
- Prefer Markdown + structured fields over rich free-form editors.
- Prerendering should still happen at build time from CMS-exported or CMS-fetched data.

## 9. Recommended Backend Paths

### Option A: Git-based CMS

Recommended first.

- Content stays in the repo
- GitHub Actions remains the build and deploy source
- Existing Markdown and prerender flow stays close to current architecture

Good fit:

- Decap CMS
- A custom admin UI that writes Markdown/JSON back to the repo

### Option B: Headless CMS

Allowed if it still supports build-time fetch and strict schema control.

Requirements:

- Build-time data fetch
- Stable slugs
- Structured fields
- Markdown body
- No free-form page builder

## 10. Migration Guidance

If the site moves from file-based content to CMS-managed content:

1. Keep the current route structure unchanged.
2. Keep prerendered output unchanged.
3. Move field sets one content type at a time.
4. Start with Blog and Knowledge Base first.
5. Migrate Products only after the structured product schema is stable.
6. Keep `specGroups`, `selectionGuide`, `bomGroups`, `preSalesFaq`, and accessories-page sections as structured arrays, not plain rich text.
