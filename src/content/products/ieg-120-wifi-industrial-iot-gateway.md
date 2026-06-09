---
id: ieg-120-wifi-industrial-iot-gateway
title: IEG-120 WiFi Industrial IoT Gateway
excerpt: Public-safe draft for a planned indoor WiFi industrial IoT gateway for Modbus data collection and MQTT telemetry.
category: Industrial IoT Gateway
model: IEG-120
status: Public-safe draft
primaryKeyword: WiFi industrial IoT gateway
route: /products/ieg-120-wifi-industrial-iot-gateway
order: 4
---

## WiFi Gateway For Indoor Industrial Sites

IEG-120 is planned as a WiFi industrial IoT gateway for indoor deployments where a reliable wireless LAN is available. Its intended role is to collect Modbus data from industrial devices and publish telemetry to MQTT-based monitoring systems after firmware and WiFi validation.

This page uses validation-safe wording. WiFi range, certification, antenna performance, MQTT limits and final firmware behavior remain under validation.

## Planned Architecture

| Layer | Planned Role | Validation Status |
| --- | --- | --- |
| WiFi | Indoor wireless uplink target | Module and RF validation required |
| Ethernet | Setup or local network interface if included | Final hardware validation required |
| RS485 | Modbus RTU field interface target | Hardware validation required |
| Modbus TCP | Network device polling target | Firmware validation required |
| MQTT | Telemetry publishing target | Payload and reconnect behavior require validation |

IEG-120 should not be positioned as a 4G gateway, LoRa gateway or outdoor long-range wireless device.

## Good-Fit Applications

- building energy monitoring
- factory utility monitoring
- compressor room monitoring
- chiller room monitoring
- indoor OEM machine monitoring
- retrofit data collection where Ethernet cabling is difficult

## Poor-Fit Applications

- remote sites without WiFi
- cellular backhaul projects
- long-range wireless sensor networks
- hazardous areas without certification
- outdoor installations without validated enclosure and RF design

## Product Boundary

IEG-120 is a baseline WiFi gateway. Do not claim OPC UA, BACnet, CAN, TLS, offline buffering, exact polling limits, WiFi range or WiFi certification until those capabilities are validated.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## Model Comparison

| Model | Uplink | Best Fit |
| --- | --- | --- |
| IEG-100 | Ethernet | Wired LAN and cabinet deployments |
| IEG-120 | WiFi | Indoor wireless LAN deployments |
| IEG-140 | 4G LTE | Remote sites without wired LAN |

## Validation Status

IEG-120 remains under engineering validation. Exact WiFi module behavior, RF performance, MQTT reconnect behavior, data point limits, polling limits and environmental ratings will be published only after prototype reports are available.

## FAQ

### Does IEG-120 include 4G?

No. 4G belongs to IEG-140.

### Does IEG-120 include LoRa?

No. LoRaWAN products are separate model families.

### Is IEG-120 suitable for outdoor long-range wireless?

Do not position it that way. IEG-120 is best framed as an indoor WiFi gateway.

### Does it support MQTT?

MQTT publishing is planned, but payload and reconnect behavior require validation.
