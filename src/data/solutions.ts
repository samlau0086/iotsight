import { Zap, Sun, Droplets, ThermometerSnowflake, Sprout } from 'lucide-react';

export const solutions = [
  {
    id: 'factory-energy',
    title: 'Factory Energy Monitoring',
    description: 'Track power consumption across your entire production line to achieve ISO 50001 compliance and reduce energy waste.',
    detailedContent: [
      "In today's highly competitive manufacturing environment, understanding and controlling energy consumption is critical. Our Factory Energy Monitoring solution provides an end-to-end connected system that offers deep insights into peak demand, hidden inefficiencies, and overall equipment effectiveness (OEE).",
      "By capturing real-time metrics across your entire production line with high precision, factory managers can optimize operational scheduling and significantly lower their carbon footprint. The platform automatically processes these metrics to generate ISO 50001 compliance reports, eliminating the need for manual data entry and audits.",
      "Integration is seamless with our IoTSight Energy Box gateways. You can pinpoint extremely energy-intensive assets, discover operational baseline drifts, and receive instant threshold alerts via SMS or email—preventing unexpected overhead costs and maximizing overall plant profitability."
    ],
    icon: Zap,
    link: '/factory-energy',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IoTSight Energy Box Series Gateway',
      'Split-core Current Transformers (CT)',
      'Modbus RTU / TCP Power Meters',
      'Temperature & Vibration Sensors'
    ],
    software: [
      'Real-time energy consumption dashboard',
      'OEE (Overall Equipment Effectiveness) tracking',
      'Automated ISO 50001 compliance reporting',
      'Peak demand anomaly alerts via SMS/Email'
    ],
    architectureImage: 'https://images.unsplash.com/photo-1620022285141-9fc542ae77ff?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'solar-energy',
    title: 'Solar & Renewable Energy',
    description: 'Monitor inverter efficiency, string outputs, and weather conditions in real-time to maximize solar plant ROI.',
    detailedContent: [
      "Managing a distributed portfolio of solar energy assets requires high-granularity data to ensure optimal generation capacity. Our Solar & Renewable Energy solution monitors inverter efficiency, string outputs, and micro-climate weather conditions in real-time.",
      "The comprehensive dashboards empower plant operators to detect string-level faults immediately, calculate precise Performance Ratios (PR), and automate grid export limitations where necessary. Reduced downtime translates directly to maximized ROI and a reliable energy supply.",
      "Designed for both utility-scale plants and commercial rooftop systems, the platform integrates with leading inverters through standard Modbus APIs. Combining hardware gateways with intelligent cloud analytics ensures you capture every kilowatt-hour potential."
    ],
    icon: Sun,
    link: '/solutions/solar-energy',
    image: 'https://images.unsplash.com/photo-1509391366360-12009a3258db?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IoTSight Solar Kit Gateway (4G LTE)',
      'String Combiner Boxes',
      'Irradiance & Temperature Weather Stations', // Changed manually if needed, but keeping it standard
      'Compatible with leading Inverters (Modbus API)'
    ],
    software: [
      'Multi-site PV portfolio dashboard',
      'String-level fault detection algorithms',
      'Performance Ratio (PR) real-time calculation',
      'Grid export limitation controls'
    ],
    architectureImage: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'water-management',
    title: 'Water Management',
    description: 'Remote monitoring for pump stations, tank levels, and water quality sensors across distributed geographical areas.',
    detailedContent: [
      "Effective water distribution and treatment require constant vigilance. Our solution enables complete remote monitoring and control for municipal pump stations, diverse tank levels, and critical water quality sensors across broad geographical areas.",
      "The platform helps utilities actively reduce non-revenue water loss by detecting leaks through pressure variations. Our automated pump sequencing logic prevents tank overflows and extends equipment lifespan by balancing run times.",
      "Leveraging historical data patterns allows for highly proactive maintenance planning. Ensure a continuous, safe, and efficient water supply while drastically reducing the need for manual on-site inspections."
    ],
    icon: Droplets,
    link: '/solutions/water-management',
    image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IoTSight Industrial RTU (IP65 Outdoor)',
      'Ultrasonic Level Sensors',
      'Water Quality Probes (pH, Turbidity)',
      'Variable Frequency Drives (VFDs)'
    ],
    software: [
      'Geographical map-view of pump stations',
      'Automated pump sequencing control logic',
      'Tank level threshold alarms',
      'Historical trend analysis for preventive maintenance'
    ],
    architectureImage: 'https://images.unsplash.com/photo-1542314831-c6a4d14eff4c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'smart-agriculture',
    title: 'Smart Agriculture',
    description: 'Track soil moisture, greenhouse climate, and automated irrigation systems for precision farming.',
    detailedContent: [
      "Revolutionize precision farming by continuously tracking multi-depth soil moisture, greenhouse micro-climates, and automating large-scale irrigation systems. Agriculture today relies on data to maximize yields and minimize resource waste.",
      "By integrating real-time field data with advanced weather forecasting APIs, farm operators can minimize water wastage during rainy periods and prevent crop stress during droughts. The resulting optimization significantly boosts crop yields and crop quality.",
      "All sensor data is captured via battery or solar-powered wireless Agri-Nodes, making installation across vast acres simple. Visualize historic yield correlations and ensure environmentally sustainable agricultural practices season after season."
    ],
    icon: Sprout,
    link: '/solutions/smart-agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IoTSight Agri-Node (Battery/Solar powered)',
      'Multi-depth Soil Moisture Probes',
      'Environmental Temperature/Humidity Sensors',
      'Solenoid Valve Controllers'
    ],
    software: [
      'Precision irrigation schedules',
      'Crop stress warning notifications',
      'Weather API integration & forecasting',
      'Yield correlation reporting'
    ],
    architectureImage: 'https://images.unsplash.com/photo-1588180892313-09b674843cc1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'building-automation',
    title: 'Building Automation',
    description: 'Optimize building climate control and energy use through centralized monitoring of chillers, AHUs, and thermostats.',
    detailedContent: [
      "Transform legacy infrastructure into intelligent, data-driven environments. Our Building Automation solution optimizes commercial building climate control and overall energy usage through centralized, real-time monitoring of chillers, Air Handling Units (AHUs), and smart thermostats.",
      "By deploying our multi-protocol BACnet and Modbus gateways, facility managers gain full visibility over building performance. Automated HVAC setback schedules ensure energy isn't wasted heating or cooling empty spaces, directly reducing utility overheads.",
      "Enhance tenant comfort while enforcing strict Indoor Air Quality (IAQ) compliance. The platform also includes a tenant energy billing engine that fairly distributes energy costs based on actual sub-metered consumption, unlocking new revenue and cost-recovery streams."
    ],
    icon: ThermometerSnowflake,
    link: '/solutions/building-automation',
    image: 'https://images.unsplash.com/photo-1517406323631-f11270bc701f?auto=format&fit=crop&q=80&w=800',
    hardware: [
      'IoTSight BACnet/Modbus Protocol Converter',
      'Smart HVAC Thermostats',
      'Indoor Air Quality (IAQ) Monitors',
      'Occupancy Sensors'
    ],
    software: [
      'Floorplan layout visualization',
      'Automated HVAC setback scheduling',
      'Tenant energy billing engine',
      'Air quality index (AQI) compliance tracking'
    ],
    architectureImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  }
];

