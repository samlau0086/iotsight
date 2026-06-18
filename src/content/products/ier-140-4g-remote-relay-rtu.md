---
id: "ier-140-4g-remote-relay-rtu"
title: "IER-140 4G Remote Relay RTU"
excerpt: "4G LTE Cat1 remote relay RTU with MQTT, web dashboard, 2DI, 2DO, RS485, Modbus Master/Slave, scheduled control, alarm push, and OTA upgrade."
category: "4G Remote Relay RTU"
model: "IER-140"
status: "Available for project inquiry"
primaryKeyword: "IoT remote relay RTU"
route: "/products/ier-140-4g-remote-relay-rtu"
order: 7
imageUrl: "/uploads/products/ier-140-4g-remote-relay-rtu.svg"
specGroups:
  - title: "Hardware I/O"
    specs:
      - label: "Digital Inputs"
        value: "2DI"
      - label: "Digital Outputs"
        value: "2DO or relay outputs"
      - label: "Field Interface"
        value: "1 x RS485"
  - title: "Communication"
    specs:
      - label: "Uplink"
        value: "4G LTE Cat1"
      - label: "Best Fit"
        value: "Pump, valve, cabinet, street light, and remote relay control"
  - title: "Protocols"
    specs:
      - label: "Protocols"
        value: "MQTT, Modbus Master, Modbus Slave"
      - label: "Local Features"
        value: "Web dashboard, scheduled control, alarm push, OTA upgrade"
  - title: "Power & Mounting"
    specs:
      - label: "Power Supply"
        value: "9-36VDC"
      - label: "Operating Temperature"
        value: "-20 to 70 C for remote control cabinets"
      - label: "Configuration Method"
        value: "Local web UI with remote dashboard parameter management"
      - label: "Mounting"
        value: "DIN rail cabinet deployment"
selectionGuide:
  chooseWhen:
    - "The site is remote and needs 4G plus basic local relay control."
    - "You need 2DI and 2DO for status and switching without moving to a larger RTU."
    - "The use case is pump, valve, cabinet, street light, or remote relay automation."
  notFitWhen:
    - "You need more local signals such as 4DI, 4DO, or analog inputs."
    - "The device is mainly for gate or barrier access rather than general remote control."
    - "The site already has Ethernet or WiFi and does not need cellular uplink."
  compareLinks:
    - href: "/products/ier-141-4g-pump-valve-rtu"
      label: "Compare with IER-141 Pump and Valve RTU"
    - href: "/products/ieac-140-4g-gsm-gate-opener"
      label: "Compare with IEAC-140 Gate Opener"
    - href: "/products/ier-100-ethernet-industrial-rtu"
      label: "Compare with IER-100 Ethernet RTU"
bomGroups:
  - title: "Remote Cabinet BOM"
    items:
      - "9-36VDC power supply or site DC source"
      - "External 4G antenna"
      - "SIM card with APN settings"
      - "DIN rail enclosure or protected control box"
  - title: "Control Interface"
    items:
      - "Dry-contact status inputs"
      - "Interposing relay or contactor for DO output"
      - "RS485 cable to Modbus meter or instrument"
      - "Alarm routing worksheet for dashboard, SMS, or email"
preSalesFaq:
  - question: "Can relay behavior and timing be adapted for our control workflow?"
    answer: "Yes. Pulse logic, schedule behavior, alarm rules, and command mapping can be configured for the required control workflow."
  - question: "Do you offer evaluation support for pump, valve, or cabinet projects?"
    answer: "Yes. Evaluation support can include signal review, relay interface planning, and MQTT or dashboard workflow setup."
  - question: "Can the product be OEM-branded?"
    answer: "Yes. OEM labeling and product documentation are available for branding programs."
---

## 4G Remote Relay RTU For Field Control

IER-140 is a 4G LTE Cat1 remote relay RTU for sites that need remote monitoring and relay-style control without wired internet. It combines digital inputs, relay outputs, RS485 Modbus integration and cloud connectivity for pumps, valves, cabinets, generators, alarms and remote equipment.

This page describes the standard product role, IO baseline and deployment fit for industrial buyers comparing 4G relay RTUs.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for remote sites | Single-uplink cellular architecture for distributed deployments |
| MQTT | Telemetry publishing and command workflow | Suitable for broker, dashboard and cloud telemetry workflows |
| Web dashboard | Remote status, control and configuration | Suitable for fleet visibility and operator access |
| Digital input | 2DI for status, alarm or dry-contact signals | Typical use: status feedback, alarm contact and cabinet signals |
| Digital output | 2DO or relay outputs for remote control | Typical use: pump, valve, light or auxiliary relay control |
| RS485 | Local fieldbus interface | Standard Modbus RTU integration path |
| Modbus Master | Poll meters, IO modules, controllers or instruments | Suitable for local telemetry expansion |
| Modbus Slave | Expose RTU data to local master systems | Suitable for local integration or supervisory polling |
| Scheduled control | Time-based relay control | Suitable for routine control and timed operations |
| Alarm push | Event notification for dashboard, email, SMS or webhook | Suitable for status change and exception handling |
| OTA upgrade | Remote firmware upgrade | Suitable for remote lifecycle management |

## Standard I/O Baseline

The standard baseline is:

| IO Type | Standard Count | Typical Use |
| --- | --- | --- |
| Digital input | 2DI | Pump running feedback, valve position, cabinet door, alarm contact |
| Digital output or relay | 2DO | Pump start/stop, valve open/close, light control, generator start signal |
| RS485 | 1 port | Modbus meters, IO modules, VFDs, instruments or local controllers |

## Remote Control Architecture

Field contacts connect to the 2DI inputs. Controlled equipment connects through the 2DO or relay outputs. RS485 connects local Modbus equipment when additional telemetry or control points are needed. The 4G LTE Cat1 uplink connects the RTU to MQTT and the web dashboard for remote visibility, command delivery, scheduled control, alarm push and OTA upgrade.

## Target Applications

- water pump remote control
- water valve monitoring and control
- power distribution cabinet monitoring
- access control relay triggering
- street light scheduling and remote switching
- generator monitoring and start signal control
- agricultural irrigation control
- remote equipment alarm and status monitoring

## Protocol And Control Direction

| Capability | Configuration Direction |
| --- | --- |
| MQTT uplink | Publish DI, DO status, Modbus values, alarms and heartbeat |
| MQTT downlink | Receive relay control, schedule updates and configuration commands |
| Modbus Master | Poll downstream Modbus RTU devices over RS485 |
| Modbus Slave | Allow local Modbus master to read status or write selected control registers |
| Dashboard control | Remote relay control with user permission and operation logs |
| Alarm push | Notify on DI change, offline status, Modbus exception or threshold rule |
| OTA upgrade | Remote firmware update for lifecycle maintenance |

## Product Boundary

IER-140 should not be described as a safety PLC, emergency shutdown controller, certified fire alarm interface, elevator controller, medical device controller, or grid protection relay. High-risk control use must rely on local safety circuits and fail-safe design.

Exact LTE bands, relay contact rating, isolation voltage, surge level, IP rating, operating temperature, power input range, SIM compatibility, and MQTT security profile should follow the released hardware version and deployment design.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| 4G LTE external antenna | Improve cabinet, rural or weak-signal installations |
| IoT SIM / M2M SIM | Cellular connectivity and APN setup |
| DIN rail power supply | Stable RTU and relay control power |
| Interposing relay or contactor interface | Pump, valve, light or generator auxiliary control |
| Shielded RS485 cable | Connect Modbus meters, instruments or Remote IO modules |

See [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for accessory planning.

## Related Products

- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)
- [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener)

## Related Knowledge

- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## FAQ

### Is IER-140 a gateway or an RTU?

IER-140 is positioned as an RTU because it includes local IO for direct field control. It can also act as a Modbus-to-MQTT edge device when polling RS485 Modbus equipment.

### Does IER-140 support both uplink and downlink MQTT?

Yes. IER-140 is positioned for MQTT telemetry uplink and controlled downlink commands for relay control, schedule updates and configuration workflows.

### Can it control pumps and valves directly?

It is designed for relay-style control of pumps, valves and similar equipment through the correct control circuit, contactor or interface layer.

### Does it include WiFi or LoRa?

No. Following the IoTEdges model rule, IER-140 uses 4G LTE Cat1 as the single wireless uplink. WiFi and LoRa belong to separate model families.
