/**
 * Places Data Management
 * Centralized data for visited places and wishlist locations
 */

export interface VisitedPlace {
  id: number;
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  visitDate: string;
  photos?: number;
  rating?: number;
}

export interface WishlistPlace {
  id: number;
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  priority: 'High' | 'Medium' | 'Low';
  reason?: string;
}

// Visited Places Data
const visitedPlaces: VisitedPlace[] = [
  {
    id: 1,
    name: 'Yosemite National Park',
    location: 'California, USA',
    coordinates: { lat: 37.8651, lng: -119.5383 },
    visitDate: '2024-01-15',
    photos: 12,
    rating: 5
  },
  {
    id: 2,
    name: 'Banff National Park',
    location: 'Alberta, Canada',
    coordinates: { lat: 51.4968, lng: -115.9281 },
    visitDate: '2024-02-20',
    photos: 8,
    rating: 5
  },
  {
    id: 3,
    name: 'Torres del Paine',
    location: 'Patagonia, Chile',
    coordinates: { lat: -51.0, lng: -73.0 },
    visitDate: '2024-03-10',
    photos: 15,
    rating: 5
  },
  {
    id: 4,
    name: 'Milford Sound',
    location: 'New Zealand',
    coordinates: { lat: -44.6717, lng: 167.9250 },
    visitDate: '2023-12-05',
    photos: 20,
    rating: 5
  },
  {
    id: 5,
    name: 'Yellowstone National Park',
    location: 'Wyoming, USA',
    coordinates: { lat: 44.4280, lng: -110.5885 },
    visitDate: '2023-08-15',
    photos: 18,
    rating: 4
  }
];

// Wishlist Places Data
const wishlistPlaces: WishlistPlace[] = [
  {
    id: 6,
    name: 'Iceland Highlands',
    location: 'Iceland',
    coordinates: { lat: 64.9631, lng: -19.0208 },
    priority: 'High',
    reason: 'Northern Lights and glaciers'
  },
  {
    id: 7,
    name: 'Socotra Island',
    location: 'Yemen',
    coordinates: { lat: 12.4634, lng: 53.8237 },
    priority: 'Medium',
    reason: 'Unique endemic flora'
  },
  {
    id: 8,
    name: 'Raja Ampat',
    location: 'Indonesia',
    coordinates: { lat: -0.2320, lng: 130.5755 },
    priority: 'High',
    reason: 'Marine biodiversity hotspot'
  },
  {
    id: 9,
    name: 'Faroe Islands',
    location: 'Denmark',
    coordinates: { lat: 61.8926, lng: -6.9118 },
    priority: 'Medium',
    reason: 'Dramatic landscapes'
  },
  {
    id: 10,
    name: 'Madagascar',
    location: 'Madagascar',
    coordinates: { lat: -18.7669, lng: 46.8691 },
    priority: 'High',
    reason: 'Unique wildlife and baobab trees'
  },
  {
    id: 11,
    name: 'Lofoten Islands',
    location: 'Norway',
    coordinates: { lat: 68.1102, lng: 13.6929 },
    priority: 'Medium',
    reason: 'Arctic beauty and midnight sun'
  }
];

/**
 * Get places data based on map mode
 */
export const getPlacesData = (mode: 'visited' | 'wishlist'): (VisitedPlace | WishlistPlace)[] => {
  return mode === 'visited' ? visitedPlaces : wishlistPlaces;
};

/**
 * Get a specific place by ID
 */
export const getPlaceById = (id: number): VisitedPlace | WishlistPlace | undefined => {
  const allPlaces = [...visitedPlaces, ...wishlistPlaces];
  return allPlaces.find(place => place.id === id);
};