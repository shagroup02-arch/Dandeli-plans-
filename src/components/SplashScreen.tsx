import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Hold splash screen for 1.4s, then fade out smoothly
    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setRemoved(true);
        if (onComplete) onComplete();
      }, 700); // 700ms fade transition
      return () => clearTimeout(removeTimer);
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050d09] transition-opacity duration-700 ease-out select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Dandeli Plans"
      role="status"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,201,104,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Center Logo Presentation */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Glowing Outer Rings */}
        <div className="relative mb-6">
          {/* Ambient Glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#e5a83b]/30 to-[#f5c968]/40 blur-xl animate-pulse" />
          
          {/* Border Ring with Rotating Border Gradient */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#f5c968]/70 bg-[#08150f] p-3 flex items-center justify-center shadow-[0_0_40px_rgba(245,201,104,0.25)]">
            <img
              src="/images/logo.png"
              alt="Dandeli Plans Logo"
              className="w-full h-full object-contain animate-fadeIn"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.3em] text-[#faf8f5] mb-2 uppercase">
          DANDELI PLANS
        </h2>
        <p className="text-xs sm:text-sm tracking-[0.25em] text-[#e5a83b] uppercase font-medium mb-6">
          Jungle Stays & River Adventure
        </p>

        {/* Elegant Gold Progress Line */}
        <div className="w-36 sm:w-44 h-0.5 bg-[#172b20] rounded-full overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-[#e5a83b] via-[#ffe599] to-[#e5a83b] w-full animate-[progress_1.4s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
