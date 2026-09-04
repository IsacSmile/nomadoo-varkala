import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CONTACT_PHONE_1, WHATSAPP_NUMBER } from '../data/nomadooData';
import { WhatsappIcon } from './WhatsappIcon';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Kayaking', href: '#kayaking-highlight' },
    { name: 'Activities', href: '#activities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
    { name: 'About', href: '#about' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-2.5 sm:pt-3 pointer-events-none">
      
      {/* Relative wrapper for absolute positioning of mobile drawer */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* Floating Rounded Header Capsule */}
        <div
          className={`px-3.5 sm:px-7 transition-all duration-300 rounded-full pointer-events-auto shadow-2xl ${
            isScrolled
              ? 'bg-sand-50/95 backdrop-blur-md border border-sand-200/90 py-2'
              : 'bg-slate-950/90 backdrop-blur-md text-white py-2 border border-white/15'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo & Brand Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group min-w-0"
            >
              <div className="relative overflow-hidden rounded-full p-0.5 bg-white shadow-sm border border-sand-200 shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.jpg"
                  alt="Nomadoo Varkala Logo"
                  className="h-7 w-7 sm:h-9 sm:w-9 object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`text-[11px] sm:text-base font-extrabold tracking-tight leading-tight truncate ${isScrolled ? 'text-mangrove-950' : 'text-white'}`}>
                  NOMADOO <span className="text-sunset-500 font-black">VARKALA</span>
                </span>
                <span className={`hidden sm:block text-[9px] tracking-wider uppercase font-semibold truncate ${isScrolled ? 'text-mangrove-800' : 'text-sand-300'}`}>
                  Mangrove Kayaking & Tours
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs sm:text-sm font-semibold transition-colors hover:text-mangrove-600 ${
                    isScrolled ? 'text-slate-700' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTAs (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20inquire%20about%20Mangrove%20Kayaking.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
                  isScrolled
                    ? 'border-mangrove-600/30 text-mangrove-900 bg-mangrove-100/50 hover:bg-mangrove-100'
                    : 'border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{CONTACT_PHONE_1}</span>
              </a>

              <button
                onClick={onBookClick}
                className="flex items-center gap-1.5 bg-mangrove-800 hover:bg-mangrove-900 text-white text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-sunset-400" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu & Quick Book CTA */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <button
                onClick={onBookClick}
                className="sm:hidden bg-mangrove-800 hover:bg-mangrove-900 active:bg-mangrove-950 text-white text-[10px] font-extrabold px-2.5 py-1.5 rounded-full shadow-md transition-transform active:scale-95 flex items-center gap-1 whitespace-nowrap leading-none"
              >
                <Calendar className="w-3 h-3 text-sunset-400" />
                <span>Book Now</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  isScrolled ? 'text-slate-800 hover:bg-sand-200/60' : 'text-white hover:bg-white/15'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>

        {/* Separate Floating Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 pointer-events-auto bg-slate-950/95 backdrop-blur-xl border border-slate-800 text-white rounded-3xl p-4 shadow-2xl space-y-3 animate-fadeIn z-50">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[11px] font-bold py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/15 text-slate-200 transition-colors text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20inquire%20about%20Mangrove%20Kayaking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3 rounded-2xl text-xs shadow-md transition-transform active:scale-95"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Direct Inquiry</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-mangrove-700 hover:bg-mangrove-800 text-white font-extrabold py-3 rounded-2xl text-xs shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Calendar className="w-4 h-4 text-sunset-400" />
                <span>Select & Book Activity</span>
              </button>
            </div>
          </div>
        )}

      </div>

    </header>
  );
};
