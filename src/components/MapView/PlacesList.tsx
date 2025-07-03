import React from 'react';
import { MapPin, Calendar, Camera, Star, Heart } from 'lucide-react';
import { getPlacesData } from './placesData';

interface PlacesListProps {
  mapMode: 'visited' | 'wishlist';
  selectedPlace: number | null;
  onPlaceSelect: (id: number) => void;
  searchTerm: string;
}

/**
 * Places List Component
 * Displays a list of places with details
 */
const PlacesList: React.FC<PlacesListProps> = ({
  mapMode,
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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">
          {mapMode === 'visited' ? 'Visited Places' : 'Wishlist'}
        </h3>
        <p className="text-sm text-gray-600">{filteredPlaces.length} places</p>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {filteredPlaces.length === 0 ? (
          <div className="p-6 text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No places found</p>
          </div>
        ) : (
          <div className="space-y-1">
            {filteredPlaces.map((place) => (
              <button
                key={place.id}
                onClick={() => onPlaceSelect(place.id)}
                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                  selectedPlace === place.id ? 'bg-green-50 border-r-4 border-green-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{place.name}</h4>
                    <p className="text-xs text-gray-600">{place.location}</p>
                  </div>
                  <MapPin className={`w-4 h-4 ${
                    mapMode === 'visited' ? 'text-green-600' : 'text-blue-600'
                  }`} />
                </div>
                
                {mapMode === 'visited' && 'visitDate' in place && (
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(place.visitDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center space-x-2">
                      {place.photos && (
                        <div className="flex items-center">
                          <Camera className="w-3 h-3 mr-1" />
                          {place.photos}
                        </div>
                      )}
                      {place.rating && (
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="ml-1">{place.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {mapMode === 'wishlist' && 'priority' in place && (
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-1 rounded-full ${
                      place.priority === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {place.priority} Priority
                    </span>
                    {place.reason && (
                      <div className="flex items-center text-gray-600">
                        <Heart className="w-3 h-3 mr-1" />
                        <span className="truncate max-w-20">{place.reason}</span>
                      </div>
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacesList;