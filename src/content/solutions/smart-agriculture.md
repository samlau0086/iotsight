---
id: smart-agriculture
title: Smart Agriculture
description: Track soil moisture, greenhouse climate, and irrigation equipment with an architecture that separates wired, LoRa, WiFi, and 4G paths.
image: /uploads/solutions/smart-agriculture-hero.svg
architectureImage: /uploads/solutions/smart-agriculture-architecture.svg
recommendedProductType: RTU or Remote IO
recommendedUplink: 4G or wired cabinet path
deploymentEnvironment: Greenhouses, irrigation cabinets, remote farm assets
iconKey: sprout
link: /solutions/smart-agriculture
order: 4
detailedContent:
  - Smart agriculture projects often combine soil sensors, greenhouse climate data, pump stations, irrigation valves, and remote dashboards. The right architecture depends heavily on distance, power availability, and whether the site can use wired cabinets, LoRa, WiFi, or cellular uplinks.
  - For greenhouses and equipment rooms, wired Remote IO can be a practical first step. Field-wide LoRa or 4G products should remain validation-gated until wireless range, antenna, power, and regional frequency requirements are confirmed.
  - IoTEdges should publish agriculture pages by application first, then connect them to product pages only after each wireless model has engineering evidence.
hardware:
  - Future LoRa or 4G RTU path after wireless and power validation
  - IEIO-100 Remote IO modules for wired greenhouse cabinets
  - Multi-depth soil moisture probes
  - Environmental temperature and humidity sensors
  - Solenoid valve controllers
software:
  - Irrigation schedule dashboard
  - Crop stress warning notifications
  - Weather data integration after project scoping
  - Historical sensor trend reporting
relatedProducts:
  - title: IER-141 4G Pump & Valve RTU
    href: /products/ier-141-4g-pump-valve-rtu
  - title: IER-140 4G Remote Relay RTU
    href: /products/ier-140-4g-remote-relay-rtu
  - title: IEIO-100 Modbus Remote IO Module
    href: /products/ieio-100-modbus-remote-io-module
---

## Smart Agriculture Deployment

Separate greenhouse cabinet monitoring, irrigation control, and field-wide wireless sensing into clear hardware paths before fixing the final product combination.
