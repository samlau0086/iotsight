---
title: "IEIO-100 Modbus Remote IO Module"
slug: "modbus-remote-io-module"
route: "/products/modbus-remote-io-module"
status: "safe-scope-brief"
last_updated: "2026-06-09"
primary_keyword: "Modbus Remote IO module"
secondary_keywords:
  - "RS485 Remote IO"
  - "remote input output module"
  - "digital input module"
  - "relay output module"
  - "analog input module"
  - "analog output module"
source_files:
  - "docs/seo/confirmed-product-page-briefs.json"
  - "docs/seo/ieio-100-modbus-register-map-draft.json"
  - "docs/seo/first-product-electrical-validation-targets.json"
  - "docs/seo/first-product-capability-validation-checklist.json"
claim_status: "planning-only; exact electrical and register claims require validation"
---

# IEIO-100 Modbus Remote IO Module

## Page Purpose

Create a model-family product page for the planned IEIO-100 Modbus Remote IO line. The page should capture commercial demand around RS485 Remote IO, Modbus IO expansion, DI modules, relay output modules, analog input modules and analog output modules.

This page should not read like a final datasheet yet. It should use careful planning language until hardware, firmware and prototype validation are complete.

## Safe Positioning

IEIO-100 is planned as a wired Remote IO module family for distributed industrial signal collection and control through Modbus.

Safe wording:

- Designed for Modbus RTU over RS485 applications.
- Planned first-generation variants include DI8, DO8/relay, AI4 and AO4.
- Intended for cabinet-mounted remote IO expansion in factory, SCADA, pump, utility and environmental monitoring systems.
- Register map and electrical ratings are under engineering validation.

Avoid wording:

- Do not claim MQTT or cloud gateway behavior for IEIO-100.
- Do not publish exact relay rating.
- Do not publish exact analog accuracy, resolution or load capability.
- Do not publish exact RS485 isolation voltage or surge/ESD level.
- Do not claim certified PLC or SCADA compatibility.

## Recommended H1

IEIO-100 Modbus Remote IO Module

## Recommended Meta

Meta title:
IEIO-100 Modbus Remote IO Module | IoTEdges

Meta description:
IEIO-100 is a planned Modbus Remote IO module family for RS485-based DI, DO/relay, AI and AO expansion in industrial monitoring and control systems.

## Target Audience

- System integrators
- Factory automation engineers
- SCADA engineers
- OEM machine builders
- Utility and facility monitoring teams

## Recommended Page Sections

### 1. Hero

Focus on the product role, not exact specs.

Suggested copy direction:
IEIO-100 is a planned Modbus Remote IO module family for connecting distributed digital and analog signals to industrial controllers, gateways and SCADA systems over RS485.

Primary CTA:
Discuss Your Remote IO Project

Secondary CTA:
View Planned IO Variants

### 2. Remote IO Family Overview

Explain why separate IO-type variants are useful:

- simpler wiring and maintenance
- easier IO expansion
- flexible cabinet layout
- cleaner product selection for DI, relay output, AI or AO needs

### 3. Planned First-Generation Variants

Use planning language:

| Variant | Planned IO Profile | Page Claim Status |
| --- | --- | --- |
| IEIO-100-DI8 | 8 digital inputs | Channel count planned; electrical thresholds require validation |
| IEIO-100-DO8 | 8 digital outputs or relay outputs | Output type and rating require validation |
| IEIO-100-AI4 | 4 analog inputs | Signal modes and accuracy require validation |
| IEIO-100-AO4 | 4 analog outputs | Output range, load and accuracy require validation |

Second-wave variants:

| Variant | Planned IO Profile |
| --- | --- |
| IEIO-100-MD44 | 4DI + 4DO |
| IEIO-100-MA44 | 4AI + 4AO |

### 4. Modbus Integration

Safe claims:

- Modbus RTU over RS485 is the baseline protocol target.
- A draft register map exists for engineering review.
- Supported behavior and exact register details require firmware validation.

Do not publish the full register map on the public page until validated.

### 5. Typical Architecture

Describe:

- field sensors and contacts connect to IEIO-100 modules
- IEIO-100 communicates over RS485 Modbus RTU
- an industrial gateway, PLC or SCADA master reads IO data
- MQTT/cloud publishing belongs to a gateway, not to IEIO-100 itself

### 6. Where It Fits

Use cases:

- factory machine status monitoring
- pump station signal expansion
- alarm panel monitoring
- utility cabinet IO expansion
- SCADA remote IO
- data center environmental signal collection

### 7. Selection Guidance

Decision table:

| Need | Suggested Variant |
| --- | --- |
| Read dry/wet contact status | IEIO-100-DI8 |
| Drive alarms or output signals | IEIO-100-DO8 after output validation |
| Read pressure, level or flow transmitters | IEIO-100-AI4 after analog validation |
| Send analog setpoints | IEIO-100-AO4 after output validation |
| Mixed digital IO | IEIO-100-MD44 second-wave |
| Mixed analog IO | IEIO-100-MA44 second-wave |

### 8. Validation Status

Include a short transparent note:

IEIO-100 is in planning and engineering validation. Exact relay rating, analog accuracy, RS485 isolation, operating temperature and certification claims will be published only after prototype tests and documentation are complete.

### 9. FAQ

Q: Does IEIO-100 publish MQTT data directly?
A: No. IEIO-100 should be positioned as a Modbus Remote IO module. MQTT publishing belongs to gateway models such as IEG-100.

Q: Is the Modbus register map final?
A: A draft register map exists for engineering review, but the final public register map requires firmware and prototype validation.

Q: Which variant should be used for 4-20mA sensors?
A: IEIO-100-AI4 is the planned analog input variant. Exact signal modes and accuracy require validation.

Q: Can IEIO-100 control motors or pumps directly?
A: Do not claim direct motor or pump control. Relay/output ratings and application limits must be validated first.

## Internal Links To Include

- IEG-100 Ethernet Industrial IoT Gateway
- IER-100 Ethernet Industrial RTU
- Remote IO for Factory Automation
- Modbus Guide
- RS485 Guide
- Analog Input Module
- Relay Output Module

## Product Page Gate

This brief can be used for internal planning and safe-scope drafting. It should not be published as a final product page until:

- IEIO-100 register map is reviewed and validated.
- DI, relay, AI, AO and RS485 prototype tests are completed.
- Capability checklist status is updated with completed report filenames.
