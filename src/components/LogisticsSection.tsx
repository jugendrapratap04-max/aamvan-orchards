import React from 'react';
import { Truck, ArrowRight, ShieldCheck, Clock, Navigation } from 'lucide-react';

interface LogisticsSectionProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const LogisticsSection: React.FC<LogisticsSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-24 bg-[#050d09] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden glass-panel border-amber-500/20 p-3 shadow-2xl">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <img
                src="/images/logistics_truck.jpg"
                alt="B2B Commercial Logistics Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-xl border-amber-500/30 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                    DISPATCH ROUTE PREVIEW
                  </span>
                  <span>COMMERCIAL FREIGHT</span>
                </div>

                <div className="flex items-center justify-between gap-2 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold">
                      A
                    </div>
                    <span className="text-[10px] text-slate-300 font-mono mt-1">Orchard</span>
                  </div>

                  <div className="flex-1 relative h-1 bg-emerald-950 rounded-full overflow-hidden mx-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-500 animate-pulse" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 text-xs font-mono font-bold">
                      B
                    </div>
                    <span className="text-[10px] text-slate-300 font-mono mt-1">Truck</span>
                  </div>

                  <div className="flex-1 relative h-1 bg-emerald-950 rounded-full overflow-hidden mx-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-emerald-400 animate-pulse" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 text-xs font-mono font-bold">
                      C
                    </div>
                    <span className="text-[10px] text-slate-300 font-mono mt-1">Destination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase">
              <Truck className="w-3.5 h-3.5" />
              <span>Commercial Delivery Sourcing</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              From Orchard to Destination.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Delivery can be arranged for bulk buyers based on quantity, destination and requirement.
            </p>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 leading-relaxed">
              "Transport details and delivery arrangements are discussed directly per commercial order."
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-xl border-white/5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Crate Stacking</span>
                </div>
                <p className="text-xs text-slate-400 font-light">
                  Heavy-duty crating built for secure truck loading and handling.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border-white/5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Dispatch Planning</span>
                </div>
                <p className="text-xs text-slate-400 font-light">
                  Coordinated loading schedules aligned with harvest availability.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenInquiry('bulk')}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg hover:scale-105"
              >
                <span>Discuss Delivery Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
