import React, { useState, useEffect } from 'react';
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
import { AdminPage } from './components/AdminPage';
import { AnimatedSection } from './components/AnimatedSection';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selectedActivityId, setSelectedActivityId] = useState<string | undefined>(undefined);
  const [policyModal, setPolicyModal] = useState<'terms' | 'privacy' | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Developer Signature Console Easter Egg
  useEffect(() => {
    console.log(
      "%cEngineered by Faiz.I",
      "font-size: 42px; font-weight: 800; font-family: 'Courier New', monospace; color: #00ff9f; background: #09111e; padding: 12px 24px; border-radius: 8px; border: 1px solid #00ff9f; text-shadow: 0 0 12px rgba(0,255,159,0.5);"
    );
    console.log(
      "%cNomadoo Varkala • Crafted with precision",
      "font-size: 14px; font-weight: 600; font-family: 'Courier New', monospace; color: #38bdf8; padding-top: 4px;"
    );
  }, []);

  // Simple routing for /admin
  if (currentPath === '/admin' || window.location.hash === '#admin') {
    return <AdminPage />;
  }

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
    <div className="min-h-screen bg-sand-50 font-sans text-slate-900 selection:bg-mangrove-200 selection:text-mangrove-900 overflow-x-hidden">
      
      {/* Sticky Header Navbar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Hero Section */}
      <HeroSection onBookClick={() => scrollToBooking('kayak-2seater')} />

      {/* Main Kayaking Highlight Card Section */}
      <AnimatedSection>
        <KayakingHighlightCard onSelectOption={(optionId) => scrollToBooking(optionId)} />
      </AnimatedSection>

      {/* Other Activities Grid */}
      <AnimatedSection>
        <OtherActivities onSelectActivity={(activityId) => scrollToBooking(activityId)} />
      </AnimatedSection>

      {/* Gallery Image Marquee Scroll */}
      <AnimatedSection>
        <ImageMarquee />
      </AnimatedSection>

      {/* Video Marquee Strip */}
      <AnimatedSection>
        <VideoMarquee />
      </AnimatedSection>

      {/* Booking Section with WhatsApp pre-filled submission */}
      <AnimatedSection>
        <BookingSection selectedActivityId={selectedActivityId} />
      </AnimatedSection>

      {/* About & Why Nomadoo Section */}
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      {/* FAQs Section */}
      <AnimatedSection>
        <FaqSection />
      </AnimatedSection>

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
