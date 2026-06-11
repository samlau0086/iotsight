---
id: ier-140-4g-remote-relay-rtu
title: IER-140 4G Remote Relay RTU
excerpt: 4G LTE Cat1 remote relay RTU with MQTT, web dashboard, 2DI, 2DO, RS485, Modbus Master/Slave, scheduled control, alarm push and OTA upgrade targets.
category: 4G Remote Relay RTU
model: IER-140
status: Available for project inquiry
primaryKeyword: IoT remote relay RTU
route: /products/ier-140-4g-remote-relay-rtu
order: 7
---

## 4G Remote Relay RTU For Field Control

IER-140 is designed as a 4G LTE Cat1 remote relay RTU for sites that need simple remote monitoring and control without wired internet. Its intended role is to collect digital input status, control relay outputs, communicate with RS485 Modbus devices and publish data to MQTT or an IoTEdges web dashboard.

This product brief describes target configurations for project discussion and application matching.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for remote sites | Module, band and carrier confirmation |
| MQTT | Telemetry publishing and command workflow target | Topic, QoS, retry and security behavior should be confirmed during project review |
| Web dashboard | Remote status, control and configuration target | Dashboard workflow and permission model should be confirmed during project review |
| Digital input | 2DI for status, alarm or dry-contact signals | Input type and pulse behavior should be confirmed during project review |
| Digital output | 2DO or relay outputs for remote control | Output type and contact rating should be confirmed during project review |
| RS485 | Local fieldbus interface | Isolation, surge and wiring behavior should be confirmed during project review |
| Modbus Master | Poll meters, IO modules, controllers or instruments | Register mapping and polling limits should be confirmed during project review |
| Modbus Slave | Expose RTU data to local master systems | Addressing and register map should be confirmed during project review |
| Scheduled control | Time-based relay control target | Time sync, timezone and fail-safe behavior should be confirmed during project review |
| Alarm push | Event notification target for dashboard, email, SMS or webhook | Channel and escalation behavior should be confirmed during project review |
| OTA upgrade | Remote firmware upgrade target | Rollback, security and recovery flow should be confirmed during project review |

## IO Baseline

The first public planning baseline is:

| IO Type | Target Count | Typical Use |
| --- | --- | --- |
| Digital input | 2DI | Pump running feedback, valve position, cabinet door, alarm contact |
| Digital output or relay | 2DO | Pump start/stop, valve open/close, light control, generator start signal |
| RS485 | 1 port target | Modbus meters, IO modules, VFDs, instruments or local controllers |

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
| MQTT downlink | Receive validated relay control, schedule updates and configuration commands |
| Modbus Master | Poll downstream Modbus RTU devices over RS485 |
| Modbus Slave | Allow local Modbus master to read status or write selected control registers |
| Dashboard control | Remote relay control with user permission and operation log targets |
| Alarm push | Notify on DI change, offline status, Modbus exception or threshold rule |
| OTA upgrade | Secure firmware update after field review |

## Product Boundary

IER-140 should not be described as a safety PLC, emergency shutdown controller, certified fire alarm interface, elevator controller, medical device controller or grid protection relay. Any high-risk control use must rely on local safety circuits and validated fail-safe design.

Exact LTE bands, relay contact rating, isolation voltage, surge level, IP rating, operating temperature, power input range, SIM compatibility, MQTT security profile or OTA recovery behavior should be confirmed during project engineering review.

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

The target direction includes MQTT telemetry uplink and confirmed command downlink for relay control, schedule updates and configuration. Topic format, security behavior and command acknowledgement are confirmed during firmware and project review.

### Can it control pumps and valves directly?

It is designed for relay-style control of pumps, valves and similar equipment, while relay rating, wiring method and fail-safe behavior should be confirmed for each project.

### Does it include WiFi or LoRa?

No. Following the IoTEdges model rule, IER-140 uses 4G LTE Cat1 as the single wireless uplink. WiFi and LoRa belong to separate model families.





