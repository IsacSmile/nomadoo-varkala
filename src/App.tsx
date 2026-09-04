import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KayakingHighlightCard } from './components/KayakingHighlightCard';
import { OtherActivities } from './components/OtherActivities';
import { ImageMarquee } from './components/ImageMarquee';
import { VideoMarquee } from './components/VideoMarquee';
import { BookingSection } from './components/BookingSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { PolicyModal } from './components/PolicyModal';

export const App: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string | undefined>(undefined);
  const [policyModal, setPolicyModal] = useState<'terms' | 'privacy' | null>(null);

  const scrollToBooking = (activityId?: string) => {
    if (activityId) {
      setSelectedActivityId(activityId);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-sand-50 font-sans text-slate-900 selection:bg-mangrove-200 selection:text-mangrove-900">
      
      {/* Sticky Header Navbar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Hero Section */}
      <HeroSection onBookClick={() => scrollToBooking('kayak-2seater')} />

      {/* Main Kayaking Highlight Card Section */}
      <KayakingHighlightCard onSelectOption={(optionId) => scrollToBooking(optionId)} />

      {/* Other Activities Grid */}
      <OtherActivities onSelectActivity={(activityId) => scrollToBooking(activityId)} />

      {/* Gallery Image Marquee Scroll */}
      <ImageMarquee />

      {/* Video Marquee Strip */}
      <VideoMarquee />

      {/* Booking Section with WhatsApp pre-filled submission */}
      <BookingSection selectedActivityId={selectedActivityId} />

      {/* About & Why Nomadoo Section */}
      <AboutSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Footer */}
      <Footer 
        onOpenTerms={() => setPolicyModal('terms')} 
        onOpenPrivacy={() => setPolicyModal('privacy')} 
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsapp />

      {/* Terms & Privacy Policy Minimal Modal */}
      <PolicyModal 
        type={policyModal} 
        onClose={() => setPolicyModal(null)} 
      />

    </div>
  );
};

export default App;
