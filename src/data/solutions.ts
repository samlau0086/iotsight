import { Zap, Sun, Droplets, ThermometerSnowflake, Sprout, ShieldCheck } from 'lucide-react';

export const solutions = [
  {
    id: 'factory-energy',
    title: 'Factory Energy Monitoring',
    description: 'Track power consumption across your entire production line to support energy management, reduce waste, and improve visibility.',
    detailedContent: [
      'In manufacturing environments, understanding and controlling energy consumption is critical. Factory energy monitoring connects Modbus power meters, production assets, and dashboards so teams can see peak demand, hidden waste, and operating patterns.',
      'By capturing real-time metrics across production lines, factory managers can optimize schedules, compare baseline consumption, and prepare better energy management reports.',
      'Integration starts with validated IoTEdges gateway, RTU, and Remote IO product paths. The final hardware selection should follow the meter protocol, cabinet layout, local IO needs, and uplink method of the project.'
    ],
    icon: Zap,
    link: '/factory-energy',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IEG-100 Ethernet gateway for wired Modbus meter collection',
      'IER-100 Ethernet RTU when local DI/DO/AI signals are required',
      'IEIO-100 Remote IO modules for distributed signal expansion',
      'Split-core Current Transformers (CT)',
      'Modbus RTU / TCP power meters'
    ],
    software: [
      'Real-time energy consumption dashboard',
      'Energy baseline and peak demand trend analysis',
      'Automated energy reports',
      'Threshold alarms via configured notification channels'
    ],
    relatedProducts: [
      { title: 'IEG-100 Ethernet Industrial IoT Gateway', href: '/products/ieg-100-ethernet-industrial-iot-gateway' },
      { title: 'IER-100 Ethernet Industrial RTU', href: '/products/ier-100-ethernet-industrial-rtu' },
      { title: 'IEIO-100 Modbus Remote IO Module', href: '/products/ieio-100-modbus-remote-io-module' }
    ],
    relatedResources: [
      { title: 'Achieving ISO 50001 with Real-Time Energy Monitoring', href: '/blog/energy-monitoring-iso-50001' },
      { title: 'How to Choose the Right Modbus to MQTT Gateway', href: '/blog/how-to-choose-modbus-mqtt-gateway' },
      { title: 'Modbus for Industrial IoT Gateways and RTUs', href: '/knowledge/modbus' }
    ],
    architectureImage: 'https://images.unsplash.com/photo-1620022285141-9fc542ae77ff?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'solar-energy',
    title: 'Solar & Renewable Energy',
    description: 'Monitor inverter data, site conditions, and renewable energy assets with validation-aware gateway architecture.',
    detailedContent: [
      'Managing distributed solar and renewable energy assets requires consistent access to inverter, meter, and site-condition data. A practical monitoring architecture starts by confirming protocol support, cabinet networking, and the required uplink method.',
      'Dashboards can help operators compare production trends, detect abnormal generation, and understand equipment behavior across sites. Control and grid-management functions should remain project-specific and validation-gated.',
      'For early IoTEdges planning, Ethernet gateway deployments are the safest public path. 4G and LoRaWAN solar scenarios should wait for LTE module, frequency band, RF, and field validation before final product pages are published.'
    ],
    icon: Sun,
    link: '/solutions/solar-energy',
    image: 'https://images.unsplash.com/photo-1509391366360-12009a3258db?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IEG-100 Ethernet gateway for LAN-connected inverter cabinets',
      'Future IEG-140 4G gateway after LTE module and band validation',
      'String combiner boxes',
      'Irradiance and temperature weather stations',
      'Modbus-capable solar inverters'
    ],
    software: [
      'Multi-site PV dashboard',
      'Inverter and meter trend visualization',
      'Performance ratio analysis after data validation',
      'Fault and threshold notification workflows'
    ],
    relatedProducts: [
      { title: 'IEG-100 Ethernet Industrial IoT Gateway', href: '/products/ieg-100-ethernet-industrial-iot-gateway' }
    ],
    architectureImage: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'water-management',
    title: 'Water Management',
    description: 'Remote monitoring for pump stations, tank levels, flow meters, and water quality sensors across distributed sites.',
    detailedContent: [
      'Water distribution and treatment systems need reliable telemetry from pumps, tanks, valves, meters, and water quality sensors. A practical solution starts by mapping local IO, Modbus devices, and uplink availability at each station.',
      'Dashboards can help operators monitor tank levels, pressure trends, pump status, and abnormal events. Automated control should be scoped carefully and validated against the site control philosophy.',
      'For IoTEdges planning, wired RTU and Remote IO paths are the safest first public pages. Cellular water monitoring remains a strong SEO topic, but final 4G RTU specifications should wait for module, band, and field validation.'
    ],
    icon: Droplets,
    link: '/solutions/water-management',
    image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IER-100 Ethernet RTU for cabinet-based water telemetry',
      'IEIO-100 Remote IO modules for pump and level signal expansion',
      'Future IER-140 4G RTU after cellular validation',
      'Ultrasonic level sensors',
      'Water quality probes and flow or pressure transmitters',
      'Variable Frequency Drives (VFDs)'
    ],
    software: [
      'Pump station and tank dashboard',
      'Level, pressure, and flow trend analysis',
      'Tank level threshold alarms',
      'Maintenance history and event review'
    ],
    relatedProducts: [
      { title: 'IER-100 Ethernet Industrial RTU', href: '/products/ier-100-ethernet-industrial-rtu' },
      { title: 'IEIO-100 Modbus Remote IO Module', href: '/products/ieio-100-modbus-remote-io-module' }
    ],
    architectureImage: 'https://images.unsplash.com/photo-1542314831-c6a4d14eff4c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'smart-agriculture',
    title: 'Smart Agriculture',
    description: 'Track soil moisture, greenhouse climate, and irrigation equipment with an architecture that separates wired, LoRa, WiFi, and 4G paths.',
    detailedContent: [
      'Smart agriculture projects often combine soil sensors, greenhouse climate data, pump stations, irrigation valves, and remote dashboards. The right architecture depends heavily on distance, power availability, and whether the site can use wired cabinets, LoRa, WiFi, or cellular uplinks.',
      'For greenhouses and equipment rooms, wired Remote IO can be a practical first step. Field-wide LoRa or 4G products should remain validation-gated until wireless range, antenna, power, and regional frequency requirements are confirmed.',
      'IoTEdges should publish agriculture pages by application first, then connect them to product pages only after each wireless model has engineering evidence.'
    ],
    icon: Sprout,
    link: '/solutions/smart-agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'Future LoRa or 4G RTU path after wireless and power validation',
      'IEIO-100 Remote IO modules for wired greenhouse cabinets',
      'Multi-depth soil moisture probes',
      'Environmental temperature and humidity sensors',
      'Solenoid valve controllers'
    ],
    software: [
      'Irrigation schedule dashboard',
      'Crop stress warning notifications',
      'Weather data integration after project scoping',
      'Historical sensor trend reporting'
    ],
    relatedProducts: [
      { title: 'IEIO-100 Modbus Remote IO Module', href: '/products/ieio-100-modbus-remote-io-module' }
    ],
    architectureImage: 'https://images.unsplash.com/photo-1588180892313-09b674843cc1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'building-automation',
    title: 'Building Automation',
    description: 'Optimize building energy and equipment visibility through validated Modbus data collection and future advanced protocol paths.',
    detailedContent: [
      'Building automation projects often involve chillers, AHUs, thermostats, energy meters, IAQ monitors, and occupancy sensors. The first step is confirming which devices expose Modbus data and which require advanced building protocols.',
      'By starting with validated Modbus data collection and keeping advanced BACnet or OPC UA requirements as separate engineering gates, facility managers can build visibility over building performance without over-scoping the first hardware deployment.',
      'IoTEdges should keep BACnet, OPC UA, and multi-protocol edge gateway claims separate from baseline IEG-100 pages until protocol interoperability testing is complete.'
    ],
    icon: ThermometerSnowflake,
    link: '/solutions/building-automation',
    image: 'https://images.unsplash.com/photo-1517406323631-f11270bc701f?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IEG-100 Ethernet gateway for Modbus device collection',
      'Future edge gateway path for BACnet or OPC UA after protocol validation',
      'Smart HVAC thermostats',
      'Indoor Air Quality (IAQ) monitors',
      'Occupancy sensors'
    ],
    software: [
      'Floorplan layout visualization',
      'HVAC trend and schedule review',
      'Tenant energy report workflow',
      'Air quality index (AQI) dashboard'
    ],
    relatedProducts: [
      { title: 'IEG-100 Ethernet Industrial IoT Gateway', href: '/products/ieg-100-ethernet-industrial-iot-gateway' },
      { title: 'IEIO-100 Modbus Remote IO Module', href: '/products/ieio-100-modbus-remote-io-module' }
    ],
    architectureImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gate-access-control',
    title: 'Gate Access Control',
    description: 'Remote gate, door, barrier and access cabinet control for European installers using a validation-aware 4G-first controller path.',
    detailedContent: [
      'Gate access control projects often need a simple way to trigger a relay, authorize users, read door or gate status, and manage remote sites without running new network cables. In Europe, this search demand is often expressed as GSM gate opener, 4G gate opener, 4G intercom, remote access controller or RTU door controller.',
      'A practical architecture should start from 4G LTE rather than assuming long-term GSM availability. Country-level network support, SIM behavior, LTE bands, antenna performance and regulatory requirements must be checked before publishing final compatibility claims.',
      'IoTEdges positions this solution around a 4G-first remote access controller path, with GSM/2G described only as a possible legacy fallback after module and regional validation.'
    ],
    icon: ShieldCheck,
    link: '/solutions/gate-access-control',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IEAC-140 4G GSM Gate Opener for Europe-focused access projects',
      'Gate, door, barrier or lock relay interface after rating validation',
      'Door contact, gate status or alarm digital input path',
      'External antenna path for cabinets or remote entrances',
      'Local SIM and carrier validation for target European countries'
    ],
    software: [
      'Authorized access workflow planning',
      'Remote relay trigger and status monitoring concept',
      'Access event logging after firmware validation',
      'Installer setup workflow after product definition',
      'Optional dashboard, SMS, app or API workflow after validation'
    ],
    relatedProducts: [
      { title: 'IEAC-140 4G GSM Gate Opener', href: '/products/ieac-140-4g-gsm-gate-opener' }
    ],
    relatedResources: [
      { title: 'How to Choose a 4G Gate Opener for Europe', href: '/blog/how-to-choose-4g-gate-opener-europe' },
      { title: 'GSM vs 4G Gate Opener for Europe', href: '/knowledge/4g-gsm-gate-opener-europe' }
    ],
    architectureImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200'
  }
];
