import React, { useState } from 'react';
import { MapPin, Navigation, Search, Filter, Star, Camera } from 'lucide-react';

const MapView: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  const [mapMode, setMapMode] = useState('visited');

  const visitedPlaces = [
    {
      id: 1,
      name: 'Yosemite National Park',
      location: 'California, USA',
      coordinates: { lat: 37.8651, lng: -119.5383 },
      visitDate: '2024-01-15',
      photos: 12,
      rating: 5
    },
    {
      id: 2,
      name: 'Banff National Park',
      location: 'Alberta, Canada',
      coordinates: { lat: 51.4968, lng: -115.9281 },
      visitDate: '2024-02-20',
      photos: 8,
      rating: 5
    },
    {
      id: 3,
      name: 'Torres del Paine',
      location: 'Patagonia, Chile',
      coordinates: { lat: -51.0, lng: -73.0 },
      visitDate: '2024-03-10',
      photos: 15,
      rating: 5
    }
  ];

  const wishlistPlaces = [
    {
      id: 4,
      name: 'Iceland Highlands',
      location: 'Iceland',
      coordinates: { lat: 64.9631, lng: -19.0208 },
      priority: 'High',
      reason: 'Northern Lights and glaciers'
    },
    {
      id: 5,
      name: 'Socotra Island',
      location: 'Yemen',
      coordinates: { lat: 12.4634, lng: 53.8237 },
      priority: 'Medium',
      reason: 'Unique endemic flora'
    },
    {
      id: 6,
      name: 'Raja Ampat',
      location: 'Indonesia',
      coordinates: { lat: -0.2320, lng: 130.5755 },
      priority: 'High',
      reason: 'Marine biodiversity hotspot'
    }
  ];

  const currentPlaces = mapMode === 'visited' ? visitedPlaces : wishlistPlaces;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Nature Map</h1>
          <p className="text-gray-600 mt-2">Explore the places you've been and want to visit</p>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={() => setMapMode('visited')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              mapMode === 'visited'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Visited Places
          </button>
          <button
            onClick={() => setMapMode('wishlist')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              mapMode === 'wishlist'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  {mapMode === 'visited' ? 'Places I\'ve Visited' : 'Places I Want to Visit'}
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Search className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Filter className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Navigation className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mock Map Display */}
            <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center">
                  <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-800 font-medium">Interactive Map</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {mapMode === 'visited' 
                      ? `${visitedPlaces.length} places visited` 
                      : `${wishlistPlaces.length} places on wishlist`}
                  </p>
                </div>
              </div>
              
              {/* Map Pins */}
              {currentPlaces.map((place, index) => (
                <button
                  key={place.id}
                  onClick={() => setSelectedPlace(place.id)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                    mapMode === 'visited' ? 'text-green-600' : 'text-blue-600'
                  } hover:scale-110 transition-transform`}
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + index * 15}%`
                  }}
                >
                  <MapPin className="w-6 h-6 drop-shadow-lg" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Places List */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">
            {mapMode === 'visited' ? 'Visited Places' : 'Wishlist'}
          </h3>
          
          {currentPlaces.map((place) => (
            <div
              key={place.id}
              className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all ${
                selectedPlace === place.id ? 'ring-2 ring-green-500' : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedPlace(place.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">{place.name}</h4>
                  <p className="text-sm text-gray-600">{place.location}</p>
                </div>
                <MapPin className={`w-5 h-5 ${
                  mapMode === 'visited' ? 'text-green-600' : 'text-blue-600'
                }`} />
              </div>
              
              {mapMode === 'visited' && 'visitDate' in place && (
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Camera className="w-4 h-4 mr-1" />
                    {place.photos} photos
                  </div>
                  <div className="flex items-center">
                    {[...Array(place.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(place.visitDate).toLocaleDateString()}
                  </span>
                </div>
              )}
              
              {mapMode === 'wishlist' && 'priority' in place && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      place.priority === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {place.priority} Priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{place.reason}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;