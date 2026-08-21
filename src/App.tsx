import { useState } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessIntro } from './components/BusinessIntro';
import { BulkSupply } from './components/BulkSupply';
import { PricingNotice } from './components/PricingNotice';
import { OrchardExperience } from './components/OrchardExperience';
import { ProcessJourney } from './components/ProcessJourney';
import { LogisticsSection } from './components/LogisticsSection';
import { WhoWeServe } from './components/WhoWeServe';
import { PhotoGallery } from './components/PhotoGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryIntent, setInquiryIntent] = useState<'bulk' | 'quote' | 'orchard'>('bulk');
  const [inquiryQty, setInquiryQty] = useState('');

  const handleOpenInquiry = (intent: 'bulk' | 'quote' | 'orchard' = 'bulk', initialQty = '') => {
    setInquiryIntent(intent);
    setInquiryQty(initialQty);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050d09] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* WebGL 3D Interactive Ambient Background */}
      <ThreeBackground />

      {/* Sticky Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenInquiry={handleOpenInquiry} />
        <BusinessIntro onOpenInquiry={handleOpenInquiry} />
        <BulkSupply onOpenInquiry={handleOpenInquiry} />
        <PricingNotice onOpenInquiry={handleOpenInquiry} />
        <OrchardExperience onOpenInquiry={handleOpenInquiry} />
        <ProcessJourney onOpenInquiry={handleOpenInquiry} />
        <LogisticsSection onOpenInquiry={handleOpenInquiry} />
        <WhoWeServe onOpenInquiry={handleOpenInquiry} />
        <PhotoGallery />
        <ContactSection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Premium Dark Footer */}
      <Footer />

      {/* B2B Procurement Inquiry Modal Dialog */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialIntent={inquiryIntent}
        initialQty={inquiryQty}
      />

    </div>
  );
}

export default App;
