import { ProductFaqItem } from '../types';

export const productPreSalesFaqsById: Record<string, ProductFaqItem[]> = {
  'ai-iot-dashboard-industrial-operations-platform': [
    {
      question: 'Can this be deployed on our own VPS or cloud server?',
      answer: 'Yes. The platform can be discussed for cloud deployment, private deployment, or OEM-branded delivery depending on the project scope and support model.',
    },
    {
      question: 'Do you support OEM branding?',
      answer: 'Yes. OEM branding can include logo, domain, interface styling, and project-specific user structure once scope and delivery responsibility are defined.',
    },
    {
      question: 'Can you import our existing devices and telemetry model?',
      answer: 'Usually yes, but the exact device binding, topic mapping, HTTP payload structure, and alarm model should be reviewed during presales integration planning.',
    },
  ],
  'ieg-100-ethernet-industrial-iot-gateway': [
    {
      question: 'Can you provide sample units for testing?',
      answer: 'For qualified projects and integrators, sample evaluation can usually be arranged before volume purchase planning.',
    },
    {
      question: 'Can the MQTT payload or topic format be adjusted?',
      answer: 'Yes, project-level topic naming, payload mapping, and broker parameters can typically be reviewed during onboarding or OEM discussion.',
    },
    {
      question: 'Do you provide Modbus register mapping support?',
      answer: 'Yes. Presales support can cover device list review, register collection scope, and recommended polling structure for the target project.',
    },
  ],
  'ieio-100-modbus-remote-io-module': [
    {
      question: 'Can I choose only the DI or AI variant instead of a mixed module?',
      answer: 'Yes. The public product direction is intentionally split into focused variants so projects can match the I/O type to the real signal requirement.',
    },
    {
      question: 'Can you provide a register map before bulk order?',
      answer: 'Yes. Variant-specific register documentation should be shared during technical review and sample evaluation.',
    },
    {
      question: 'Do you support OEM labeling?',
      answer: 'Yes. Private label and project-specific packaging can usually be discussed once the variant and commercial volume are clearer.',
    },
  ],
  'ier-100-ethernet-industrial-rtu': [
    {
      question: 'Can the I/O be customized for an OEM project?',
      answer: 'In many OEM cases, yes. Final I/O combinations, enclosure details, and firmware scope depend on project volume and engineering review.',
    },
    {
      question: 'Do you provide sample units and integration support?',
      answer: 'Yes. Sample and integration support can usually be discussed for active projects, especially where Modbus mapping and field signal review are needed.',
    },
    {
      question: 'Can this be branded with our logo?',
      answer: 'Yes. OEM branding and front-label customization can usually be discussed after the baseline configuration is agreed.',
    },
  ],
  'ieg-120-wifi-industrial-iot-gateway': [
    {
      question: 'Can WiFi credentials be configured locally?',
      answer: 'Yes. Local setup for WiFi onboarding is part of the expected project workflow, with the exact interface depending on the released firmware package.',
    },
    {
      question: 'Is this suitable for export OEM projects?',
      answer: 'Yes, especially for indoor OEM or cabinet-based monitoring projects, though exact housing, labeling, and firmware packaging should be reviewed together.',
    },
    {
      question: 'Can you help adapt the MQTT structure to our platform?',
      answer: 'Yes. Topic format, payload structure, and broker parameters can typically be aligned during presales integration review.',
    },
  ],
  'ier-120-wifi-remote-monitoring-rtu': [
    {
      question: 'Can I request sample testing with my sensors and contacts?',
      answer: 'Yes. Sample testing can usually be arranged for active projects, especially where DI/DO/AI integration must be validated early.',
    },
    {
      question: 'Can the local setup flow be customized for OEM use?',
      answer: 'Often yes. OEM projects may review setup flow, branding, and firmware defaults based on target users and expected volume.',
    },
    {
      question: 'Do you support small-batch OEM runs?',
      answer: 'That depends on the packaging and firmware scope, but small-batch OEM discussion is common in industrial export projects.',
    },
  ],
  'ieac-140-4g-gsm-gate-opener': [
    {
      question: 'Can this be sold under our access-control brand?',
      answer: 'Yes. OEM branding, installer packaging, and project-specific documentation can usually be discussed for distributor and access-control partners.',
    },
    {
      question: 'Do you provide setup guidance for European SIM and APN use?',
      answer: 'Yes. SIM, APN, operator, and installation guidance is part of the normal presales discussion for Europe-focused gate opener projects.',
    },
    {
      question: 'Can access methods be adjusted for call, SMS, app, or API workflows?',
      answer: 'Yes. The final project package can be aligned around the required access workflow and installer support model.',
    },
  ],
  'ier-140-4g-remote-relay-rtu': [
    {
      question: 'Can relay behavior and timing be adapted for our control workflow?',
      answer: 'Usually yes. Pulse logic, schedule behavior, alarm rules, and command mapping can often be reviewed during project setup.',
    },
    {
      question: 'Do you offer evaluation support for pump, valve, or cabinet projects?',
      answer: 'Yes. Project evaluation can include signal review, relay interface planning, and MQTT or dashboard workflow discussion.',
    },
    {
      question: 'Can the product be OEM-branded?',
      answer: 'Yes. OEM labeling and project-specific documentation can generally be discussed once the technical baseline is stable.',
    },
  ],
  'ier-141-4g-pump-valve-rtu': [
    {
      question: 'Can analog input scaling and alarm logic be matched to our sensors?',
      answer: 'Yes. Projects can usually review scaling, threshold logic, and dashboard display mapping around the target pressure, level, or flow transmitters.',
    },
    {
      question: 'Do you support irrigation or water-project OEM variants?',
      answer: 'Yes. OEM or private-label discussion is possible for agriculture, water, and utility projects once the baseline signal profile is clear.',
    },
    {
      question: 'Can you help define the full pump control BOM?',
      answer: 'Yes. Presales support can cover transmitter type, fault contact list, relay interface, RS485 devices, and cabinet-side accessory planning.',
    },
  ],
  'ier-142-4g-power-cabinet-rtu': [
    {
      question: 'Can you help organize our alarm point list before ordering?',
      answer: 'Yes. Presales review can cover DI naming, event structure, controller connections, and alarm routing expectations.',
    },
    {
      question: 'Is this suitable for OEM alarm-panel projects?',
      answer: 'Often yes, especially where the project needs a 4G telemetry layer for electrical cabinets, ATS panels, or generator-room status monitoring.',
    },
    {
      question: 'Can sample units be used with our existing power meter or ATS controller?',
      answer: 'Yes. Sample evaluation is usually the right stage to verify RS485 polling targets, cabinet signals, and dashboard event flow.',
    },
  ],
};
