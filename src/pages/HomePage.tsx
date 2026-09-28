import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, Shield, Award, MapPin, Compass, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { HeroVideo } from '../components/HeroVideo';
import { BookingInquiryStrip } from '../components/BookingInquiryStrip';
import { WaterAdventurePassCard } from '../components/WaterAdventurePassCard';
import { CustomerReviews } from '../components/CustomerReviews';
import { RESORTS_DATA, Resort, RoomOption, SHARED_PACKAGE_INFO } from '../data/resorts';
import { buildWhatsAppUrl, getTelUrl, CONTACT_PHONE } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenRoomDetail: (room: RoomOption) => void;
  onOpenGallery: (photos: string[], roomName: string, resortName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenRoomDetail,
  onOpenGallery,
}) => {
  const handleScrollToBooking = () => {
    const el = document.getElementById('booking-strip');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyChoosePoints = [
    {
      title: 'Curated Stays',
      desc: 'Handpicked accommodation options for couples, families, and squads with authentic forest architecture.',
    },
    {
      title: 'Adventure Included',
      desc: 'Selected Kali River water activities like kayaking, boating and zorbing bundled directly into room packages.',
    },
    {
      title: 'Dandeli Expertise',
      desc: 'Local guidance to help guests navigate dam water releases, safari slot timings, and scenic viewpoints smoothly.',
    },
    {
      title: 'Easy Booking',
      desc: 'Simple direct booking and immediate confirmation through WhatsApp or phone call without intermediary markups.',
    },
    {
      title: 'Complete Experience',
      desc: 'Resort stay, buffet dining, water sports, wildlife safari assistance, and sightseeing unified under one plan.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Section */}
      <HeroVideo
        onExploreResorts={() => onNavigate('/stay/jungle-resort-packages/')}
        onScrollToSearch={handleScrollToBooking}
      />

      {/* 2. Inquiry Search Strip */}
      <BookingInquiryStrip />

      {/* 3. Featured Resorts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
            Stay in Dandeli
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#faf8f5] tracking-tight leading-tight">
            Three Distinctive Stays. <br />
            <span className="italic text-[#d9b870]">One Unforgettable Escape.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9faea5] leading-relaxed">
            From bamboo treehouse architecture to riverside log cabins and panoramic Western Ghats hilltop suites. All packages include 3 buffet meals and selected water sports.
          </p>
        </div>

        {/* 3 Resort Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RESORTS_DATA.map((resort) => (
            <div
              key={resort.id}
              onClick={() => onNavigate(`/resorts/${resort.slug}/`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onNavigate(`/resorts/${resort.slug}/`);
              }}
              className="group relative rounded-2xl bg-[#0f1713] border border-[#223329] hover:border-[#c5a059] transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:shadow-2xl cursor-pointer"
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden bg-[#070b09]">
                <img
                  src={resort.heroImage}
                  alt={resort.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1713] via-[#0f1713]/30 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#f0ebe1] bg-[#090e0c]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#2b3c33]">
                    {resort.tag}
                  </span>
                </div>

                {/* Starting Price Pill */}
                <div className="absolute bottom-4 right-4 bg-[#090e0c]/90 backdrop-blur-md border border-[#c5a059]/40 rounded-lg px-3 py-1 text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#98a79e] block">Starting from</span>
                  <span className="text-sm font-serif font-bold text-[#d9b870]">
                    ₹{resort.startingPrice.toLocaleString()} <span className="text-[10px] font-sans text-[#a7b5ad]">/ person</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-2xl text-[#faf8f5] group-hover:text-[#d9b870] transition-colors">
                      {resort.name}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-[#8ca095] group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>

                  <p className="mt-2 text-xs text-[#a2b2a8] leading-relaxed">
                    {resort.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-[#1a2820] space-y-1.5 text-xs text-[#cad5ce]">
                    {resort.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#1a2820] flex items-center justify-between gap-3">
                  <span className="flex-1 py-2.5 px-3 rounded-lg border border-[#2a3c31] group-hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] group-hover:text-[#faf8f5] text-center transition-colors">
                    Explore Resort & Rooms →
                  </span>

                  <a
                    href={buildWhatsAppUrl({ resort: resort.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-2.5 px-4 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. High-Visibility Water Adventure Offer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WaterAdventurePassCard
          onExploreAdventure={() => onNavigate('/water-sports/')}
        />
      </section>

      {/* 5. Why Dandeli Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b120e] border border-[#1e2e25] rounded-3xl p-8 sm:p-14">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
              The Dandeli Plans Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
              Why Travelers Trust Dandeli Plans
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#93a49b]">
              Thoughtfully curated hospitality, transparent booking, and honest local coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChoosePoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0e1713] border border-[#1b2b21] hover:border-[#c5a059]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#18261e] border border-[#283d30] text-[#c5a059] font-serif text-sm font-semibold flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg text-[#faf8f5] mb-2">{pt.title}</h3>
                  <p className="text-xs text-[#95a69d] leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews & Guest Testimonials */}
      <CustomerReviews />

      {/* 7. Adventure & Wildlife Teasers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wildlife Safari Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#121c17] to-[#090d0b] border border-[#24352b] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                Western Ghats Wilderness
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5]">
                Dandeli Wildlife Safari
              </h3>
              <p className="text-xs sm:text-sm text-[#9faea5] mt-3 leading-relaxed">
                Explore the dense forest corridors of Kulgi and Phansoli in an open 4x4 jeep operated by the Karnataka Forest Department. Encounter wild elephants, gaurs, and hornbills.
              </p>

              {/* Note */}
              <div className="mt-4 p-3 rounded-lg bg-[#0a100d] border border-[#1b2921] text-[11px] text-[#86978e]">
                *Safari tickets are operated solely by the Forest Department on-the-spot. Dandeli Plans coordinates resort stays, local cabs, and punctual drop-offs.
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1b2b22] flex items-center justify-between">
              <span className="text-xs text-[#c5a059] font-medium">Daily 6:00 AM & 4:00 PM Slots</span>
              <button
                onClick={() => onNavigate('/wildlife-safari/dandeli-jungle-safari/')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5f2eb] hover:text-[#c5a059] transition-colors"
              >
                <span>Read Safari Guide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sightseeing Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#121c17] to-[#090d0b] border border-[#24352b] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                Discover Dandeli
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5]">
                Forests, Canyons & Caves
              </h3>
              <p className="text-xs sm:text-sm text-[#9faea5] mt-3 leading-relaxed">
                Wander through the ancient 300-ft monolithic Syntheri Rock, descend into the subterranean Kavale limestone caves, or catch breathtaking Kali gorge sunsets from Sykes Point.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#a2b3aa]">
                <div className="p-2.5 rounded-lg bg-[#0a100d] border border-[#1b2921]">
                  · Syntheri Rock (~32 km)
                </div>
                <div className="p-2.5 rounded-lg bg-[#0a100d] border border-[#1b2921]">
                  · Sykes Point (~23 km)
                </div>
                <div className="p-2.5 rounded-lg bg-[#0a100d] border border-[#1b2921]">
                  · Moulangi Park (~11 km)
                </div>
                <div className="p-2.5 rounded-lg bg-[#0a100d] border border-[#1b2921]">
                  · Kavale Caves (~24 km)
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1b2b22] flex items-center justify-between">
              <span className="text-xs text-[#c5a059] font-medium">Curated Sightseeing Itineraries</span>
              <button
                onClick={() => onNavigate('/dandeli-sightseeing/')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5f2eb] hover:text-[#c5a059] transition-colors"
              >
                <span>View All Locations</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Shared Package Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#26382f] bg-[#0c1410] rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-1">
                Standard Across All Stays
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
                What Every Resort Package Includes
              </h2>
            </div>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] text-[#090d0c] font-semibold text-xs tracking-wider uppercase self-start md:self-auto hover:bg-[#d9b366] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask On WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {/* Box 1 */}
            <div className="p-5 rounded-xl bg-[#080d0b] border border-[#1e2e25]">
              <span className="text-[#c5a059] font-serif text-base block font-bold mb-2">3 Buffet Meals</span>
              <p className="text-[#98a89f] leading-relaxed mb-3">
                Full course lunch, night dinner, and morning breakfast with non-veg chicken gravies, ghee rice, hot rotis, and sweets.
              </p>
              <span className="text-[11px] text-[#b4c4bb]">Timings: 12 PM Check-in · 11 AM Check-out</span>
            </div>

            {/* Box 2 */}
            <div className="p-5 rounded-xl bg-[#080d0b] border border-[#1e2e25]">
              <span className="text-[#c5a059] font-serif text-base block font-bold mb-2">Water Activities</span>
              <p className="text-[#98a89f] leading-relaxed mb-3">
                Kayaking on calm river waters, scenic boating session, and water zorbing inside floating spheres.
              </p>
              <span className="text-[11px] text-[#b4c4bb]">Included with stay without extra fee</span>
            </div>

            {/* Box 3 */}
            <div className="p-5 rounded-xl bg-[#080d0b] border border-[#1e2e25]">
              <span className="text-[#c5a059] font-serif text-base block font-bold mb-2">Resort Experiences</span>
              <p className="text-[#98a89f] leading-relaxed mb-3">
                Evening campfire, energetic rain dance with DJ music, archery, darts, carrom, and guided morning jungle trek.
              </p>
              <span className="text-[11px] text-[#b4c4bb]">Night campfire on lawns</span>
            </div>

            {/* Box 4 */}
            <div className="p-5 rounded-xl bg-[#080d0b] border border-[#1e2e25]">
              <span className="text-[#c5a059] font-serif text-base block font-bold mb-2">Sightseeing Inclusions</span>
              <p className="text-[#98a89f] leading-relaxed mb-3">
                Moulangi Eco Park, Supa Dam Viewpoint, Crocodile Park, and tranquil river backwaters.
              </p>
              <span className="text-[11px] text-[#b4c4bb]">Add-on rafting & safari available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
