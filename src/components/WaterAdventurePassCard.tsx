import React, { useState, useEffect } from 'react';
import { Timer, Check, ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl, openSafeLink } from '../utils/whatsapp';

interface WaterAdventurePassCardProps {
  onExploreAdventure?: () => void;
}

export const WaterAdventurePassCard: React.FC<WaterAdventurePassCardProps> = ({ onExploreAdventure }) => {
  // Automatic promotional countdown timer (e.g., 2h 45m cycle that resets automatically)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset promotional cycle automatically
          return { hours: 2, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activities = [
    { title: 'Short Rafting', desc: '1.2 km thrilling Kali River rapids' },
    { title: 'Kayaking', desc: 'Scenic self-paddled river journey' },
    { title: 'Boating', desc: 'Peaceful scenic cruise on Kali River' },
    { title: 'Water Zorbing', desc: 'Floating inflatable sphere on water' },
    { title: 'River Crossing Zipline', desc: 'Aerial high-tension cable glide' },
  ];

  const handleBookPass = () => {
    const url = buildWhatsAppUrl({
      customMessage: 'Hello Dandeli Plans, I would like to enquire about booking the ₹1,199 Water Adventure Pass. Please share today’s slots and availability.',
    });
    openSafeLink(url);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121c17] via-[#0d1612] to-[#090d0b] border border-[#273d32] p-8 sm:p-12 shadow-2xl">
      {/* Decorative Gold Glow Mesh */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#1b3b2c]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Offer Details */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#16241c] text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Combo Package</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#faf8f5] tracking-tight leading-tight">
            DANDELI WATER <br />
            <span className="italic text-[#d9b870]">ADVENTURE PASS</span>
          </h2>

          <p className="text-sm text-[#9eb0a6] mt-2 max-w-lg leading-relaxed">
            All-in-one water adventure offer. Combine five quintessential Kali River thrills under the guidance of certified river captains.
          </p>

          {/* Activities Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activities.map((act) => (
              <div
                key={act.title}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0a0f0d]/60 border border-[#1f2e26]"
              >
                <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#ede8de] leading-snug">{act.title}</h4>
                  <p className="text-xs text-[#829288]">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Safety & Gear Tag */}
          <div className="mt-5 flex items-center gap-2 text-xs text-[#9eb0a6]">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Includes certified life jackets, safety helmets & experienced river guides</span>
          </div>
        </div>

        {/* Right Column: Price Box & Countdown */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-md bg-[#090e0c]/90 border border-[#2b3e34] rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#98a8a0] font-medium block">
              Complete 5-Activity Pass
            </span>

            {/* Price Presentation */}
            <div className="mt-3 flex items-baseline justify-center gap-3">
              <span className="text-xs text-[#6e7f76] line-through font-mono">₹1,500</span>
              <span className="font-serif text-5xl sm:text-6xl font-bold text-[#faf8f5] tracking-tight">
                ₹1,199
              </span>
              <span className="text-xs text-[#c5a059] font-medium">/ person</span>
            </div>

            <p className="text-xs text-[#a3b3aa] mt-1">
              Save ₹301 per person on regular ala-carte activity pricing
            </p>

            {/* Countdown Box */}
            <div className="mt-5 p-3.5 rounded-xl bg-[#121c17] border border-[#23352c] text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#c5a059] font-medium uppercase tracking-wider mb-2">
                <Timer className="w-3.5 h-3.5 animate-pulse" />
                <span>Current Slot Booking Window</span>
              </div>
              <div className="flex items-center justify-center gap-2 font-mono text-lg font-bold text-[#f5f2eb]">
                <div className="bg-[#090d0b] px-3 py-1.5 rounded-lg border border-[#273a30] tabular-nums">
                  {String(timeLeft.hours).padStart(2, '0')}
                  <span className="text-[10px] block text-[#7e8f85] font-sans font-normal uppercase">Hrs</span>
                </div>
                <span>:</span>
                <div className="bg-[#090d0b] px-3 py-1.5 rounded-lg border border-[#273a30] tabular-nums">
                  {String(timeLeft.minutes).padStart(2, '0')}
                  <span className="text-[10px] block text-[#7e8f85] font-sans font-normal uppercase">Min</span>
                </div>
                <span>:</span>
                <div className="bg-[#090d0b] px-3 py-1.5 rounded-lg border border-[#273a30] tabular-nums">
                  {String(timeLeft.seconds).padStart(2, '0')}
                  <span className="text-[10px] block text-[#7e8f85] font-sans font-normal uppercase">Sec</span>
                </div>
              </div>
              <p className="text-[10px] text-[#697a71] mt-2">
                *Promotional availability resets daily based on Kali River water release.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-2.5">
              <button
                onClick={handleBookPass}
                className="w-full py-3.5 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get The Adventure Pass</span>
              </button>

              {onExploreAdventure && (
                <button
                  onClick={onExploreAdventure}
                  className="w-full py-2.5 rounded-lg border border-[#2b3e34] hover:border-[#c5a059] text-xs font-medium text-[#d9d5cb] hover:text-[#f5f2eb] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Explore Water Activities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
