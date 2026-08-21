import React from 'react';
import { MapPin, Calendar, Users, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface OrchardExperienceProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const OrchardExperience: React.FC<OrchardExperienceProps> = ({ onOpenInquiry }) => {
  return (
    <section id="orchard" className="relative py-24 bg-[#050d09] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>{BUSINESS_CONFIG.orchardExperience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            {BUSINESS_CONFIG.orchardExperience.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            {BUSINESS_CONFIG.orchardExperience.description}
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden glass-panel border-amber-500/20 shadow-2xl p-3">
          <div className="relative h-[480px] sm:h-[580px] w-full rounded-2xl overflow-hidden">
            <img
              src="/images/orchard_visit.jpg"
              alt="Orchard Visit Experience"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d09] via-black/30 to-transparent" />
            
            <div className="absolute top-6 right-6 glass-panel px-4 py-2 rounded-full border-white/20 text-xs font-mono text-white flex items-center gap-2 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Kasganj, Uttar Pradesh</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto md:max-w-xl">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border-amber-500/30 backdrop-blur-xl bg-[#050d09]/85 shadow-2xl animate-in slide-in-from-bottom-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{BUSINESS_CONFIG.orchardExperience.floatingCardTitle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                  "See the source. Understand the quality. Meet the supplier."
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light mb-6 leading-relaxed">
                  Serious bulk buyers are welcome to visit our mango orchards in Kasganj, Uttar Pradesh, see the fruit at source, and discuss their requirements directly with us.
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-emerald-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>See Fruit at Source</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Direct Owner Meeting</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Discuss Requirements</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry('orchard')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg hover:scale-105"
                >
                  <Users className="w-4 h-4" />
                  <span>Plan an Orchard Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
