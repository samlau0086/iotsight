import { Link } from 'react-router-dom';
import { ArrowRight, Network, RadioTower, Server, ShieldCheck, Wifi } from 'lucide-react';
import { gatewaySiteCopy } from '../data/siteCopy';

const gatewayIcons = {
  network: Network,
  'radio-tower': RadioTower,
  server: Server,
  'shield-check': ShieldCheck,
  wifi: Wifi,
} as const;

function getGatewayIcon(iconKey: string) {
  return gatewayIcons[iconKey as keyof typeof gatewayIcons] || Server;
}

export default function Gateway() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5">{gatewaySiteCopy.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">{gatewaySiteCopy.heroTitle}</h1>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">{gatewaySiteCopy.heroDescription}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {gatewaySiteCopy.gatewayModels.map((item) => {
              const Icon = getGatewayIcon(item.iconKey);

              return (
                <article key={item.model} className="bg-slate-900 border border-slate-800 rounded-lg p-7 flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <Icon className="w-7 h-7 text-blue-400" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{item.model}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{item.text}</p>
                  <Link to={item.href} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300">
                    {item.ctaLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gatewaySiteCopy.principleCards.map((item) => {
              const Icon = getGatewayIcon(item.iconKey);

              return (
                <div key={item.title} className="border border-slate-800 bg-slate-950 p-6 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-400 mb-4" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>{gatewaySiteCopy.bottomCtaTitle}</h2>
          <p className="text-slate-400 text-lg mb-10">{gatewaySiteCopy.bottomCtaDescription}</p>
          <Link to={gatewaySiteCopy.bottomCtaHref} className="inline-block px-8 py-4 bg-white text-slate-950 text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-slate-200">
            {gatewaySiteCopy.bottomCtaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
