import React from 'react';
import { PackageCheck, Sprout, ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface BusinessIntroProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const BusinessIntro: React.FC<BusinessIntroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="business-intro" className="relative py-24 bg-gradient-to-b from-[#050d09] via-[#0b1d13] to-[#050d09] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>{BUSINESS_CONFIG.intro.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            {BUSINESS_CONFIG.intro.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            {BUSINESS_CONFIG.intro.description}
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative">
            {[
              { step: '01', label: 'Kasganj Orchards', desc: 'Cultivated across our orchards in Kasganj, UP', icon: Sprout },
              { step: '02', label: 'Fruit Selection', desc: 'Evaluated at peak fruit maturity before picking', icon: CheckCircle2 },
              { step: '03', label: 'Handpicked Harvest', desc: 'Picked carefully from trees to preserve fruit skin', icon: ShieldCheck },
              { step: '04', label: 'Bulk Packing', desc: 'Crated and prepared for commercial buyers', icon: PackageCheck },
              { step: '05', label: 'Delivery', desc: 'Arranged to reach buyer destination', icon: Truck },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.step}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl relative flex flex-col justify-between group border-amber-500/10 hover:border-amber-400/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
                        {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-emerald-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {idx < 4 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-amber-500/40">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CONFIG.intro.highlights.map((pillar) => (
            <div
              key={pillar.label}
              className="glass-panel p-6 rounded-2xl border-white/5 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />
              
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
                {pillar.label}
              </div>
              <div className="text-xl font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {pillar.value}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenInquiry('bulk')}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 hover:scale-105"
          >
            <span>Discuss Bulk Supply with Aamvan Orchards</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
