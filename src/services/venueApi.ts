import { type VenueDetails } from '../types/venue';

interface VenueSearchResult {
  id: string;
  basicInfo: Partial<VenueDetails>;
}

export const searchVenues = async (
  query: string,
  filters?: Record<string, any>
): Promise<VenueSearchResult[]> => {
  return Promise.resolve([]);
};

export const getVenueDetails = async (
  id: string
): Promise<Partial<VenueDetails>> => {
  return Promise.resolve({});
}; 