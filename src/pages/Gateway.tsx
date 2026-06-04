import { Link } from 'react-router-dom';
import { Server, ArrowRight } from 'lucide-react';

export default function Gateway() {
  const products = [
    {
      name: "Factory Energy Monitoring Box",
      target: "Factories & Workshops",
      specs: ["Pre-wired industrial enclosure", "RS485 / Modbus RTU Interfaces", "4G LTE / WiFi optional", "Integrated Cloud Dashboard"],
      tag: "Best Seller"
    },
    {
      name: "Modbus RTU to MQTT Gateway",
      target: "System Integrators",
      specs: ["DIN Rail mounting", "Wide temp: -40 to 85°C", "TLS/SSL Security", "Custom Topic support"],
      tag: null
    },
    {
      name: "Solar Remote Monitoring Gateway",
      target: "PV Installers & EPCs",
      specs: ["RS485 / CAN support", "Inverter protocol parsing", "IP65 Outdoor variants", "Low power consumption"],
      tag: null
    },
    {
      name: "Cold Storage Monitoring Kit",
      target: "Food & Pharmaceutical Logistics",
      specs: ["Temp & Humidity probes included", "Power loss internal battery", "Door open status tracking", "Instant WhatsApp alerts"],
      tag: null
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-200">
      <section className="py-24 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Industrial IoT Gateways</h1>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Robust, secure, and easy-to-deploy hardware designed to bridge your operational technology (OT) with IT cloud platforms.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition relative">
                {p.tag && <span className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">{p.tag}</span>}
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">Suitable for: {p.target}</p>
                
                <ul className="space-y-4 mb-10">
                  {p.specs.map((spec, j) => (
                    <li key={j} className="flex items-start text-sm text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 mr-3 shrink-0"></div>
                      {spec}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-blue-400 transition-colors">
                  Request spec sheet <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 border-t border-slate-800 py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Need OEM/ODM customization for your IoT hardware?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            We offer white-label services for system integrators. Provide your custom branding, and we will manufacture the gateways and customize the dashboard interface to match your corporate identity.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-slate-950 text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-slate-200">Talk to Engineering</Link>
        </div>
      </section>

      {/* Technical Specifications Comparison */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-900 text-white uppercase text-xs tracking-widest border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-bold rounded-tl-lg">Feature</th>
                  <th className="px-6 py-4 font-bold">Standard RTU Gateway</th>
                  <th className="px-6 py-4 font-bold">Factory Energy Box</th>
                  <th className="px-6 py-4 font-bold rounded-tr-lg">Solar monitoring Kit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 border-b border-slate-800">
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Uplink Networks</td>
                  <td className="px-6 py-4">Ethernet / 4G LTE</td>
                  <td className="px-6 py-4">Ethernet / WiFi / 4G LTE</td>
                  <td className="px-6 py-4">4G LTE (Global bands)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Downlink Interfaces</td>
                  <td className="px-6 py-4">1x RS485</td>
                  <td className="px-6 py-4">2x RS485, 2x DI, 2x DO</td>
                  <td className="px-6 py-4">1x RS485, 1x CAN bus</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Protocols Supported</td>
                  <td className="px-6 py-4">Modbus RTU, MQTT</td>
                  <td className="px-6 py-4">Modbus RTU/TCP, MQTT, HTTP</td>
                  <td className="px-6 py-4">Modbus RTU, Inverter API, MQTT</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Operating Temp</td>
                  <td className="px-6 py-4">-40°C to 85°C</td>
                  <td className="px-6 py-4">-20°C to 70°C</td>
                  <td className="px-6 py-4">-40°C to 85°C</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Mounting & Enclosure</td>
                  <td className="px-6 py-4">DIN-Rail (Metal Case)</td>
                  <td className="px-6 py-4">Wall-mount (IP65 ABS)</td>
                  <td className="px-6 py-4">DIN-Rail or Wall (IP65)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Cloud Integration</td>
                  <td className="px-6 py-4">Bring Your Own Cloud (BYOC)</td>
                  <td className="px-6 py-4">IoTSight Dashboard included</td>
                  <td className="px-6 py-4">IoTSight Dashboard included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
