import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, Server, Bell, BarChart3, Cloud, ShieldCheck, RadioTower, Droplets, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-200 font-sans flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto w-full py-12 md:py-24">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center gap-6"
         >
          <div className="inline-flex max-w-max items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Next-Gen Industrial Monitoring
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
            Industrial IoT for <span className="text-blue-500">Factories</span>, Energy & Remote Assets
          </h1>
          <p className="text-slate-400 text-lg max-w-md leading-relaxed font-medium">
            Monitor energy usage, machines, solar farms, and remote equipment in real time with industrial gateways, AI-powered dashboards, and smart alerts.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/demo" data-analytics-event="cta_click" data-analytics-category="hero" data-analytics-label="View Live Demo" data-analytics-destination="/demo" className="px-8 py-4 bg-white text-slate-950 font-bold rounded shadow-lg shadow-white/5 hover:bg-slate-200 transition-all uppercase tracking-widest text-xs flex items-center justify-center">
              View Live Demo
            </Link>
            <Link to="/products" data-analytics-event="cta_click" data-analytics-category="hero" data-analytics-label="View Products" data-analytics-destination="/products" className="px-8 py-4 border border-slate-700 font-bold rounded hover:bg-slate-900 transition-all uppercase tracking-widest text-xs flex items-center justify-center text-white">
              View Products
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800 mt-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Product Models</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">4</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Core Protocol Topics</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">EU</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Access Control Focus</span>
            </div>
          </div>
        </motion.div>
            
        {/* Dashboard Mockup Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center"
        >
          <div className="w-full aspect-[4/3] bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col relative w-full h-full">
            <div className="h-10 bg-slate-800/50 border-b border-slate-700 flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
              </div>
              <span className="text-[10px] text-slate-500 font-mono tracking-tighter uppercase hidden sm:block">Live Terminal: Unit_07A_Energy</span>
              <span className="text-[10px] text-emerald-500 font-mono tracking-widest font-bold">● ONLINE</span>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-4 overflow-hidden flex-1">
              <div className="col-span-2 bg-slate-950 border border-slate-800 p-4 rounded-lg flex flex-col">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-slate-400 font-medium tracking-wide">Real-time Power Curve (kW)</span>
                  <span className="text-xl font-mono text-emerald-400">142.58 kW</span>
                </div>
                <div className="flex-1 w-full flex items-end gap-1 px-1">
                  <div className="w-full bg-blue-500/20 h-[50%] rounded-t"></div>
                  <div className="w-full bg-blue-500/30 h-[66%] rounded-t"></div>
                  <div className="w-full bg-blue-500/40 h-[75%] rounded-t"></div>
                  <div className="w-full bg-blue-500/60 h-[80%] rounded-t"></div>
                  <div className="w-full bg-blue-500/80 h-[100%] rounded-t"></div>
                  <div className="w-full bg-blue-500 h-[90%] rounded-t"></div>
                  <div className="w-full bg-blue-500/90 h-[85%] rounded-t"></div>
                  <div className="w-full bg-blue-500/60 h-[50%] rounded-t"></div>
                  <div className="w-full bg-blue-500/40 h-[33%] rounded-t"></div>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Alert Status</span>
                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between items-center bg-red-500/10 p-2 rounded border border-red-500/20">
                    <span className="text-[10px] text-red-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis mr-2">Phase B Voltage Drop</span>
                    <span className="text-[9px] font-mono opacity-50 text-red-400 shrink-0">12:04</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-2 rounded">
                    <span className="text-[10px] text-slate-400 font-medium">Normal Operation</span>
                    <span className="text-[9px] font-mono opacity-50 text-slate-400">11:45</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">Efficiency AI</span>
                <div className="flex-1 flex flex-col justify-center items-center gap-2">
                  <span className="text-2xl lg:text-3xl font-mono text-white">94.2<span className="text-sm text-slate-500">%</span></span>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[94%]"></div>
                  </div>
                  <span className="text-[8px] lg:text-[9px] text-blue-400 mt-1 uppercase tracking-tighter font-semibold">Optimized by AI Engine</span>
                </div>
              </div>
            </div>

            <div className="px-4 py-2 flex gap-4 text-[10px] border-t border-slate-800 bg-slate-950/50 font-medium text-slate-400 uppercase tracking-widest shrink-0">
              <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Modbus</div>
              <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> MQTT</div>
              <div className="ml-auto opacity-40 font-mono hidden sm:block">v2.4.1</div>
            </div>

            {/* Floating Alert Card */}
            <div className="absolute -bottom-4 -left-4 bg-slate-950 border border-slate-800 p-3 md:p-4 rounded-lg shadow-xl shadow-slate-950 flex items-start gap-4 z-10 hidden sm:flex">
              <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white text-xs tracking-wide">Abnormal Consumption Detected</h4>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-medium">CNC Machine #4 power spike (+45%)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar (replacing Trust & OEM Module) */}
      <section className="py-8 bg-slate-900 border-y border-slate-800 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-12 shrink-0">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-2">Enterprise Grade</span>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center opacity-80">
            <span className="text-xs font-semibold text-slate-300">OEM / ODM Support</span>
            <span className="text-xs font-semibold text-slate-300">Modbus / MQTT Compatible</span>
            <span className="text-xs font-semibold text-slate-300">Private Cloud Deployment</span>
            <span className="text-xs font-semibold text-slate-300">Custom Branding</span>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Manufacturing Problems We Solve</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">Lack of visibility leads to unnecessary costs and machine downtime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "High electricity costs", desc: "No way to track real-time consumption and identify waste.", icon: Zap },
              { title: "No real-time visibility", desc: "Hard to know if machines are running optimally.", icon: Activity },
              { title: "Unexpected downtime", desc: "Machines break down without prior warning or load data.", icon: ShieldCheck },
              { title: "No remote alert system", desc: "Issues are only discovered when operators are on-site.", icon: Bell }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">The Complete Monitoring Solution</h2>
            <p className="text-lg text-slate-400 font-medium">Everything you need from hardware data collection to AI-driven insights.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 items-center text-center">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-white uppercase tracking-widest text-xs">Energy Meter<br/>Data Collection</h3>
            </div>
            <div className="hidden md:block text-slate-600"><ArrowRight className="mx-auto" /></div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-white uppercase tracking-widest text-xs">Industrial IoT<br/>Gateway</h3>
            </div>
            <div className="hidden md:block text-slate-600"><ArrowRight className="mx-auto" /></div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-white uppercase tracking-widest text-xs">Cloud Dashboard<br/>& AI Insights</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Core Hardware & Software</h2>
              <p className="text-lg text-slate-400 font-medium">Industrial gateways, RTUs, Remote IO modules, remote relay controllers, access controllers, and AI dashboard software.</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI IoT Dashboard", desc: "Industrial operations dashboard for telemetry, SCADA, workflows, remote control and AI Copilot.", icon: Bot, href: "/products/ai-iot-dashboard-industrial-operations-platform" },
              { title: "IEG-100 Ethernet Gateway", desc: "Ethernet gateway for Modbus data collection and MQTT telemetry.", icon: Server, href: "/products/ieg-100-ethernet-industrial-iot-gateway" },
              { title: "IEIO-100 Remote IO", desc: "Modbus Remote IO family for DI, DO/relay, AI, and AO expansion.", icon: Activity, href: "/products/ieio-100-modbus-remote-io-module" },
              { title: "IER-100 Ethernet RTU", desc: "Wired RTU with local IO and Modbus connectivity targets.", icon: Zap, href: "/products/ier-100-ethernet-industrial-rtu" },
              { title: "IEG-120 WiFi Gateway", desc: "Indoor WiFi gateway for Modbus-to-MQTT applications.", icon: Cloud, href: "/products/ieg-120-wifi-industrial-iot-gateway" },
              { title: "IEAC-140 Gate Opener", desc: "4G-first remote access controller for European gate and door projects.", icon: ShieldCheck, href: "/products/ieac-140-4g-gsm-gate-opener" },
              { title: "IER-140 4G Relay RTU", desc: "4G LTE Cat1 remote relay RTU with 2DI, 2DO, RS485 and MQTT control.", icon: RadioTower, href: "/products/ier-140-4g-remote-relay-rtu" },
              { title: "IER-141 Pump & Valve RTU", desc: "4G RTU for pump, valve and irrigation cabinets with 4DI, 4DO and 2AI.", icon: Droplets, href: "/products/ier-141-4g-pump-valve-rtu" },
              { title: "IER-142 Power Cabinet RTU", desc: "4G cabinet RTU for dry-contact alarms, generator rooms and power panels.", icon: Activity, href: "/products/ier-142-4g-power-cabinet-rtu" }
            ].map((item, i) => (
              <Link key={i} to={item.href} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition block">
                <item.icon className="w-8 h-8 text-blue-400 mb-6" />
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Make industrial energy and equipment visible from anywhere.</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Tell us your monitoring project. Get a customized solution proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" data-analytics-event="cta_click" data-analytics-category="bottom_cta" data-analytics-label="Request Quote" data-analytics-destination="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded hover:bg-slate-100 transition-all uppercase tracking-widest text-xs flex justify-center items-center shadow-lg">
              Request Quote
            </Link>
            <Link to="/demo" data-analytics-event="cta_click" data-analytics-category="bottom_cta" data-analytics-label="View Dashboard Preview" data-analytics-destination="/demo" className="px-8 py-4 border border-blue-400 text-white font-bold rounded hover:bg-blue-700 transition-all uppercase tracking-widest text-xs flex justify-center items-center">
              View Dashboard Preview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
