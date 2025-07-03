import React from 'react';
import { Heart, MessageCircle, MapPin } from 'lucide-react';

interface ProfileContentProps {
  activeTab: string;
  userProfile: any;
}

/**
 * Profile Content Component
 * Renders content based on active tab
 */
const ProfileContent: React.FC<ProfileContentProps> = ({ activeTab, userProfile }) => {
  // Mock data for different tabs
  const userPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      place: 'Yosemite National Park',
      location: 'California, USA',
      likes: 142,
      comments: 23
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      place: 'Banff National Park',
      location: 'Alberta, Canada',
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      place: 'Torres del Paine',
      location: 'Patagonia, Chile',
      likes: 201,
      comments: 34
    }
  ];

  const userCommunities = [
    { name: 'Pacific Northwest Conservation', members: 1247, role: 'Member' },
    { name: 'Amazon Rainforest Alliance', members: 3456, role: 'Moderator' },
    { name: 'Great Barrier Reef Guardians', members: 892, role: 'Member' }
  ];

  const visitedPlaces = [
    { name: 'Yosemite National Park', country: 'USA', date: '2024-01-15' },
    { name: 'Banff National Park', country: 'Canada', date: '2024-02-20' },
    { name: 'Torres del Paine', country: 'Chile', date: '2024-03-10' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.place}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{post.place}</h3>
                  <p className="text-sm text-gray-600 mb-3">{post.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'communities':
        return (
          <div className="space-y-4">
            {userCommunities.map((community, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{community.name}</h3>
                    <p className="text-sm text-gray-600">{community.members.toLocaleString()} members</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    community.role === 'Moderator' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {community.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'places':
        return (
          <div className="space-y-4">
            {visitedPlaces.map((place, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">{place.name}</h3>
                      <p className="text-sm text-gray-600">{place.country}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(place.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'impact':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Environmental Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Carbon Footprint Reduced</span>
                  <span className="text-2xl font-bold text-green-600">1.2t CO₂</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Trees Planted</span>
                  <span className="text-2xl font-bold text-green-600">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Conservation Projects</span>
                  <span className="text-2xl font-bold text-blue-600">8</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Community Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">People Inspired</span>
                  <span className="text-2xl font-bold text-purple-600">342</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Posts Shared</span>
                  <span className="text-2xl font-bold text-blue-600">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Communities Joined</span>
                  <span className="text-2xl font-bold text-green-600">8</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-96">
      {renderContent()}
    </div>
  );
};

export default ProfileContent;