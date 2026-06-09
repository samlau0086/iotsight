# IoTEdges SEO Content Roadmap

Last updated: 2026-06-08

This roadmap is the working source of truth for IoTEdges SEO content planning. When topic research, page creation, content generation, internal linking, or publishing progresses, update this file.

## 1. Goal

Build topical authority for industrial IoT device exports around RTU, MQTT gateways, LoRa gateways, Remote IO, edge controllers, industrial protocols, remote monitoring, and vertical solutions.

Primary SEO goals:

- Rank for commercial product keywords such as `industrial RTU`, `MQTT gateway`, `LoRa gateway`, `remote IO module`, and `industrial IoT gateway`.
- Build technical authority around `Modbus`, `RS485`, `MQTT`, `LoRa`, `OPC UA`, `PLC`, `4G`, `WiFi`, and Ethernet-based industrial communication.
- Capture solution intent around energy, water, solar, factory, agriculture, environment, telecom, oil and gas, cold chain, and OEM remote monitoring.
- Use Markdown-based content and build-time prerendering so blog and solution pages are SEO friendly.

## 2. Progress Tracker

| Workstream | Status | Notes |
| --- | --- | --- |
| Website brand migration to IoTEdges | Done | Brand, metadata, email, PM2 name, and default deploy path updated. |
| Markdown blog pipeline | Done | Blog posts load from `src/content/blog/*.md`. |
| Blog SEO prerendering | Done | Build creates static HTML for blog and selected solution routes. |
| Initial solutions taxonomy | Done | Converted into structured topic database at `docs/seo/solutions-topic-database.json`. |
| Safe-scope model page Markdown briefs | Done | Created internal Markdown briefs for all first-batch model-specific pages under `docs/seo/product-page-markdown-briefs/`. |
| First-batch product claim review | Done | Created safe/conditional/blocked/forbidden claim matrix at `docs/seo/first-batch-product-page-capability-review-matrix.json`. |
| Public draft conversion plan | Done | Created first-batch public draft conversion plan at `docs/seo/first-batch-public-draft-conversion-plan.json`. |
| Public-safe product draft pages | In progress | Added product Markdown pipeline and public-safe drafts for IEG-100, IEIO-100 and IER-100 under `src/content/products/`. |
| Expanded product taxonomy | Done | Converted into structured topic database at `docs/seo/products-topic-database.json`; still needs keyword validation before publishing pages. |
| Topic authority database | Drafted | Solutions, products, knowledge base, initial case studies, and long-tail article databases drafted under `docs/seo/`. |
| Knowledge fact database | In progress | Knowledge topics drafted and first factual source cards created at `docs/seo/factual-source-cards.json`; add more source cards before large-scale article generation. |
| Case library | Drafted | First 30 reusable case records created at `docs/seo/case-study-topic-database.json`; target remains 100+ cases. |
| Article templates | Not started | Need templates for product, solution, knowledge base, comparison, how-to, troubleshooting, case study. |
| Internal link map | Not started | Needs product-solution-knowledge-case-blog linking rules. |
| Review workflow | Not started | Planner, researcher, writer, SEO reviewer, fact checker, publisher. |

Status values:

- `Not started`
- `Drafted`
- `In progress`
- `Ready for review`
- `Published`
- `Done`

## 3. Product SEO Expansion

The current product list is too narrow for SEO if it only includes:

- RTU
- MQTT Gateway
- LoRa Gateway
- Remote IO
- Edge Controller

For industrial IoT SEO, product pages should cover both base product categories and modifier combinations. Buyers often search with protocol, network, interface, or application qualifiers.

### 3.1 Core Product Categories

| Category | Priority | SEO Role |
| --- | --- | --- |
| Industrial RTU | P1 | Core product pillar for remote telemetry, water, pump, oil and gas, and SCADA. |
| MQTT Gateway | P1 | Core product pillar for cloud connectivity and Modbus-to-MQTT use cases. |
| LoRa Gateway | P1 | Core product pillar for long-range wireless monitoring. |
| Remote IO Module | P1 | Core product pillar for distributed DI/DO/AI/AO monitoring and control. |
| Edge Controller | P1 | Core product pillar for edge computing, protocol conversion, and local automation. |
| Industrial IoT Gateway | P1 | Umbrella commercial keyword connecting all gateway products. |
| Modbus Gateway | P1 | High-value protocol product keyword. |
| Cellular IoT Gateway | P1 | High-value connectivity keyword for remote sites. |
| Serial Device Server | P2 | Useful for RS485/RS232-to-Ethernet demand. |
| Protocol Converter | P2 | Bridges Modbus, MQTT, OPC UA, TCP/IP, serial protocols. |
| Data Acquisition Gateway | P2 | Useful for factory, energy, and SCADA acquisition searches. |
| Industrial Router | P2 | Relevant when gateway includes 4G router behavior. |
| IIoT Edge Gateway | P2 | Enterprise/industrial search wording. |

### 3.2 Protocol-Based Product Pages

These pages capture buyers who search by protocol.

| Product Page | Priority | Parent |
| --- | --- | --- |
| Modbus RTU Gateway | P1 | Modbus Gateway |
| Modbus TCP Gateway | P1 | Modbus Gateway |
| Modbus to MQTT Gateway | P1 | MQTT Gateway |
| RS485 to MQTT Gateway | P1 | MQTT Gateway |
| RS485 Gateway | P1 | Industrial IoT Gateway |
| RS232 to Ethernet Gateway | P2 | Serial Device Server |
| OPC UA Gateway | P2 | Protocol Converter |
| PLC to MQTT Gateway | P2 | MQTT Gateway |
| BACnet Gateway | P3 | Protocol Converter |
| CAN Bus Gateway | P3 | Protocol Converter |
| Ethernet IP Gateway | P3 | Protocol Converter |
| MQTT Edge Gateway | P1 | MQTT Gateway |

### 3.3 Connectivity-Based Product Pages

These pages capture searches that include communication method or network environment.

| Product Page | Priority | Parent |
| --- | --- | --- |
| 4G RTU | P1 | Industrial RTU |
| LTE RTU | P1 | Industrial RTU |
| Cellular RTU | P1 | Industrial RTU |
| Ethernet RTU | P2 | Industrial RTU |
| WiFi RTU | P2 | Industrial RTU |
| LoRa RTU | P2 | Industrial RTU |
| 4G MQTT Gateway | P1 | MQTT Gateway |
| LTE MQTT Gateway | P1 | MQTT Gateway |
| WiFi MQTT Gateway | P2 | MQTT Gateway |
| Ethernet MQTT Gateway | P2 | MQTT Gateway |
| LoRa MQTT Gateway | P2 | MQTT Gateway |
| 4G Industrial IoT Gateway | P1 | Industrial IoT Gateway |
| WiFi Industrial IoT Gateway | P2 | Industrial IoT Gateway |
| Ethernet Industrial Gateway | P2 | Industrial IoT Gateway |
| 5G Industrial Gateway | Out of scope | Not planned for the first-generation IoTEdges roadmap. |
| LoRaWAN Gateway | P1 | LoRa Gateway |
| Outdoor LoRa Gateway | P2 | LoRa Gateway |
| Industrial LoRa Gateway | P1 | LoRa Gateway |

### 3.4 IO and Interface-Based Product Pages

These pages match engineering searches.

| Product Page | Priority | Parent |
| --- | --- | --- |
| Digital Input Module | P2 | Remote IO |
| Digital Output Module | P2 | Remote IO |
| Analog Input Module | P2 | Remote IO |
| Analog Output Module | P2 | Remote IO |
| Relay Output Module | P2 | Remote IO |
| Modbus Remote IO | P1 | Remote IO |
| Ethernet Remote IO | P2 | Remote IO |
| RS485 Remote IO | P1 | Remote IO |
| Wireless Remote IO | P2 | Remote IO |
| Remote IO for SCADA | P2 | Remote IO |
| RTU IO Module | P2 | Industrial RTU |

### 3.5 Application-Specific Product Pages

These product pages combine product and use case, which is often strong for B2B conversion.

| Product Page | Priority | Target Solutions |
| --- | --- | --- |
| RTU for Pump Station Monitoring | P1 | Water & Wastewater |
| MQTT Gateway for Energy Meter Monitoring | P1 | Energy & Power |
| Modbus Gateway for Solar Inverter Monitoring | P1 | Solar & Renewables |
| LoRa Gateway for Agriculture Monitoring | P1 | Agriculture & Aquaculture |
| Remote IO for Factory Automation | P1 | Factory & Manufacturing |
| Edge Controller for Machine Monitoring | P1 | Factory & Manufacturing |
| 4G Gateway for Remote Equipment Monitoring | P1 | Remote Sites, Telecom, Water |
| RTU for Tank Level Monitoring | P1 | Water, Oil & Gas |
| MQTT Gateway for PLC Data Collection | P2 | Factory & Manufacturing |
| LoRa Gateway for Environmental Monitoring | P2 | Environmental Monitoring |

## 4. Expanded Solutions Taxonomy

Solutions should not stay limited to six pages. Use a two-layer structure:

- Solution category pages for industry clusters.
- Specific solution pages for searchable applications.

### 4.1 Energy & Power

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Energy Monitoring | P1 | MQTT Gateway, Edge Controller |
| Factory Energy Monitoring | P1 | MQTT Gateway, Power Meter, Edge Controller |
| Building Energy Monitoring | P2 | MQTT Gateway, Remote IO |
| Power Meter Monitoring | P1 | Modbus Gateway, MQTT Gateway |
| Power Quality Monitoring | P2 | MQTT Gateway, Edge Controller |
| Peak Demand Monitoring | P2 | MQTT Gateway, Dashboard |
| Transformer Monitoring | P2 | RTU, Remote IO |
| Distribution Cabinet Monitoring | P2 | RTU, Remote IO |
| Generator Monitoring | P1 | RTU, Remote IO, MQTT Gateway |
| UPS Monitoring | P2 | MQTT Gateway, Remote IO |
| Battery Energy Storage Monitoring | P1 | MQTT Gateway, Edge Controller |
| Microgrid Monitoring | P2 | Edge Controller, MQTT Gateway |
| Substation Remote Monitoring | P1 | RTU, Remote IO, MQTT Gateway |

### 4.2 Water & Wastewater

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Water Monitoring | P1 | RTU, Remote IO |
| Pump Station Monitoring | P1 | RTU, Remote IO, MQTT Gateway |
| Lift Station Monitoring | P1 | RTU, Remote IO |
| Tank Level Monitoring | P1 | RTU, LoRa Gateway |
| Reservoir Monitoring | P2 | RTU, LoRa Gateway |
| Water Quality Monitoring | P1 | RTU, MQTT Gateway |
| Flow Meter Monitoring | P1 | RTU, Modbus Gateway |
| Pressure Monitoring | P1 | RTU, Remote IO |
| Pipeline Leakage Monitoring | P2 | RTU, LoRa Gateway |
| Wastewater Treatment Monitoring | P1 | RTU, Remote IO, Edge Controller |
| Sewage Pump Monitoring | P2 | RTU, Remote IO |
| Irrigation Canal Monitoring | P2 | LoRa Gateway, RTU |
| Smart Water Metering | P2 | LoRa Gateway, MQTT Gateway |
| RO Water System Monitoring | P3 | Remote IO, MQTT Gateway |
| Hospital Water System Monitoring | P3 | Remote IO, MQTT Gateway |

### 4.3 Solar & Renewables

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Solar Monitoring | P1 | MQTT Gateway, Modbus Gateway |
| Solar Inverter Monitoring | P1 | Modbus Gateway, MQTT Gateway |
| PV Plant Monitoring | P1 | MQTT Gateway, RTU |
| Rooftop Solar Monitoring | P2 | MQTT Gateway |
| Solar String Monitoring | P2 | Remote IO, Modbus Gateway |
| Solar Weather Station Monitoring | P2 | RTU, LoRa Gateway |
| Wind Turbine Monitoring | P2 | RTU, MQTT Gateway |
| Wind Farm Monitoring | P2 | RTU, MQTT Gateway |
| Battery Storage Monitoring | P1 | Edge Controller, MQTT Gateway |
| Hybrid Energy Monitoring | P2 | Edge Controller, MQTT Gateway |
| Remote Renewable Energy Site Monitoring | P2 | 4G Gateway, RTU |

### 4.4 Factory & Manufacturing

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Factory Monitoring | P1 | Edge Controller, MQTT Gateway |
| Machine Monitoring | P1 | Remote IO, Edge Controller |
| Production Line Monitoring | P1 | Edge Controller, MQTT Gateway |
| Equipment Runtime Monitoring | P1 | Remote IO, RTU |
| OEE Data Collection | P2 | Edge Controller, MQTT Gateway |
| Predictive Maintenance Monitoring | P1 | Edge Controller, Remote IO |
| Motor Monitoring | P2 | Remote IO, MQTT Gateway |
| Compressor Monitoring | P1 | RTU, Remote IO |
| Boiler Monitoring | P2 | RTU, Remote IO |
| Chiller Monitoring | P2 | MQTT Gateway, Remote IO |
| HVAC Equipment Monitoring | P2 | Remote IO, MQTT Gateway |
| CNC Machine Monitoring | P2 | Edge Controller, MQTT Gateway |
| Injection Molding Machine Monitoring | P2 | Edge Controller, Remote IO |
| Packaging Line Monitoring | P2 | Remote IO, Edge Controller |
| Conveyor Monitoring | P2 | Remote IO |
| Industrial Alarm Monitoring | P2 | RTU, Remote IO |
| Factory Environmental Monitoring | P2 | LoRa Gateway, Remote IO |

### 4.5 Agriculture & Aquaculture

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Smart Agriculture | P1 | LoRa Gateway, RTU |
| Greenhouse Monitoring | P1 | LoRa Gateway, Remote IO |
| Soil Moisture Monitoring | P1 | LoRa Gateway |
| Smart Irrigation Monitoring | P1 | RTU, LoRa Gateway |
| Weather Station Monitoring | P2 | LoRa Gateway, RTU |
| Farm Water Pump Monitoring | P2 | RTU, Remote IO |
| Livestock Farm Monitoring | P2 | LoRa Gateway, Remote IO |
| Poultry Farm Monitoring | P2 | LoRa Gateway, Remote IO |
| Aquaculture Monitoring | P1 | RTU, LoRa Gateway |
| Grain Storage Monitoring | P2 | LoRa Gateway, Remote IO |
| Cold Chain Agriculture Monitoring | P3 | LoRa Gateway, MQTT Gateway |
| Fertigation System Monitoring | P3 | RTU, Remote IO |

### 4.6 Environmental Monitoring

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Environmental Monitoring | P1 | LoRa Gateway, RTU |
| Air Quality Monitoring | P1 | LoRa Gateway, MQTT Gateway |
| Dust Monitoring | P2 | LoRa Gateway, RTU |
| Noise Monitoring | P2 | LoRa Gateway |
| Weather Monitoring | P2 | LoRa Gateway, RTU |
| Flood Monitoring | P1 | RTU, LoRa Gateway |
| River Level Monitoring | P1 | RTU, LoRa Gateway |
| Soil Monitoring | P2 | LoRa Gateway |
| Groundwater Monitoring | P2 | RTU, LoRa Gateway |
| Gas Detection Monitoring | P1 | RTU, Remote IO |
| Hazardous Area Monitoring | P2 | RTU, Remote IO |
| Emission Monitoring | P2 | MQTT Gateway, Remote IO |
| Industrial Park Environmental Monitoring | P2 | LoRa Gateway, MQTT Gateway |
| Construction Site Environmental Monitoring | P2 | LoRa Gateway or 4G Gateway |

### 4.7 Oil, Gas & Pipeline

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Oil & Gas Monitoring | P2 | RTU, 4G Gateway |
| Pipeline Monitoring | P1 | RTU, Remote IO |
| Wellhead Monitoring | P2 | RTU, 4G Gateway |
| Oil Tank Monitoring | P1 | RTU, LoRa Gateway |
| Gas Pressure Monitoring | P2 | RTU, Remote IO |
| Gas Flow Monitoring | P2 | RTU, Modbus Gateway |
| Cathodic Protection Monitoring | P3 | RTU, Remote IO |
| Remote Valve Monitoring | P2 | RTU, Remote IO |
| Pumpjack Monitoring | P3 | RTU, MQTT Gateway |
| Fuel Tank Monitoring | P2 | RTU, LoRa Gateway |
| LPG Station Monitoring | P3 | RTU, Remote IO |
| Compressor Station Monitoring | P2 | RTU, Remote IO |

### 4.8 Smart City & Infrastructure

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Smart City Monitoring | P2 | LoRa Gateway, RTU |
| Street Light Monitoring | P1 | LoRa Gateway, Remote IO |
| Smart Pole Monitoring | P2 | LoRa Gateway, Edge Controller |
| Manhole Monitoring | P1 | LoRa Gateway |
| Bridge Monitoring | P2 | LoRa Gateway, RTU |
| Tunnel Monitoring | P2 | RTU, Remote IO |
| Roadside Cabinet Monitoring | P2 | RTU, Remote IO |
| Traffic Signal Monitoring | P3 | Remote IO, RTU |
| Parking Lot Monitoring | P3 | LoRa Gateway, Remote IO |
| Public Utility Monitoring | P2 | RTU, LoRa Gateway |
| Urban Flood Monitoring | P1 | RTU, LoRa Gateway |

### 4.9 Building & Facility

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Building Automation Monitoring | P2 | Remote IO, Edge Controller |
| HVAC Monitoring | P1 | Remote IO, MQTT Gateway |
| Chiller Plant Monitoring | P2 | MQTT Gateway, Remote IO |
| Boiler Room Monitoring | P2 | RTU, Remote IO |
| Smart Building Energy Monitoring | P2 | MQTT Gateway, Remote IO |
| Elevator Monitoring | P3 | Remote IO, MQTT Gateway |
| Fire Pump Monitoring | P2 | RTU, Remote IO |
| Data Center Environmental Monitoring | P1 | Remote IO, MQTT Gateway |
| Data Center Power Monitoring | P1 | MQTT Gateway, Remote IO |
| Commercial Facility Monitoring | P2 | Remote IO, MQTT Gateway |
| Hospital Facility Monitoring | P3 | Remote IO, MQTT Gateway |
| Campus Energy Monitoring | P2 | MQTT Gateway, Remote IO |

### 4.10 Telecom & Remote Sites

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Telecom Tower Monitoring | P1 | RTU, 4G Gateway |
| Base Station Monitoring | P2 | RTU, Remote IO |
| Remote Shelter Monitoring | P2 | RTU, Remote IO |
| Telecom Power Monitoring | P2 | MQTT Gateway, RTU |
| Battery Backup Monitoring | P2 | RTU, MQTT Gateway |
| Generator Fuel Monitoring | P2 | RTU, Remote IO |
| Cabinet Temperature Monitoring | P2 | Remote IO, LoRa Gateway |
| Remote Site Security Monitoring | P3 | RTU, Remote IO |

### 4.11 Cold Chain & Storage

| Solution | Priority | Product Fit |
| --- | --- | --- |
| Cold Storage Monitoring | P2 | LoRa Gateway, MQTT Gateway |
| Warehouse Temperature Monitoring | P2 | LoRa Gateway, Remote IO |
| Refrigerator Monitoring | P3 | LoRa Gateway |
| Freezer Monitoring | P3 | LoRa Gateway |
| Food Storage Monitoring | P2 | LoRa Gateway, MQTT Gateway |
| Pharmaceutical Storage Monitoring | P2 | LoRa Gateway, MQTT Gateway |
| Grain Silo Monitoring | P2 | LoRa Gateway, Remote IO |
| Logistics Temperature Monitoring | P3 | LoRa Gateway or 4G Gateway |

### 4.12 OEM & Machine Builders

| Solution | Priority | Product Fit |
| --- | --- | --- |
| OEM Remote Monitoring | P1 | MQTT Gateway, Edge Controller |
| Machine Builder IoT Gateway | P1 | MQTT Gateway, Edge Controller |
| White Label IoT Gateway Solution | P1 | MQTT Gateway, RTU |
| Remote Diagnostics for OEM Equipment | P1 | Edge Controller, MQTT Gateway |
| After-sales Equipment Monitoring | P1 | 4G Gateway, MQTT Gateway |
| Predictive Maintenance for OEM Machines | P2 | Edge Controller, Remote IO |
| Equipment Rental Monitoring | P2 | 4G Gateway, RTU |
| Fleet Machine Monitoring | P2 | 4G Gateway, MQTT Gateway |

## 5. First Batch: Priority Solution Pages

Start with 30 high-value solution pages before expanding to 100+ solution pages.

| Priority | Page |
| --- | --- |
| P1 | Energy Monitoring |
| P1 | Factory Energy Monitoring |
| P1 | Power Meter Monitoring |
| P1 | Generator Monitoring |
| P1 | Pump Station Monitoring |
| P1 | Tank Level Monitoring |
| P1 | Water Quality Monitoring |
| P1 | Wastewater Treatment Monitoring |
| P1 | Solar Inverter Monitoring |
| P1 | PV Plant Monitoring |
| P1 | Battery Storage Monitoring |
| P1 | Factory Monitoring |
| P1 | Machine Monitoring |
| P1 | Equipment Runtime Monitoring |
| P1 | Predictive Maintenance Monitoring |
| P1 | Compressor Monitoring |
| P1 | Greenhouse Monitoring |
| P1 | Smart Irrigation Monitoring |
| P1 | Aquaculture Monitoring |
| P1 | Air Quality Monitoring |
| P1 | Flood Monitoring |
| P1 | Gas Detection Monitoring |
| P1 | Pipeline Monitoring |
| P1 | Oil Tank Monitoring |
| P1 | Street Light Monitoring |
| P1 | Manhole Monitoring |
| P1 | HVAC Monitoring |
| P1 | Data Center Monitoring |
| P1 | Telecom Tower Monitoring |
| P1 | OEM Remote Monitoring |

## 6. Recommended Site Architecture

```text
Home

Products
+-- Industrial RTU
|   +-- 4G RTU
|   +-- Cellular RTU
|   +-- Ethernet RTU
|   +-- WiFi RTU
|   +-- LoRa RTU
+-- MQTT Gateway
|   +-- Modbus to MQTT Gateway
|   +-- RS485 to MQTT Gateway
|   +-- 4G MQTT Gateway
|   +-- WiFi MQTT Gateway
|   +-- Ethernet MQTT Gateway
+-- LoRa Gateway
|   +-- LoRaWAN Gateway
|   +-- Industrial LoRa Gateway
|   +-- Outdoor LoRa Gateway
+-- Remote IO
|   +-- Modbus Remote IO
|   +-- RS485 Remote IO
|   +-- Ethernet Remote IO
|   +-- Digital Input Module
|   +-- Relay Output Module
|   +-- Analog Input Module
+-- Edge Controller
|   +-- IIoT Edge Gateway
|   +-- Protocol Converter
|   +-- Data Acquisition Gateway
+-- Industrial IoT Gateway

Solutions
+-- Energy & Power
+-- Water & Wastewater
+-- Solar & Renewables
+-- Factory & Manufacturing
+-- Agriculture & Aquaculture
+-- Environmental Monitoring
+-- Oil, Gas & Pipeline
+-- Smart City & Infrastructure
+-- Building & Facility
+-- Telecom & Remote Sites
+-- Cold Chain & Storage
+-- OEM & Machine Builders

Knowledge Base
+-- MQTT
+-- Modbus
+-- RS485
+-- LoRa
+-- LoRaWAN
+-- PLC
+-- OPC UA
+-- RTU
+-- Remote IO
+-- 4G LTE
+-- WiFi
+-- Ethernet
+-- SCADA

Case Studies
+-- Factory
+-- Water
+-- Solar
+-- Agriculture
+-- Energy
+-- Oil & Gas
+-- Smart City
+-- Telecom
+-- OEM Equipment

Blog
```

## 7. Content Generation Pipeline

Do not directly generate full articles first. Use a two-stage workflow.

### Stage A: Topic Plan

For each page or article, generate and review:

```json
{
  "title": "",
  "slug": "",
  "content_type": "product | solution | knowledge | case-study | blog",
  "search_intent": "",
  "target_keywords": [],
  "related_entities": [],
  "target_products": [],
  "target_solutions": [],
  "required_facts": [],
  "case_reference": "",
  "internal_links": [],
  "outline": []
}
```

### Stage B: Draft Content

Only after the plan is reviewed, generate Markdown content with:

- Frontmatter
- H1/H2/H3 structure
- Technical architecture section
- Product mapping
- Protocol and sensor mapping
- Deployment example
- FAQ
- Internal links
- CTA

## 8. Article and Page Templates To Create

| Template | Status | Purpose |
| --- | --- | --- |
| Product Page Template | Drafted | For RTU, gateways, Remote IO, Edge Controller. |
| Protocol Product Template | Drafted | For Modbus Gateway, RS485 Gateway, 4G MQTT Gateway. |
| Solution Page Template | Drafted | For vertical solutions. |
| Knowledge Base Template | Drafted | For protocol and technology pages. |
| Comparison Article Template | Drafted | For RTU vs PLC, LoRa vs WiFi, MQTT vs OPC UA. |
| How-to Article Template | Drafted | For wiring, configuration, integration articles. |
| Troubleshooting Template | Drafted | For technical problem-solving SEO. |
| Case Study Template | Drafted | For industry deployment examples. |
| Buyer Guide Template | Drafted | For commercial-intent topics. |

## 9. Knowledge Fact Database To Build

Initial knowledge categories:

- MQTT
- Modbus RTU
- Modbus TCP
- RS485
- RS232
- LoRa
- LoRaWAN
- RTU
- Remote IO
- Edge Controller
- PLC
- OPC UA
- SCADA
- 4G LTE
- WiFi
- Ethernet
- MQTT brokers
- EMQX
- Mosquitto
- Sensors and meters

Each knowledge file should contain:

- Definitions
- Parameters
- Ports
- Function codes where relevant
- Wiring notes
- Architecture notes
- Common mistakes
- Related products
- Related solutions

## 10. Case Library To Build

Target: at least 100 reusable industrial deployment cases.

Case fields:

```json
{
  "industry": "",
  "country": "",
  "site_type": "",
  "devices": [],
  "protocols": [],
  "sensors": [],
  "challenge": "",
  "solution": "",
  "result": "",
  "related_products": [],
  "related_solutions": []
}
```

## 11. Internal Linking Rules

Every page should link across the entity graph.

Machine-readable rules are drafted at `docs/seo/internal-link-rules.json`.

Product pages should link to:

- Related solutions
- Related protocols
- Related case studies
- Related how-to articles

Solution pages should link to:

- Required products
- Required protocols
- Related case studies
- Related knowledge base pages

Knowledge base pages should link to:

- Products using the technology
- Solutions using the technology
- Comparison articles
- How-to articles

Case studies should link to:

- Products used
- Solution category
- Protocol knowledge pages
- Similar cases

## 12. 90-Day SEO Roadmap

### Weeks 1-2: Foundation

- Build topic authority database.
- Build expanded product taxonomy.
- Build knowledge fact database.
- Build 100-case library.
- Create templates.
- Create internal link rules.

### Weeks 3-4: Core Commercial Pages

- Publish 5-10 core product pillar pages.
- Publish 10-12 solution category pages.
- Publish 10-20 priority solution pages.
- Publish 10 knowledge base foundation pages.

### Weeks 5-8: Cluster Expansion

- Publish 30-60 protocol/product modifier pages.
- Publish 50-100 solution cluster pages.
- Publish 50 knowledge base pages.
- Publish 20 case studies.

### Weeks 9-12: Long-Tail Scale

- Publish 100-200 how-to and comparison articles.
- Publish 30-50 additional case studies.
- Add FAQ schema and Article schema.
- Improve internal links.
- Review Search Console data and adjust priorities.

## 13. Next Actions

Do not generate pages yet. Recommended next steps:

1. Use `docs/seo/self-developed-product-spec-baseline.json` as the baseline for IoTEdges self-developed product planning.
2. Convert the priority models into engineering requirement documents: `IEG-100` Ethernet Gateway, `IER-100` Ethernet RTU, `IEIO-100` wired Remote IO, `IER-140`, `IEG-140`, `IEG-120`, `IER-120`, and `IEG-L100`.
3. Use `docs/seo/product-protocol-support-matrix.json` to keep baseline Modbus/MQTT claims separate from advanced OPC UA/BACnet/CAN edge gateway claims.
4. Use `docs/seo/product-io-interface-matrix.json` to define DI/DO/AI/AO, relay, RS485 and Ethernet claims before drafting RTU and Remote IO pages.
5. Review `docs/seo/first-engineering-requirements-draft.json`; RTU baseline is confirmed as `4DI + 2DO/relay + 2AI`, and first-generation Remote IO variants are confirmed as `IEIO-100-DI8`, `IEIO-100-DO8`, `IEIO-100-AI4`, and `IEIO-100-AO4`.
6. Use `docs/seo/confirmed-product-page-briefs.json` as the model-specific product page brief source for IEG, IER, IEIO and LoRaWAN pages.
7. Use `docs/seo/confirmed-first-product-publishing-plan.json` to validate model-specific pages in priority order.
8. Run capability validation first for `IEIO-100`, `IER-100`, and `IEG-100`.
9. Use `docs/seo/first-product-capability-validation-checklist.json` to record pass/conditional/fail/blocked validation status before drafting Markdown.
10. Review public-safe product drafts under `src/content/products/`; next run frontend checks and consider lower-priority public-safe drafts for IEG-120 and IER-120.
11. Keep 4G LTE, WiFi and LoRa/LoRaWAN as separate wireless uplink variants; do not combine them into the same SKU.
12. Keep 5G product topics out of navigation, product pages and first-year content production.
13. After prototype validation, update `docs/seo/product-model-definition-draft.json` and `docs/seo/capability-check-matrix.json` with validated specifications.
14. Review the first 30 page priority plan at `docs/seo/first-30-pages-priority-plan.json`.
15. Review the content brief templates at `docs/seo/content-brief-templates.json`.
16. Review and extend factual source cards at `docs/seo/factual-source-cards.json`.
17. Review internal link rules at `docs/seo/internal-link-rules.json`.
18. Review the content production workflow at `docs/seo/content-production-workflow.json`.
19. Run product capability checks and fact checks for confirmed product briefs before drafting Markdown pages.
20. Expand the case study database from 30 records to 100+ reusable case records.
