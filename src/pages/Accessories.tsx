import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cable,
  Cpu,
  DoorOpen,
  Gauge,
  RadioTower,
  Router,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from 'lucide-react';

const accessoryGroups = [
  {
    title: '4G, WiFi And RF Accessories',
    icon: RadioTower,
    description: 'Connectivity accessories for 4G RTUs, 4G gate openers, WiFi gateways and cabinet installations.',
    items: [
      '4G LTE external antenna',
      'WiFi antenna',
      'Antenna extension cable',
      'SMA connector and cabinet feed-through',
      'IoT SIM / M2M SIM selection guidance',
      'APN and operator setup checklist',
    ],
  },
  {
    title: 'RS485 And Modbus Wiring',
    icon: Cable,
    description: 'Field wiring accessories for Modbus RTU, RS485 sensor networks and remote IO cabinets.',
    items: [
      'Shielded twisted-pair RS485 cable',
      'Pluggable terminal blocks',
      'RS485 surge protector',
      'RS485 isolation module',
      'End-of-line termination resistor',
      'Grounding and cable shielding accessories',
    ],
  },
  {
    title: 'Power And Cabinet Installation',
    icon: Zap,
    description: 'Power supply and panel accessories for industrial IoT gateway, RTU and Remote IO deployments.',
    items: [
      '12V / 24V DC DIN rail power supply',
      'DIN rail mounting kit',
      'Industrial enclosure or control cabinet',
      'Fuse holder and terminal distribution',
      'Cable gland and strain relief',
      'Small UPS or backup power option',
    ],
  },
  {
    title: 'DI, DO, Relay And Control Accessories',
    icon: SlidersHorizontal,
    description: 'Interface accessories for digital input, relay output, dry contact and field control applications.',
    items: [
      'Interposing relay',
      'Contactor interface',
      'Dry contact signal wiring',
      'Alarm horn or indicator lamp',
      'Exit button',
      'Door or gate magnetic contact',
    ],
  },
  {
    title: 'Sensors And Meters',
    icon: Gauge,
    description: 'Project sensors and meters that commonly connect to RTUs, gateways and Remote IO modules.',
    items: [
      '4-20mA pressure transmitter',
      'Level sensor',
      'Flow meter',
      'Temperature and humidity sensor',
      'Modbus energy meter',
      'Split-core CT clamp',
    ],
  },
  {
    title: 'Gate Opener Project Accessories',
    icon: DoorOpen,
    description: 'Recommended accessories for 4G gate opener, remote access controller and dry-contact relay projects.',
    items: [
      '4G cabinet antenna',
      'Gate status contact',
      'Exit button',
      'Relay terminal wiring kit',
      'Weatherproof enclosure',
      'Installer SIM / APN checklist',
    ],
  },
];

const productAccessoryMap = [
  {
    product: 'IEAC-140 4G GSM Gate Opener',
    href: '/products/ieac-140-4g-gsm-gate-opener',
    accessories: '4G antenna, IoT SIM, door contact, exit button, relay wiring terminals, weatherproof cabinet',
  },
  {
    product: 'IER-140 / IER-141 / IER-142 4G RTU',
    href: '/products/ier-140-4g-remote-relay-rtu',
    accessories: '4G antenna, DIN rail power supply, RS485 cable, pressure/level sensors, relay or contactor interface',
  },
  {
    product: 'IEG-100 / IEG-120 Industrial IoT Gateway',
    href: '/products/ieg-100-ethernet-industrial-iot-gateway',
    accessories: 'RS485 cable, Modbus energy meter, terminal blocks, Ethernet patch cable, WiFi antenna for WiFi models',
  },
  {
    product: 'IEIO-100 Modbus Remote IO Module',
    href: '/products/ieio-100-modbus-remote-io-module',
    accessories: 'Terminal blocks, shielded RS485 wiring, DI contacts, relay loads, 4-20mA sensors, DIN rail enclosure',
  },
  {
    product: 'AI IoT Dashboard',
    href: '/products/ai-iot-dashboard-industrial-operations-platform',
    accessories: 'Ingest token plan, gateway binding, SIM/APN checklist, device labels, register/metric mapping worksheet',
  },
];

const projectKits = [
  {
    title: '4G Gate Opener Kit',
    icon: DoorOpen,
    contents: ['IEAC-140 controller', '4G antenna', 'IoT SIM guidance', 'gate status contact', 'exit button wiring', 'relay pulse setup'],
  },
  {
    title: 'Modbus MQTT Gateway Kit',
    icon: Router,
    contents: ['IEG gateway', 'RS485 cable', 'Modbus meter or instrument', 'terminal blocks', 'MQTT broker settings', 'register map worksheet'],
  },
  {
    title: 'Pump And Valve RTU Kit',
    icon: Server,
    contents: ['IER-141 RTU', '4G antenna', 'pressure transmitter', 'float switch', 'relay interface', 'pump alarm wiring'],
  },
  {
    title: 'Energy Monitoring Kit',
    icon: Cpu,
    contents: ['Modbus energy meter', 'CT clamps', 'IEG gateway', 'RS485 wiring', '24V power supply', 'dashboard mapping'],
  },
];

const selectionGuides = [
  {
    title: 'How to Choose a 4G Antenna for Industrial RTU and Gate Opener Projects',
    href: '/knowledge/4g-antenna-industrial-rtu',
    summary: 'LTE antenna, SIM, APN, cabinet mounting and weak-signal site notes for 4G products.',
  },
  {
    title: 'RS485 Cable and Shielding Guide for Modbus RTU Installations',
    href: '/knowledge/rs485-cable-shielding-guide',
    summary: 'Cable, shielding, grounding, termination and surge protection notes for RS485 projects.',
  },
  {
    title: 'DIN Rail Power Supply Guide for Industrial IoT Gateways and RTUs',
    href: '/knowledge/din-rail-power-supply-industrial-iot',
    summary: '12V/24V DC power, cabinet terminals, fuses and backup power planning.',
  },
  {
    title: 'Dry Contact Relay Wiring for 4G Gate Openers and Remote Access Controllers',
    href: '/knowledge/dry-contact-relay-wiring-gate-opener',
    summary: 'Relay COM/NO wiring, gate status contacts, exit buttons and safe integration boundaries.',
  },
  {
    title: '4-20mA Pressure Sensor Wiring for RTU and Remote IO Projects',
    href: '/knowledge/4-20ma-pressure-sensor-rtu-wiring',
    summary: 'Pressure transmitter wiring and scaling notes for pump, water and irrigation monitoring.',
  },
];

export default function Accessories() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 text-slate-300">
      <section className="border-b border-slate-800 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-400">Project Accessories</p>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              Industrial IoT accessories for RTU, gateway and Remote IO projects
            </h1>
            <p className="text-lg leading-relaxed text-slate-400">
              Recommended and compatible accessories for IoTEdges project deployments, including 4G antennas, SIM/APN setup, RS485 wiring, DIN rail power supplies, relay interfaces, sensors, meters and gate opener installation parts.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Project accessory guidance', text: 'Accessories are listed as recommended or compatible project items. Final selection depends on site wiring, cabinet design and local regulations.' },
            { icon: Cable, title: 'Installation-ready thinking', text: 'The goal is to help integrators understand the complete bill of materials beyond the main RTU, gateway or Remote IO module.' },
            { icon: RadioTower, title: 'Export-friendly support', text: 'For overseas projects, antenna, SIM, APN, power and wiring notes often decide whether installation succeeds quickly.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-800 bg-slate-900 p-6">
              <item.icon className="mb-4 h-6 w-6 text-blue-400" />
              <h2 className="mb-2 text-lg font-bold text-white">{item.title}</h2>
              <p className="text-sm leading-relaxed text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {accessoryGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-slate-800 bg-slate-900 p-7">
              <group.icon className="mb-5 h-8 w-8 text-blue-400" />
              <h2 className="mb-3 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{group.title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-slate-400">{group.description}</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>Accessory selection guides</h2>
          <p className="text-slate-400">
            Use these guides to prepare cleaner quotations, installation notes and project BOMs for overseas customers.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {selectionGuides.map((guide) => (
            <Link key={guide.href} to={guide.href} className="rounded-lg border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500/50">
              <h3 className="mb-2 text-lg font-bold text-white">{guide.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{guide.summary}</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                Read guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>Accessories by IoTEdges product line</h2>
            <p className="text-slate-400">
              Use this table as a starting point for project BOM discussions. Exact brands, ratings, cable lengths and enclosure details should be confirmed for each installation.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-800">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-800 text-sm">
                <thead className="bg-slate-950">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-300">Product</th>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-300">Recommended Accessories</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900">
                  {productAccessoryMap.map((row) => (
                    <tr key={row.product}>
                      <td className="px-5 py-4 align-top font-semibold text-white">
                        <Link to={row.href} className="hover:text-blue-300">{row.product}</Link>
                      </td>
                      <td className="px-5 py-4 align-top text-slate-300">{row.accessories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>Common project kits</h2>
            <p className="max-w-3xl text-slate-400">
              These are not fixed SKUs. They are practical bundle examples for distributors, installers and system integrators preparing project quotations.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-blue-500">
            Request accessory BOM <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectKits.map((kit) => (
            <article key={kit.title} className="rounded-lg border border-slate-800 bg-slate-900 p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <kit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{kit.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {kit.contents.map((item) => (
                  <span key={item} className="rounded border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-300">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
