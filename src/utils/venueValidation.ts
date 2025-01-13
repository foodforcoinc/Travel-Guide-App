import { type Venue } from '../types/venue';

export const validateVenue = (venue: Partial<Venue>): boolean => {
  const hasBasics = !!(
    venue.name &&
    venue.location &&
    venue.pricePoint &&
    venue.design?.length &&
    venue.atmosphere?.length
  );

  return hasBasics;
}; 