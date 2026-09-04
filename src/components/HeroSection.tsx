import React from 'react';
import { Calendar, Sparkles, ShieldCheck, Compass, Star, ChevronRight, Sun, UserCheck, Waves } from 'lucide-react';
import { CONTACT_PHONE_1, WHATSAPP_NUMBER } from '../data/nomadooData';
import { WhatsappIcon } from './WhatsappIcon';

interface HeroSectionProps {
  onBookClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-20 overflow-hidden bg-gradient-to-b from-sand-100/70 via-sand-50/40 to-white">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-mangrove-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-sunset-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Side: Authentic Kayaking Image with Floating Trust Badges */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] group">
                <img
                  src="/images/yolo_kayak_relaxing.jpg"
                  alt="Guided Mangrove Kayaking in Varkala Backwaters"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Soft Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

                {/* Location Tag (Top-Left inside Image) */}
                <div className="absolute top-3.5 left-3.5 bg-slate-950/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-md">
                  📍 Paravoor Mangroves, Varkala
                </div>

                {/* Rating Badge (Bottom Overlay inside Image) */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/60 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-sunset-500 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-sunset-500 text-sunset-500" />
                      ))}
                      <span className="text-xs font-black text-slate-900 ml-1">4.9 / 5.0</span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-800">Top Rated Backwater Experience in Varkala</p>
                  </div>
                  <span className="hidden sm:inline-block bg-mangrove-100 text-mangrove-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Trust Badge 1 (Top Right) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-sand-200 items-center gap-2.5 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 rounded-xl bg-mangrove-100 flex items-center justify-center text-mangrove-800 flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium leading-none">Guided Tours</p>
                  <p className="text-[11px] font-extrabold text-slate-900 mt-0.5">100% Safety Verified</p>
                </div>
              </div>

              {/* Floating Trust Badge 2 (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-mangrove-950/95 backdrop-blur-md text-white px-3.5 py-2.5 rounded-2xl shadow-2xl border border-mangrove-700/60 items-center gap-2.5 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-sand-300 font-medium leading-none">Beginner Friendly</p>
                  <p className="text-[11px] font-bold text-emerald-300 mt-0.5">No Swimming Needed</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Minimalist, Professional Typography & CTAs */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-5 text-left">
            
            {/* Eco Tour Operator Badge */}
            <div className="inline-flex items-center gap-1.5 bg-mangrove-100/90 border border-mangrove-300/80 text-mangrove-950 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-mangrove-700" />
              <span>OFFICIAL VARKALA ECO-TOUR OPERATOR</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                Nomadoo Varkala
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mangrove-800 via-mangrove-700 to-emerald-600">
                  Mangrove Kayaking
                </span>{" "}
                & Boating Tours
              </h1>
            </div>

            {/* Subheadline (Single Clean Paragraph) */}
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium max-w-xl">
              Glide through tranquil mangrove waterways near Varkala Cliff. Spot native wildlife and experience Kerala’s calmest backwater eco-adventure with certified safety guides.
            </p>

            {/* Minimalist Feature Tags (Pills layout) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-sand-200 shadow-sm text-xs font-bold text-slate-800">
                <Waves className="w-3.5 h-3.5 text-emerald-600" />
                <span>Single & Double Kayaks</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-sand-200 shadow-sm text-xs font-bold text-slate-800">
                <Sun className="w-3.5 h-3.5 text-sunset-500" />
                <span>Sunrise & Sunset Slots</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-sand-200 shadow-sm text-xs font-bold text-slate-800">
                <UserCheck className="w-3.5 h-3.5 text-mangrove-700" />
                <span>Certified Local Guides</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-sand-200 shadow-sm text-xs font-bold text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                <span>All Safety Gear Included</span>
              </div>
            </div>

            {/* Action Buttons & Quick Call */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                
                {/* Primary CTA */}
                <button
                  onClick={onBookClick}
                  className="flex items-center justify-center gap-2 bg-mangrove-900 hover:bg-mangrove-950 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-4 h-4 text-sunset-400" />
                  <span>Book Kayaking Now</span>
                  <ChevronRight className="w-3.5 h-3.5 text-mangrove-300" />
                </button>

                {/* WhatsApp Secondary CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20book%20a%20Mangrove%20Kayaking%20session.%20Please%20share%20available%20slots.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsappIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>

              </div>

              {/* Quick Contact & Location Note */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
                <span>Quick Call:</span>
                <a href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`} className="text-mangrove-800 font-bold hover:underline">
                  {CONTACT_PHONE_1}
                </a>
                <span>•</span>
                <span>~30 mins from Varkala Cliff</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
