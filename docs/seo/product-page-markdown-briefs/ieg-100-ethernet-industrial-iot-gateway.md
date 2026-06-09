---
title: "IEG-100 Ethernet Industrial IoT Gateway"
slug: "ethernet-industrial-iot-gateway"
route: "/products/ethernet-industrial-iot-gateway"
status: "safe-scope-brief"
last_updated: "2026-06-09"
primary_keyword: "Ethernet industrial IoT gateway"
secondary_keywords:
  - "Ethernet MQTT gateway"
  - "Modbus to MQTT gateway"
  - "industrial Ethernet gateway"
  - "RS485 to Ethernet gateway"
source_files:
  - "docs/seo/confirmed-product-page-briefs.json"
  - "docs/seo/ieg-100-modbus-mqtt-behavior-draft.json"
  - "docs/seo/product-protocol-support-matrix.json"
  - "docs/seo/first-product-capability-validation-checklist.json"
claim_status: "planning-only; exact polling limits and MQTT behavior require validation"
---

# IEG-100 Ethernet Industrial IoT Gateway

## Page Purpose

Create a safe-scope model page for IEG-100, the planned Ethernet-only baseline gateway in the IoTEdges lineup. The page should target Ethernet industrial IoT gateway, Modbus to MQTT gateway and Ethernet MQTT gateway searches.

The page should avoid advanced edge-gateway claims that belong to IEG-E200 or later models.

## Safe Positioning

IEG-100 is planned as an Ethernet industrial IoT gateway for collecting Modbus RTU/TCP data and publishing it to MQTT brokers or cloud platforms.

Safe wording:

- Ethernet-only wired gateway for LAN and industrial Ethernet deployments.
- Planned Modbus RTU/TCP data collection.
- Planned MQTT publishing with JSON payload behavior under validation.
- Designed for energy meters, solar inverters, PLC-connected sensors and industrial field devices.

Avoid wording:

- Do not claim 4G, WiFi or LoRa uplink on IEG-100.
- Do not claim OPC UA, BACnet or CAN.
- Do not claim exact device count or data point count before validation.
- Do not claim guaranteed one-second polling across all configurations.
- Do not claim TLS, offline buffering or remote write/control until tested.

## Recommended H1

IEG-100 Ethernet Industrial IoT Gateway

## Recommended Meta

Meta title:
IEG-100 Ethernet Industrial IoT Gateway | Modbus to MQTT | IoTEdges

Meta description:
IEG-100 is a planned Ethernet industrial IoT gateway for Modbus RTU/TCP data collection and MQTT publishing in wired industrial monitoring systems.

## Target Audience

- Industrial IoT system integrators
- Energy monitoring solution providers
- Solar monitoring integrators
- Factory automation engineers
- OEM equipment monitoring teams

## Recommended Page Sections

### 1. Hero

Suggested copy direction:
IEG-100 is a planned Ethernet industrial IoT gateway for connecting Modbus field devices to MQTT-based monitoring platforms through a wired LAN.

Primary CTA:
Discuss Your Gateway Project

Secondary CTA:
View Modbus to MQTT Architecture

### 2. Where Ethernet Gateways Fit

Explain ideal sites:

- factory cabinets with existing LAN
- energy metering panels
- solar inverter rooms
- building equipment rooms
- OEM machines with local Ethernet access

### 3. Protocol Support

Safe protocol table:

| Protocol | Planned Role | Claim Status |
| --- | --- | --- |
| Modbus RTU | RS485 master/client polling | Firmware validation required |
| Modbus TCP | Ethernet client polling | Firmware validation required |
| MQTT | Telemetry publishing | Payload and broker behavior require validation |
| OPC UA | Not planned for IEG-100 | Use advanced edge model later |
| BACnet | Not planned for IEG-100 | Use advanced edge model later |
| CAN | Not planned for IEG-100 | Use advanced edge model later |

### 4. Modbus to MQTT Workflow

Describe:

1. Configure Modbus devices and data points.
2. Poll Modbus RTU or Modbus TCP registers.
3. Scale values and assign point quality.
4. Publish telemetry JSON to MQTT.
5. Report gateway and device status.

Use draft targets only as internal guidance. Do not publish exact 32-device or 512-point limits until validation passes.

### 5. MQTT Topic and Payload Direction

Safe claim:
MQTT telemetry is planned around a stable gateway ID, telemetry topic, status topic and structured JSON payload.

Do not publish final topic schema as a guaranteed API until firmware accepts it.

### 6. Typical Applications

- energy meter monitoring
- solar inverter data collection
- factory utility monitoring
- compressor or chiller monitoring
- water treatment equipment data collection
- OEM equipment remote monitoring through site LAN

### 7. Model Comparison

| Model | Uplink | Best Fit |
| --- | --- | --- |
| IEG-100 | Ethernet | Wired LAN and cabinet deployments |
| IEG-120 | WiFi | Indoor WiFi sites |
| IEG-140 | 4G LTE | Remote sites without wired LAN |
| IEG-E200 | Ethernet baseline | Advanced edge protocols after validation |

### 8. Validation Status

Include:
IEG-100 is in planning and firmware validation. Exact Modbus device count, point count, polling interval, MQTT payload behavior, TLS and offline buffering claims will be published only after prototype tests are complete.

### 9. FAQ

Q: Is IEG-100 a 4G gateway?
A: No. IEG-100 is the Ethernet-only model. 4G should be handled by IEG-140.

Q: Does IEG-100 support WiFi or LoRa?
A: No. Wireless uplinks are separate model families.

Q: Does IEG-100 support OPC UA?
A: Not in the baseline plan. OPC UA belongs to advanced edge gateway models after validation.

Q: Can it write Modbus coils or registers?
A: Remote write/control should be treated as optional and disabled by default until safety validation is complete.

## Internal Links To Include

- Modbus to MQTT Gateway
- MQTT Gateway
- Modbus Gateway
- IEIO-100 Modbus Remote IO Module
- Energy Monitoring
- Solar Monitoring
- Factory Monitoring
- MQTT Guide
- Modbus Guide

## Product Page Gate

This brief can be used for internal planning and safe-scope drafting. It should not be published as a final product page until:

- IEG-100 Modbus/MQTT behavior is reviewed.
- MQTT payload and reconnect tests pass.
- RS485 and Ethernet hardware validation passes.
- Capability checklist links completed prototype reports.
