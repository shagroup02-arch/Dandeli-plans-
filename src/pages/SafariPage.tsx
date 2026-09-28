import React, { useState } from 'react';
import { SAFARI_DATA } from '../data/safari';
import {
  AlertCircle,
  Clock,
  MapPin,
  Calendar,
  Car,
  Compass,
  Images,
  Maximize2,
  ChevronDown,
  ChevronUp,
  Camera,
} from 'lucide-react';
import { buildWhatsAppUrl, openSafeLink } from '../utils/whatsapp';

interface SafariPageProps {
  onOpenGallery?: (photos: string[], title: string, subtitle: string, initialIndex?: number) => void;
}

export const SafariPage: React.FC<SafariPageProps> = ({ onOpenGallery }) => {
  const [showAllGallery, setShowAllGallery] = useState(false);

  const handleArrangeCab = () => {
    const url = buildWhatsAppUrl({
      customMessage:
        'Hello Dandeli Plans, I am planning a resort stay and would like assistance with cab arrangement to the Kulgi/Phansoli safari gate for the morning/evening slot.',
    });
    openSafeLink(url);
  };

  const galleryPhotos = SAFARI_DATA.gallery || [];
  const initialDisplayCount = 8;
  const displayedPhotos = showAllGallery ? galleryPhotos : galleryPhotos.slice(0, initialDisplayCount);

  const handleOpenPhoto = (index: number) => {
    if (onOpenGallery && galleryPhotos.length > 0) {
      onOpenGallery(galleryPhotos, 'Jungle Safari Photo Gallery', 'Kali Tiger Reserve, Dandeli', index);
    }
  };

  const handleOpenAnimalPhoto = (animalName: string, animalImage: string) => {
    if (onOpenGallery) {
      const allAnimalPhotos = SAFARI_DATA.animals.map((a) => a.image);
      const foundIdx = allAnimalPhotos.indexOf(animalImage);
      onOpenGallery(
        allAnimalPhotos,
        animalName,
        'Native Wildlife of Dandeli · Kali Tiger Reserve',
        foundIdx >= 0 ? foundIdx : 0
      );
    }
  };

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Forest Department Wilderness Excursion
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight">
          Dandeli Wildlife Safari
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#9faea5] max-w-2xl mx-auto leading-relaxed">
          Traverse the untamed canopy of the Kali Tiger Reserve in an open 4x4 forest jeep. Home to elephants, gaurs, hornbills, and the elusive black panther.
        </p>
      </section>

      {/* 2. CRITICAL SAFARI NOTICE (MANDATORY & HIGHLY VISIBLE) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#1a140b] border-2 border-[#8c6b24] shadow-2xl space-y-3">
          <div className="flex items-center gap-2.5 text-[#d9b870] font-semibold text-sm uppercase tracking-wider">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>Important Forest Department Regulatory Notice</span>
          </div>
          <p className="text-sm text-[#f2e6cb] leading-relaxed font-medium">
            {SAFARI_DATA.importantNotice}
          </p>
          <p className="text-xs text-[#d4c39e] leading-relaxed pt-2 border-t border-[#4a3a19]">
            {SAFARI_DATA.bookingNotice}
          </p>
        </div>
      </section>

      {/* 3. YouTube Cinematic Safari Video Embed */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-[#263a2f] bg-[#070b09] shadow-2xl relative aspect-video">
          <iframe
            src={SAFARI_DATA.youtubeEmbedUrl}
            title="Dandeli Jungle Safari Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
        <p className="text-center text-xs text-[#7d8f85] mt-3">
          Cinematic safari route footage inside the Kali Tiger Reserve forest range.
        </p>
      </section>

      {/* 4. Safari Key Metrics & Practical Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Location */}
          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#223329]">
            <MapPin className="w-5 h-5 text-[#c5a059] mb-3" />
            <h3 className="font-serif text-lg text-[#faf8f5] mb-1">Safari Point</h3>
            <p className="text-xs text-[#c5a059] font-medium">{SAFARI_DATA.location}</p>
            <p className="text-xs text-[#90a297] mt-2 leading-relaxed">
              {SAFARI_DATA.distanceFromTown}. Visitors reach independently, via local transit, or via cab arranged through resort stay.
            </p>
          </div>

          {/* Timings */}
          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#223329]">
            <Clock className="w-5 h-5 text-[#c5a059] mb-3" />
            <h3 className="font-serif text-lg text-[#faf8f5] mb-1">Two Daily Slots</h3>
            <div className="space-y-1.5 text-xs text-[#cad5ce]">
              <div>
                <strong className="text-[#f5f2eb]">6:00 AM Slot:</strong> Best morning photography light.
              </div>
              <div>
                <strong className="text-[#f5f2eb]">4:00 PM Slot:</strong> Afternoon forest window (~2 hours).
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#223329]">
            <span className="font-serif text-lg text-[#faf8f5] block mb-1">Approx. Forest Rate</span>
            <div className="font-serif text-2xl text-[#d9b870] font-bold">
              {SAFARI_DATA.pricing.indianAdult}
            </div>
            <p className="text-xs text-[#90a297] mt-1">
              Children 5–10 years: 50% charge. Includes entry, open jeep, driver & certified guide.
            </p>
          </div>

          {/* Season */}
          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#223329]">
            <Calendar className="w-5 h-5 text-[#c5a059] mb-3" />
            <h3 className="font-serif text-lg text-[#faf8f5] mb-1">Operating Season</h3>
            <p className="text-xs text-[#c5a059] font-medium">{SAFARI_DATA.season}</p>
            <p className="text-xs text-[#90a297] mt-2 leading-relaxed">
              Monsoon conditions can affect track access and safari operations. Always confirm current operating status before travelling.
            </p>
          </div>
        </div>

        {/* Planning Tip Box */}
        <div className="mt-8 p-4 rounded-xl bg-[#0c1410] border border-[#21352a] text-xs text-[#a2b3a9] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#c5a059] shrink-0" />
            <span>{SAFARI_DATA.planningTip}</span>
          </div>

          <button
            onClick={handleArrangeCab}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs transition-colors shrink-0 cursor-pointer"
          >
            <Car className="w-3.5 h-3.5" />
            <span>Arrange Resort Stay & Safari Cab</span>
          </button>
        </div>
      </section>

      {/* 5. Wildlife Flora & Fauna Gallery Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest block mb-1">
            Western Ghats Biodiversity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
            Native Wildlife of Dandeli
          </h2>
          <p className="text-xs sm:text-sm text-[#95a69d] mt-1 max-w-2xl">
            {SAFARI_DATA.wildlifeDisclaimer}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAFARI_DATA.animals.map((animal) => (
            <div
              key={animal.name}
              className="rounded-2xl bg-[#0f1713] border border-[#223329] hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div
                  onClick={() => handleOpenAnimalPhoto(animal.name, animal.image)}
                  className="h-56 bg-[#070b09] relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1713] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 bg-[#090e0c]/85 px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider text-[#c5a059] border border-[#283b30]">
                    {animal.status}
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#090e0c]/80 border border-[#283c30] text-[#cad5ce] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div>
                    <h3 className="font-serif text-xl text-[#faf8f5]">{animal.name}</h3>
                    <span className="text-[11px] text-[#7d9086] block">{animal.scientificGroup}</span>
                  </div>

                  <p className="text-xs text-[#a2b2aa] leading-relaxed">
                    {animal.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#1a2820] text-[11px] text-[#86998f]">
                  <strong>Habitat:</strong> {animal.habitat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Comprehensive Jungle Safari Photo Gallery Section */}
      {galleryPhotos.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Wildlife & Forest Moments</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
                Dandeli Jungle Safari Gallery
              </h2>
              <p className="text-xs sm:text-sm text-[#95a69d] mt-1 max-w-xl">
                High-resolution field captures of untamed Western Ghats wildlife, open-track jeeps, and lush canopy trails inside Kali Tiger Reserve.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenPhoto(0)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14221a] hover:bg-[#1a2e23] border border-[#2d4234] hover:border-[#c5a059] text-xs font-semibold text-[#faf8f5] transition-all cursor-pointer shadow-lg"
              >
                <Images className="w-4 h-4 text-[#c5a059]" />
                <span>View Fullscreen Lightbox ({galleryPhotos.length})</span>
              </button>
            </div>
          </div>

          {/* Photo Grid - Clean Edge-to-Edge Pure Photos, No text overlay */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedPhotos.map((photo, idx) => (
              <div
                key={photo}
                onClick={() => handleOpenPhoto(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#070b09] border border-[#1f2f25] hover:border-[#c5a059] transition-all duration-300 cursor-pointer shadow-lg"
              >
                <img
                  src={photo}
                  alt={`Dandeli Jungle Safari capture ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Hover Ring & Expand Icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#090e0c]/90 border border-[#c5a059] flex items-center justify-center text-[#c5a059] transform scale-75 group-hover:scale-100 transition-transform shadow-xl">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expand / Collapse Button if > initialDisplayCount photos */}
          {galleryPhotos.length > initialDisplayCount && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllGallery(!showAllGallery)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0f1713] border border-[#273d31] hover:border-[#c5a059] text-xs font-semibold text-[#e5ded2] hover:text-[#faf8f5] transition-all cursor-pointer shadow-lg"
              >
                {showAllGallery ? (
                  <>
                    <ChevronUp className="w-4 h-4 text-[#c5a059]" />
                    <span>Show Fewer Photos</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 text-[#c5a059]" />
                    <span>Show All {galleryPhotos.length} Safari Photos</span>
                  </>
                )}
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
