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

IER-140 is a 4G LTE Cat1 remote relay RTU for sites that need remote monitoring and relay-style control without wired internet. It combines digital inputs, relay outputs, RS485 Modbus integration and cloud connectivity for pumps, valves, cabinets, generators, alarms and remote equipment.

This page describes the standard product role, IO baseline and deployment fit for industrial buyers comparing 4G relay RTUs.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for remote sites | Single-uplink cellular architecture for distributed deployments |
| MQTT | Telemetry publishing and command workflow target | Suitable for broker, dashboard and cloud telemetry workflows |
| Web dashboard | Remote status, control and configuration target | Suitable for fleet visibility and operator access |
| Digital input | 2DI for status, alarm or dry-contact signals | Typical use: status feedback, alarm contact and cabinet signals |
| Digital output | 2DO or relay outputs for remote control | Typical use: pump, valve, light or auxiliary relay control |
| RS485 | Local fieldbus interface | Standard Modbus RTU integration path |
| Modbus Master | Poll meters, IO modules, controllers or instruments | Suitable for local telemetry expansion |
| Modbus Slave | Expose RTU data to local master systems | Suitable for local integration or supervisory polling |
| Scheduled control | Time-based relay control target | Suitable for routine control and timed operations |
| Alarm push | Event notification target for dashboard, email, SMS or webhook | Suitable for status change and exception handling |
| OTA upgrade | Remote firmware upgrade target | Suitable for remote lifecycle management |

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

Exact LTE bands, relay contact rating, isolation voltage, surge level, IP rating, operating temperature, power input range, SIM compatibility and MQTT security profile should follow the released hardware version and deployment scope.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| 4G LTE external antenna | Improve cabinet, rural or weak-signal installations |
| IoT SIM / M2M SIM | Cellular connectivity and APN setup |
| DIN rail power supply | Stable RTU and relay control power |
| Interposing relay or contactor interface | Pump, valve, light or generator auxiliary control |
| Shielded RS485 cable | Connect Modbus meters, instruments or Remote IO modules |

See [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for project accessory planning.

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





