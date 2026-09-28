import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Compass, ChevronRight } from 'lucide-react';
import { CONTACT_PHONE, buildWhatsAppUrl, getTelUrl } from '../utils/whatsapp';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (resort?: string, room?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Resorts', path: '/stay/jungle-resort-packages/' },
    { label: 'Adventure', path: '/water-sports/' },
    { label: 'Wildlife Safari', path: '/wildlife-safari/dandeli-jungle-safari/' },
    { label: 'Sightseeing', path: '/dandeli-sightseeing/' },
    { label: 'About Us', path: '/about-us/' },
    { label: 'Contact', path: '/contact-us/' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d0c]/95 backdrop-blur-md border-b border-[#23312b]/60 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            aria-label="Dandeli Plans Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#f5c968]/50 bg-[#09150f] p-0.5 flex items-center justify-center overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.6)] group-hover:border-[#f5c968] group-hover:scale-105 transition-all">
              <img
                src="/images/logo.png"
                alt="Dandeli Plans Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#f5f2eb] block leading-none group-hover:text-[#f5c968] transition-colors">
                DANDELI PLANS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#c5a059] uppercase font-medium">
                Jungle Stays & Adventure
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/' || currentPath === ''
                  : currentPath === link.path || currentPath.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative py-1 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#c5a059] font-semibold'
                      : 'text-[#d6d1c7] hover:text-[#f5f2eb]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getTelUrl()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#2c3d35] text-xs font-medium text-[#d9d5cb] hover:border-[#c5a059]/60 hover:text-[#f5f2eb] bg-[#121915]/60 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="tabular-nums font-mono">{CONTACT_PHONE}</span>
            </a>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c5a059] text-[#090d0c] font-semibold text-xs tracking-wider uppercase hover:bg-[#d9b366] transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp / Book Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="lg:hidden p-2 rounded-lg text-[#ede9e0] hover:bg-[#1a2620] focus:outline-none focus:ring-1 focus:ring-[#c5a059] cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a059]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="lg:hidden fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Dropdown container attached right below navbar */}
          <div
            className="lg:hidden absolute top-full left-0 right-0 bg-[#090d0c]/98 backdrop-blur-2xl border-b border-[#23312b] px-5 py-6 shadow-2xl transition-all max-h-[calc(100vh-70px)] overflow-y-auto z-50"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? currentPath === '/' || currentPath === ''
                    : currentPath === link.path || currentPath.startsWith(link.path);
                return (
                  <button
                    type="button"
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-left text-base transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#15201a] text-[#c5a059] font-semibold'
                        : 'text-[#e8e4dc] hover:bg-[#15201a] hover:text-[#c5a059]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#c5a059]' : 'text-[#75847d]'}`} />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#1f2c25] flex flex-col gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#c5a059] text-[#090d0c] font-semibold text-sm uppercase tracking-wider hover:bg-[#d9b366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>

                <a
                  href={getTelUrl()}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#2c3d35] text-[#d9d5cb] text-sm font-medium bg-[#121915] hover:border-[#c5a059] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call {CONTACT_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
