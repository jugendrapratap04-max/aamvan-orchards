import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Business', href: '#business-intro' },
    { label: 'Bulk Supply', href: '#bulk-supply' },
    { label: 'Orchard', href: '#orchard' },
    { label: 'Process', href: '#process' },
    { label: 'Who We Serve', href: '#audience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-800 p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#050d09] rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg tracking-wider text-white uppercase font-serif">
              AAMVAN <span className="text-amber-400">ORCHARDS</span>
            </span>
            <span className="text-[10px] tracking-widest text-emerald-400/90 uppercase font-mono">
              Kasganj, Uttar Pradesh
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => onOpenInquiry('bulk')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95"
          >
            <span>Discuss Bulk Supply</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => onOpenInquiry('bulk')}
            className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-950 bg-amber-400"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-slate-200 hover:text-amber-400"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-amber-500/20 py-6 px-6 shadow-2xl backdrop-blur-2xl bg-[#050d09]/95 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-emerald-500/60" />
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('bulk');
              }}
              className="w-full py-3 rounded-xl font-semibold text-center text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg flex items-center justify-center gap-2"
            >
              <span>Discuss Bulk Supply</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
