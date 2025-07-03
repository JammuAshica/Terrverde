import React, { useState } from 'react';
import { MapPin, Heart, MessageCircle, Share2, Plus, Camera } from 'lucide-react';

const Posts: React.FC = () => {
  const [posts] = useState([
    {
      id: 1,
      user: 'Sarah Johnson',
      userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      place: 'Yosemite National Park',
      location: 'California, USA',
      coordinates: { lat: 37.8651, lng: -119.5383 },
      image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Breathtaking views from Half Dome! The sunrise was absolutely magical. Nature never ceases to amaze me. 🌅',
      likes: 142,
      comments: 23,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      user: 'Mike Chen',
      userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      place: 'Banff National Park',
      location: 'Alberta, Canada',
      coordinates: { lat: 51.4968, lng: -115.9281 },
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Crystal clear waters of Lake Louise. The turquoise color is absolutely stunning! Perfect for a morning hike.',
      likes: 89,
      comments: 15,
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      user: 'Emma Rodriguez',
      userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      place: 'Torres del Paine',
      location: 'Patagonia, Chile',
      coordinates: { lat: -51.0, lng: -73.0 },
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'The raw beauty of Patagonia is unmatched. These granite towers have stood for millions of years.',
      likes: 201,
      comments: 34,
      timeAgo: '1 day ago'
    }
  ]);

  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Nature Places</h1>
        <button
          onClick={() => setShowCreatePost(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Share a Place
        </button>
      </div>

      {showCreatePost && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-green-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Share Your Nature Experience</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 border-2 border-dashed border-green-300 rounded-lg hover:border-green-400 transition-colors cursor-pointer">
              <Camera className="text-green-500 w-8 h-8 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Upload Photo</p>
                <p className="text-sm text-gray-600">Share your beautiful nature shot</p>
              </div>
            </div>
            
            <input
              type="text"
              placeholder="Place name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            
            <input
              type="text"
              placeholder="Location (City, Country)..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            
            <textarea
              placeholder="Tell us about your experience..."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCreatePost(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Share Post
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center">
                <img
                  src={post.userAvatar}
                  alt={post.user}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{post.user}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {post.place}, {post.location}
                    <span className="mx-2">•</span>
                    {post.timeAgo}
                  </div>
                </div>
              </div>
            </div>
            
            <img
              src={post.image}
              alt={post.place}
              className="w-full h-80 object-cover"
            />
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5 mr-1" />
                    {post.likes}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    {post.comments}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                
                <button className="text-green-600 hover:text-green-700 transition-colors">
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-gray-800">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;