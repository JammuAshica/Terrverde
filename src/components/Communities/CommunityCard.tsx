import React, { useState } from 'react';
import { MapPin, Users, Calendar, Star, ExternalLink } from 'lucide-react';

interface CommunityCardProps {
  community: {
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
  };
  isSelected: boolean;
  onSelect: () => void;
}

/**
 * Community Card Component
 * Displays individual community information with hover details
 */
const CommunityCard: React.FC<CommunityCardProps> = ({ community, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Handle join/leave community action
   */
  const handleJoinToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle join/leave logic here
    console.log(`${community.isJoined ? 'Leaving' : 'Joining'} community:`, community.name);
  };

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-green-500 shadow-lg' : 'hover:shadow-lg'
      }`}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Community Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={community.image}
          alt={community.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
            {community.category}
          </span>
        </div>

        {/* Join Status */}
        <div className="absolute top-4 right-4">
          {community.isJoined && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Joined
            </span>
          )}
        </div>

        {/* Hover Overlay with Details */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 transition-opacity duration-300">
            <div className="text-white text-center">
              <h4 className="font-bold text-lg mb-2">{community.name}</h4>
              <p className="text-sm mb-4 line-clamp-3">{community.description}</p>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {community.location}
                </div>
                
                <div className="flex items-center justify-center">
                  <Users className="w-3 h-3 mr-1" />
                  {community.members.toLocaleString()} members
                </div>
                
                <div className="flex items-center justify-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {community.lastActivity}
                </div>

                {community.rating && (
                  <div className="flex items-center justify-center">
                    <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                    {community.rating}/5
                  </div>
                )}

                {community.cause && (
                  <div className="mt-2 p-2 bg-white/20 rounded">
                    <p className="font-medium">Cause:</p>
                    <p className="text-xs">{community.cause}</p>
                  </div>
                )}

                {community.impact && (
                  <div className="mt-2 p-2 bg-white/20 rounded">
                    <p className="font-medium">Impact:</p>
                    <p className="text-xs">{community.impact}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Community Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{community.name}</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{community.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {community.members.toLocaleString()}
          </div>
          
          <button
            onClick={handleJoinToggle}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              community.isJoined
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {community.isJoined ? 'Joined' : 'Join'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;