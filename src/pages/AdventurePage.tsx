import React, { useState, useRef, useEffect } from 'react';
import { RAFTING_TIERS, OTHER_ACTIVITIES, RAFTING_DISCLAIMER } from '../data/adventures';
import { WaterAdventurePassCard } from '../components/WaterAdventurePassCard';
import {
  AlertTriangle,
  MessageCircle,
  Check,
  ShieldCheck,
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
} from 'lucide-react';
import { buildWhatsAppUrl, openSafeLink } from '../utils/whatsapp';

export const AdventurePage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay directly when visitor arrives on Adventure page
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Autoplay deferred by browser:', err);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleInquireActivity = (actName: string, price: number) => {
    const url = buildWhatsAppUrl({
      customMessage: `Hello Dandeli Plans, I would like to enquire about ${actName} (₹${price}). Please share slot timings and river conditions.`,
    });
    openSafeLink(url);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 space-y-16 sm:space-y-20">
      {/* 1. Main Top Hero Video & Header - Direct Play on Page Visit */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b2b23] border border-[#2f4a3c] text-xs font-semibold text-[#d9b870] uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Water Sports & Adventure · Kali River</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#faf8f5] tracking-tight leading-tight">
            Feel the River. <br />
            <span className="italic text-[#d9b870]">Chase the Rapids.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9faea5] leading-relaxed">
            Experience real-action white-water rafting, kayaking, river crossings, and boating on Karnataka's celebrated Kali River in Dandeli.
          </p>
        </div>

        {/* Video Player - Direct Autoplay on Top of Page */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a0f0d] border border-[#25392d] shadow-2xl group">
          <video
            ref={videoRef}
            src="/videos/adventure_hero.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full aspect-[16/9] object-cover cursor-pointer"
            onClick={togglePlay}
          />

          {/* Top Control Bar Overlaid on Video */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 flex items-center justify-between pointer-events-none z-20">
            {/* Live Action Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#090d0c]/80 backdrop-blur-md border border-[#c5a059]/40 text-[#f5f2eb] text-xs font-semibold tracking-wider pointer-events-auto shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dandeli River Action</span>
            </div>

            {/* Controls: Play/Pause, Sound Toggle, Fullscreen */}
            <div className="flex items-center gap-2 pointer-events-auto">
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090d0c]/80 hover:bg-[#090d0c] backdrop-blur-md border border-[#2f4236] text-xs font-semibold text-[#f5f2eb] hover:text-[#c5a059] transition-all shadow-lg active:scale-95 cursor-pointer"
                title={isMuted ? 'Turn Sound ON' : 'Mute Sound'}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-amber-300" />
                    <span className="hidden sm:inline text-[11px]">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline text-[11px]">Sound ON</span>
                  </>
                )}
              </button>

              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={togglePlay}
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#090d0c]/80 hover:bg-[#090d0c] backdrop-blur-md border border-[#2f4236] text-xs font-semibold text-[#f5f2eb] hover:text-[#c5a059] transition-all shadow-lg active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
                title={isPlaying ? 'Pause video' : 'Play video'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span className="hidden sm:inline text-[11px]">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-[#c5a059]" />
                    <span className="hidden sm:inline text-[11px]">Play</span>
                  </>
                )}
              </button>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={handleFullscreen}
                className="p-2 rounded-xl bg-[#090d0c]/80 hover:bg-[#090d0c] backdrop-blur-md border border-[#2f4236] text-[#f5f2eb] hover:text-[#c5a059] transition-all shadow-lg active:scale-95 cursor-pointer"
                title="Watch Fullscreen"
                aria-label="Watch Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Gradient & Quick Booking Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090d0c] via-[#090d0c]/60 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10 pointer-events-auto">
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#c5a059] font-medium block">
                Kali River White Water Rafting
              </span>
              <p className="text-xs sm:text-sm text-[#f5f2eb] font-serif font-medium">
                Class III rapids · Certified guides · Complete safety equipment included
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={buildWhatsAppUrl({ customMessage: 'Hello Dandeli Plans, I would like to book a Kali River rafting slot. Please share availability and current water flow.' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-bold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Rafting Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Safety Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#a2b2aa] pt-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121c17] border border-[#23352b]">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Certified River Instructors</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121c17] border border-[#23352b]">
            <Check className="w-4 h-4 text-[#c5a059]" />
            <span>International Standard Life Jackets</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121c17] border border-[#23352b]">
            <Clock className="w-4 h-4 text-[#c5a059]" />
            <span>Synchronized with Supa Dam Releases</span>
          </div>
        </div>
      </section>

      {/* 2. Important Dam / Water Release Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#141b17] border border-[#3b351e] text-xs text-[#d1c8b2] flex items-start gap-3.5 shadow-lg">
          <AlertTriangle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-[#f5eedb] block text-sm font-medium">
              Important River Rafting Advisory
            </strong>
            <p className="leading-relaxed text-[#b9b099]">
              {RAFTING_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* 3. White Water Rafting Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest block mb-1">
            Signature Kali River Thrill
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
            White Water Rafting Options
          </h2>
          <p className="text-xs sm:text-sm text-[#95a69d] mt-1">
            Choose your expedition based on distance, rapid difficulty, and river duration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RAFTING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="rounded-2xl bg-[#0f1713] border border-[#223329] hover:border-[#c5a059]/60 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">
                    {tier.distance}
                  </span>
                  <span className="text-xs font-mono text-[#8a9b91] bg-[#090f0c] px-2.5 py-1 rounded border border-[#1e2e25]">
                    {tier.rapids}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#faf8f5]">{tier.name}</h3>
                  <div className="text-xs text-[#8ca094] flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Duration: {tier.duration}</span>
                  </div>
                </div>

                <p className="text-xs text-[#a2b3aa] leading-relaxed">
                  {tier.description}
                </p>

                <div className="p-3.5 rounded-xl bg-[#090f0c] border border-[#1e2e25] flex items-baseline justify-between">
                  <span className="text-xs text-[#809187] uppercase tracking-wider">Per Person</span>
                  <div className="font-serif text-3xl font-bold text-[#d9b870]">
                    ₹{tier.price.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#b8c6bd] pt-2">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1b2b22]">
                <button
                  onClick={() => handleInquireActivity(tier.name, tier.price)}
                  className="w-full py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book Rafting Slot</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. High-Impact Adventure Pass Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WaterAdventurePassCard />
      </section>

      {/* 5. Individual Water Activities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest block mb-1">
            Individual Adventures
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
            Kayaking, Boating, Zipline & Zorbing
          </h2>
          <p className="text-xs sm:text-sm text-[#95a69d] mt-1">
            Individual thrilling sessions available ala-carte or bundled in the ₹1,199 Adventure Pass.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OTHER_ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="rounded-2xl bg-[#0f1713] border border-[#223329] hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="h-44 bg-[#070b09] relative overflow-hidden group">
                  <img
                    src={act.image}
                    alt={act.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1713] via-transparent to-transparent" />
                  
                  {act.tag && (
                    <div className="absolute top-3 left-3 bg-[#090e0c]/85 text-[10px] font-semibold text-[#c5a059] px-2.5 py-0.5 rounded-full border border-[#2a3c31]">
                      {act.tag}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-[#090e0c]/90 px-2.5 py-1 rounded text-xs font-serif font-bold text-[#d9b870] border border-[#2a3c31]">
                    ₹{act.price}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif text-xl text-[#faf8f5]">{act.name}</h3>
                    <div className="flex items-center gap-3 text-[11px] text-[#8ea095] mt-1">
                      <span>Thrill: {act.thrillLevel}</span>
                      {act.duration && <span>· Duration: {act.duration}</span>}
                    </div>
                  </div>

                  <p className="text-xs text-[#a2b2a9] leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => handleInquireActivity(act.name, act.price)}
                  className="w-full py-2 rounded-lg border border-[#293d31] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-[#faf8f5] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Enquire Activity</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
