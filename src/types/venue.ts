export type VenueDetails = {
  name: string;
  website?: string;
  description?: string;
  location: {
    address: string;
    city: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
};

export type Venue = VenueDetails & {
  design: string[];
  atmosphere: string[];
  pricePoint: '$' | '$$' | '$$$' | '$$$$';
}; 