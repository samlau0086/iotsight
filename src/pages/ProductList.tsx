import { Link } from 'react-router-dom';
import { ArrowRight, Cable, Cpu, Network, ShieldCheck } from 'lucide-react';
import { productPages } from '../data/products';
import { ProductPage } from '../types';

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Published':
      return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300';
    case 'Preview':
      return 'border-amber-500/30 bg-amber-500/10 text-amber-300';
    case 'Available for project inquiry':
      return 'border-blue-500/30 bg-blue-500/10 text-blue-300';
    default:
      return 'border-slate-700 bg-slate-950 text-slate-300';
  }
};

const getSpecValue = (product: ProductPage, labels: string[]) => {
  const spec = product.specs.find((item) => labels.includes(item.label));
  return spec?.value;
};

const getProductListMeta = (product: ProductPage) => {
  const uplink =
    getSpecValue(product, ['Uplink', 'Primary Uplink', 'Deployment']) ||
    (product.category.includes('Software') ? 'Software platform' : 'Project-specific');

  const bestFor =
    getSpecValue(product, ['Best Fit', 'Target Market', 'Typical Users', 'Primary Role']) ||
    product.excerpt;

  const ioParts = [
    getSpecValue(product, ['Digital Inputs']),
    getSpecValue(product, ['Digital Outputs', 'Relay Outputs']),
    getSpecValue(product, ['Analog Inputs']),
    getSpecValue(product, ['Field Interface', 'Interface']),
  ].filter(Boolean);

  const ioSummary = ioParts.length > 0 ? ioParts.join(' / ') : 'See full model details';

  return { uplink, bestFor, ioSummary };
};

export default function ProductList() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <section className="border-b border-slate-800 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5">IoTEdges Products</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Industrial IoT gateways, RTUs, Remote IO modules and dashboard software
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Explore IoTEdges gateways, RTUs, remote relay controllers, Remote IO modules and AI dashboard software for industrial monitoring, control and data acquisition projects.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Network, title: 'Separate uplinks', text: 'Ethernet, WiFi, 4G and LoRaWAN are treated as separate model families.' },
            { icon: Cpu, title: 'Protocol boundaries', text: 'Baseline gateways focus on Modbus RTU/TCP and MQTT, with advanced protocols kept out of first pages.' },
            { icon: ShieldCheck, title: 'Project ready', text: 'Model pages describe target configurations, dashboard fit and engineering discussion points for real projects.' },
            { icon: Cable, title: 'Accessory planning', text: 'Recommended antennas, RS485 wiring, power supplies, relay interfaces and sensors help customers prepare a complete project BOM.' },
          ].map((item) => (
            <div key={item.title} className="border border-slate-800 bg-slate-900 p-6 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-400 mb-4" />
              <h2 className="text-lg font-bold text-white mb-2">{item.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 mb-12">
          <section className="border border-slate-800 bg-slate-900 rounded-lg p-7">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Choose the product family that matches the project
            </h2>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              Match the uplink, IO count, protocol scope, and control function to the actual installation before narrowing down the model.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Wired Ethernet fits cabinet and LAN projects. WiFi or 4G makes sense only when the site actually needs wireless uplink. If the project needs direct field signals, compare RTUs and Remote IO modules first.
            </p>
          </section>

          <section className="border border-slate-800 bg-slate-900 rounded-lg p-7">
            <h2 className="text-lg font-bold text-white mb-4">Start with these pages</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { href: '/products/ieg-100-ethernet-industrial-iot-gateway', label: 'IEG-100 Ethernet Industrial IoT Gateway' },
                { href: '/products/ier-100-ethernet-industrial-rtu', label: 'IER-100 Ethernet Industrial RTU' },
                { href: '/products/ier-140-4g-remote-relay-rtu', label: 'IER-140 4G Remote Relay RTU' },
                { href: '/products/ieio-100-modbus-remote-io-module', label: 'IEIO-100 Modbus Remote IO Module' },
                { href: '/knowledge/modbus', label: 'Modbus buying guide' },
              ].map((item) => (
                <Link key={item.href} to={item.href} className="flex items-center justify-between gap-4 rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors">
                  {item.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productPages.map((product) => {
            const meta = getProductListMeta(product);

            return (
              <article key={product.id} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors">
                <Link to={`/products/${product.id}`} className="block aspect-[16/10] overflow-hidden border-b border-slate-800 bg-slate-950">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-7 flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">{product.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">{product.model}</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${getStatusStyles(product.status)}`}>
                    {product.status}
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
                    {meta.uplink}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <Link to={`/products/${product.id}`} className="hover:text-blue-400 transition-colors">
                    {product.title}
                  </Link>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{product.excerpt}</p>
                <div className="mb-6 grid grid-cols-1 gap-2">
                  <div className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Best For</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-300">{meta.bestFor}</div>
                  </div>
                  <div className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">I/O Summary</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-300">{meta.ioSummary}</div>
                  </div>
                  {product.specs.length > 0 && (
                    <div className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{product.specs[0].label}</div>
                      <div className="mt-1 text-xs leading-relaxed text-slate-300">{product.specs[0].value}</div>
                    </div>
                  )}
                </div>
                <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300">
                  View product <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
