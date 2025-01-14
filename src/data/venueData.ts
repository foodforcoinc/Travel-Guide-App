import { VenueType } from '../types/venue';

export const venues: VenueType[] = [
  {
    id: 'sf-001',
    name: 'Foreign Cinema',
    description: 'Iconic restaurant featuring dinner and a movie in a converted theater space',
    imageUrl: '/venues/foreign-cinema.jpg',
    tags: ['full-service', 'outdoor-seating', 'seasonal-menu'],
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
    tags: ['innovative', 'full-service', 'seasonal-menu'],
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
    tags: ['full-service', 'late-night', 'seasonal-menu'],
    category: 'Food',
    classifications: {
      design: ['industrial', 'modern'],
      atmosphere: ['lively', 'bustling'],
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
    tags: ['craft-cocktails', 'innovative', 'late-night'],
    category: 'Drinks',
    classifications: {
      design: ['industrial', 'modern'],
      atmosphere: ['lively', 'trendy'],
      space: ['bar-seating', 'mezzanine'],
      scene: ['cocktail-lovers', 'creative-types'],
      theme: ['cocktail-lounge'],
      price: '$$$'
    }
  },
  {
    id: 'sf-005',
    name: 'Tonga Room',
    description: 'Historic tiki bar with indoor rain shows',
    imageUrl: '/venues/tonga-room.jpg',
    tags: ['craft-cocktails', 'live-music', 'historic'],
    category: 'Drinks',
    classifications: {
      design: ['tropical', 'vintage'],
      atmosphere: ['lively', 'playful'],
      features: ['live-music'],
      scene: ['tourist-friendly', 'mixed-crowd'],
      theme: ['tiki'],
      price: '$$$'
    }
  },
  {
    id: 'sf-006',
    name: 'Lazy Bear',
    description: 'Modern American tasting menu in industrial space',
    imageUrl: '/venues/lazy-bear.jpg',
    tags: ['fine-dining', 'innovative', 'seasonal-menu'],
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
    tags: ['traditional', 'full-service', 'historic'],
    category: 'Food',
    classifications: {
      design: ['traditional', 'vintage'],
      atmosphere: ['lively', 'traditional'],
      space: ['booth-seating', 'traditional-dining'],
      scene: ['traditional', 'tourist-friendly'],
      cuisine: ['steakhouse'],
      service: ['full-service'],
      price: '$$$',
      mealPeriods: ['dinner'],
      specialties: ['tableside-preparation']
    }
  },
  {
    id: 'sf-008',
    name: 'Smuggler\'s Cove',
    description: 'Three-story rum bar with over 500 rum varieties',
    imageUrl: '/venues/smugglers.jpg',
    tags: ['craft-cocktails', 'historic', 'themed'],
    category: 'Drinks',
    classifications: {
      design: ['tropical', 'vintage'],
      atmosphere: ['intimate', 'mysterious'],
      space: ['multiple-levels'],
      scene: ['cocktail-lovers', 'date-spot'],
      theme: ['tiki'],
      price: '$$$'
    }
  },
  {
    id: 'sf-009',
    name: 'Cotogna',
    description: 'Rustic Italian cuisine with wood-fired oven',
    imageUrl: '/venues/cotogna.jpg',
    tags: ['full-service', 'traditional', 'seasonal-menu'],
    category: 'Food',
    classifications: {
      design: ['rustic', 'modern'],
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
    tags: ['craft-cocktails', 'innovative', 'late-night'],
    category: 'Drinks',
    classifications: {
      design: ['modern', 'artsy'],
      atmosphere: ['sophisticated', 'intimate'],
      space: ['bar-seating', 'lounge-area'],
      scene: ['cocktail-lovers', 'creative-types'],
      theme: ['cocktail-lounge'],
      price: '$$$'
    }
  },
  {
    id: 'sf-011',
    name: 'Saison',
    description: 'Refined tasting menus featuring local ingredients and live-fire cooking',
    imageUrl: '/venues/saison.jpg',
    tags: ['fine-dining', 'innovative', 'seasonal-menu'],
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
    tags: ['craft-cocktails', 'historic', 'themed'],
    category: 'Drinks',
    classifications: {
      design: ['vintage', 'traditional'],
      atmosphere: ['intimate', 'mysterious'],
      space: ['private-rooms', 'lounge-area'],
      scene: ['cocktail-lovers', 'date-spot'],
      theme: ['speakeasy'],
      price: '$$$'
    }
  },
  {
    id: 'sf-013',
    name: 'Zuni Cafe',
    description: 'California cuisine institution famous for roast chicken',
    imageUrl: '/venues/zuni.jpg',
    tags: ['traditional', 'full-service', 'historic'],
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
    tags: ['craft-cocktails', 'themed', 'innovative'],
    category: 'Drinks',
    classifications: {
      design: ['vintage', 'traditional'],
      atmosphere: ['lively', 'mysterious'],
      space: ['lounge-area', 'bar-seating'],
      scene: ['cocktail-lovers', 'creative-types'],
      theme: ['cocktail-lounge'],
      price: '$$$'
    }
  },
  {
    id: 'sf-015',
    name: 'Atelier Crenn',
    description: 'Poetic tasting menus in an intimate setting',
    imageUrl: '/venues/atelier-crenn.jpg',
    tags: ['fine-dining', 'innovative', 'seasonal-menu'],
    category: 'Food',
    classifications: {
      design: ['modern', 'upscale'],
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
    tags: ['innovative', 'full-service', 'seasonal-menu'],
    category: 'Food',
    classifications: {
      design: ['modern', 'upscale'],
      atmosphere: ['sophisticated', 'lively'],
      space: ['open-kitchen', 'bar-seating'],
      scene: ['foodies', 'date-spot'],
      cuisine: ['asian', 'fusion'],
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
    tags: ['craft-cocktails', 'innovative', 'themed'],
    category: 'Drinks',
    classifications: {
      design: ['modern', 'industrial'],
      atmosphere: ['intimate', 'sophisticated'],
      space: ['bar-seating', 'lounge-area'],
      scene: ['cocktail-lovers', 'creative-types'],
      theme: ['cocktail-lounge'],
      price: '$$$'
    }
  },
  {
    id: 'sf-018',
    name: 'Kokkari Estiatorio',
    description: 'Upscale Greek restaurant with rustic charm',
    imageUrl: '/venues/kokkari.jpg',
    tags: ['full-service', 'traditional', 'seasonal-menu'],
    category: 'Food',
    classifications: {
      design: ['rustic', 'traditional'],
      atmosphere: ['lively', 'sophisticated'],
      space: ['traditional-dining', 'fireplace'],
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
    tags: ['craft-cocktails', 'innovative', 'casual'],
    category: 'Drinks',
    classifications: {
      design: ['industrial', 'modern'],
      atmosphere: ['lively', 'casual'],
      space: ['bar-seating', 'upstairs-lounge'],
      scene: ['cocktail-lovers', 'industry-hangout'],
      theme: ['cocktail-lounge'],
      price: '$$'
    }
  },
  {
    id: 'sf-020',
    name: 'Angler',
    description: 'Seafood-focused restaurant with bay views',
    imageUrl: '/venues/angler.jpg',
    tags: ['fine-dining', 'full-service', 'seasonal-menu'],
    category: 'Food',
    classifications: {
      design: ['modern', 'upscale'],
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
    tags: ['innovative', 'full-service', 'seasonal-menu'],
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
    name: 'Charmaine\'s',
    description: 'Rooftop bar with city views and fire pits',
    imageUrl: '/venues/charmaines.jpg',
    tags: ['craft-cocktails', 'outdoor-seating', 'upscale'],
    category: 'Drinks',
    classifications: {
      design: ['modern', 'luxurious'],
      atmosphere: ['sophisticated', 'scenic'],
      space: ['rooftop', 'outdoor-seating'],
      scene: ['cocktail-lovers', 'young-professional'],
      theme: ['cocktail-lounge'],
      price: '$$$$'
    }
  },
  {
    id: 'sf-023',
    name: 'Niku Steakhouse',
    description: 'High-end steakhouse specializing in Japanese beef',
    imageUrl: '/venues/niku.jpg',
    tags: ['fine-dining', 'full-service', 'innovative'],
    category: 'Food',
    classifications: {
      design: ['modern', 'upscale'],
      atmosphere: ['sophisticated', 'intimate'],
      space: ['open-kitchen', 'counter-seating'],
      scene: ['foodies', 'special-occasion'],
      cuisine: ['steakhouse', 'japanese'],
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
    tags: ['full-service', 'outdoor-seating', 'innovative'],
    category: 'Food',
    classifications: {
      design: ['modern', 'tropical'],
      atmosphere: ['lively', 'scenic'],
      space: ['rooftop', 'outdoor-seating'],
      scene: ['trendy', 'date-spot'],
      cuisine: ['fusion', 'japanese'],
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
    tags: ['craft-cocktails', 'innovative', 'outdoor-seating'],
    category: 'Drinks',
    classifications: {
      design: ['modern', 'industrial'],
      atmosphere: ['sophisticated', 'intimate'],
      space: ['bar-seating', 'outdoor-seating'],
      scene: ['cocktail-lovers', 'creative-types'],
      theme: ['cocktail-lounge'],
      price: '$$$'
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