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

The IEIO-100 family is intended for projects that need clean Modbus-based IO expansion close to field devices, cabinets and machine signals.

## First-Generation Variants

| Variant | Target IO Profile | Configuration Notes |
| --- | --- | --- |
| IEIO-100-DI8 | 8 digital inputs | Best fit for contact, alarm and status monitoring |
| IEIO-100-DO8 | 8 digital outputs or relay outputs | Best fit for output signaling and relay interfacing |
| IEIO-100-AI4 | 4 analog inputs | Best fit for process transmitters and analog sensors |
| IEIO-100-AO4 | 4 analog outputs | Best fit for analog setpoint and control output use |

Second-wave variants may include mixed digital IO and mixed analog IO modules after the first-generation direction is validated.

## Modbus Integration

RS485 Modbus RTU is the baseline protocol for IEIO-100, making it suitable for RTUs, gateways, PLCs and SCADA masters that already use Modbus networks.

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

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| Shielded RS485 cable | Connect Remote IO modules to a Modbus master, RTU or gateway |
| Pluggable terminal blocks | Speed up DI, DO, AI and AO wiring |
| DIN rail enclosure or cabinet kit | Mount Remote IO close to field signals |
| Interposing relay or contactor interface | Interface DO/relay outputs with field loads |
| 4-20mA sensors | Connect pressure, level, flow or process transmitters to analog input variants |

See [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for wiring guidance.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## FAQ

### Does IEIO-100 publish MQTT data directly?

No. IEIO-100 is designed as a Modbus Remote IO module. MQTT publishing belongs to gateway models.

### Is the register map final?

Register details should follow the released register map for the selected variant.

### Which variant is designed for 4-20mA sensors?

IEIO-100-AI4 is the analog input variant for 4-20mA and similar process signals.

### Can IEIO-100 control motors directly?

IEIO-100 is intended for signal output and interposing relays, not direct motor power control.





