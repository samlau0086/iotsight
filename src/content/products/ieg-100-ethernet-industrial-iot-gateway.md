---
id: ieg-100-ethernet-industrial-iot-gateway
title: IEG-100 Ethernet Industrial IoT Gateway
excerpt: Ethernet-only industrial IoT gateway designed for Modbus RTU/TCP data collection and MQTT publishing.
category: Industrial IoT Gateway
model: IEG-100
status: Available for project inquiry
primaryKeyword: Ethernet industrial IoT gateway
route: /products/ieg-100-ethernet-industrial-iot-gateway
order: 1
---

## Ethernet Gateway For Wired Industrial Sites

IEG-100 is designed as an Ethernet-only industrial IoT gateway for wired LAN and cabinet deployments. Its intended role is to collect data from Modbus field devices and publish telemetry to MQTT-based monitoring systems after firmware confirmation.

This product brief describes target configurations for project discussion and application matching.

## Architecture

| Layer | Role | Configuration Notes |
| --- | --- | --- |
| Ethernet | Wired uplink and local network connection | Project engineering confirmation |
| RS485 | Modbus RTU field interface target | Isolation and protection should be confirmed during project review |
| Modbus TCP | Ethernet device polling target | firmware confirmation required |
| MQTT | Telemetry publishing target | Payload and broker behavior should be confirmed during project review |

IEG-100 should not be positioned as a 4G, WiFi or LoRa gateway. Those uplinks belong to separate IoTEdges model families.

## Suitable Applications

- energy meter data collection
- solar inverter monitoring through site LAN
- factory utility monitoring
- building equipment rooms
- OEM equipment monitoring where Ethernet is available
- water or environmental equipment cabinets with wired network access

## Product Boundary

IEG-100 is a baseline gateway, not an advanced edge gateway. OPC UA, BACnet, CAN, remote write/control, TLS, offline buffering and exact point-count limits are handled as project-specific options after capability confirmation.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| Shielded RS485 cable | Connect Modbus RTU meters, inverters, instruments or Remote IO modules |
| Pluggable terminal blocks | Faster cabinet wiring and service replacement |
| DIN rail power supply | Stable 12V or 24V DC supply for cabinet installations |
| RS485 surge or isolation module | Recommended for noisy, long-cable or outdoor-connected fieldbus projects |
| Modbus energy meter or instrument | Common data source for energy, solar and equipment monitoring |

See [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for project accessory planning.

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

## FAQ

### Is IEG-100 a 4G gateway?

No. IEG-100 is the Ethernet-only model. 4G gateway behavior belongs to IEG-140.

### Does IEG-100 support WiFi or LoRa?

No. WiFi and LoRaWAN are separate product families.

### Does IEG-100 support OPC UA?

Not as a baseline IEG-100 claim. Advanced protocols belong to later edge gateway models after engineering confirmation.

### Can I publish exact device count or polling speed?

Exact values are confirmed during firmware and prototype review.





