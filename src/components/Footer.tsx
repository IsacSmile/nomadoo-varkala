import React from 'react';
import { CONTACT_PHONE_1, WHATSAPP_NUMBER, GOOGLE_MAPS_LINK } from '../data/nomadooData';
import { Phone, MapPin, ArrowUp, ShieldCheck, FileText } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface FooterProps {
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Minimal Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-white/95 p-1 rounded-lg border border-slate-800 shadow-sm">
              <img
                src="/logo.jpg"
                alt="Nomadoo Varkala"
                className="h-8 w-auto object-contain rounded"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-white">
                NOMADOO <span className="text-sunset-500 font-extrabold">VARKALA</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-medium text-slate-400">
                Mangrove Kayaking & Boating
              </span>
            </div>
          </a>

          {/* Clean Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-300">
            <a href="#home" className="hover:text-mangrove-400 transition-colors">Home</a>
            <a href="#kayaking-highlight" className="hover:text-mangrove-400 transition-colors">Kayaking</a>
            <a href="#activities" className="hover:text-mangrove-400 transition-colors">Boating</a>
            <a href="#gallery" className="hover:text-mangrove-400 transition-colors">Gallery</a>
            <a href="#booking" className="hover:text-mangrove-400 transition-colors">Book Now</a>
            <a href="#faqs" className="hover:text-mangrove-400 transition-colors">FAQs</a>
          </nav>

          {/* Quick Action Badges */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white text-xs font-bold px-3 py-1.5 rounded-full border border-[#25D366]/30 transition-all"
            >
              <WhatsappIcon className="w-3.5 h-3.5" showBackground={false} color="currentColor" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-800 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-mangrove-400" />
              <span>Call</span>
            </a>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-800 transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-sunset-400" />
              <span>Maps</span>
            </a>
          </div>

        </div>

        {/* Minimal Bottom Bar with Terms & Privacy Modal Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Nomadoo Varkala. Premium Kayaking & Boating Experiences.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-mangrove-400" />
              <span>Terms & Cancellation Policy</span>
            </button>

            <span className="text-slate-800">•</span>

            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-mangrove-800 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 shadow-sm ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
