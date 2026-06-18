---
id: rs485-cable-shielding-guide
title: RS485 Cable and Shielding Guide for Modbus RTU Installations
excerpt: A practical accessory guide for RS485 cable, shielding, grounding, termination and surge protection in Modbus RTU gateway, RTU and Remote IO deployments.
category: Wiring Guide
primaryKeyword: RS485 cable shielding guide
relatedProducts:
  - ieg-100-ethernet-industrial-iot-gateway
  - ier-100-ethernet-industrial-rtu
  - ieio-100-modbus-remote-io-module
order: 12
---

# RS485 Cable and Shielding Guide for Modbus RTU Installations

RS485 wiring quality directly affects Modbus RTU reliability. Many gateway problems that look like firmware issues are actually caused by poor cable selection, inconsistent A/B wiring, excessive stubs, missing termination or grounding mistakes.

This page covers accessory and installation decisions for RS485-based industrial IoT deployments.

## Recommended Cable Characteristics

| Cable Feature | Practical Recommendation |
| --- | --- |
| Pair type | Twisted pair for differential RS485 signals |
| Shielding | Shielded cable is recommended in industrial cabinets or noisy sites |
| Conductor size | Choose based on cabinet distance, terminal type and local standards |
| Jacket | Match indoor, outdoor, oil-resistant or UV requirements |
| Labeling | Mark A/B, shield and device address clearly during installation |

## Shielding and Grounding Notes

Shielding should reduce noise without creating new grounding problems. In practice:

- keep RS485 cable away from motor power cables and contactor wiring
- avoid long uncontrolled stubs from the main bus
- review shield grounding method based on the site electrical design
- use surge protection where outdoor cable, long distance or lightning risk exists
- document baud rate, parity and slave addresses together with the wiring diagram

## Common Accessories

- shielded RS485 twisted-pair cable
- pluggable terminal blocks
- RS485 surge protector
- RS485 isolation module
- end-of-line termination resistor
- cabinet labels and wiring ferrules

## Related Products

- [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway)
- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)
- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)
- [Industrial IoT Accessories](/accessories)

## FAQ

### Does every RS485 network need termination?

Termination depends on bus length, baud rate, device design, and site wiring. Follow device manuals and site engineering requirements.

### Can I use ordinary alarm cable for RS485?

It may work in short, quiet installations, but industrial Modbus RTU deployments should use suitable twisted-pair wiring and follow shielding guidance.

### Should RS485 accessories be included in export quotations?

Yes. Cable, terminal blocks, labels, surge protection and isolation can prevent many commissioning problems.
