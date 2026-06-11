---
id: ier-142-4g-power-cabinet-rtu
title: IER-142 4G Power Cabinet RTU
excerpt: Public-safe draft for a 4G LTE Cat1 power cabinet RTU with 8DI, 4DO, RS485, MQTT, Modbus Master/Slave, event alarms, scheduled control and OTA upgrade targets.
category: 4G Power Cabinet RTU
model: IER-142
status: Public-safe draft
primaryKeyword: 4G power cabinet RTU
route: /products/ier-142-4g-power-cabinet-rtu
order: 9
---

## 4G RTU For Power Cabinets, Generator Rooms And Dry-Contact Alarms

IER-142 is planned as a 4G LTE Cat1 power cabinet RTU for electrical cabinets, generator rooms, ATS cabinets and industrial alarm panels that need many dry-contact status inputs plus a smaller number of relay outputs. Its intended role is to collect cabinet alarms, breaker status, door contacts, generator alarms and RS485 Modbus data, then publish events to MQTT or the IoTEdges web dashboard.

This page uses validation-safe wording. Cellular module, LTE bands, relay rating, DI behavior, RS485 isolation, Modbus behavior, MQTT behavior, dashboard workflow, alarm push and OTA upgrade behavior must be validated before final datasheet publication.

## Planned Product Role

| Function Area | Planned Role | Validation Status |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for cabinets without wired internet | Module, band and carrier validation required |
| MQTT | Event, status and heartbeat telemetry target | Topic, QoS, retry and security behavior require validation |
| Web dashboard | Cabinet status, event log, alarm and remote configuration target | Dashboard workflow and permission model require validation |
| Digital input | 8DI for dry-contact status and alarm signals | Wet/dry mode and threshold behavior require validation |
| Digital output | 4DO or relay outputs for reset, horn, lamp or auxiliary control | Output type and contact rating require validation |
| RS485 | Local fieldbus interface for meters, generator controllers or ATS controllers | Isolation, surge and wiring behavior require validation |
| Modbus Master | Poll cabinet meters or controllers over RS485 | Register mapping and polling limits require validation |
| Modbus Slave | Expose cabinet status to local master systems | Addressing and register map require validation |
| Event alarms | Push changes for DI status, offline status and Modbus exceptions | Alarm rules and notification channels require validation |
| OTA upgrade | Remote firmware upgrade target | Rollback, security and recovery flow require validation |

## Planned IO Baseline

| IO Type | Planned Count | Typical Use |
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

| Capability | Planning Direction |
| --- | --- |
| DI event capture | Detect breaker, door, ATS, SPD, generator and alarm contact changes |
| Event log | Store and publish alarm events after firmware validation |
| Modbus polling | Read power meters, generator controllers or ATS controllers over RS485 |
| Remote output | Trigger reset, horn, lamp or auxiliary relay after permission validation |
| MQTT telemetry | Publish status, events, heartbeat and Modbus values |
| Dashboard alarm | Display active alarms and historical events after platform validation |

## Product Boundary

IER-142 should not be described as a certified protection relay, arc-fault protection device, emergency shutdown controller, generator safety controller, fire alarm controller or grid protection system. Critical electrical protection must be handled by certified local protection equipment.

Do not claim exact relay rating, DI voltage range, isolation voltage, surge level, LTE bands, IP rating, operating temperature, power input range, SIM compatibility, MQTT security profile or OTA recovery behavior until validation evidence is available.

## Related Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

## Related Knowledge

- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## Validation Status

IER-142 remains under product definition and engineering validation. The public page can safely describe the planned cabinet monitoring architecture, but final specifications require cellular module selection, DI tests, relay tests, RS485 tests, Modbus tests, dashboard workflow tests, alarm tests and OTA recovery tests.

## FAQ

### How is IER-142 different from IER-141?

IER-141 is optimized for pump and valve control with planned analog inputs. IER-142 is optimized for power cabinets and alarm panels with more planned digital inputs and fewer analog assumptions.

### Can IER-142 read power meters?

The planned direction includes RS485 Modbus Master polling for power meters or cabinet controllers. Final register mapping and polling limits require validation.

### Can it control a generator?

It can be positioned for generator room monitoring and auxiliary relay output planning, but certified generator protection, start logic and safety control require separate validated systems.

### Does it include WiFi or LoRa?

No. IER-142 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.
