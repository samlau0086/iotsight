---
id: "ieg-120-wifi-industrial-iot-gateway"
title: "IEG-120 WiFi Industrial IoT Gateway"
excerpt: "indoor WiFi industrial IoT gateway for Modbus data collection and MQTT telemetry."
category: "Industrial IoT Gateway"
model: "IEG-120"
status: "Published"
primaryKeyword: "WiFi industrial IoT gateway"
route: "/products/ieg-120-wifi-industrial-iot-gateway"
order: 4
imageUrl: "/uploads/products/ieg-120-wifi-industrial-iot-gateway.svg"
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
        value: "WiFi"
      - label: "Ethernet"
        value: "Setup or local network interface if included"
      - label: "Wireless Scope"
        value: "Single uplink model, not 4G or LoRa"
      - label: "Best Fit"
        value: "Indoor industrial WiFi sites and retrofit monitoring"
  - title: "Protocols"
    specs:
      - label: "Network Protocols"
        value: "Modbus TCP and MQTT telemetry publishing"
  - title: "Power & Mounting"
    specs:
      - label: "Power Supply"
        value: "9-36VDC"
      - label: "Operating Temperature"
        value: "-20 to 70 C for indoor industrial cabinets"
      - label: "Configuration Method"
        value: "Local web setup for WiFi onboarding and device parameters"
      - label: "Mounting"
        value: "DIN rail cabinet deployment"
selectionGuide:
  chooseWhen:
    - "The site has reliable indoor WiFi but no convenient Ethernet drop."
    - "You need Modbus collection and MQTT telemetry without local I/O."
    - "The device will stay in indoor cabinets, utility rooms, or OEM equipment areas."
  notFitWhen:
    - "The site needs outdoor long-range wireless or cellular backhaul."
    - "You need built-in DI/DO/AI instead of a gateway-only device."
    - "The site already has stable wired Ethernet and does not need WiFi onboarding."
  compareLinks:
    - href: "/products/ieg-100-ethernet-industrial-iot-gateway"
      label: "Compare with IEG-100 Ethernet Gateway"
    - href: "/products/ier-120-wifi-remote-monitoring-rtu"
      label: "Compare with IER-120 WiFi RTU"
    - href: "/knowledge/wifi-industrial-iot-gateway"
      label: "When to Use WiFi in Industrial IoT"
bomGroups:
  - title: "Cabinet Essentials"
    items:
      - "24VDC or 12VDC DIN rail power supply"
      - "DIN rail mounting hardware"
      - "Panel labeling and terminal blocks"
      - "WiFi onboarding and access credential checklist"
  - title: "Wireless & Field Side"
    items:
      - "WiFi antenna or better antenna placement accessory"
      - "Shielded RS485 cable"
      - "Modbus device list and register worksheet"
      - "MQTT broker and topic planning sheet"
preSalesFaq:
  - question: "Can WiFi credentials be configured locally?"
    answer: "Yes. IEG-120 supports local WiFi onboarding and device parameter setup."
  - question: "Is this suitable for export OEM projects?"
    answer: "Yes. It is a good fit for indoor OEM or cabinet-based monitoring projects that need WiFi uplink and Modbus data collection."
  - question: "Can you help adapt the MQTT structure to our platform?"
    answer: "Yes. MQTT topic structure, payload fields, and broker parameters can be aligned to your platform requirements."
---

## WiFi Gateway For Indoor Industrial Sites

IEG-120 is a WiFi industrial IoT gateway for indoor deployments where a reliable wireless LAN is available. It is built to collect Modbus data from industrial devices and publish telemetry to MQTT-based monitoring systems in building, factory, and OEM monitoring environments.

This page describes the standard application fit, architecture and product boundary for buyers comparing indoor WiFi gateway options.

## Architecture

| Layer | Role | Configuration Notes |
| --- | --- | --- |
| WiFi | Indoor wireless uplink | Best fit for sites with stable local WiFi coverage |
| Ethernet | Setup or local network interface if included | Useful for setup, maintenance or hybrid cabinet networking |
| RS485 | Modbus RTU field interface | Standard fieldbus path for meters, instruments and Remote IO |
| Modbus TCP | Network device polling | Suitable for LAN-connected industrial devices |
| MQTT | Telemetry publishing | Suitable for dashboard, broker and cloud telemetry workflows |

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
