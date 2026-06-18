import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Knowledge', href: '/knowledge' },
    { name: 'Demo', href: '/demo' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/blog' && location.pathname.startsWith('/blog')) {
      return true;
    }
    if (path === '/solutions' && location.pathname.startsWith('/solutions')) {
      return true;
    }
    if (path === '/products' && (location.pathname.startsWith('/products') || location.pathname === '/gateway')) {
      return true;
    }
    if (path === '/accessories' && location.pathname.startsWith('/accessories')) {
      return true;
    }
    if (path === '/knowledge' && location.pathname.startsWith('/knowledge')) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full gap-4">
          <div className="flex shrink-0 items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">I</div>
              <span className="text-xl font-bold tracking-tight text-white">IoT<span className="text-blue-500">Edges</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end lg:gap-5">
            <nav className="flex min-w-0 items-center gap-4 text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] xl:gap-6 xl:text-xs">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "whitespace-nowrap transition-colors",
                    isActive(item.href) ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <Link
              to="/contact"
              data-analytics-event="cta_click"
              data-analytics-category="navigation"
              data-analytics-label="Request Quote"
              data-analytics-destination="/contact"
              className="shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold uppercase tracking-[0.16em] rounded transition-all"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
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
        <div className="lg:hidden border-t border-slate-800 bg-slate-950">
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
              data-analytics-event="cta_click"
              data-analytics-category="mobile_navigation"
              data-analytics-label="Request Quote"
              data-analytics-destination="/contact"
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
