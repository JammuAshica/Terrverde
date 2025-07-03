import React, { useState } from 'react';
import { Users, MapPin, MessageCircle, Plus, Leaf, TreePine, Fish } from 'lucide-react';

const Communities: React.FC = () => {
  const [communities] = useState([
    {
      id: 1,
      name: 'Pacific Northwest Conservation',
      location: 'Washington, USA',
      members: 1247,
      description: 'Protecting old-growth forests and marine ecosystems in the Pacific Northwest.',
      category: 'Forest Conservation',
      icon: TreePine,
      recentActivity: 'New post about salmon restoration project',
      timeAgo: '2 hours ago',
      joined: true
    },
    {
      id: 2,
      name: 'Amazon Rainforest Alliance',
      location: 'Brazil',
      members: 3456,
      description: 'Working together to preserve the lungs of our planet and protect indigenous communities.',
      category: 'Rainforest Protection',
      icon: Leaf,
      recentActivity: 'Emergency alert: New deforestation detected',
      timeAgo: '4 hours ago',
      joined: true
    },
    {
      id: 3,
      name: 'Great Barrier Reef Guardians',
      location: 'Queensland, Australia',
      members: 892,
      description: 'Coral reef conservation and marine biodiversity protection initiatives.',
      category: 'Marine Conservation',
      icon: Fish,
      recentActivity: 'Coral bleaching monitoring update',
      timeAgo: '1 day ago',
      joined: false
    },
    {
      id: 4,
      name: 'Himalayan Wildlife Protectors',
      location: 'Nepal',
      members: 567,
      description: 'Protecting snow leopards, red pandas, and mountain ecosystems.',
      category: 'Wildlife Protection',
      icon: TreePine,
      recentActivity: 'Snow leopard sighting reported',
      timeAgo: '2 days ago',
      joined: false
    }
  ]);

  const [selectedCommunity, setSelectedCommunity] = useState<number | null>(null);

  const handleJoinCommunity = (communityId: number) => {
    console.log(`Joining community ${communityId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Conservation Communities</h1>
          <p className="text-gray-600 mt-2">Connect with fellow conservationists worldwide</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Create Community
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Communities List */}
        <div className="space-y-6">
          {communities.map((community) => {
            const IconComponent = community.icon;
            return (
              <div
                key={community.id}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer ${
                  selectedCommunity === community.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setSelectedCommunity(community.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{community.name}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {community.location}
                      </div>
                    </div>
                  </div>
                  
                  {community.joined ? (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Joined
                    </span>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJoinCommunity(community.id);
                      }}
                      className="bg-green-600 text-white text-xs px-3 py-1 rounded-full hover:bg-green-700 transition-colors"
                    >
                      Join
                    </button>
                  )}
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{community.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {community.members.toLocaleString()} members
                  </div>
                  <span className="text-xs text-gray-500">{community.category}</span>
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{community.recentActivity}</p>
                  <p className="text-xs text-gray-500 mt-1">{community.timeAgo}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {selectedCommunity ? (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Community Activity</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="User"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Maria Santos</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Just spotted a family of sea otters near the kelp forest! The ecosystem is recovering beautifully.
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-600">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    12 comments
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="User"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Dr. James Wilson</p>
                      <p className="text-xs text-gray-600">5 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    🚨 URGENT: Illegal logging activity detected in sector 7. Local authorities have been notified.
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-600">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    28 comments
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="User"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Sarah Johnson</p>
                      <p className="text-xs text-gray-600">1 day ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Successful tree planting event today! We planted 500 native saplings with 30 volunteers.
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-600">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    45 comments
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Select a community to view recent activity</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communities;