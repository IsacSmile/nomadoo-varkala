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
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Minimal Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900/80">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="bg-sand-100 p-1.5 rounded-xl border border-sand-300 shadow-sm shrink-0">
              <img 
                src="/logo.jpg" 
                alt="Nomadoo Logo" 
                className="h-8 w-auto object-contain rounded"
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-white block">
                NOMADOO <span className="text-mangrove-400 font-black">VARKALA</span>
              </span>
              <span className="text-xs text-slate-400 font-medium block">Eco Kayaking & Boating Tours</span>
            </div>
          </div>

          {/* Quick Action Contact Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#25D366]/20 transition-all shrink-0"
            >
              <WhatsappIcon className="w-3.5 h-3.5 fill-[#25D366]" showBackground={false} />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT_PHONE_1}`}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-800 transition-all shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-mangrove-400" />
              <span>{CONTACT_PHONE_1}</span>
            </a>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-800 transition-all shrink-0"
            >
              <MapPin className="w-3.5 h-3.5 text-sunset-400" />
              <span>Maps</span>
            </a>
          </div>

        </div>

        {/* Center Legal Policies Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
          <button
            onClick={onOpenTerms}
            className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1 px-2.5 rounded-lg hover:bg-slate-900"
          >
            <FileText className="w-3.5 h-3.5 text-mangrove-400" />
            <span>Terms & Cancellation Policy</span>
          </button>

          <span className="text-slate-800 hidden sm:inline">•</span>

          <button
            onClick={onOpenPrivacy}
            className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1 px-2.5 rounded-lg hover:bg-slate-900"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Privacy Policy</span>
          </button>
        </div>

        {/* Bottom Copyright & Attribution Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900/60 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Nomadoo Varkala. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <p className="text-xs text-slate-400 font-medium">
              Engineered by{' '}
              <a
                href="https://www.instagram.com/faiz_imam__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mangrove-400 hover:text-white font-extrabold transition-colors underline decoration-mangrove-500/40 hover:decoration-white"
              >
                Faiz.I
              </a>
            </p>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-mangrove-800 text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800 shadow-sm shrink-0"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
