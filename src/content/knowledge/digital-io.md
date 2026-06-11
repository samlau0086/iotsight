---
id: digital-io
title: Digital Input and Digital Output in RTU and Remote IO Devices
excerpt: Learn how DI and DO are used for dry contacts, alarms, relay control, pump feedback, valve status, cabinet monitoring and remote RTU projects.
category: IO Guide
primaryKeyword: digital input digital output RTU
relatedProducts: ier-100-ethernet-industrial-rtu,ier-140-4g-remote-relay-rtu,ier-141-4g-pump-valve-rtu,ier-142-4g-power-cabinet-rtu,ieio-100-modbus-remote-io-module
order: 6
---

# Digital Input and Digital Output in RTU and Remote IO Devices

Digital input and digital output are the basic building blocks of many industrial monitoring and control projects. A digital input reads a binary state. A digital output drives a relay, signal or control circuit.

## What Is Digital Input?

Digital input is used to read on/off status. Common examples include:

- pump running feedback
- pump fault contact
- valve open or closed status
- cabinet door contact
- breaker auxiliary contact
- float switch or level switch
- generator alarm contact
- gate or door position signal

## What Is Digital Output?

Digital output is used to send an on/off control signal. Depending on the device design, it may be transistor output, relay output or dry contact output.

Common uses include:

- pump start or stop signal
- valve open or close command
- remote reset output
- alarm horn or lamp output
- gate trigger relay
- street light contactor control

## DI and DO in Remote RTUs

In a cellular RTU, DI and DO allow remote equipment to be monitored and controlled from a dashboard or MQTT platform. For example:

- IER-140 uses a compact 2DI + 2DO profile for simple relay projects.
- IER-141 expands to 4DI + 4DO for pump and valve control.
- IER-142 uses an 8DI + 4DO profile for cabinet alarm monitoring.

## Key Engineering Questions

Before wiring DI and DO, confirm:

- dry contact or wet contact input mode
- input voltage and isolation
- pulse counting requirement
- relay contact rating
- load type and interposing relay requirement
- fail-safe behavior when communication is lost
- manual override and local control requirements

## Related IoTEdges Products

- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)
- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)
- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

## Practical Rule

Use DI for status and alarms. Use DO or relay outputs for control signals. For motors, pumps and high-power equipment, the RTU should normally control an external contactor or control circuit rather than switching the load directly.

