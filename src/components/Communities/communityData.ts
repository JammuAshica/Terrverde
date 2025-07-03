/**
 * Community Data Management
 * Centralized data for different types of communities
 */

export interface Community {
  id: number;
  name: string;
  description: string;
  location: string;
  members: number;
  image: string;
  category: string;
  isJoined: boolean;
  lastActivity: string;
  rating?: number;
  cause?: string;
  impact?: string;
}

// Joined Communities - Communities the user has already joined
const joinedCommunities: Community[] = [
  {
    id: 1,
    name: 'Pacific Northwest Hikers',
    description: 'Exploring the beautiful trails and forests of the Pacific Northwest region.',
    location: 'Washington, USA',
    members: 1247,
    image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Hiking',
    isJoined: true,
    lastActivity: '2 hours ago'
  },
  {
    id: 2,
    name: 'Urban Wildlife Watchers',
    description: 'Documenting and protecting wildlife in urban environments.',
    location: 'San Francisco, CA',
    members: 892,
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wildlife',
    isJoined: true,
    lastActivity: '5 hours ago'
  }
];

// Active Communities - Communities with high recent activity
const activeCommunities: Community[] = [
  {
    id: 3,
    name: 'Climate Action Network',
    description: 'Taking immediate action against climate change through community initiatives.',
    location: 'Global',
    members: 5432,
    image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Climate',
    isJoined: false,
    lastActivity: '15 minutes ago',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Ocean Cleanup Initiative',
    description: 'Organizing beach cleanups and marine conservation efforts worldwide.',
    location: 'Coastal Regions',
    members: 3210,
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marine',
    isJoined: false,
    lastActivity: '1 hour ago',
    rating: 4.9
  }
];

// Communities for a Cause - Communities focused on specific environmental causes
const causeBasedCommunities: Community[] = [
  {
    id: 5,
    name: 'Save the Amazon',
    description: 'Protecting the Amazon rainforest through awareness and direct action.',
    location: 'Amazon Basin',
    members: 12450,
    image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Conservation',
    isJoined: false,
    lastActivity: '3 hours ago',
    cause: 'Prevent deforestation and protect indigenous communities',
    impact: '2.3M trees protected, 15 communities supported'
  },
  {
    id: 6,
    name: 'Coral Reef Restoration',
    description: 'Restoring damaged coral reefs and protecting marine biodiversity.',
    location: 'Great Barrier Reef',
    members: 8760,
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marine',
    isJoined: false,
    lastActivity: '6 hours ago',
    cause: 'Restore coral reefs affected by bleaching',
    impact: '500 coral fragments planted, 12 reef sites restored'
  }
];

// Regional Communities - Location-based communities
const regionalCommunities: Community[] = [
  {
    id: 7,
    name: 'California Coastal Guardians',
    description: 'Protecting California\'s coastline and marine ecosystems.',
    location: 'California, USA',
    members: 2340,
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Regional',
    isJoined: false,
    lastActivity: '4 hours ago'
  },
  {
    id: 8,
    name: 'European Forest Alliance',
    description: 'Preserving Europe\'s ancient forests and promoting sustainable forestry.',
    location: 'Europe',
    members: 4567,
    image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Regional',
    isJoined: false,
    lastActivity: '1 day ago'
  }
];

/**
 * Get communities based on tab type
 */
export const getCommunityData = (tabType: string): Community[] => {
  switch (tabType) {
    case 'joined':
      return joinedCommunities;
    case 'active':
      return activeCommunities;
    case 'cause':
      return causeBasedCommunities;
    case 'regional':
      return regionalCommunities;
    default:
      return [];
  }
};

/**
 * Get a specific community by ID
 */
export const getCommunityById = (id: number): Community | undefined => {
  const allCommunities = [
    ...joinedCommunities,
    ...activeCommunities,
    ...causeBasedCommunities,
    ...regionalCommunities
  ];
  return allCommunities.find(community => community.id === id);
};