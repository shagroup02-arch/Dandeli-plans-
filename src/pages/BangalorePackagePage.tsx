import React from 'react';
import { Calendar, Clock, MapPin, Check, Car, Compass, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl, getTelUrl, CONTACT_PHONE, openSafeLink } from '../utils/whatsapp';

interface BangalorePackagePageProps {
  onNavigate: (path: string) => void;
}

export const BangalorePackagePage: React.FC<BangalorePackagePageProps> = ({ onNavigate }) => {
  const itinerary = [
    {
      day: 'Day 1',
      title: 'Arrival, Authentic Lunch, River Sports & Evening Campfire',
      schedule: [
        { time: '6:30 AM – 8:00 AM', desc: 'Reach Dandeli via overnight train (Alnavar/Londa Junction) or KSRTC/private sleeper bus from Bangalore.' },
        { time: '12:00 PM', desc: 'Resort check-in, freshen up, and welcome forest drink.' },
        { time: '1:00 PM – 2:30 PM', desc: 'Traditional Western Ghats buffet lunch (Chicken gravy, ghee rice, daal, fresh rotis, sabji & sweet).' },
        { time: '3:00 PM – 5:30 PM', desc: 'Kali River water activities: Kayaking, Boating, and Water Zorbing (or White Water Rafting add-on).' },
        { time: '7:30 PM', desc: 'Evening campfire on resort lawns with rain dance & music.' },
        { time: '8:30 PM – 10:00 PM', desc: 'Hearty buffet dinner and restful night inside forest cottages.' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Morning Forest Trek, Buffet Breakfast, Sightseeing & Departure',
      schedule: [
        { time: '6:00 AM – 7:30 AM', desc: 'Optional early morning jungle safari at Kulgi (spot tokens) OR guided resort nature walk & birding.' },
        { time: '8:30 AM – 9:30 AM', desc: 'Wholesome breakfast: hot poori bhaji or idli-vada-sambar with fresh tea/coffee.' },
        { time: '10:00 AM', desc: 'Visit Moulangi Eco Park bamboo grove and Supa Dam Viewpoint.' },
        { time: '11:00 AM', desc: 'Check-out of resort rooms. Optional extended cab excursion to Syntheri Rock before evening return bus to Bangalore.' },
      ],
    },
  ];

  const handleBookBangaloreTrip = () => {
    const url = buildWhatsAppUrl({
      customMessage:
        'Hello Dandeli Plans, I am planning a weekend getaway from Bangalore to Dandeli. Please share resort availability, package options, and itinerary details.',
    });
    openSafeLink(url);
  };

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Weekend Getaway from Karnataka Capital
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight max-w-4xl mx-auto">
          Dandeli Tour & Resort Packages from Bangalore
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#9faea5] max-w-2xl mx-auto leading-relaxed">
          Escape the city traffic for fresh evergreen canopies, roaring Kali River rapids, and starry campfire nights. Complete 2D/1N stay packages with 3 buffet meals.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleBookBangaloreTrip}
            className="px-6 py-3 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire Bangalore Package</span>
          </button>
        </div>
      </section>

      {/* 2. Travel & Route Guidance */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1713] border border-[#223329] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#a2b2aa]">
          <div className="space-y-1.5">
            <strong className="text-[#f5f2eb] block text-sm">By Overnight Bus</strong>
            <p>Direct KSRTC & private sleeper buses run nightly from Bangalore (Majestic, Anand Rao Circle) to Dandeli Bus Stand (~9–10 hours).</p>
          </div>
          <div className="space-y-1.5">
            <strong className="text-[#f5f2eb] block text-sm">By Train</strong>
            <p>Take trains from KSR Bengaluru / Yesvantpur to Alnavar Junction (LWR, ~32 km away) or Londa Junction (LD, ~35 km away). Local cabs available.</p>
          </div>
          <div className="space-y-1.5">
            <strong className="text-[#f5f2eb] block text-sm">By Self-Drive Car</strong>
            <p>Route: Bangalore → Tumakuru → Davanagere → Hubballi → Dharwad → Haliyal → Dandeli (~460 km, approx. 8–9 hours via NH 48).</p>
          </div>
        </div>
        <p className="text-[11px] text-[#718279] text-center mt-3">
          *Note: Transport is arranged independently by guests; Dandeli Plans can arrange punctual cab transfers from Alnavar, Dharwad, or Dandeli bus stop to your resort.
        </p>
      </section>

      {/* 3. Sample 2D/1N Itinerary */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block mb-1">
            Curated Weekend Itinerary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
            Sample 2 Days / 1 Night Plan
          </h2>
        </div>

        <div className="space-y-6">
          {itinerary.map((dayPlan, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-[#0e1612] border border-[#21352a] space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#c5a059] text-[#090d0c] font-bold text-xs font-serif uppercase">
                  {dayPlan.day}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#faf8f5]">{dayPlan.title}</h3>
              </div>

              <div className="space-y-3 pt-2">
                {dayPlan.schedule.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 text-xs text-[#cad5ce]">
                    <span className="font-mono text-[#c5a059] sm:w-36 shrink-0">{item.time}</span>
                    <span className="text-[#a2b3aa]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Package Inclusions & Conversion */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121c17] to-[#090d0b] border border-[#24372c] text-center space-y-6">
          <h3 className="font-serif text-3xl text-[#faf8f5]">
            Ready for your Dandeli Weekend Break?
          </h3>
          <p className="text-xs sm:text-sm text-[#95a89e] max-w-xl mx-auto">
            Contact us with your preferred travel dates, passenger count, and room preference (Cottages, A-frame, or Dorms).
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleBookBangaloreTrip}
              className="px-6 py-3 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase transition-all"
            >
              Check Availability on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
