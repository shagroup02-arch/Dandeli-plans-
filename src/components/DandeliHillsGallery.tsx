import React from 'react';
import { Images, Maximize2, CheckCircle2, MessageCircle } from 'lucide-react';
import { DANDELI_HILLS_GALLERY } from '../data/dandeliHillsGallery';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface DandeliHillsGalleryProps {
  onOpenGallery: (photos: string[], roomName: string, resortName: string, initialIndex?: number) => void;
}

export const DandeliHillsGallery: React.FC<DandeliHillsGalleryProps> = ({ onOpenGallery }) => {
  const allPhotoUrls = DANDELI_HILLS_GALLERY.map((item) => item.url);

  const handlePhotoClick = (index: number = 0) => {
    onOpenGallery(
      allPhotoUrls,
      'Resort Gallery',
      'Dandeli Hills Resort',
      index
    );
  };

  return (
    <section id="dandeli-hills-gallery" className="space-y-6 pt-6 scroll-mt-28">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121f19] via-[#0d1612] to-[#080d0b] border border-[#23382d] shadow-2xl relative overflow-hidden">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2b23] border border-[#2f4a3c] text-[11px] font-semibold text-[#d9b870] uppercase tracking-widest">
            <Images className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Resort Photo Gallery</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#faf8f5] tracking-tight">
            Dandeli Hills Resort Gallery
          </h3>

          <p className="text-xs sm:text-sm text-[#9eb0a6] max-w-2xl leading-relaxed">
            Browse genuine on-location photography of Dandeli Hills Resort including hill-view rooms, triplex suites, family accommodations, panoramic viewpoints, and campfire grounds.
          </p>
        </div>

        {/* Quick Actions & Counter */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handlePhotoClick(0)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Open Gallery ({DANDELI_HILLS_GALLERY.length} Photos)</span>
          </button>

          <a
            href={buildWhatsAppUrl({ resort: 'Dandeli Hills Resort' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2d4236] bg-[#101914] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-[#faf8f5] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Check Availability</span>
          </a>
        </div>
      </div>

      {/* Gallery Grid - Clean Pure Photos with Zero Text Overlays */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {DANDELI_HILLS_GALLERY.map((item, idx) => {
          return (
            <div
              key={item.id}
              onClick={() => handlePhotoClick(idx)}
              className="group relative rounded-xl overflow-hidden bg-[#0c1410] border border-[#1c2d24] hover:border-[#c5a059] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.url}
                alt={item.alt}
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

      {/* Bottom Inclusions Note for Dandeli Hills Resort */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#0e1612] border border-[#1e2e25] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-[#a7b8ae]">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
          <span>
            Verified on-location photography of Dandeli Hills Resort. Every stay package includes 3 hot buffet meals, hill views, campfire, and Kali River adventure sports.
          </span>
        </div>

        <button
          type="button"
          onClick={() => handlePhotoClick(0)}
          className="shrink-0 text-xs font-semibold text-[#c5a059] hover:underline inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Open Fullscreen Gallery</span>
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
