import React from 'react';
import { Layers, ZoomIn, ZoomOut, RotateCcw, Navigation } from 'lucide-react';

interface MapControlsProps {
  mapStyle: 'satellite' | 'terrain' | 'standard';
  onMapStyleChange: (style: 'satellite' | 'terrain' | 'standard') => void;
}

/**
 * Map Controls Component
 * Provides controls for map style, zoom, and navigation
 */
const MapControls: React.FC<MapControlsProps> = ({ mapStyle, onMapStyleChange }) => {
  const mapStyles = [
    { id: 'standard', label: 'Standard', description: 'Clean map view' },
    { id: 'satellite', label: 'Satellite', description: 'Aerial imagery' },
    { id: 'terrain', label: 'Terrain', description: 'Topographic view' }
  ] as const;

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {/* Map Style Selector */}
      <div className="bg-white rounded-lg shadow-md p-4 flex-1 min-w-64">
        <div className="flex items-center mb-3">
          <Layers className="w-5 h-5 text-gray-600 mr-2" />
          <h3 className="font-medium text-gray-900">Map Style</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {mapStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => onMapStyleChange(style.id)}
              className={`p-3 rounded-lg border-2 transition-all text-center ${
                mapStyle === style.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-sm font-medium text-gray-900">{style.label}</div>
              <div className="text-xs text-gray-600">{style.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Map Navigation Controls */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-3">
          <Navigation className="w-5 h-5 text-gray-600 mr-2" />
          <h3 className="font-medium text-gray-900">Controls</h3>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <ZoomIn className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <ZoomOut className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <RotateCcw className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapControls;