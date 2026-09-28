export interface Review {
  id: string;
  author: string;
  location: string;
  groupType: 'Family' | 'Squad' | 'Couple' | 'Adventure';
  resortStayed: string;
  roomType: string;
  stayDate: string;
  rating: number;
  headline: string;
  content: string;
  helpfulCount: number;
  verified: boolean;
  highlightedActivity?: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Karthik & Sneha Raman',
    location: 'Bangalore (Indiranagar)',
    groupType: 'Family',
    resortStayed: 'Dandeli Jungle Resort',
    roomType: 'Riverside Log Cabin',
    stayDate: 'October 2025',
    rating: 5,
    headline: 'Flawless family weekend — kids loved kayaking and the food was top-notch!',
    content: 'We drove down from Bangalore for a 3-day long weekend with our parents and two kids. Dandeli Plans coordinated everything directly on WhatsApp with zero ambiguity. The Riverside Log Cabin was clean, wooden, and right in the dense jungle. The 3 buffet meals were delicious—especially the chicken curry and fresh chapati. Kayaking and boating right inside the package were completely safe with life jackets for the children.',
    helpfulCount: 38,
    verified: true,
    highlightedActivity: 'Kali Boating & Kayaking',
  },
  {
    id: 'rev-2',
    author: 'Rohan Deshmukh & 7 Friends',
    location: 'Pune',
    groupType: 'Squad',
    resortStayed: 'Starling River & Forest Woods',
    roomType: 'Squad Jungle Dormitory & Villa',
    stayDate: 'November 2025',
    rating: 5,
    headline: 'Epic 9km mid-river rafting + evening campfire with DJ night.',
    content: 'Came down from Pune via Belgaum. We were skeptical about river rafting timings because of dam release rumors, but the team gave us exact real-time water release updates so we reached Ganeshgudi at 9 AM without waiting. The Class 3 rapids on Kali river were breathtaking. Evening campfire with music and the rain dance at the resort was the highlight for our college gang.',
    helpfulCount: 45,
    verified: true,
    highlightedActivity: '9 km Mid Rafting',
  },
  {
    id: 'rev-3',
    author: 'Dr. Shalini Menon & Rajiv',
    location: 'Hyderabad',
    groupType: 'Couple',
    resortStayed: 'Riverwood Luxury Hillside Retreat',
    roomType: 'Panaromic Treehouse Suite',
    stayDate: 'December 2025',
    rating: 5,
    headline: 'Peaceful treetop views, hornbill birdwatching, and great safari guidance.',
    content: 'If you want solitude and serene jungle atmosphere, the Treehouse suite is unforgettable. Waking up to the calls of Great Indian Hornbills and mist rolling over the hills was pure therapy. The Dandeli Plans team guided us on how to reach Kulgi safari counter early at 5:30 AM to secure 4x4 forest department permits. Honest pricing with zero hidden surcharges.',
    helpfulCount: 29,
    verified: true,
    highlightedActivity: 'Wildlife Safari & Birding',
  },
  {
    id: 'rev-4',
    author: 'Vikram & Pooja Patel',
    location: 'Mumbai (Thane)',
    groupType: 'Family',
    resortStayed: 'Dandeli Jungle Resort',
    roomType: 'Family Forest Villa',
    stayDate: 'January 2026',
    rating: 5,
    headline: 'Spacious cottages, swimming pool, and delicious Konkan-style meals.',
    content: 'Traveled overnight by train till Londa Junction, where a cab arranged through their team met us promptly. The resort layout is very spacious and nature-immersed. Even elderly parents enjoyed the gentle morning bird walk and Supa Dam viewpoint drive. Huge value for money considering 3 hot meals, water zorbing, and boating were already included in the per-person package.',
    helpfulCount: 24,
    verified: true,
    highlightedActivity: 'Family Inclusions',
  },
  {
    id: 'rev-5',
    author: 'Ananya Kulkarni & Team',
    location: 'Hubli - Dharwad',
    groupType: 'Adventure',
    resortStayed: 'Starling River & Forest Woods',
    roomType: 'Deluxe Heritage Cottage',
    stayDate: 'February 2026',
    rating: 5,
    headline: 'The ₹1,199 Water Adventure pass was incredible value!',
    content: 'We opted for the day adventure pass combined with an overnight stay. Kayaking, zorbing, river boating, and zip-line were all handled with certified safety instructors. Everything was prompt, and the Kali river canyon views at Sykes point were stunning. Will definitely come back after monsoon!',
    helpfulCount: 19,
    verified: true,
    highlightedActivity: 'Water Sports Pass',
  },
  {
    id: 'rev-6',
    author: 'Capt. Arvind Nair',
    location: 'Goa (Panaji)',
    groupType: 'Couple',
    resortStayed: 'Riverwood Luxury Hillside Retreat',
    roomType: 'Executive Log Cabin',
    stayDate: 'December 2025',
    rating: 5,
    headline: 'Quick 2.5 hour scenic drive from Goa, perfect retreat from the coast.',
    content: 'Living in Goa, we wanted dense forest hills for a weekend change. The drive via Anmod Ghat was smooth. The resort is surrounded by teak and bamboo forests. Clean bathrooms, attentive staff, warm campfire, and silent starry nights. Highly recommend booking through Dandeli Plans for seamless communication.',
    helpfulCount: 21,
    verified: true,
    highlightedActivity: 'Weekend Getaway',
  },
];

export const REVIEWS_SUMMARY = {
  averageRating: 4.9,
  totalReviews: 840,
  recommendationRate: '98%',
  categories: [
    { label: 'River Adventures & Rafting Guidance', score: '5.0' },
    { label: 'Buffet Meals & Dining Quality', score: '4.8' },
    { label: 'Cleanliness & Forest Ambience', score: '4.9' },
    { label: 'Direct WhatsApp Support & Booking', score: '5.0' },
  ],
};
