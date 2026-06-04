import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { solutions } from '../data/solutions';

export default function SolutionsList() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Industry Solutions
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Discover how IoTSight's robust industrial gateways and cloud dashboards are transforming sectors globally. Tailored, end-to-end monitoring solutions for every environment.
          </p>
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
