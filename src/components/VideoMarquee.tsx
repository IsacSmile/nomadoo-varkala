import React, { useState } from 'react';
import { GALLERY_VIDEOS } from '../data/nomadooData';
import { Play, X, Video, Sparkles } from 'lucide-react';

export const VideoMarquee: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string; duration: string; poster: string; description: string } | null>(null);

  // Duplicate list to create continuous infinite scroll
  const marqueeVideos = [...GALLERY_VIDEOS, ...GALLERY_VIDEOS, ...GALLERY_VIDEOS];

  return (
    <section className="py-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-mangrove-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sunset-500/30 to-sunset-600/10 border border-sunset-500/30 flex items-center justify-center text-sunset-400 shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white">Video Reels & Action Shorts</h3>
            <p className="text-xs text-slate-400">Real action clips from Varkala mangrove backwater tours</p>
          </div>
        </div>

        <span className="text-[11px] text-emerald-400 font-extrabold tracking-wider bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Action Reels</span>
        </span>
      </div>

      {/* Infinite Horizontal Video Marquee */}
      <div className="relative w-full overflow-hidden py-2 marquee-container">
        
        {/* Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-reverse">
          {marqueeVideos.map((vid, idx) => (
            <div
              key={`${vid.id}-${idx}`}
              onClick={() => setActiveVideo(vid)}
              className="relative w-64 sm:w-72 h-40 sm:h-44 rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 border border-slate-800 hover:border-sunset-500/80 transition-all duration-300 shadow-2xl"
            >
              <img
                src={vid.poster}
                alt={vid.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent group-hover:via-slate-950/10 transition-colors" />

              {/* Centered Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-sunset-500 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 flex items-center justify-between gap-2">
                <span className="font-extrabold text-xs text-white truncate drop-shadow-md">{vid.title}</span>
                <span className="text-[10px] bg-slate-900/90 text-sunset-400 font-bold px-2 py-0.5 rounded-full border border-slate-700/80 shrink-0">
                  {vid.duration}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video bg-black relative flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.poster}
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-950/70 backdrop-blur-sm space-y-3">
                <div className="w-14 h-14 rounded-full bg-sunset-500 text-slate-950 flex items-center justify-center shadow-2xl">
                  <Play className="w-7 h-7 fill-slate-950 ml-1" />
                </div>
                <h4 className="text-lg font-extrabold text-white">{activeVideo.title}</h4>
                <p className="text-xs text-slate-300 max-w-md leading-relaxed">{activeVideo.description}</p>
                <div className="inline-flex items-center gap-1.5 text-[11px] text-sunset-400 font-bold bg-sunset-500/10 px-3 py-1 rounded-full border border-sunset-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request full HD video reel on WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Duration: {activeVideo.duration}</span>
              <a
                href="#booking"
                onClick={() => setActiveVideo(null)}
                className="bg-mangrove-800 hover:bg-mangrove-900 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md transition-all"
              >
                Book This Experience
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
