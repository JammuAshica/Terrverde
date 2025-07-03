import React, { useState } from 'react';
import { BookOpen, Plus, Heart, MessageCircle, Share2, MapPin, Calendar, Tag } from 'lucide-react';
import CreateEntry from './CreateEntry';

/**
 * Diary Component
 * Social feed showing everyone's nature diary entries - No statistics
 */
const Diary: React.FC = () => {
  const [showCreateEntry, setShowCreateEntry] = useState(false);
  
  // Social feed entries from all users
  const [entries] = useState([
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        username: '@sarah_nature'
      },
      title: 'Sunrise at Yosemite Valley',
      location: 'Yosemite National Park, California',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: 'Woke up at 5 AM to catch the sunrise from Glacier Point. The golden light hitting Half Dome was absolutely breathtaking. The valley was still shrouded in mist, creating an ethereal atmosphere that made me feel so connected to nature.',
      tags: ['sunrise', 'mountains', 'photography'],
      weather: 'Clear, 45°F',
      mood: 'Inspired',
      likes: 124,
      comments: 18,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      user: {
        name: 'Mike Chen',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        username: '@mike_explorer'
      },
      title: 'Forest Bathing in Redwood Grove',
      location: 'Muir Woods, California',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: 'Spent the afternoon practicing forest bathing among the ancient redwoods. The silence was profound, broken only by the occasional bird call. These trees have stood for over 1,000 years - it puts everything into perspective.',
      tags: ['forest', 'meditation', 'ancient trees'],
      weather: 'Foggy, 58°F',
      mood: 'Peaceful',
      likes: 89,
      comments: 12,
      timeAgo: '1 day ago'
    },
    {
      id: 3,
      user: {
        name: 'Emma Rodriguez',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        username: '@emma_wild'
      },
      title: 'Tide Pool Exploration',
      location: 'Point Reyes, California',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: 'Low tide revealed an incredible underwater world. Found sea anemones, hermit crabs, and colorful sea stars. Each tide pool is like a miniature ecosystem - so much life in such a small space!',
      tags: ['ocean', 'marine life', 'exploration'],
      weather: 'Partly cloudy, 62°F',
      mood: 'Curious',
      likes: 156,
      comments: 23,
      timeAgo: '3 days ago'
    },
    {
      id: 4,
      user: {
        name: 'David Park',
        avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        username: '@david_trails'
      },
      title: 'Mountain Peak Adventure',
      location: 'Mount Whitney, California',
      date: '2024-01-03',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: 'After 6 hours of hiking, finally reached the summit! The view from 14,505 feet is absolutely incredible. You can see for miles in every direction. Feeling grateful for this amazing planet we call home.',
      tags: ['hiking', 'summit', 'adventure'],
      weather: 'Sunny, 32°F',
      mood: 'Accomplished',
      likes: 203,
      comments: 31,
      timeAgo: '5 days ago'
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full mr-4">
            <BookOpen className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Nature Diary</h1>
            <p className="text-gray-600 mt-1">Discover amazing nature experiences from our community</p>
          </div>
        </div>
        
        <button
          onClick={() => setShowCreateEntry(true)}
          className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-lg flex items-center hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5 mr-2" />
          Share Experience
        </button>
      </div>

      {/* Create Entry Modal */}
      {showCreateEntry && (
        <CreateEntry onClose={() => setShowCreateEntry(false)} />
      )}

      {/* Social Feed */}
      <div className="space-y-8">
        {entries.map((entry) => (
          <article key={entry.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Entry Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={entry.user.avatar}
                    alt={entry.user.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-emerald-200"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{entry.user.name}</h3>
                    <p className="text-sm text-gray-600">{entry.user.username}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500">{entry.timeAgo}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {entry.location}
                  </div>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">{entry.title}</h2>
            </div>

            {/* Entry Image */}
            <div className="relative">
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-80 object-cover"
              />
              
              {/* Tags Overlay */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Entry Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">{entry.content}</p>
              
              {/* Weather and Mood */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {entry.weather}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  Feeling {entry.mood}
                </span>
              </div>

              {/* Interaction Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5 mr-1" />
                    <span className="font-medium">{entry.likes}</span>
                  </button>
                  
                  <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span className="font-medium">{entry.comments}</span>
                  </button>
                  
                  <button className="flex items-center text-gray-600 hover:text-emerald-500 transition-colors">
                    <Share2 className="w-5 h-5 mr-1" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(entry.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300">
          Load More Stories
        </button>
      </div>
    </div>
  );
};

export default Diary;