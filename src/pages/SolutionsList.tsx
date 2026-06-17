import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { solutions } from '../data/solutions';

export default function SolutionsList() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5">IoTEdges Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Industry Solutions
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Explore industrial IoT solutions for factories, water systems, solar sites, agriculture, buildings and gate access projects. Each solution page links the application need to the right gateway, RTU, Remote IO and dashboard path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 mb-12">
          <section className="border border-slate-800 bg-slate-800 rounded-xl p-7">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Start with the application, then map the hardware
            </h2>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              Solution pages are often the first entry point for search traffic because buyers search by application before they search by exact model number. A factory manager may search for factory energy monitoring, while an installer may search for a 4G gate opener or pump control RTU.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Each solution page is designed to connect that search intent to a practical IoTEdges architecture: field sensors and meters, the correct gateway or RTU family, required accessories, and the dashboard workflow used for monitoring and alarms.
            </p>
          </section>

          <section className="border border-slate-800 bg-slate-800 rounded-xl p-7">
            <h2 className="text-lg font-bold text-white mb-4">High-intent entry pages</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { href: '/solutions/factory-energy', label: 'Factory Energy Monitoring' },
                { href: '/solutions/water-management', label: 'Water Management' },
                { href: '/solutions/solar-energy', label: 'Solar and Renewable Energy' },
                { href: '/solutions/gate-access-control', label: 'Gate Access Control' },
                { href: '/products', label: 'Browse product families' },
              ].map((item) => (
                <Link key={item.href} to={item.href} className="flex items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors">
                  {item.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-all flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center backdrop-blur-md">
                  <solution.icon className="w-5 h-5" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {solution.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed flex-1 text-sm">
                  {solution.description}
                </p>
                <div className="mb-6 grid grid-cols-1 gap-2">
                  <div className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Recommended Product Type</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-300">{solution.recommendedProductType}</div>
                  </div>
                  <div className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Recommended Uplink</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-300">{solution.recommendedUplink}</div>
                  </div>
                  <div className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Typical Deployment</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-300">{solution.deploymentEnvironment}</div>
                  </div>
                </div>
                
                <div>
                  <Link 
                    to={solution.link} 
                    className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest hover:text-blue-300 transition-colors"
                  >
                    View Solution <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
