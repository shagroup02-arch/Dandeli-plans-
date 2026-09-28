import { RESORT_IMAGES } from './images';

export interface RoomOption {
  id: string;
  name: string;
  slug: string;
  resortId: string;
  resortName: string;
  tag: string;
  capacity: string;
  pricingDisplay: string;
  pricePerPerson: number;
  couplePricePerPerson?: number;
  groupPricePerPerson?: number;
  features: string[];
  photos: string[];
  description: string;
}

export interface Resort {
  id: string;
  name: string;
  slug: string;
  tag: string;
  tagline: string;
  startingPrice: number;
  description: string;
  heroImage: string;
  rooms: RoomOption[];
  highlights: string[];
  locationNote: string;
}

export const SHARED_PACKAGE_INFO = {
  duration: '1 Night / 2 Days Package',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  meals: {
    title: '3 Buffet Meals Included',
    lunch: {
      time: '1:00 PM – 3:00 PM',
      items: [
        'Ghee rice or white rice',
        'Traditional Daal',
        'Signature Chicken Gravy',
        '2 types of seasonal Sabji',
        'Fresh Parota or Chapati',
        '1 Traditional Sweet Dessert',
      ],
    },
    dinner: {
      time: '8:30 PM – 10:30 PM',
      items: [
        'Chicken Gravy',
        'Fragrant Ghee Rice',
        'Steamed White Rice',
        'Flavorful Sabji',
        'Homestyle Daal',
        'Hot Chapatis',
        'Fresh Green Salad',
      ],
    },
    breakfast: {
      time: '8:00 AM – 10:00 AM',
      items: [
        'Bread + Jam',
        'Poori Bhaji OR Idli / Vada / Sambar / Chutney',
        'Hot Tea & Filter Coffee',
      ],
    },
  },
  resortExperiences: [
    'Evening Campfire / Bonfire under starry skies',
    'Rain Dance with DJ Music & Beats',
    'Archery Session',
    'Dart Board',
    'Carrom Board & Indoor Games',
    'Morning Jungle Trekking / Guided Nature Walk',
  ],
  includedSightseeing: [
    'Moulangi Eco Park',
    'Supa Dam View',
    'Crocodile Park',
    'Scenic Backwaters',
  ],
  includedWaterActivities: [
    'Kayaking on calm river waters',
    'Boating across the scenic river',
    'Water Zorbing inside floating sphere',
  ],
  addOnActivities: [
    'Short Rafting (approx. 1.2 km, 1 rapid)',
    'Mid Rafting (approx. 5 km, 3 rapids)',
    'Long Rafting (approx. 9–11 km, 5–8 rapids)',
    'Jungle Safari (Govt Forest Dept operated at Kulgi/Phansoli)',
    'Dandeli Sightseeing Extended Cab Arrangements',
  ],
  disclaimer:
    'Information may change depending on weather, water levels, government/Forest Department rules, operating conditions and seasonal availability. Please confirm current details before travel.',
};

export const RESORTS_DATA: Resort[] = [
  {
    id: 'dandeli-jungle-resort',
    name: 'Dandeli Jungle Resort',
    slug: 'dandeli-jungle-resort',
    tag: 'Premium Forest Resort',
    tagline: 'Premium Resort in Dandeli Forest',
    startingPrice: 1500,
    description:
      "A premium resort surrounded by the natural beauty of Dandeli's forest landscape, designed for comfortable stays and adventure-filled escapes.",
    heroImage: RESORT_IMAGES.jungleResort.hero,
    highlights: [
      'Dense teak and bamboo canopy',
      'Air-conditioned private cottages & dorms',
      'Private campfire grounds & rain dance floor',
      'Direct pickup point for Kali River water sports',
    ],
    locationNote: 'Surrounded by protected forest greens, Dandeli forest corridor',
    rooms: [
      {
        id: 'djr-bamboo-cottage-ac',
        name: 'Bamboo Cottage A/C',
        slug: 'bamboo-cottage-ac',
        resortId: 'dandeli-jungle-resort',
        resortName: 'Dandeli Jungle Resort',
        tag: 'Signature Bamboo Eco-Architecture',
        capacity: '2 to 4 Guests',
        pricingDisplay: 'Couple: ₹2,000/person · 2+ Adults: ₹1,500/person',
        pricePerPerson: 1500,
        couplePricePerPerson: 2000,
        groupPricePerPerson: 1500,
        features: [
          'Eco-crafted bamboo interiors',
          'Split air conditioning',
          'Private verandah looking into forest',
          'Attached modern bath with hot water',
        ],
        photos: RESORT_IMAGES.jungleResort.bambooCottage,
        description:
          'Constructed with sustainable treated bamboo and natural timber, this cottage offers a tranquil private sanctuary with plush king bedding and natural forest acoustics.',
      },
      {
        id: 'djr-deluxe-couple-cottage',
        name: 'Deluxe Couple Cottages A/C',
        slug: 'deluxe-couple-cottage',
        resortId: 'dandeli-jungle-resort',
        resortName: 'Dandeli Jungle Resort',
        tag: 'Intimate Romance & Luxury',
        capacity: '2 Guests',
        pricingDisplay: '₹2,200 per person',
        pricePerPerson: 2200,
        features: [
          'Plush queen bedding',
          'Private nature-facing sit-out',
          'Individual climate control A/C',
          'Complementary tea/coffee kettle',
        ],
        photos: RESORT_IMAGES.jungleResort.deluxeCouple,
        description:
          'Designed especially for couples and honeymooners seeking utmost privacy amidst towering Western Ghats trees, with refined lighting and forest serenity.',
      },
      {
        id: 'djr-deluxe-rooms-ac',
        name: 'Deluxe Cottages A/C',
        slug: 'deluxe-cottages',
        resortId: 'dandeli-jungle-resort',
        resortName: 'Dandeli Jungle Resort',
        tag: 'Family & Group Comfort',
        capacity: '4–6 sharing',
        pricingDisplay: '₹1,600 per person',
        pricePerPerson: 1600,
        features: [
          'Spacious open layout with multiple beds',
          'Air conditioned throughout',
          'Wide forest & garden-facing glass windows',
          'Spacious attached bathroom',
        ],
        photos: RESORT_IMAGES.jungleResort.deluxeRooms,
        description:
          'Generously proportioned luxury cottages tailored for families or close-knit friend circles exploring Dandeli together without compromising on comfort and luxury.',
      },
      {
        id: 'djr-dormitory-ac',
        name: 'Standard 10+ Sharing Dormitory A/C',
        slug: 'dormitory',
        resortId: 'dandeli-jungle-resort',
        resortName: 'Dandeli Jungle Resort',
        tag: 'Corporate & College Group Favorite',
        capacity: '10+ sharing',
        pricingDisplay: '₹1,500 per person',
        pricePerPerson: 1500,
        features: [
          'Full air conditioning across the hall',
          'Comfortable single beds with premium mattresses',
          'Multiple dedicated showers and washrooms',
          'Secure baggage compartments',
        ],
        photos: RESORT_IMAGES.jungleResort.dormitory,
        description:
          'A pristine, air-conditioned communal sanctuary that keeps groups together while delivering full access to all 3 buffet meals, adventure sports, and resort activities.',
      },
    ],
  },
  {
    id: 'dandeli-cottages',
    name: 'Dandeli Cottages',
    slug: 'dandeli-cottages',
    tag: 'Premium Forest Cottages',
    tagline: "Premium Resort in Dandeli's Thick Forest",
    startingPrice: 1500,
    description:
      'Dandeli Cottages is a modern premium resort offering comfort, personalized experiences, top-tier accommodation, exceptional dining, and curated itineraries for an unforgettable stay.',
    heroImage: RESORT_IMAGES.dandeliCottages.hero,
    highlights: [
      'Authentic Nordic and alpine wooden architecture',
      'Deep inside virgin rainforest foliage',
      'Exclusive campfire and stargazing zone',
      'Spacious multi-level duplex units',
    ],
    locationNote: 'Thick evergreen forest zone, quiet seclusion',
    rooms: [
      {
        id: 'dc-a-type-wooden',
        name: 'A-Type Wooden Couple Cottage',
        slug: 'a-type-wooden-cottage',
        resortId: 'dandeli-cottages',
        resortName: 'Dandeli Cottages',
        tag: 'Signature Architectural Masterpiece',
        capacity: '2 Guests',
        pricingDisplay: '₹2,000 per person',
        pricePerPerson: 2000,
        features: [
          'Iconic triangular A-frame teak wood build',
          'Intimate couple loft aesthetic',
          'Private sit-out deck facing thick jungle',
          'Modern bathroom with continuous hot water',
        ],
        photos: RESORT_IMAGES.dandeliCottages.aTypeWooden,
        description:
          'Our most photographed stay. The dramatic steeply pitched timber roof and warm cedar aroma create an unforgettable woodland hideaway.',
      },
      {
        id: 'dc-wooden-cottages',
        name: 'Wooden Cottages',
        slug: 'wooden-cottage',
        resortId: 'dandeli-cottages',
        resortName: 'Dandeli Cottages',
        tag: 'Rustic Timber Cabin',
        capacity: '4 sharing',
        pricingDisplay: '₹1,700 per person',
        pricePerPerson: 1700,
        features: [
          'Full natural log cabin construction',
          'Accommodates 4 guests comfortably',
          'Surrounded by natural teak canopy',
          'Private attached washroom',
        ],
        photos: RESORT_IMAGES.dandeliCottages.woodenCottages,
        description:
          'Constructed using aged seasoned wood, blending traditional Western Ghats carpentry with modern hospitality comforts.',
      },
      {
        id: 'dc-triangle-duplex',
        name: 'Triangle Duplex Cottage',
        slug: 'triangle-duplex-cottage',
        resortId: 'dandeli-cottages',
        resortName: 'Dandeli Cottages',
        tag: 'Two-Tier Group Experience',
        capacity: '8 sharing',
        pricingDisplay: '₹1,600 per person',
        pricePerPerson: 1600,
        features: [
          'Two levels with internal wooden staircase',
          'Accommodates up to 8 adults effortlessly',
          'Panoramic upper forest canopy view',
          'Double ensuite washrooms',
        ],
        photos: RESORT_IMAGES.dandeliCottages.triangleDuplex,
        description:
          'A two-story triangular wooden chalet allowing large families or travel squads to stay together in an elevated architectural setting.',
      },
      {
        id: 'dc-deluxe-rooms',
        name: 'Deluxe Cottages',
        slug: 'deluxe-cottages',
        resortId: 'dandeli-cottages',
        resortName: 'Dandeli Cottages',
        tag: 'Comfortable Forest Cottages',
        capacity: '5 sharing',
        pricingDisplay: '₹1,700 per person',
        pricePerPerson: 1700,
        features: [
          'Spacious contemporary layout with multiple beds',
          'Double and twin bed configurations',
          'Balcony overlooking resort gardens & trees',
          'High ceilings with natural ventilation and attached bath',
        ],
        photos: RESORT_IMAGES.dandeliCottages.deluxeCottages,
        description:
          'Spacious, quiet, and well-appointed luxury cottages tailored for groups wanting premium comfort wrapped in thick forest serenity.',
      },
      {
        id: 'dc-dormitory',
        name: 'Dormitory',
        slug: 'dormitory',
        resortId: 'dandeli-cottages',
        resortName: 'Dandeli Cottages',
        tag: 'Grand Squad Sanctuary',
        capacity: '12+ sharing',
        pricingDisplay: '₹1,500 per person',
        pricePerPerson: 1500,
        features: [
          'High capacity bunk arrangement',
          'Multiple hot water washrooms',
          'Large common sitting lounge',
          'Full package meals and activities included',
        ],
        photos: RESORT_IMAGES.dandeliCottages.dormitory,
        description:
          'The ultimate group getaway option in Dandeli, keeping everyone unified for campfire songs, shared meals, and adventure sports.',
      },
    ],
  },
  {
    id: 'dandeli-hills-resort',
    name: 'Dandeli Hills Resort',
    slug: 'dandeli-hills-resort',
    tag: 'Luxury Hill View Resort',
    tagline: 'In the Heart of the Western Ghats',
    startingPrice: 1600,
    description:
      'A luxurious hill-view escape in the Western Ghats, combining scenic surroundings with comfortable accommodation and adventure experiences.',
    heroImage: RESORT_IMAGES.dandeliHills.hero,
    highlights: [
      'Elevated ridge views of misty Western Ghats valleys',
      'Cooler hilltop breeze and scenic sunrise vantage',
      'Lush landscaped lawns for evening campfires',
      'Panoramic decks overlooking rolling hills',
    ],
    locationNote: 'Elevated Western Ghats ridge with valley panorama',
    rooms: [
      {
        id: 'dh-hill-view-couple',
        name: 'Hill View Couple Room',
        slug: 'hill-view-couple-room',
        resortId: 'dandeli-hills-resort',
        resortName: 'Dandeli Hills Resort',
        tag: 'Valley Vista for Couples',
        capacity: '2 Guests',
        pricingDisplay: '₹2,000 per person',
        pricePerPerson: 2000,
        features: [
          'Unobstructed mountain valley viewpoint',
          'Private sunset sit-out balcony',
          'King posture-pedic mattress',
          'Modern rain shower bath',
        ],
        photos: RESORT_IMAGES.dandeliHills.hillViewCouple,
        description:
          'Wake up to clouds drifting below your private balcony. Pure relaxation paired with breathtaking Western Ghats mountain vistas.',
      },
      {
        id: 'dh-deluxe-family',
        name: 'Deluxe Family Room',
        slug: 'deluxe-family-room',
        resortId: 'dandeli-hills-resort',
        resortName: 'Dandeli Hills Resort',
        tag: 'Panoramic Hill Family Suite',
        capacity: '6 sharing',
        pricingDisplay: '₹1,600 per person',
        pricePerPerson: 1600,
        features: [
          'Expansive space with multiple beds',
          'Wide bay windows framing forest hills',
          'Dedicated family sitting corner',
          'Spacious attached bathroom',
        ],
        photos: RESORT_IMAGES.dandeliHills.deluxeFamily,
        description:
          'Perfect for multigenerational families and friends wanting to soak in hill breezes together while enjoying our curated hospitality.',
      },
      {
        id: 'dh-triplex-deluxe',
        name: 'Triplex Deluxe',
        slug: 'triplex-deluxe',
        resortId: 'dandeli-hills-resort',
        resortName: 'Dandeli Hills Resort',
        tag: 'Unique Tri-Level Design',
        capacity: '3 sharing',
        pricingDisplay: '₹1,800 per person',
        pricePerPerson: 1800,
        features: [
          'Architectural 3-tier elevation',
          'Dedicated mezzanine viewing lounge',
          'Hill breeze private terrace',
          'Attached luxury washroom',
        ],
        photos: RESORT_IMAGES.dandeliHills.triplexDeluxe,
        description:
          'An inventive architectural layout created for three adults or a small family that loves high-ceiling spatial freedom and hill views.',
      },
      {
        id: 'dh-dormitory',
        name: 'Dormitory',
        slug: 'dormitory',
        resortId: 'dandeli-hills-resort',
        resortName: 'Dandeli Hills Resort',
        tag: 'Hill View Group Dormitory',
        capacity: '10+ sharing',
        pricingDisplay: '₹1,800 per person',
        pricePerPerson: 1800,
        features: [
          'Hill-facing wide window bays',
          'Custom sturdy wooden bunks',
          'Attached washrooms with solar/geyser hot water',
          'Includes all 3 meals & water adventures',
        ],
        photos: RESORT_IMAGES.dandeliHills.dormitory,
        description:
          'Perched high on the resort slope, offering energetic groups a fresh, breezy communal basecamp with unmatched views across the Ghats.',
      },
    ],
  },
];
