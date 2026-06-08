import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 flex flex-col px-12 pt-12 pb-8 shrink-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">I</div>
             <span className="text-xl font-bold tracking-tight text-white">IOT<span className="text-blue-500">SIGHT</span></span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            Make industrial energy and equipment visible from anywhere. AI-powered monitoring platform for modern factories.
          </p>
        </div>
        
        <div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block">Solutions</span>
          <ul className="space-y-3 text-xs font-semibold text-slate-300">
            <li><Link to="/solutions" className="hover:text-white transition-colors">All Solutions</Link></li>
            <li><Link to="/factory-energy" className="hover:text-white transition-colors">Factory Energy</Link></li>
            <li><Link to="/solutions/solar-energy" className="hover:text-white transition-colors">Solar & Renewable</Link></li>
            <li><Link to="/solutions/smart-agriculture" className="hover:text-white transition-colors">Smart Agriculture</Link></li>
            <li><Link to="/gateway" className="hover:text-white transition-colors">IoT Gateways</Link></li>
          </ul>
        </div>

        <div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block">Company</span>
          <ul className="space-y-3 text-xs font-semibold text-slate-300">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/demo" className="hover:text-white transition-colors">Dashboard Demo</Link></li>
          </ul>
        </div>

        <div>
           <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block">Enterprise Grade</span>
           <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-slate-300">OEM / ODM Support</span>
              <span className="text-xs font-semibold text-slate-300">Private Cloud</span>
              <span className="text-xs font-semibold text-slate-300">Multi-language</span>
              <span className="text-xs font-semibold text-slate-300">MQTT/Modbus</span>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest font-semibold">
        <p>&copy; {new Date().getFullYear()} IoTEdges Solutions</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-slate-300 transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-slate-300 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
