---
id: ieg-120-wifi-industrial-iot-gateway
title: IEG-120 WiFi Industrial IoT Gateway
excerpt: indoor WiFi industrial IoT gateway for Modbus data collection and MQTT telemetry.
category: Industrial IoT Gateway
model: IEG-120
status: Available for project inquiry
primaryKeyword: WiFi industrial IoT gateway
route: /products/ieg-120-wifi-industrial-iot-gateway
order: 4
---

## WiFi Gateway For Indoor Industrial Sites

IEG-120 is designed as a WiFi industrial IoT gateway for indoor deployments where a reliable wireless LAN is available. Its intended role is to collect Modbus data from industrial devices and publish telemetry to MQTT-based monitoring systems after firmware and WiFi confirmation.

This product brief describes target configurations for project discussion and application matching.

## Architecture

| Layer | Role | Configuration Notes |
| --- | --- | --- |
| WiFi | Indoor wireless uplink target | Module and RF confirmation |
| Ethernet | Setup or local network interface if included | Final Project engineering confirmation |
| RS485 | Modbus RTU field interface target | Project engineering confirmation |
| Modbus TCP | Network device polling target | firmware confirmation required |
| MQTT | Telemetry publishing target | Payload and reconnect behavior should be confirmed during project review |

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

IEG-120 is a baseline WiFi gateway. Confirm OPC UA, BACnet, CAN, TLS, offline buffering, exact polling limits, WiFi range or WiFi certification until those capabilities are validated.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| WiFi antenna | Indoor cabinet or equipment-room wireless connection planning |
| Shielded RS485 cable | Modbus RTU wiring for meters, instruments or Remote IO modules |
| DIN rail power supply | Stable cabinet power for the gateway and related field devices |
| Terminal blocks and labels | Cleaner installation and service handover |
| Modbus meter or instrument | Typical data source for factory, building and OEM monitoring |

See [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for accessory selection notes.

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

## FAQ

### Does IEG-120 include 4G?

No. 4G belongs to IEG-140.

### Does IEG-120 include LoRa?

No. LoRaWAN products are separate model families.

### Is IEG-120 suitable for outdoor long-range wireless?

Do not position it that way. IEG-120 is best framed as an indoor WiFi gateway.

### Does it support MQTT?

MQTT publishing is designed, but payload and reconnect behavior should be confirmed during project review.





