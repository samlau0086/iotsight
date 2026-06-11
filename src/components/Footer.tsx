import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 flex flex-col px-12 pt-12 pb-8 shrink-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">I</div>
             <span className="text-xl font-bold tracking-tight text-white">IoT<span className="text-blue-500">Edges</span></span>
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
            <li><Link to="/solutions/gate-access-control" className="hover:text-white transition-colors">Gate Access Control</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
          </ul>
        </div>

        <div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block">Products</span>
          <ul className="space-y-3 text-xs font-semibold text-slate-300">
            <li><Link to="/products/ieg-100-ethernet-industrial-iot-gateway" className="hover:text-white transition-colors">IEG-100 Gateway</Link></li>
            <li><Link to="/products/ieio-100-modbus-remote-io-module" className="hover:text-white transition-colors">IEIO-100 Remote IO</Link></li>
            <li><Link to="/products/ier-100-ethernet-industrial-rtu" className="hover:text-white transition-colors">IER-100 RTU</Link></li>
            <li><Link to="/products/ieg-120-wifi-industrial-iot-gateway" className="hover:text-white transition-colors">IEG-120 WiFi Gateway</Link></li>
            <li><Link to="/products/ier-140-4g-remote-relay-rtu" className="hover:text-white transition-colors">IER-140 4G Relay RTU</Link></li>
            <li><Link to="/products/ier-141-4g-pump-valve-rtu" className="hover:text-white transition-colors">IER-141 Pump RTU</Link></li>
            <li><Link to="/products/ier-142-4g-power-cabinet-rtu" className="hover:text-white transition-colors">IER-142 Cabinet RTU</Link></li>
            <li><Link to="/products/ieac-140-4g-gsm-gate-opener" className="hover:text-white transition-colors">IEAC-140 Gate Opener</Link></li>
          </ul>
        </div>

        <div>
           <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block">Resources</span>
           <div className="flex flex-col gap-3">
              <Link to="/knowledge" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">Knowledge Base</Link>
              <Link to="/knowledge/modbus" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">Modbus Guide</Link>
              <Link to="/knowledge/mqtt" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">MQTT Guide</Link>
              <Link to="/knowledge/rs485" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">RS485 Guide</Link>
              <Link to="/knowledge/4g-gsm-gate-opener-europe" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">4G Gate Opener Guide</Link>
              <Link to="/about" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/blog" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">Contact</Link>
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
