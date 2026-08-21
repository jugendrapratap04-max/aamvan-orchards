import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIntent?: 'bulk' | 'quote' | 'orchard';
  initialQty?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialIntent = 'bulk',
  initialQty = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: initialQty,
    requirement: 'Grade A Bulk Supply',
    destination: '',
    message: '',
    inquiryType: initialIntent,
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      quantity: initialQty || prev.quantity,
      inquiryType: initialIntent || prev.inquiryType,
    }));
  }, [initialIntent, initialQty]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in max-w-full">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border-amber-500/30 p-5 sm:p-10 shadow-2xl bg-[#050d09]/95 my-6 sm:my-8 max-w-full overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-slate-300 hover:bg-amber-400 hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Inquiry Received</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
              Thank you for submitting your commercial requirement. Our procurement desk will reach out directly to discuss availability and custom terms.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 sm:mb-8 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>B2B Commercial Procurement Inquiry</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-serif text-white mb-2">
                {formData.inquiryType === 'orchard'
                  ? 'Schedule an Orchard Verification Visit'
                  : formData.inquiryType === 'quote'
                  ? 'Request Current Commercial Quote'
                  : 'Discuss Bulk Mango Requirement'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                No public pricing. Commercial terms are negotiated privately based on requirement & destination.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 p-1 rounded-xl bg-black/40 border border-white/10 mb-4">
                {[
                  { id: 'bulk', label: 'Bulk Supply' },
                  { id: 'quote', label: 'Custom Quote' },
                  { id: 'orchard', label: 'Orchard Visit' },
                ].map((type) => (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() => setFormData({ ...formData, inquiryType: type.id as any })}
                    className={`py-2 rounded-lg text-xs font-mono tracking-wider transition-all text-center ${
                      formData.inquiryType === type.id
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Business Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Corporate Email Address</label>
                  <input
                    type="email"
                    placeholder="business@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Destination City / Market</label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi Azadpur / Regional Mandi"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Specific Requirements & Message</label>
                <textarea
                  rows={3}
                  placeholder="Detail fruit maturity, dispatch date preferences, or orchard visit availability..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit B2B Inquiry</span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
