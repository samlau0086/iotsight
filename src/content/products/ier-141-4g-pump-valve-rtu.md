---
id: "ier-141-4g-pump-valve-rtu"
title: "IER-141 4G Pump & Valve RTU"
excerpt: "4G LTE Cat1 pump and valve RTU with 4DI, 4DO, 2AI, RS485, MQTT, Modbus Master/Slave, scheduled control, alarm push, and OTA upgrade."
category: "4G Pump & Valve RTU"
model: "IER-141"
status: "Available for project inquiry"
primaryKeyword: "4G pump controller RTU"
route: "/products/ier-141-4g-pump-valve-rtu"
order: 8
imageUrl: "/uploads/products/ier-141-4g-pump-valve-rtu.svg"
specGroups:
  - title: "Hardware I/O"
    specs:
      - label: "Digital Inputs"
        value: "4DI"
      - label: "Digital Outputs"
        value: "4DO or relay outputs"
      - label: "Analog Inputs"
        value: "2AI for pressure, level, flow, or current transmitters"
      - label: "Field Interface"
        value: "1 x RS485"
  - title: "Communication"
    specs:
      - label: "Uplink"
        value: "4G LTE Cat1"
      - label: "Best Fit"
        value: "Pump stations, valve chambers, irrigation, and water cabinets"
  - title: "Protocols"
    specs:
      - label: "Protocols"
        value: "MQTT, Modbus Master, Modbus Slave"
      - label: "Local Features"
        value: "Scheduled control, alarm push, OTA upgrade"
  - title: "Power & Mounting"
    specs:
      - label: "Power Supply"
        value: "9-36VDC"
      - label: "Operating Temperature"
        value: "-20 to 70 C for water, utility, and irrigation cabinets"
      - label: "Configuration Method"
        value: "Local web UI with remote dashboard setup for alarms and schedules"
      - label: "Mounting"
        value: "DIN rail cabinet deployment"
selectionGuide:
  chooseWhen:
    - "The site needs more field signals than a basic 2DI/2DO relay RTU."
    - "You need 4DI, 4DO, and 2AI for pump, valve, irrigation, pressure, or level workflows."
    - "The deployment is a water, utility, or agriculture cabinet that uses 4G as the uplink."
  notFitWhen:
    - "The application only needs a small relay RTU with minimal I/O."
    - "The application is mainly dry-contact cabinet alarms and not analog process monitoring."
    - "The site has wired Ethernet and does not need cellular deployment."
  compareLinks:
    - href: "/products/ier-140-4g-remote-relay-rtu"
      label: "Compare with IER-140 Relay RTU"
    - href: "/products/ier-142-4g-power-cabinet-rtu"
      label: "Compare with IER-142 Power Cabinet RTU"
    - href: "/knowledge/pump-control-rtu"
      label: "Read the Pump Control RTU Guide"
bomGroups:
  - title: "Water Cabinet BOM"
    items:
      - "9-36VDC power supply"
      - "External 4G antenna with cabinet feed-through"
      - "SIM card and APN checklist"
      - "DIN rail enclosure or irrigation cabinet space"
  - title: "Pump & Valve Side"
    items:
      - "Pressure, level, or flow transmitter"
      - "Float switch, run feedback, or fault contact"
      - "Contactor or relay interface for pump and valve outputs"
      - "RS485 cable for VFD, flow meter, or Modbus meter"
preSalesFaq:
  - question: "Can analog input scaling and alarm logic be matched to our sensors?"
    answer: "Yes. Analog scaling, threshold logic, and dashboard display mapping can be configured for the selected pressure, level, or flow transmitters."
  - question: "Do you support irrigation or water-project OEM variants?"
    answer: "Yes. OEM and private-label options are available for agriculture, water, and utility deployments."
  - question: "Can you help define the full pump control BOM?"
    answer: "Yes. We can help define transmitter type, fault contact list, relay interface, RS485 devices, and cabinet-side accessory planning."
---

## 4G RTU For Pumps, Valves And Irrigation Cabinets

IER-141 is a 4G LTE Cat1 pump and valve RTU for remote water, utility and agriculture sites that need more local signals than a basic 2DI/2DO relay controller. It combines dry-contact monitoring, analog transmitter inputs, relay outputs, RS485 Modbus integration and cloud connectivity for field control cabinets.

This page describes the standard product role, I/O baseline, and deployment fit for applications built around pumps, valves, pressure, and level signals.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for remote pump and valve sites | Single-uplink cellular architecture for distributed assets |
| MQTT | Telemetry publishing and command workflow | Suitable for broker, dashboard and cloud telemetry workflows |
| Web dashboard | Remote status, control, alarms and schedule configuration | Suitable for operator visibility and remote management |
| Digital input | 4DI for pump feedback, valve status, float switch or alarm contact | Typical use: run, fault, position and local status signals |
| Digital output | 4DO or relay outputs for pump, valve, alarm or auxiliary control | Typical use: relay-style start, stop and open-close control |
| Analog input | 2AI for pressure, level, flow or current transmitter | Typical use: process monitoring and threshold alarm logic |
| RS485 | Local fieldbus interface for VFD, meter or controller data | Standard Modbus RTU integration path |
| Modbus Master | Poll downstream Modbus RTU devices over RS485 | Suitable for local telemetry expansion |
| Modbus Slave | Expose selected status and control registers to local systems | Suitable for local supervisory integration |
| Scheduled control | Time-based pump or valve control | Suitable for routine control and irrigation workflows |
| Alarm push | Event notification for abnormal status and thresholds | Suitable for exception and maintenance response |
| OTA upgrade | Remote firmware upgrade | Suitable for remote lifecycle management |

## Standard I/O Baseline

| IO Type | Target Count | Typical Use |
| --- | --- | --- |
| Digital input | 4DI | Pump run feedback, pump fault, float switch, local/remote mode, valve position |
| Digital output or relay | 4DO | Pump start/stop, valve open/close, alarm horn, auxiliary relay |
| Analog input | 2AI | Pressure transmitter, tank level, flow signal or current sensor |
| RS485 | 1 port | VFD, flow meter, energy meter, Modbus IO or local controller |

## Target Applications

- water pump station remote control
- water valve chamber monitoring
- irrigation pump and valve control
- tank level and pump interlock monitoring
- small water treatment cabinet telemetry
- booster pump and pressure monitoring
- agricultural irrigation scheduling

## Pump And Valve Control Direction

| Capability | Configuration Direction |
| --- | --- |
| Pump status | DI-based run/fault/local-auto status collection |
| Valve status | DI-based open/close or position feedback |
| Pressure/level | AI-based transmitter input |
| VFD integration | RS485 Modbus polling for local drive telemetry |
| Remote command | Dashboard or MQTT command with controlled permissions |
| Schedule | Time-based pump or valve operation |
| Alarm push | Pump fault, level alarm, pressure threshold, and offline notification |

## Product Boundary

IER-141 should not be described as a safety controller, certified pump protection relay, emergency shutdown system, fire pump controller, or grid protection device. Local safety circuits, motor protection, and site fail-safe logic should remain independent.

Exact relay rating, analog accuracy, LTE bands, IP rating, operating temperature, power input range, SIM compatibility, and MQTT security profile should follow the released hardware version and deployment design.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| 4G LTE external antenna | Remote pump stations, irrigation cabinets and rural sites |
| 4-20mA pressure or level transmitter | Analog monitoring for pressure, tank level or flow-related signals |
| Float switch or pump fault contact | Digital input feedback for pump and tank status |
| Interposing relay or contactor interface | Pump start/stop, valve open/close or alarm output interface |
| Shielded RS485 cable | Connect VFD, flow meter, energy meter or Modbus IO modules |

See [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for pump and valve accessory planning.

## Related Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

## Related Knowledge

- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)
- [Pump Control RTU: Signals, Relays, Pressure Inputs and Remote Monitoring](/knowledge/pump-control-rtu)

## FAQ

### How is IER-141 different from IER-140?

IER-140 is the entry 2DI/2DO remote relay RTU. IER-141 is the pump and valve model with expanded I/O, including 4DI, 4DO, and 2AI for pressure, level, or flow signals.

### Does IER-141 support MQTT downlink control?

Yes. IER-141 is positioned for MQTT command downlink covering relay control, schedule updates and remote configuration workflows.

### Can it control a pump directly?

It is designed for relay-style pump control through the correct contactor or control circuit, not as a direct motor-power switch.

### Does it include WiFi or LoRa?

No. IER-141 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.
