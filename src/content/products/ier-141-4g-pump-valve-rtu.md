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

IER-141 is designed as a 4G LTE Cat1 pump and valve RTU for remote water, utility and agriculture sites that need more local signals than a basic 2DI/2DO relay controller. Its intended role is to monitor dry contacts, read analog transmitters, control relay outputs, communicate with RS485 Modbus equipment and connect to MQTT or the IoTEdges web dashboard.

This product brief describes target configurations for project discussion and application matching.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for remote pump and valve sites | Module, band and carrier confirmation |
| MQTT | Telemetry publishing and command workflow target | Topic, QoS, retry and security behavior should be confirmed during project review |
| Web dashboard | Remote status, control, alarms and schedule configuration target | Dashboard workflow and permission model should be confirmed during project review |
| Digital input | 4DI for pump feedback, valve status, float switch or alarm contact | Input mode and pulse behavior should be confirmed during project review |
| Digital output | 4DO or relay outputs for pump, valve, alarm or auxiliary control | Output type and contact rating should be confirmed during project review |
| Analog input | 2AI for pressure, level, flow or current transmitter | Input range and accuracy should be confirmed during project review |
| RS485 | Local fieldbus interface for VFD, meter or controller data | Isolation, surge and wiring behavior should be confirmed during project review |
| Modbus Master | Poll downstream Modbus RTU devices over RS485 | Register mapping and polling limits should be confirmed during project review |
| Modbus Slave | Expose selected status and control registers to local systems | Addressing and register map should be confirmed during project review |
| Scheduled control | Time-based pump or valve control target | Time sync, timezone and fail-safe behavior should be confirmed during project review |
| Alarm push | Event notification target for abnormal status and thresholds | Channel and escalation behavior should be confirmed during project review |
| OTA upgrade | Remote firmware upgrade target | Rollback, security and recovery flow should be confirmed during project review |

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
| VFD integration | RS485 Modbus polling target after register confirmation |
| Remote command | Dashboard or MQTT command target after permission and acknowledgement confirmation |
| Schedule | Time-based pump/valve operation target after fail-safe testing |
| Alarm push | Pump fault, level alarm, pressure threshold and offline notification target |

## Product Boundary

IER-141 should not be described as a safety controller, certified pump protection relay, emergency shutdown system, fire pump controller or grid protection device. Local safety circuits, motor protection and site fail-safe logic should remain independent and confirmed by the project engineer.

Exact relay rating, analog accuracy, LTE bands, IP rating, operating temperature, power input range, SIM compatibility, MQTT security profile or OTA recovery behavior should be confirmed during project engineering review.

## Related Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

## Related Knowledge

- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## FAQ

### How is IER-141 different from IER-140?

IER-140 is the entry 2DI/2DO remote relay RTU. IER-141 is the pump and valve model with more target IO, including 4DI, 4DO and 2AI for pressure, level or flow signals.

### Does IER-141 support MQTT downlink control?

The target direction includes confirmed MQTT command downlink for relay control, schedule updates and configuration. Topic format, command acknowledgement and security behavior are confirmed during firmware and project review.

### Can it control a pump directly?

It is designed for relay-style pump control through an external contactor or control circuit. Final wiring, relay rating, motor protection and fail-safe design should be confirmed during project engineering review.

### Does it include WiFi or LoRa?

No. IER-141 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.





