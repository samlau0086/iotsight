---
id: ier-100-ethernet-industrial-rtu
title: IER-100 Ethernet Industrial RTU
excerpt: Public-safe draft for an Ethernet-only industrial RTU planned with 4DI, 2DO/relay, 2AI, RS485 and Modbus connectivity targets.
category: Industrial RTU
model: IER-100
status: Public-safe draft
primaryKeyword: Ethernet industrial RTU
route: /products/ier-100-ethernet-industrial-rtu
order: 3
---

## Ethernet RTU For Wired Monitoring

IER-100 is planned as an Ethernet-only industrial RTU for wired cabinet, LAN and SCADA-style monitoring applications. Its intended role is to collect local digital and analog signals, communicate with Modbus field devices and connect to local industrial networks.

This page uses safe draft wording. Exact electrical ratings, Modbus behavior and final firmware options require engineering validation.

## Planned IO Baseline

| IO Type | Planned Count | Validation Status |
| --- | --- | --- |
| Digital input | 4 | Input mode and pulse behavior require validation |
| Digital output or relay | 2 | Output type and rating require validation |
| Analog input | 2 | 4-20mA and/or 0-10V behavior requires validation |

## Wired RTU Architecture

Field contacts and sensors connect to local RTU IO. RS485 can connect Modbus field devices. Ethernet connects the RTU to a local LAN, SCADA system or gateway layer depending on the final firmware configuration.

## Protocol Direction

| Protocol | Planned Role | Validation Status |
| --- | --- | --- |
| Modbus RTU | RS485 communication target | Firmware and RS485 validation required |
| Modbus TCP | Ethernet communication target | Firmware validation required |
| MQTT | Optional telemetry target | Publish behavior requires validation |

Do not claim DNP3, IEC 60870, IEC 61850 or safety controller behavior for IER-100.

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

## Validation Status

IER-100 remains under engineering validation. Relay rating, analog accuracy, RS485 isolation, operating temperature, environmental rating and final protocol behavior should stay unpublished until prototype evidence is available.

## FAQ

### Is IER-100 the same as IEG-100?

No. IER-100 is an RTU with planned built-in IO. IEG-100 is a gateway focused on Modbus data collection and MQTT publishing.

### Does IER-100 include 4G?

No. IER-100 is Ethernet-only. Cellular RTU behavior belongs to IER-140.

### What is the planned IO baseline?

The planning baseline is 4DI + 2DO/relay + 2AI.

### Can exact relay and analog specifications be published now?

No. Those claims require component selection and prototype test evidence.
