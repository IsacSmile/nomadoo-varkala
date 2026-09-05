import React, { useState, useEffect, memo } from 'react';
import { Calendar, Sparkles, ShieldCheck, Star, ChevronRight, Sun, UserCheck, Waves, ChevronLeft } from 'lucide-react';
import { CONTACT_PHONE_1, WHATSAPP_NUMBER, GOOGLE_MAPS_LINK } from '../data/nomadooData';
import { WhatsappIcon } from './WhatsappIcon';

interface HeroSectionProps {
  onBookClick: () => void;
}

const HERO_PHOTOS = [
  {
    url: "/images/yolo_kayak_relaxing.jpg",
    title: "Guided Mangrove Kayaking in Varkala",
    location: "Paravoor Mangroves, Varkala"
  },
  {
    url: "/images/mangrove_tunnel_canopy.jpg",
    title: "Secret Green Canopy Passages",
    location: "Untouched Mangrove Tunnels"
  },
  {
    url: "/images/sunset_floating.jpg",
    title: "Golden Hour Sunset Floating",
    location: "Tranquil Paravoor Waters"
  },
  {
    url: "/images/group_paddlers.jpg",
    title: "Happy Group Kayaking Trips",
    location: "Varkala Backwater Islands"
  },
  {
    url: "/images/tandem_kayak_blue_sky.jpg",
    title: "Tandem Double Seater Kayaks",
    location: "Perfect for Couples & Friends"
  },
  {
    url: "/images/mangrove_roots_couple.jpg",
    title: "Up-Close Ecological Trails",
    location: "Mangrove Root Habitats"
  },
  {
    url: "/images/sunset_silhouette_paddle.jpg",
    title: "Unforgettable Sunset Moments",
    location: "Golden Hour Photo Spots"
  }
];

// Isolated slideshow component so slide changes never re-render the hero text
const HeroSlideshow: React.FC = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_PHOTOS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_PHOTOS.length) % HERO_PHOTOS.length);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] group bg-slate-900">
      
      {/* Smooth CSS crossfade between slides - No Framer Motion scale/buffer recalculations */}
      {HERO_PHOTOS.map((photo, index) => (
        <img
          key={photo.url}
          src={photo.url}
          alt={photo.title}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'
          }`}
        />
      ))}

      {/* Soft Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent pointer-events-none z-10" />

      {/* Clickable Location Tag */}
      <a
        href={GOOGLE_MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3.5 left-3.5 max-w-[calc(100%-140px)] sm:max-w-xs bg-slate-950/90 sm:backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-md transition-colors flex items-center gap-1 z-20 shrink min-w-0"
      >
        <span className="truncate">📍 {HERO_PHOTOS[currentSlide].location}</span>
      </a>

      {/* Manual Navigation Controls & Slide Dots */}
      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-20 bg-slate-950/80 sm:backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
        <button
          onClick={prevSlide}
          className="w-5 h-5 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        
        <div className="flex gap-1 px-1">
          {HERO_PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentSlide ? 'bg-sunset-400 w-3' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-5 h-5 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Rating & Active Slide Caption */}
      <a
        href={GOOGLE_MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 right-3 bg-white sm:bg-white/95 sm:backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/80 shadow-xl flex items-center justify-between z-20 transition-all hover:scale-[1.01] group/review"
        title="View Google Reviews & Directions"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-sunset-500 mb-0.5 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-sunset-500 text-sunset-500" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-black text-slate-900 ml-1 group-hover/review:text-mangrove-900 transition-colors">
              4.9 ★ <span className="text-slate-600 font-bold underline decoration-sand-300 group-hover/review:decoration-mangrove-500">(876+ Google Reviews)</span>
            </span>
          </div>
          <p className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">
            {HERO_PHOTOS[currentSlide].title}
          </p>
        </div>
      </a>

    </div>
  );
});

HeroSlideshow.displayName = 'HeroSlideshow';

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-20 overflow-hidden bg-gradient-to-b from-sand-100/70 via-sand-50/40 to-white">
      
      {/* Soft Ambient Background Glows - Hidden on mobile to eliminate heavy blur filters and GPU tearing */}
      <div className="hidden sm:block absolute top-12 left-10 w-96 h-96 bg-mangrove-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-12 right-12 w-96 h-96 bg-sunset-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Side: Auto-Rotating Hero Image Slideshow (Isolated component) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <HeroSlideshow />
            </div>
          </div>

          {/* Right Side: Completely Static, Stable Typography & CTAs on Mobile */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-5 text-left relative z-10">
            
            {/* Badges & Trust Header */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 bg-mangrove-100 border border-mangrove-300/80 text-mangrove-950 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-mangrove-700" />
                <span>OFFICIAL VARKALA ECO-TOUR OPERATOR</span>
              </div>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-sand-50 border border-sand-300 hover:border-sand-400 text-slate-900 px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm transition-colors cursor-pointer"
                title="Open Google Maps & Reviews"
              >
                <div className="flex items-center gap-0.5 text-sunset-500">
                  <Star className="w-3.5 h-3.5 fill-sunset-500 text-sunset-500" />
                </div>
                <span>4.9 ★</span>
                <span className="text-slate-400 font-normal">•</span>
                <span className="text-slate-700 font-bold hover:underline">876+ Google Reviews</span>
              </a>
            </div>

            {/* Main Headline: Solid color on mobile to completely prevent text-masking / compositor glitches; gradient on desktop */}
            <div className="relative">
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                Nomadoo Varkala
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
                <span className="text-mangrove-800 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-mangrove-800 sm:via-mangrove-700 sm:to-emerald-600">
                  Mangrove Kayaking
                </span>{" "}
                & Boating Tours
              </h1>
            </div>

            {/* Subheadline (Single Clean Paragraph) */}
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium max-w-xl">
              Glide through tranquil mangrove waterways near Varkala Cliff. Spot native wildlife and experience Kerala’s calmest backwater eco-adventure with certified safety guides.
            </p>

            {/* Feature Tags (Pills layout) */}
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
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center">
                
                {/* Primary CTA */}
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-mangrove-900 via-mangrove-850 to-mangrove-950 hover:from-mangrove-950 hover:to-mangrove-900 text-white font-extrabold text-xs sm:text-sm px-3.5 sm:px-6 py-3 rounded-full shadow-lg shadow-mangrove-950/20 border border-mangrove-700/40 transition-colors sm:hover:-translate-y-0.5"
                >
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sunset-400 shrink-0" />
                  <span className="truncate">Book Kayaking</span>
                  <ChevronRight className="hidden sm:inline-block w-3.5 h-3.5 text-mangrove-300" />
                </button>

                {/* WhatsApp Secondary CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nomadoo%20Varkala!%20I%20want%20to%20book%20a%20Mangrove%20Kayaking%20session.%20Please%20share%20available%20slots.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm px-3.5 sm:px-5 py-3 rounded-full shadow-md shadow-emerald-600/20 border border-emerald-400/30 transition-colors sm:hover:-translate-y-0.5"
                >
                  <WhatsappIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
                  <span className="truncate">WhatsApp Us</span>
                </a>

              </div>

              {/* Quick Contact & Location Note */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
                <span>Quick Call:</span>
                <a href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`} className="text-mangrove-800 font-bold hover:underline">
                  {CONTACT_PHONE_1}
                </a>
                <span>•</span>
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-mangrove-800 font-bold hover:underline">
                  📍 Google Maps Directions
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
