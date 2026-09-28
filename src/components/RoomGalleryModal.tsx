import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Maximize2 } from 'lucide-react';
import { buildWhatsAppUrl, openSafeLink } from '../utils/whatsapp';

interface RoomGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  resortName: string;
  photos: string[];
  initialIndex?: number;
}

export const RoomGalleryModal: React.FC<RoomGalleryModalProps> = ({
  isOpen,
  onClose,
  roomName,
  resortName,
  photos,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photos.length]);

  if (!isOpen || !photos.length) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 35) handleNext();
    else if (diff < -35) handlePrev();
    touchStartX.current = null;
  };

  const handleWhatsAppBooking = () => {
    const url = buildWhatsAppUrl({
      resort: resortName,
      room: roomName,
    });
    openSafeLink(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-[#050807]/95 backdrop-blur-2xl text-[#ede9e0] select-none transition-opacity duration-300"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-[#1b2621] z-20">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#c5a059] block font-medium">
            {resortName}
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#faf8f5]">
            {roomName}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#8a9991] px-2.5 py-1 rounded bg-[#101713] border border-[#223129]">
            {currentIndex + 1} / {photos.length}
          </span>

          <button
            onClick={handleWhatsAppBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#121915] hover:bg-[#1f2b24] text-[#c9c5bd] hover:text-[#faf8f5] transition-colors"
            aria-label="Close Gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Large Visual Stage */}
      <div
        className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Nav Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-[#0a0f0d]/80 hover:bg-[#1a2620] border border-[#273830] text-[#f2efe9] hover:text-[#c5a059] transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Large Image */}
        <div className="relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center">
          <img
            src={photos[currentIndex]}
            alt={`${roomName} - View ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-[#23332b]/50 transition-all duration-300"
          />
        </div>

        {/* Nav Next */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-[#0a0f0d]/80 hover:bg-[#1a2620] border border-[#273830] text-[#f2efe9] hover:text-[#c5a059] transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="py-4 px-6 border-t border-[#1b2621] bg-[#090d0c] z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-x-auto max-w-full pb-1">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? 'border-[#c5a059] scale-105 shadow-md'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={photo}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="sm:hidden w-full">
          <button
            onClick={handleWhatsAppBooking}
            className="w-full py-2.5 rounded-lg bg-[#c5a059] text-[#090d0c] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
