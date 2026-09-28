export interface JungleGalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'all' | 'stays' | 'grounds' | 'amenities' | 'activities';
  categoryLabel: string;
  aspect?: string;
  description: string;
}

export const JUNGLE_RESORT_GALLERY: JungleGalleryItem[] = [
  {
    id: 'gallery-01',
    url: '/images/jungle_resort_gallery/gallery-01.webp',
    title: 'Resort Garden Cottage Walkway',
    category: 'grounds',
    categoryLabel: 'Resort Grounds',
    description: 'Paved stone pathway meandering between private cottages nestled beneath the dense teak and bamboo canopy.',
  },
  {
    id: 'gallery-02',
    url: '/images/jungle_resort_gallery/gallery-02.png',
    title: 'Standard 10+ Sharing Dormitory Hall',
    category: 'stays',
    categoryLabel: 'Rooms & Stays',
    description: 'Air-conditioned communal sanctuary with clean bedding, ample walking space, and private group facilities.',
  },
  {
    id: 'gallery-03',
    url: '/images/jungle_resort_gallery/gallery-03.png',
    title: 'Bamboo Eco-Cottage Interior',
    category: 'stays',
    categoryLabel: 'Rooms & Stays',
    description: 'Handcrafted sustainable treated bamboo wood construction with plush bedding and serene forest acoustics.',
  },
  {
    id: 'gallery-04',
    url: '/images/jungle_resort_gallery/gallery-04.png',
    title: 'Forest Resort Grounds & Canopy Lounge',
    category: 'grounds',
    categoryLabel: 'Resort Grounds',
    description: 'Open-air forest retreat zones designed for unwinding in the cool shade of ancient Western Ghats trees.',
  },
  {
    id: 'gallery-05',
    url: '/images/jungle_resort_gallery/gallery-05.png',
    title: 'Deluxe Cottage Bedroom & Suite',
    category: 'stays',
    categoryLabel: 'Rooms & Stays',
    description: 'Generously proportioned bedroom with king bed, split climate control, and large garden-facing windows.',
  },
  {
    id: 'gallery-06',
    url: '/images/jungle_resort_gallery/gallery-06.png',
    title: 'Evening Campfire & Gathering Lawn',
    category: 'amenities',
    categoryLabel: 'Amenities & Dining',
    description: 'Cozy campfire area set under the night sky for music, evening conversations, and stargazing.',
  },
  {
    id: 'gallery-07',
    url: '/images/jungle_resort_gallery/gallery-07.png',
    title: 'Deluxe Cottage Multi-Bed Family Setup',
    category: 'stays',
    categoryLabel: 'Rooms & Stays',
    description: 'Spacious family layout with multiple comfortable beds, premium linens, and modern attached bathroom.',
  },
  {
    id: 'gallery-08',
    url: '/images/jungle_resort_gallery/gallery-08.png',
    title: 'Swimming Pool & Rain Dance Arena',
    category: 'amenities',
    categoryLabel: 'Amenities & Dining',
    description: 'Freshwater swimming pool and lively rain dance floor with music system for refreshing afternoon unwinding.',
  },
  {
    id: 'gallery-09',
    url: '/images/jungle_resort_gallery/gallery-09.png',
    title: 'Buffet Dining Pavilion',
    category: 'amenities',
    categoryLabel: 'Amenities & Dining',
    description: 'Spacious covered dining area serving buffet lunch, evening tea/coffee, campfire dinner, and breakfast.',
  },
  {
    id: 'gallery-10',
    url: '/images/jungle_resort_gallery/gallery-10.webp',
    title: 'Guided Nature Trek & Jungle Trail',
    category: 'activities',
    categoryLabel: 'Activities & Nature',
    description: 'Morning guided walking trail through rich forest greenery with bird watching and flora discovery.',
  },
  {
    id: 'gallery-11',
    url: '/images/jungle_resort_gallery/gallery-11.webp',
    title: 'Kali River Boating & Water Sports',
    category: 'activities',
    categoryLabel: 'Activities & Nature',
    description: 'Kali River water activities including kayaking, boating, and zorbing included as standard in resort packages.',
  },
  {
    id: 'gallery-12',
    url: '/images/jungle_resort_gallery/gallery-12.png',
    title: 'Panoramic Resort Forest Sanctuary',
    category: 'grounds',
    categoryLabel: 'Resort Grounds',
    description: 'Breathtaking landscape view capturing the peaceful natural setting and secluded jungle perimeter of the resort.',
  },
];
