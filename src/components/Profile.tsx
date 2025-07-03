import React, { useState } from 'react';
import { MapPin, Camera, Users, Leaf, Calendar, Settings, Heart, MessageCircle } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const userProfile = {
    name: 'Alex Thompson',
    username: '@alex_eco_explorer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    bio: 'Nature photographer and environmental advocate. Exploring the world one green space at a time 🌿',
    location: 'San Francisco, CA',
    joined: 'March 2023',
    stats: {
      posts: 24,
      communities: 8,
      followers: 342,
      following: 189,
      carbonSaved: 1.2,
      placesVisited: 15
    }
  };

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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-green-200"
            />
            <button className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <h1 className="text-2xl font-bold text-gray-900 mr-3">{userProfile.name}</h1>
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-2">{userProfile.username}</p>
            <p className="text-gray-700 mb-4">{userProfile.bio}</p>
            
            <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {userProfile.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Joined {userProfile.joined}
              </div>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-gray-900">{userProfile.stats.posts}</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{userProfile.stats.communities}</div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{userProfile.stats.followers}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{userProfile.stats.following}</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-600">{userProfile.stats.carbonSaved}t</div>
                <div className="text-sm text-gray-600">CO₂ Saved</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600">{userProfile.stats.placesVisited}</div>
                <div className="text-sm text-gray-600">Places</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'posts', label: 'Posts', icon: Camera },
            { id: 'communities', label: 'Communities', icon: Users },
            { id: 'places', label: 'Places Visited', icon: MapPin },
            { id: 'impact', label: 'Impact', icon: Leaf }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {activeTab === 'posts' && (
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
        )}

        {activeTab === 'communities' && (
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
        )}

        {activeTab === 'places' && (
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
        )}

        {activeTab === 'impact' && (
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
        )}
      </div>
    </div>
  );
};

export default Profile;