import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Cpu, Network } from 'lucide-react';
import { knowledgePages } from '../data/knowledge';

export default function KnowledgeList() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <section className="border-b border-slate-800 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5">IoTEdges Knowledge Base</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Industrial IoT protocol and connectivity guides
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Practical reference pages for Modbus, MQTT, RS485, and related industrial communication topics that connect directly to IoTEdges product planning.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: BookOpen, title: 'Search intent first', text: 'Each page answers a technical buyer question before linking to products.' },
            { icon: Network, title: 'Protocol boundaries', text: 'Baseline claims stay focused on Modbus, RS485 and MQTT until advanced protocols are validated.' },
            { icon: Cpu, title: 'Product fit', text: 'Knowledge pages link to gateways, RTUs and Remote IO modules only where the fit is accurate.' },
          ].map((item) => (
            <div key={item.title} className="border border-slate-800 bg-slate-900 p-6 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-400 mb-4" />
              <h2 className="text-lg font-bold text-white mb-2">{item.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {knowledgePages.map((page) => (
            <article key={page.id} className="bg-slate-900 border border-slate-800 rounded-lg p-7 flex flex-col hover:border-blue-500/50 transition-colors">
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-5">{page.category}</span>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <Link to={`/knowledge/${page.id}`} className="hover:text-blue-400 transition-colors">
                  {page.title}
                </Link>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{page.excerpt}</p>
              <Link to={`/knowledge/${page.id}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300">
                Read guide <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
