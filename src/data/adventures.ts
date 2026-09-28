import { ADVENTURE_IMAGES } from './images';

export interface RaftingTier {
  id: string;
  name: string;
  distance: string;
  rapids: string;
  duration: string;
  price: number;
  description: string;
  features: string[];
}

export interface AdventureActivity {
  id: string;
  name: string;
  slug: string;
  price: number;
  duration?: string;
  thrillLevel: 'Low' | 'Moderate' | 'High';
  tag?: string;
  description: string;
  image: string;
  includedInPass: boolean;
  notes?: string;
}

export const RAFTING_TIERS: RaftingTier[] = [
  {
    id: 'short-rafting',
    name: 'Short Rafting',
    distance: 'Approx. 1.2 km',
    rapids: '1 rapid',
    duration: '~45 minutes',
    price: 600,
    description:
      'A thrilling introduction to white-water rapids on the Kali River. Perfect for beginners and family members eager to test the river currents under expert guidance.',
    features: [
      'Certified river instructor and helmsman',
      'Life jacket and safety helmet included',
      '1 Class II+ river rapid excitement',
      'Pre-rafting briefing and safety dry-run',
    ],
  },
  {
    id: 'mid-rafting',
    name: 'Mid Rafting',
    distance: 'Approx. 5 km',
    rapids: '3 rapids',
    duration: '~1.5 hours',
    price: 1200,
    description:
      'The classic Dandeli river journey. Encounter three energetic rapid stretches interspersed with tranquil forest pools where you can float in deep river currents.',
    features: [
      '3 distinct thrilling river rapids',
      'Scenic floating stretches through evergreen gorge',
      'Full safety gear and safety kayaker backup',
      'Cliff jump point (subject to water level)',
    ],
  },
  {
    id: 'long-rafting',
    name: 'Long Rafting',
    distance: 'Approx. 9–11 km',
    rapids: '5–8 rapids',
    duration: '~3 to 4 hours',
    price: 1800,
    description:
      'The ultimate white-water expedition in South India. Navigate up to 8 rapids through untouched Western Ghats wilderness, carving through ancient granite canyons.',
    features: [
      '5–8 powerful Class III rapids (The Snag, Smugglers Run)',
      'Deep river canyon exploration',
      'Full safety crew and expedition equipment',
      'Return vehicle transfer from pickup point',
    ],
  },
];

export const OTHER_ACTIVITIES: AdventureActivity[] = [
  {
    id: 'kayaking',
    name: 'Kayaking',
    slug: 'dandeli-kayaking',
    price: 200,
    thrillLevel: 'Low',
    description:
      'A self-paddled journey through calmer, scenic stretches of the river or Supa Dam Reservoir. Glide quietly alongside bamboo banks listening to native birdcalls.',
    image: ADVENTURE_IMAGES.kayaking,
    includedInPass: true,
  },
  {
    id: 'river-crossing-zipline',
    name: 'River Crossing Zipline',
    slug: 'dandeli-river-crossing-zipline',
    price: 300,
    thrillLevel: 'High',
    description:
      'An aerial rope adventure where you glide across the river while securely harnessed to a high-tension cable. Feel the rush of the river flowing far beneath your feet.',
    image: ADVENTURE_IMAGES.zipline,
    includedInPass: true,
  },
  {
    id: 'boating',
    name: 'Boating',
    slug: 'dandeli-boating',
    price: 200,
    duration: '20 minutes',
    thrillLevel: 'Low',
    tag: 'Family Friendly',
    description:
      'A peaceful river boat ride ideal for relaxed sightseeing and observing the surrounding natural landscape and wildlife along the Kali river banks.',
    image: ADVENTURE_IMAGES.boating,
    includedInPass: true,
  },
  {
    id: 'water-zorbing',
    name: 'Water Zorbing',
    slug: 'dandeli-water-zorbing',
    price: 200,
    duration: '15 minutes',
    thrillLevel: 'Moderate',
    description:
      'Walk, roll and tumble across the water inside a giant transparent inflatable ball. An exhilarating balance challenge and endless fun for all ages.',
    image: ADVENTURE_IMAGES.zorbing,
    includedInPass: true,
  },
];

export const ADVENTURE_PASS = {
  title: 'DANDELI WATER ADVENTURE PASS',
  tagline: 'All-in-one water adventure offer',
  price: 1199,
  originalValue: 1500,
  savings: 301,
  inclusions: [
    'Short Rafting (1.2 km)',
    'Kayaking',
    'Boating',
    'Water Zorbing',
    'River Crossing Zipline',
  ],
  description:
    'Experience the best of Kali River thrill in a single discounted pass. Includes all mandatory safety gear, life jackets, and certified instructors.',
  badge: 'Special Promotional Pass',
};

export const RAFTING_DISCLAIMER =
  'Important Rafting & River Note: Rafting availability depends strictly on river water levels and upstream water release from the Supa Dam. Dandeli Plans does not guarantee rafting availability on any given date. Prices, routes and operating conditions are subject to safety checks, weather, and local authority permits.';
