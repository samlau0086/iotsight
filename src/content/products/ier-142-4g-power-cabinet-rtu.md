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

IER-142 is designed as a 4G LTE Cat1 power cabinet RTU for electrical cabinets, generator rooms, ATS cabinets and industrial alarm panels that need many dry-contact status inputs plus a smaller number of relay outputs. Its intended role is to collect cabinet alarms, breaker status, door contacts, generator alarms and RS485 Modbus data, then publish events to MQTT or the IoTEdges web dashboard.

This product brief describes target configurations for project discussion and application matching.

## Product Role

| Function Area | Role | Configuration Notes |
| --- | --- | --- |
| 4G LTE Cat1 | Primary wireless uplink for cabinets without wired internet | Module, band and carrier confirmation |
| MQTT | Event, status and heartbeat telemetry target | Topic, QoS, retry and security behavior should be confirmed during project review |
| Web dashboard | Cabinet status, event log, alarm and remote configuration target | Dashboard workflow and permission model should be confirmed during project review |
| Digital input | 8DI for dry-contact status and alarm signals | Wet/dry mode and threshold behavior should be confirmed during project review |
| Digital output | 4DO or relay outputs for reset, horn, lamp or auxiliary control | Output type and contact rating should be confirmed during project review |
| RS485 | Local fieldbus interface for meters, generator controllers or ATS controllers | Isolation, surge and wiring behavior should be confirmed during project review |
| Modbus Master | Poll cabinet meters or controllers over RS485 | Register mapping and polling limits should be confirmed during project review |
| Modbus Slave | Expose cabinet status to local master systems | Addressing and register map should be confirmed during project review |
| Event alarms | Push changes for DI status, offline status and Modbus exceptions | Alarm rules and notification channels should be confirmed during project review |
| OTA upgrade | Remote firmware upgrade target | Rollback, security and recovery flow should be confirmed during project review |

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
| Event log | Store and publish alarm events after firmware confirmation |
| Modbus polling | Read power meters, generator controllers or ATS controllers over RS485 |
| Remote output | Trigger reset, horn, lamp or auxiliary relay after permission review |
| MQTT telemetry | Publish status, events, heartbeat and Modbus values |
| Dashboard alarm | Display active alarms and historical events after platform review |

## Product Boundary

IER-142 should not be described as a certified protection relay, arc-fault protection device, emergency shutdown controller, generator safety controller, fire alarm controller or grid protection system. Critical electrical protection should be handled by certified local protection equipment.

Exact relay rating, DI voltage range, isolation voltage, surge level, LTE bands, IP rating, operating temperature, power input range, SIM compatibility, MQTT security profile or OTA recovery behavior should be confirmed during project engineering review.

## Related Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

## Related Knowledge

- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## FAQ

### How is IER-142 different from IER-141?

IER-141 is optimized for pump and valve control with target analog inputs. IER-142 is optimized for power cabinets and alarm panels with more target digital inputs and fewer analog assumptions.

### Can IER-142 read power meters?

The target direction includes RS485 Modbus Master polling for power meters or cabinet controllers. Final register mapping and polling limits should be confirmed during project review.

### Can it control a generator?

It can be positioned for generator room monitoring and auxiliary relay output planning, but certified generator protection, start logic and safety control require separate validated systems.

### Does it include WiFi or LoRa?

No. IER-142 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.





