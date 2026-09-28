import { SIGHTSEEING_IMAGES } from './images';

export interface SightseeingSpot {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  distance: string;
  timings: string;
  entryFee: string;
  accessibility: string;
  bestSeason: string;
  teaser: string;
  description: string;
  highlights: string[];
  photos: string[];
  notes: string;
}

export const SIGHTSEEING_DATA: SightseeingSpot[] = [
  {
    id: 'syntheri-rock',
    name: 'Syntheri Rock',
    slug: 'syntheri-rock',
    tagline: '300-ft Monolithic Granite Marvel',
    distance: '~32 km from Dandeli',
    timings: '8:30 AM – 5:00 PM',
    entryFee: '~₹20 per person + vehicle parking fee',
    accessibility: 'Approximately 200 concrete steps from the parking area',
    bestSeason: 'October – March',
    teaser:
      'A dramatic monolithic granite formation nestled in deep forest, sculpted by geological forces and the Kaneri River.',
    description:
      'A dramatic monolithic granite formation located within the Dandeli forest landscape, shaped by geological processes and long-term water erosion over millions of years. Deep hollows, fissures, and hanging beehives make this a geological spectacle.',
    highlights: [
      'Around 300-foot-high single granite rock face',
      'Naturally eroded hollows, caves, and mineral streaks',
      'The rushing Kaneri River coursing past the rock base',
      'Towering forest ravine setting rich in birdlife',
    ],
    photos: SIGHTSEEING_IMAGES.syntheriRock,
    notes:
      'Timings, entry fees and access conditions should be confirmed locally before your trip. Swimming in the river pool is prohibited due to treacherous undercurrents.',
  },
  {
    id: 'moulangi-eco-park',
    name: 'Moulangi Eco Park',
    slug: 'moulangi-eco-park',
    tagline: 'Bamboo Groves & River Rapids',
    distance: '~11 km from Dandeli Bus Stand',
    timings: '9:00 AM – 5:00 PM',
    entryFee: '~₹20–30 per person',
    accessibility: 'Easy walking trails along the water edge, gentle terrain',
    bestSeason: 'October – March',
    teaser:
      'A tranquil riverside retreat shaded by dense bamboo canopies and sculpted limestone boulders.',
    description:
      'A peaceful forest destination along the Moulangi River, surrounded by bamboo groves, rock formations and natural scenery. Popular for riverside picnics, listening to forest silence, and enjoying natural pools between rapids.',
    highlights: [
      'Dense towering bamboo forest corridors',
      'Scenic river views and cool clear forest streams',
      'Natural rock formations ideal for sitting & photography',
      'Designated shaded picnic areas and open space',
    ],
    photos: SIGHTSEEING_IMAGES.moulangi,
    notes:
      'Water levels can increase significantly during monsoon conditions and water releases. Always adhere to local safety warning signs along the river edge.',
  },
  {
    id: 'sykes-point',
    name: 'Sykes Kanive Viewpoint',
    slug: 'sykes-point',
    tagline: 'Ghats Panorama & Sunset Gorge',
    distance: '~23 km from Dandeli',
    timings: 'Generally 5:00 AM – 5:00 PM',
    entryFee: 'Forest / KPCL regulated; entry passes may apply',
    accessibility: 'Drive up to parking spot followed by short gentle stroll to edge',
    bestSeason: 'October – March',
    teaser:
      'Breathtaking vantage overlooking the Kali River canyon, misty ridges, and Supa Dam waterways.',
    description:
      'Also known simply as Sykes Point, this premier cliff vantage offers sweeping panoramic views across deeply forested valleys and the Kali River gorge winding hundreds of feet below. It provides prime sunset angles and birdwatching over the tree canopy.',
    highlights: [
      'Panoramic 180° views across forested Western Ghats ridges',
      'Spectacular bird’s eye perspective of the Kali River gorge',
      'Prime spot for raptor and hornbill watching in flight',
      'Unmatched sunset viewpoints across Supa hydel landscape',
    ],
    photos: SIGHTSEEING_IMAGES.sykesPoint,
    notes:
      'The area is under KPCL and Forest Department regulation; permits or security clearance may be required depending on current security protocols. Confirm locally before departure.',
  },
  {
    id: 'kavale-caves',
    name: 'Kavale Caves',
    slug: 'kavale-caves',
    tagline: 'Ancient Underground Limestone Caverns',
    distance: '~24 km from Dandeli',
    timings: '6:00 AM – 12:30 PM (Early morning arrival recommended)',
    entryFee: 'Forest checkpoint regulations apply',
    accessibility: 'Approximately 375–400 steps downhill followed by crawl passages',
    bestSeason: 'October – March',
    teaser:
      'Naturally formed caves hidden deep inside dense jungle, featuring a naturally sculpted stalagmite Shivalinga.',
    description:
      'Naturally formed limestone caves within the Dandeli forest region, celebrated for their unique geological features, subterranean moisture, and a naturally formed stalagmite that resembles a sacred Shivalinga worshipped by devotees.',
    highlights: [
      'Ancient natural cave formations and mineral stalactites',
      '375–400 stone steps descending through untouched jungle',
      'Chamber with naturally dripping water and stalagmite linga',
      'Roosting colonies of insectivorous bats and cave ecology',
    ],
    photos: SIGHTSEEING_IMAGES.kavaleCaves,
    notes:
      'Inside the cave passages are narrow with low ceilings; carrying a flashlight is strongly advised. Not recommended for those with claustrophobia or knee mobility issues. Access may be restricted during heavy monsoon rains.',
  },
  {
    id: 'dandakaranya-eco-park',
    name: 'Dandakaranya Eco Park',
    slug: 'dandakaranya-eco-park',
    tagline: 'Green Family Woodland Park',
    distance: 'Located near Dandeli town center',
    timings: '9:00 AM – 6:00 PM',
    entryFee: '~₹10–20 per person',
    accessibility: 'Completely flat paved walking paths, universally accessible',
    bestSeason: 'October – February',
    teaser:
      'A refreshing family-friendly recreation park with scenic lawns, tall trees, and colorful folklore sculptures.',
    description:
      'A recreational nature park surrounded by greenery and known locally for decorative character sculptures. It provides a relaxed stroll for families, children, and seniors wanting to unwind between water adventure sessions.',
    highlights: [
      'Lush tall tree canopy providing abundant shade',
      'Sculptures of beloved story and cartoon figures for kids',
      'Family-friendly environment with park benches and lawns',
      'Convenient proximity to town and dining options',
    ],
    photos: SIGHTSEEING_IMAGES.dandakaranya,
    notes:
      'Sightseeing spots are distributed across different quadrants of the Dandeli region, so hiring a private taxi or cab through your resort package is recommended. No affiliation with Disney or Marvel is implied.',
  },
];
