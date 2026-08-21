import React, { useState } from 'react';
import { Layers, ArrowRight, Check, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface ProcessJourneyProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const ProcessJourney: React.FC<ProcessJourneyProps> = ({ onOpenInquiry }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = BUSINESS_CONFIG.journeySteps;
  const currentStep = steps[activeStep];

  return (
    <section id="process" className="relative py-24 bg-[#08170f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Orchard to Destination</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            The 6-Stage Journey.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From initial fruit cultivation in our Kasganj orchards to commercial loading and delivery dispatch.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-12">
          {steps.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border relative ${
                activeStep === idx
                  ? 'glass-panel border-amber-400 bg-amber-500/10 text-white shadow-[0_0_25px_rgba(245,158,11,0.25)]'
                  : 'bg-black/30 border-white/5 text-slate-400 hover:border-amber-500/30 hover:text-slate-200'
              }`}
            >
              <div className="font-mono text-xs font-bold text-amber-400 mb-1">
                {step.number}
              </div>
              <div className="text-xs font-medium font-serif line-clamp-1">
                {step.title}
              </div>
              {activeStep === idx && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-amber-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="glass-panel rounded-3xl border-amber-500/20 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden group shadow-xl">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-xs text-amber-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-amber-500/30">
                STAGE {currentStep.number} OF 06
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                  {currentStep.subtitle}
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif text-white mb-4">
                  {currentStep.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Process Stage Highlights:
                </div>
                {currentStep.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 font-light">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="text-xs font-mono text-slate-400 hover:text-amber-400"
                >
                  ← Previous Stage
                </button>

                <button
                  onClick={() => onOpenInquiry('bulk')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all"
                >
                  <span>Discuss Bulk Supply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="text-xs font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
