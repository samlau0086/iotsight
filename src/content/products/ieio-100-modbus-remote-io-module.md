---
id: "ieio-100-modbus-remote-io-module"
title: "IEIO-100 Modbus Remote IO Module"
excerpt: "Modbus Remote IO family with DI, DO/relay, AI and AO variants for industrial signal expansion."
category: "Remote IO Module"
model: "IEIO-100"
status: "Published"
primaryKeyword: "Modbus Remote IO module"
route: "/products/ieio-100-modbus-remote-io-module"
order: 2
imageUrl: "/uploads/products/ieio-100-modbus-remote-io-module.svg"
specGroups:
  - title: "Hardware I/O"
    specs:
      - label: "Variant 1"
        value: "IEIO-100-DI8 with 8 digital inputs"
      - label: "Variant 2"
        value: "IEIO-100-DO8 with 8 digital or relay outputs"
      - label: "Variant 3"
        value: "IEIO-100-AI4 with 4 analog inputs"
      - label: "Variant 4"
        value: "IEIO-100-AO4 with 4 analog outputs"
      - label: "Typical Signals"
        value: "Dry contact, relay output, 4-20mA, or 0-10V by variant"
  - title: "Communication"
    specs:
      - label: "Interface"
        value: "RS485 Modbus RTU"
      - label: "Primary Role"
        value: "Distributed I/O expansion for RTU, gateway, PLC, and SCADA systems"
  - title: "Power & Mounting"
    specs:
      - label: "Power Supply"
        value: "24VDC industrial control power"
      - label: "Operating Temperature"
        value: "-20 to 70 C for cabinet installations"
      - label: "Mounting"
        value: "DIN rail cabinet installation"
selectionGuide:
  chooseWhen:
    - "You already have an RTU, gateway, PLC, or SCADA master and only need extra field I/O."
    - "Field signals are distributed and easier to collect near the cabinet or machine."
    - "You want a clean Modbus RTU expansion path for DI, DO, AI, or AO."
  notFitWhen:
    - "You need direct MQTT, WiFi, or 4G connectivity from the I/O module itself."
    - "You need local dashboard, cellular communication, or standalone edge logic."
    - "You need one device that already includes uplink and control logic in the same box."
  compareLinks:
    - href: "/products/ier-100-ethernet-industrial-rtu"
      label: "Compare with IER-100 RTU"
    - href: "/products/ieg-100-ethernet-industrial-iot-gateway"
      label: "Compare with IEG-100 Gateway"
    - href: "/knowledge/modbus"
      label: "Read the Modbus Buying Guide"
bomGroups:
  - title: "Control Panel BOM"
    items:
      - "24VDC control power supply"
      - "DIN rail and enclosure space"
      - "Terminal blocks for field signal landing"
      - "Panel labels for DI, DO, AI, or AO channels"
  - title: "Signal Interface"
    items:
      - "Shielded RS485 cable and termination"
      - "Dry-contact field switches or alarm contacts"
      - "Interposing relay for output-side isolation"
      - "4-20mA or 0-10V sensors for analog variants"
preSalesFaq:
  - question: "Can I choose only the DI or AI variant instead of a mixed module?"
    answer: "Yes. IEIO-100 is offered as focused DI, DO, AI, and AO variants so you can match the module to the actual signal type."
  - question: "Can you provide a register map before bulk order?"
    answer: "Yes. Variant-specific register maps can be provided for sample testing and technical review."
  - question: "Do you support OEM labeling?"
    answer: "Yes. OEM labeling and private-brand packaging can be reviewed based on the selected variant and order scope."
---

## Modbus Remote IO For Distributed Signals

IEIO-100 is a wired Modbus Remote IO module family for distributed industrial signal collection and control. The product family separates I/O types into focused variants instead of forcing every signal type into one overloaded SKU.

The IEIO-100 family is a good fit for clean Modbus-based I/O expansion close to field devices, cabinets, and machine signals.

## First-Generation Variants

| Variant | I/O Profile | Configuration Notes |
| --- | --- | --- |
| IEIO-100-DI8 | 8 digital inputs | Best fit for contact, alarm and status monitoring |
| IEIO-100-DO8 | 8 digital outputs or relay outputs | Best fit for output signaling and relay interfacing |
| IEIO-100-AI4 | 4 analog inputs | Best fit for process transmitters and analog sensors |
| IEIO-100-AO4 | 4 analog outputs | Best fit for analog setpoint and control output use |

Mixed digital I/O or mixed analog I/O variants can be reviewed separately when a project needs combined channel types.

## Modbus Integration

RS485 Modbus RTU is the baseline protocol for IEIO-100, making it suitable for RTUs, gateways, PLCs and SCADA masters that already use Modbus networks.

## Where IEIO-100 Fits

- factory machine status monitoring
- pump station signal expansion
- industrial alarm monitoring
- SCADA Remote IO expansion
- data center environmental signal collection
- utility cabinet signal collection

## Choosing A Variant

| Need | Variant |
| --- | --- |
| Read contact or alarm status | IEIO-100-DI8 |
| Drive alarm or output signals | IEIO-100-DO8 after output confirmation |
| Read pressure, level or flow transmitters | IEIO-100-AI4 after analog confirmation |
| Send analog setpoints | IEIO-100-AO4 after output confirmation |

## Product Boundary

IEIO-100 should not be described as an MQTT gateway, 4G telemetry device, WiFi device or LoRaWAN device. MQTT and cloud publishing belong to gateway products such as IEG-100.

## Compatible Accessories

| Accessory | Project Use |
| --- | --- |
| Shielded RS485 cable | Connect Remote IO modules to a Modbus master, RTU or gateway |
| Pluggable terminal blocks | Speed up DI, DO, AI and AO wiring |
| DIN rail enclosure or cabinet kit | Mount Remote IO close to field signals |
| Interposing relay or contactor interface | Interface DO/relay outputs with field loads |
| 4-20mA sensors | Connect pressure, level, flow or process transmitters to analog input variants |

See [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for wiring guidance.

## Related Knowledge

- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)
- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)

## FAQ

### Does IEIO-100 publish MQTT data directly?

No. IEIO-100 is designed as a Modbus Remote IO module. MQTT publishing belongs to gateway models.

### Is the register map final?

Register details should follow the released register map for the selected variant.

### Which variant is designed for 4-20mA sensors?

IEIO-100-AI4 is the analog input variant for 4-20mA and similar process signals.

### Can IEIO-100 control motors directly?

IEIO-100 is designed for signal output and interposing relays, not direct motor power control.
