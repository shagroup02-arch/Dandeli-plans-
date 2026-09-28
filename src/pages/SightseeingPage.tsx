import React, { useState } from 'react';
import { SIGHTSEEING_DATA, SightseeingSpot } from '../data/sightseeing';
import {
  MapPin,
  Clock,
  Accessibility,
  Images,
  ChevronRight,
  X,
  AlertCircle,
  Maximize2,
  Camera,
  Compass,
} from 'lucide-react';
import { buildWhatsAppUrl, openSafeLink } from '../utils/whatsapp';

interface SightseeingPageProps {
  onOpenGallery: (photos: string[], title: string, subtitle: string, initialIndex?: number) => void;
}

export const SightseeingPage: React.FC<SightseeingPageProps> = ({ onOpenGallery }) => {
  const [selectedSpot, setSelectedSpot] = useState<SightseeingSpot | null>(null);
  const [activePhotoMap, setActivePhotoMap] = useState<Record<string, number>>({});

  const handleBookCab = (spotName: string) => {
    const url = buildWhatsAppUrl({
      customMessage: `Hello Dandeli Plans, I would like to arrange resort stay and cab sightseeing for ${spotName} in Dandeli.`,
    });
    openSafeLink(url);
  };

  const getActivePhotoIndex = (spotId: string) => {
    return activePhotoMap[spotId] || 0;
  };

  const setActivePhotoIndex = (spotId: string, index: number) => {
    setActivePhotoMap((prev) => ({ ...prev, [spotId]: index }));
  };

  // Compile all sightseeing photos for comprehensive showcase
  const allSightseeingPhotos = SIGHTSEEING_DATA.flatMap((s) => s.photos);

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Discover Dandeli
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight">
          Forests. Rivers. Rocks. Viewpoints.
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#9faea5] max-w-2xl mx-auto leading-relaxed">
          From ancient 300-ft monolithic granite ravines and limestone caves to sweeping panoramic sunset viewpoints over the Kali River.
        </p>
      </section>

      {/* 2. Premium Vertical Carousel of Sightseeing Locations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#8ca094] border-b border-[#21352a] pb-3">
          <span className="font-medium text-[#c5a059]">5 Iconic Dandeli Destinations</span>
          <span>Click any photo to open full-resolution photography lightbox</span>
        </div>

        <div className="space-y-8">
          {SIGHTSEEING_DATA.map((spot, idx) => {
            const activeIdx = getActivePhotoIndex(spot.id);
            const activePhoto = spot.photos[activeIdx] || spot.photos[0];

            return (
              <div
                key={spot.id}
                className="group rounded-3xl bg-[#0f1713] border border-[#223329] hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Photo Display & Thumbnail Gallery */}
                  <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between bg-[#070b09] space-y-3">
                    {/* Main Active Photo */}
                    <div
                      onClick={() => onOpenGallery(spot.photos, spot.name, 'Dandeli Sightseeing', activeIdx)}
                      className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden cursor-pointer group/photo border border-[#1d2d23]"
                    >
                      <img
                        src={activePhoto}
                        alt={`${spot.name} view ${activeIdx + 1}`}
                        className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090e0c]/80 via-transparent to-black/30 pointer-events-none" />

                      {/* Number Badge */}
                      <div className="absolute top-3.5 left-3.5 bg-[#090e0c]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#283c30] text-xs font-serif font-bold text-[#c5a059]">
                        0{idx + 1}
                      </div>

                      {/* Enlarge trigger */}
                      <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#090e0c]/85 border border-[#283c30] text-[#c5a059] flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>

                      {/* View All Photos Overlay Badge */}
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#090e0c]/90 backdrop-blur-md text-[11px] font-medium text-[#ede9e0] border border-[#2b3e32]">
                        <Images className="w-3 h-3 text-[#c5a059]" />
                        <span>{spot.photos.length} Real Photos</span>
                      </div>
                    </div>

                    {/* Thumbnail Selector Strip - Pure Images, No Text */}
                    {spot.photos.length > 1 && (
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                        {spot.photos.map((thumb, pIdx) => {
                          const isActive = pIdx === activeIdx;
                          return (
                            <button
                              key={thumb}
                              onClick={() => setActivePhotoIndex(spot.id, pIdx)}
                              className={`relative h-14 w-18 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                                isActive
                                  ? 'border-[#c5a059] scale-102 ring-1 ring-[#c5a059]/50'
                                  : 'border-[#1b2b21] opacity-70 hover:opacity-100 hover:border-[#385342]'
                              }`}
                              aria-label={`View photo ${pIdx + 1} of ${spot.name}`}
                            >
                              <img
                                src={thumb}
                                alt={`Thumbnail ${pIdx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Spot Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a059]">
                          {spot.tagline}
                        </span>
                        <span className="text-xs text-[#95a89e] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                          <span>{spot.distance}</span>
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#d9b870] transition-colors">
                        {spot.name}
                      </h2>

                      <p className="mt-2 text-xs sm:text-sm text-[#9faea5] leading-relaxed">
                        {spot.description}
                      </p>

                      {/* Quick Metadata Matrix */}
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#cad5ce]">
                        <div className="p-2.5 rounded-xl bg-[#0a100d] border border-[#1b2b21]">
                          <span className="text-[10px] text-[#788a80] uppercase block">Timings</span>
                          <span className="font-medium text-[#f0ece3]">{spot.timings}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#0a100d] border border-[#1b2b21]">
                          <span className="text-[10px] text-[#788a80] uppercase block">Entry Fee</span>
                          <span className="font-medium text-[#f0ece3]">{spot.entryFee}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#0a100d] border border-[#1b2b21] col-span-2 sm:col-span-1">
                          <span className="text-[10px] text-[#788a80] uppercase block">Best Season</span>
                          <span className="font-medium text-[#f0ece3]">{spot.bestSeason}</span>
                        </div>
                      </div>

                      {/* Accessibility & Notes */}
                      <div className="mt-3 flex items-start gap-2 text-xs text-[#8ca094]">
                        <Accessibility className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{spot.accessibility}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#1a2921] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedSpot(spot)}
                          className="px-4 py-2 rounded-lg border border-[#2b3e33] hover:border-[#c5a059] text-xs font-semibold text-[#ede8de] hover:text-white transition-colors cursor-pointer"
                        >
                          Read Complete Travel Guide
                        </button>
                        <button
                          onClick={() => onOpenGallery(spot.photos, spot.name, 'Dandeli Sightseeing', activeIdx)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c5a059] hover:bg-[#14231b] transition-colors cursor-pointer"
                        >
                          <Images className="w-3.5 h-3.5" />
                          <span>Gallery ({spot.photos.length})</span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleBookCab(spot.name)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <span>Arrange Stay & Cab</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Comprehensive All-Sightseeing Visual Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
              Dandeli Sightseeing Highlights
            </h2>
            <p className="text-xs sm:text-sm text-[#95a69d] mt-1 max-w-xl">
              Real field photography across Syntheri Rock canyon, Moulangi bamboo rapids, Sykes Point panorama, Kavale limestone caverns, and Dandakaranya woodland park.
            </p>
          </div>

          <button
            onClick={() => onOpenGallery(allSightseeingPhotos, 'Dandeli Sightseeing Collection', 'Western Ghats Highlights', 0)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14221a] hover:bg-[#1a2e23] border border-[#2d4234] hover:border-[#c5a059] text-xs font-semibold text-[#faf8f5] transition-all cursor-pointer shadow-lg shrink-0"
          >
            <Images className="w-4 h-4 text-[#c5a059]" />
            <span>Open All {allSightseeingPhotos.length} Photos in Lightbox</span>
          </button>
        </div>

        {/* Gallery Grid - Pure Photos, Clean Edge to Edge */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {allSightseeingPhotos.map((photo, idx) => (
            <div
              key={photo}
              onClick={() => onOpenGallery(allSightseeingPhotos, 'Dandeli Sightseeing Collection', 'Western Ghats Highlights', idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#070b09] border border-[#1f2f25] hover:border-[#c5a059] transition-all duration-300 cursor-pointer shadow-lg"
            >
              <img
                src={photo}
                alt={`Dandeli Sightseeing Photo ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#090e0c]/90 border border-[#c5a059] flex items-center justify-center text-[#c5a059] transform scale-75 group-hover:scale-100 transition-transform shadow-xl">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Detailed Guide Modal */}
      {selectedSpot && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative w-full max-w-3xl bg-[#0e1612] border border-[#263c2f] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 my-auto">
            <button
              onClick={() => setSelectedSpot(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#121915] text-[#cfc9be] hover:text-white border border-[#273a2f] cursor-pointer"
              aria-label="Close spot guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block">
                {selectedSpot.distance}
              </span>
              <h2 className="font-serif text-3xl text-[#faf8f5] mt-1">{selectedSpot.name}</h2>
              <p className="text-xs text-[#8ca094] mt-0.5">{selectedSpot.tagline}</p>
            </div>

            {/* Photo Strip in Modal */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {selectedSpot.photos.map((p, pIdx) => (
                <div
                  key={p}
                  onClick={() => {
                    const photos = selectedSpot.photos;
                    const name = selectedSpot.name;
                    setSelectedSpot(null);
                    onOpenGallery(photos, name, 'Dandeli Sightseeing', pIdx);
                  }}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-[#23372b] hover:border-[#c5a059] cursor-pointer group/mphoto"
                >
                  <img
                    src={p}
                    alt={`${selectedSpot.name} ${pIdx + 1}`}
                    className="w-full h-full object-cover group-hover/mphoto:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#ccd7d0] leading-relaxed">
              {selectedSpot.description}
            </p>

            {/* Highlights */}
            <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1e2e25]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d9b870] mb-2.5">
                Key Highlights & Features
              </h4>
              <ul className="space-y-1.5 text-xs text-[#b3c2ba]">
                {selectedSpot.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c5a059] mt-0.5">·</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Notes */}
            <div className="p-3.5 rounded-lg bg-[#141b17] border border-[#303f36] text-xs text-[#b8c6bd] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#e2ded5] block">Travel Advisory:</strong>
                <span>{selectedSpot.notes}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e2e25] flex items-center justify-between">
              <button
                onClick={() => {
                  const photos = selectedSpot.photos;
                  const name = selectedSpot.name;
                  setSelectedSpot(null);
                  onOpenGallery(photos, name, 'Dandeli Sightseeing', 0);
                }}
                className="text-xs text-[#c5a059] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <Images className="w-3.5 h-3.5" />
                <span>View Fullscreen Gallery ({selectedSpot.photos.length})</span>
              </button>

              <button
                onClick={() => handleBookCab(selectedSpot.name)}
                className="px-5 py-2.5 rounded-lg bg-[#c5a059] text-[#090d0c] font-semibold text-xs uppercase tracking-wider hover:bg-[#d9b366] transition-colors cursor-pointer"
              >
                Book Sightseeing Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
