import { VenueType } from '../types/venue';

export const venues: VenueType[] = [
  {
    id: 'sf-001',
    name: 'Foreign Cinema',
    description: 'Iconic restaurant featuring dinner and a movie in a converted theater space',
    imageUrl: '/venues/foreign-cinema.jpg',
    tags: ['full-service', 'outdoor-seating'],
    category: 'Food',
    classifications: {
      design: ['industrial', 'modern'],
      atmosphere: ['romantic', 'lively', 'sophisticated'],
      features: ['live-music'],
      space: ['outdoor-seating', 'courtyard'],
      scene: ['date-spot', 'creative-types'],
      cuisine: ['american', 'mediterranean'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner', 'weekend-brunch'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-002',
    name: 'State Bird Provisions',
    description: 'Contemporary American dim sum-style restaurant',
    imageUrl: '/venues/state-bird.jpg',
    tags: ['innovative', 'full-service'],
    category: 'Food',
    classifications: {
      design: ['modern', 'industrial'],
      atmosphere: ['lively', 'sophisticated'],
      space: ['open-kitchen'],
      scene: ['foodies', 'date-spot'],
      cuisine: ['american', 'fusion'],
      service: ['full-service'],
      price: '$$$$',
      mealPeriods: ['dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-003',
    name: 'Nopa',
    description: 'California cuisine in a converted bank building',
    imageUrl: '/venues/nopa.jpg',
    tags: ['full-service', 'late-night'],
    category: 'Food',
    classifications: {
      design: ['industrial', 'modern'],
      atmosphere: ['lively', 'energetic'],
      space: ['open-kitchen', 'bar-seating'],
      scene: ['industry-hangout', 'late-night'],
      cuisine: ['american', 'mediterranean'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner', 'late-night', 'weekend-brunch'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-004',
    name: 'Trick Dog',
    description: 'Innovative cocktail bar with creative menu themes',
    imageUrl: '/venues/trick-dog.jpg',
    tags: ['craft-cocktails', 'innovative'],
    category: 'Drinks',
    classifications: {
      theme: ['cocktail-lounge', 'craft-cocktails'],
      design: ['industrial', 'modern'],
      atmosphere: ['lively', 'trendy'],
      space: ['bar-seating', 'mezzanine'],
      scene: ['cocktail-lovers', 'creative-types'],
      features: ['small-plates'],
      price: '$$$'
    }
  },
  {
    id: 'sf-005',
    name: 'Tonga Room',
    description: 'Historic tiki bar with indoor rain shows',
    imageUrl: '/venues/tonga-room.jpg',
    tags: ['historic', 'live-music'],
    category: 'Drinks',
    classifications: {
      theme: ['tiki', 'historic-bar'],
      design: ['traditional', 'vintage'],
      atmosphere: ['lively', 'theatrical'],
      features: ['live-music', 'dancing'],
      scene: ['tourist-friendly', 'mixed-crowd'],
      price: '$$$'
    }
  },
  {
    id: 'sf-006',
    name: 'Lazy Bear',
    description: 'Modern American tasting menu in industrial space',
    imageUrl: '/venues/lazy-bear.jpg',
    tags: ['fine-dining', 'innovative'],
    category: 'Food',
    classifications: {
      design: ['industrial', 'modern'],
      atmosphere: ['sophisticated', 'intimate'],
      space: ['open-kitchen', 'communal-dining'],
      scene: ['foodies', 'special-occasion'],
      cuisine: ['american', 'fusion'],
      service: ['fine-dining'],
      price: '$$$$',
      mealPeriods: ['dinner'],
      specialties: ['tasting-menu', 'seasonal-menu']
    }
  },
  {
    id: 'sf-007',
    name: 'House of Prime Rib',
    description: 'San Francisco institution serving traditional prime rib',
    imageUrl: '/venues/hopr.jpg',
    tags: ['traditional', 'full-service'],
    category: 'Food',
    classifications: {
      design: ['traditional', 'vintage'],
      atmosphere: ['lively', 'traditional'],
      space: ['booth-seating', 'traditional-dining'],
      scene: ['traditional', 'tourist-friendly'],
      cuisine: ['american'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner'],
      specialties: ['tableside-preparation']
    }
  },
  {
    id: 'sf-008',
    name: "Smuggler's Cove",
    description: 'Three-story rum bar with over 500 rum varieties',
    imageUrl: '/venues/smugglers.jpg',
    tags: ['historic', 'craft-cocktails'],
    category: 'Drinks',
    classifications: {
      theme: ['tiki', 'rum-bar', 'historic-bar'],
      design: ['vintage'],
      atmosphere: ['intimate', 'exotic'],
      space: ['multi-level'],
      scene: ['cocktail-lovers', 'date-spot'],
      price: '$$$'
    }
  },
  {
    id: 'sf-009',
    name: 'Cotogna',
    description: 'Rustic Italian cuisine with wood-fired oven',
    imageUrl: '/venues/cotogna.jpg',
    tags: ['full-service', 'traditional'],
    category: 'Food',
    classifications: {
      design: ['rustic', 'traditional'],
      atmosphere: ['lively', 'sophisticated'],
      space: ['open-kitchen', 'traditional-dining'],
      scene: ['date-spot', 'foodies'],
      cuisine: ['italian'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['lunch', 'dinner'],
      specialties: ['house-made-pasta', 'wood-fired-pizza']
    }
  },
  {
    id: 'sf-010',
    name: 'True Laurel',
    description: 'Artisanal cocktail bar with innovative bar food',
    imageUrl: '/venues/true-laurel.jpg',
    tags: ['craft-cocktails', 'innovative'],
    category: 'Drinks',
    classifications: {
      theme: ['cocktail-lounge', 'craft-cocktails'],
      design: ['modern'],
      atmosphere: ['sophisticated', 'intimate'],
      space: ['bar-seating', 'lounge-area'],
      scene: ['cocktail-lovers', 'creative-types'],
      features: ['small-plates'],
      price: '$$$'
    }
  },
  {
    id: 'sf-011',
    name: 'Saison',
    description: 'Refined tasting menus featuring local ingredients and live-fire cooking',
    imageUrl: '/venues/saison.jpg',
    tags: ['fine-dining', 'innovative'],
    category: 'Food',
    classifications: {
      design: ['modern', 'industrial'],
      atmosphere: ['intimate', 'sophisticated'],
      space: ['open-kitchen', 'counter-seating'],
      scene: ['foodies', 'special-occasion'],
      cuisine: ['american', 'fusion'],
      service: ['fine-dining'],
      price: '$$$$',
      mealPeriods: ['dinner'],
      specialties: ['seasonal-menu', 'tasting-menu']
    }
  },
  {
    id: 'sf-012',
    name: 'Bourbon & Branch',
    description: 'Password-protected speakeasy with craft cocktails',
    imageUrl: '/venues/bourbon-branch.jpg',
    tags: ['historic', 'craft-cocktails'],
    category: 'Drinks',
    classifications: {
      theme: ['speakeasy', 'craft-cocktails', 'historic-bar'],
      design: ['vintage'],
      atmosphere: ['intimate', 'sophisticated'],
      space: ['private-rooms', 'lounge-area'],
      scene: ['cocktail-lovers', 'date-spot'],
      price: '$$$'
    }
  },
  {
    id: 'sf-013',
    name: 'Zuni Cafe',
    description: 'California cuisine institution famous for roast chicken',
    imageUrl: '/venues/zuni.jpg',
    tags: ['traditional', 'full-service'],
    category: 'Food',
    classifications: {
      design: ['rustic', 'traditional'],
      atmosphere: ['lively', 'sophisticated'],
      space: ['traditional-dining', 'bar-seating'],
      scene: ['local-hangout', 'tourist-friendly'],
      cuisine: ['american', 'mediterranean'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['lunch', 'dinner', 'weekend-brunch'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-014',
    name: 'Whitechapel',
    description: 'Victorian London Underground-themed gin bar',
    imageUrl: '/venues/whitechapel.jpg',
    tags: ['craft-cocktails', 'historic'],
    category: 'Drinks',
    classifications: {
      theme: ['gin-bar', 'historic-bar'],
      design: ['vintage'],
      atmosphere: ['theatrical', 'unique'],
      space: ['lounge-area', 'bar-seating'],
      scene: ['cocktail-lovers', 'creative-types'],
      price: '$$$'
    }
  },
  {
    id: 'sf-015',
    name: 'Atelier Crenn',
    description: 'Poetic tasting menus in an intimate setting',
    imageUrl: '/venues/atelier-crenn.jpg',
    tags: ['fine-dining', 'innovative'],
    category: 'Food',
    classifications: {
      design: ['modern'],
      atmosphere: ['intimate', 'sophisticated'],
      scene: ['foodies', 'special-occasion'],
      cuisine: ['french', 'fusion'],
      service: ['fine-dining'],
      price: '$$$$',
      mealPeriods: ['dinner'],
      specialties: ['tasting-menu', 'seasonal-menu']
    }
  },
  {
    id: 'sf-016',
    name: 'Nari',
    description: 'Upscale Thai restaurant with modern interpretations of classic dishes',
    imageUrl: '/venues/nari.jpg',
    tags: ['innovative', 'full-service'],
    category: 'Food',
    classifications: {
      design: ['modern'],
      atmosphere: ['sophisticated', 'lively'],
      space: ['open-kitchen', 'bar-seating'],
      scene: ['foodies', 'date-spot'],
      cuisine: ['thai', 'fusion'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-017',
    name: 'Pacific Cocktail Haven',
    description: 'Innovative cocktail bar with Asian-inspired ingredients',
    imageUrl: '/venues/pch.jpg',
    tags: ['craft-cocktails', 'innovative'],
    category: 'Drinks',
    classifications: {
      theme: ['cocktail-lounge', 'craft-cocktails'],
      design: ['modern'],
      atmosphere: ['sophisticated', 'trendy'],
      space: ['bar-seating', 'lounge-area'],
      scene: ['cocktail-lovers', 'creative-types'],
      price: '$$$'
    }
  },
  {
    id: 'sf-018',
    name: 'Kokkari Estiatorio',
    description: 'Upscale Greek restaurant with rustic charm',
    imageUrl: '/venues/kokkari.jpg',
    tags: ['full-service', 'traditional'],
    category: 'Food',
    classifications: {
      design: ['rustic', 'traditional'],
      atmosphere: ['lively', 'sophisticated'],
      space: ['traditional-dining'],
      scene: ['date-spot', 'special-occasion'],
      cuisine: ['mediterranean'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['lunch', 'dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-019',
    name: 'ABV',
    description: 'Casual upscale bar with creative cocktails and elevated bar food',
    imageUrl: '/venues/abv.jpg',
    tags: ['craft-cocktails', 'casual'],
    category: 'Drinks',
    classifications: {
      theme: ['cocktail-lounge', 'craft-cocktails'],
      design: ['industrial', 'modern'],
      atmosphere: ['casual', 'lively'],
      space: ['bar-seating', 'upstairs-lounge'],
      scene: ['cocktail-lovers', 'industry-hangout'],
      features: ['small-plates'],
      price: '$$'
    }
  },
  {
    id: 'sf-020',
    name: 'Angler',
    description: 'Seafood-focused restaurant with bay views',
    imageUrl: '/venues/angler.jpg',
    tags: ['fine-dining', 'full-service'],
    category: 'Food',
    classifications: {
      design: ['modern'],
      atmosphere: ['sophisticated', 'scenic'],
      space: ['waterfront-dining', 'open-kitchen'],
      scene: ['foodies', 'special-occasion'],
      cuisine: ['seafood', 'american'],
      service: ['full-service'],
      price: '$$$$',
      mealPeriods: ['dinner'],
      specialties: ['seasonal-menu', 'fresh-seafood']
    }
  },
  {
    id: 'sf-021',
    name: 'Rich Table',
    description: 'Creative California cuisine in Hayes Valley',
    imageUrl: '/venues/rich-table.jpg',
    tags: ['innovative', 'full-service'],
    category: 'Food',
    classifications: {
      design: ['modern', 'rustic'],
      atmosphere: ['lively', 'sophisticated'],
      space: ['open-kitchen', 'bar-seating'],
      scene: ['foodies', 'date-spot'],
      cuisine: ['american', 'fusion'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-022',
    name: "Charmaine's",
    description: 'Rooftop bar with city views and fire pits',
    imageUrl: '/venues/charmaines.jpg',
    tags: ['craft-cocktails', 'outdoor-seating'],
    category: 'Drinks',
    classifications: {
      theme: ['cocktail-lounge'],
      design: ['modern'],
      atmosphere: ['sophisticated', 'scenic'],
      space: ['rooftop', 'outdoor-seating'],
      scene: ['cocktail-lovers', 'young-professional'],
      features: ['fireplace'],
      price: '$$$$'
    }
  },
  {
    id: 'sf-023',
    name: 'Niku Steakhouse',
    description: 'High-end steakhouse specializing in Japanese beef',
    imageUrl: '/venues/niku.jpg',
    tags: ['fine-dining', 'full-service'],
    category: 'Food',
    classifications: {
      design: ['modern'],
      atmosphere: ['sophisticated', 'intimate'],
      space: ['open-kitchen', 'counter-seating'],
      scene: ['foodies', 'special-occasion'],
      cuisine: ['japanese'],
      service: ['fine-dining'],
      price: '$$$$',
      mealPeriods: ['dinner'],
      specialties: ['wagyu']
    }
  },
  {
    id: 'sf-024',
    name: 'Kaiyō Rooftop',
    description: 'Peruvian-Japanese fusion on a stunning rooftop',
    imageUrl: '/venues/kaiyo.jpg',
    tags: ['full-service', 'outdoor-seating'],
    category: 'Food',
    classifications: {
      design: ['modern'],
      atmosphere: ['lively', 'scenic'],
      space: ['rooftop', 'outdoor-seating'],
      scene: ['trendy', 'date-spot'],
      cuisine: ['japanese', 'fusion'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-025',
    name: 'Bar Agricole',
    description: 'Award-winning cocktail bar with organic focus',
    imageUrl: '/venues/bar-agricole.jpg',
    tags: ['craft-cocktails', 'outdoor-seating'],
    category: 'Drinks',
    classifications: {
      theme: ['craft-cocktails', 'cocktail-lounge'],
      design: ['modern'],
      atmosphere: ['sophisticated', 'minimalist'],
      space: ['bar-seating', 'outdoor-seating'],
      scene: ['cocktail-lovers', 'creative-types'],
      price: '$$$'
    }
  },
  {
    id: 'sf-026',
    name: 'Zeitgeist',
    description: 'Iconic beer garden with punk rock attitude',
    imageUrl: '/venues/zeitgeist.jpg',
    tags: ['casual', 'outdoor-seating'],
    category: 'Drinks',
    classifications: {
      theme: ['beer-hall', 'dive-bar'],
      design: ['industrial'],
      atmosphere: ['casual', 'lively'],
      space: ['outdoor-seating', 'bar-seating'],
      scene: ['local-hangout', 'industry-hangout'],
      features: ['outdoor-seating'],
      price: '$'
    }
  },
  {
    id: 'sf-027',
    name: 'The Plough and Stars',
    description: 'Traditional Irish pub with live music',
    imageUrl: '/venues/plough-stars.jpg',
    tags: ['live-music', 'traditional'],
    category: 'Drinks',
    classifications: {
      theme: ['irish-pub'],
      design: ['traditional'],
      atmosphere: ['lively', 'traditional'],
      space: ['bar-seating'],
      scene: ['local-hangout', 'mixed-crowd'],
      features: ['live-music'],
      price: '$$'
    }
  },
  {
    id: 'sf-028',
    name: 'Kezar Pub',
    description: 'Classic sports bar near Golden Gate Park',
    imageUrl: '/venues/kezar.jpg',
    tags: ['sports-tv', 'casual'],
    category: 'Drinks',
    classifications: {
      theme: ['sports-bar', 'irish-pub'],
      design: ['traditional'],
      atmosphere: ['lively', 'casual'],
      space: ['bar-seating', 'booth-seating'],
      scene: ['local-hangout', 'mixed-crowd'],
      features: ['sports-tv'],
      price: '$$'
    }
  },
  {
    id: 'sf-029',
    name: 'Magnolia Brewing',
    description: 'Craft brewery with gastropub fare',
    imageUrl: '/venues/magnolia.jpg',
    tags: ['brewpub', 'full-service'],
    category: 'Drinks',
    classifications: {
      theme: ['brewpub', 'beer-hall'],
      design: ['industrial', 'modern'],
      atmosphere: ['casual', 'lively'],
      space: ['bar-seating', 'traditional-dining'],
      scene: ['local-hangout', 'mixed-crowd'],
      features: ['small-plates'],
      price: '$$'
    }
  },
  {
    id: 'sf-030',
    name: 'High Treason',
    description: 'Modern wine bar with vinyl records',
    imageUrl: '/venues/high-treason.jpg',
    tags: ['wine-bar', 'innovative'],
    category: 'Drinks',
    classifications: {
      theme: ['wine-bar'],
      design: ['modern'],
      atmosphere: ['sophisticated', 'intimate'],
      space: ['bar-seating', 'lounge-area'],
      scene: ['date-spot', 'creative-types'],
      features: ['small-plates'],
      price: '$$$'
    }
  },
  {
    id: 'sf-031',
    name: 'The Mint',
    description: 'Legendary karaoke bar with private rooms',
    imageUrl: '/venues/the-mint.jpg',
    tags: ['karaoke', 'late-night'],
    category: 'Drinks',
    classifications: {
      theme: ['karaoke-bar'],
      design: ['traditional'],
      atmosphere: ['lively', 'energetic'],
      space: ['private-rooms', 'bar-seating'],
      scene: ['late-night', 'mixed-crowd'],
      features: ['private-rooms'],
      price: '$$'
    }
  },
  {
    id: 'sf-032',
    name: 'China Live',
    description: 'Modern Chinese marketplace and fine dining destination',
    imageUrl: '/venues/china-live.jpg',
    tags: ['innovative', 'full-service'],
    category: 'Food',
    classifications: {
      cuisine: ['chinese', 'fusion'],
      design: ['modern', 'industrial'],
      atmosphere: ['lively', 'sophisticated'],
      space: ['open-kitchen', 'multi-level'],
      scene: ['foodies', 'mixed-crowd'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['lunch', 'dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-033',
    name: 'Amber India',
    description: 'Upscale Indian cuisine in a refined setting',
    imageUrl: '/venues/amber-india.jpg',
    tags: ['traditional', 'full-service'],
    category: 'Food',
    classifications: {
      cuisine: ['indian'],
      design: ['traditional', 'modern'],
      atmosphere: ['sophisticated', 'elegant'],
      space: ['traditional-dining'],
      scene: ['date-spot', 'special-occasion'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['lunch', 'dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-034',
    name: 'San Ho Won',
    description: 'Modern Korean barbecue from Michelin-starred chef',
    imageUrl: '/venues/san-ho-won.jpg',
    tags: ['innovative', 'full-service'],
    category: 'Food',
    classifications: {
      cuisine: ['korean'],
      design: ['modern'],
      atmosphere: ['sophisticated', 'lively'],
      space: ['open-kitchen', 'traditional-dining'],
      scene: ['foodies', 'date-spot'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-035',
    name: 'Californios',
    description: 'Upscale Mexican tasting menu restaurant',
    imageUrl: '/venues/californios.jpg',
    tags: ['fine-dining', 'innovative'],
    category: 'Food',
    classifications: {
      cuisine: ['mexican', 'fusion'],
      design: ['modern'],
      atmosphere: ['intimate', 'sophisticated'],
      space: ['traditional-dining'],
      scene: ['foodies', 'special-occasion'],
      service: ['fine-dining'],
      price: '$$$$',
      mealPeriods: ['dinner'],
      specialties: ['tasting-menu', 'seasonal-menu']
    }
  },
  {
    id: 'sf-036',
    name: 'Beit Rima',
    description: 'Arabic comfort food in a casual setting',
    imageUrl: '/venues/beit-rima.jpg',
    tags: ['casual', 'full-service'],
    category: 'Food',
    classifications: {
      cuisine: ['middle-eastern'],
      design: ['modern'],
      atmosphere: ['casual', 'lively'],
      space: ['traditional-dining'],
      scene: ['local-hangout', 'mixed-crowd'],
      service: ['full-service'],
      price: '$$',
      mealPeriods: ['lunch', 'dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-037',
    name: 'Coqueta',
    description: 'Spanish tapas on the Embarcadero waterfront',
    imageUrl: '/venues/coqueta.jpg',
    tags: ['full-service', 'waterfront'],
    category: 'Food',
    classifications: {
      cuisine: ['spanish'],
      design: ['modern', 'rustic'],
      atmosphere: ['lively', 'scenic'],
      space: ['waterfront-dining', 'bar-seating'],
      scene: ['date-spot', 'tourist-friendly'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['lunch', 'dinner'],
      specialties: ['seasonal-menu']
    }
  },
  {
    id: 'sf-038',
    name: 'Noodle Girl',
    description: 'Modern Vietnamese noodle house',
    imageUrl: '/venues/noodle-girl.jpg',
    tags: ['casual', 'quick-service'],
    category: 'Food',
    classifications: {
      cuisine: ['vietnamese'],
      design: ['modern'],
      atmosphere: ['casual', 'lively'],
      space: ['counter-seating'],
      scene: ['local-hangout', 'mixed-crowd'],
      service: ['quick-service'],
      price: '$$',
      mealPeriods: ['lunch', 'dinner'],
      specialties: ['seasonal-menu']
    }
  }
];

export const getVenuesByLocationAndCategory = (
  location: string,
  category: 'Food' | 'Drinks'
): VenueType[] => {
  const locationPrefix = location === 'San Francisco' ? 'sf' : 
                        location === 'Austin' ? 'aus' : 
                        location === 'Chicago' ? 'chi' : '';
  
  return venues.filter(venue => 
    venue.id.startsWith(locationPrefix) && 
    venue.category === category
  );
}; 