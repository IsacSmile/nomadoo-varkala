import React from 'react';
import { ShieldCheck, Users, Sun, HeartHandshake, Compass, MapPin } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/nomadooData';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-mangrove-700" />,
    Users: <Users className="w-6 h-6 text-mangrove-700" />,
    Sun: <Sun className="w-6 h-6 text-sunset-500" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-mangrove-700" />
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Paragraph */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-mangrove-100 text-mangrove-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-mangrove-700" />
              <span>About Nomadoo Varkala</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Connecting You to Kerala’s Secret Mangrove Waterways
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Nomadoo operates in Varkala offering guided mangrove kayaking experiences. We partner with trusted locals to ensure every trip is safe, smooth, and memorable. Perfect for couples, families, solo travelers, and nature lovers.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Located around 30 minutes from the bustling Varkala Cliff, the Paravoor backwater estuary provides a pristine ecosystem untouched by heavy motor traffic. Here, quiet mangrove tunnels weave through calm waters where kingfishers, egrets, and fish jump in unison.
            </p>

            {/* Bullet Highlights Pill Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-mangrove-800">
                Core Highlights & Guarantees:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2 bg-sand-50 p-3 rounded-xl border border-sand-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Experienced Local Guides</span>
                </div>
                <div className="flex items-center gap-2 bg-sand-50 p-3 rounded-xl border border-sand-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Safety Gear Included</span>
                </div>
                <div className="flex items-center gap-2 bg-sand-50 p-3 rounded-xl border border-sand-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>100% Beginner-Friendly</span>
                </div>
                <div className="flex items-center gap-2 bg-sand-50 p-3 rounded-xl border border-sand-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Sunrise & Sunset Options</span>
                </div>
              </div>
            </div>

            {/* Location Tag */}
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-600 bg-sand-100 p-3.5 rounded-2xl border border-sand-200">
              <MapPin className="w-4 h-4 text-mangrove-700 flex-shrink-0" />
              <span>Location: Varkala / Paravoor mangroves area (≈30 min drive from Varkala Cliff)</span>
            </div>

          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_US_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-sand-50 to-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-mangrove-100 flex items-center justify-center shadow-inner">
                  {iconMap[feature.icon] || <ShieldCheck className="w-6 h-6 text-mangrove-700" />}
                </div>
                <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
