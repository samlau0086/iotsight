# IoTEdges Remote Relay RTU Product Line Definition

Status: Draft for product planning and SEO roadmap  
Updated: June 11, 2026  
Scope: 4G LTE Cat1 remote relay RTU models for monitoring, relay control, Modbus RS485 and MQTT/Web Dashboard applications.

## Market Reference Summary

Mainstream remote relay RTU and cellular industrial controller products usually combine:

- 4G LTE cellular uplink for remote sites without wired internet.
- DI/DO or relay outputs for status monitoring and simple control.
- RS485 for Modbus RTU devices, meters, VFDs and local controllers.
- MQTT, HTTP or cloud platform connectivity.
- Alarm notification, remote configuration and scheduled control.
- Industrial enclosure, DIN rail mounting, wide power input and external antenna options.

Market references used for positioning:

- Teltonika RUT956: industrial cellular router category with cellular connectivity, serial interfaces and I/O positioning.
- Milesight UC300: industrial IoT controller category with rich IO, RS485/RS232 and remote control positioning.
- Common 4G RTU/GSM controller listings: frequently emphasize pump control, gate control, alarm inputs, relay outputs, SMS/app/cloud/MQTT and Modbus.

This file defines IoTEdges-owned product targets. It is not a final datasheet. Exact LTE bands, relay rating, isolation, surge, enclosure, operating temperature, Modbus limits, MQTT topics, OTA recovery and certification must be validated before publishing final claims.

## Naming Rule

- `IER` = IoTEdges RTU
- `14x` = 4G LTE / cellular uplink family
- One device has one wireless uplink only. Do not mix 4G, WiFi and LoRa in the same model.
- 5G remains out of scope for first-generation products.

## Recommended Product Matrix

| Model | Product Name | Positioning | IO Baseline | Best Applications | Publish Priority |
| --- | --- | --- | --- | --- | --- |
| IER-140 | 4G Remote Relay RTU | Entry model for simple remote relay control | 2DI + 2DO + 1x RS485 | water pump, water valve, gate relay, small cabinet, generator status | Published draft |
| IER-141 | 4G Pump & Valve RTU | Pump/valve controller with more field signals | 4DI + 4DO + 2AI + 1x RS485 | pump station, valve chamber, irrigation pump, tank level | Published draft |
| IER-142 | 4G Power Cabinet RTU | Distribution cabinet and generator monitoring | 8DI + 4DO + 1x RS485 | 配电箱, generator room, ATS cabinet, alarm panel | Published draft |
| IER-143 | 4G Irrigation RTU | Agriculture irrigation and valve scheduling | 4DI + 4DO + 2AI + 1x RS485 |农业灌溉, greenhouse pump, solenoid valve, water level | P2 candidate |
| IER-144 | 4G Street Light Relay RTU | Street light and outdoor relay scheduling | 4DI + 4DO + optional 1AI + 1x RS485 |路灯, sign lighting, outdoor cabinet, timer replacement | P2 candidate |
| IER-145 | 4G Multi-Relay RTU | Relay-dense cabinet control | 8DI + 8DO + 1x RS485 | multiple pumps, multiple valves, relay cabinet, OEM panel | P3 candidate |

## IER-140 4G Remote Relay RTU

Recommended role: entry model and first public page.

Planned capabilities:

- 4G LTE Cat1
- MQTT uplink and validated command downlink
- Web dashboard
- 2DI
- 2DO
- RS485
- Modbus Master
- Modbus Slave
- Scheduled control
- Alarm push
- OTA upgrade

Primary SEO intents:

- IoT remote relay RTU
- 4G remote relay controller
- 4G RTU relay output
- MQTT relay controller
- Modbus relay RTU

Notes:

- This is the right baseline for simple water pump, valve, door/gate relay and small cabinet projects.
- Keep exact relay rating and LTE band claims validation-gated.

## IER-141 4G Pump & Valve RTU

Recommended role: higher-value pump and valve controller.

Planned capabilities:

- 4G LTE Cat1
- MQTT and web dashboard
- 4DI for pump run/fault/local-auto/level alarm
- 4DO for pump start/stop, valve open/close or alarm output
- 2AI for pressure, level or flow transmitter
- 1x RS485 for VFD, flow meter, power meter or IO expansion
- Modbus Master and Modbus Slave
- Local control logic target after firmware validation
- Scheduled control and alarm push
- OTA upgrade

Best applications:

- remote pump station
- water valve chamber
- irrigation pump
- tank level control
- small water treatment cabinet

Why this model matters:

- Many water and agriculture projects need analog values in addition to DI/DO.
- 4DI + 4DO + 2AI is a practical mid-range configuration for control cabinets.

## IER-142 4G Power Cabinet RTU

Recommended role: DI-heavy monitoring model for electrical and generator cabinets.

Planned capabilities:

- 4G LTE Cat1
- MQTT and web dashboard
- 8DI for breaker state, door contact, SPD alarm, ATS status, generator alarm and dry contacts
- 4DO for reset, start signal, horn, lamp or auxiliary relay
- 1x RS485 for power meter, generator controller or ATS controller
- Modbus Master and Modbus Slave
- Alarm push and event log
- OTA upgrade

Best applications:

- 配电箱
- generator room
- ATS cabinet
- transformer room auxiliary monitoring
- industrial alarm cabinet

Why this model matters:

- Power cabinets often have many dry-contact status points but fewer analog signals.
- This model should be positioned around cabinet monitoring and event notification rather than precise metering claims unless the meter integration is validated.

## IER-143 4G Irrigation RTU

Recommended role: agriculture-specific RTU based on the pump/valve platform.

Planned capabilities:

- 4G LTE Cat1
- MQTT and web dashboard
- 4DI for water level, pressure switch, pump feedback and manual switch
- 4DO for pump and valve control
- 2AI for pressure, level or soil-related transmitter
- 1x RS485 for flow meter, VFD, fertilizer controller or weather station
- Schedule table and seasonal irrigation profile target
- Alarm push and OTA upgrade

Best applications:

- 农业灌溉
- greenhouse irrigation
- remote farm pump
- water tank and valve control

Why this model matters:

- It can share hardware with IER-141 while using agriculture-focused firmware presets and SEO content.
- Do not overclaim autonomous irrigation optimization until firmware and agronomic logic are validated.

## IER-144 4G Street Light Relay RTU

Recommended role: lighting scheduler and outdoor relay control.

Planned capabilities:

- 4G LTE Cat1
- MQTT and web dashboard
- 4DI for cabinet door, manual switch, leakage alarm or power status
- 4DO for lighting contactor or relay group control
- Optional 1AI for photocell/light sensor input after hardware validation
- 1x RS485 for power meter or local controller
- Scheduled control, sunrise/sunset table target, alarm push and OTA upgrade

Best applications:

- 路灯
- outdoor lighting cabinets
- sign lighting
- park or campus lighting
- timer replacement projects

Why this model matters:

- Lighting buyers often search by application rather than generic RTU keywords.
- This model can become a solution-specific page after schedule control and event logging are validated.

## IER-145 4G Multi-Relay RTU

Recommended role: relay-dense OEM model for panels that need more outputs.

Planned capabilities:

- 4G LTE Cat1
- MQTT and web dashboard
- 8DI
- 8DO
- 1x RS485
- Modbus Master and Modbus Slave
- Batch relay control, interlock logic target, alarm push and OTA upgrade

Best applications:

- multiple pump panels
- multiple valve cabinets
- relay control cabinets
- OEM remote control panels

Why this model matters:

- Good for OEM and system integrator projects, but publish later because relay rating, thermal behavior and enclosure design become more important.

## Recommended Publishing Order

1. Keep IER-140 as the public entry product page.
2. Keep IER-141 as the public pump, valve and irrigation RTU page.
3. Keep IER-142 as the public power cabinet, generator room and dry-contact alarm RTU page.
4. Keep IER-143 and IER-144 as solution-specific derivatives until firmware presets are clearer.
5. Keep IER-145 as an OEM/custom model until output rating and enclosure thermal design are validated.

## Validation Gates Before Final Datasheets

- LTE Cat1 module and regional band selection.
- SIM/APN behavior and reconnect behavior.
- Antenna performance in cabinet installations.
- Relay contact rating under target loads.
- DI wet/dry contact behavior.
- AI accuracy and protection, if included.
- RS485 isolation, surge and ESD.
- Modbus Master polling limit and timeout behavior.
- Modbus Slave register map.
- MQTT topic structure, command acknowledgement and retry behavior.
- Dashboard permission, operation log and alarm workflow.
- OTA rollback and recovery.
- EMC, safety and environmental tests.

## SEO Content Notes

Core product keywords:

- IoT remote relay RTU
- 4G remote relay controller
- cellular RTU relay output
- MQTT relay controller
- Modbus relay RTU
- 4G pump controller RTU
- 4G irrigation controller
- remote generator monitoring RTU
- street light remote control RTU

Recommended internal links:

- IER-140 product page should link to MQTT, Modbus and RS485 knowledge pages.
- Water Management and Smart Agriculture can link to IER-141 now; IER-143 remains a future agriculture-specific derivative.
- Gate Access Control can link to IER-140 only when the use case is relay control rather than access-control-specific workflows.
- IEAC-140 remains the better page for Europe-focused GSM/4G gate opener search intent.
