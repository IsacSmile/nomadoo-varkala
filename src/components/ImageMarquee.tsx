import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/nomadooData';
import { Maximize2, X, Sparkles, Camera } from 'lucide-react';

export const ImageMarquee: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption: string } | null>(null);

  // Duplicate list to create seamless infinite loop
  const marqueeImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-mangrove-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sunset-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-mangrove-900/80 text-mangrove-300 border border-mangrove-700/60 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5 text-sunset-400" />
          <span>Visual Memories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Nomadoo Varkala Gallery Scroll
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Take a peak at real paddling moments, tranquil mangrove backwater tunnels, and golden sunset horizons.
        </p>
      </div>

      {/* Infinite Horizontal Image Marquee */}
      <div className="relative w-full overflow-hidden py-4 marquee-container">
        
        {/* Left & Right Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee">
          {marqueeImages.map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              onClick={() => setSelectedImage(img)}
              className="relative w-64 sm:w-80 h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 border-2 border-slate-800 hover:border-mangrove-500 transition-all duration-300 shadow-xl"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-sunset-400 transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-300 line-clamp-1">
                    {img.caption}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-mangrove-600 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
                <p className="text-xs text-slate-400">{selectedImage.caption}</p>
              </div>
              <a
                href="#booking"
                onClick={() => setSelectedImage(null)}
                className="bg-mangrove-600 hover:bg-mangrove-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-colors"
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
