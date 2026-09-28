import React, { useState } from 'react';
import { Images, Maximize2, Sparkles, Compass, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { JUNGLE_RESORT_GALLERY, JungleGalleryItem } from '../data/jungleResortGallery';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface JungleResortGalleryProps {
  onOpenGallery: (photos: string[], roomName: string, resortName: string, initialIndex?: number) => void;
}

export const JungleResortGallery: React.FC<JungleResortGalleryProps> = ({ onOpenGallery }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos', count: JUNGLE_RESORT_GALLERY.length },
    {
      id: 'stays',
      label: 'Cottages & Stays',
      count: JUNGLE_RESORT_GALLERY.filter((i) => i.category === 'stays').length,
    },
    {
      id: 'grounds',
      label: 'Resort Grounds',
      count: JUNGLE_RESORT_GALLERY.filter((i) => i.category === 'grounds').length,
    },
    {
      id: 'amenities',
      label: 'Dining & Amenities',
      count: JUNGLE_RESORT_GALLERY.filter((i) => i.category === 'amenities').length,
    },
    {
      id: 'activities',
      label: 'Adventure & Nature',
      count: JUNGLE_RESORT_GALLERY.filter((i) => i.category === 'activities').length,
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? JUNGLE_RESORT_GALLERY
      : JUNGLE_RESORT_GALLERY.filter((item) => item.category === activeCategory);

  const allPhotoUrls = JUNGLE_RESORT_GALLERY.map((item) => item.url);

  const handlePhotoClick = (item: JungleGalleryItem) => {
    const fullIndex = JUNGLE_RESORT_GALLERY.findIndex((i) => i.id === item.id);
    onOpenGallery(
      allPhotoUrls,
      'Resort Gallery',
      'Dandeli Jungle Resort',
      fullIndex >= 0 ? fullIndex : 0
    );
  };

  return (
    <section id="jungle-resort-gallery" className="space-y-6 pt-6 scroll-mt-28">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121f19] via-[#0d1612] to-[#080d0b] border border-[#23382d] shadow-2xl relative overflow-hidden">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2b23] border border-[#2f4a3c] text-[11px] font-semibold text-[#d9b870] uppercase tracking-widest">
            <Images className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Official Photo Gallery</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#faf8f5] tracking-tight">
            Dandeli Jungle Resort Visual Experience
          </h3>

          <p className="text-xs sm:text-sm text-[#9eb0a6] max-w-2xl leading-relaxed">
            Experience our hand-crafted eco-cottages, multi-sharing family accommodations, lush teakwood canopies, sparkling swimming pool, campfire lawn, and Kali river excursions.
          </p>
        </div>

        {/* Quick Actions & Counter */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handlePhotoClick(JUNGLE_RESORT_GALLERY[0])}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View Fullscreen Gallery ({JUNGLE_RESORT_GALLERY.length})</span>
          </button>

          <a
            href={buildWhatsAppUrl({ resort: 'Dandeli Jungle Resort' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2d4236] bg-[#101914] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-[#faf8f5] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Check Availability</span>
          </a>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#c5a059] text-[#090d0c] font-semibold shadow-md'
                  : 'bg-[#101814] text-[#a4b4ab] border border-[#1f2f25] hover:text-[#f5f2eb] hover:border-[#2f4a3c]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-[#090d0c]/20 text-[#090d0c]' : 'bg-[#18241e] text-[#86998f]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filteredItems.map((item, idx) => {
          return (
            <div
              key={item.id}
              onClick={() => handlePhotoClick(item)}
              className="group relative rounded-xl overflow-hidden bg-[#0c1410] border border-[#1c2d24] hover:border-[#c5a059] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.url}
                alt={`Dandeli Jungle Resort Photo ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gentle Hover Tint & Expand Icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="p-3 rounded-full bg-[#090d0c]/85 text-[#c5a059] border border-[#2a3c31] opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-xl">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Inclusions Note for Dandeli Jungle Resort */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#0e1612] border border-[#1e2e25] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-[#a7b8ae]">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
          <span>
            All resort photos are taken on-location at Dandeli Jungle Resort. Every room booking includes 3 buffet meals, swimming pool access, and 3 water activities.
          </span>
        </div>

        <button
          type="button"
          onClick={() => handlePhotoClick(JUNGLE_RESORT_GALLERY[0])}
          className="shrink-0 text-xs font-semibold text-[#c5a059] hover:underline inline-flex items-center gap-1"
        >
          <span>Open Lightbox Viewer</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
