import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface ContactSectionProps {
  onOpenInquiry: (intent?: 'bulk' | 'quote' | 'orchard') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const [inlineForm, setInlineForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: '',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInlineForm({ name: '', company: '', phone: '', email: '', quantity: '', destination: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#08170f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Commercial Lead</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            Have a Bulk Requirement?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Tell us what you're looking for. We'll discuss current availability, commercial terms, and delivery options directly with you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => onOpenInquiry('bulk')}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all"
            >
              Discuss Bulk Supply
            </button>

            <button
              onClick={() => onOpenInquiry('quote')}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white glass-panel border-amber-500/30 hover:border-amber-400 transition-all"
            >
              Request a Quote
            </button>

            <button
              onClick={() => onOpenInquiry('orchard')}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-emerald-400 glass-panel border-emerald-500/30 hover:border-emerald-400 transition-all"
            >
              Plan an Orchard Visit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border-amber-500/20 space-y-6">
              <h3 className="text-xl font-serif text-white">
                Aamvan Orchards Procurement Desk
              </h3>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Direct Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-slate-200">{BUSINESS_CONFIG.contactPlaceholder.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Corporate Email</div>
                    <div className="text-sm font-semibold text-slate-200">{BUSINESS_CONFIG.contactPlaceholder.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Orchard Base</div>
                    <div className="text-sm font-semibold text-slate-200">{BUSINESS_CONFIG.contactPlaceholder.address}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Clock className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.contactPlaceholder.operatingHours}</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-amber-500/20 text-xs text-slate-300 leading-relaxed font-light">
              <span className="font-bold text-amber-400 block mb-1">Commercial Terms Note:</span>
              "No public pricing is published. Fixed retail rate cards are omitted to allow customized volume and distance commercial terms."
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-amber-500/20 shadow-2xl">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-white">Inquiry Submitted Successfully</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
                    Our procurement desk will process your information and reach out directly to discuss availability and terms.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                    <h3 className="text-xl font-serif text-white">Direct Bulk Inquiry Form</h3>
                    <span className="text-xs font-mono text-amber-400 uppercase">Aamvan Orchards</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Business / Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Company name"
                        value={inlineForm.company}
                        onChange={(e) => setInlineForm({ ...inlineForm, company: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Your phone number"
                        value={inlineForm.phone}
                        onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="business@domain.com"
                        value={inlineForm.email}
                        onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Quantity Requirement</label>
                      <input
                        type="text"
                        placeholder="e.g. Truck-load / Commercial batch"
                        value={inlineForm.quantity}
                        onChange={(e) => setInlineForm({ ...inlineForm, quantity: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Destination Market</label>
                      <input
                        type="text"
                        placeholder="e.g. Delhi Azadpur / Regional Mandi"
                        value={inlineForm.destination}
                        onChange={(e) => setInlineForm({ ...inlineForm, destination: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Mango Requirement & Remarks</label>
                    <textarea
                      rows={3}
                      placeholder="Specify requirement details, timeline, or orchard visit preferences..."
                      value={inlineForm.message}
                      onChange={(e) => setInlineForm({ ...inlineForm, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all shadow-lg flex items-center justify-center gap-2 text-base mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Commercial Inquiry</span>
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] text-slate-400 font-mono">
                      No public pricing. Commercial terms are discussed privately based on requirement.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
