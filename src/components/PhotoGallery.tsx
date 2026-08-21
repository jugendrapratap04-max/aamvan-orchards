import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG, type GalleryItem } from '../config/businessConfig';

export const PhotoGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Orchard', 'Harvest', 'Packaging', 'Logistics'];

  const filteredItems = selectedFilter === 'All'
    ? BUSINESS_CONFIG.gallery
    : BUSINESS_CONFIG.gallery.filter((item) => item.category === selectedFilter);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="relative py-24 bg-[#050d09] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            Orchard & Supply Gallery.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Real photographic glimpses into our trees, harvest handpicking, bulk crate packaging, and freight loading operations.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                selectedFilter === cat
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'glass-panel text-slate-300 border-white/5 hover:border-amber-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative rounded-3xl overflow-hidden glass-panel border-amber-500/20 shadow-xl cursor-pointer ${
                item.aspect === 'wide' ? 'md:col-span-2 aspect-16/9' : item.aspect === 'tall' ? 'aspect-3/4' : 'aspect-4/3'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-amber-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 uppercase">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1))}
            className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0))}
            className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={activeLightboxItem.image}
              alt={activeLightboxItem.title}
              className="max-h-[65vh] w-auto object-contain rounded-2xl border border-amber-500/30 shadow-2xl mb-6"
            />
            <div className="text-center">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-1">
                {activeLightboxItem.category}
              </span>
              <h3 className="text-2xl font-serif text-white mb-2">
                {activeLightboxItem.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-xl font-light">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
