# IoTEdges CMS Entry Templates

Last updated: 2026-07-01

## Goal

Use these templates when creating new `Products` or `Solutions` entries in Decap CMS.

They are not code requirements by themselves. They are field-shape references so new entries stay aligned with the live frontend templates, route structure, and SEO output.

For product-specific fill checklists covering `IEG-140`, `IER-141`, `IER-142`, `IEAC-140`, and `IEIO-100`, use `docs/cms-product-fill-checklists.md`.

## 1. Product Entry Template

Recommended first-use flow in CMS:

1. Open `Products`.
2. Click `New Product Page`.
3. Fill `id`, `model`, `title`, `route`, `category`, and `status` first.
4. Then complete structured sections before writing long body copy.

### Product example

Use this as a model for a new product entry:

```yaml
id: ieg-160-4g-industrial-iot-gateway
title: IEG-160 4G Industrial IoT Gateway
excerpt: 4G industrial IoT gateway for Modbus RTU to MQTT telemetry, remote equipment monitoring, and cloud dashboard integration.
imageUrl: /uploads/products/ieg-160-hero.jpg
category: Industrial IoT Gateway
model: IEG-160
status: Preview
primaryKeyword: 4G industrial IoT gateway
route: /products/ieg-160-4g-industrial-iot-gateway
order: 160
specGroups:
  - title: Hardware I/O
    specs:
      - label: Serial Port
        value: 1 x RS485
      - label: Ethernet
        value: 1 x 10/100M RJ45
      - label: DI
        value: 2DI
      - label: DO
        value: 2DO
  - title: Communication
    specs:
      - label: Uplink
        value: 4G LTE Cat1
      - label: SIM
        value: 1 x standard or micro SIM, project-specific
      - label: Antenna
        value: External 4G antenna
  - title: Protocols
    specs:
      - label: Southbound
        value: Modbus RTU, Modbus TCP
      - label: Northbound
        value: MQTT, HTTP or platform-specific integration subject to firmware scope
      - label: Role
        value: Data acquisition gateway with remote telemetry
  - title: Power & Mounting
    specs:
      - label: Power Input
        value: 9-36VDC
      - label: Mounting
        value: DIN rail
selectionGuide:
  chooseWhen:
    - The site has no reliable wired uplink and needs 4G telemetry.
    - You need Modbus data collection from meters, PLCs, or field controllers.
    - The project needs a compact gateway with basic local DI and DO.
  notFitWhen:
    - The site requires Wi-Fi uplink instead of 4G.
    - The project needs extensive analog I/O on the main unit.
    - The customer expects PLC-grade local logic rather than gateway telemetry.
  compareLinks:
    - label: Compare with IEG-100 Ethernet Gateway
      href: /products/ieg-100-ethernet-industrial-iot-gateway
    - label: Compare with IER-140 4G Remote Relay RTU
      href: /products/ier-140-4g-remote-relay-rtu
bomGroups:
  - title: Standard Project BOM
    items:
      - 4G antenna
      - 24VDC DIN-rail power supply
      - SIM card with data plan
      - RS485 terminal wiring
preSalesFaq:
  - question: Can this gateway poll multiple Modbus devices?
    answer: Usually yes, within the actual serial topology, polling interval, and project load limits that should be confirmed during project review.
  - question: Can you adapt MQTT payloads for our platform?
    answer: Payload mapping and topic structure can typically be reviewed during project setup or OEM customization discussion.
body: |
  ## Typical fit

  This model is intended for remote cabinets, distributed equipment, and utility-style telemetry projects where 4G uplink is the practical choice.

  ## Common applications

  - Remote meter monitoring
  - Pump and valve status collection
  - Cabinet alarm forwarding
  - OEM equipment telemetry
```

### Product minimum checklist

- `id` is lowercase and hyphenated only.
- `route` starts with `/products/`.
- `route`, `id`, and `model` describe the same product.
- `specGroups` is present and not empty.
- `imageUrl` points to a real uploaded asset.
- `status` is `Draft` or `Preview` until the page is actually ready.

## 2. Solution Entry Template

Recommended first-use flow in CMS:

1. Open `Solutions`.
2. Click `New Solution Page`.
3. Fill `id`, `title`, `description`, and `link` first.
4. Then complete the structured lists used by the page template.

### Solution example

Use this as a model for a new solution entry:

```yaml
id: pump-station-monitoring
title: Pump Station Monitoring
description: Remote monitoring for pump stations with level, pressure, flow, alarm, and pump status visibility across distributed water sites.
status: Draft
image: /uploads/solutions/pump-station-monitoring-hero.jpg
architectureImage: /uploads/solutions/pump-station-monitoring-architecture.jpg
iconKey: droplets
recommendedProductType: RTU and Remote IO
recommendedUplink: Ethernet or 4G
deploymentEnvironment: Remote pump stations, lift stations, water utility cabinets, and distributed treatment assets
link: /solutions/pump-station-monitoring
order: 120
detailedContent:
  - Pump station projects need reliable telemetry from pumps, tank or wet-well level sensors, pressure transmitters, float switches, and local control cabinets.
  - IoTEdges RTU and gateway architectures help operators collect field data, forward alarms, and present distributed station status in a unified dashboard.
  - The same solution path can support municipal water, wastewater, industrial pumping, and OEM skid monitoring depending on I/O count, uplink method, and integration scope.
hardware:
  - IER-141 4G Pump and Valve RTU
  - IER-100 Ethernet Industrial RTU
  - IEIO-100 Modbus Remote IO Module
  - Pressure transmitter, level sensor, float switch, and control cabinet wiring accessories
software:
  - Station overview dashboard with live status
  - Alarm notifications for level, pump fault, and cabinet events
  - Trend charts for pressure, flow, and runtime
relatedProducts:
  - title: IER-141 4G Pump and Valve RTU
    href: /products/ier-141-4g-pump-valve-rtu
  - title: IEIO-100 Modbus Remote IO Module
    href: /products/ieio-100-modbus-remote-io-module
relatedResources:
  - title: Modbus Remote IO Guide
    href: /knowledge/modbus-remote-io-module
  - title: How to Choose a Modbus to MQTT Gateway
    href: /blog/how-to-choose-modbus-mqtt-gateway
body: |
  ## Why this solution exists

  Distributed pump stations are difficult to manage when alarms, runtime status, and process signals remain trapped in isolated local panels.

  ## What buyers usually need

  - Remote alarm visibility
  - Historical trends
  - Field I/O sized for the station
  - Ethernet or 4G uplink based on site conditions
```

### Solution minimum checklist

- `id` is lowercase and hyphenated only.
- `link` starts with `/solutions/`.
- `id` and `link` describe the same topic.
- `detailedContent` has at least 3 items.
- `hardware` has at least 4 items.
- `software` has at least 3 items.
- Every `relatedProducts.href` and `relatedResources.href` points to a real live route.

## 3. IoTEdges Family-Specific Starter Templates

Use these when the new entry clearly belongs to one of your current product or solution families.

### 3.1 `IEG-*` gateway starter

Use this pattern for gateways where the model family is `IEG-*`.

Best fit:

- Modbus data acquisition
- MQTT telemetry
- No heavy local control logic
- Uplink-specific variants such as Ethernet, Wi-Fi, or 4G

Recommended field pattern:

```yaml
id: ieg-xxx-uplink-industrial-iot-gateway
title: IEG-XXX Uplink Industrial IoT Gateway
category: Industrial IoT Gateway
model: IEG-XXX
primaryKeyword: uplink industrial IoT gateway
route: /products/ieg-xxx-uplink-industrial-iot-gateway
specGroups:
  - title: Hardware I/O
    specs:
      - label: Field Interface
        value: 1 x RS485
  - title: Communication
    specs:
      - label: Uplink
        value: Ethernet or WiFi or 4G LTE Cat1
  - title: Protocols
    specs:
      - label: Northbound
        value: MQTT
      - label: Southbound
        value: Modbus RTU, Modbus TCP
```

Keep these boundaries:

- `IEG-*` should read like a gateway, not a field-control RTU.
- Avoid implying rich local I/O if the device is mainly a data-acquisition gateway.
- Do not mix multiple wireless uplinks into one model unless the actual product definition supports it.

### 3.2 `IER-*` RTU starter

Use this pattern for RTUs where the model family is `IER-*`.

Best fit:

- Remote monitoring with local DI, DO, AI, or AO
- Field control plus telemetry
- Uplink-specific RTU variants such as Ethernet, Wi-Fi, or 4G

Recommended field pattern:

```yaml
id: ier-xxx-uplink-application-rtu
title: IER-XXX Uplink Application RTU
category: Industrial RTU
model: IER-XXX
primaryKeyword: application RTU
route: /products/ier-xxx-uplink-application-rtu
specGroups:
  - title: Hardware I/O
    specs:
      - label: DI
        value: 4DI
      - label: DO
        value: 2DO
      - label: AI
        value: 2AI
  - title: Communication
    specs:
      - label: Uplink
        value: Ethernet or WiFi or 4G LTE Cat1
  - title: Protocols
    specs:
      - label: Protocols
        value: MQTT, Modbus Master, Modbus Slave
```

Keep these boundaries:

- `IER-*` should include a clear local I/O story.
- The page should describe both telemetry and field-control fit.
- If the device is really access-control-specific, compare it against `IEAC-*` instead of forcing it into a generic RTU narrative.

### 3.3 Factory Energy solution starter

Use this when the page is centered on factory meters, cabinet data collection, workshop dashboards, or ISO 50001 style visibility.

Recommended field pattern:

```yaml
id: factory-energy
title: Factory Energy Monitoring
recommendedProductType: Gateway or RTU
recommendedUplink: Ethernet first
deploymentEnvironment: Factory cabinets and LAN-connected workshops
iconKey: zap
link: /solutions/factory-energy
hardware:
  - IEG-100 Ethernet gateway for Modbus meter collection
  - IER-100 Ethernet RTU for local IO requirements
  - IEIO-100 Remote IO modules for distributed signals
  - Modbus power meters and CTs
software:
  - Real-time energy dashboard
  - Energy trend analysis
  - Alarm and reporting workflow
```

What to emphasize:

- meters, CTs, Modbus collection, dashboards, reports
- Ethernet-first cabinet deployments
- energy waste visibility and reporting

### 3.4 Gate Access Control solution starter

Use this when the page is centered on gates, barriers, doors, access cabinets, installers, or Europe-focused remote access use cases.

Recommended field pattern:

```yaml
id: gate-access-control
title: Gate Access Control
recommendedProductType: Access controller or relay RTU
recommendedUplink: 4G first
deploymentEnvironment: Gate pillars, barriers, access cabinets, remote entrances
iconKey: shield
link: /solutions/gate-access-control
hardware:
  - IEAC-140 4G GSM Gate Opener
  - Relay interface for gate, barrier, or lock trigger
  - Status input path for door or gate feedback
  - External antenna and SIM validation path
software:
  - Remote trigger workflow
  - Access event logging
  - Installer setup workflow
```

What to emphasize:

- 4G-first positioning for Europe
- relay trigger plus status feedback
- installer workflow and remote access convenience

What to avoid:

- assuming GSM/2G availability everywhere
- overclaiming intercom, app, or compliance scope before validation

## 4. Status Guidance

Use these statuses conservatively:

- `Draft`: not public
- `Review`: not public
- `Preview`: public for products only
- `Available for project inquiry`: public for products only
- `Published`: public

If the page should not appear on the public site or sitemap yet, do not use `Published`.

## 5. Route Safety Rules

Before saving a new entry:

- Do not reuse an existing `id`.
- Do not point two pages at the same `route` or `link`.
- Do not change a live slug casually after indexing starts.
- Do not link to unpublished routes in `relatedProducts` or `relatedResources`.
