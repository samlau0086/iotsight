---
id: analog-input
title: Analog Input for 4-20mA and 0-10V Industrial Sensors
excerpt: Understand analog input in RTUs and Remote IO modules for pressure, level, flow, temperature and current signal monitoring.
category: IO Guide
primaryKeyword: analog input RTU
relatedProducts: ier-100-ethernet-industrial-rtu,ier-120-wifi-remote-monitoring-rtu,ier-141-4g-pump-valve-rtu,ieio-100-modbus-remote-io-module
order: 8
---

# Analog Input for 4-20mA and 0-10V Industrial Sensors

Analog input is used when the value is not simply on or off. Many industrial sensors output a continuous signal such as 4-20mA or 0-10V. RTUs and Remote IO modules read these signals and convert them into engineering values for dashboards, alarms and reports.

## Common Analog Signals

Analog input is used for:

- pressure transmitters
- tank level sensors
- flow transmitters
- temperature transmitters
- humidity transmitters
- current transducers
- voltage transducers

## 4-20mA vs 0-10V

| Signal Type | Common Use | Notes |
| --- | --- | --- |
| 4-20mA | industrial transmitters, long cable runs | Better noise immunity and fault detection |
| 0-10V | short-distance control and building signals | Easier but more sensitive to voltage drop and noise |
| 0-5V | sensor modules and local electronics | Less common in industrial cabinets |

## What The RTU Needs To Know

To display analog values correctly, define:

- signal type
- scaling range
- engineering unit
- sensor power requirement
- alarm threshold
- filtering or averaging requirement
- wiring and grounding method

Example: a pressure transmitter may output 4mA at 0 bar and 20mA at 10 bar. The RTU or platform must apply that scaling before the dashboard can show useful pressure values.

## Analog Input In Pump And Water Projects

Analog inputs are useful in pump and valve applications because they can monitor pressure, level or flow. This is why IER-141 includes a 2AI target profile, while simple relay applications can use IER-140.

## Related IoTEdges Products

- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)

