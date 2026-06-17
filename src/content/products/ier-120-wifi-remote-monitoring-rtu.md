---
id: ier-120-wifi-remote-monitoring-rtu
title: IER-120 WiFi Remote Monitoring RTU
excerpt: indoor WiFi RTU with 4DI, 2DO/relay, 2AI, RS485 and MQTT telemetry targets.
category: Industrial RTU
model: IER-120
status: Available for project inquiry
primaryKeyword: WiFi RTU
route: /products/ier-120-wifi-remote-monitoring-rtu
order: 5
---

## WiFi RTU For Indoor Monitoring

IER-120 is a WiFi remote monitoring RTU for indoor facilities, equipment rooms and cabinets where a reliable wireless LAN is available. It combines local IO and Modbus communications for alarm monitoring, utility telemetry and machine-status collection in indoor deployments.

This page describes the standard IO baseline, network scope and application fit for projects that need a WiFi RTU rather than a pure gateway.

## IO Baseline

| IO Type | Target Count | Configuration Notes |
| --- | --- | --- |
| Digital input | 4 | Suitable for status, alarm and contact monitoring |
| Digital output or relay | 2 | Suitable for relay-style control and auxiliary outputs |
| Analog input | 2 | Suitable for 4-20mA or 0-10V process signals |

## Network And Protocol Direction

| Layer | Role | Configuration Notes |
| --- | --- | --- |
| WiFi | Indoor wireless uplink target | Best fit for sites with stable local WiFi coverage |
| RS485 | Modbus RTU field communication target | Standard fieldbus path for downstream devices |
| MQTT | Telemetry upload target | Suitable for dashboard, broker and cloud visibility |
| Ethernet | Setup or local interface if included | Useful for setup or hybrid cabinet integration |

IER-120 should not be positioned as a 4G RTU, LoRa RTU or outdoor long-range wireless product.

## Suitable Applications

- factory utility monitoring
- building equipment alarms
- compressor room monitoring
- chiller room monitoring
- indoor cabinet monitoring
- OEM machine status monitoring

## Model Comparison

| Model | Uplink | Best Fit |
| --- | --- | --- |
| IER-100 | Ethernet | Wired LAN and cabinet deployments |
| IER-120 | WiFi | Indoor WiFi-enabled sites |
| IER-140 | 4G LTE | Remote sites without wired LAN |

## Product Boundary

4G, LoRa, 5G, outdoor long-range wireless behavior, hazardous-area certification and specialized industrial approvals are outside the baseline IER-120 scope.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| WiFi antenna | Improve indoor cabinet or equipment-room wireless placement |
| DIN rail power supply | Stable RTU and sensor power |
| Door contact, alarm contact or float switch | Typical digital input sources |
| Interposing relay | Safer output interface for alarm lamps, horns or auxiliary control |
| 4-20mA pressure or level sensor | Typical analog input accessory for indoor monitoring panels |

See [Industrial IoT Accessories](/accessories), [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for accessory notes.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)
- [WiFi Industrial IoT Gateway: When to Use WiFi Instead of Ethernet or 4G](/knowledge/wifi-industrial-iot-gateway)

## FAQ

### Does IER-120 include 4G?

No. 4G belongs to IER-140.

### Does IER-120 include LoRa?

No. LoRaWAN products are separate model families.

### What is the IO Baseline?

The planning baseline is 4DI + 2DO/relay + 2AI.

### Can exact WiFi range be published now?

WiFi range should always be checked against the installed antenna, enclosure, site layout and RF environment.





