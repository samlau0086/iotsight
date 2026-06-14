---
id: din-rail-power-supply-industrial-iot
title: DIN Rail Power Supply Guide for Industrial IoT Gateways and RTUs
excerpt: How to plan 12V and 24V DC power supplies, cabinet wiring, fuses and backup power for industrial IoT gateways, RTUs and Remote IO modules.
category: Accessory Guide
primaryKeyword: DIN rail power supply industrial IoT
relatedProducts: ieg-100-ethernet-industrial-iot-gateway,ier-100-ethernet-industrial-rtu,ier-140-4g-remote-relay-rtu,ieio-100-modbus-remote-io-module
order: 13
---

# DIN Rail Power Supply Guide for Industrial IoT Gateways and RTUs

Industrial IoT gateways, RTUs and Remote IO modules usually need a stable low-voltage DC supply inside a cabinet. For export projects, the power accessory plan should be discussed together with the main device, because field failures are often caused by unstable power, poor grounding, missing protection or cabinet wiring errors.

## Common Power Planning Questions

Before selecting a power supply, confirm:

- device input voltage range
- total current requirement for gateway, RTU, sensors and relays
- whether sensors need separate loop power
- cabinet AC input voltage and local electrical standards
- fuse, breaker and terminal distribution plan
- backup power or UPS requirement

## 12V vs 24V DC

| Voltage | Common Use |
| --- | --- |
| 12V DC | Small controllers, access devices, some communication modules |
| 24V DC | Industrial cabinets, sensors, RTUs, Remote IO and control panels |

The final voltage must match the device datasheet and cabinet design. Do not assume every accessory can share the same supply without reviewing current draw and isolation needs.

## Useful Cabinet Accessories

- DIN rail power supply
- fuse holder or miniature breaker
- terminal distribution block
- cable ferrules and labels
- surge protection where required
- small DC UPS or backup battery for critical remote monitoring

## Related Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)
- [Industrial IoT Accessories](/accessories)

## FAQ

### Can one power supply feed the RTU and sensors?

Sometimes yes, but current capacity, sensor loop power, noise, grounding and isolation should be reviewed first.

### Should I include a UPS?

For remote alarm, gate access, water and power cabinet monitoring, backup power can be useful if the project requires outage reporting.

### Is DIN rail mounting required?

Not always, but DIN rail power supplies and terminals are common in industrial cabinets and easier for installers to service.
