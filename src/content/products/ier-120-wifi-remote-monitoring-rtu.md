---
id: ier-120-wifi-remote-monitoring-rtu
title: IER-120 WiFi Remote Monitoring RTU
excerpt: Public-safe draft for a planned indoor WiFi RTU with 4DI, 2DO/relay, 2AI, RS485 and MQTT telemetry targets.
category: Industrial RTU
model: IER-120
status: Public-safe draft
primaryKeyword: WiFi RTU
route: /products/ier-120-wifi-remote-monitoring-rtu
order: 5
---

## WiFi RTU For Indoor Monitoring

IER-120 is planned as a WiFi remote monitoring RTU for indoor facilities, equipment rooms and cabinets where a reliable wireless LAN is available. Its intended role is to collect local IO and Modbus data, then send telemetry after firmware and WiFi validation.

This page uses validation-safe wording. WiFi performance, relay rating, analog accuracy, RS485 isolation and final MQTT behavior remain under validation.

## Planned IO Baseline

| IO Type | Planned Count | Validation Status |
| --- | --- | --- |
| Digital input | 4 | Input mode and pulse behavior require validation |
| Digital output or relay | 2 | Output type and rating require validation |
| Analog input | 2 | 4-20mA and/or 0-10V behavior requires validation |

## Network And Protocol Direction

| Layer | Planned Role | Validation Status |
| --- | --- | --- |
| WiFi | Indoor wireless uplink target | Module and RF validation required |
| RS485 | Modbus RTU field communication target | Hardware validation required |
| MQTT | Telemetry upload target | Publish and reconnect behavior require validation |
| Ethernet | Setup or local interface if included | Final hardware validation required |

IER-120 should not be positioned as a 4G RTU, LoRa RTU or outdoor long-range wireless product.

## Suitable Applications

- factory utility monitoring
- building equipment alarms
- compressor room monitoring
- chiller room monitoring
- indoor cabinet monitoring
- OEM machine status monitoring

## Model Comparison

| Model | Uplink | Best Fit |
| --- | --- | --- |
| IER-100 | Ethernet | Wired LAN and cabinet deployments |
| IER-120 | WiFi | Indoor WiFi-enabled sites |
| IER-140 | 4G LTE | Remote sites without wired LAN |

## Product Boundary

Do not claim 4G, LoRa, 5G, outdoor long-range wireless behavior, hazardous-area certification, relay rating, analog accuracy, RS485 isolation or WiFi certification until those capabilities are validated.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## Validation Status

IER-120 remains under engineering validation. Exact WiFi module behavior, antenna performance, relay rating, analog accuracy, RS485 isolation, MQTT retry behavior and environmental ratings will be published only after prototype tests and documentation are complete.

## FAQ

### Does IER-120 include 4G?

No. 4G belongs to IER-140.

### Does IER-120 include LoRa?

No. LoRaWAN products are separate model families.

### What is the planned IO baseline?

The planning baseline is 4DI + 2DO/relay + 2AI.

### Can exact WiFi range be published now?

No. Range depends on module, antenna, enclosure, site layout and RF conditions, so it requires validation.
