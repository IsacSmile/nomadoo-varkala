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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900/80">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="bg-sand-100 p-1.5 rounded-xl border border-sand-300 shadow-sm">
              <img 
                src="/logo.jpg" 
                alt="Nomadoo Logo" 
                className="h-8 w-auto object-contain rounded"
              />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block">
                NOMADOO <span className="text-mangrove-400 font-black">VARKALA</span>
              </span>
              <span className="text-xs text-slate-400 font-medium">Eco Kayaking & Boating Tours</span>
            </div>
          </div>

          {/* Quick Action Contact Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#25D366]/20 transition-all"
            >
              <WhatsappIcon className="w-3.5 h-3.5 fill-[#25D366]" showBackground={false} />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT_PHONE_1}`}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-800 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-mangrove-400" />
              <span>{CONTACT_PHONE_1}</span>
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pr-16 sm:pr-20">
          <p>© {new Date().getFullYear()} Nomadoo Varkala. Premium Kayaking & Boating Experiences.</p>
          
          <div className="flex flex-wrap items-center gap-3.5 text-xs">
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
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-mangrove-800 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 shadow-sm ml-1"
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
