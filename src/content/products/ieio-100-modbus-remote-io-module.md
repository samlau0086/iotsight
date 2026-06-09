---
id: ieio-100-modbus-remote-io-module
title: IEIO-100 Modbus Remote IO Module
excerpt: Public-safe draft for a planned Modbus Remote IO family with DI, DO/relay, AI and AO variants for industrial signal expansion.
category: Remote IO Module
model: IEIO-100
status: Public-safe draft
primaryKeyword: Modbus Remote IO module
route: /products/ieio-100-modbus-remote-io-module
order: 2
---

## Modbus Remote IO For Distributed Signals

IEIO-100 is planned as a wired Modbus Remote IO module family for distributed industrial signal collection and control. The first-generation product direction separates IO types into focused variants instead of forcing every signal type into one overloaded SKU.

Exact register behavior, relay rating, analog accuracy, output load capability and RS485 protection levels remain under engineering validation.

## Planned First-Generation Variants

| Variant | Planned IO Profile | Validation Status |
| --- | --- | --- |
| IEIO-100-DI8 | 8 digital inputs | Input mode and threshold validation required |
| IEIO-100-DO8 | 8 digital outputs or relay outputs | Output type and rating validation required |
| IEIO-100-AI4 | 4 analog inputs | Signal mode and accuracy validation required |
| IEIO-100-AO4 | 4 analog outputs | Output range, load and accuracy validation required |

Second-wave variants may include mixed digital IO and mixed analog IO modules after the first-generation direction is validated.

## Modbus Integration

RS485 Modbus RTU is the baseline protocol target for IEIO-100. A draft register map exists for engineering review, but the public page should not present it as a final production register map until firmware and prototype tests pass.

## Where IEIO-100 Fits

- factory machine status monitoring
- pump station signal expansion
- industrial alarm monitoring
- SCADA Remote IO expansion
- data center environmental signal collection
- utility cabinet signal collection

## Choosing A Variant

| Need | Planned Variant |
| --- | --- |
| Read contact or alarm status | IEIO-100-DI8 |
| Drive alarm or output signals | IEIO-100-DO8 after output validation |
| Read pressure, level or flow transmitters | IEIO-100-AI4 after analog validation |
| Send analog setpoints | IEIO-100-AO4 after output validation |

## Product Boundary

IEIO-100 should not be described as an MQTT gateway, 4G telemetry device, WiFi device or LoRaWAN device. MQTT and cloud publishing belong to gateway products such as IEG-100.

## Validation Status

IEIO-100 remains under engineering validation. Exact relay ratings, analog specifications, RS485 isolation, surge/ESD levels, operating temperature and certifications will be published only after prototype reports and product approval.

## FAQ

### Does IEIO-100 publish MQTT data directly?

No. IEIO-100 is planned as a Modbus Remote IO module. MQTT publishing belongs to gateway models.

### Is the register map final?

No. A draft register map exists for engineering review, but final public register details require firmware validation.

### Which variant is planned for 4-20mA sensors?

IEIO-100-AI4 is the planned analog input variant. Exact signal modes and accuracy remain validation-gated.

### Can IEIO-100 control motors directly?

Do not position it that way. Output ratings and application limits require validation.
