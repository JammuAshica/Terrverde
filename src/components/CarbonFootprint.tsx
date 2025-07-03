import React, { useState } from 'react';
import { Leaf, Car, Home, Plane, TrendingDown, TrendingUp, Target } from 'lucide-react';

const CarbonFootprint: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const carbonData = {
    month: {
      total: 2.3,
      categories: [
        { name: 'Transportation', value: 0.8, icon: Car, color: 'bg-blue-500' },
        { name: 'Energy', value: 0.9, icon: Home, color: 'bg-yellow-500' },
        { name: 'Travel', value: 0.4, icon: Plane, color: 'bg-red-500' },
        { name: 'Other', value: 0.2, icon: Leaf, color: 'bg-green-500' }
      ],
      trend: -15,
      goal: 2.0
    },
    year: {
      total: 28.5,
      categories: [
        { name: 'Transportation', value: 10.2, icon: Car, color: 'bg-blue-500' },
        { name: 'Energy', value: 11.8, icon: Home, color: 'bg-yellow-500' },
        { name: 'Travel', value: 4.8, icon: Plane, color: 'bg-red-500' },
        { name: 'Other', value: 1.7, icon: Leaf, color: 'bg-green-500' }
      ],
      trend: -12,
      goal: 25.0
    }
  };

  const currentData = carbonData[selectedPeriod as keyof typeof carbonData];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Carbon Footprint Tracker</h1>
        <p className="text-gray-600">Monitor and reduce your environmental impact</p>
      </div>

      {/* Period Selector */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedPeriod('month')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedPeriod === 'month'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          This Month
        </button>
        <button
          onClick={() => setSelectedPeriod('year')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedPeriod === 'year'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          This Year
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Carbon Data */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Carbon Emissions</h2>
              <div className="flex items-center">
                {currentData.trend < 0 ? (
                  <TrendingDown className="text-green-500 w-5 h-5 mr-1" />
                ) : (
                  <TrendingUp className="text-red-500 w-5 h-5 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  currentData.trend < 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {Math.abs(currentData.trend)}% {currentData.trend < 0 ? 'decrease' : 'increase'}
                </span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {currentData.total}t
              </div>
              <div className="text-gray-600">
                CO₂ emissions this {selectedPeriod}
              </div>
            </div>

            <div className="space-y-4">
              {currentData.categories.map((category) => {
                const IconComponent = category.icon;
                const percentage = (category.value / currentData.total) * 100;
                
                return (
                  <div key={category.name} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <IconComponent className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">{category.name}</span>
                        <span className="text-sm text-gray-600">{category.value}t</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${category.color}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carbon Offset Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Offset Your Carbon</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Plant Trees</h4>
                <p className="text-sm text-green-700 mb-3">
                  Plant 10 trees to offset 0.5t CO₂
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                  Plant Now
                </button>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Renewable Energy</h4>
                <p className="text-sm text-blue-700 mb-3">
                  Switch to clean energy sources
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Goals and Progress */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Your Goal</h3>
            <div className="text-center mb-4">
              <Target className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{currentData.goal}t</div>
              <div className="text-sm text-gray-600">Target for this {selectedPeriod}</div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm text-gray-600">
                  {((currentData.goal - currentData.total) / currentData.goal * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${Math.min(((currentData.goal - currentData.total) / currentData.goal * 100), 100)}%` }}
                />
              </div>
            </div>
            
            <p className="text-sm text-gray-600 text-center">
              {currentData.total < currentData.goal ? (
                <span className="text-green-600">
                  Great job! You're {(currentData.goal - currentData.total).toFixed(1)}t below your goal.
                </span>
              ) : (
                <span className="text-red-600">
                  You're {(currentData.total - currentData.goal).toFixed(1)}t above your goal.
                </span>
              )}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Tips</h3>
            <div className="space-y-3">
              <div className="flex items-start p-3 bg-green-50 rounded-lg">
                <Leaf className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-900">Use Public Transport</p>
                  <p className="text-xs text-green-700">Can reduce transportation emissions by 45%</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <Home className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Energy Efficient Appliances</p>
                  <p className="text-xs text-blue-700">Save up to 30% on home energy use</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                <Plane className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">Reduce Air Travel</p>
                  <p className="text-xs text-yellow-700">Choose virtual meetings when possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprint;