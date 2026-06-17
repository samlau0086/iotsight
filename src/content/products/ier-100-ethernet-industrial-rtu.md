---
id: ier-100-ethernet-industrial-rtu
title: IER-100 Ethernet Industrial RTU
excerpt: Ethernet-only industrial RTU configured with 4DI, 2DO/relay, 2AI, RS485 and Modbus connectivity targets.
category: Industrial RTU
model: IER-100
status: Available for project inquiry
primaryKeyword: Ethernet industrial RTU
route: /products/ier-100-ethernet-industrial-rtu
order: 3
---

## Ethernet RTU For Wired Monitoring

IER-100 is an Ethernet-only industrial RTU for wired cabinet, LAN and SCADA-style monitoring applications. It combines local digital and analog IO with Modbus communications for pump stations, utility cabinets, building equipment rooms and factory telemetry points.

This page describes the standard IO baseline, communication scope and typical applications for projects that need an RTU rather than a pure gateway.

## IO Baseline

| IO Type | Target Count | Configuration Notes |
| --- | --- | --- |
| Digital input | 4 | Suitable for door contact, float switch, alarm and status signals |
| Digital output or relay | 2 | Suitable for relay-style control and auxiliary outputs |
| Analog input | 2 | Suitable for 4-20mA or 0-10V process signals |

## Wired RTU Architecture

Field contacts and sensors connect to local RTU IO. RS485 can connect Modbus field devices. Ethernet connects the RTU to a local LAN, SCADA system or gateway layer depending on the final firmware configuration.

## Protocol Direction

| Protocol | Role | Configuration Notes |
| --- | --- | --- |
| Modbus RTU | RS485 communication target | Standard fieldbus path for downstream devices |
| Modbus TCP | Ethernet communication target | Suitable for LAN-based industrial integration |
| MQTT | Optional telemetry target | Suitable when RTU data needs dashboard or broker visibility |

DNP3, IEC 60870, IEC 61850 and safety-controller functions are outside the baseline IER-100 positioning.

## Suitable Applications

- pump station monitoring
- tank level and alarm monitoring
- building equipment alarms
- factory utility monitoring
- local SCADA cabinet telemetry
- generator room or compressor room monitoring

## RTU vs Gateway vs Remote IO

| Product Type | Best Fit |
| --- | --- |
| IER-100 Ethernet RTU | Local IO plus wired telemetry |
| IEG-100 Gateway | Modbus data collection and MQTT publishing |
| IEIO-100 Remote IO | Distributed IO expansion over Modbus |

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| DIN rail power supply | Cabinet power for RTU, sensors and auxiliary devices |
| Shielded RS485 cable | Connect Modbus field devices to the RTU |
| Door contact, float switch or alarm contact | Typical digital input sources |
| Interposing relay or contactor interface | Protect RTU output when controlling field loads |
| 4-20mA pressure, level or flow transmitter | Typical analog input source for pump, tank and utility monitoring |

See [Industrial IoT Accessories](/accessories), [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for project accessory planning.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)
- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)

## FAQ

### Is IER-100 the same as IEG-100?

No. IER-100 is an RTU with built-in IO. IEG-100 is a gateway focused on Modbus data collection and MQTT publishing.

### Does IER-100 include 4G?

No. IER-100 is Ethernet-only. Cellular RTU behavior belongs to IER-140.

### What is the IO Baseline?

The planning baseline is 4DI + 2DO/relay + 2AI.

### Can exact relay and analog specifications be published now?

Those values should follow the released datasheet of the selected hardware version.





