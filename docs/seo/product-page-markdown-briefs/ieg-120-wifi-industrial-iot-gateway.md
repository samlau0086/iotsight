---
title: "IEG-120 WiFi Industrial IoT Gateway"
slug: "wifi-industrial-iot-gateway"
route: "/products/wifi-industrial-iot-gateway"
status: "safe-scope-brief"
last_updated: "2026-06-09"
primary_keyword: "WiFi industrial IoT gateway"
secondary_keywords:
  - "WiFi MQTT gateway"
  - "WiFi Modbus gateway"
  - "wireless MQTT gateway"
  - "indoor industrial IoT gateway"
source_files:
  - "docs/seo/confirmed-product-page-briefs.json"
  - "docs/seo/product-model-definition-draft.json"
  - "docs/seo/product-protocol-support-matrix.json"
  - "docs/seo/ieg-100-modbus-mqtt-behavior-draft.json"
claim_status: "planning-only; WiFi, MQTT and polling behavior require validation"
---

# IEG-120 WiFi Industrial IoT Gateway

## Page Purpose

Create a safe-scope model page for IEG-120, the planned WiFi gateway for indoor industrial and building monitoring deployments.

The page should target WiFi industrial IoT gateway, WiFi MQTT gateway and WiFi Modbus gateway searches.

## Safe Positioning

IEG-120 is planned as a WiFi industrial IoT gateway for collecting Modbus data and publishing MQTT telemetry in indoor sites where a reliable wireless LAN is available.

Safe wording:

- WiFi is the only wireless uplink planned for this model.
- Planned Ethernet port for setup or local network use if final hardware includes it.
- Planned RS485 interface for Modbus RTU applications.
- Planned Modbus RTU/TCP to MQTT behavior after firmware validation.

Avoid wording:

- Do not claim 4G or LoRa in the same device.
- Do not claim outdoor long-range wireless coverage.
- Do not publish WiFi certification, antenna range or RF performance before validation.
- Do not claim OPC UA, BACnet or CAN.
- Do not claim TLS, offline buffering or cloud certification unless tested.

## Recommended H1

IEG-120 WiFi Industrial IoT Gateway

## Recommended Meta

Meta title:
IEG-120 WiFi Industrial IoT Gateway | IoTEdges

Meta description:
IEG-120 is a planned WiFi industrial IoT gateway for indoor Modbus data collection and MQTT telemetry publishing after WiFi and firmware validation.

## Target Audience

- Factory facility engineers
- Building energy monitoring providers
- Indoor equipment monitoring integrators
- OEM machine monitoring teams
- System integrators

## Recommended Page Sections

### 1. Hero

Suggested copy direction:
IEG-120 is a planned WiFi industrial IoT gateway for connecting indoor Modbus equipment to MQTT-based monitoring platforms through a site wireless LAN.

Primary CTA:
Discuss Your WiFi Gateway Project

Secondary CTA:
View Indoor Modbus Architecture

### 2. When To Use A WiFi Gateway

Good-fit sites:

- factory utility rooms with stable WiFi
- building energy monitoring cabinets
- indoor equipment rooms
- retrofit projects where Ethernet cabling is difficult
- OEM machines installed in WiFi-enabled facilities

Poor-fit sites:

- remote outdoor sites without WiFi
- sites requiring cellular backhaul
- long-range wireless sensor networks
- hazardous areas without certification

### 3. Network And Protocol Design

| Protocol / Feature | Planned Role | Claim Status |
| --- | --- | --- |
| WiFi | indoor uplink | module and RF validation required |
| Ethernet | setup/local network target | final hardware validation required |
| RS485 | Modbus RTU field interface | hardware validation required |
| Modbus TCP | Ethernet/WiFi network polling target | firmware validation required |
| MQTT | telemetry publishing | payload and reconnect validation required |

### 4. Configuration Workflow

Describe target workflow:

1. Configure WiFi network credentials.
2. Configure RS485 and Modbus devices.
3. Map registers into data points.
4. Configure MQTT broker and topic.
5. Test local reads and MQTT publishing.

Avoid inventing final UI details until the web UI exists.

### 5. Typical Applications

- building energy monitoring
- factory utility monitoring
- compressor room monitoring
- chiller room monitoring
- indoor OEM machine monitoring
- retrofit data collection where Ethernet cabling is hard

### 6. Gateway Model Comparison

| Model | Uplink | Best Fit |
| --- | --- | --- |
| IEG-100 | Ethernet | wired LAN sites |
| IEG-120 | WiFi | indoor wireless LAN sites |
| IEG-140 | 4G LTE | remote sites without LAN |

### 7. Validation Status

Include:
IEG-120 is in planning and validation. Exact WiFi module behavior, certification, antenna performance, MQTT reconnect behavior, point count, polling limits and environmental ratings will be published only after prototype tests are complete.

### 8. FAQ

Q: Does IEG-120 include 4G?
A: No. 4G belongs to IEG-140.

Q: Does IEG-120 include LoRa?
A: No. LoRa/LoRaWAN products are separate models.

Q: Is IEG-120 suitable for outdoor long-range wireless?
A: Do not position it that way. IEG-120 is best framed as an indoor WiFi gateway.

Q: Does it support MQTT?
A: MQTT publishing is planned, but payload and reconnect behavior require validation.

## Internal Links To Include

- IEG-100 Ethernet Industrial IoT Gateway
- IEG-140 4G Industrial IoT Gateway
- MQTT Gateway
- Modbus to MQTT Gateway
- Building Energy Monitoring
- Factory Utility Monitoring
- MQTT Guide
- Modbus Guide

## Product Page Gate

This brief can be used for internal planning and safe-scope drafting. It should not be published as a final product page until:

- WiFi module and setup workflow are validated.
- Modbus polling and MQTT publish/reconnect tests pass.
- RS485 and Ethernet hardware validation passes.
- Capability checklist links completed prototype reports.
