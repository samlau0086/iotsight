# IoTEdges CMS Product Fill Checklists

Last updated: 2026-07-01

## Goal

Use this document when creating or reviewing product entries in Decap CMS.

These checklists focus on the products most likely to be promoted first. They keep model naming, route naming, product positioning, I/O claims, and status choices consistent.

## 1. IEG-140 4G Industrial IoT Gateway

Use this when adding the missing 4G gateway page under the `IEG-*` gateway family.

### Identity fields

| Field | Recommended value |
| --- | --- |
| `id` | `ieg-140-4g-industrial-iot-gateway` |
| `title` | `IEG-140 4G Industrial IoT Gateway` |
| `category` | `Industrial IoT Gateway` |
| `model` | `IEG-140` |
| `status` | `Preview` or `Available for project inquiry` |
| `primaryKeyword` | `4G industrial IoT gateway` |
| `route` | `/products/ieg-140-4g-industrial-iot-gateway` |
| `order` | `5` |
| `imageUrl` | `/uploads/products/ieg-140-4g-industrial-iot-gateway.svg` |

### Specs to include

| Group | Specs |
| --- | --- |
| `Hardware I/O` | `1 x RS485`; gateway-focused architecture; no heavy local I/O unless hardware is confirmed |
| `Communication` | `4G LTE Cat1`; external antenna; SIM/APN setup |
| `Protocols` | `Modbus RTU`; `Modbus TCP`; `MQTT telemetry publishing` |
| `Power & Mounting` | `9-36VDC`; DIN rail; local web configuration |

### Positioning

- Use for remote Modbus-to-MQTT telemetry where wired Ethernet is not available.
- Keep it clearly separate from `IER-*` RTUs: this is a gateway page, not a local I/O controller page.
- Do not claim Wi-Fi or LoRa in this model.

### Related links

- `/products/ieg-100-ethernet-industrial-iot-gateway`
- `/products/ieg-120-wifi-industrial-iot-gateway`
- `/products/ier-140-4g-remote-relay-rtu`
- `/knowledge/mqtt`
- `/knowledge/modbus`

## 2. IER-141 4G Pump & Valve RTU

Use this when reviewing or cloning the pump and valve RTU page.

### Identity fields

| Field | Recommended value |
| --- | --- |
| `id` | `ier-141-4g-pump-valve-rtu` |
| `title` | `IER-141 4G Pump & Valve RTU` |
| `category` | `4G Pump & Valve RTU` |
| `model` | `IER-141` |
| `status` | `Available for project inquiry` |
| `primaryKeyword` | `4G pump controller RTU` |
| `route` | `/products/ier-141-4g-pump-valve-rtu` |
| `order` | `8` |
| `imageUrl` | `/uploads/products/ier-141-4g-pump-valve-rtu.svg` |

### Specs to include

| Group | Specs |
| --- | --- |
| `Hardware I/O` | `4DI`; `4DO or relay outputs`; `2AI`; `1 x RS485` |
| `Communication` | `4G LTE Cat1`; pump stations; valve chambers; irrigation cabinets |
| `Protocols` | `MQTT`; `Modbus Master`; `Modbus Slave`; scheduled control; alarm push; OTA |
| `Power & Mounting` | `9-36VDC`; DIN rail; local web UI |

### Positioning

- Use for pump stations, valve chambers, irrigation cabinets, pressure monitoring, and level monitoring.
- Emphasize analog input use for pressure, level, flow, or current transmitters.
- Do not position it as a safety controller, certified pump protection relay, or direct motor-power switch.

### Related links

- `/products/ier-140-4g-remote-relay-rtu`
- `/products/ier-142-4g-power-cabinet-rtu`
- `/products/ieio-100-modbus-remote-io-module`
- `/knowledge/pump-control-rtu`
- `/knowledge/4-20ma-pressure-sensor-rtu-wiring`

## 3. IER-142 4G Power Cabinet RTU

Use this when reviewing or cloning the dry-contact cabinet monitoring RTU page.

### Identity fields

| Field | Recommended value |
| --- | --- |
| `id` | `ier-142-4g-power-cabinet-rtu` |
| `title` | `IER-142 4G Power Cabinet RTU` |
| `category` | `4G Power Cabinet RTU` |
| `model` | `IER-142` |
| `status` | `Available for project inquiry` |
| `primaryKeyword` | `4G power cabinet RTU` |
| `route` | `/products/ier-142-4g-power-cabinet-rtu` |
| `order` | `9` |
| `imageUrl` | `/uploads/products/ier-142-4g-power-cabinet-rtu.svg` |

### Specs to include

| Group | Specs |
| --- | --- |
| `Hardware I/O` | `8DI`; `4DO or relay outputs`; `1 x RS485` |
| `Communication` | `4G LTE Cat1`; power cabinets; ATS cabinets; generator rooms |
| `Protocols` | `MQTT`; `Modbus Master`; `Modbus Slave`; event alarms; heartbeat telemetry; OTA |
| `Power & Mounting` | `9-36VDC`; DIN rail; local web UI |

### Positioning

- Use for breaker status, ATS status, SPD alarm, door contact, generator room alarm, and dry-contact event monitoring.
- Emphasize many digital inputs and event capture.
- Do not position it as a certified protection relay, generator safety controller, fire alarm controller, or grid protection device.

### Related links

- `/products/ier-141-4g-pump-valve-rtu`
- `/products/ier-140-4g-remote-relay-rtu`
- `/products/ier-100-ethernet-industrial-rtu`
- `/products/ieio-100-modbus-remote-io-module`
- `/knowledge/rs485`

## 4. IEAC-140 4G GSM Gate Opener

Use this when reviewing or cloning the Europe-focused access-control product page.

### Identity fields

| Field | Recommended value |
| --- | --- |
| `id` | `ieac-140-4g-gsm-gate-opener` |
| `title` | `IEAC-140 4G GSM Gate Opener` |
| `category` | `Remote Access Controller` |
| `model` | `IEAC-140` |
| `status` | `Available for project inquiry` |
| `primaryKeyword` | `4G GSM gate opener` |
| `route` | `/products/ieac-140-4g-gsm-gate-opener` |
| `order` | `6` |
| `imageUrl` | `/uploads/products/ieac-140-4g-gsm-gate-opener.svg` |

### Specs to include

| Group | Specs |
| --- | --- |
| `Hardware I/O` | `2 dry-contact relay outputs`; `2 digital inputs`; external cellular antenna |
| `Communication` | `4G LTE`; Europe-focused access control; GSM replacement positioning |
| `Protocols` | authorized call; SMS; dashboard; app; API workflow, only when project scope supports it |
| `Power & Mounting` | `12-24VDC`; cabinet or protected enclosure integration |

### Positioning

- Use for gates, doors, barriers, garage doors, parking access, and access-control retrofit projects in Europe.
- Primary positioning should be 4G-first.
- Treat GSM/2G as legacy search intent or optional fallback only after country and module validation.
- Do not claim certified emergency access, fire access, elevator control, or complete intercom audio unless validated.

### Related links

- `/solutions/gate-access-control`
- `/products/ier-140-4g-remote-relay-rtu`
- `/knowledge/4g-gsm-gate-opener-europe`
- `/knowledge/dry-contact-relay-wiring-gate-opener`
- `/blog/how-to-choose-4g-gate-opener-europe`

## 5. IEIO-100 Modbus Remote IO Module

Use this when reviewing or cloning Remote IO module pages.

### Identity fields

| Field | Recommended value |
| --- | --- |
| `id` | `ieio-100-modbus-remote-io-module` |
| `title` | `IEIO-100 Modbus Remote IO Module` |
| `category` | `Remote IO Module` |
| `model` | `IEIO-100` |
| `status` | `Published` |
| `primaryKeyword` | `Modbus Remote IO module` |
| `route` | `/products/ieio-100-modbus-remote-io-module` |
| `order` | `2` |
| `imageUrl` | `/uploads/products/ieio-100-modbus-remote-io-module.svg` |

### Specs to include

| Group | Specs |
| --- | --- |
| `Hardware I/O` | `IEIO-100-DI8`; `IEIO-100-DO8`; `IEIO-100-AI4`; `IEIO-100-AO4` |
| `Communication` | `RS485 Modbus RTU`; remote I/O expansion |
| `Power & Mounting` | `24VDC`; DIN rail; cabinet installation |

### Positioning

- Use for distributed I/O expansion behind RTUs, gateways, PLCs, or SCADA masters.
- Keep it wired and Modbus-focused.
- Do not position IEIO-100 as an MQTT gateway, 4G device, Wi-Fi device, or LoRa device.

### Related links

- `/products/ier-100-ethernet-industrial-rtu`
- `/products/ieg-100-ethernet-industrial-iot-gateway`
- `/knowledge/modbus`
- `/knowledge/rs485`
- `/knowledge/4-20ma-pressure-sensor-rtu-wiring`

## 6. Shared Product QA Before Publishing

Before publishing any product:

- Confirm `id`, `route`, `model`, and page title describe the same model.
- Confirm no existing product already uses the same `id` or `route`.
- Confirm `imageUrl` points to an uploaded or existing asset.
- Confirm `specGroups` includes the key I/O count, uplink, protocols, power, and mounting notes.
- Confirm every related link opens on the live site or is intentionally held until another page is published.
- Keep `Draft` if the product should not appear publicly.
- Use `Available for project inquiry` when the model is useful for sales inquiry but final datasheet details still need project confirmation.
