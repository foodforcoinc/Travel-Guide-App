export type Atmosphere = 
  | 'casual'
  | 'cozy'
  | 'elegant'
  | 'energetic'
  | 'exotic'
  | 'intimate'
  | 'lively'
  | 'minimalist'
  | 'modern'
  | 'romantic'
  | 'rustic'
  | 'scenic'
  | 'sophisticated'
  | 'theatrical'
  | 'traditional'
  | 'trendy'
  | 'unique'
  | 'upscale';

export type Cuisine = 
  | 'american'
  | 'chinese'
  | 'french'
  | 'fusion'
  | 'indian'
  | 'italian'
  | 'japanese'
  | 'korean'
  | 'mediterranean'
  | 'mexican'
  | 'middle-eastern'
  | 'seafood'
  | 'spanish'
  | 'thai'
  | 'vietnamese';

export type Design = 
  | 'art-deco'
  | 'contemporary'
  | 'industrial'
  | 'minimalist'
  | 'modern'
  | 'retro'
  | 'rustic'
  | 'traditional'
  | 'vintage';

export type DrinkTheme = 
  | 'beer-hall'
  | 'brewpub'
  | 'cocktail-lounge'
  | 'craft-cocktails'
  | 'dive-bar'
  | 'gin-bar'
  | 'historic-bar'
  | 'irish-pub'
  | 'karaoke-bar'
  | 'rum-bar'
  | 'speakeasy'
  | 'sports-bar'
  | 'tiki'
  | 'wine-bar';

export type Features = 
  | 'dancing'
  | 'dj'
  | 'fireplace'
  | 'games'
  | 'happy-hour'
  | 'live-music'
  | 'outdoor-seating'
  | 'private-rooms'
  | 'rooftop'
  | 'small-plates'
  | 'sports-tv'
  | 'trivia-night'
  | 'vegetarian-options'
  | 'waterfront';

export type Price = 
  | '$'
  | '$$'
  | '$$$'
  | '$$$$';

export type Space = 
  | 'bar-seating'
  | 'booth-seating'
  | 'communal-dining'
  | 'counter-seating'
  | 'courtyard'
  | 'lounge-area'
  | 'mezzanine'
  | 'multi-level'
  | 'open-kitchen'
  | 'outdoor-seating'
  | 'private-rooms'
  | 'rooftop'
  | 'traditional-dining'
  | 'upstairs-lounge'
  | 'waterfront-dining';

export type Scene = 
  | 'cocktail-lovers'
  | 'creative-types'
  | 'date-spot'
  | 'foodies'
  | 'industry-hangout'
  | 'late-night'
  | 'local-hangout'
  | 'mixed-crowd'
  | 'special-occasion'
  | 'tourist-friendly'
  | 'traditional'
  | 'trendy'
  | 'young-professional';

export type Service = 
  | 'counter-service'
  | 'fine-dining'
  | 'full-service'
  | 'quick-service'
  | 'self-service'
  | 'table-service';

export type MealPeriod = 
  | 'breakfast'
  | 'brunch'
  | 'dinner'
  | 'late-night'
  | 'lunch'
  | 'weekend-brunch';

export type Specialty = 
  | 'fresh-seafood'
  | 'house-made-pasta'
  | 'seasonal-menu'
  | 'tableside-preparation'
  | 'tasting-menu'
  | 'wagyu'
  | 'wood-fired-pizza';

export type Category = 'Food' | 'Drinks';

export type VenueType = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: Category;
  classifications: {
    theme?: DrinkTheme[];
    cuisine?: Cuisine[];
    atmosphere?: Atmosphere[];
    features?: Features[];
    design?: Design[];
    space?: Space[];
    scene?: Scene[];
    service?: Service[];
    mealPeriods?: MealPeriod[];
    specialties?: Specialty[];
    price?: Price;
  };
};

// Rest of the file remains the same... 