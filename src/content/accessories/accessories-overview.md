---
id: accessories-overview
eyebrow: Project Accessories
title: Industrial IoT accessories for RTU, gateway and Remote IO projects
description: Recommended and compatible accessories for IoTEdges project deployments, including 4G antennas, SIM/APN setup, RS485 wiring, DIN rail power supplies, relay interfaces, sensors, meters and gate opener installation parts.
overviewCards:
  - title: Project accessory guidance
    text: Accessories are listed as recommended or compatible project items. Final selection depends on site wiring, cabinet design and local regulations.
    iconKey: shield-check
  - title: Installation-ready thinking
    text: The goal is to help integrators understand the complete bill of materials beyond the main RTU, gateway or Remote IO module.
    iconKey: cable
  - title: Export-friendly support
    text: For overseas projects, antenna, SIM, APN, power and wiring notes often decide whether installation succeeds quickly.
    iconKey: radio-tower
groups:
  - title: 4G, WiFi And RF Accessories
    iconKey: radio-tower
    description: Connectivity accessories for 4G RTUs, 4G gate openers, WiFi gateways and cabinet installations.
    items:
      - 4G LTE external antenna
      - WiFi antenna
      - Antenna extension cable
      - SMA connector and cabinet feed-through
      - IoT SIM / M2M SIM selection guidance
      - APN and operator setup checklist
  - title: RS485 And Modbus Wiring
    iconKey: cable
    description: Field wiring accessories for Modbus RTU, RS485 sensor networks and remote IO cabinets.
    items:
      - Shielded twisted-pair RS485 cable
      - Pluggable terminal blocks
      - RS485 surge protector
      - RS485 isolation module
      - End-of-line termination resistor
      - Grounding and cable shielding accessories
  - title: Power And Cabinet Installation
    iconKey: zap
    description: Power supply and panel accessories for industrial IoT gateway, RTU and Remote IO deployments.
    items:
      - 12V / 24V DC DIN rail power supply
      - DIN rail mounting kit
      - Industrial enclosure or control cabinet
      - Fuse holder and terminal distribution
      - Cable gland and strain relief
      - Small UPS or backup power option
  - title: DI, DO, Relay And Control Accessories
    iconKey: sliders-horizontal
    description: Interface accessories for digital input, relay output, dry contact and field control applications.
    items:
      - Interposing relay
      - Contactor interface
      - Dry contact signal wiring
      - Alarm horn or indicator lamp
      - Exit button
      - Door or gate magnetic contact
  - title: Sensors And Meters
    iconKey: gauge
    description: Project sensors and meters that commonly connect to RTUs, gateways and Remote IO modules.
    items:
      - 4-20mA pressure transmitter
      - Level sensor
      - Flow meter
      - Temperature and humidity sensor
      - Modbus energy meter
      - Split-core CT clamp
  - title: Gate Opener Project Accessories
    iconKey: door-open
    description: Recommended accessories for 4G gate opener, remote access controller and dry-contact relay projects.
    items:
      - 4G cabinet antenna
      - Gate status contact
      - Exit button
      - Relay terminal wiring kit
      - Weatherproof enclosure
      - Installer SIM / APN checklist
selectionGuides:
  - title: How to Choose a 4G Antenna for Industrial RTU and Gate Opener Projects
    href: /knowledge/4g-antenna-industrial-rtu
    summary: LTE antenna, SIM, APN, cabinet mounting and weak-signal site notes for 4G products.
  - title: RS485 Cable and Shielding Guide for Modbus RTU Installations
    href: /knowledge/rs485-cable-shielding-guide
    summary: Cable, shielding, grounding, termination and surge protection notes for RS485 projects.
  - title: DIN Rail Power Supply Guide for Industrial IoT Gateways and RTUs
    href: /knowledge/din-rail-power-supply-industrial-iot
    summary: 12V/24V DC power, cabinet terminals, fuses and backup power planning.
  - title: Dry Contact Relay Wiring for 4G Gate Openers and Remote Access Controllers
    href: /knowledge/dry-contact-relay-wiring-gate-opener
    summary: Relay COM/NO wiring, gate status contacts, exit buttons and safe integration boundaries.
  - title: 4-20mA Pressure Sensor Wiring for RTU and Remote IO Projects
    href: /knowledge/4-20ma-pressure-sensor-rtu-wiring
    summary: Pressure transmitter wiring and scaling notes for pump, water and irrigation monitoring.
productAccessoryMap:
  - product: IEAC-140 4G GSM Gate Opener
    href: /products/ieac-140-4g-gsm-gate-opener
    accessories: 4G antenna, IoT SIM, door contact, exit button, relay wiring terminals, weatherproof cabinet
  - product: IER-140 / IER-141 / IER-142 4G RTU
    href: /products/ier-140-4g-remote-relay-rtu
    accessories: 4G antenna, DIN rail power supply, RS485 cable, pressure/level sensors, relay or contactor interface
  - product: IEG-100 / IEG-120 Industrial IoT Gateway
    href: /products/ieg-100-ethernet-industrial-iot-gateway
    accessories: RS485 cable, Modbus energy meter, terminal blocks, Ethernet patch cable, WiFi antenna for WiFi models
  - product: IEIO-100 Modbus Remote IO Module
    href: /products/ieio-100-modbus-remote-io-module
    accessories: Terminal blocks, shielded RS485 wiring, DI contacts, relay loads, 4-20mA sensors, DIN rail enclosure
  - product: AI IoT Dashboard
    href: /products/ai-iot-dashboard-industrial-operations-platform
    accessories: Ingest token plan, gateway binding, SIM/APN checklist, device labels, register/metric mapping worksheet
projectKits:
  - title: 4G Gate Opener Kit
    iconKey: door-open
    contents:
      - IEAC-140 controller
      - 4G antenna
      - IoT SIM guidance
      - gate status contact
      - exit button wiring
      - relay pulse setup
  - title: Modbus MQTT Gateway Kit
    iconKey: router
    contents:
      - IEG gateway
      - RS485 cable
      - Modbus meter or instrument
      - terminal blocks
      - MQTT broker settings
      - register map worksheet
  - title: Pump And Valve RTU Kit
    iconKey: server
    contents:
      - IER-141 RTU
      - 4G antenna
      - pressure transmitter
      - float switch
      - relay interface
      - pump alarm wiring
  - title: Energy Monitoring Kit
    iconKey: cpu
    contents:
      - Modbus energy meter
      - CT clamps
      - IEG gateway
      - RS485 wiring
      - 24V power supply
      - dashboard mapping
ctaLabel: Request accessory BOM
ctaHref: /contact
---

Internal note: keep accessories content structured and let the page layout stay code-controlled.
