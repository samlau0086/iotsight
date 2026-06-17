import { ProductBomGroup } from '../types';

export const productBomGuidesById: Record<string, ProductBomGroup[]> = {
  'ai-iot-dashboard-industrial-operations-platform': [
    {
      title: 'Platform Setup',
      items: [
        'Server or VPS environment for cloud or private deployment',
        'Domain, SSL, and deployment access plan',
        'Database backup and retention policy',
        'User roles and tenant structure checklist',
      ],
    },
    {
      title: 'Device Integration',
      items: [
        'Gateway or RTU device inventory list',
        'MQTT topics or HTTP ingest token worksheet',
        'Register, metric, and alarm mapping sheet',
        'Site naming and device label convention',
      ],
    },
  ],
  'ieg-100-ethernet-industrial-iot-gateway': [
    {
      title: 'Cabinet Essentials',
      items: [
        '24VDC or 12VDC DIN rail power supply',
        'DIN rail and terminal block set',
        'Industrial Ethernet patch cable',
        'Labeling and panel wiring markers',
      ],
    },
    {
      title: 'Field Connectivity',
      items: [
        'Shielded RS485 cable',
        'RS485 isolation or surge module',
        'Modbus meter, inverter, or instrument list',
        'MQTT broker and topic mapping worksheet',
      ],
    },
  ],
  'ieio-100-modbus-remote-io-module': [
    {
      title: 'Control Panel BOM',
      items: [
        '24VDC control power supply',
        'DIN rail and enclosure space',
        'Terminal blocks for field signal landing',
        'Panel labels for DI, DO, AI, or AO channels',
      ],
    },
    {
      title: 'Signal Interface',
      items: [
        'Shielded RS485 cable and termination',
        'Dry-contact field switches or alarm contacts',
        'Interposing relay for output-side isolation',
        '4-20mA or 0-10V sensors for analog variants',
      ],
    },
  ],
  'ier-100-ethernet-industrial-rtu': [
    {
      title: 'Core RTU BOM',
      items: [
        '24VDC or 12VDC DIN rail power supply',
        'Industrial Ethernet patch cable',
        'DIN rail and terminal block kit',
        'Local cabinet fuse and protection accessories',
      ],
    },
    {
      title: 'Signal & Control Side',
      items: [
        'Door contact, float switch, or alarm dry contact',
        '4-20mA pressure, level, or flow transmitter',
        'Interposing relay or contactor interface for DO',
        'Shielded RS485 cable for downstream Modbus devices',
      ],
    },
  ],
  'ieg-120-wifi-industrial-iot-gateway': [
    {
      title: 'Cabinet Essentials',
      items: [
        '24VDC or 12VDC DIN rail power supply',
        'DIN rail mounting hardware',
        'Panel labeling and terminal blocks',
        'WiFi onboarding and access credential checklist',
      ],
    },
    {
      title: 'Wireless & Field Side',
      items: [
        'WiFi antenna or better antenna placement accessory',
        'Shielded RS485 cable',
        'Modbus device list and register worksheet',
        'MQTT broker and topic planning sheet',
      ],
    },
  ],
  'ier-120-wifi-remote-monitoring-rtu': [
    {
      title: 'Core RTU BOM',
      items: [
        '24VDC or 12VDC DIN rail power supply',
        'DIN rail and terminal block set',
        'Local cabinet wiring labels',
        'WiFi setup and maintenance access checklist',
      ],
    },
    {
      title: 'Signal & Control Side',
      items: [
        'Dry-contact alarm or status inputs',
        '4-20mA or 0-10V transmitter for analog channels',
        'Interposing relay for output-side protection',
        'RS485 cable for Modbus field devices',
      ],
    },
  ],
  'ieac-140-4g-gsm-gate-opener': [
    {
      title: 'Access Control BOM',
      items: [
        '12-24VDC power source from access cabinet',
        'External 4G antenna and cable path',
        'SIM card with APN and operator setup',
        'Protected enclosure or gate-side cabinet space',
      ],
    },
    {
      title: 'Gate Interface',
      items: [
        'Dry-contact relay wiring to gate motor controller',
        'Gate status magnetic contact or sensor',
        'Exit button or local trigger input',
        'Installer commissioning checklist for authorized users',
      ],
    },
  ],
  'ier-140-4g-remote-relay-rtu': [
    {
      title: 'Remote Cabinet BOM',
      items: [
        '9-36VDC power supply or site DC source',
        'External 4G antenna',
        'SIM card with APN settings',
        'DIN rail enclosure or protected control box',
      ],
    },
    {
      title: 'Control Interface',
      items: [
        'Dry-contact status inputs',
        'Interposing relay or contactor for DO output',
        'RS485 cable to Modbus meter or instrument',
        'Alarm routing worksheet for dashboard, SMS, or email',
      ],
    },
  ],
  'ier-141-4g-pump-valve-rtu': [
    {
      title: 'Water Cabinet BOM',
      items: [
        '9-36VDC power supply',
        'External 4G antenna with cabinet feed-through',
        'SIM card and APN checklist',
        'DIN rail enclosure or irrigation cabinet space',
      ],
    },
    {
      title: 'Pump & Valve Side',
      items: [
        'Pressure, level, or flow transmitter',
        'Float switch, run feedback, or fault contact',
        'Contactor or relay interface for pump and valve outputs',
        'RS485 cable for VFD, flow meter, or Modbus meter',
      ],
    },
  ],
  'ier-142-4g-power-cabinet-rtu': [
    {
      title: 'Electrical Cabinet BOM',
      items: [
        '9-36VDC auxiliary power source',
        'External 4G antenna',
        'SIM card with stable remote-site coverage',
        'DIN rail mounting and terminal distribution',
      ],
    },
    {
      title: 'Alarm & Metering Side',
      items: [
        'Breaker, ATS, SPD, or door dry-contact wiring',
        'Interposing relay for horn, lamp, or reset outputs',
        'RS485 cable for power meter or controller polling',
        'Alarm point list and event naming worksheet',
      ],
    },
  ],
};
