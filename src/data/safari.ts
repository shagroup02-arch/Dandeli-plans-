import { WILDLIFE_IMAGES } from './images';

export interface WildlifeCard {
  name: string;
  scientificGroup: string;
  status: string;
  habitat: string;
  description: string;
  image: string;
}

export const SAFARI_DATA = {
  youtubeEmbedUrl: 'https://www.youtube.com/embed/roJs6VNrKfE',
  location: 'Kulgi / Phansoli (Pansoli)',
  distanceFromTown: 'Approximately 14 km from Dandeli town',
  routeLength: 'Approx. 14 km forest safari track',
  duration: 'Around 2 hours inside open 4x4 forest jeep',
  season: 'October – May (Preferred operating period)',
  pricing: {
    indianAdult: '₹600 per person',
    children: '5–10 years: 50% of applicable charge (Under 5 free)',
    inclusions: ['Forest Entry Permit', 'Open Jeep Safari Ride', 'Authorized Driver', 'Forest Department Certified Guide'],
    notes: 'Rates and operating conditions can change. Confirm current day’s rate directly at the Forest Department office.',
  },
  timings: [
    {
      slot: 'Morning Safari',
      time: '6:00 AM Slot',
      highlights: 'Best morning golden light for birding and wildlife movement. Visitors must reach the forest office early for spot tokens.',
    },
    {
      slot: 'Evening Safari',
      time: '4:00 PM Slot',
      highlights: 'Second daily operating window as shadows lengthen and diurnal predators become active.',
    },
  ],
  importantNotice:
    'Important: Dandeli Plans does not organise or operate the jungle safari. Safari operations and tickets are handled entirely by the Karnataka Forest Department. Only on-the-spot bookings are available; pre-booking is not available through Dandeli Plans or any private agency.',
  bookingNotice:
    'No online pre-booking through Dandeli Plans. Safari tickets are issued strictly on the spot at the Forest Department counter on a first-come, first-served basis. Slots are strictly capped. Dandeli Plans can assist you with your resort stay, early morning wakeup, local transport, or private cab arrangement to reach the safari gate punctually.',
  planningTip:
    'Trip Planning Tip: Avoid scheduling a long rafting session (which requires several afternoon hours and dam water release) on the exact same morning as your 6:00 AM jungle safari slot. Give each experience its dedicated window.',
  wildlifeDisclaimer:
    'Wildlife sighting disclaimer: Wildlife sightings depend entirely on luck, timing, seasonal forest conditions, waterhole distribution, and animal movements. No specific animal sighting can ever be guaranteed.',
  animals: [
    {
      name: 'Wild Asian Elephant',
      scientificGroup: 'Mammal · Herbivore',
      status: 'Protected Elephant Reserve',
      habitat: 'Dense bamboo thickets & Kali riverbanks',
      description:
        'Dandeli is a vital elephant migration corridor connecting with Goa and Anshi National Park. Herds frequent salt licks and river watering points.',
      image: WILDLIFE_IMAGES.elephant,
    },
    {
      name: 'Indian Gaur (Bison)',
      scientificGroup: 'Bovidae · Forest Herbivore',
      status: 'State Heritage Fauna',
      habitat: 'Evergreen valleys & open forest glades',
      description:
        'Massive wild cattle with muscular crests and distinctive white stockings. Usually seen grazing peacefully in family groups in early morning mist.',
      image: WILDLIFE_IMAGES.bison,
    },
    {
      name: 'Spotted Deer (Chital)',
      scientificGroup: 'Cervidae · Grazing Herbivore',
      status: 'Abundant in Sanctuary',
      habitat: 'Forest borders & grassland clearings',
      description:
        'Graceful herds frequently seen near Kulgi trails, serving as primary prey base for top carnivores and alarm-callers for the forest.',
      image: WILDLIFE_IMAGES.deer,
    },
    {
      name: 'The Black Panther',
      scientificGroup: 'Felidae · Melanistic Leopard',
      status: 'Rare & Elusive',
      habitat: 'Thick canopy rainforest',
      description:
        'Dandeli-Anshi Tiger Reserve (Kali Tiger Reserve) is one of India’s few habitats hosting melanistic leopards, the legendary black panthers.',
      image: WILDLIFE_IMAGES.blackPanther,
    },
    {
      name: 'Indian Leopard',
      scientificGroup: 'Felidae · Apex Predator',
      status: 'Schedule I Protected',
      habitat: 'Rocky ridges & high tree branches',
      description:
        'Masters of camouflage resting across tall teak boughs during the day and descending to hunt nocturnal prey under cover of dark.',
      image: WILDLIFE_IMAGES.leopard,
    },
    {
      name: 'Great Indian Hornbill',
      scientificGroup: 'Bucerotidae · Canopy Aviary',
      status: 'Flagship Dandeli Bird',
      habitat: 'Tall Ficus & fruit-bearing rainforest trees',
      description:
        'Dandeli is celebrated as Karnataka’s Hornbill Capital. Its deep whooshing wingbeats and colossal yellow casque are iconic jungle highlights.',
      image: WILDLIFE_IMAGES.hornbills,
    },
    {
      name: 'Exotic Forest Birds',
      scientificGroup: 'Avian · Over 300+ Species',
      status: 'Global Birding Hotspot',
      habitat: 'Canopy layers & riparian zones',
      description:
        'Including Malabar Pied Hornbills, Emerald Doves, Malabar Trogons, Crested Serpent Eagles, and vibrant kingfishers along Kali tributaries.',
      image: WILDLIFE_IMAGES.forestBirds,
    },
  ],
  gallery: WILDLIFE_IMAGES.gallery,
};
