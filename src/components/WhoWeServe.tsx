import React from 'react';
import { Building2, Truck, TrendingUp, Store, Factory, Users, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, type B2BAudience } from '../config/businessConfig';

interface WhoWeServeProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard', audienceRole?: string) => void;
}

export const WhoWeServe: React.FC<WhoWeServeProps> = ({ onOpenInquiry }) => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Building2,
    Truck,
    TrendingUp,
    Store,
    Factory,
  };

  return (
    <section id="audience" className="relative py-24 bg-[#08170f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Commercial B2B Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            Who We Serve.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Aamvan Orchards supplies mangoes in commercial quantities for serious bulk buyers across markets and distribution networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BUSINESS_CONFIG.audiences.map((audience: B2BAudience) => {
            const IconComponent = iconMap[audience.iconName] || Building2;
            
            return (
              <div
                key={audience.id}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border-amber-500/10 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 uppercase">
                      {audience.recommendedLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {audience.role}
                  </h3>
                  <div className="text-xs font-mono text-amber-400/90 mb-4">
                    {audience.tagline}
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {audience.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenInquiry('bulk', `Requirement for ${audience.role}`)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-200 group-hover:text-amber-400 pt-4 border-t border-white/10 transition-colors cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl border-amber-500/20 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-serif text-white">
              Buying for your business?
            </h3>
            <p className="text-sm text-slate-300 font-light">
              Let's discuss your quantity requirements, destination, and commercial terms.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('bulk')}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg hover:scale-105 shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
