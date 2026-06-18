---
id: "ier-100-ethernet-industrial-rtu"
title: "IER-100 Ethernet Industrial RTU"
excerpt: "Ethernet industrial RTU with 4DI, 2DO/relay, 2AI, RS485, and Modbus connectivity for wired cabinet monitoring."
category: "Industrial RTU"
model: "IER-100"
status: "Published"
primaryKeyword: "Ethernet industrial RTU"
route: "/products/ier-100-ethernet-industrial-rtu"
order: 3
imageUrl: "/uploads/products/ier-100-ethernet-industrial-rtu.svg"
specGroups:
  - title: "Hardware I/O"
    specs:
      - label: "Digital Inputs"
        value: "4DI"
      - label: "Digital Outputs"
        value: "2DO or relay outputs"
      - label: "Analog Inputs"
        value: "2AI for 4-20mA or 0-10V signals"
      - label: "Field Interface"
        value: "1 x RS485"
  - title: "Communication"
    specs:
      - label: "Uplink"
        value: "Ethernet"
      - label: "Primary Role"
        value: "Local I/O telemetry and relay-style control in wired cabinets"
  - title: "Protocols"
    specs:
      - label: "Protocols"
        value: "Modbus RTU, Modbus TCP, and MQTT telemetry"
  - title: "Power & Mounting"
    specs:
      - label: "Power Supply"
        value: "9-36VDC"
      - label: "Operating Temperature"
        value: "-20 to 70 C for industrial cabinets"
      - label: "Configuration Method"
        value: "Local web UI or engineering setup utility"
      - label: "Mounting"
        value: "DIN rail cabinet deployment"
selectionGuide:
  chooseWhen:
    - "You need local DI, DO, and AI in the same wired Ethernet device."
    - "The application is cabinet-based and already has LAN or SCADA network access."
    - "You need RTU behavior for alarms, contacts, transmitters, and relay-style control."
  notFitWhen:
    - "You only need protocol conversion and no local I/O."
    - "The site is remote and must rely on 4G instead of Ethernet."
    - "The deployment is indoor wireless and better suited to WiFi."
  compareLinks:
    - href: "/products/ieg-100-ethernet-industrial-iot-gateway"
      label: "Compare with IEG-100 Gateway"
    - href: "/products/ier-120-wifi-remote-monitoring-rtu"
      label: "Compare with IER-120 WiFi RTU"
    - href: "/products/ier-140-4g-remote-relay-rtu"
      label: "Compare with IER-140 4G RTU"
bomGroups:
  - title: "Core RTU BOM"
    items:
      - "24VDC or 12VDC DIN rail power supply"
      - "Industrial Ethernet patch cable"
      - "DIN rail and terminal block kit"
      - "Local cabinet fuse and protection accessories"
  - title: "Signal & Control Side"
    items:
      - "Door contact, float switch, or alarm dry contact"
      - "4-20mA pressure, level, or flow transmitter"
      - "Interposing relay or contactor interface for DO"
      - "Shielded RS485 cable for downstream Modbus devices"
preSalesFaq:
  - question: "Can the I/O be customized for an OEM project?"
    answer: "Yes. OEM versions can be reviewed for I/O combination, enclosure, labeling, and firmware scope."
  - question: "Do you provide sample units and integration support?"
    answer: "Yes. Sample units and integration support are available, especially for deployments that need Modbus mapping and field signal review."
  - question: "Can this be branded with our logo?"
    answer: "Yes. OEM branding and front-label customization are available for approved hardware versions."
---

## Ethernet RTU For Wired Monitoring

IER-100 is an Ethernet-only industrial RTU for wired cabinet, LAN and SCADA-style monitoring applications. It combines local digital and analog IO with Modbus communications for pump stations, utility cabinets, building equipment rooms and factory telemetry points.

This page describes the standard I/O baseline, communication scope, and typical applications for deployments that need an RTU rather than a pure gateway.

## Standard I/O Baseline

| IO Type | Standard Count | Configuration Notes |
| --- | --- | --- |
| Digital input | 4 | Suitable for door contact, float switch, alarm and status signals |
| Digital output or relay | 2 | Suitable for relay-style control and auxiliary outputs |
| Analog input | 2 | Suitable for 4-20mA or 0-10V process signals |

## Wired RTU Architecture

Field contacts and sensors connect to local RTU I/O. RS485 connects Modbus field devices. Ethernet connects the RTU to a local LAN, SCADA system, or gateway layer for upstream visibility.

## Protocol Direction

| Protocol | Role | Configuration Notes |
| --- | --- | --- |
| Modbus RTU | RS485 communication | Standard fieldbus path for downstream devices |
| Modbus TCP | Ethernet communication | Suitable for LAN-based industrial integration |
| MQTT | Optional telemetry | Suitable when RTU data needs dashboard or broker visibility |

DNP3, IEC 60870, IEC 61850 and safety-controller functions are outside the baseline IER-100 positioning.

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

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| DIN rail power supply | Cabinet power for RTU, sensors and auxiliary devices |
| Shielded RS485 cable | Connect Modbus field devices to the RTU |
| Door contact, float switch or alarm contact | Typical digital input sources |
| Interposing relay or contactor interface | Protect RTU output when controlling field loads |
| 4-20mA pressure, level or flow transmitter | Typical analog input source for pump, tank and utility monitoring |

See [Industrial IoT Accessories](/accessories), [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for accessory planning.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)
- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)

## FAQ

### Is IER-100 the same as IEG-100?

No. IER-100 is an RTU with built-in IO. IEG-100 is a gateway focused on Modbus data collection and MQTT publishing.

### Does IER-100 include 4G?

No. IER-100 is Ethernet-only. Cellular RTU behavior belongs to IER-140.

### What is the standard I/O baseline?

The standard baseline is 4DI + 2DO/relay + 2AI.

### Where should final relay and analog specifications be taken from?

Use the released datasheet of the selected hardware version for final relay ratings, analog ranges, and installation limits.
