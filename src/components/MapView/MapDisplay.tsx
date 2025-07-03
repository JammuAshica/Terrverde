import React from 'react';
import { MapPin, Camera, Star, Calendar } from 'lucide-react';
import { getPlacesData } from './placesData';

interface MapDisplayProps {
  mapMode: 'visited' | 'wishlist';
  mapStyle: 'satellite' | 'terrain' | 'standard';
  selectedPlace: number | null;
  onPlaceSelect: (id: number) => void;
  searchTerm: string;
}

/**
 * Map Display Component
 * Shows the interactive world map with place markers
 */
const MapDisplay: React.FC<MapDisplayProps> = ({
  mapMode,
  mapStyle,
  selectedPlace,
  onPlaceSelect,
  searchTerm
}) => {
  const places = getPlacesData(mapMode);
  
  // Filter places based on search term
  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Get background style based on map style
   */
  const getMapBackground = () => {
    switch (mapStyle) {
      case 'satellite':
        return 'bg-gradient-to-br from-blue-900 via-green-800 to-brown-700';
      case 'terrain':
        return 'bg-gradient-to-br from-green-200 via-yellow-100 to-brown-200';
      default:
        return 'bg-gradient-to-br from-blue-100 via-green-50 to-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Map Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            {mapMode === 'visited' ? 'Places I\'ve Visited' : 'Places I Want to Visit'}
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{filteredPlaces.length} places</span>
          </div>
        </div>
      </div>
      
      {/* Interactive Map */}
      <div className={`relative h-96 ${getMapBackground()}`}>
        {/* World Map Outline (Simplified) */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* Simplified world map paths */}
            <path
              d="M150,200 Q200,180 250,200 L300,190 Q350,200 400,210 L450,200 Q500,190 550,200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-600"
            />
            <path
              d="M100,250 Q150,240 200,250 L250,240 Q300,250 350,260 L400,250"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-600"
            />
          </svg>
        </div>

        {/* Place Markers */}
        {filteredPlaces.map((place, index) => (
          <button
            key={place.id}
            onClick={() => onPlaceSelect(place.id)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 ${
              selectedPlace === place.id ? 'scale-125 z-10' : 'z-0'
            }`}
            style={{
              left: `${20 + (index * 15) % 60}%`,
              top: `${30 + (index * 12) % 40}%`
            }}
          >
            <div className="relative">
              <MapPin className={`w-8 h-8 drop-shadow-lg ${
                mapMode === 'visited' ? 'text-green-600' : 'text-blue-600'
              } ${selectedPlace === place.id ? 'animate-bounce' : ''}`} />
              
              {/* Place Info Popup */}
              {selectedPlace === place.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-3 min-w-48 z-20">
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-sm">{place.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">{place.location}</p>
                    
                    {mapMode === 'visited' && 'visitDate' in place && (
                      <div className="flex items-center text-xs text-gray-600 mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(place.visitDate).toLocaleDateString()}
                      </div>
                    )}
                    
                    {mapMode === 'visited' && 'photos' in place && (
                      <div className="flex items-center text-xs text-gray-600 mb-1">
                        <Camera className="w-3 h-3 mr-1" />
                        {place.photos} photos
                      </div>
                    )}
                    
                    {mapMode === 'visited' && 'rating' in place && (
                      <div className="flex items-center text-xs">
                        {[...Array(place.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    )}
                    
                    {mapMode === 'wishlist' && 'priority' in place && (
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        place.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {place.priority} Priority
                      </span>
                    )}
                  </div>
                  
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              )}
            </div>
          </button>
        ))}

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
          <h4 className="font-medium text-gray-900 text-sm mb-2">Legend</h4>
          <div className="space-y-1">
            <div className="flex items-center text-xs">
              <MapPin className={`w-4 h-4 mr-2 ${
                mapMode === 'visited' ? 'text-green-600' : 'text-blue-600'
              }`} />
              <span className="text-gray-700">
                {mapMode === 'visited' ? 'Visited' : 'Wishlist'}
              </span>
            </div>
          </div>
        </div>

        {/* Map Style Indicator */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <span className="text-xs text-gray-600 capitalize">{mapStyle} View</span>
        </div>
      </div>
    </div>
  );
};

export default MapDisplay;