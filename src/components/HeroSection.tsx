import React from 'react';
import { MessageCircle, Calendar, Sparkles, Shield, Compass, Star, ChevronRight } from 'lucide-react';
import { CONTACT_PHONE_1, WHATSAPP_NUMBER } from '../data/nomadooData';
import { WhatsappIcon } from './WhatsappIcon';

interface HeroSectionProps {
  onBookClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-sand-100 via-sand-50 to-white">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-mangrove-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sunset-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Large High-Quality Image with Floating Badges */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                  alt="Mangrove Kayaking in Varkala"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-sunset-500 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-sunset-500 text-sunset-500" />
                      ))}
                      <span className="text-xs font-bold text-slate-800 ml-1">4.9 / 5.0</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-700">Top Rated Backwater Activity in Varkala</p>
                  </div>
                  <span className="bg-mangrove-100 text-mangrove-800 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Paravoor Mangroves
                  </span>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Right) */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-white p-3.5 rounded-2xl shadow-xl border border-sand-200 items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-mangrove-100 flex items-center justify-center text-mangrove-700">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Guided Tours</p>
                  <p className="text-sm font-extrabold text-slate-900">100% Safety Verified</p>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-mangrove-900 text-white p-3.5 rounded-2xl shadow-xl border border-mangrove-700 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sunset-500/20 flex items-center justify-center text-sunset-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-sand-300 font-medium">Beginner Friendly</p>
                  <p className="text-sm font-bold text-white">No Swimming Needed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content & CTAs */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-mangrove-100/80 border border-mangrove-200 text-mangrove-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-mangrove-700" />
              <span>Official Varkala Eco-Tour Operator</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Nomadoo Varkala – <span className="text-transparent bg-clip-text bg-gradient-to-r from-mangrove-700 via-mangrove-600 to-emerald-600">Mangrove Kayaking</span> & Boating Tours
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-semibold text-mangrove-900/90 leading-snug">
              Explore serene mangrove waterways of Varkala with guided kayaking experiences.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Immersion into tranquil backwater tunnels, vibrant birdlife, and lush mangrove canals near Varkala Cliff. Whether you are a solo traveler, couple, or family, our guided kayaking and boat trips offer a refreshing, peaceful escape into Kerala’s pristine nature.
            </p>

            {/* Feature Pills Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-sand-100 p-2.5 rounded-xl border border-sand-200">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Single & Double Kayaks</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-sand-100 p-2.5 rounded-xl border border-sand-200">
                <div className="w-2 h-2 rounded-full bg-sunset-500" />
                <span>Sunrise & Sunset Slots</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-sand-100 p-2.5 rounded-xl border border-sand-200">
                <div className="w-2 h-2 rounded-full bg-mangrove-600" />
                <span>Certified Local Guides</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-sand-100 p-2.5 rounded-xl border border-sand-200">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span>All Safety Gear Provided</span>
              </div>
            </div>

            {/* Two Clear CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onBookClick}
                className="flex items-center justify-center gap-2.5 bg-mangrove-800 hover:bg-mangrove-900 text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5 text-sunset-500" />
                <span>Book Kayaking Now</span>
                <ChevronRight className="w-4 h-4 text-mangrove-200" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20book%20a%20Mangrove%20Kayaking%20session.%20Please%20share%20available%20slots.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsappIcon className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Contact & Location Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Quick Call:</span>
              <a href={`tel:${CONTACT_PHONE_1}`} className="hover:text-mangrove-700 underline font-medium">{CONTACT_PHONE_1}</a>
              <span>•</span>
              <span>Located ~30 mins from Varkala North Cliff</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
