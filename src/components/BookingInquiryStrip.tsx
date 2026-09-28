import React, { useState } from 'react';
import { Calendar, Users, Home, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_PHONE, buildWhatsAppUrl, getTelUrl, openSafeLink } from '../utils/whatsapp';

export const BookingInquiryStrip: React.FC = () => {
  // Preset default dates (tomorrow and day after)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState('2 Adults');
  const [resort, setResort] = useState('Dandeli Jungle Resort');

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      resort,
      checkIn,
      checkOut,
      guests,
    });
    openSafeLink(url);
  };

  return (
    <div id="booking-strip" className="relative z-20 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-[#111915]/95 backdrop-blur-xl border border-[#23352b] rounded-2xl shadow-2xl p-5 sm:p-7">
        <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Check-in */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Check-in</span>
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#0a0f0d] border border-[#26382f] rounded-lg px-3.5 py-2.5 text-sm text-[#f2efe9] focus:outline-none focus:border-[#c5a059] transition-colors"
              required
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Check-out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#0a0f0d] border border-[#26382f] rounded-lg px-3.5 py-2.5 text-sm text-[#f2efe9] focus:outline-none focus:border-[#c5a059] transition-colors"
              required
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Guests</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-[#0a0f0d] border border-[#26382f] rounded-lg px-3.5 py-2.5 text-sm text-[#f2efe9] focus:outline-none focus:border-[#c5a059] transition-colors"
            >
              <option value="Couple (2 Adults)">Couple (2 Adults)</option>
              <option value="Family (2 Adults + 1-2 Kids)">Family (2 Adults + Kids)</option>
              <option value="Small Group (3-5 Adults)">Group (3-5 Adults)</option>
              <option value="Squad / Corporate (6-10 Adults)">Squad (6-10 Adults)</option>
              <option value="Large Group (10+ Sharing)">Large Group (10+ Sharing)</option>
            </select>
          </div>

          {/* Resort Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1.5 flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5" />
              <span>Preferred Resort</span>
            </label>
            <select
              value={resort}
              onChange={(e) => setResort(e.target.value)}
              className="w-full bg-[#0a0f0d] border border-[#26382f] rounded-lg px-3.5 py-2.5 text-sm text-[#f2efe9] focus:outline-none focus:border-[#c5a059] transition-colors"
            >
              <option value="Dandeli Jungle Resort">Dandeli Jungle Resort</option>
              <option value="Dandeli Cottages">Dandeli Cottages</option>
              <option value="Dandeli Hills Resort">Dandeli Hills Resort</option>
              <option value="Best Available Resort">Any / Help Me Choose</option>
            </select>
          </div>

          {/* Primary Action Button */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full h-[42px] rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="whitespace-nowrap">Check on WhatsApp</span>
            </button>
          </div>
        </form>

        {/* Supporting Line with Direct Call & Inclusions */}
        <div className="mt-4 pt-3.5 border-t border-[#1c2c24] flex flex-col sm:flex-row items-center justify-between text-xs text-[#95a49c] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
            <span>All resort packages include 3 buffet meals + kayaking, boating & water zorbing</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Direct helpline:</span>
            <a
              href={getTelUrl()}
              className="inline-flex items-center gap-1.5 text-[#c5a059] hover:underline font-mono font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>{CONTACT_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
