import React from 'react';
import CommunityCard from './CommunityCard';
import { getCommunityData } from './communityData';

interface CommunityGridProps {
  activeTab: string;
  searchTerm: string;
  selectedCommunity: number | null;
  onCommunitySelect: (id: number) => void;
}

/**
 * Community Grid Component
 * Displays communities in a grid layout based on active tab and search
 */
const CommunityGrid: React.FC<CommunityGridProps> = ({
  activeTab,
  searchTerm,
  selectedCommunity,
  onCommunitySelect
}) => {
  // Get communities data based on active tab
  const communities = getCommunityData(activeTab);

  // Filter communities based on search term
  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {filteredCommunities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No communities found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCommunities.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
              isSelected={selectedCommunity === community.id}
              onSelect={() => onCommunitySelect(community.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityGrid;