---
id: "ieg-100-ethernet-industrial-iot-gateway"
title: "IEG-100 Ethernet Industrial IoT Gateway"
excerpt: "Ethernet-only industrial IoT gateway designed for Modbus RTU/TCP data collection and MQTT publishing."
category: "Industrial IoT Gateway"
model: "IEG-100"
status: "Published"
primaryKeyword: "Ethernet industrial IoT gateway"
route: "/products/ieg-100-ethernet-industrial-iot-gateway"
order: 1
imageUrl: "/uploads/products/ieg-100-ethernet-industrial-iot-gateway.svg"
specGroups:
  - title: "Hardware I/O"
    specs:
      - label: "Local I/O"
        value: "No built-in DI/DO; gateway-focused architecture"
      - label: "Field Interface"
        value: "1 x RS485 for Modbus RTU devices"
  - title: "Communication"
    specs:
      - label: "Uplink"
        value: "Ethernet"
      - label: "Best Fit"
        value: "Control cabinets, LAN-connected factories, utility rooms"
  - title: "Protocols"
    specs:
      - label: "Network Protocols"
        value: "Modbus TCP and MQTT telemetry publishing"
      - label: "Primary Role"
        value: "Modbus data collection and MQTT telemetry"
  - title: "Power & Mounting"
    specs:
      - label: "Power Supply"
        value: "9-36VDC for cabinet deployment"
      - label: "Operating Temperature"
        value: "-20 to 70 C for industrial indoor panels"
      - label: "Configuration Method"
        value: "Local web configuration and remote parameter setup"
      - label: "Mounting"
        value: "DIN rail cabinet deployment"
selectionGuide:
  chooseWhen:
    - "The site already has wired LAN or cabinet Ethernet available."
    - "You need Modbus data collection and MQTT telemetry without local DI/DO control."
    - "The application is centered on meters, inverters, instruments, or PLC data collection."
  notFitWhen:
    - "You need local digital or analog I/O on the same device."
    - "The site has no wired internet and really needs 4G backhaul."
    - "The deployment uses indoor WiFi instead of Ethernet."
  compareLinks:
    - href: "/products/ier-100-ethernet-industrial-rtu"
      label: "Compare with IER-100 Ethernet RTU"
    - href: "/products/ieg-120-wifi-industrial-iot-gateway"
      label: "Compare with IEG-120 WiFi Gateway"
    - href: "/products"
      label: "Browse All Gateways and RTUs"
bomGroups:
  - title: "Cabinet Essentials"
    items:
      - "24VDC or 12VDC DIN rail power supply"
      - "DIN rail and terminal block set"
      - "Industrial Ethernet patch cable"
      - "Labeling and panel wiring markers"
  - title: "Field Connectivity"
    items:
      - "Shielded RS485 cable"
      - "RS485 isolation or surge module"
      - "Modbus meter, inverter, or instrument list"
      - "MQTT broker and topic mapping worksheet"
preSalesFaq:
  - question: "Can you provide sample units for testing?"
    answer: "Yes. Sample units can be arranged for evaluation, pilot use, and distributor review."
  - question: "Can the MQTT payload or topic format be adjusted?"
    answer: "Yes. Topic naming, payload mapping, and broker parameters can be adjusted for the target dashboard or OEM workflow."
  - question: "Do you provide Modbus register mapping support?"
    answer: "Yes. We can support device list review, register collection scope, and recommended polling structure for the deployment."
---

## Ethernet Gateway For Wired Industrial Sites

IEG-100 is an Ethernet-only industrial IoT gateway for wired LAN and cabinet deployments. It is built to collect data from Modbus field devices and publish telemetry to MQTT-based monitoring systems in factory, energy, and utility-monitoring environments.

The page below describes the standard application fit, architecture and selection logic for buyers comparing Ethernet gateway options.

## Architecture

| Layer | Role | Configuration Notes |
| --- | --- | --- |
| Ethernet | Wired uplink and local network connection | Best fit for control cabinets, local LANs and equipment rooms |
| RS485 | Modbus RTU field interface | Standard fieldbus path for meters, inverters and instruments |
| Modbus TCP | Ethernet device polling | Suitable for PLCs, meters and networked controllers |
| MQTT | Telemetry publishing | Suitable for dashboard, broker and cloud telemetry workflows |

IEG-100 should not be positioned as a 4G, WiFi or LoRa gateway. Those uplinks belong to separate IoTEdges model families.

## Suitable Applications

- energy meter data collection
- solar inverter monitoring through site LAN
- factory utility monitoring
- building equipment rooms
- OEM equipment monitoring where Ethernet is available
- water or environmental equipment cabinets with wired network access

## Product Boundary

IEG-100 is a baseline gateway, not an advanced multi-protocol edge computer. Buyers that need OPC UA, BACnet, CAN, remote write/control, advanced edge logic or larger protocol scope should evaluate a higher-tier edge gateway path.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| Shielded RS485 cable | Connect Modbus RTU meters, inverters, instruments or Remote IO modules |
| Pluggable terminal blocks | Faster cabinet wiring and service replacement |
| DIN rail power supply | Stable 12V or 24V DC supply for cabinet installations |
| RS485 surge or isolation module | Recommended for noisy, long-cable or outdoor-connected fieldbus installations |
| Modbus energy meter or instrument | Common data source for energy, solar and equipment monitoring |

See [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for accessory planning.

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

Not in the baseline IEG-100 scope. Advanced protocols belong to higher-tier edge gateway models.

### What should I use for exact device count or polling speed planning?

Use the released datasheet and the selected polling map for final sizing. Device count and polling interval depend on register scope, network layout, and reporting frequency.
