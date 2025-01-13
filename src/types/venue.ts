// Shared Classifications
export type Design = 
  | "industrial" | "vintage" | "modern" | "upscale" | "casual" | "rustic" 
  | "art-deco" | "victorian" | "bohemian" | "tropical" | "retro" | "steampunk"
  | "traditional" | "eclectic" | "gothic" | "mid-century" | "nautical"
  | "garden-inspired" | "warehouse" | "luxurious" | "shabby-chic";

export type Atmosphere = 
  | "cozy" | "intimate" | "lively" | "quiet-conversation" | "loud-energetic"
  | "dimly-lit" | "bright" | "moody" | "sophisticated" | "communal" | "private"
  | "spacious" | "rowdy" | "chill" | "romantic" | "bustling" | "laid-back"
  | "exclusive" | "friendly" | "trendy" | "nostalgic" | "mysterious" | "vibrant"
  | "refined" | "playful" | "edgy" | "polished" | "gritty" | "artsy" | "social"
  | "relaxed" | "high-energy";

export type FeaturesActivities = 
  | "pool-table" | "arcade" | "game-room" | "dancing" | "live-music"
  | "karaoke" | "trivia-night" | "dart-boards" | "ping-pong" | "shuffleboard"
  | "board-games" | "video-games" | "comedy-shows" | "open-mic"
  | "bottle-service" | "wine-tasting" | "beer-flights" | "bingo" | "foosball"
  | "dj";

export type SpaceCharacteristics = 
  | "rooftop" | "underground" | "outdoor-seating" | "patio" | "beer-garden"
  | "waterfront" | "courtyard" | "basement" | "mezzanine" | "terrace"
  | "sidewalk-seating" | "private-rooms" | "booth-seating" | "bar-seating"
  | "lounge-area" | "fireplace" | "poolside" | "skyline-view" | "garden-view"
  | "traditional-dining" | "counter-seating" | "open-kitchen" | "diner-style"
  | "brasserie" | "trattoria" | "izakaya" | "cantina" | "tavern"
  | "market-stall" | "food-court-vendor" | "walk-up-window";

export type SceneCrowd = 
  | "college-crowd" | "industry-hangout" | "local-hangout" | "lgbtq"
  | "date-spot" | "late-night" | "after-work" | "creative-types"
  | "sports-fans" | "wine-enthusiasts" | "beer-aficionados"
  | "cocktail-lovers" | "music-lovers" | "foodies" | "tourist-friendly"
  | "mixed-crowd" | "regulars" | "young-professional" | "mature-crowd"
  | "singles-scene" | "kid-friendly";

// Bar-Specific Classifications
export type BarThemeConcept = 
  | "speakeasy" | "tiki" | "sports-bar" | "brewery" | "wine-bar"
  | "gastropub" | "cocktail-lounge" | "pub" | "dive" | "jazz-club"
  | "piano-bar" | "beer-hall" | "whiskey-bar" | "mezcal-bar" | "gin-bar"
  | "champagne-bar" | "arcade-bar" | "blues-bar" | "karaoke-bar"
  | "hookah-lounge" | "comedy-club" | "dance-club" | "live-music-venue"
  | "craft-beer-bar" | "taproom" | "cidery" | "distillery";

// Restaurant-Specific Classifications
export type CuisineType = 
  | "american" | "italian" | "mexican" | "chinese" | "japanese" | "thai"
  | "indian" | "mediterranean" | "french" | "korean" | "vietnamese" | "bbq"
  | "seafood" | "steakhouse" | "vegetarian-vegan" | "fusion" | "spanish"
  | "greek" | "middle-eastern" | "brazilian" | "peruvian" | "caribbean"
  | "ethiopian" | "german" | "british" | "russian" | "turkish" | "moroccan"
  | "hawaiian" | "soul-food" | "tex-mex" | "dim-sum" | "sushi" | "ramen"
  | "pizza";

export type ServiceStyle = 
  | "fine-dining" | "casual-dining" | "fast-casual" | "counter-service"
  | "full-service" | "buffet" | "self-service" | "table-service" | "omakase"
  | "tasting-menu" | "family-style" | "tapas-style" | "all-you-can-eat"
  | "chef's-table" | "takeout-focused" | "delivery-available"; 

// Guide Detail Tags
export type PricePoint = "$" | "$$" | "$$$" | "$$$$";

export type PortionStyle = 
  | "small-plates" | "shareable" | "family-style" | "individual-portions"
  | "tasting-menu" | "build-your-own" | "set-menu" | "bento-style" | "tapas";

export type SpecialConsiderations = 
  | "gluten-free-options" | "dairy-free-options" | "vegetarian-friendly"
  | "vegan-friendly" | "allergy-conscious" | "halal" | "kosher"
  | "nut-free-options" | "shellfish-free" | "soy-free" | "egg-free"
  | "paleo-friendly" | "keto-friendly" | "low-carb" | "raw-options"
  | "organic" | "farm-to-table" | "locally-sourced";

export type MealPeriods = 
  | "breakfast-brunch" | "lunch" | "dinner" | "late-night" | "all-day"
  | "early-bird" | "happy-hour" | "weekend-brunch" | "weekday-lunch"
  | "24-hour";

export type Specialties = 
  | "house-made-pasta" | "wood-fired-pizza" | "fresh-seafood"
  | "craft-burgers" | "seasonal-menu" | "raw-bar" | "dim-sum" | "omakase"
  | "tableside-preparation" | "house-smoked-meats" | "fresh-baked-bread"
  | "craft-cocktails" | "charcuterie";

// Main Venue Interface
export interface VenueDetails {
  // Basic Information
  name: string;
  description?: string;
  
  // Contact & Online Presence
  phone?: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  
  // Location
  location: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  
  // Hours of Operation
  operatingHours: {
    [key in DayOfWeek]: {
      isOpen: boolean;
      openTime?: string;    // "HH:mm"
      closeTime?: string;   // "HH:mm"
      notes?: string;       // "Kitchen closes at 10pm" etc.
    };
  };
  
  // Additional Information
  reservations?: {
    accepted: boolean;
    platform?: string;      // "OpenTable", "Resy", etc.
    url?: string;
  };
  
  parking?: {
    available: boolean;
    type?: ("street" | "lot" | "valet")[];
    notes?: string;
  };
  
  accessibility?: {
    wheelchairAccessible: boolean;
    notes?: string;
  };
  
  paymentOptions?: {
    cash: boolean;
    creditCard: boolean;
    digitalPayments?: boolean;
    notes?: string;
  };
}

// Update main Venue interface
export interface Venue extends VenueDetails {
  id: string;
  design: Design[];
  atmosphere: Atmosphere[];
  featuresActivities: FeaturesActivities[];
  spaceCharacteristics: SpaceCharacteristics[];
  sceneCrowd: SceneCrowd[];
  
  // Specific Classifications (optional based on venue type)
  barThemeConcept?: BarThemeConcept[];
  cuisineType?: CuisineType[];
  serviceStyle?: ServiceStyle[];
  
  // Guide Detail Tags
  pricePoint: PricePoint;
  portionStyle?: PortionStyle[];
  specialConsiderations?: SpecialConsiderations[];
  mealPeriods?: MealPeriods[];
  specialties?: Specialties[];
  
  // Additional venue information
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
} 