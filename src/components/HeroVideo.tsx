import React from 'react';
import { ArrowDown, MessageCircle, Compass } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface HeroVideoProps {
  onExploreResorts: () => void;
  onScrollToSearch: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onExploreResorts, onScrollToSearch }) => {
  return (
    <section className="relative w-full h-screen min-h-[660px] flex items-center justify-center overflow-hidden bg-[#050d09]">
      {/* 1. Background Video (Google Drive Dandeli Video) with Native Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero_drive_poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-[1.01]"
      >
        <source src="/videos/hero_video_drive.mp4" type="video/mp4" />
        <source src="/videos/hero-dandeli.mp4" type="video/mp4" />
      </video>

      {/* 2. Multi-Layer Cinematic Scrim for 100% Guaranteed Text & Button Clarity */}
      {/* Deep top-to-bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d09]/85 via-[#050d09]/55 to-[#050d09]/92 pointer-events-none" />
      {/* Radial focus on center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,13,9,0.85)_85%)] pointer-events-none" />
      {/* Warm sunlight tone mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#f5c968]/[0.05] to-[#f5c968]/[0.08] pointer-events-none mix-blend-screen" />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Wordmark */}
        <p className="text-xs sm:text-sm tracking-[0.45em] uppercase text-[#f5f2eb] font-bold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          DANDELI PLANS
        </p>

        {/* Main Heading - Crystal Clear High Contrast */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] max-w-4xl text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.98)]">
          Stay. Explore. <br className="hidden sm:inline" />
          <span className="italic font-normal bg-gradient-to-r from-[#ffeaa7] via-[#f7c858] to-[#e6a834] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Experience Dandeli.
          </span>
        </h1>

        {/* Supporting Line */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#f3efe6] font-medium max-w-2xl text-balance leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          World of Kali River Water Sports & Curated Jungle Forest Stays.
        </p>

        {/* High-Visibility Action Buttons with Bold Contrast */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA: Explore Resorts (Vibrant Gold) */}
          <button
            type="button"
            onClick={onExploreResorts}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#f5be47] to-[#e29e24] hover:from-[#f7c858] hover:to-[#eaab34] text-[#090e0c] font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_10px_35px_rgba(245,190,71,0.5)] border border-[#ffeaa7]/50 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#090e0c]" />
            <span>Explore Resorts</span>
          </button>

          {/* Secondary CTA: WhatsApp Booking (Bright Green Border & Glassmorphic Black) */}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[#25D366] bg-[#07130c]/90 hover:bg-[#0f2418] hover:border-[#2bee74] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.35)] active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>

      {/* High-Contrast Scroll Indicator */}
      <button
        onClick={onScrollToSearch}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#e5e1d7] hover:text-[#f7c858] transition-colors group cursor-pointer focus:outline-none"
        aria-label="Scroll to resort inquiry"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          Scroll to Discover
        </span>
        <div className="w-9 h-9 rounded-full border border-[#f5c968]/70 bg-[#06120b]/90 backdrop-blur-md flex items-center justify-center group-hover:border-[#f7c858] group-hover:shadow-[0_0_20px_rgba(247,200,88,0.4)] shadow-[0_4px_16px_rgba(0,0,0,0.8)] transition-all">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#f7c858]" />
        </div>
      </button>
    </section>
  );
};
