---
id: ier-141-4g-pump-valve-rtu
title: IER-141 4G Pump & Valve RTU
excerpt: Public-safe draft for a 4G LTE Cat1 pump and valve RTU with 4DI, 4DO, 2AI, RS485, MQTT, Modbus Master/Slave, scheduled control, alarm push and OTA upgrade targets.
category: 4G Pump & Valve RTU
model: IER-141
status: Public-safe draft
primaryKeyword: 4G pump controller RTU
route: /products/ier-141-4g-pump-valve-rtu
order: 8
---

## 4G RTU For Pumps, Valves And Irrigation Cabinets

IER-141 is planned as a 4G LTE Cat1 pump and valve RTU for remote water, utility and agriculture sites that need more local signals than a basic 2DI/2DO relay controller. Its intended role is to monitor dry contacts, read analog transmitters, control relay outputs, communicate with RS485 Modbus equipment and connect to MQTT or the IoTEdges web dashboard.

This page uses validation-safe wording. Cellular module, LTE bands, relay rating, analog accuracy, RS485 isolation, Modbus behavior, MQTT command behavior, dashboard workflow, alarm push and OTA upgrade behavior must be validated before final datasheet publication.

## Planned Product Role

| Function Area | Planned Role | Validation Status |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for remote pump and valve sites | Module, band and carrier validation required |
| MQTT | Telemetry publishing and command workflow target | Topic, QoS, retry and security behavior require validation |
| Web dashboard | Remote status, control, alarms and schedule configuration target | Dashboard workflow and permission model require validation |
| Digital input | 4DI for pump feedback, valve status, float switch or alarm contact | Input mode and pulse behavior require validation |
| Digital output | 4DO or relay outputs for pump, valve, alarm or auxiliary control | Output type and contact rating require validation |
| Analog input | 2AI for pressure, level, flow or current transmitter | Input range and accuracy require validation |
| RS485 | Local fieldbus interface for VFD, meter or controller data | Isolation, surge and wiring behavior require validation |
| Modbus Master | Poll downstream Modbus RTU devices over RS485 | Register mapping and polling limits require validation |
| Modbus Slave | Expose selected status and control registers to local systems | Addressing and register map require validation |
| Scheduled control | Time-based pump or valve control target | Time sync, timezone and fail-safe behavior require validation |
| Alarm push | Event notification target for abnormal status and thresholds | Channel and escalation behavior require validation |
| OTA upgrade | Remote firmware upgrade target | Rollback, security and recovery flow require validation |

## Planned IO Baseline

| IO Type | Planned Count | Typical Use |
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

| Capability | Planning Direction |
| --- | --- |
| Pump status | DI-based run/fault/local-auto status collection |
| Valve status | DI-based open/close or position feedback target |
| Pressure/level | AI-based transmitter input target |
| VFD integration | RS485 Modbus polling target after register validation |
| Remote command | Dashboard or MQTT command target after permission and acknowledgement validation |
| Schedule | Time-based pump/valve operation target after fail-safe testing |
| Alarm push | Pump fault, level alarm, pressure threshold and offline notification target |

## Product Boundary

IER-141 should not be described as a safety controller, certified pump protection relay, emergency shutdown system, fire pump controller or grid protection device. Local safety circuits, motor protection and site fail-safe logic must remain independent and validated by the project engineer.

Do not claim exact relay rating, analog accuracy, LTE bands, IP rating, operating temperature, power input range, SIM compatibility, MQTT security profile or OTA recovery behavior until validation evidence is available.

## Related Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

## Related Knowledge

- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## Validation Status

IER-141 remains under product definition and engineering validation. The public page can safely describe the planned pump and valve control architecture, but final specifications require cellular module selection, relay tests, analog tests, RS485 tests, Modbus tests, dashboard workflow tests, alarm tests and OTA recovery tests.

## FAQ

### How is IER-141 different from IER-140?

IER-140 is the entry 2DI/2DO remote relay RTU. IER-141 is the pump and valve model with more planned IO, including 4DI, 4DO and 2AI for pressure, level or flow signals.

### Does IER-141 support MQTT downlink control?

The planned direction includes validated MQTT command downlink for relay control, schedule updates and configuration. Final topic format, command acknowledgement and security behavior require firmware validation.

### Can it control a pump directly?

It is planned for relay-style pump control through an external contactor or control circuit. Final wiring, relay rating, motor protection and fail-safe design must be validated before publishing exact control claims.

### Does it include WiFi or LoRa?

No. IER-141 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.
