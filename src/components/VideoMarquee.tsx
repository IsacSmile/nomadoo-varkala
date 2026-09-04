import React, { useState } from 'react';
import { GALLERY_VIDEOS } from '../data/nomadooData';
import { Play, X, Video } from 'lucide-react';

export const VideoMarquee: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string; poster: string; description: string } | null>(null);

  // Duplicate list to create continuous infinite scroll
  const marqueeVideos = [...GALLERY_VIDEOS, ...GALLERY_VIDEOS, ...GALLERY_VIDEOS];

  return (
    <section className="py-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sunset-500/20 flex items-center justify-center text-sunset-500">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Video Reels & Clip Highlights</h3>
            <p className="text-xs text-slate-400">See real action on the Varkala mangrove backwaters</p>
          </div>
        </div>
        <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Auto-Scrolling Video Strip
        </span>
      </div>

      {/* Infinite Horizontal Video Marquee (Reverse direction) */}
      <div className="relative w-full overflow-hidden py-2 marquee-container">
        
        {/* Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-reverse">
          {marqueeVideos.map((vid, idx) => (
            <div
              key={`${vid.id}-${idx}`}
              onClick={() => setActiveVideo(vid)}
              className="relative w-64 sm:w-72 h-40 sm:h-44 rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 border border-slate-800 hover:border-sunset-500 transition-all duration-300 shadow-xl"
            >
              <img
                src={vid.poster}
                alt={vid.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

              {/* Centered Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-sunset-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                  <Play className="w-6 h-6 fill-slate-950 ml-1" />
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white line-clamp-1">{vid.title}</span>
                  <span className="text-[10px] bg-slate-900/90 text-sunset-400 font-mono px-1.5 py-0.5 rounded border border-slate-700">
                    {vid.duration}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <img
                src={activeVideo.poster}
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-950/60 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-sunset-500 text-slate-950 flex items-center justify-center mb-4 shadow-xl">
                  <Play className="w-8 h-8 fill-slate-950 ml-1" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{activeVideo.title}</h4>
                <p className="text-xs text-slate-300 max-w-md">{activeVideo.description}</p>
                <p className="text-[11px] text-sunset-400 font-semibold mt-3">
                  (Live video streams available on WhatsApp request)
                </p>
              </div>
            </div>
            <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Duration: {activeVideo.duration}</span>
              <a
                href="#booking"
                onClick={() => setActiveVideo(null)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md"
              >
                Book This Trip Now
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
