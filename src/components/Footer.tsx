import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Compass, ArrowUpRight } from 'lucide-react';
import { CONTACT_PHONE, buildWhatsAppUrl, getTelUrl } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060908] border-t border-[#1d2923] text-[#c9c4b9] pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Row */}
        <div className="pb-12 border-b border-[#1b2621] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[#c5a059] text-xs font-semibold tracking-widest uppercase">
              Begin Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] mt-1">
              Plan Your Dandeli Escape
            </h2>
            <p className="text-sm text-[#9da9a2] mt-1 max-w-xl">
              Experience handpicked forest stays, roaring Kali River rapids, and serene Western Ghats wilderness.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-sm transition-all shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
            <a
              href={getTelUrl()}
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-[#2b3a32] bg-[#101814] text-[#ede9e0] hover:border-[#c5a059] text-sm font-medium transition-all"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span className="tabular-nums">Call {CONTACT_PHONE}</span>
            </a>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-[#1b2621]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-[#f5c968]/50 bg-[#09150f] p-0.5 flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Dandeli Plans Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-[#f5f2eb]">
                DANDELI PLANS
              </span>
            </div>
            <p className="text-xs text-[#95a39c] leading-relaxed mb-5">
              Curated jungle resorts, Kali River white-water rafting, and responsible wilderness experiences in the Western Ghats of Karnataka.
            </p>
            <div className="space-y-2 text-xs text-[#b8c2bc]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Dandeli, Uttara Kannada, Karnataka – 581325</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span className="tabular-nums">{CONTACT_PHONE}</span>
              </div>
            </div>
          </div>

          {/* Stays & Resorts */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-4">
              Resorts & Cottages
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('/resorts/dandeli-jungle-resort/')}
                  className="hover:text-[#f5f2eb] transition-colors flex items-center gap-1 group"
                >
                  <span>Dandeli Jungle Resort</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#c5a059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/resorts/dandeli-cottages/')}
                  className="hover:text-[#f5f2eb] transition-colors flex items-center gap-1 group"
                >
                  <span>Dandeli Cottages</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#c5a059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/resorts/dandeli-hills-resort/')}
                  className="hover:text-[#f5f2eb] transition-colors flex items-center gap-1 group"
                >
                  <span>Dandeli Hills Resort</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#c5a059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/stay/jungle-resort-packages/')}
                  className="text-[#c5a059] hover:underline"
                >
                  View All Resort Packages →
                </button>
              </li>
            </ul>
          </div>

          {/* Activities & Experiences */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-4">
              Activities & Sights
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('/water-sports/dandeli-white-water-rafting/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  White Water Rafting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/water-sports-packages/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  ₹1,199 Adventure Pass
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/wildlife-safari/dandeli-jungle-safari/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  Dandeli Wildlife Safari Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/dandeli-sightseeing/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  Discover Dandeli Sightseeing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/dandeli-water-sports-price-list-and-best-time/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  Water Sports Price & Season Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Travel */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-4">
              Weekend Trips
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('/packages/dandeli-tour-package-from-bangalore/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  Dandeli Package from Bangalore
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/packages/dandeli-packages-from-pune-mumbai/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  Dandeli Package from Pune / Mumbai
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/about-us/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  About Dandeli Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact-us/')}
                  className="hover:text-[#f5f2eb] transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="pt-8 pb-6 text-[11px] text-[#788880] leading-relaxed border-b border-[#1b2621]/60">
          <p>
            <strong className="text-[#a5b2aa]">Traveler Notice:</strong> Information may change depending on weather, water levels, government/Forest Department rules, operating conditions and seasonal availability. Please confirm current details before travel. Jungle safari tickets are administered exclusively by the Karnataka Forest Department on the spot.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#788880] gap-3">
          <p>© {new Date().getFullYear()} Dandeli Plans. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Primary Phone: {CONTACT_PHONE}</span>
            <span>·</span>
            <span>Western Ghats, Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
