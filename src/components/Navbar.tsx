import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'IoT Gateway', href: '/gateway' },
    { name: 'Dashboard Demo', href: '/demo' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/blog' && location.pathname.startsWith('/blog')) {
      return true;
    }
    if (path === '/solutions' && (location.pathname.startsWith('/solutions') || location.pathname === '/factory-energy')) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">I</div>
              <span className="text-xl font-bold tracking-tight text-white">IOT<span className="text-blue-500">SIGHT</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="flex gap-8 text-sm font-medium text-slate-400 uppercase tracking-widest">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "transition-colors",
                    isActive(item.href) ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded transition-all"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium uppercase tracking-widest",
                  isActive(item.href) ? "text-white bg-blue-500/10 border border-blue-500/20" : "text-slate-400 hover:text-white hover:bg-slate-900"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium uppercase tracking-widest text-blue-400 hover:bg-slate-900"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
