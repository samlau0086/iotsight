---
id: ier-141-4g-pump-valve-rtu
title: IER-141 4G Pump & Valve RTU
excerpt: 4G LTE Cat1 pump and valve RTU with 4DI, 4DO, 2AI, RS485, MQTT, Modbus Master/Slave, scheduled control, alarm push and OTA upgrade targets.
category: 4G Pump & Valve RTU
model: IER-141
status: Available for project inquiry
primaryKeyword: 4G pump controller RTU
route: /products/ier-141-4g-pump-valve-rtu
order: 8
---

## 4G RTU For Pumps, Valves And Irrigation Cabinets

IER-141 is a 4G LTE Cat1 pump and valve RTU for remote water, utility and agriculture sites that need more local signals than a basic 2DI/2DO relay controller. It combines dry-contact monitoring, analog transmitter inputs, relay outputs, RS485 Modbus integration and cloud connectivity for field control cabinets.

This page describes the standard product role, IO baseline and deployment fit for projects built around pumps, valves, pressure and level signals.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for remote pump and valve sites | Single-uplink cellular architecture for distributed assets |
| MQTT | Telemetry publishing and command workflow target | Suitable for broker, dashboard and cloud telemetry workflows |
| Web dashboard | Remote status, control, alarms and schedule configuration target | Suitable for operator visibility and remote management |
| Digital input | 4DI for pump feedback, valve status, float switch or alarm contact | Typical use: run, fault, position and local status signals |
| Digital output | 4DO or relay outputs for pump, valve, alarm or auxiliary control | Typical use: relay-style start, stop and open-close control |
| Analog input | 2AI for pressure, level, flow or current transmitter | Typical use: process monitoring and threshold alarm logic |
| RS485 | Local fieldbus interface for VFD, meter or controller data | Standard Modbus RTU integration path |
| Modbus Master | Poll downstream Modbus RTU devices over RS485 | Suitable for local telemetry expansion |
| Modbus Slave | Expose selected status and control registers to local systems | Suitable for local supervisory integration |
| Scheduled control | Time-based pump or valve control target | Suitable for routine control and irrigation workflows |
| Alarm push | Event notification target for abnormal status and thresholds | Suitable for exception and maintenance response |
| OTA upgrade | Remote firmware upgrade target | Suitable for remote lifecycle management |

## IO Baseline

| IO Type | Target Count | Typical Use |
| --- | --- | --- |
| Digital input | 4DI | Pump run feedback, pump fault, float switch, local/remote mode, valve position |
| Digital output or relay | 4DO | Pump start/stop, valve open/close, alarm horn, auxiliary relay |
| Analog input | 2AI | Pressure transmitter, tank level, flow signal or current sensor |
| RS485 | 1 port target | VFD, flow meter, energy meter, Modbus IO or local controller |

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
| Valve status | DI-based open/close or position feedback target |
| Pressure/level | AI-based transmitter input target |
| VFD integration | RS485 Modbus polling target for local drive telemetry |
| Remote command | Dashboard or MQTT command target with controlled permissions |
| Schedule | Time-based pump or valve operation target |
| Alarm push | Pump fault, level alarm, pressure threshold and offline notification target |

## Product Boundary

IER-141 should not be described as a safety controller, certified pump protection relay, emergency shutdown system, fire pump controller or grid protection device. Local safety circuits, motor protection and site fail-safe logic should remain independent and confirmed by the project engineer.

Exact relay rating, analog accuracy, LTE bands, IP rating, operating temperature, power input range, SIM compatibility and MQTT security profile should follow the released hardware version and deployment scope.

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

IER-140 is the entry 2DI/2DO remote relay RTU. IER-141 is the pump and valve model with more target IO, including 4DI, 4DO and 2AI for pressure, level or flow signals.

### Does IER-141 support MQTT downlink control?

Yes. IER-141 is positioned for MQTT command downlink covering relay control, schedule updates and remote configuration workflows.

### Can it control a pump directly?

It is designed for relay-style pump control through the correct contactor or control circuit, not as a direct motor-power switch.

### Does it include WiFi or LoRa?

No. IER-141 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.





