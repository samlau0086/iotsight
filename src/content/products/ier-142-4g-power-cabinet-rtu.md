---
id: ier-142-4g-power-cabinet-rtu
title: IER-142 4G Power Cabinet RTU
excerpt: 4G LTE Cat1 power cabinet RTU with 8DI, 4DO, RS485, MQTT, Modbus Master/Slave, event alarms, scheduled control and OTA upgrade targets.
category: 4G Power Cabinet RTU
model: IER-142
status: Available for project inquiry
primaryKeyword: 4G power cabinet RTU
route: /products/ier-142-4g-power-cabinet-rtu
order: 9
---

## 4G RTU For Power Cabinets, Generator Rooms And Dry-Contact Alarms

IER-142 is a 4G LTE Cat1 power cabinet RTU for electrical cabinets, generator rooms, ATS cabinets and industrial alarm panels that need many dry-contact status inputs plus a smaller number of relay outputs. It combines cabinet alarm collection, breaker status, door contacts, generator alarms and RS485 Modbus data in one remote telemetry platform.

This page describes the standard product role, IO baseline and deployment fit for power-cabinet and alarm-panel monitoring projects.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for cabinets without wired internet | Single-uplink cellular architecture for distributed cabinets |
| MQTT | Event, status and heartbeat telemetry target | Suitable for broker, dashboard and cloud event workflows |
| Web dashboard | Cabinet status, event log, alarm and remote configuration target | Suitable for alarm visibility and service review |
| Digital input | 8DI for dry-contact status and alarm signals | Typical use: breaker, ATS, door, alarm and generator status |
| Digital output | 4DO or relay outputs for reset, horn, lamp or auxiliary control | Typical use: reset, annunciation and auxiliary relay control |
| RS485 | Local fieldbus interface for meters, generator controllers or ATS controllers | Standard Modbus RTU integration path |
| Modbus Master | Poll cabinet meters or controllers over RS485 | Suitable for power and equipment telemetry expansion |
| Modbus Slave | Expose cabinet status to local master systems | Suitable for local supervisory integration |
| Event alarms | Push changes for DI status, offline status and Modbus exceptions | Suitable for event-driven monitoring and alerting |
| OTA upgrade | Remote firmware upgrade target | Suitable for remote lifecycle management |

## IO Baseline

| IO Type | Target Count | Typical Use |
| --- | --- | --- |
| Digital input | 8DI | Breaker status, door contact, SPD alarm, ATS status, generator alarm, dry-contact signals |
| Digital output or relay | 4DO | Remote reset, horn, lamp, start signal or auxiliary relay |
| RS485 | 1 port target | Energy meter, generator controller, ATS controller or Modbus alarm module |

## Target Applications

- power distribution cabinet monitoring
- generator room alarm collection
- ATS cabinet status monitoring
- transformer room auxiliary monitoring
- industrial dry-contact alarm panel
- telecom or utility cabinet status reporting
- remote cabinet door and environmental alarm monitoring

## Cabinet Monitoring Direction

| Capability | Configuration Direction |
| --- | --- |
| DI event capture | Detect breaker, door, ATS, SPD, generator and alarm contact changes |
| Event log | Store and publish alarm events for review and maintenance |
| Modbus polling | Read power meters, generator controllers or ATS controllers over RS485 |
| Remote output | Trigger reset, horn, lamp or auxiliary relay with controlled permissions |
| MQTT telemetry | Publish status, events, heartbeat and Modbus values |
| Dashboard alarm | Display active alarms and historical events |

## Product Boundary

IER-142 should not be described as a certified protection relay, arc-fault protection device, emergency shutdown controller, generator safety controller, fire alarm controller or grid protection system. Critical electrical protection should be handled by certified local protection equipment.

Exact relay rating, DI voltage range, isolation voltage, surge level, LTE bands, IP rating, operating temperature, power input range, SIM compatibility and MQTT security profile should follow the released hardware version and deployment scope.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| 4G LTE external antenna | Cabinet, generator room, telecom and utility site connectivity |
| DIN rail power supply | Stable RTU and auxiliary sensor power |
| Dry-contact alarm wiring kit | Breaker, ATS, SPD, door and generator alarm inputs |
| Interposing relay | Horn, lamp, reset or auxiliary output interface |
| Shielded RS485 cable | Connect power meters, generator controllers or ATS controllers |

See [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide) for power cabinet accessory planning.

## Related Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

## Related Knowledge

- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)
- [How to Choose a Power Cabinet Monitoring RTU](/blog/how-to-choose-power-cabinet-monitoring-rtu)

## FAQ

### How is IER-142 different from IER-141?

IER-141 is optimized for pump and valve control with target analog inputs. IER-142 is optimized for power cabinets and alarm panels with more target digital inputs and fewer analog assumptions.

### Can IER-142 read power meters?

Yes. IER-142 is positioned to read power meters, generator controllers and ATS controllers over RS485 Modbus.

### Can it control a generator?

It can be positioned for generator room monitoring and auxiliary relay output planning, but certified generator protection, start logic and safety control require separate validated systems.

### Does it include WiFi or LoRa?

No. IER-142 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.





