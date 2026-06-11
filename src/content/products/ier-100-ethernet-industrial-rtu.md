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

IER-100 is designed as an Ethernet-only industrial RTU for wired cabinet, LAN and SCADA-style monitoring applications. Its intended role is to collect local digital and analog signals, communicate with Modbus field devices and connect to local industrial networks.

This product brief describes target configurations for project discussion and application matching.

## IO Baseline

| IO Type | Target Count | Configuration Notes |
| --- | --- | --- |
| Digital input | 4 | Input mode and pulse behavior should be confirmed during project review |
| Digital output or relay | 2 | Output type and rating should be confirmed during project review |
| Analog input | 2 | 4-20mA and/or 0-10V behavior should be confirmed during project review |

## Wired RTU Architecture

Field contacts and sensors connect to local RTU IO. RS485 can connect Modbus field devices. Ethernet connects the RTU to a local LAN, SCADA system or gateway layer depending on the final firmware configuration.

## Protocol Direction

| Protocol | Role | Configuration Notes |
| --- | --- | --- |
| Modbus RTU | RS485 communication target | Firmware and RS485 engineering confirmation |
| Modbus TCP | Ethernet communication target | firmware confirmation required |
| MQTT | Optional telemetry target | Publish behavior should be confirmed during project review |

Confirm DNP3, IEC 60870, IEC 61850 or safety controller behavior for IER-100.

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

Those items require component selection and prototype test evidence.





