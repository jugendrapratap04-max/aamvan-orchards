import React from 'react';
import { Leaf, Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030906] text-slate-400 border-t border-amber-500/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-800 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#050d09] rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="font-semibold text-lg tracking-wider text-white uppercase font-serif">
                AAMVAN <span className="text-amber-400">ORCHARDS</span>
              </span>
            </div>

            <p className="text-sm font-light text-slate-300 max-w-sm leading-relaxed">
              Premium mango supply for serious bulk buyers, wholesalers, distributors, and fruit traders. Sourced from our orchards in Kasganj, Uttar Pradesh.
            </p>

            <div className="pt-2 text-xs font-mono text-emerald-400/90">
              Direct Sourcing · Bulk Supply · Kasganj, UP
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#business-intro" className="hover:text-amber-400 transition-colors">Our Business</a></li>
              <li><a href="#bulk-supply" className="hover:text-amber-400 transition-colors">Bulk Supply</a></li>
              <li><a href="#orchard" className="hover:text-amber-400 transition-colors">Orchard Experience</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">6-Stage Process</a></li>
              <li><a href="#audience" className="hover:text-amber-400 transition-colors">Who We Serve</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Desk</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 mb-4">
              Procurement Desk
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300">{BUSINESS_CONFIG.contactPlaceholder.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300">{BUSINESS_CONFIG.contactPlaceholder.whatsapp}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300">{BUSINESS_CONFIG.contactPlaceholder.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{BUSINESS_CONFIG.contactPlaceholder.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 mb-4">
              B2B Policy
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
              All mango sales are governed by private commercial quotations based on quantity, seasonality, and transport destination.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-amber-300/90 font-mono">
              No Public Retail Checkout
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Aamvan Orchards. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Kasganj, Uttar Pradesh</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass-panel text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
