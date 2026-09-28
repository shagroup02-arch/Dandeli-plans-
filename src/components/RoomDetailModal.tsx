import React, { useState } from 'react';
import { X, Users, Utensils, Compass, Waves, Calendar, MessageCircle, Phone, Sparkles, Check, Images } from 'lucide-react';
import { RoomOption, SHARED_PACKAGE_INFO } from '../data/resorts';
import { CONTACT_PHONE, buildWhatsAppUrl, getTelUrl, openSafeLink } from '../utils/whatsapp';

interface RoomDetailModalProps {
  room: RoomOption | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenGallery: (photos: string[], roomName: string, resortName: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onOpenGallery,
}) => {
  const [guestCount, setGuestCount] = useState('2');
  const [inquiryDate, setInquiryDate] = useState('');

  if (!isOpen || !room) return null;

  const handleBookRoom = () => {
    const url = buildWhatsAppUrl({
      resort: room.resortName,
      room: room.name,
      checkIn: inquiryDate || 'Upcoming weekend',
      guests: `${guestCount} Guests`,
    });
    openSafeLink(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-[#0e1612] border border-[#263a2f] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0a0f0c]/80 hover:bg-[#1a251f] text-[#cfc9be] hover:text-white transition-colors border border-[#23352a]"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Gallery Preview */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#070b09]">
          <img
            src={room.photos[0]}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1612] via-[#0e1612]/40 to-transparent" />

          {/* Badge & Quick Trigger */}
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a059] block">
                {room.resortName}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#faf8f5] font-normal leading-tight">
                {room.name}
              </h2>
              <p className="text-xs text-[#a2b3ab] flex items-center gap-2 mt-1">
                <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Capacity: {room.capacity}</span>
              </p>
            </div>

            <button
              onClick={() => onOpenGallery(room.photos, room.name, room.resortName)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#090f0c]/80 backdrop-blur-md border border-[#2a3e33] hover:border-[#c5a059] text-xs font-medium text-[#f2efe9] transition-all cursor-pointer"
            >
              <Images className="w-4 h-4 text-[#c5a059]" />
              <span>View All {room.photos.length} Photos</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Price Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#142019] border border-[#263c2f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#98a89f] block">Package Rate</span>
              <div className="text-xl sm:text-2xl font-serif text-[#faf8f5] font-semibold text-[#d9b870]">
                {room.pricingDisplay}
              </div>
              <span className="text-xs text-[#8ca095] block mt-0.5">
                Includes 1 night stay + 3 buffet meals + resort activities + water sports
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleBookRoom}
                className="px-5 py-3 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                Book This Room
              </button>
            </div>
          </div>

          {/* Room Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-2">
              Accommodation Overview
            </h3>
            <p className="text-sm text-[#ccd6d0] leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-3">
              Key Room Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#cfd9d2]">
                  <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shared 1-Night Package Information (3 Meals, Timings, Activities) */}
          <div className="pt-6 border-t border-[#1e2e25] space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a059]">
                  Standard Package Inclusions
                </span>
                <h4 className="font-serif text-xl text-[#faf8f5]">1 Night / 2 Days Resort Plan</h4>
              </div>
              <div className="text-xs text-[#95a89e] text-right font-mono">
                <div>Check-in: 12:00 PM</div>
                <div>Check-out: 11:00 AM</div>
              </div>
            </div>

            {/* Meals Detailed Breakdown */}
            <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1e2e25]">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#d9b870] flex items-center gap-2 mb-3">
                <Utensils className="w-4 h-4" />
                <span>3 Buffet Meals Included</span>
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Lunch */}
                <div className="p-3 rounded-lg bg-[#111915] border border-[#1f2f26]">
                  <div className="font-semibold text-[#ede8de] mb-1">Lunch (Day 1)</div>
                  <div className="text-[11px] text-[#86978e] mb-2">{SHARED_PACKAGE_INFO.meals.lunch.time}</div>
                  <ul className="space-y-1 text-[#b3c2ba] text-[11px]">
                    {SHARED_PACKAGE_INFO.meals.lunch.items.map((it, i) => (
                      <li key={i}>· {it}</li>
                    ))}
                  </ul>
                </div>

                {/* Dinner */}
                <div className="p-3 rounded-lg bg-[#111915] border border-[#1f2f26]">
                  <div className="font-semibold text-[#ede8de] mb-1">Dinner (Day 1)</div>
                  <div className="text-[11px] text-[#86978e] mb-2">{SHARED_PACKAGE_INFO.meals.dinner.time}</div>
                  <ul className="space-y-1 text-[#b3c2ba] text-[11px]">
                    {SHARED_PACKAGE_INFO.meals.dinner.items.map((it, i) => (
                      <li key={i}>· {it}</li>
                    ))}
                  </ul>
                </div>

                {/* Breakfast */}
                <div className="p-3 rounded-lg bg-[#111915] border border-[#1f2f26]">
                  <div className="font-semibold text-[#ede8de] mb-1">Breakfast (Day 2)</div>
                  <div className="text-[11px] text-[#86978e] mb-2">{SHARED_PACKAGE_INFO.meals.breakfast.time}</div>
                  <ul className="space-y-1 text-[#b3c2ba] text-[11px]">
                    {SHARED_PACKAGE_INFO.meals.breakfast.items.map((it, i) => (
                      <li key={i}>· {it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Activities & Experiences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1e2e25]">
                <h5 className="font-semibold text-[#d9b870] uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Resort Experiences</span>
                </h5>
                <ul className="space-y-1.5 text-[#b3c2ba]">
                  {SHARED_PACKAGE_INFO.resortExperiences.map((exp, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#c5a059] mt-0.5">·</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1e2e25]">
                <h5 className="font-semibold text-[#d9b870] uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5" />
                  <span>Included Water Sports</span>
                </h5>
                <ul className="space-y-1.5 text-[#b3c2ba]">
                  {SHARED_PACKAGE_INFO.includedWaterActivities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#c5a059] mt-0.5">·</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-2 border-t border-[#1b2a21]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8b9c92] block font-semibold">
                    Included Sightseeing Access
                  </span>
                  <div className="text-[11px] text-[#b3c2ba] mt-0.5">
                    Moulangi Eco Park, Supa Dam View, Crocodile Park, Backwaters
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons & Weather disclaimer */}
            <div className="p-3.5 rounded-lg bg-[#0b120e] border border-[#1b2b21] text-[11px] text-[#8ea096] leading-relaxed">
              <p>
                <strong className="text-[#c5a059]">Available Add-ons:</strong> Short Rafting, Mid Rafting, Forest Department Wildlife Safari, Extended Dandeli Sightseeing cab tours.
              </p>
              <p className="mt-1.5 text-[#73837b]">
                {SHARED_PACKAGE_INFO.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-4 sm:p-6 bg-[#080d0a] border-t border-[#1f3026] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs text-[#95a69d] w-full sm:w-auto">
            <span>Direct Call:</span>
            <a href={getTelUrl()} className="text-[#c5a059] font-mono hover:underline">
              {CONTACT_PHONE}
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={buildWhatsAppUrl({
                resort: room.resortName,
                room: room.name,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#2b3e34] bg-[#121c17] text-[#ede8de] hover:border-[#c5a059] text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={handleBookRoom}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <span>Book This Room</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
