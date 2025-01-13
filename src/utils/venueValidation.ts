export const validateVenue = (venue: Partial<Venue>): boolean => {
  // Core requirements for ANY venue
  const hasBasics = !!(
    venue.name &&
    venue.location &&
    venue.pricePoint &&
    venue.design?.length &&
    venue.atmosphere?.length
  );

  return hasBasics;
}; 