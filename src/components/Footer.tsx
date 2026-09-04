import React from 'react';
import { CONTACT_PHONE_1, CONTACT_PHONE_2, WHATSAPP_NUMBER } from '../data/nomadooData';
import { Phone, MapPin, Compass, ArrowUp } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-lg border border-slate-700">
                <img
                  src="/logo.jpg"
                  alt="Nomadoo Varkala Logo"
                  className="h-10 w-auto object-contain rounded"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  NOMADOO <span className="text-sunset-500 font-extrabold">VARKALA</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                  Mangrove Kayaking & Boating
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Nomadoo is a dedicated booking partner for guided mangrove kayaking and boating tours in Varkala. Connecting travelers with safe local operators for an unforgettable eco-tourism experience.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors border border-[#25D366]/30"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-xl bg-mangrove-600/20 text-mangrove-400 hover:bg-mangrove-600 hover:text-white flex items-center justify-center transition-colors border border-mangrove-500/30"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-mangrove-400 transition-colors">Home</a></li>
              <li><a href="#kayaking-highlight" className="hover:text-mangrove-400 transition-colors">Mangrove Kayaking (1 & 2 Seater)</a></li>
              <li><a href="#activities" className="hover:text-mangrove-400 transition-colors">Country & Speed Boating</a></li>
              <li><a href="#gallery" className="hover:text-mangrove-400 transition-colors">Photo & Video Gallery</a></li>
              <li><a href="#booking" className="hover:text-mangrove-400 transition-colors">WhatsApp Reservation</a></li>
              <li><a href="#about" className="hover:text-mangrove-400 transition-colors">About Us</a></li>
              <li><a href="#faqs" className="hover:text-mangrove-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Contact & Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-mangrove-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Location:</strong> Paravoor Mangrove Estuary & Backwaters, Varkala, Kerala (≈30 mins drive from Varkala Cliff)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong className="text-slate-200">Phone 1:</strong>{' '}
                  <a href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-emerald-400 underline">
                    {CONTACT_PHONE_1}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sunset-400 flex-shrink-0" />
                <span>
                  <strong className="text-slate-200">Phone 2:</strong>{' '}
                  <a href={`tel:${CONTACT_PHONE_2.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-sunset-400 underline">
                    {CONTACT_PHONE_2}
                  </a>
                </span>
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-400">
              💡 <strong className="text-white">Tip:</strong> Message us directly on WhatsApp for live slot availability, weather updates, and group discounts.
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nomadoo Varkala. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Mangrove Kayaking & Boating Tours</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-mangrove-700 text-white flex items-center justify-center transition-colors border border-slate-800"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
