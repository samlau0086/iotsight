import { Link } from 'react-router-dom';
import { Activity, Bell, Zap, BarChart3, Clock, AlertTriangle, ShieldAlert } from 'lucide-react';

export default function Demo() {
  return (
    <div className="bg-slate-900 min-h-screen pt-8 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>Live Dashboard Preview</h1>
            <p className="text-slate-400">Read-only demo of the cloud monitoring platform.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition">
              Request Demo Access
            </Link>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="border border-slate-700 bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
           <div className="border-b border-slate-700 bg-slate-800/50 p-4 flex justify-between items-center">
             <div className="flex items-center gap-4">
               <span className="font-semibold text-white tracking-wide">Factory 1 - Main Floor</span>
               <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs border border-green-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
               </span>
             </div>
             <div className="text-sm text-slate-500">Last updated: Just now</div>
           </div>

           <div className="p-6">
             {/* Stats Row */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
               {[
                 { label: "Today's Energy", value: "2,450", unit: "kWh", icon: Zap, color: "text-yellow-400" },
                 { label: "Current Load", value: "420", unit: "kW", icon: Activity, color: "text-blue-400" },
                 { label: "Peak Demand", value: "485", unit: "kW", icon: BarChart3, color: "text-purple-400" },
                 { label: "Active Alerts", value: "2", unit: "", icon: Bell, color: "text-red-400" },
               ].map((stat, i) => (
                 <div key={i} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-sm text-slate-400">{stat.label}</span>
                     <stat.icon className={`w-4 h-4 ${stat.color}`} />
                   </div>
                   <div className="flex items-baseline gap-1">
                     <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                     <span className="text-sm text-slate-500">{stat.unit}</span>
                   </div>
                 </div>
               ))}
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {/* Chart Placeholder */}
               <div className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-lg p-4">
                 <h3 className="text-sm font-semibold text-white mb-4">Real-time Power Curve (kW)</h3>
                 <div className="h-64 flex items-end justify-between gap-1 mt-4 border-b border-l border-slate-700 pb-2 pl-2">
                   {[30, 35, 40, 80, 85, 90, 85, 100, 95, 60, 40, 35, 30, 45, 50, 80, 85, 90, 80, 75, 50, 45, 40, 35].map((h, i) => (
                      <div key={i} className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t" style={{ height: `${h}%` }}></div>
                   ))}
                 </div>
                 <div className="flex justify-between text-xs text-slate-500 mt-2">
                   <span>00:00</span>
                   <span>06:00</span>
                   <span>12:00</span>
                   <span>18:00</span>
                   <span>24:00</span>
                 </div>
               </div>

               {/* Right Column */}
               <div className="space-y-6">
                 {/* AI Insights */}
                 <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                   <h3 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                     <Activity className="w-4 h-4" /> AI Energy Insights
                   </h3>
                   <p className="text-sm text-slate-300 leading-relaxed mb-3">
                     Based on the last 7 days, CNC Area B is consuming 15% more power during idle hours. Consider scheduling auto-shutdown.
                   </p>
                   <button className="text-xs text-blue-400 hover:text-blue-300 font-medium">View detailed analysis &rarr;</button>
                 </div>

                 {/* Alert Center */}
                 <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                   <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                     Alert Center
                   </h3>
                   <div className="space-y-3">
                     <div className="bg-red-500/10 border border-red-500/20 rounded p-3 flex gap-3">
                       <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                       <div>
                         <div className="text-sm font-medium text-white">Power Spike Detected</div>
                         <div className="text-xs text-slate-400 mt-1">Machine #4 exceeded 100kW limit.</div>
                         <div className="text-[10px] text-slate-500 mt-1">10 mins ago</div>
                       </div>
                     </div>
                     <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-3 flex gap-3">
                       <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                       <div>
                         <div className="text-sm font-medium text-white">Idle Running</div>
                         <div className="text-xs text-slate-400 mt-1">Injection Molder #2 idle for &gt;2 hrs.</div>
                         <div className="text-[10px] text-slate-500 mt-1">1 hour ago</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* SEO / GEO Content Section */}
        <section className="mt-20 border-t border-slate-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>The Industrial Cloud Dashboard</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The IoTEdges cloud dashboard is the command center of our <strong>industrial energy monitoring system</strong>. Designed for facility managers, it translates raw telemetry data collected from our <strong>Modbus MQTT gateways</strong> into highly visual, actionable insights. By securely transmitting data from the factory floor to the cloud, it ensures seamless <strong>remote equipment monitoring</strong> from anywhere in the world.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We've built this platform with speed and reliability in mind. It handles millions of data points per second, meaning the moment a machine drops offline or experiences a surge, you see it instantly on your screen.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Capabilities of Remote Equipment Monitoring</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Real-time Visualization</h4>
                    <p className="text-sm text-slate-400 mt-1">View live telemetry data from connected PLCs, meters, and sensors instantly. Say goodbye to manual meter reading.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">AI Energy Insights</h4>
                    <p className="text-sm text-slate-400 mt-1">Automated analysis detects anomalies such as idle machinery, helping reduce energy waste in your <strong>factory energy monitoring system</strong>.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Instant Alerting</h4>
                    <p className="text-sm text-slate-400 mt-1">Receive SMS, Email, or webhook notifications for power spikes or offline equipment seconds after they occur.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Historical Metrics</h4>
                    <p className="text-sm text-slate-400 mt-1">Export and chart historical data for compliance, ISO 50001, and ESG reporting with just a few clicks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
