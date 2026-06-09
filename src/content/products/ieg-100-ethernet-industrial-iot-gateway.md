---
id: ieg-100-ethernet-industrial-iot-gateway
title: IEG-100 Ethernet Industrial IoT Gateway
excerpt: Public-safe draft for an Ethernet-only industrial IoT gateway planned for Modbus RTU/TCP data collection and MQTT publishing.
category: Industrial IoT Gateway
model: IEG-100
status: Public-safe draft
primaryKeyword: Ethernet industrial IoT gateway
route: /products/ieg-100-ethernet-industrial-iot-gateway
order: 1
---

## Ethernet Gateway For Wired Industrial Sites

IEG-100 is planned as an Ethernet-only industrial IoT gateway for wired LAN and cabinet deployments. Its intended role is to collect data from Modbus field devices and publish telemetry to MQTT-based monitoring systems after firmware validation.

This product page uses validation-safe wording. Exact polling limits, MQTT payload behavior, RS485 isolation and final firmware options will be published only after prototype testing.

## Planned Architecture

| Layer | Planned Role | Validation Status |
| --- | --- | --- |
| Ethernet | Wired uplink and local network connection | Hardware validation required |
| RS485 | Modbus RTU field interface target | Isolation and protection require validation |
| Modbus TCP | Ethernet device polling target | Firmware validation required |
| MQTT | Telemetry publishing target | Payload and broker behavior require validation |

IEG-100 should not be positioned as a 4G, WiFi or LoRa gateway. Those uplinks belong to separate IoTEdges model families.

## Suitable Applications

- energy meter data collection
- solar inverter monitoring through site LAN
- factory utility monitoring
- building equipment rooms
- OEM equipment monitoring where Ethernet is available
- water or environmental equipment cabinets with wired network access

## Product Boundary

IEG-100 is a baseline gateway, not an advanced edge gateway. Do not claim OPC UA, BACnet, CAN, remote write/control, TLS, offline buffering or exact point-count limits until those capabilities are validated.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## Model Comparison

| Model | Uplink | Best Fit |
| --- | --- | --- |
| IEG-100 | Ethernet | Wired LAN and cabinet deployments |
| IEG-120 | WiFi | Indoor WiFi deployments |
| IEG-140 | 4G LTE | Remote sites without wired LAN |

## Validation Status

IEG-100 remains under engineering validation. The current page can describe intended architecture and use cases, but final datasheet values require Modbus polling, MQTT publishing, RS485 and Ethernet prototype reports.

## FAQ

### Is IEG-100 a 4G gateway?

No. IEG-100 is the Ethernet-only model. 4G gateway behavior belongs to IEG-140.

### Does IEG-100 support WiFi or LoRa?

No. WiFi and LoRaWAN are separate product families.

### Does IEG-100 support OPC UA?

Not as a baseline IEG-100 claim. Advanced protocols belong to later edge gateway models after validation.

### Can I publish exact device count or polling speed?

Not yet. Those values require firmware and prototype validation.
