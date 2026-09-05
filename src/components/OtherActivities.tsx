import React from 'react';
import { motion } from 'framer-motion';
import { OTHER_ACTIVITIES, Activity } from '../data/nomadooData';
import { Clock, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface OtherActivitiesProps {
  onSelectActivity: (activityId: string) => void;
}

export const OtherActivities: React.FC<OtherActivitiesProps> = ({ onSelectActivity }) => {
  return (
    <section id="activities" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sand-50 to-sand-100/50 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-mangrove-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 bg-mangrove-100 border border-mangrove-200 text-mangrove-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sunset-500" />
            <span>More Water Adventures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Other <span className="text-transparent bg-clip-text bg-gradient-to-r from-mangrove-800 to-emerald-600">Mangrove & Boating</span> Experiences
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From peaceful traditional wooden country boats to exhilarating speed boat rides, explore Varkala’s backwaters your way.
          </p>
        </motion.div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {OTHER_ACTIVITIES.map((activity: Activity, index: number) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-sand-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback image if unsplash URL fails
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Highlight Badge */}
                  {activity.highlightBadge && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-slate-950/90 to-mangrove-950/90 backdrop-blur-md text-emerald-400 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md border border-white/20">
                      {activity.highlightBadge}
                    </span>
                  )}

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                    <Clock className="w-3.5 h-3.5 text-sunset-400" />
                    <span>{activity.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <div className="text-[11px] font-extrabold text-mangrove-800 uppercase tracking-wider mb-1">
                      {activity.type} • {activity.capacity}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-mangrove-900 transition-colors">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {activity.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-3 border-t border-sand-100">
                    {activity.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onSelectActivity(activity.id)}
                  className="w-full bg-gradient-to-r from-mangrove-800 to-mangrove-900 hover:from-mangrove-950 hover:to-slate-900 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl transform group-hover:scale-[1.02]"
                >
                  <span>Select & Book Experience</span>
                  <ArrowRight className="w-4 h-4 text-sunset-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
