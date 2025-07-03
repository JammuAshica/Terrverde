import React, { useState } from 'react';
import { Leaf, TrendingDown, TrendingUp, Globe, MapPin, Flag, PieChart } from 'lucide-react';
import CarbonChart from './CarbonChart';
import CarbonTips from './CarbonTips';
import CarbonLevels from './CarbonLevels';

/**
 * Carbon Footprint Component
 * Colorful and lively carbon footprint tracking with pie charts and images
 */
const CarbonFootprint: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'regional' | 'country' | 'worldwide'>('regional');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Carbon data for different levels and periods
  const carbonData = {
    regional: {
      month: { total: 2.1, trend: -18, goal: 2.0, location: 'San Francisco Bay Area' },
      year: { total: 26.8, trend: -15, goal: 25.0, location: 'San Francisco Bay Area' }
    },
    country: {
      month: { total: 4.2, trend: -8, goal: 4.0, location: 'United States' },
      year: { total: 52.3, trend: -5, goal: 50.0, location: 'United States' }
    },
    worldwide: {
      month: { total: 3.8, trend: -3, goal: 3.5, location: 'Global Average' },
      year: { total: 45.6, trend: -2, goal: 42.0, location: 'Global Average' }
    }
  };

  const currentData = carbonData[selectedLevel][selectedPeriod as keyof typeof carbonData.regional];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with Background Image */}
      <div className="relative mb-8 rounded-2xl overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80"></div>
          <div className="relative h-full flex items-center px-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full mr-6">
              <Leaf className="text-white w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Carbon Footprint Tracker</h1>
              <p className="text-green-100 text-xl">
                Monitor and reduce your environmental impact at different scales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Level Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => setSelectedLevel('regional')}
          className={`p-6 rounded-xl transition-all duration-300 ${
            selectedLevel === 'regional'
              ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl transform scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg'
          }`}
        >
          <MapPin className="w-8 h-8 mb-3 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Regional</h3>
          <p className="text-sm opacity-90">Your local area impact</p>
        </button>
        
        <button
          onClick={() => setSelectedLevel('country')}
          className={`p-6 rounded-xl transition-all duration-300 ${
            selectedLevel === 'country'
              ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl transform scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg'
          }`}
        >
          <Flag className="w-8 h-8 mb-3 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Country</h3>
          <p className="text-sm opacity-90">National comparison</p>
        </button>
        
        <button
          onClick={() => setSelectedLevel('worldwide')}
          className={`p-6 rounded-xl transition-all duration-300 ${
            selectedLevel === 'worldwide'
              ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-xl transform scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg'
          }`}
        >
          <Globe className="w-8 h-8 mb-3 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Worldwide</h3>
          <p className="text-sm opacity-90">Global perspective</p>
        </button>
      </div>

      {/* Period Selector */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedPeriod('month')}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            selectedPeriod === 'month'
              ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          This Month
        </button>
        <button
          onClick={() => setSelectedPeriod('year')}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            selectedPeriod === 'year'
              ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          This Year
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Carbon Data */}
        <div className="lg:col-span-2 space-y-8">
          {/* Current Stats with Pie Chart */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Carbon Emissions</h2>
                <p className="text-gray-600">{currentData.location}</p>
              </div>
              <div className="flex items-center">
                {currentData.trend < 0 ? (
                  <TrendingDown className="text-green-500 w-8 h-8 mr-2" />
                ) : (
                  <TrendingUp className="text-red-500 w-8 h-8 mr-2" />
                )}
                <span className={`text-xl font-bold ${
                  currentData.trend < 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {Math.abs(currentData.trend)}% {currentData.trend < 0 ? 'decrease' : 'increase'}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Pie Chart */}
              <div className="relative">
                <div className="w-48 h-48 mx-auto">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="20"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke={currentData.total <= currentData.goal ? "#10b981" : "#ef4444"}
                      strokeWidth="20"
                      strokeDasharray={`${(currentData.total / currentData.goal) * 502.4} 502.4`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">{currentData.total}t</div>
                      <div className="text-gray-600">CO₂</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-emerald-600">{currentData.goal}t</div>
                  <div className="text-gray-600">Monthly Goal</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-blue-600">
                    {(currentData.goal - currentData.total).toFixed(1)}t
                  </div>
                  <div className="text-gray-600">
                    {currentData.total <= currentData.goal ? 'Below Goal' : 'Above Goal'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carbon Chart */}
          <CarbonChart level={selectedLevel} period={selectedPeriod} />

          {/* Carbon Levels Comparison */}
          <CarbonLevels selectedLevel={selectedLevel} />
        </div>

        {/* Tips and Actions */}
        <div className="space-y-6">
          <CarbonTips level={selectedLevel} currentData={currentData} />
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprint;