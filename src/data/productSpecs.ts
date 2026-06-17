import { ProductSpecGroup } from '../types';

export const productSpecsById: Record<string, ProductSpecGroup[]> = {
  'ai-iot-dashboard-industrial-operations-platform': [
    {
      title: 'Platform Scope',
      specs: [
        { label: 'Deployment', value: 'Cloud, private cloud, or OEM-branded deployment' },
        { label: 'Device Scope', value: 'RTUs, gateways, Remote IO, meters, PLCs, sensors' },
        { label: 'Typical Users', value: 'Operations, maintenance, integrators, OEM support teams' },
        { label: 'Configuration Method', value: 'Web application with role-based user access' },
      ],
    },
    {
      title: 'Telemetry & Control',
      specs: [
        { label: 'Telemetry Ingest', value: 'MQTT subscriber and HTTP API' },
        { label: 'Remote Control', value: 'MQTT command topics and pending command queue' },
        { label: 'Workflow Engine', value: 'Alarm, schedule, and event-triggered automation' },
      ],
    },
    {
      title: 'Operations Interface',
      specs: [
        { label: 'SCADA Views', value: 'Site views for pumps, tanks, cabinets, machines, and access points' },
        { label: 'AI Layer', value: 'Optional AI Copilot for alarms, trends, and maintenance analysis' },
      ],
    },
  ],
  'ieg-100-ethernet-industrial-iot-gateway': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Local I/O', value: 'No built-in DI/DO; gateway-focused architecture' },
        { label: 'Field Interface', value: '1 x RS485 for Modbus RTU devices' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Uplink', value: 'Ethernet' },
        { label: 'Best Fit', value: 'Control cabinets, LAN-connected factories, utility rooms' },
      ],
    },
    {
      title: 'Protocols',
      specs: [
        { label: 'Network Protocols', value: 'Modbus TCP and MQTT telemetry publishing' },
        { label: 'Primary Role', value: 'Modbus data collection and MQTT telemetry' },
      ],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '9-36VDC target for cabinet deployment' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for industrial indoor panels' },
        { label: 'Configuration Method', value: 'Local web configuration and remote parameter setup' },
        { label: 'Mounting', value: 'DIN rail cabinet deployment' },
      ],
    },
  ],
  'ieio-100-modbus-remote-io-module': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Variant 1', value: 'IEIO-100-DI8 with 8 digital inputs' },
        { label: 'Variant 2', value: 'IEIO-100-DO8 with 8 digital or relay outputs' },
        { label: 'Variant 3', value: 'IEIO-100-AI4 with 4 analog inputs' },
        { label: 'Variant 4', value: 'IEIO-100-AO4 with 4 analog outputs' },
        { label: 'Typical Signals', value: 'Dry contact, relay output, 4-20mA, 0-10V depending on variant' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Interface', value: 'RS485 Modbus RTU' },
        { label: 'Primary Role', value: 'Distributed I/O expansion for RTU, gateway, PLC, and SCADA projects' },
      ],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '24VDC industrial control power target' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for cabinet installations' },
        { label: 'Mounting', value: 'DIN rail cabinet installation' },
      ],
    },
  ],
  'ier-100-ethernet-industrial-rtu': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Digital Inputs', value: '4DI' },
        { label: 'Digital Outputs', value: '2DO or relay outputs' },
        { label: 'Analog Inputs', value: '2AI for 4-20mA or 0-10V signals' },
        { label: 'Field Interface', value: '1 x RS485' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Uplink', value: 'Ethernet' },
        { label: 'Primary Role', value: 'Local I/O telemetry and relay-style control in wired cabinets' },
      ],
    },
    {
      title: 'Protocols',
      specs: [{ label: 'Protocols', value: 'Modbus RTU, Modbus TCP, optional MQTT telemetry' }],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '9-36VDC target' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for industrial cabinets' },
        { label: 'Configuration Method', value: 'Local web UI or engineering setup utility depending on firmware package' },
        { label: 'Mounting', value: 'DIN rail cabinet deployment' },
      ],
    },
  ],
  'ieg-120-wifi-industrial-iot-gateway': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Local I/O', value: 'No built-in DI/DO; gateway-focused architecture' },
        { label: 'Field Interface', value: '1 x RS485 for Modbus RTU devices' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Uplink', value: 'WiFi' },
        { label: 'Ethernet', value: 'Setup or local network interface if included' },
        { label: 'Wireless Scope', value: 'Single uplink model, not 4G or LoRa' },
        { label: 'Best Fit', value: 'Indoor industrial WiFi sites and retrofit monitoring' },
      ],
    },
    {
      title: 'Protocols',
      specs: [{ label: 'Network Protocols', value: 'Modbus TCP and MQTT telemetry publishing' }],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '9-36VDC target' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for indoor industrial cabinets' },
        { label: 'Configuration Method', value: 'Local web setup for WiFi onboarding and device parameters' },
        { label: 'Mounting', value: 'DIN rail cabinet deployment' },
      ],
    },
  ],
  'ier-120-wifi-remote-monitoring-rtu': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Digital Inputs', value: '4DI' },
        { label: 'Digital Outputs', value: '2DO or relay outputs' },
        { label: 'Analog Inputs', value: '2AI for 4-20mA or 0-10V signals' },
        { label: 'Field Interface', value: '1 x RS485' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Uplink', value: 'WiFi' },
        { label: 'Best Fit', value: 'Indoor equipment rooms, utility panels, OEM monitoring' },
      ],
    },
    {
      title: 'Protocols',
      specs: [{ label: 'Protocols', value: 'Modbus RTU and MQTT telemetry' }],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '9-36VDC target' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for indoor equipment rooms and cabinets' },
        { label: 'Configuration Method', value: 'Local web setup or service configuration utility' },
        { label: 'Mounting', value: 'DIN rail cabinet deployment' },
      ],
    },
  ],
  'ieac-140-4g-gsm-gate-opener': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Relay Outputs', value: '1 or 2 dry-contact relay outputs depending on project package' },
        { label: 'Digital Inputs', value: '1 or more status inputs for gate, door, exit button, or alarm' },
        { label: 'Relay Type', value: 'Dry contact trigger output for gate motor or lock controller input' },
        { label: 'Antenna', value: 'External cellular antenna path for cabinet or pillar installation' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Primary Uplink', value: '4G LTE for Europe-focused access control deployments' },
        { label: 'Legacy Search Fit', value: 'GSM gate opener replacement positioning' },
      ],
    },
    {
      title: 'Protocols & Access',
      specs: [
        { label: 'Access Methods', value: 'Authorized call, SMS, dashboard, app, or API workflow' },
        { label: 'Primary Role', value: 'Remote gate, barrier, lock, and cabinet access control' },
      ],
    },
    {
      title: 'Market Fit',
      specs: [
        { label: 'Target Market', value: 'European installers, distributors, OEM access-control brands' },
        { label: 'Power Supply', value: '12-24VDC target for gate control cabinets' },
        { label: 'Enclosure', value: 'Controller board or module intended for protected cabinet or enclosure integration' },
        { label: 'Configuration Method', value: 'Installer setup by local app, web UI, or service tool depending on project package' },
      ],
    },
  ],
  'ier-140-4g-remote-relay-rtu': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Digital Inputs', value: '2DI' },
        { label: 'Digital Outputs', value: '2DO or relay outputs' },
        { label: 'Field Interface', value: '1 x RS485' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Uplink', value: '4G LTE Cat1' },
        { label: 'Best Fit', value: 'Pump, valve, cabinet, street light, and remote relay control' },
      ],
    },
    {
      title: 'Protocols',
      specs: [
        { label: 'Protocols', value: 'MQTT, Modbus Master, Modbus Slave' },
        { label: 'Local Features', value: 'Web dashboard, scheduled control, alarm push, OTA upgrade' },
      ],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '9-36VDC target' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for remote control cabinets' },
        { label: 'Configuration Method', value: 'Local web UI with remote dashboard parameter management' },
        { label: 'Mounting', value: 'DIN rail cabinet deployment' },
      ],
    },
  ],
  'ier-141-4g-pump-valve-rtu': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Digital Inputs', value: '4DI' },
        { label: 'Digital Outputs', value: '4DO or relay outputs' },
        { label: 'Analog Inputs', value: '2AI for pressure, level, flow, or current transmitters' },
        { label: 'Field Interface', value: '1 x RS485' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Uplink', value: '4G LTE Cat1' },
        { label: 'Best Fit', value: 'Pump stations, valve chambers, irrigation, and water cabinets' },
      ],
    },
    {
      title: 'Protocols',
      specs: [
        { label: 'Protocols', value: 'MQTT, Modbus Master, Modbus Slave' },
        { label: 'Local Features', value: 'Scheduled control, alarm push, OTA upgrade' },
      ],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '9-36VDC target' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for water, utility, and irrigation cabinets' },
        { label: 'Configuration Method', value: 'Local web UI with remote dashboard setup for alarms and schedules' },
        { label: 'Mounting', value: 'DIN rail cabinet deployment' },
      ],
    },
  ],
  'ier-142-4g-power-cabinet-rtu': [
    {
      title: 'Hardware I/O',
      specs: [
        { label: 'Digital Inputs', value: '8DI' },
        { label: 'Digital Outputs', value: '4DO or relay outputs' },
        { label: 'Field Interface', value: '1 x RS485' },
      ],
    },
    {
      title: 'Communication',
      specs: [
        { label: 'Uplink', value: '4G LTE Cat1' },
        { label: 'Best Fit', value: 'Power cabinets, ATS cabinets, generator rooms, alarm panels' },
      ],
    },
    {
      title: 'Protocols',
      specs: [
        { label: 'Protocols', value: 'MQTT, Modbus Master, Modbus Slave' },
        { label: 'Local Features', value: 'Event alarms, heartbeat telemetry, OTA upgrade' },
      ],
    },
    {
      title: 'Power & Mounting',
      specs: [
        { label: 'Power Supply', value: '9-36VDC target' },
        { label: 'Operating Temperature', value: '-20 to 70 C target for electrical cabinets and generator rooms' },
        { label: 'Configuration Method', value: 'Local web UI with remote event and alarm configuration' },
        { label: 'Mounting', value: 'DIN rail cabinet deployment' },
      ],
    },
  ],
};
