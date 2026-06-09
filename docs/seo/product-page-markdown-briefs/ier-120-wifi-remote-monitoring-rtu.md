---
title: "IER-120 WiFi Remote Monitoring RTU"
slug: "wifi-remote-monitoring-rtu"
route: "/products/wifi-remote-monitoring-rtu"
status: "safe-scope-brief"
last_updated: "2026-06-09"
primary_keyword: "WiFi RTU"
secondary_keywords:
  - "WiFi remote monitoring RTU"
  - "wireless RTU"
  - "WiFi telemetry RTU"
  - "indoor RTU"
source_files:
  - "docs/seo/confirmed-product-page-briefs.json"
  - "docs/seo/product-model-definition-draft.json"
  - "docs/seo/product-io-interface-matrix.json"
  - "docs/seo/first-product-electrical-validation-targets.json"
claim_status: "planning-only; WiFi, IO, MQTT and electrical claims require validation"
---

# IER-120 WiFi Remote Monitoring RTU

## Page Purpose

Create a safe-scope model page for IER-120, the planned WiFi RTU for indoor facility and equipment monitoring where a reliable wireless LAN is available.

The page should target WiFi RTU, WiFi remote monitoring RTU and WiFi telemetry RTU searches.

## Safe Positioning

IER-120 is planned as a WiFi remote monitoring RTU for collecting local IO and Modbus data from indoor industrial or facility equipment.

Safe wording:

- WiFi is the only wireless uplink planned for this model.
- Planned baseline IO: 4DI + 2DO/relay + 2AI.
- Planned RS485 interface for Modbus RTU applications.
- MQTT telemetry is a target feature after firmware validation.
- Intended for indoor factory utility, building equipment and cabinet monitoring applications.

Avoid wording:

- Do not claim 4G or LoRa in the same device.
- Do not claim 5G.
- Do not claim outdoor long-range wireless coverage.
- Do not publish WiFi certification, antenna performance or range before RF validation.
- Do not publish relay rating, analog accuracy, RS485 isolation or temperature range.

## Recommended H1

IER-120 WiFi Remote Monitoring RTU

## Recommended Meta

Meta title:
IER-120 WiFi Remote Monitoring RTU | IoTEdges

Meta description:
IER-120 is a planned WiFi RTU for indoor remote monitoring with 4DI, 2DO/relay, 2AI, RS485 and MQTT telemetry targets under validation.

## Target Audience

- Factory facility engineers
- Building automation integrators
- Indoor equipment monitoring teams
- OEM machine monitoring teams
- System integrators

## Recommended Page Sections

### 1. Hero

Suggested copy direction:
IER-120 is a planned WiFi remote monitoring RTU for collecting digital and analog field signals from indoor equipment and sending telemetry through a site wireless LAN.

Primary CTA:
Discuss Your WiFi RTU Project

Secondary CTA:
View Planned IO Configuration

### 2. Indoor WiFi RTU Applications

Good-fit applications:

- factory utility monitoring
- building equipment alarms
- compressor room monitoring
- chiller room monitoring
- indoor cabinet monitoring
- OEM machine status monitoring

Poor-fit applications:

- remote outdoor sites without WiFi
- cellular backhaul sites
- long-range wireless sensor networks
- hazardous areas without certification

### 3. Planned IO Configuration

| IO Type | Planned Count | Claim Status |
| --- | --- | --- |
| DI | 4 | Channel count planned; dry/wet/pulse behavior requires validation |
| DO/relay | 2 | Relay/output type and rating require validation |
| AI | 2 | 4-20mA and/or 0-10V behavior requires validation |

### 4. Network And Protocol Direction

| Protocol / Feature | Planned Role | Claim Status |
| --- | --- | --- |
| WiFi | indoor uplink | module and RF validation required |
| RS485 | Modbus RTU field communication | hardware validation required |
| MQTT | telemetry upload target | publish/retry behavior requires validation |
| Ethernet | setup/local interface if included | final hardware validation required |
| 4G / LoRa / 5G | not planned for IER-120 | do not claim |

### 5. Configuration Workflow

Describe target workflow:

1. Configure WiFi network credentials.
2. Configure local IO channels.
3. Configure RS485 Modbus devices if used.
4. Configure MQTT broker and upload policy if supported.
5. Test signal reading and telemetry publishing.

Avoid inventing final UI screens until firmware and web UI exist.

### 6. RTU Model Comparison

| Model | Uplink | Best Fit |
| --- | --- | --- |
| IER-100 | Ethernet | wired cabinet and LAN sites |
| IER-120 | WiFi | indoor WiFi sites |
| IER-140 | 4G LTE | remote sites without LAN |

### 7. Validation Status

Include:
IER-120 is in planning and engineering validation. Exact WiFi module behavior, antenna performance, relay rating, analog accuracy, RS485 isolation, MQTT retry behavior and environmental ratings will be published only after prototype tests and documentation are complete.

### 8. FAQ

Q: Does IER-120 include 4G?
A: No. 4G belongs to IER-140.

Q: Does IER-120 include LoRa?
A: No. LoRa/LoRaWAN products are separate model families.

Q: Is IER-120 suitable for outdoor long-range wireless?
A: Do not position it that way. IER-120 is best framed as an indoor WiFi RTU.

Q: What is the planned IO baseline?
A: The planning baseline is 4DI + 2DO/relay + 2AI.

## Internal Links To Include

- IER-100 Ethernet Industrial RTU
- IER-140 4G Remote Monitoring RTU
- IEG-120 WiFi Industrial IoT Gateway
- Industrial RTU
- Building Equipment Monitoring
- Factory Utility Monitoring
- MQTT Guide
- Modbus Guide

## Product Page Gate

This brief can be used for internal planning and safe-scope drafting. It should not be published as a final product page until:

- WiFi module and setup workflow are validated.
- DI, relay, AI and RS485 tests pass.
- MQTT telemetry behavior is validated.
- Capability checklist links completed prototype reports.
