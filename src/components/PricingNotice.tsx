import React from 'react';
import { Scale, FileText, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface PricingNoticeProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const PricingNotice: React.FC<PricingNoticeProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-20 bg-[#08170f] border-y border-amber-500/10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase mb-6">
          <Scale className="w-4 h-4" />
          <span>{BUSINESS_CONFIG.pricingNotice.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
          {BUSINESS_CONFIG.pricingNotice.title}
        </h2>

        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-amber-500/20 max-w-4xl mx-auto shadow-2xl relative">
          <p className="text-slate-200 text-base sm:text-xl font-light leading-relaxed mb-8">
            "{BUSINESS_CONFIG.pricingNotice.description}"
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 pt-6 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
              <div className="text-amber-400 font-mono text-xs font-semibold mb-1">01. HARVEST TIMING</div>
              <div className="text-xs text-slate-300 font-light">Early, peak, or late season availability rates</div>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
              <div className="text-amber-400 font-mono text-xs font-semibold mb-1">02. FRUIT VARIETY & GRADE</div>
              <div className="text-xs text-slate-300 font-light">Size calibration, skin perfection & Brix levels</div>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
              <div className="text-amber-400 font-mono text-xs font-semibold mb-1">03. ORDER VOLUME</div>
              <div className="text-xs text-slate-300 font-light">Tiered commercial scale crate pricing</div>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
              <div className="text-amber-400 font-mono text-xs font-semibold mb-1">04. LOGISTICS & FREIGHT</div>
              <div className="text-xs text-slate-300 font-light">Distance, cold storage & dispatch speed</div>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('quote')}
            className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_45px_rgba(245,158,11,0.5)] hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            <span>{BUSINESS_CONFIG.pricingNotice.ctaText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-4 text-xs text-slate-400 font-mono">
            Direct response within 24 business hours for serious buyer inquiries.
          </p>
        </div>
      </div>
    </section>
  );
};
