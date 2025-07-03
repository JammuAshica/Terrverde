import React, { useState } from 'react';
import { Users, Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import CommunityCard from './CommunityCard';

/**
 * Communities Component
 * Netflix-style community suggestions with horizontal scrolling
 */
const Communities: React.FC = () => {
  const [selectedCommunity, setSelectedCommunity] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Community suggestions organized by categories
  const communitySuggestions = {
    'Trending Now': [
      {
        id: 1,
        name: 'Ocean Cleanup Heroes',
        description: 'Join the global movement to clean our oceans and protect marine life.',
        location: 'Worldwide',
        members: 12450,
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Marine Conservation',
        isJoined: false,
        lastActivity: '2 hours ago',
        rating: 4.9
      },
      {
        id: 2,
        name: 'Urban Forest Guardians',
        description: 'Creating green spaces in cities and protecting urban wildlife.',
        location: 'Global Cities',
        members: 8760,
        image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Urban Conservation',
        isJoined: true,
        lastActivity: '1 hour ago',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Climate Action Network',
        description: 'Taking immediate action against climate change through community initiatives.',
        location: 'Global',
        members: 15320,
        image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Climate Action',
        isJoined: false,
        lastActivity: '30 minutes ago',
        rating: 4.8
      }
    ],
    'Popular in Your Area': [
      {
        id: 4,
        name: 'Pacific Northwest Hikers',
        description: 'Exploring the beautiful trails and forests of the Pacific Northwest.',
        location: 'Washington, USA',
        members: 3240,
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Hiking',
        isJoined: true,
        lastActivity: '3 hours ago',
        rating: 4.6
      },
      {
        id: 5,
        name: 'California Coastal Guardians',
        description: 'Protecting California\'s coastline and marine ecosystems.',
        location: 'California, USA',
        members: 2890,
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Coastal Protection',
        isJoined: false,
        lastActivity: '5 hours ago',
        rating: 4.5
      }
    ],
    'Wildlife Conservation': [
      {
        id: 6,
        name: 'Save the Elephants',
        description: 'Protecting African elephants from poaching and habitat loss.',
        location: 'Africa',
        members: 9870,
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Wildlife Protection',
        isJoined: false,
        lastActivity: '1 day ago',
        rating: 4.9
      },
      {
        id: 7,
        name: 'Polar Bear Protectors',
        description: 'Conserving Arctic habitats and protecting polar bear populations.',
        location: 'Arctic',
        members: 5670,
        image: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Arctic Conservation',
        isJoined: false,
        lastActivity: '2 days ago',
        rating: 4.7
      }
    ],
    'Forest Conservation': [
      {
        id: 8,
        name: 'Amazon Rainforest Alliance',
        description: 'Protecting the lungs of our planet and indigenous communities.',
        location: 'Amazon Basin',
        members: 18450,
        image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Rainforest Protection',
        isJoined: true,
        lastActivity: '4 hours ago',
        rating: 4.8
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4">
            <Users className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Communities</h1>
            <p className="text-gray-600 mt-1">Discover communities that match your interests</p>
          </div>
        </div>
        
        <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-lg flex items-center hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          <Plus className="w-5 h-5 mr-2" />
          Create Community
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search communities..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Netflix-style Community Suggestions */}
      <div className="space-y-8">
        {Object.entries(communitySuggestions).map(([category, communities]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
            
            {/* Horizontal Scrolling Container */}
            <div className="relative">
              <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                {communities.map((community) => (
                  <div key={community.id} className="flex-shrink-0 w-80">
                    <CommunityCard
                      community={community}
                      isSelected={selectedCommunity === community.id}
                      onSelect={() => setSelectedCommunity(community.id)}
                    />
                  </div>
                ))}
              </div>
              
              {/* Scroll Buttons */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-purple-100 mb-6">
          Create your own community and bring together like-minded nature enthusiasts
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Start Your Community
        </button>
      </div>
    </div>
  );
};

export default Communities;