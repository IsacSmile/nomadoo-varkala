import React from 'react';
import { OTHER_ACTIVITIES, Activity } from '../data/nomadooData';
import { Clock, ShieldCheck, Users, ArrowRight, Check } from 'lucide-react';

interface OtherActivitiesProps {
  onSelectActivity: (activityId: string) => void;
}

export const OtherActivities: React.FC<OtherActivitiesProps> = ({ onSelectActivity }) => {
  return (
    <section id="activities" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-mangrove-700 bg-mangrove-100 px-3 py-1 rounded-full">
            More Water Adventures
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Other Mangrove & Boating Experiences
          </h2>
          <p className="text-base text-slate-600">
            From peaceful traditional wooden country boats to exhilarating speed boat rides, explore Varkala’s backwaters your way.
          </p>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OTHER_ACTIVITIES.map((activity: Activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Highlight Badge */}
                  {activity.highlightBadge && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-mangrove-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-white">
                      {activity.highlightBadge}
                    </span>
                  )}

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-sunset-400" />
                    <span>{activity.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-mangrove-700 uppercase tracking-wider mb-1">
                      {activity.type} • {activity.capacity}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-mangrove-700 transition-colors">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 pt-2 border-t border-sand-100">
                    {activity.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectActivity(activity.id)}
                  className="w-full bg-sand-100 hover:bg-mangrove-800 text-mangrove-900 hover:text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-sm border border-sand-200"
                >
                  <span>Select & Book Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
