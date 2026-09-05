import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Sun, HeartHandshake, Compass, MapPin, Sparkles, Navigation, Camera } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/nomadooData';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-mangrove-800" />,
    Users: <Users className="w-6 h-6 text-mangrove-800" />,
    Sun: <Sun className="w-6 h-6 text-sunset-500" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-mangrove-800" />
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sand-50 to-white relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="hidden sm:block absolute top-1/2 left-0 w-96 h-96 bg-mangrove-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-sunset-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Story & Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 bg-mangrove-100 border border-mangrove-200 text-mangrove-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-mangrove-700" />
              <span>About Nomadoo Varkala</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-mangrove-800 via-emerald-700 to-sunset-500">Nomadoo Varkala</span>
            </h2>

            <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-medium">
              Nomadoo is a booking partner specializing in Mangrove Kayaking and Boating experiences in Varkala. We connect travelers with trusted local operators to explore the calm and scenic mangrove forests, discover hidden waterways, and experience nature up close.
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold bg-sand-100/80 p-4 rounded-2xl border border-sand-200">
              Nomadoo was founded by <strong className="text-mangrove-900">PARSH</strong> a passionate kayaker and <strong className="text-mangrove-900">SONA</strong>, an adventure and nature enthusiast. Together, we aim to create safe, peaceful, and memorable mangrove experiences for beginners, families, and nature lovers alike.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              At Nomadoo, every journey through the mangroves is more than just an activity — it’s a moment to connect with nature and unwind from the rush of daily life.
            </p>

            {/* Bullet Highlights Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-mangrove-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sunset-500" />
                <span>Our Core Guarantees</span>
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-800">
                <div className="flex items-center gap-2 bg-white/90 p-3 rounded-2xl border border-sand-200/90 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>Native Local Guides</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 p-3 rounded-2xl border border-sand-200/90 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>Safety Gear Included</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 p-3 rounded-2xl border border-sand-200/90 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>100% Non-Swimmer Safe</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 p-3 rounded-2xl border border-sand-200/90 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>Golden Hour Slots</span>
                </div>
              </div>
            </div>

            {/* Enhanced Location Card */}
            <div className="pt-2 flex items-center justify-between gap-3 text-xs font-semibold text-slate-700 bg-sand-100/90 p-4 rounded-2xl border border-sand-200/90 shadow-sm">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-mangrove-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sunset-400" />
                </div>
                <span className="truncate">Paravoor Mangrove Estuary (30 mins from Varkala Cliff)</span>
              </div>
              <a
                href="https://maps.google.com/?q=Paravoor+Mangrove+Varkala"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-mangrove-800 hover:text-mangrove-950 underline shrink-0"
              >
                <Navigation className="w-3 h-3" />
                <span>Map</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Animated Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {WHY_US_FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-3xl border border-sand-200 hover:border-mangrove-300 shadow-md hover:shadow-xl transition-all space-y-3 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-mangrove-50/50 rounded-full blur-xl pointer-events-none group-hover:bg-mangrove-100/60 transition-colors" />

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-mangrove-100 to-sand-100 border border-mangrove-200/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {iconMap[feature.icon] || <ShieldCheck className="w-6 h-6 text-mangrove-800" />}
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-mangrove-900 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Real Mangrove Nature & Wildlife Photography Spotlight Strip */}
        <div className="pt-8 border-t border-sand-200/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-mangrove-800 uppercase tracking-widest">
                <Camera className="w-4 h-4 text-sunset-500" />
                <span>Authentic Ecosystem Photography</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Real Wildlife Spotted on Our Kayak Tours
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative h-60 rounded-3xl overflow-hidden shadow-lg border border-sand-200 group">
              <img src="/images/brahminy_kite_eagle.jpg" alt="Brahminy Kite Eagle in Varkala Mangroves" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-white font-extrabold text-xs">Brahminy Sea Eagle</span>
                <span className="text-sand-300 text-[11px]">Frequently spotted perched on mangrove branches</span>
              </div>
            </div>

            <div className="relative h-60 rounded-3xl overflow-hidden shadow-lg border border-sand-200 group">
              <img src="/images/mangrove_heron_bird.jpg" alt="Western Reef Heron in Mangrove Shoots" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-white font-extrabold text-xs">Western Reef Heron</span>
                <span className="text-sand-300 text-[11px]">Foraging peacefully around pneumatic mangrove root shoots</span>
              </div>
            </div>

            <div className="relative h-60 rounded-3xl overflow-hidden shadow-lg border border-sand-200 group">
              <img src="/images/openbill_stork_nature.jpg" alt="Asian Openbill Stork in Varkala Backwaters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-white font-extrabold text-xs">Asian Openbill Stork</span>
                <span className="text-sand-300 text-[11px]">Feeding on snails in shallow backwater beds</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
