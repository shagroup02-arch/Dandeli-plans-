import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_PHONE, buildWhatsAppUrl, getTelUrl } from '../utils/whatsapp';

interface FloatingContactBarProps {
  onOpenBookingStrip: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBookingStrip }) => {
  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Direct Call Button */}
        <a
          href={getTelUrl()}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#111915]/95 hover:bg-[#18241e] border border-[#273a2f] hover:border-[#c5a059] text-[#f2efe9] text-xs font-medium shadow-2xl transition-all duration-200 backdrop-blur-md"
          aria-label={`Call Dandeli Plans at ${CONTACT_PHONE}`}
        >
          <div className="w-7 h-7 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono tabular-nums">{CONTACT_PHONE}</span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#090d0c] font-semibold text-xs tracking-wider uppercase shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with Dandeli Plans"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Booking Bar (Safe Height, Strict <=15% Cap) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090e0c]/98 backdrop-blur-lg border-t border-[#1f2f26] px-3 py-2.5 shadow-2xl">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
          {/* Call CTA */}
          <a
            href={getTelUrl()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg border border-[#223329] bg-[#111915] text-[#d6d2c8] text-[11px] font-medium active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#c5a059] mb-0.5" />
            <span>Call</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] text-[#090d0c] font-semibold text-[11px] active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Book Now Quick Trigger */}
          <button
            onClick={onOpenBookingStrip}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#c5a059] text-[#090d0c] font-semibold text-[11px] active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </>
  );
};
