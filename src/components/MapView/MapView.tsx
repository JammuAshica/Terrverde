import React, { useState } from 'react';
import { Map, Navigation, Search, Filter, Layers, Star, Heart, Camera } from 'lucide-react';
import MapControls from './MapControls';
import PlacesList from './PlacesList';
import MapDisplay from './MapDisplay';

/**
 * Map View Component
 * Enhanced interactive world map with personalized recommendations
 */
const MapView: React.FC = () => {
  const [mapMode, setMapMode] = useState<'visited' | 'wishlist'>('visited');
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mapStyle, setMapStyle] = useState<'satellite' | 'terrain' | 'standard'>('standard');

  // Personalized recommendations based on user preferences
  const recommendations = [
    {
      id: 'rec1',
      title: 'Perfect for Nature Photography',
      places: ['Iceland Highlands', 'Faroe Islands', 'Lofoten Islands'],
      reason: 'Based on your love for dramatic landscapes',
      icon: Camera,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'rec2',
      title: 'Wildlife Enthusiast Picks',
      places: ['Madagascar', 'Raja Ampat', 'Socotra Island'],
      reason: 'Unique species and biodiversity hotspots',
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'rec3',
      title: 'Adventure Seeker Destinations',
      places: ['Patagonia', 'Himalayas', 'Antarctic Peninsula'],
      reason: 'Challenging terrains for experienced hikers',
      icon: Star,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Enhanced Header with Gradient Background */}
      <div className="relative mb-8 rounded-2xl overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80"></div>
          <div className="relative h-full flex items-center justify-between px-8">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-full mr-6">
                <Map className="text-white w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">World Explorer</h1>
                <p className="text-blue-100 text-xl">
                  Discover amazing places tailored to your interests
                </p>
              </div>
            </div>
            
            {/* Map Mode Toggle */}
            <div className="flex space-x-4">
              <button
                onClick={() => setMapMode('visited')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  mapMode === 'visited'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl transform scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                Places Visited
              </button>
              <button
                onClick={() => setMapMode('wishlist')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  mapMode === 'wishlist'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl transform scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                Dream Destinations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec) => {
            const IconComponent = rec.icon;
            return (
              <div key={rec.id} className={`bg-gradient-to-br ${rec.color} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 mr-3" />
                  <h3 className="text-lg font-bold">{rec.title}</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">{rec.reason}</p>
                <div className="flex flex-wrap gap-2">
                  {rec.places.map((place) => (
                    <span key={place} className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        
        <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg">
          <Filter className="w-5 h-5 mr-2" />
          Smart Filters
        </button>
        
        <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
          <Layers className="w-5 h-5 mr-2" />
          Map Layers
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Enhanced Map Display */}
        <div className="lg:col-span-3">
          <MapDisplay
            mapMode={mapMode}
            mapStyle={mapStyle}
            selectedPlace={selectedPlace}
            onPlaceSelect={setSelectedPlace}
            searchTerm={searchTerm}
          />
          
          {/* Enhanced Map Controls */}
          <MapControls
            mapStyle={mapStyle}
            onMapStyleChange={setMapStyle}
          />
        </div>

        {/* Enhanced Places List */}
        <div className="lg:col-span-1">
          <PlacesList
            mapMode={mapMode}
            selectedPlace={selectedPlace}
            onPlaceSelect={setSelectedPlace}
            searchTerm={searchTerm}
          />
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="mt-12 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-blue-100 mb-6">
          Let our AI help you discover hidden gems based on your travel preferences
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Get Personalized Suggestions
        </button>
      </div>
    </div>
  );
};

export default MapView;