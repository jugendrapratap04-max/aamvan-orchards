import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, ShieldCheck, MapPin, Award } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface HeroProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-full">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out scale-105"
        style={{
          backgroundImage: `url('${BUSINESS_CONFIG.journeySteps[0].image}')`,
          transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d09] via-[#050d09]/80 to-[#050d09]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d09] via-transparent to-[#050d09]/70" />
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel border-amber-500/30 mb-8 max-w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-amber-200 uppercase font-mono truncate">
            {BUSINESS_CONFIG.hero.badge} · Kasganj, UP
          </span>
        </div>

        <h1 className="text-3xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white max-w-5xl leading-[1.1] mb-6 drop-shadow-2xl">
          From Our Orchard to <br className="hidden sm:inline" />
          <span className="italic text-gradient-gold font-serif font-light">Your Business.</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10 text-shadow">
          {BUSINESS_CONFIG.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 max-w-full">
          <button
            onClick={() => onOpenInquiry('bulk')}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-[0_0_35px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95"
          >
            <span>{BUSINESS_CONFIG.hero.primaryCta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#orchard"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base font-medium text-slate-200 glass-panel hover:bg-emerald-950/60 border border-emerald-500/30 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
          >
            <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            <span>{BUSINESS_CONFIG.hero.secondaryCta}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-3 p-3 rounded-2xl glass-panel text-left">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Award className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">Supply</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">Truck-Load Supply</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-2xl glass-panel text-left">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <MapPin className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">Origin</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">Kasganj, UP</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-2xl glass-panel text-left">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">Pricing</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">Direct Negotiation</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-2xl glass-panel text-left">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Compass className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">Delivery</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">Arranged Sourcing</div>
            </div>
          </div>
        </div>

        <a
          href="#business-intro"
          className="mt-12 inline-flex flex-col items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors group cursor-pointer"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-slate-400">Scroll to Explore</span>
          <div className="w-6 h-10 rounded-full border border-slate-600 flex items-start justify-center p-1 group-hover:border-amber-400">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-bounce mt-1" />
          </div>
        </a>
      </div>
    </section>
  );
};
