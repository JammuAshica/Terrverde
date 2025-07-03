import React from 'react';
import { MapPin, Flag, Globe, TrendingUp, TrendingDown } from 'lucide-react';

interface CarbonLevelsProps {
  selectedLevel: 'regional' | 'country' | 'worldwide';
}

/**
 * Carbon Levels Component
 * Displays comparison between regional, country, and worldwide carbon levels
 */
const CarbonLevels: React.FC<CarbonLevelsProps> = ({ selectedLevel }) => {
  const levelData = [
    {
      id: 'regional',
      name: 'Regional',
      location: 'San Francisco Bay Area',
      icon: MapPin,
      current: 2.1,
      average: 2.8,
      trend: -18,
      color: 'green',
      rank: '12th out of 50 regions'
    },
    {
      id: 'country',
      name: 'Country',
      location: 'United States',
      icon: Flag,
      current: 4.2,
      average: 4.8,
      trend: -8,
      color: 'blue',
      rank: '15th out of 195 countries'
    },
    {
      id: 'worldwide',
      name: 'Worldwide',
      location: 'Global Average',
      icon: Globe,
      current: 3.8,
      average: 4.1,
      trend: -3,
      color: 'purple',
      rank: 'Global benchmark'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Carbon Levels Comparison</h3>
      
      <div className="space-y-4">
        {levelData.map((level) => {
          const IconComponent = level.icon;
          const isSelected = selectedLevel === level.id;
          
          return (
            <div
              key={level.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                isSelected
                  ? `border-${level.color}-500 bg-${level.color}-50`
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <IconComponent className={`w-5 h-5 mr-3 ${
                    isSelected ? `text-${level.color}-600` : 'text-gray-600'
                  }`} />
                  <div>
                    <h4 className="font-medium text-gray-900">{level.name}</h4>
                    <p className="text-sm text-gray-600">{level.location}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{level.current}t</div>
                  <div className="flex items-center text-sm">
                    {level.trend < 0 ? (
                      <TrendingDown className="text-green-500 w-4 h-4 mr-1" />
                    ) : (
                      <TrendingUp className="text-red-500 w-4 h-4 mr-1" />
                    )}
                    <span className={level.trend < 0 ? 'text-green-600' : 'text-red-600'}>
                      {Math.abs(level.trend)}%
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Your emissions</span>
                  <span>Average: {level.average}t</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      level.current <= level.average ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min((level.current / level.average) * 100, 100)}%` }}
                  />
                </div>
              </div>
              
              {/* Ranking */}
              <div className="text-xs text-gray-600">
                <span className="font-medium">Ranking:</span> {level.rank}
              </div>
              
              {/* Performance Indicator */}
              <div className="mt-2">
                {level.current <= level.average ? (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    ✓ Below Average
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                    ⚠ Above Average
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Key Insights</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Your regional emissions are 25% below the area average</li>
          <li>• National performance shows steady improvement</li>
          <li>• Global trends indicate positive climate action</li>
        </ul>
      </div>
    </div>
  );
};

export default CarbonLevels;