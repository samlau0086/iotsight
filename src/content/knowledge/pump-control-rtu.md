---
id: pump-control-rtu
title: "Pump Control RTU: Signals, Relays, Pressure Inputs and Remote Monitoring"
excerpt: A practical guide to pump control RTU architecture, including DI feedback, relay outputs, pressure transmitters, RS485 Modbus devices and remote alarms.
category: Application Guide
primaryKeyword: pump control RTU
relatedProducts:
  - ier-141-4g-pump-valve-rtu
  - ier-140-4g-remote-relay-rtu
  - ier-100-ethernet-industrial-rtu
order: 11
---

# Pump Control RTU: Signals, Relays, Pressure Inputs and Remote Monitoring

A pump control RTU is used when a project needs more than simple telemetry. In addition to remote visibility, the site may need run and fault feedback, relay-style start and stop control, pressure or level inputs, Modbus integration with a VFD, and alarm handling for abnormal conditions.

## Typical Pump RTU Signals

| Signal Type | Typical Source | Why It Matters |
| --- | --- | --- |
| Digital input | pump run, pump fault, float switch, local/remote selector | confirm operating state and alarm conditions |
| Digital output | start, stop, valve open, valve close, alarm horn | perform relay-style control through the proper interface |
| Analog input | pressure, level, flow or current transmitter | track process conditions and thresholds |
| RS485 Modbus | VFD, energy meter, flow meter or local controller | add richer telemetry beyond dry contacts |

## When A Basic Relay RTU Is Enough

Use a compact relay RTU when the job is mostly:

- one or two pump start-stop points
- a few status feedback signals
- simple alarms
- basic remote switching

The [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu) is a good fit for this compact architecture.

## When You Need A Pump And Valve RTU

Use a larger RTU when the site also needs:

- more digital inputs and outputs
- pressure or level transmitters
- scheduled control
- pump and valve combinations
- VFD or Modbus meter integration

The [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu) fits these projects.

## Control Architecture Matters

An RTU should not be treated as a direct motor-power switch. In most pump projects, the RTU output works through the correct contactor, control relay or control circuit. Local motor protection, overload protection and fail-safe logic remain part of the electrical design.

## Typical Remote Monitoring Workflow

1. Read pump run, fault and tank or pressure status.
2. Poll VFD or meter data over RS485 if required.
3. Publish telemetry to MQTT or a dashboard.
4. Trigger alarms on fault, offline status or process thresholds.
5. Apply controlled remote commands or schedules where the site design allows it.

## Related Products

- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu): multi-signal 4G RTU for pumps, valves, and irrigation cabinets
- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu): compact relay RTU for simpler control points
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu): wired RTU for LAN-connected cabinets and local SCADA integration

## Final Choice

If the project only needs simple remote switching, use a compact relay RTU. If it needs pressure, level, VFD data, multiple relays, and more field feedback, use a pump-control RTU.
