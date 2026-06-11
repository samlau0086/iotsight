---
id: ieio-100-modbus-remote-io-module
title: IEIO-100 Modbus Remote IO Module
excerpt: Modbus Remote IO family with DI, DO/relay, AI and AO variants for industrial signal expansion.
category: Remote IO Module
model: IEIO-100
status: Available for project inquiry
primaryKeyword: Modbus Remote IO module
route: /products/ieio-100-modbus-remote-io-module
order: 2
---

## Modbus Remote IO For Distributed Signals

IEIO-100 is designed as a wired Modbus Remote IO module family for distributed industrial signal collection and control. The first-generation product direction separates IO types into focused variants instead of forcing every signal type into one overloaded SKU.

Exact register behavior, relay rating, analog accuracy, output load capability and RS485 protection levels are confirmed during project engineering review.

## First-Generation Variants

| Variant | Target IO Profile | Configuration Notes |
| --- | --- | --- |
| IEIO-100-DI8 | 8 digital inputs | Input mode and threshold engineering confirmation |
| IEIO-100-DO8 | 8 digital outputs or relay outputs | Output type and rating engineering confirmation |
| IEIO-100-AI4 | 4 analog inputs | Signal mode and accuracy engineering confirmation |
| IEIO-100-AO4 | 4 analog outputs | Output range, load and accuracy engineering confirmation |

Second-wave variants may include mixed digital IO and mixed analog IO modules after the first-generation direction is validated.

## Modbus Integration

RS485 Modbus RTU is the baseline protocol target for IEIO-100. A register map is handled through firmware and project review before final integration.

## Where IEIO-100 Fits

- factory machine status monitoring
- pump station signal expansion
- industrial alarm monitoring
- SCADA Remote IO expansion
- data center environmental signal collection
- utility cabinet signal collection

## Choosing A Variant

| Need | Variant |
| --- | --- |
| Read contact or alarm status | IEIO-100-DI8 |
| Drive alarm or output signals | IEIO-100-DO8 after output confirmation |
| Read pressure, level or flow transmitters | IEIO-100-AI4 after analog confirmation |
| Send analog setpoints | IEIO-100-AO4 after output confirmation |

## Product Boundary

IEIO-100 should not be described as an MQTT gateway, 4G telemetry device, WiFi device or LoRaWAN device. MQTT and cloud publishing belong to gateway products such as IEG-100.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## FAQ

### Does IEIO-100 publish MQTT data directly?

No. IEIO-100 is designed as a Modbus Remote IO module. MQTT publishing belongs to gateway models.

### Is the register map final?

Register details depend on firmware and project review.

### Which variant is designed for 4-20mA sensors?

IEIO-100-AI4 is the target analog input variant. Exact signal modes and accuracy are confirmed during project engineering review.

### Can IEIO-100 control motors directly?

IEIO-100 is intended for signal output and interposing relays, not direct motor power control. Output ratings and application limits should be confirmed during project review.





