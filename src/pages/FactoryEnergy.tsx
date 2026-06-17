import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Bell, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function FactoryEnergy() {
  return (
    <div className="bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Factory Energy Monitoring Solutions
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
              Cut electricity costs, identify power waste, and track machine load status in real-time. Deploy our complete edge-to-cloud energy monitoring system without disrupting your production.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-blue-500">
              Get Solution Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Why Monitor Factory Energy?</h2>
            <p className="text-lg text-slate-400 font-medium">Turn invisible electricity costs into actionable data.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Monitor Electricity Bills", desc: "Track exact power usage across different workshop zones to manage utility costs effectively." },
              { icon: BarChart3, title: "Find Abnormal Usage", desc: "Identify instances where machines are running idle or drawing unusually high currents." },
              { icon: Clock, title: "Monitor Machine Load", desc: "Understand real-time machine operating status (Off, Idle, High Load) based on power draw." },
              { icon: Bell, title: "Automated Energy Reports", desc: "Generate daily, weekly, or monthly energy consumption reports automatically." },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                   <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16 tracking-tight">How It Works</h2>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-5xl mx-auto">
             {/* Edge */}
             <div className="flex-1 w-full bg-slate-950 border border-slate-800 p-8 rounded-xl relative overflow-hidden">
                <h3 className="font-bold text-white tracking-widest uppercase text-xs mb-6 border-b border-slate-800 pb-3">1. Bottom Layer (Meters)</h3>
                <ul className="text-sm text-slate-400 space-y-4 text-left font-medium">
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> Modbus Energy Meters</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> Split-core CTs (Non-invasive)</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> RS485 wiring</li>
                </ul>
             </div>

             <ArrowRight className="text-slate-600 rotate-90 md:rotate-0 hidden md:block" />
             <div className="w-1 h-8 bg-slate-800 block md:hidden my-2"></div>

             {/* Gateway */}
             <div className="flex-1 w-full bg-blue-900/10 border border-blue-500/20 p-8 rounded-xl relative shadow-[0_0_30px_rgba(59,130,246,0.05)]">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded">Core</div>
                <h3 className="font-bold text-blue-400 tracking-widest uppercase text-xs mb-6 border-b border-blue-500/20 pb-3">2. IoT Gateway</h3>
                <ul className="text-sm text-blue-200/80 space-y-4 text-left font-medium">
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> Modbus RTU Polling</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> Ethernet, WiFi, or 4G model selected separately</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> MQTT Publish</li>
                </ul>
                <Link to="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300 hover:text-white mt-6">
                  Browse related products <ArrowRight className="w-4 h-4" />
                </Link>
             </div>

             <ArrowRight className="text-slate-600 rotate-90 md:rotate-0 hidden md:block" />
             <div className="w-1 h-8 bg-slate-800 block md:hidden my-2"></div>

             {/* Cloud */}
             <div className="flex-1 w-full bg-slate-950 border border-slate-800 p-8 rounded-xl">
                <h3 className="font-bold text-white tracking-widest uppercase text-xs mb-6 border-b border-slate-800 pb-3">3. Cloud Dashboard</h3>
                <ul className="text-sm text-slate-400 space-y-4 text-left font-medium">
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> Real-time Visualization</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> AI Energy Insights</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3" /></span> Alerts / Reports</li>
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 border-t border-slate-800 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Ready to monitor your factory energy?</h2>
          <p className="mb-10 text-slate-400 font-medium">Contact our technical team for a custom system architecture tailored to your workshop layout.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest rounded hover:bg-blue-500 transition-all">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
