---
id: modbus
title: Modbus for Industrial IoT Gateways and RTUs
excerpt: A practical explanation of Modbus RTU, Modbus TCP, RS485 wiring, polling, register maps, and how Modbus data connects to IoT gateways.
category: Protocol Guide
primaryKeyword: Modbus
relatedProducts: ieg-100-ethernet-industrial-iot-gateway,ier-100-ethernet-industrial-rtu,ieio-100-modbus-remote-io-module
order: 1
---

# Modbus for Industrial IoT Gateways and RTUs

Modbus is one of the most common industrial communication protocols used by energy meters, PLCs, inverters, VFDs, sensors, and Remote IO modules. For many industrial IoT projects, the first architecture question is simple: how do we read Modbus data reliably and publish it to a dashboard?

## Modbus RTU vs Modbus TCP

**Modbus RTU** usually runs over RS485. It is common in cabinets, pump stations, power meter networks, solar inverter chains, and distributed IO systems.

**Modbus TCP** runs over Ethernet. It is common when PLCs, gateways, meters, or controllers already connect to a local LAN.

An industrial IoT gateway often needs to collect data from both Modbus RTU and Modbus TCP devices, normalize the values, and publish selected telemetry to MQTT or another platform interface.

## What a Gateway Needs to Know

Before selecting a Modbus gateway, define:

- Device protocol: Modbus RTU, Modbus TCP, or both.
- Serial wiring: RS485 bus layout, baud rate, parity, and device address.
- Register map: function codes, register addresses, data types, scaling, and units.
- Polling interval: how often each value needs to be read.
- Data destination: local dashboard, MQTT broker, cloud platform, or SCADA system.

The [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) is the current IoTEdges product reference for wired Modbus data collection and MQTT telemetry.

## Modbus and Remote IO

Remote IO modules often expose digital inputs, digital outputs, analog inputs, or analog outputs through Modbus registers. This makes them useful when a project needs to expand signals without replacing the main controller.

The [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module) is the IoTEdges product reference for wired Modbus Remote IO expansion in machine, utility and cabinet projects.

## Modbus and RTUs

An RTU usually combines local IO with communication capability. It can read local DI/DO/AI signals, communicate with Modbus devices, and support remote monitoring architectures.

The [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu) is the IoTEdges product reference for an Ethernet RTU path with local IO and Modbus connectivity.

## Project Notes

Device count, polling interval, register mapping and environmental ratings should always be checked against the released datasheet of the selected device. For SEO and buyer education, this page focuses on architecture and selection logic first, then links into the most relevant product pages.

