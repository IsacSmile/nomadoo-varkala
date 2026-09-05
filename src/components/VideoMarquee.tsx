import React, { useState } from 'react';
import { GALLERY_VIDEOS, VideoItem } from '../data/nomadooData';
import { Play, X, Video, Sparkles, Volume2 } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export const VideoMarquee: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Duplicate list to create continuous infinite scroll
  const marqueeVideos = [...GALLERY_VIDEOS, ...GALLERY_VIDEOS, ...GALLERY_VIDEOS];

  return (
    <section className="py-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      
      {/* Background Decor */}
      <div className="hidden sm:block absolute top-0 right-1/4 w-96 h-96 bg-mangrove-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sunset-500/30 to-sunset-600/10 border border-sunset-500/30 flex items-center justify-center text-sunset-400 shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white">Video Reels & Action Shorts</h3>
            <p className="text-xs text-slate-400">Click any reel to play live backwater kayaking video footage</p>
          </div>
        </div>

        <span className="text-[11px] text-emerald-400 font-extrabold tracking-wider bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive Player</span>
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
                  ▶ {vid.duration}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* HTML5 Live Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                poster={activeVideo.poster}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support HTML5 video playback.
              </video>
            </div>

            {/* Video Details & Action Footer */}
            <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-base sm:text-xl font-extrabold text-white flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-sunset-400 shrink-0" />
                    <span>{activeVideo.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>
                <span className="text-xs font-bold text-sunset-400 bg-sunset-500/10 px-3 py-1 rounded-full border border-sunset-500/20 shrink-0">
                  {activeVideo.duration}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-800">
                <a
                  href={`https://wa.me/919446110362?text=Hi%20Nomadoo!%20I%20saw%20the%20video%20"${encodeURIComponent(activeVideo.title)}"%20and%20want%20to%20book.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-md transition-all"
                >
                  <WhatsappIcon className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href="#booking"
                  onClick={() => setActiveVideo(null)}
                  className="inline-flex items-center justify-center gap-2 bg-mangrove-800 hover:bg-mangrove-900 text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4 text-sunset-400" />
                  <span>Reserve Kayak Slot</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
