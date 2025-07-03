import React from 'react';
import { BarChart3, PieChart, TrendingDown } from 'lucide-react';

interface CarbonChartProps {
  level: 'regional' | 'country' | 'worldwide';
  period: string;
}

/**
 * Carbon Chart Component
 * Displays carbon footprint data in visual chart format
 */
const CarbonChart: React.FC<CarbonChartProps> = ({ level, period }) => {
  // Mock data for different emission categories
  const emissionCategories = {
    regional: [
      { name: 'Transportation', value: 35, color: 'bg-blue-500' },
      { name: 'Energy', value: 28, color: 'bg-yellow-500' },
      { name: 'Food', value: 22, color: 'bg-green-500' },
      { name: 'Waste', value: 15, color: 'bg-red-500' }
    ],
    country: [
      { name: 'Transportation', value: 42, color: 'bg-blue-500' },
      { name: 'Energy', value: 31, color: 'bg-yellow-500' },
      { name: 'Industry', value: 18, color: 'bg-purple-500' },
      { name: 'Other', value: 9, color: 'bg-gray-500' }
    ],
    worldwide: [
      { name: 'Energy', value: 45, color: 'bg-yellow-500' },
      { name: 'Transportation', value: 25, color: 'bg-blue-500' },
      { name: 'Industry', value: 20, color: 'bg-purple-500' },
      { name: 'Agriculture', value: 10, color: 'bg-green-500' }
    ]
  };

  const categories = emissionCategories[level];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Emission Breakdown</h3>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
            <BarChart3 className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
            <PieChart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={category.name} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
              <span className="text-sm text-gray-600">{category.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${category.value}%`,
                  animationDelay: `${index * 200}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Trend Analysis */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <div className="flex items-center mb-2">
          <TrendingDown className="text-green-600 w-5 h-5 mr-2" />
          <span className="font-medium text-green-800">Positive Trend</span>
        </div>
        <p className="text-sm text-green-700">
          Your emissions have decreased by 12% compared to last {period}. 
          Keep up the great work!
        </p>
      </div>

      {/* Historical Data Preview */}
      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-3">Last 6 Months Trend</h4>
        <div className="flex items-end space-x-2 h-20">
          {[3.2, 2.8, 2.9, 2.5, 2.3, 2.1].map((value, index) => (
            <div key={index} className="flex-1 bg-green-200 rounded-t" style={{ height: `${(value / 3.2) * 100}%` }}>
              <div className="w-full bg-green-500 rounded-t" style={{ height: '100%' }}></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>6mo ago</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
};

export default CarbonChart;