---
id: ier-120-wifi-remote-monitoring-rtu
title: IER-120 WiFi Remote Monitoring RTU
excerpt: indoor WiFi RTU with 4DI, 2DO/relay, 2AI, RS485 and MQTT telemetry targets.
category: Industrial RTU
model: IER-120
status: Available for project inquiry
primaryKeyword: WiFi RTU
route: /products/ier-120-wifi-remote-monitoring-rtu
order: 5
---

## WiFi RTU For Indoor Monitoring

IER-120 is designed as a WiFi remote monitoring RTU for indoor facilities, equipment rooms and cabinets where a reliable wireless LAN is available. Its intended role is to collect local IO and Modbus data, then send telemetry after firmware and WiFi confirmation.

This product brief describes target configurations for project discussion and application matching.

## IO Baseline

| IO Type | Target Count | Configuration Notes |
| --- | --- | --- |
| Digital input | 4 | Input mode and pulse behavior should be confirmed during project review |
| Digital output or relay | 2 | Output type and rating should be confirmed during project review |
| Analog input | 2 | 4-20mA and/or 0-10V behavior should be confirmed during project review |

## Network And Protocol Direction

| Layer | Role | Configuration Notes |
| --- | --- | --- |
| WiFi | Indoor wireless uplink target | Module and RF confirmation |
| RS485 | Modbus RTU field communication target | Project engineering confirmation |
| MQTT | Telemetry upload target | Publish and reconnect behavior should be confirmed during project review |
| Ethernet | Setup or local interface if included | Final Project engineering confirmation |

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

Confirm 4G, LoRa, 5G, outdoor long-range wireless behavior, hazardous-area certification, relay rating, analog accuracy, RS485 isolation or WiFi certification until those capabilities are validated.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## FAQ

### Does IER-120 include 4G?

No. 4G belongs to IER-140.

### Does IER-120 include LoRa?

No. LoRaWAN products are separate model families.

### What is the IO Baseline?

The planning baseline is 4DI + 2DO/relay + 2AI.

### Can exact WiFi range be published now?

No. Range depends on module, antenna, enclosure, site layout and RF conditions, so it should be confirmed during project review.





