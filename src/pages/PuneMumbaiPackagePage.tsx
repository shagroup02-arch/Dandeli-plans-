import React from 'react';
import { MapPin, Calendar, Clock, Check, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl, getTelUrl, CONTACT_PHONE, openSafeLink } from '../utils/whatsapp';

interface PuneMumbaiPackagePageProps {
  onNavigate: (path: string) => void;
}

export const PuneMumbaiPackagePage: React.FC<PuneMumbaiPackagePageProps> = ({ onNavigate }) => {
  const handleInquire = (city: string) => {
    const url = buildWhatsAppUrl({
      customMessage: `Hello Dandeli Plans, I am planning a Dandeli trip from ${city}. Please share resort cottage availability, water sports packages, and driving/transit directions.`,
    });
    openSafeLink(url);
  };

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Western Maharashtra Getaways
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight max-w-4xl mx-auto">
          Dandeli Resort Packages from Pune & Mumbai
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#9faea5] max-w-2xl mx-auto leading-relaxed">
          The nearest white-water rafting haven and lush Western Ghats forest escape for travelers from Maharashtra. Direct NH 48 highway connectivity via Kolhapur and Belagavi.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => handleInquire('Pune / Mumbai')}
            className="px-6 py-3 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire Package via WhatsApp</span>
          </button>
        </div>
      </section>

      {/* 2. City Specific Routes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* From Pune */}
          <div className="p-8 rounded-3xl bg-[#0f1713] border border-[#223329] space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block">
              Route 01 · ~430 km · 8 hours
            </span>
            <h2 className="font-serif text-3xl text-[#faf8f5]">From Pune</h2>
            <div className="space-y-3 text-xs text-[#a2b2aa] leading-relaxed">
              <p>
                <strong>Driving Route:</strong> Pune (Swargate / Chandani Chowk) → Satara → Karad → Kolhapur → Belagavi (Belgaum) → Khanapur → Londa → Dandeli.
              </p>
              <p>
                <strong>Bus / Train:</strong> Direct daily sleeper buses run from Pune to Dandeli. Alternatively, board express trains to Belagavi or Londa Junction.
              </p>
            </div>
            <button
              onClick={() => handleInquire('Pune')}
              className="w-full py-2.5 rounded-lg border border-[#2c3f33] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-white transition-colors"
            >
              Plan Trip from Pune
            </button>
          </div>

          {/* From Mumbai */}
          <div className="p-8 rounded-3xl bg-[#0f1713] border border-[#223329] space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block">
              Route 02 · ~570 km · 10–11 hours
            </span>
            <h2 className="font-serif text-3xl text-[#faf8f5]">From Mumbai / Navi Mumbai</h2>
            <div className="space-y-3 text-xs text-[#a2b2aa] leading-relaxed">
              <p>
                <strong>Driving Route:</strong> Mumbai → Expressway to Pune → Satara → Kolhapur → Belagavi bypass → Bidi → Alnavar/Haliyal → Dandeli.
              </p>
              <p>
                <strong>Overnight Transit:</strong> Board an evening luxury sleeper coach from Borivali / Vashi or catch overnight trains terminating at Londa Junction.
              </p>
            </div>
            <button
              onClick={() => handleInquire('Mumbai')}
              className="w-full py-2.5 rounded-lg border border-[#2c3f33] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-white transition-colors"
            >
              Plan Trip from Mumbai
            </button>
          </div>
        </div>
      </section>

      {/* 3. Inclusions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#0e1612] border border-[#223329] space-y-6">
          <h3 className="font-serif text-2xl text-[#faf8f5]">
            Maharashtra Traveler Package Inclusions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#cad5ce]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Full 1 Night Resort accommodation in thick teak forest</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>3 Buffet Meals: traditional lunch, night dinner & breakfast</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Complimentary kayaking, boating, and water zorbing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Evening campfire and DJ rain dance party</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
