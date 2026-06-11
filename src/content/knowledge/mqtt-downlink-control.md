---
id: mqtt-downlink-control
title: MQTT Downlink Control for Industrial RTUs
excerpt: Learn how MQTT downlink commands can control relays, update schedules and configure industrial RTUs while keeping acknowledgement and safety boundaries clear.
category: MQTT Guide
primaryKeyword: MQTT downlink control
relatedProducts: ier-140-4g-remote-relay-rtu,ier-141-4g-pump-valve-rtu,ier-142-4g-power-cabinet-rtu
order: 10
---

# MQTT Downlink Control for Industrial RTUs

MQTT is often used for telemetry upload, but industrial RTUs may also need downlink commands. Downlink means the platform sends a command to the device, such as relay on/off, pulse output, schedule update or configuration change.

## Uplink vs Downlink

| Direction | Meaning | Example |
| --- | --- | --- |
| Uplink | device publishes data to platform | DI status, Modbus value, alarm event |
| Downlink | platform sends command to device | relay command, schedule update, configuration |

For remote relay RTUs, both directions matter. The device must publish status, but it also needs to receive control commands in a controlled way.

## Typical MQTT Downlink Commands

- turn relay on or off
- pulse relay for a fixed duration
- update irrigation schedule
- change alarm threshold
- request device status
- restart communication module
- update reporting interval

## Command Acknowledgement

Every control command should have an acknowledgement strategy. A practical command payload should include:

- command ID
- target device ID
- target channel
- action
- timestamp
- timeout
- user or source reference

The RTU should publish an acknowledgement that shows whether the command was accepted, rejected, executed or timed out.

## Relay Feedback

If the project needs confirmation that the field equipment actually changed state, use feedback:

- DI feedback from contactor or valve
- Modbus status from VFD or controller
- analog value change such as pressure or flow
- alarm state after command execution

## Safety Boundary

MQTT downlink should not replace local safety logic. Emergency stop, motor protection, access safety and electrical protection should remain local and independent.

## Related IoTEdges Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)
- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu)

