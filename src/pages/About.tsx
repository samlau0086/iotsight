import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-slate-900 min-h-screen pt-20 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>We Build Remote Equipment Monitoring Solutions</h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            IoTEdges provides industrial-grade edge hardware, Modbus MQTT gateways, and cloud platforms to make legacy industrial equipment visible, measurable, and manageable remotely.
          </p>
        </div>

        {/* Brand Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Our Mission in Industrial IoT</h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Industrial facilities worldwide are struggling with rising energy costs and unexpected machine downtime. While modern IT systems have dashboards for everything, operational technology (OT) often remains in the dark. 
            </p>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Our mission is to bridge this gap simply, securely, and affordably with our highly-reliable <strong>factory energy monitoring systems</strong>. We believe in open standards, robust engineering, and taking the friction out of IoT deployments.
            </p>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> End-to-End Solutions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Industrial Grade Reliability
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> True IT/OT Convergence Focus
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img 
              src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1200" 
              alt="Industrial IoT Factory floor" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="font-bold text-xl mb-1">Driven by Engineering</h3>
                <p className="text-slate-300 text-sm">Building hardware that survives the workshop floor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footprint or Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { label: 'Product Families', value: '4' },
            { label: 'Core Protocol Focus', value: 'Modbus' },
            { label: 'Primary Cloud Protocol', value: 'MQTT' },
            { label: 'Wireless Uplink Strategy', value: 'Separate' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 lg:p-12 shadow-2xl mb-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>Why Choose IoTEdges as your IoT Partner?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Architecture First</h4>
              <p className="text-slate-400 leading-relaxed">We plan hardware, dashboard, and alert workflows together so the <strong>industrial IoT gateway</strong>, RTU, or Remote IO module fits the monitoring architecture instead of becoming an isolated box.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Engineering-Led Hardware</h4>
              <p className="text-slate-400 leading-relaxed">Our product pages focus on practical configurations, field interfaces, communication options and application fit, with final project specifications confirmed through engineering review.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Partner-Friendly Roadmap</h4>
              <p className="text-slate-400 leading-relaxed">We plan product paths for system integrators, EPC contractors, and software teams, including branded dashboard workflows and configurable hardware positioning once the model specifications are confirmed.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-10 lg:p-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Partner with an Industrial IoT Manufacturer</h3>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Are you a system integrator, EPC contractor, or software team looking to integrate reliable, scalable hardware into your operational stack? Let's work together to build the future of industry.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-bold uppercase tracking-widest transition shadow-lg shadow-blue-500/20">
            Become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
}
