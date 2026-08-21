import React, { useState } from 'react';
import { Package, ArrowRight, CheckCircle, Calculator } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface BulkSupplyProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard', initialQty?: string) => void;
}

export const BulkSupply: React.FC<BulkSupplyProps> = ({ onOpenInquiry }) => {
  const [selectedPreset, setSelectedPreset] = useState(0);

  const currentPreset = BUSINESS_CONFIG.bulkSupply.calculatorPresets[selectedPreset];

  return (
    <section id="bulk-supply" className="relative py-20 sm:py-24 bg-[#050d09] overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Package className="w-3.5 h-3.5" />
              <span>Commercial Procurement</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
              {BUSINESS_CONFIG.bulkSupply.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              {BUSINESS_CONFIG.bulkSupply.description}
            </p>

            <div className="space-y-4">
              {[
                'Structured crate packing for minimum fruit movement during transit',
                'Customized batch sizing tailored for regional mandi or warehouse intake',
                'Direct orchard loading to shorten dispatch turnaround time',
                'Transparent volume communication and commercial procurement terms'
              ].map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-300 font-light">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden glass-panel border-amber-500/20 p-2 group shadow-2xl max-w-full">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <img
                src={BUSINESS_CONFIG.gallery[1].image}
                alt="Bulk Mango Crates"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="glass-panel p-3.5 sm:p-4 rounded-xl border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-amber-400 mb-1">
                    <span>BULK PACKAGING SPECIFICATION</span>
                    <span>FRESH HARVEST</span>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    Ventilated Wooden & Heavy Duty Plastic Crates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-12 border-amber-500/20 shadow-2xl relative overflow-hidden max-w-full">
          <div className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-2">
                <Calculator className="w-4 h-4" />
                <span>Commercial Scale Selector</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Select Your Required Volume Scale
              </h3>
            </div>
            
            <p className="text-sm text-slate-400 font-light max-w-md">
              Choose your procurement scale. Commercial terms are negotiated privately based on variety, requirement, and current market conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {BUSINESS_CONFIG.bulkSupply.calculatorPresets.map((preset, index) => (
              <button
                key={index}
                onClick={() => setSelectedPreset(index)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border ${
                  selectedPreset === index
                    ? 'bg-gradient-to-br from-amber-500/20 to-emerald-950/80 border-amber-400 text-white shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                    : 'glass-panel border-white/5 text-slate-300 hover:border-amber-500/30 hover:text-white'
                }`}
              >
                <div className="text-base sm:text-lg font-serif font-bold text-amber-400 mb-1">
                  {preset.label}
                </div>
                <div className="text-xs font-mono text-slate-400 mb-2">
                  {preset.scale}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium line-clamp-1">
                  {preset.idealFor}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-[#0b1d13]/80 rounded-2xl p-5 sm:p-6 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
                Selected Commercial Scale
              </div>
              <div className="text-base sm:text-lg font-semibold text-white">
                <span className="text-amber-400">{currentPreset.label}</span> ({currentPreset.scale})
              </div>
              <div className="text-xs text-emerald-400">
                Tailored for: {currentPreset.idealFor}
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('bulk', currentPreset.label)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg hover:scale-105 shrink-0"
            >
              <span>Discuss This Commercial Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
