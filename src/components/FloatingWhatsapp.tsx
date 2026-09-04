import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/nomadooData';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
        Book on WhatsApp 💬
      </span>

      {/* Floating Button with Pulse Outer Ring */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20inquire%20about%20Mangrove%20Kayaking%20and%20boating%20tours.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />

        <MessageCircle className="w-8 h-8 fill-white text-emerald-500" />
      </a>

    </div>
  );
};
