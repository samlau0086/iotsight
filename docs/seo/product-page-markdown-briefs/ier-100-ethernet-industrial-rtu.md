---
title: "IER-100 Ethernet Industrial RTU"
slug: "ethernet-industrial-rtu"
route: "/products/ethernet-industrial-rtu"
status: "safe-scope-brief"
last_updated: "2026-06-09"
primary_keyword: "Ethernet industrial RTU"
secondary_keywords:
  - "Ethernet RTU"
  - "industrial RTU"
  - "Modbus RTU controller"
  - "RTU for SCADA"
  - "wired RTU"
source_files:
  - "docs/seo/confirmed-product-page-briefs.json"
  - "docs/seo/first-engineering-requirements-draft.json"
  - "docs/seo/product-io-interface-matrix.json"
  - "docs/seo/first-product-electrical-validation-targets.json"
  - "docs/seo/first-product-capability-validation-checklist.json"
claim_status: "planning-only; exact electrical ratings and firmware behavior require validation"
---

# IER-100 Ethernet Industrial RTU

## Page Purpose

Create a safe-scope model page for IER-100, the planned Ethernet-only baseline RTU. The page should target Ethernet RTU, industrial RTU, Modbus RTU controller and RTU for SCADA searches.

The page should focus on IO and local wired deployment, not cellular or WiFi behavior.

## Safe Positioning

IER-100 is planned as an Ethernet industrial RTU for local LAN, SCADA cabinet and industrial telemetry applications.

Safe wording:

- Ethernet-only wired RTU.
- Planned baseline IO: 4DI + 2DO/relay + 2AI.
- Planned RS485 interface for Modbus RTU applications.
- Planned Modbus RTU/TCP support subject to firmware validation.
- Suitable for monitoring pumps, tanks, equipment alarms and utility cabinets after validation.

Avoid wording:

- Do not claim 4G or WiFi in IER-100.
- Do not claim DNP3, IEC 60870 or IEC 61850.
- Do not publish relay rating before validation.
- Do not publish analog input accuracy before validation.
- Do not claim safety controller behavior.

## Recommended H1

IER-100 Ethernet Industrial RTU

## Recommended Meta

Meta title:
IER-100 Ethernet Industrial RTU | IoTEdges

Meta description:
IER-100 is a planned Ethernet industrial RTU with 4DI, 2DO/relay, 2AI and Modbus connectivity targets for wired industrial monitoring and SCADA applications.

## Target Audience

- SCADA engineers
- Pump station integrators
- Factory utility engineers
- Facility monitoring teams
- OEM equipment monitoring teams

## Recommended Page Sections

### 1. Hero

Suggested copy direction:
IER-100 is a planned wired industrial RTU for collecting digital and analog field signals and connecting them to local Ethernet or SCADA networks.

Primary CTA:
Discuss Your RTU Project

Secondary CTA:
View Planned IO Configuration

### 2. Planned IO Configuration

Use the user-confirmed RTU baseline:

| IO Type | Planned Count | Claim Status |
| --- | --- | --- |
| DI | 4 | Channel count planned; dry/wet/pulse behavior requires validation |
| DO/relay | 2 | Relay/output rating requires validation |
| AI | 2 | 4-20mA and/or 0-10V behavior requires validation |

### 3. Wired RTU Architecture

Describe:

- field contacts and sensors connect to local RTU IO
- RS485 can connect Modbus field devices
- Ethernet connects to local LAN, SCADA or gateway systems
- MQTT telemetry is optional after validation and should not be the primary claim yet

### 4. Protocol Direction

| Protocol | Planned Role | Claim Status |
| --- | --- | --- |
| Modbus RTU | RS485 communication | Firmware validation required |
| Modbus TCP | Ethernet communication | Firmware validation required |
| MQTT | Optional telemetry | Validation required |
| DNP3 / IEC utility protocols | Not planned | Do not claim |

### 5. Typical Applications

- pump station monitoring
- tank level and alarm monitoring
- factory utility monitoring
- building equipment alarms
- local SCADA cabinet telemetry
- generator room or compressor room monitoring

### 6. RTU vs Gateway vs Remote IO

| Product Type | Best Fit |
| --- | --- |
| IER-100 Ethernet RTU | Local IO plus wired telemetry |
| IEG-100 Gateway | Modbus device collection and MQTT publishing |
| IEIO-100 Remote IO | Distributed IO expansion over Modbus |

### 7. Validation Status

Include:
IER-100 is in planning and engineering validation. Exact relay rating, analog accuracy, operating temperature, RS485 isolation and final protocol behavior will be published only after prototype tests and review are complete.

### 8. FAQ

Q: Is IER-100 the same as IEG-100?
A: No. IER-100 is an RTU with built-in IO. IEG-100 is a gateway focused on Modbus data collection and MQTT publishing.

Q: Does IER-100 include 4G?
A: No. IER-100 is Ethernet-only. Cellular RTU behavior belongs to IER-140.

Q: What is the baseline IO?
A: The planning baseline is 4DI + 2DO/relay + 2AI.

Q: Can I publish exact relay and analog specs now?
A: No. Those claims require component selection and prototype test evidence.

## Internal Links To Include

- IEG-100 Ethernet Industrial IoT Gateway
- IEIO-100 Modbus Remote IO Module
- Industrial RTU
- Remote IO Module
- Pump Station Monitoring
- Factory Utility Monitoring
- Modbus Guide
- RS485 Guide

## Product Page Gate

This brief can be used for internal planning and safe-scope drafting. It should not be published as a final product page until:

- IER-100 firmware behavior is reviewed.
- DI, relay, AI, RS485 and Ethernet tests pass.
- Capability checklist links completed prototype reports.
