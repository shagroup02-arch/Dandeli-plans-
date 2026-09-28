import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Images, Users, Check, MessageCircle } from 'lucide-react';
import { RoomOption } from '../data/resorts';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface RoomCardWithSwiperProps {
  room: RoomOption;
  resortName: string;
  onOpenRoomDetail: (room: RoomOption) => void;
  onOpenGallery: (photos: string[], roomName: string, resortName: string, initialIndex?: number) => void;
}

export const RoomCardWithSwiper: React.FC<RoomCardWithSwiperProps> = ({
  room,
  resortName,
  onOpenRoomDetail,
  onOpenGallery,
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalPhotos = room.photos.length;

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      setPhotoIndex((prev) => (prev + 1) % totalPhotos);
    } else if (diff < -40) {
      setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
    }
    touchStartX.current = null;
  };

  return (
    <div className="rounded-2xl bg-[#0f1713] border border-[#223329] hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group">
      <div>
        {/* Room Photo Gallery Container with Swipe & Arrow Controls */}
        <div
          className="relative h-60 overflow-hidden bg-[#070b09] select-none cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => onOpenGallery(room.photos, room.name, resortName, photoIndex)}
        >
          <img
            src={room.photos[photoIndex]}
            alt={`${room.name} - Photo ${photoIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1713] via-transparent to-black/30 pointer-events-none" />

          {/* Swipe Left Arrow */}
          {totalPhotos > 1 && (
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-[#0a0f0d]/80 hover:bg-[#1a2620] border border-[#273830] text-[#f2efe9] hover:text-[#c5a059] transition-all opacity-80 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Swipe Right Arrow */}
          {totalPhotos > 1 && (
            <button
              type="button"
              onClick={handleNextPhoto}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-[#0a0f0d]/80 hover:bg-[#1a2620] border border-[#273830] text-[#f2efe9] hover:text-[#c5a059] transition-all opacity-80 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Photo Dots Pagination Indicator */}
          {totalPhotos > 1 && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#090e0c]/80 backdrop-blur-md px-2 py-1 rounded-full border border-[#293d32]">
              {room.photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhotoIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    photoIndex === i
                      ? 'bg-[#c5a059] w-4'
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Photo Count Trigger Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenGallery(room.photos, room.name, resortName, photoIndex);
            }}
            className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#090e0c]/85 backdrop-blur-md text-[11px] font-medium text-[#ede9e0] hover:text-[#c5a059] border border-[#293d32] transition-colors cursor-pointer"
          >
            <Images className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Photo {photoIndex + 1} of {totalPhotos} (Tap to Fullscreen)</span>
          </button>

          {/* Capacity tag */}
          <div className="absolute top-3 right-3 z-10 bg-[#090e0c]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-[#ccd7d0] border border-[#293d32] flex items-center gap-1">
            <Users className="w-3 h-3 text-[#c5a059]" />
            <span>{room.capacity}</span>
          </div>
        </div>

        {/* Room Info */}
        <div className="p-5 space-y-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#c5a059] block font-semibold">
              {room.tag}
            </span>
            <h3 className="font-serif text-xl text-[#faf8f5] mt-0.5">
              {room.name}
            </h3>
            <p className="text-xs text-[#95a89e] mt-1 line-clamp-2 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Price per person */}
          <div className="p-3 rounded-xl bg-[#090f0c] border border-[#1d2d24]">
            <span className="text-[10px] uppercase tracking-wider text-[#82938a] block">
              Package Pricing
            </span>
            <div className="font-serif text-lg font-bold text-[#d9b870]">
              {room.pricingDisplay}
            </div>
            <span className="text-[10px] text-[#718279] block">
              3 Meals + Water Sports + Activities Included
            </span>
          </div>

          {/* Features */}
          <div className="space-y-1.5 text-xs text-[#b8c6bd]">
            {room.features.slice(0, 3).map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-[#c5a059] shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 pt-0 border-t border-[#1a2820] mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenRoomDetail(room)}
          className="flex-1 py-2.5 px-3 rounded-lg border border-[#293b30] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-[#faf8f5] text-center transition-colors cursor-pointer"
        >
          View Package
        </button>

        <a
          href={buildWhatsAppUrl({
            resort: resortName,
            room: room.name,
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
