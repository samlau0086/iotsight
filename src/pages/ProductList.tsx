import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Network, ShieldCheck } from 'lucide-react';
import { productPages } from '../data/products';

export default function ProductList() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <section className="border-b border-slate-800 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5">IoTEdges Products</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Industrial IoT gateways, RTUs and Remote IO modules
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              First-generation IoTEdges product pages are drafted with validation-aware wording while hardware, firmware and test evidence are being finalized.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Network, title: 'Separate uplinks', text: 'Ethernet, WiFi, 4G and LoRaWAN are treated as separate model families.' },
            { icon: Cpu, title: 'Protocol boundaries', text: 'Baseline gateways focus on Modbus RTU/TCP and MQTT, with advanced protocols kept out of first pages.' },
            { icon: ShieldCheck, title: 'Validation gated', text: 'Electrical ratings, RF behavior and exact limits stay under validation until test evidence exists.' },
          ].map((item) => (
            <div key={item.title} className="border border-slate-800 bg-slate-900 p-6 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-400 mb-4" />
              <h2 className="text-lg font-bold text-white mb-2">{item.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productPages.map((product) => (
            <article key={product.id} className="bg-slate-900 border border-slate-800 rounded-lg p-7 flex flex-col hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">{product.category}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">{product.model}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <Link to={`/products/${product.id}`} className="hover:text-blue-400 transition-colors">
                  {product.title}
                </Link>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{product.excerpt}</p>
              <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300">
                View product draft <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
