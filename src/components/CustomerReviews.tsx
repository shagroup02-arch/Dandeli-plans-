import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, MessageCircle, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { REVIEWS_DATA, REVIEWS_SUMMARY, Review } from '../data/reviews';
import { buildWhatsAppUrl, getTelUrl, CONTACT_PHONE } from '../utils/whatsapp';

export const CustomerReviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Family' | 'Squad' | 'Couple' | 'Adventure'>('All');
  const [helpfulMap, setHelpfulMap] = useState<Record<string, { count: number; voted: boolean }>>(() => {
    const initial: Record<string, { count: number; voted: boolean }> = {};
    REVIEWS_DATA.forEach((r) => {
      initial[r.id] = { count: r.helpfulCount, voted: false };
    });
    return initial;
  });

  const handleHelpfulClick = (reviewId: string) => {
    setHelpfulMap((prev) => {
      const current = prev[reviewId] || { count: 0, voted: false };
      if (current.voted) {
        return {
          ...prev,
          [reviewId]: { count: current.count - 1, voted: false },
        };
      }
      return {
        ...prev,
        [reviewId]: { count: current.count + 1, voted: true },
      };
    });
  };

  const filteredReviews = activeFilter === 'All'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.groupType === activeFilter);

  return (
    <section id="guest-reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Verified Guest Feedback
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#faf8f5] tracking-tight leading-tight">
          Trusted by 12,000+ Travelers. <br />
          <span className="italic text-[#d9b870]">Real Experiences in the Wilderness.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#9faea5] leading-relaxed">
          Read genuine reflections from families, adventure squads, and couples who explored the Kali River rapids and stayed in Dandeli’s curated forest resorts.
        </p>
      </div>

      {/* Aggregate Rating Summary Card */}
      <div className="bg-gradient-to-br from-[#0e1713] via-[#0a110e] to-[#070b09] border border-[#22352b] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Score Column */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#1c2c23] pb-6 lg:pb-0 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3">
              <span className="font-serif text-5xl sm:text-6xl font-bold text-[#faf8f5] tabular-nums tracking-tight">
                {REVIEWS_SUMMARY.averageRating}
              </span>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[#c5a059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                </div>
                <span className="text-xs text-[#95a89f] block mt-1">
                  Out of 5.0 Stars
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#d1dad5] leading-relaxed">
              Based on <span className="font-semibold text-[#faf8f5]">{REVIEWS_SUMMARY.totalReviews}+</span> verified guest reviews from Bangalore, Pune, Mumbai, Hyderabad, and Goa.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-[#c5a059] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{REVIEWS_SUMMARY.recommendationRate} would recommend to friends & family</span>
            </div>
          </div>

          {/* Sub-Category Ratings Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REVIEWS_SUMMARY.categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#090e0c]/80 border border-[#1b2b22] flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-medium text-[#dce5df] block">
                    {cat.label}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#c5a059] text-[#c5a059]" />
                    ))}
                  </div>
                </div>
                <span className="font-mono text-base font-bold text-[#d9b870] tabular-nums pl-3">
                  {cat.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-[#1b2a21]">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {(['All', 'Family', 'Squad', 'Couple', 'Adventure'] as const).map((tab) => {
            const isActive = activeFilter === tab;
            const count = tab === 'All' ? REVIEWS_DATA.length : REVIEWS_DATA.filter((r) => r.groupType === tab).length;
            return (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#c5a059] text-[#090d0c] font-semibold shadow-md'
                    : 'bg-[#101915] text-[#9fb0a6] hover:text-[#faf8f5] hover:bg-[#16221c] border border-[#213127]'
                }`}
              >
                {tab === 'All' ? 'All Reviews' : `${tab} Trips`} ({count})
              </button>
            );
          })}
        </div>

        <div className="text-xs text-[#879990] flex items-center gap-2">
          <span>Showing {filteredReviews.length} verified stays</span>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => {
          const helpful = helpfulMap[review.id] || { count: review.helpfulCount, voted: false };
          return (
            <div
              key={review.id}
              className="rounded-2xl bg-[#0d1511] border border-[#1e2f24] hover:border-[#c5a059]/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl"
            >
              <div>
                {/* Top Row: Stars + Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                    ))}
                  </div>

                  {review.verified && (
                    <div className="flex items-center gap-1 text-[11px] text-[#71ab8b] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Stay</span>
                    </div>
                  )}
                </div>

                {/* Review Headline */}
                <h3 className="font-serif text-lg text-[#faf8f5] font-semibold leading-snug mb-2.5">
                  "{review.headline}"
                </h3>

                {/* Review Paragraph */}
                <p className="text-xs sm:text-[13px] text-[#9cb0a5] leading-relaxed">
                  {review.content}
                </p>

                {/* Unboxed Metadata Details */}
                <div className="mt-4 pt-4 border-t border-[#18271e] text-[11px] text-[#869a8f] space-y-1">
                  <div className="text-[#d8e2dc]">
                    <span className="font-medium text-[#f0ede6]">{review.resortStayed}</span>
                    <span className="mx-1 text-[#4e6459]">·</span>
                    <span>{review.roomType}</span>
                  </div>
                  <div>
                    <span>{review.stayDate}</span>
                    {review.highlightedActivity && (
                      <>
                        <span className="mx-1 text-[#4e6459]">·</span>
                        <span className="text-[#c5a059]">{review.highlightedActivity}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Footer: Author & Helpful Button */}
              <div className="mt-6 pt-3.5 border-t border-[#18271e] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#faf8f5] block">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-[#7a8d83]">
                    {review.location}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleHelpfulClick(review.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                    helpful.voted
                      ? 'bg-[#1b2d23] text-[#72c293] border border-[#2b4c39]'
                      : 'bg-[#111c16] text-[#8c9e94] hover:text-[#d4ded8] hover:bg-[#18271e] border border-[#213328]'
                  }`}
                  aria-label="Mark review as helpful"
                >
                  <ThumbsUp className={`w-3 h-3 ${helpful.voted ? 'text-[#72c293]' : ''}`} />
                  <span className="tabular-nums">Helpful ({helpful.count})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Direct Help Banner */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#121c17] via-[#0e1713] to-[#121c17] border border-[#223328] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-semibold block mb-1">
            Ready to plan your trip?
          </span>
          <h4 className="font-serif text-xl sm:text-2xl text-[#faf8f5]">
            Talk to Our Dandeli Local Trip Planners
          </h4>
          <p className="text-xs text-[#95a89f] mt-1 max-w-xl">
            Get transparent quotes for couples, families, and student or corporate groups with resort stay, all 3 buffet meals, and Kali River adventures bundled.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
          <a
            href={buildWhatsAppUrl({
              customMessage: 'Hello Dandeli Plans, I went through the customer reviews and would like to plan a trip to Dandeli. Please share availability and package options.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial py-3 px-5 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>

          <a
            href={getTelUrl()}
            className="flex-1 sm:flex-initial py-3 px-4 rounded-lg border border-[#2d4236] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-[#faf8f5] bg-[#111a15] flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Call {CONTACT_PHONE}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
