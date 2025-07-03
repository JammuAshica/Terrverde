import React, { useState } from 'react';
import { MapPin, Calendar, Cloud, Heart, MessageCircle, Share2, Tag } from 'lucide-react';

interface DiaryEntryProps {
  entry: {
    id: number;
    title: string;
    location: string;
    date: string;
    image: string;
    content: string;
    tags: string[];
    weather: string;
    mood: string;
    likes: number;
    comments: number;
    coordinates: { lat: number; lng: number };
  };
}

/**
 * Diary Entry Component
 * Displays individual diary entry with all details and interactions
 */
const DiaryEntry: React.FC<DiaryEntryProps> = ({ entry }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  /**
   * Format date for display
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  /**
   * Get mood color based on mood
   */
  const getMoodColor = (mood: string) => {
    switch (mood.toLowerCase()) {
      case 'inspired':
        return 'bg-yellow-100 text-yellow-800';
      case 'peaceful':
        return 'bg-green-100 text-green-800';
      case 'curious':
        return 'bg-blue-100 text-blue-800';
      case 'excited':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  /**
   * Truncate content for preview
   */
  const truncatedContent = entry.content.length > 200 
    ? entry.content.substring(0, 200) + '...' 
    : entry.content;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Entry Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{entry.title}</h2>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(entry.date)}
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {entry.location}
              </div>
              
              <div className="flex items-center">
                <Cloud className="w-4 h-4 mr-1" />
                {entry.weather}
              </div>
            </div>
          </div>
          
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getMoodColor(entry.mood)}`}>
            {entry.mood}
          </span>
        </div>
      </div>

      {/* Entry Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-full object-cover"
        />
        
        {/* Tags Overlay */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Entry Content */}
      <div className="p-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {showFullContent ? entry.content : truncatedContent}
          </p>
          
          {entry.content.length > 200 && (
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className="text-green-600 hover:text-green-700 font-medium mt-2"
            >
              {showFullContent ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* Interaction Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 mr-1 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{entry.likes + (isLiked ? 1 : 0)}</span>
            </button>
            
            <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5 mr-1" />
              <span className="font-medium">{entry.comments}</span>
            </button>
            
            <button className="flex items-center text-gray-600 hover:text-green-500 transition-colors">
              <Share2 className="w-5 h-5 mr-1" />
              <span className="font-medium">Share</span>
            </button>
          </div>
          
          <button className="text-green-600 hover:text-green-700 transition-colors">
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default DiaryEntry;