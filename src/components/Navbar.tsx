import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_PHONE_1, WHATSAPP_NUMBER } from '../data/nomadooData';

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
      const offset = 80;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sand-50/95 backdrop-blur-md shadow-sm border-b border-sand-200/80 py-3'
          : 'bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-transparent text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden rounded-lg p-0.5 bg-white shadow-md border border-mangrove-100 group-hover:scale-105 transition-transform">
              <img
                src="/logo.jpg"
                alt="Nomadoo Varkala Logo"
                className="h-10 w-auto max-w-[140px] sm:h-12 object-contain rounded"
                onError={(e) => {
                  // Fallback text badge if image unavailable
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-bold tracking-tight leading-tight ${isScrolled ? 'text-mangrove-900' : 'text-white'}`}>
                NOMADOO <span className="text-sunset-500 font-extrabold">VARKALA</span>
              </span>
              <span className={`text-[10px] tracking-wider uppercase font-semibold ${isScrolled ? 'text-mangrove-700' : 'text-sand-200'}`}>
                Mangrove Kayaking & Tours
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-mangrove-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20inquire%20about%20Mangrove%20Kayaking.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                isScrolled
                  ? 'border-mangrove-600/30 text-mangrove-800 hover:bg-mangrove-50'
                  : 'border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{CONTACT_PHONE_1}</span>
            </a>

            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-mangrove-700 hover:bg-mangrove-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-sunset-500" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="sm:hidden bg-mangrove-700 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-800 hover:bg-sand-200/50' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-sand-50 border-b border-sand-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-slate-800 hover:text-mangrove-700 py-2 px-3 rounded-lg hover:bg-mangrove-50/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-sand-200 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20inquire%20about%20Mangrove%20Kayaking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-2.5 rounded-xl text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full bg-mangrove-800 text-white font-bold py-2.5 rounded-xl text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-sunset-500" />
              <span>Select & Book Activity</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
