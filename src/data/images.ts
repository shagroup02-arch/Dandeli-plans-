/**
 * Dandeli Plans - Centralized Image Asset Mapping
 * 
 * You can replace any of these paths with your own custom image files placed in /public/images/
 * Each room has image1, image2, image3 as specified.
 */

// Helper function to create cinematic gradient SVG placeholder with subtle nature motifs
function createResortSvg(title: string, subtitle: string, hue1: string, hue2: string, motif: 'cottage' | 'river' | 'mountain' | 'wildlife' | 'cave' | 'activity'): string {
  const motifPaths = {
    cottage: `<path d="M100 320 L250 200 L400 320 Z" fill="none" stroke="#d4af37" stroke-width="3" opacity="0.6"/>
              <rect x="130" y="320" width="240" height="140" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.5"/>
              <rect x="220" y="380" width="60" height="80" fill="#d4af37" fill-opacity="0.1" stroke="#d4af37" stroke-width="1.5"/>
              <path d="M50 480 Q250 460 450 480" stroke="#2a4537" stroke-width="4" fill="none"/>
              <circle cx="250" cy="170" r="40" fill="#d4af37" fill-opacity="0.15"/>`,
    river: `<path d="M0 380 Q150 320 300 390 T500 350 L500 500 L0 500 Z" fill="#133038" opacity="0.7"/>
            <path d="M0 420 Q180 370 340 430 T500 400" fill="none" stroke="#48b0c8" stroke-width="3" opacity="0.8"/>
            <path d="M220 370 L280 370 L270 395 L230 395 Z" fill="#d4af37" opacity="0.9"/>
            <circle cx="240" cy="355" r="7" fill="#fff" opacity="0.9"/>
            <circle cx="260" cy="355" r="7" fill="#fff" opacity="0.9"/>
            <line x1="210" y1="380" x2="270" y2="400" stroke="#fff" stroke-width="2"/>`,
    mountain: `<path d="M50 450 L200 240 L350 450 Z" fill="#1b2e27" opacity="0.8"/>
               <path d="M220 450 L380 200 L500 450 Z" fill="#14241e" opacity="0.9"/>
               <path d="M200 240 L240 300 L180 300 Z" fill="#d4af37" fill-opacity="0.3"/>
               <path d="M380 200 L420 270 L350 270 Z" fill="#d4af37" fill-opacity="0.3"/>
               <circle cx="200" cy="180" r="50" fill="#d4af37" fill-opacity="0.2"/>`,
    wildlife: `<path d="M200 360 C180 310 230 270 280 280 C320 290 350 330 340 370 C330 400 310 430 270 430 C230 430 210 400 200 360 Z" fill="#2b3b33"/>
               <path d="M220 300 C200 290 190 270 190 250 C210 260 230 280 240 290" stroke="#d4af37" stroke-width="3" fill="none"/>
               <circle cx="250" cy="270" r="6" fill="#d4af37"/>
               <path d="M120 450 Q250 430 380 450" stroke="#d4af37" stroke-width="2" opacity="0.4"/>`,
    cave: `<path d="M100 450 Q120 200 250 180 Q380 200 400 450 Z" fill="#121815" stroke="#374d42" stroke-width="2"/>
           <path d="M160 450 Q180 260 250 250 Q320 260 340 450 Z" fill="#090d0b"/>
           <path d="M245 350 L255 350 L252 420 L248 420 Z" fill="#d4af37" opacity="0.7"/>
           <circle cx="250" cy="335" r="12" fill="#d4af37" opacity="0.5"/>`,
    activity: `<circle cx="250" cy="250" r="80" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.6"/>
               <polygon points="235,220 280,250 235,280" fill="#d4af37"/>
               <path d="M150 420 Q250 380 350 420" stroke="#d4af37" stroke-width="1.5" fill="none" opacity="0.4"/>`
  }[motif];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${hue1}"/>
        <stop offset="50%" stop-color="#0f1715"/>
        <stop offset="100%" stop-color="${hue2}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#d4af37" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grain" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.8" fill="#ffffff" opacity="0.04"/>
        <circle cx="12" cy="14" r="0.8" fill="#d4af37" opacity="0.05"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <rect width="100%" height="100%" fill="url(#glow)"/>
    <rect width="100%" height="100%" fill="url(#grain)"/>
    <g>${motifPaths}</g>
    <g transform="translate(40, 70)">
      <text x="0" y="0" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" fill="#f5f2eb" letter-spacing="1">${title}</text>
      <text x="0" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="500" fill="#d4af37" letter-spacing="2" text-transform="uppercase">${subtitle}</text>
    </g>
    <line x1="40" y1="115" x2="120" y2="115" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
    <text x="460" y="475" text-anchor="end" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#6d7a74" letter-spacing="1">DANDELI PLANS</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const RESORT_IMAGES = {
  // Dandeli Jungle Resort
  jungleResort: {
    hero: '/images/bamboo/real-bamboo-1.png',
    bambooCottage: [
      '/images/bamboo/real-bamboo-1.png',
      '/images/bamboo/real-bamboo-2.png',
      '/images/bamboo/real-bamboo-3.png',
    ],
    deluxeCouple: [
      '/images/deluxe_couple/deluxe-couple-1.png',
      '/images/deluxe_couple/deluxe-couple-2.png',
      '/images/deluxe_couple/deluxe-couple-3.png',
      '/images/deluxe_couple/deluxe-couple-4.jpg',
    ],
    deluxeRooms: [
      '/images/deluxe_cottages/deluxe-cottage-1.png',
      '/images/deluxe_cottages/deluxe-cottage-2.png',
      '/images/deluxe_cottages/deluxe-cottage-3.png',
      '/images/deluxe_cottages/deluxe-cottage-4.jpg',
    ],
    dormitory: [
      '/images/dormitory/dormitory-1.png',
      '/images/dormitory/dormitory-2.png',
      '/images/dormitory/dormitory-3.jpg',
    ],
    gallery: [
      '/images/jungle_resort_gallery/gallery-01.webp',
      '/images/jungle_resort_gallery/gallery-02.png',
      '/images/jungle_resort_gallery/gallery-03.png',
      '/images/jungle_resort_gallery/gallery-04.png',
      '/images/jungle_resort_gallery/gallery-05.png',
      '/images/jungle_resort_gallery/gallery-06.png',
      '/images/jungle_resort_gallery/gallery-07.png',
      '/images/jungle_resort_gallery/gallery-08.png',
      '/images/jungle_resort_gallery/gallery-09.png',
      '/images/jungle_resort_gallery/gallery-10.webp',
      '/images/jungle_resort_gallery/gallery-11.webp',
      '/images/jungle_resort_gallery/gallery-12.png',
    ],
  },

  // Dandeli Cottages
  dandeliCottages: {
    hero: '/images/dandeli_cottages/all_gallery/all_gallery-01.jpg',
    aTypeWooden: [
      '/images/dandeli_cottages/a_type_wooden/a_type_wooden-01.jpg',
      '/images/dandeli_cottages/a_type_wooden/a_type_wooden-02.jpg',
      '/images/dandeli_cottages/a_type_wooden/a_type_wooden-03.jpg',
    ],
    woodenCottages: [
      '/images/dandeli_cottages/wooden_cottages/wooden_cottages-01.jpg',
      '/images/dandeli_cottages/wooden_cottages/wooden_cottages-02.jpg',
      '/images/dandeli_cottages/wooden_cottages/wooden_cottages-03.jpg',
      '/images/dandeli_cottages/wooden_cottages/wooden_cottages-04.jpg',
      '/images/dandeli_cottages/wooden_cottages/wooden_cottages-05.jpg',
    ],
    triangleDuplex: [
      '/images/dandeli_cottages/triangle_duplex/triangle_duplex-01.jpg',
      '/images/dandeli_cottages/triangle_duplex/triangle_duplex-03.jpg',
      '/images/dandeli_cottages/triangle_duplex/triangle_duplex-04.jpg',
      '/images/dandeli_cottages/triangle_duplex/triangle_duplex-05.jpg',
      '/images/dandeli_cottages/triangle_duplex/triangle_duplex-06.jpg',
    ],
    deluxeRooms: [
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-02.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-03.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-04.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-05.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-06.jpg',
    ],
    deluxeCottages: [
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-02.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-03.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-04.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-05.jpg',
      '/images/dandeli_cottages/deluxe_cottages/deluxe_cottages-06.jpg',
    ],
    dormitory: [
      '/images/dandeli_cottages/dormitory/dormitory-01.jpg',
      '/images/dandeli_cottages/dormitory/dormitory-02.jpg',
      '/images/dandeli_cottages/dormitory/dormitory-03.jpg',
      '/images/dandeli_cottages/dormitory/dormitory-05.jpg',
      '/images/dandeli_cottages/dormitory/dormitory-06.jpg',
    ],
    gallery: [
      '/images/dandeli_cottages/all_gallery/all_gallery-01.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-02.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-03.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-04.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-05.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-06.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-07.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-08.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-09.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-10.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-11.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-12.jpg',
      '/images/dandeli_cottages/all_gallery/all_gallery-13.jpg',
    ],
  },

  // Dandeli Hills Resort
  dandeliHills: {
    hero: '/images/dandeli_hills/gallery/gallery_01.jpg',
    hillViewCouple: [
      '/images/dandeli_hills/hill_view_couple/hill_couple_01.jpg',
      '/images/dandeli_hills/hill_view_couple/hill_couple_02.jpg',
      '/images/dandeli_hills/hill_view_couple/hill_couple_03.jpg',
    ],
    deluxeFamily: [
      '/images/dandeli_hills/deluxe_family/deluxe_family_01.jpg',
      '/images/dandeli_hills/deluxe_family/deluxe_family_02.jpg',
      '/images/dandeli_hills/deluxe_family/deluxe_family_03.jpg',
    ],
    triplexDeluxe: [
      '/images/dandeli_hills/triplex_deluxe/triplex_deluxe_01.jpg',
      '/images/dandeli_hills/triplex_deluxe/triplex_deluxe_02.jpg',
      '/images/dandeli_hills/triplex_deluxe/triplex_deluxe_03.jpg',
    ],
    dormitory: [
      '/images/dandeli_hills/dormitory/dormitory_01.jpg',
      '/images/dandeli_hills/dormitory/dormitory_02.jpg',
    ],
    gallery: [
      '/images/dandeli_hills/gallery/gallery_01.jpg',
      '/images/dandeli_hills/gallery/gallery_02.jpg',
      '/images/dandeli_hills/gallery/gallery_03.jpg',
      '/images/dandeli_hills/gallery/gallery_04.jpg',
      '/images/dandeli_hills/gallery/gallery_05.jpg',
      '/images/dandeli_hills/gallery/gallery_06.jpg',
      '/images/dandeli_hills/gallery/gallery_07.jpg',
      '/images/dandeli_hills/gallery/gallery_08.jpg',
      '/images/dandeli_hills/gallery/gallery_09.jpg',
      '/images/dandeli_hills/gallery/gallery_10.jpg',
    ],
  },
};

export const ADVENTURE_IMAGES = {
  heroRafting: createResortSvg('White Water Rafting', 'Kali River Class III Rapids', '#0b2633', '#051117', 'river'),
  shortRafting: createResortSvg('Short Rafting (1.2 km)', '1 Rapid Thrill', '#0d2e3d', '#06141b', 'river'),
  midRafting: createResortSvg('Mid Rafting (5 km)', '3 Rapids Adventure', '#103749', '#081822', 'river'),
  longRafting: createResortSvg('Long Rafting (9-11 km)', '5-8 Rapids Expedition', '#124156', '#091d29', 'river'),
  kayaking: '/images/activities/kayaking_main.jpg',
  zipline: '/images/activities/zipline_main.jpg',
  boating: '/images/activities/boating_main.jpg',
  zorbing: '/images/activities/zorbing_main.jpg',
  adventurePass: createResortSvg('Water Adventure Pass', '5 Thrills in One · ₹1,199', '#242b17', '#0f130a', 'activity'),
};

export const WILDLIFE_IMAGES = {
  heroSafari: '/images/safari/gallery/gallery_01.jpg',
  elephant: '/images/safari/elephant.jpg',
  deer: '/images/safari/deer.jpg',
  bison: '/images/safari/bison.jpg',
  blackPanther: '/images/safari/black_panther.jpg',
  leopard: '/images/safari/leopard.jpg',
  hornbills: '/images/safari/hornbill.jpg',
  forestBirds: '/images/safari/forest_bird.jpg',
  gallery: [
    '/images/safari/gallery/gallery_01.jpg',
    '/images/safari/gallery/gallery_02.jpg',
    '/images/safari/gallery/gallery_03.jpg',
    '/images/safari/gallery/gallery_04.jpg',
    '/images/safari/gallery/gallery_05.jpg',
    '/images/safari/gallery/gallery_06.jpg',
    '/images/safari/gallery/gallery_07.jpg',
    '/images/safari/gallery/gallery_08.jpg',
    '/images/safari/gallery/gallery_09.jpg',
    '/images/safari/gallery/gallery_10.jpg',
    '/images/safari/gallery/gallery_11.jpg',
    '/images/safari/gallery/gallery_12.jpg',
    '/images/safari/gallery/gallery_13.jpg',
    '/images/safari/gallery/gallery_14.jpg',
    '/images/safari/gallery/gallery_15.jpg',
    '/images/safari/gallery/gallery_16.jpg',
    '/images/safari/gallery/gallery_17.jpg',
    '/images/safari/gallery/gallery_18.jpg',
    '/images/safari/gallery/gallery_19.jpg',
    '/images/safari/gallery/gallery_20.jpg',
    '/images/safari/gallery/gallery_21.jpg',
    '/images/safari/gallery/gallery_22.jpg',
    '/images/safari/gallery/gallery_23.jpg',
    '/images/safari/gallery/gallery_24.jpg',
  ],
};

export const SIGHTSEEING_IMAGES = {
  syntheriRock: [
    '/images/sightseeing/syntheri_rock/syntheri_rock_01.jpg',
    '/images/sightseeing/syntheri_rock/syntheri_rock_02.jpg',
    '/images/sightseeing/syntheri_rock/syntheri_rock_03.jpg',
  ],
  dandakaranya: [
    '/images/sightseeing/dandakaranya/dandakaranya_01.jpg',
    '/images/sightseeing/dandakaranya/dandakaranya_02.jpg',
    '/images/sightseeing/dandakaranya/dandakaranya_03.jpg',
    '/images/sightseeing/dandakaranya/dandakaranya_04.jpg',
  ],
  moulangi: [
    '/images/sightseeing/moulangi/moulangi_01.jpg',
    '/images/sightseeing/moulangi/moulangi_02.jpg',
    '/images/sightseeing/moulangi/moulangi_03.jpg',
    '/images/sightseeing/moulangi/moulangi_04.jpg',
    '/images/sightseeing/moulangi/moulangi_05.jpg',
    '/images/sightseeing/moulangi/moulangi_06.jpg',
  ],
  sykesPoint: [
    '/images/sightseeing/sykes_point/sykes_point_01.jpg',
    '/images/sightseeing/sykes_point/sykes_point_02.jpg',
    '/images/sightseeing/sykes_point/sykes_point_03.jpg',
    '/images/sightseeing/sykes_point/sykes_point_04.jpg',
  ],
  kavaleCaves: [
    '/images/sightseeing/kavale_caves/kavale_caves_01.jpg',
    '/images/sightseeing/kavale_caves/kavale_caves_02.jpg',
    '/images/sightseeing/kavale_caves/kavale_caves_03.jpg',
  ],
};
