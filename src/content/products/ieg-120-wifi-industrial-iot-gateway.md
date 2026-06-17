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

IEG-120 is a WiFi industrial IoT gateway for indoor deployments where a reliable wireless LAN is available. It is built to collect Modbus data from industrial devices and publish telemetry to MQTT-based monitoring systems in building, factory and OEM monitoring projects.

This page describes the standard application fit, architecture and product boundary for buyers comparing indoor WiFi gateway options.

## Architecture

| Layer | Role | Configuration Notes |
| --- | --- | --- |
| WiFi | Indoor wireless uplink target | Best fit for sites with stable local WiFi coverage |
| Ethernet | Setup or local network interface if included | Useful for setup, maintenance or hybrid cabinet networking |
| RS485 | Modbus RTU field interface target | Standard fieldbus path for meters, instruments and Remote IO |
| Modbus TCP | Network device polling target | Suitable for LAN-connected industrial devices |
| MQTT | Telemetry publishing target | Suitable for dashboard, broker and cloud telemetry workflows |

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

IEG-120 is a baseline WiFi gateway. Buyers that need OPC UA, BACnet, CAN, advanced edge logic, larger protocol scope or specialized wireless certification should evaluate a higher-tier platform path.

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
- [WiFi Industrial IoT Gateway: When to Use WiFi Instead of Ethernet or 4G](/knowledge/wifi-industrial-iot-gateway)

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

Yes. IEG-120 is positioned for MQTT telemetry publishing in indoor industrial monitoring deployments.





