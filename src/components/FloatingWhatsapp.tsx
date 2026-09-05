import React from 'react';
import { WhatsappIcon } from './WhatsappIcon';
import { WHATSAPP_NUMBER } from '../data/nomadooData';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group">
      
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Book on WhatsApp 💬
      </span>

      {/* Floating Button with Pulse Outer Ring & Speech Bubble Icon (3% Reduced Size) */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20inquire%20about%20Mangrove%20Kayaking%20and%20boating%20tours.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center transition-transform transform group-hover:scale-110 active:scale-95 drop-shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Outer Ring - Desktop only to eliminate mobile GPU compositor continuous repainting */}
        <span className="hidden sm:block absolute inset-0 rounded-full bg-[#4CAF50] opacity-75 animate-ping -z-10" />

        <WhatsappIcon className="w-[52px] h-[52px]" showBackground={true} color="#4CAF50" />
      </a>

    </div>
  );
};
