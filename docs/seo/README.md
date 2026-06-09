# IoTEdges SEO Databases

This folder contains structured planning databases for IoTEdges SEO content production.

## Databases

| File | Purpose | Status |
| --- | --- | --- |
| `solutions-topic-database.json` | Solution page topics, vertical applications, product fit, protocol fit, and internal linking targets. | Drafted |
| `products-topic-database.json` | Product page topics, protocol-based product pages, connectivity-based product pages, IO pages, and product-solution hybrid pages. | Drafted |
| `knowledge-base-topic-database.json` | Technical knowledge base topics for MQTT, Modbus, RS485, LoRa, RTU, Remote IO, PLC, OPC UA, SCADA, cellular, WiFi, Ethernet, and edge computing. | Drafted |
| `case-study-topic-database.json` | Reusable case study records for solution credibility, product proof, regional storytelling, and internal linking. | Drafted |
| `long-tail-article-topic-database.json` | Blog and knowledge article topics for comparisons, how-to guides, troubleshooting, buyer guides, and application guides. | Drafted |
| `first-30-pages-priority-plan.json` | First-batch publishing plan across product, solution, knowledge base, blog, and case study pages. | Drafted |
| `content-brief-templates.json` | Reusable brief templates for product, solution, knowledge base, article, buyer guide, troubleshooting, and case study pages. | Drafted |
| `factual-source-cards.json` | Source-backed factual cards for MQTT, Modbus, RS485, LoRaWAN, OPC UA, 4G LTE, RTU, Remote IO, SCADA, and edge computing. | Drafted |
| `internal-link-rules.json` | Machine-readable internal link rules for page types, topic clusters, first-batch dependencies, and publishing checks. | Drafted |
| `content-production-workflow.json` | Workflow state machine for topic selection, capability checks, briefs, fact checks, drafting, review, and publishing. | Drafted |
| `first-5-content-briefs.json` | First controlled batch of product page briefs for Industrial IoT Gateway, MQTT Gateway, Modbus to MQTT Gateway, Industrial RTU, and 4G RTU. | Drafted |
| `self-developed-product-spec-baseline.json` | Self-developed first-generation product configuration baseline for Ethernet-only 100-series wired baseline models plus separate 4G, WiFi and LoRa/LoRaWAN wireless uplink variants. | Planning baseline |
| `capability-check-matrix.json` | Mainstream capability baseline for IoTEdges self-developed product pages; must be validated by engineering before final SEO claims. | Planning baseline |
| `product-model-definition-draft.json` | Draft IoTEdges self-developed product family and model tiers based on mainstream industrial IoT configurations. | Draft model definition |
| `product-protocol-support-matrix.json` | Protocol support tiers for each planned model, separating baseline Modbus/MQTT gateways from advanced OPC UA/BACnet/CAN edge gateway claims. | Planning baseline |
| `product-io-interface-matrix.json` | Port, interface and IO baseline for each planned model, including DI, DO, AI, AO, relay, RS485, Ethernet and variant mapping. | Planning baseline |
| `first-engineering-requirements-draft.json` | First engineering requirement draft for IER-100, IER-140 and IEIO-100, covering hardware, firmware, validation and SEO claim boundaries. | Draft requirements |
| `confirmed-product-page-briefs.json` | Model-specific product page briefs for the confirmed IoTEdges lineup, including gateway, RTU, Remote IO and LoRaWAN product pages. | Draft briefs |
| `confirmed-first-product-publishing-plan.json` | Publishing priority plan for confirmed model-specific product pages and validation gates before Markdown drafting. | Draft plan |
| `first-product-capability-validation-checklist.json` | Capability validation checklist for IEIO-100, IER-100 and IEG-100 before model-specific Markdown product pages are drafted. | Draft checklist |
| `ieio-100-modbus-register-map-draft.json` | Draft Modbus register map for IEIO-100 Remote IO variants, including address convention, function codes, IO register mapping, exception behavior and validation test cases. | Draft register map |
| `ieg-100-modbus-mqtt-behavior-draft.json` | Draft mainstream Modbus polling and MQTT publishing behavior for IEG-100, including capacity targets, polling rules, topic design, JSON payloads, diagnostics and validation test cases. | Draft firmware behavior |
| `first-product-electrical-validation-targets.json` | Draft mainstream electrical validation targets for first-generation products, covering power input, DI, DO/relay, AI, AO, RS485, Ethernet, environmental targets and SEO claim gates. | Draft validation targets |
| `first-product-prototype-test-report-templates.json` | Reusable prototype test report templates for DI, relay, AI, AO, RS485, Ethernet, power input and IEG-100 Modbus-to-MQTT validation. | Draft test templates |
| `product-page-markdown-briefs/` | Safe-scope Markdown briefs for first model-specific product pages. These are not final public pages and must pass capability validation before publishing. | Draft briefs |
| `first-batch-product-page-capability-review-matrix.json` | Claim review matrix for the first-batch model-specific page briefs, separating safe, conditional, blocked and forbidden claims before public drafting. | Draft review matrix |
| `first-batch-public-draft-conversion-plan.json` | Public draft conversion plan that prioritizes which safe-scope briefs can become public website drafts and which should wait for prototype or module validation. | Draft conversion plan |
| `supplier-datasheet-request-checklist.json` | Optional sourcing/OEM reference checklist if external modules, enclosures, manufacturing or certificates need to be evaluated. | Optional reference |
| `supplier-response-evaluation-matrix.json` | Optional matrix for evaluating sourcing/OEM responses; not the main source of IoTEdges product definition. | Optional reference |
| `supplier-outreach-email-templates.json` | Chinese supplier outreach templates for optional module, enclosure, certification, sample or OEM/ODM communication. | Optional reference |

## Status Values

- `not_started`
- `drafting`
- `ready_for_review`
- `approved`
- `published`
- `needs_update`

## Recommended Workflow

1. Use `self-developed-product-spec-baseline.json` as the source of truth for first-generation product planning.
2. Use `product-protocol-support-matrix.json` to decide which protocol claims belong to each model.
3. Use `product-io-interface-matrix.json` to decide which port and IO claims belong to each model.
4. Use `first-engineering-requirements-draft.json` as the first engineering discussion document for IER-100, IER-140 and IEIO-100.
5. Use `confirmed-product-page-briefs.json` for model-specific product page planning.
6. Use `confirmed-first-product-publishing-plan.json` to decide which model-specific product pages enter validation first.
7. Use `first-product-capability-validation-checklist.json` before drafting the first model-specific Markdown product pages.
8. Use `ieio-100-modbus-register-map-draft.json` as the engineering review draft for IEIO-100 firmware and Modbus validation.
9. Use `ieg-100-modbus-mqtt-behavior-draft.json` as the engineering review draft for IEG-100 Modbus polling, MQTT payload and gateway diagnostics.
10. Use `first-product-electrical-validation-targets.json` to review DI, DO/relay, AI, AO, RS485, Ethernet and power-input engineering targets before public specifications are written.
11. Use `first-product-prototype-test-report-templates.json` when real prototype testing begins and link completed reports back to the capability checklist.
12. Use `product-page-markdown-briefs/` for safe-scope model page structure review before public product pages are drafted.
13. Use `first-batch-product-page-capability-review-matrix.json` to check safe, conditional, blocked and forbidden claims before converting briefs into public pages.
14. Use `first-batch-public-draft-conversion-plan.json` to decide which safe-scope briefs can become public drafts and which should wait for prototype validation.
15. Validate product capabilities before publishing final product specifications; use `capability-check-matrix.json` as the planning baseline, not as confirmed specs.
16. Add factual source cards before generating technical articles.
17. Generate public Markdown content only after topic priority, product fit, capability checks, and internal links are confirmed.
18. Follow `content-production-workflow.json` for brief, fact-check, review, and publishing gates.
19. Update `docs/seo-roadmap.md` whenever database or publishing progress changes.
