import React, { useState, useEffect } from 'react';
import { RESORTS_DATA, Resort, RoomOption, SHARED_PACKAGE_INFO } from '../data/resorts';
import {
  MessageCircle,
  Images,
  Utensils,
  Waves,
  Sparkles,
  Compass,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { RoomCardWithSwiper } from '../components/RoomCardWithSwiper';
import { JungleResortGallery } from '../components/JungleResortGallery';
import { DandeliCottagesGallery } from '../components/DandeliCottagesGallery';
import { DandeliHillsGallery } from '../components/DandeliHillsGallery';

interface ResortsPageProps {
  selectedResortSlug?: string;
  onNavigate?: (path: string) => void;
  onOpenRoomDetail: (room: RoomOption) => void;
  onOpenGallery: (photos: string[], roomName: string, resortName: string, initialIndex?: number) => void;
}

export const ResortsPage: React.FC<ResortsPageProps> = ({
  selectedResortSlug,
  onNavigate,
  onOpenRoomDetail,
  onOpenGallery,
}) => {
  const [filterResort, setFilterResort] = useState<string>(selectedResortSlug || 'all');
  const [showFullMenu, setShowFullMenu] = useState(false);

  useEffect(() => {
    if (selectedResortSlug) {
      setFilterResort(selectedResortSlug);
    } else {
      setFilterResort('all');
    }
  }, [selectedResortSlug]);

  const handleSelectResort = (slug: string) => {
    setFilterResort(slug);
    if (onNavigate) {
      if (slug === 'all') {
        onNavigate('/stay/jungle-resort-packages/');
      } else {
        onNavigate(`/resorts/${slug}/`);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isMainResortView = filterResort === 'all';
  const selectedResort = RESORTS_DATA.find((r) => r.slug === filterResort);

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Accommodation & Packages
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight">
          {isMainResortView ? 'Premium Stays in Dandeli' : selectedResort?.name}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#9faea5] max-w-2xl mx-auto leading-relaxed">
          {isMainResortView
            ? 'Choose your resort. Click anywhere on any resort to explore all room types, amenities, and high-resolution photo galleries.'
            : selectedResort?.description}
        </p>

        {/* Segmented Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => handleSelectResort('all')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              isMainResortView
                ? 'bg-[#c5a059] text-[#090d0c] font-semibold shadow-md'
                : 'bg-[#121c17] text-[#a4b4ab] border border-[#23352b] hover:text-[#f5f2eb]'
            }`}
          >
            All Three Resorts
          </button>
          {RESORTS_DATA.map((r) => (
            <button
              key={r.slug}
              onClick={() => handleSelectResort(r.slug)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filterResort === r.slug
                  ? 'bg-[#c5a059] text-[#090d0c] font-semibold shadow-md'
                  : 'bg-[#121c17] text-[#a4b4ab] border border-[#23352b] hover:text-[#f5f2eb]'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Shared 1-Night Package Banner (Every room includes this) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1612] border border-[#23352b] shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1c2c23]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-1">
                Standard In Every Booking
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#faf8f5]">
                1 Night / 2 Days Package Inclusions
              </h2>
              <p className="text-xs text-[#95a89f] mt-1">
                Valid for every accommodation option across all 3 resorts. Check-in: 12:00 PM · Check-out: 11:00 AM
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowFullMenu(!showFullMenu)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2d4236] bg-[#121d17] hover:border-[#c5a059] text-xs font-medium text-[#ede9e0] transition-colors cursor-pointer"
              >
                <Utensils className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{showFullMenu ? 'Hide Meal Menu' : 'View 3-Meal Menu'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFullMenu ? 'rotate-180' : ''}`} />
              </button>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire Package</span>
              </a>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-xs text-[#cad5ce]">
            <div className="flex items-start gap-2.5">
              <Utensils className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#f5f2eb] block">3 Buffet Meals</strong>
                <span>Lunch, Dinner & Breakfast (veg & non-veg gravies)</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Waves className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#f5f2eb] block">3 Water Sports Included</strong>
                <span>Kayaking, Boating & Water Zorbing</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#f5f2eb] block">Resort Experiences</strong>
                <span>Campfire, DJ rain dance, archery & jungle trek</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Compass className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#f5f2eb] block">Local Sightseeing</strong>
                <span>Moulangi Eco Park, Supa Dam View & Backwaters</span>
              </div>
            </div>
          </div>

          {/* Expandable 3-Meals Menu Details */}
          {showFullMenu && (
            <div className="mt-6 pt-6 border-t border-[#1c2c23] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1d2d24]">
                <span className="font-semibold text-[#d9b870] block mb-1">Lunch (1:00 PM – 3:00 PM)</span>
                <ul className="space-y-1 text-[#a5b6ad] text-[11px]">
                  {SHARED_PACKAGE_INFO.meals.lunch.items.map((it, i) => (
                    <li key={i}>· {it}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1d2d24]">
                <span className="font-semibold text-[#d9b870] block mb-1">Dinner (8:30 PM – 10:30 PM)</span>
                <ul className="space-y-1 text-[#a5b6ad] text-[11px]">
                  {SHARED_PACKAGE_INFO.meals.dinner.items.map((it, i) => (
                    <li key={i}>· {it}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1d2d24]">
                <span className="font-semibold text-[#d9b870] block mb-1">Breakfast (8:00 AM – 10:00 AM)</span>
                <ul className="space-y-1 text-[#a5b6ad] text-[11px]">
                  {SHARED_PACKAGE_INFO.meals.breakfast.items.map((it, i) => (
                    <li key={i}>· {it}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. MAIN RESORT PAGE VIEW: Show ONLY Main Resorts without rooms and without galleries */}
      {isMainResortView && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between text-xs text-[#8ca094] border-b border-[#21352a] pb-3">
            <span className="font-medium text-[#c5a059]">3 Featured Dandeli Jungle Resorts</span>
            <span>Click anywhere on any resort card to view all rooms, amenities & photo gallery</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RESORTS_DATA.map((resort, idx) => (
              <div
                key={resort.id}
                onClick={() => handleSelectResort(resort.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSelectResort(resort.slug);
                }}
                className="group relative rounded-3xl bg-[#0f1713] border border-[#223329] hover:border-[#c5a059] transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:shadow-2xl cursor-pointer"
              >
                {/* Resort Image Banner */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#070b09]">
                  <img
                    src={resort.heroImage}
                    alt={resort.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1713] via-transparent to-black/30 pointer-events-none" />

                  {/* Tag / Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#f0ebe1] bg-[#090e0c]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#2b3c33]">
                      {resort.tag}
                    </span>
                  </div>

                  {/* Room count pill */}
                  <div className="absolute top-4 right-4 bg-[#090e0c]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#283c30] text-[11px] text-[#c5a059] font-medium">
                    {resort.rooms.length} Room Categories
                  </div>

                  {/* Starting Price Pill */}
                  <div className="absolute bottom-4 right-4 bg-[#090e0c]/95 backdrop-blur-md border border-[#c5a059]/50 rounded-xl px-3.5 py-1.5 text-right shadow-lg">
                    <span className="text-[10px] uppercase tracking-wider text-[#98a79e] block">Starting from</span>
                    <span className="text-base font-serif font-bold text-[#d9b870]">
                      ₹{resort.startingPrice.toLocaleString()} <span className="text-[10px] font-sans text-[#a7b5ad]">/ person</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-2xl text-[#faf8f5] group-hover:text-[#d9b870] transition-colors">
                        {resort.name}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-[#8ca095] group-hover:text-[#c5a059] group-hover:translate-x-1.5 transition-all shrink-0" />
                    </div>

                    <p className="mt-2 text-xs text-[#a2b2a8] leading-relaxed">
                      {resort.description}
                    </p>

                    {/* Room Categories Preview Pill List */}
                    <div className="mt-4 pt-4 border-t border-[#1a2820]">
                      <span className="text-[10px] uppercase tracking-wider text-[#798e82] block mb-2 font-medium">
                        Available Room Options
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {resort.rooms.map((rm) => (
                          <span
                            key={rm.id}
                            className="px-2.5 py-1 rounded-lg bg-[#090f0c] border border-[#1d2d24] text-[11px] text-[#ccd7d0]"
                          >
                            {rm.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-4 pt-3 border-t border-[#1a2820] space-y-1.5 text-xs text-[#cad5ce]">
                      {resort.highlights.slice(0, 3).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Bottom Bar */}
                  <div className="pt-4 border-t border-[#1a2820] flex items-center justify-between gap-3">
                    <span className="flex-1 py-2.5 px-3 rounded-xl border border-[#2a3c31] group-hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] group-hover:text-[#faf8f5] text-center transition-colors">
                      Click Anywhere To Explore Resort →
                    </span>

                    <a
                      href={buildWhatsAppUrl({ resort: resort.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-4 rounded-xl bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md shrink-0 cursor-pointer"
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
      )}

      {/* 4. INDIVIDUAL RESORT VIEW: Shown ONLY after user clicks on a resort */}
      {!isMainResortView && selectedResort && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between pb-4 border-b border-[#213529]">
            <button
              onClick={() => handleSelectResort('all')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a059] hover:text-[#d9b870] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>← Back to All Resorts</span>
            </button>
            <div className="text-xs text-[#8ca094]">
              Viewing: <strong className="text-[#faf8f5]">{selectedResort.name}</strong>
            </div>
          </div>

          {/* Resort Header Article */}
          <article id={selectedResort.slug} className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#213328]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block mb-1">
                  {selectedResort.tag}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#faf8f5]">
                  {selectedResort.name}
                </h2>
                <p className="text-xs sm:text-base text-[#9eb0a6] mt-3 max-w-3xl leading-relaxed">
                  {selectedResort.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={buildWhatsAppUrl({ resort: selectedResort.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase transition-all shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book {selectedResort.name}</span>
                </a>
              </div>
            </div>

            {/* Room Cards Grid for this specific resort */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest block mb-1">
                    Room Categories
                  </span>
                  <h3 className="font-serif text-2xl text-[#faf8f5]">
                    Available Accommodations ({selectedResort.rooms.length})
                  </h3>
                </div>
                <span className="text-xs text-[#8ca094]">All options include 3 meals & water sports</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedResort.rooms.map((room) => (
                  <RoomCardWithSwiper
                    key={room.id}
                    room={room}
                    resortName={selectedResort.name}
                    onOpenRoomDetail={onOpenRoomDetail}
                    onOpenGallery={onOpenGallery}
                  />
                ))}
              </div>
            </div>

            {/* Resort Photo Gallery - Rendered ONLY on that resort's page */}
            <div className="pt-6">
              {selectedResort.id === 'dandeli-jungle-resort' && (
                <JungleResortGallery onOpenGallery={onOpenGallery} />
              )}

              {selectedResort.id === 'dandeli-cottages' && (
                <DandeliCottagesGallery onOpenGallery={onOpenGallery} />
              )}

              {selectedResort.id === 'dandeli-hills-resort' && (
                <DandeliHillsGallery onOpenGallery={onOpenGallery} />
              )}
            </div>
          </article>
        </div>
      )}
    </div>
  );
};
