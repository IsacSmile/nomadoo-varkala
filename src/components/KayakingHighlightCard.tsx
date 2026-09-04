import React from 'react';
import { Clock, ShieldCheck, User, Users, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { MAIN_KAYAKING_ACTIVITY } from '../data/nomadooData';

interface KayakingHighlightCardProps {
  onSelectOption: (optionId: string) => void;
}

export const KayakingHighlightCard: React.FC<KayakingHighlightCardProps> = ({ onSelectOption }) => {
  return (
    <section id="kayaking-highlight" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-mangrove-100 text-mangrove-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-mangrove-700" />
            <span>Featured Highlight Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mangrove Kayaking in Varkala
          </h2>
          <p className="text-base text-slate-600">
            Our most popular eco-adventure. Paddle through calm backwaters, mangrove tunnels, and serene backwater canals.
          </p>
        </div>

        {/* Prominent Activity Showcase Card */}
        <div className="bg-gradient-to-br from-sand-50 via-white to-sand-100 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-mangrove-200/80 shadow-2xl relative overflow-hidden">
          
          {/* Top Decorative Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-mangrove-900 via-mangrove-800 to-mangrove-700 text-white px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-bl-2xl rounded-tr-3xl text-[11px] sm:text-xs font-black shadow-md flex items-center gap-1.5 z-10">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sunset-400" />
            <span>Most Popular Choice</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Image & Feature Badges */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] group">
                <img
                  src="/images/kayakers_canopy_tunnel.jpg"
                  alt="Varkala Mangrove Kayaking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-sunset-400 bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    Paravoor Backwaters, Varkala
                  </span>
                </div>
              </div>

              {/* Icon Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-xl border border-sand-200 shadow-sm text-center">
                  <Clock className="w-5 h-5 text-mangrove-700 mx-auto mb-1" />
                  <p className="text-xs font-bold text-slate-800">2 Hours 30 Mins</p>
                  <p className="text-[10px] text-slate-500">Trip Duration</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sand-200 shadow-sm text-center">
                  <Compass className="w-5 h-5 text-mangrove-700 mx-auto mb-1" />
                  <p className="text-xs font-bold text-slate-800">Guided Trip</p>
                  <p className="text-[10px] text-slate-500">Expert Supervision</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sand-200 shadow-sm text-center">
                  <ShieldCheck className="w-5 h-5 text-mangrove-700 mx-auto mb-1" />
                  <p className="text-xs font-bold text-slate-800">Safety Gear</p>
                  <p className="text-[10px] text-slate-500">Jackets & Paddles</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sand-200 shadow-sm text-center">
                  <Sparkles className="w-5 h-5 text-mangrove-700 mx-auto mb-1" />
                  <p className="text-xs font-bold text-slate-800">Beginner Safe</p>
                  <p className="text-[10px] text-slate-500">No Swim Needed</p>
                </div>
              </div>
            </div>

            {/* Right Column: Description & 1-Seater / 2-Seater Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {MAIN_KAYAKING_ACTIVITY.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium bg-sand-100/70 p-4 rounded-2xl border border-sand-200">
                  “{MAIN_KAYAKING_ACTIVITY.description}”
                </p>
              </div>

              {/* Seater Options Grid */}
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-mangrove-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-mangrove-600" />
                  Choose Your Preferred Kayak Seater:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* 1-Seater Kayak Card */}
                  <div className="bg-white p-5 rounded-2xl border-2 border-mangrove-200 hover:border-mangrove-600 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-mangrove-100 text-mangrove-800 flex items-center justify-center font-bold">
                          <User className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase bg-sunset-100 text-sunset-800 px-2 py-0.5 rounded-md">
                          Single
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">1-Seater Kayak</h4>
                      <p className="text-xs text-slate-600">
                        Designed for single paddler. Maximum agility & freedom to navigate narrow channels.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectOption('kayak-1seater')}
                      className="mt-4 w-full bg-mangrove-700 hover:bg-mangrove-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Select 1-Seater & Book</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* 2-Seater Kayak Card */}
                  <div className="bg-white p-5 rounded-2xl border-2 border-mangrove-200 hover:border-mangrove-600 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-mangrove-100 text-mangrove-800 flex items-center justify-center font-bold">
                          <Users className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase bg-mangrove-100 text-mangrove-900 px-2 py-0.5 rounded-md">
                          Double / Tandem
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">2-Seater Kayak</h4>
                      <p className="text-xs text-slate-600">
                        Share the paddling effort together. Perfect for couples, friends, or parent & kid.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectOption('kayak-2seater')}
                      className="mt-4 w-full bg-mangrove-700 hover:bg-mangrove-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Select 2-Seater & Book</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>

              {/* Bottom Quick Feature Bullet list */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600 border-t border-sand-200">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Life jackets included</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free photo/video assistance</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Locker facility</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
