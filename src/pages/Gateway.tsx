import { Link } from 'react-router-dom';
import { ArrowRight, Network, Server, Wifi, RadioTower, ShieldCheck } from 'lucide-react';

const gatewayLinks = [
  {
    title: 'IEG-100 Ethernet Industrial IoT Gateway',
    model: 'IEG-100',
    href: '/products/ieg-100-ethernet-industrial-iot-gateway',
    icon: Server,
    text: 'Public-safe draft for a planned Ethernet-only gateway for Modbus RTU/TCP data collection and MQTT telemetry.',
  },
  {
    title: 'IEG-120 WiFi Industrial IoT Gateway',
    model: 'IEG-120',
    href: '/products/ieg-120-wifi-industrial-iot-gateway',
    icon: Wifi,
    text: 'Public-safe draft for a planned indoor WiFi gateway. WiFi range and certification remain validation-gated.',
  },
  {
    title: 'IEG-140 4G Industrial IoT Gateway',
    model: 'IEG-140',
    href: '/products',
    icon: RadioTower,
    text: 'Planned 4G gateway family. Public page is waiting for LTE module, band, and SIM/APN validation.',
  },
];

export default function Gateway() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5">IoTEdges Gateway Family</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Industrial IoT Gateways</h1>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Start from validation-aware product drafts for Ethernet and WiFi gateway models. Cellular and LoRaWAN pages remain internal until module, band, RF, and field evidence are clearer.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {gatewayLinks.map((item) => (
              <article key={item.model} className="bg-slate-900 border border-slate-800 rounded-lg p-7 flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <item.icon className="w-7 h-7 text-blue-400" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{item.model}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{item.text}</p>
                <Link to={item.href} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300">
                  View product path <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Network, title: 'Separate uplink models', text: 'Ethernet, WiFi, 4G LTE, and LoRaWAN are kept as separate model families.' },
              { icon: ShieldCheck, title: 'Validation-gated specs', text: 'Exact ratings, wireless coverage, certifications, and protocol limits wait for engineering evidence.' },
              { icon: Server, title: 'Modbus and MQTT baseline', text: 'Baseline gateways focus on Modbus RTU/TCP collection and MQTT telemetry after firmware validation.' },
            ].map((item) => (
              <div key={item.title} className="border border-slate-800 bg-slate-950 p-6 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Need a gateway for a specific site?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Tell us your field devices, protocol, uplink method, and deployment environment. We will map your project to the right gateway or RTU path.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-slate-950 text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-slate-200">Talk to Engineering</Link>
        </div>
      </section>
    </div>
  );
}
