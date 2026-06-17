import { ProductSelectionGuide } from '../types';

export const productSelectionGuidesById: Record<string, ProductSelectionGuide> = {
  'ai-iot-dashboard-industrial-operations-platform': {
    chooseWhen: [
      'You need one operations layer for gateways, RTUs, Remote IO, and distributed field assets.',
      'Your project needs dashboard views, alarms, reports, workflow automation, or remote command management.',
      'You want cloud, private deployment, or OEM-branded software on top of IoT hardware.',
    ],
    notFitWhen: [
      'You only need a field hardware device with no dashboard or software layer.',
      'You expect the platform to replace local Modbus polling or direct fieldbus wiring by itself.',
      'You need a pure SCADA runtime without MQTT, HTTP ingest, or cloud workflow requirements.',
    ],
    compareLinks: [
      { href: '/demo', label: 'View Dashboard Preview' },
      { href: '/products/ieg-100-ethernet-industrial-iot-gateway', label: 'Compare with IEG-100 Gateway' },
      { href: '/products/ier-140-4g-remote-relay-rtu', label: 'Compare with IER-140 RTU' },
    ],
  },
  'ieg-100-ethernet-industrial-iot-gateway': {
    chooseWhen: [
      'The site already has wired LAN or cabinet Ethernet available.',
      'You need Modbus data collection and MQTT telemetry without local DI/DO control.',
      'The project is centered on meters, inverters, instruments, or PLC data collection.',
    ],
    notFitWhen: [
      'You need local digital or analog I/O on the same device.',
      'The site has no wired internet and really needs 4G backhaul.',
      'The deployment depends on indoor WiFi instead of Ethernet.',
    ],
    compareLinks: [
      { href: '/products/ier-100-ethernet-industrial-rtu', label: 'Compare with IER-100 Ethernet RTU' },
      { href: '/products/ieg-120-wifi-industrial-iot-gateway', label: 'Compare with IEG-120 WiFi Gateway' },
      { href: '/products', label: 'Browse All Gateways and RTUs' },
    ],
  },
  'ieio-100-modbus-remote-io-module': {
    chooseWhen: [
      'You already have an RTU, gateway, PLC, or SCADA master and only need extra field I/O.',
      'Field signals are distributed and easier to collect near the cabinet or machine.',
      'You want a clean Modbus RTU expansion path for DI, DO, AI, or AO.',
    ],
    notFitWhen: [
      'You need direct MQTT, WiFi, or 4G connectivity from the I/O module itself.',
      'You need local dashboard, cellular communication, or standalone edge logic.',
      'You need one device that already includes uplink and control logic in the same box.',
    ],
    compareLinks: [
      { href: '/products/ier-100-ethernet-industrial-rtu', label: 'Compare with IER-100 RTU' },
      { href: '/products/ieg-100-ethernet-industrial-iot-gateway', label: 'Compare with IEG-100 Gateway' },
      { href: '/knowledge/modbus', label: 'Read the Modbus Buying Guide' },
    ],
  },
  'ier-100-ethernet-industrial-rtu': {
    chooseWhen: [
      'You need local DI, DO, and AI in the same wired Ethernet device.',
      'The project is cabinet-based and already has LAN or SCADA network access.',
      'You need RTU behavior for alarms, contacts, transmitters, and relay-style control.',
    ],
    notFitWhen: [
      'You only need protocol conversion and no local I/O.',
      'The site is remote and must rely on 4G instead of Ethernet.',
      'The deployment is indoor wireless and better suited to WiFi.',
    ],
    compareLinks: [
      { href: '/products/ieg-100-ethernet-industrial-iot-gateway', label: 'Compare with IEG-100 Gateway' },
      { href: '/products/ier-120-wifi-remote-monitoring-rtu', label: 'Compare with IER-120 WiFi RTU' },
      { href: '/products/ier-140-4g-remote-relay-rtu', label: 'Compare with IER-140 4G RTU' },
    ],
  },
  'ieg-120-wifi-industrial-iot-gateway': {
    chooseWhen: [
      'The site has reliable indoor WiFi but no convenient Ethernet drop.',
      'You need Modbus collection and MQTT telemetry without local I/O.',
      'The device will stay in indoor cabinets, utility rooms, or OEM equipment areas.',
    ],
    notFitWhen: [
      'The project needs outdoor long-range wireless or harsh remote-site cellular backhaul.',
      'You need built-in DI/DO/AI instead of a gateway-only device.',
      'The site already has stable wired Ethernet and does not need WiFi onboarding.',
    ],
    compareLinks: [
      { href: '/products/ieg-100-ethernet-industrial-iot-gateway', label: 'Compare with IEG-100 Ethernet Gateway' },
      { href: '/products/ier-120-wifi-remote-monitoring-rtu', label: 'Compare with IER-120 WiFi RTU' },
      { href: '/knowledge/wifi-industrial-iot-gateway', label: 'When to Use WiFi in Industrial IoT' },
    ],
  },
  'ier-120-wifi-remote-monitoring-rtu': {
    chooseWhen: [
      'You need local I/O and WiFi in the same indoor RTU.',
      'The project uses alarm contacts, transmitters, or simple relay outputs in equipment rooms.',
      'You want indoor wireless deployment without moving up to a cellular model.',
    ],
    notFitWhen: [
      'The site is outdoor or remote and really needs 4G.',
      'You only need a WiFi gateway with no local I/O.',
      'The cabinet already has wired Ethernet and does not benefit from WiFi.',
    ],
    compareLinks: [
      { href: '/products/ier-100-ethernet-industrial-rtu', label: 'Compare with IER-100 Ethernet RTU' },
      { href: '/products/ieg-120-wifi-industrial-iot-gateway', label: 'Compare with IEG-120 WiFi Gateway' },
      { href: '/products/ier-140-4g-remote-relay-rtu', label: 'Compare with IER-140 4G RTU' },
    ],
  },
  'ieac-140-4g-gsm-gate-opener': {
    chooseWhen: [
      'The project is a gate, barrier, garage door, or access-control retrofit in Europe.',
      'You need dry-contact relay triggering with 4G remote access logic.',
      'Buyers are searching for GSM gate opener replacement but should be guided toward 4G-first hardware.',
    ],
    notFitWhen: [
      'The project needs broad industrial relay automation rather than access control.',
      'You need a finished intercom audio product with fully confirmed SIP or VoLTE scope.',
      'The site already has a local access controller and only needs generic cabinet telemetry.',
    ],
    compareLinks: [
      { href: '/products/ier-140-4g-remote-relay-rtu', label: 'Compare with IER-140 4G Relay RTU' },
      { href: '/knowledge/4g-gsm-gate-opener-europe', label: 'Read the Europe Gate Opener Guide' },
      { href: '/products', label: 'Browse Access and RTU Products' },
    ],
  },
  'ier-140-4g-remote-relay-rtu': {
    chooseWhen: [
      'The site is remote and needs 4G plus basic local relay control.',
      'You need 2DI and 2DO for status and switching without moving to a larger RTU.',
      'The use case is pump, valve, cabinet, street light, or remote relay automation.',
    ],
    notFitWhen: [
      'You need more local signals such as 4DI, 4DO, or analog inputs.',
      'The device is mainly for gate or barrier access rather than general remote control.',
      'The site already has Ethernet or WiFi and does not need cellular uplink.',
    ],
    compareLinks: [
      { href: '/products/ier-141-4g-pump-valve-rtu', label: 'Compare with IER-141 Pump and Valve RTU' },
      { href: '/products/ieac-140-4g-gsm-gate-opener', label: 'Compare with IEAC-140 Gate Opener' },
      { href: '/products/ier-100-ethernet-industrial-rtu', label: 'Compare with IER-100 Ethernet RTU' },
    ],
  },
  'ier-141-4g-pump-valve-rtu': {
    chooseWhen: [
      'The project needs more field signals than a basic 2DI/2DO relay RTU.',
      'You need 4DI, 4DO, and 2AI for pump, valve, irrigation, pressure, or level workflows.',
      'The deployment is a water, utility, or agriculture cabinet that depends on 4G.',
    ],
    notFitWhen: [
      'The application only needs a small relay RTU with minimal I/O.',
      'The project is mainly dry-contact cabinet alarms and not analog process monitoring.',
      'The site has wired Ethernet and does not need cellular deployment.',
    ],
    compareLinks: [
      { href: '/products/ier-140-4g-remote-relay-rtu', label: 'Compare with IER-140 Relay RTU' },
      { href: '/products/ier-142-4g-power-cabinet-rtu', label: 'Compare with IER-142 Power Cabinet RTU' },
      { href: '/knowledge/pump-control-rtu', label: 'Read the Pump Control RTU Guide' },
    ],
  },
  'ier-142-4g-power-cabinet-rtu': {
    chooseWhen: [
      'The cabinet needs many dry-contact inputs and a smaller number of outputs.',
      'You need generator room, ATS, breaker, SPD, or alarm-panel event monitoring over 4G.',
      'The project is centered on event capture and cabinet telemetry rather than analog process control.',
    ],
    notFitWhen: [
      'You need analog transmitter inputs for pressure, level, or flow.',
      'The project is mainly gate access control rather than cabinet status monitoring.',
      'You only need simple protocol conversion with no local DI/DO.',
    ],
    compareLinks: [
      { href: '/products/ier-141-4g-pump-valve-rtu', label: 'Compare with IER-141 Pump and Valve RTU' },
      { href: '/products/ier-140-4g-remote-relay-rtu', label: 'Compare with IER-140 Relay RTU' },
      { href: '/blog/how-to-choose-power-cabinet-monitoring-rtu', label: 'Read the Power Cabinet RTU Guide' },
    ],
  },
};
