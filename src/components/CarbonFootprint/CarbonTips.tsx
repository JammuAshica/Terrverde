import React from 'react';
import { Lightbulb, Car, Home, Utensils, Recycle, Zap } from 'lucide-react';

interface CarbonTipsProps {
  level: 'regional' | 'country' | 'worldwide';
  currentData: {
    total: number;
    trend: number;
    goal: number;
    location: string;
  };
}

/**
 * Carbon Tips Component
 * Provides personalized tips based on carbon footprint level and data
 */
const CarbonTips: React.FC<CarbonTipsProps> = ({ level, currentData }) => {
  // Tips based on different levels and current performance
  const getTips = () => {
    const isAboveGoal = currentData.total > currentData.goal;
    const hasPositiveTrend = currentData.trend < 0;

    const baseTips = [
      {
        icon: Car,
        title: 'Transportation',
        tip: 'Use public transport or bike for short trips',
        impact: 'Can reduce emissions by 45%',
        color: 'bg-blue-50 text-blue-800 border-blue-200'
      },
      {
        icon: Home,
        title: 'Energy Efficiency',
        tip: 'Switch to LED bulbs and unplug devices',
        impact: 'Save up to 30% on energy use',
        color: 'bg-yellow-50 text-yellow-800 border-yellow-200'
      },
      {
        icon: Utensils,
        title: 'Sustainable Diet',
        tip: 'Reduce meat consumption and buy local',
        impact: 'Lower food emissions by 25%',
        color: 'bg-green-50 text-green-800 border-green-200'
      },
      {
        icon: Recycle,
        title: 'Waste Reduction',
        tip: 'Recycle properly and reduce single-use items',
        impact: 'Decrease waste emissions by 20%',
        color: 'bg-purple-50 text-purple-800 border-purple-200'
      }
    ];

    // Add level-specific tips
    if (level === 'regional') {
      baseTips.push({
        icon: Zap,
        title: 'Local Energy',
        tip: 'Support local renewable energy programs',
        impact: 'Boost regional clean energy adoption',
        color: 'bg-orange-50 text-orange-800 border-orange-200'
      });
    } else if (level === 'country') {
      baseTips.push({
        icon: Zap,
        title: 'Policy Support',
        tip: 'Advocate for national climate policies',
        impact: 'Influence country-wide emissions',
        color: 'bg-indigo-50 text-indigo-800 border-indigo-200'
      });
    } else {
      baseTips.push({
        icon: Zap,
        title: 'Global Action',
        tip: 'Support international climate initiatives',
        impact: 'Contribute to global emission reduction',
        color: 'bg-teal-50 text-teal-800 border-teal-200'
      });
    }

    return baseTips;
  };

  const tips = getTips();

  return (
    <div className="space-y-6">
      {/* Performance Status */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Lightbulb className="text-yellow-500 w-6 h-6 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">Your Impact</h3>
        </div>
        
        <div className="space-y-3">
          <div className={`p-3 rounded-lg border ${
            currentData.trend < 0 
              ? 'bg-green-50 text-green-800 border-green-200' 
              : 'bg-red-50 text-red-800 border-red-200'
          }`}>
            <p className="font-medium">
              {currentData.trend < 0 ? '✓ Great Progress!' : '⚠ Needs Attention'}
            </p>
            <p className="text-sm">
              {currentData.trend < 0 
                ? `You've reduced emissions by ${Math.abs(currentData.trend)}% this period.`
                : `Emissions increased by ${currentData.trend}% this period.`
              }
            </p>
          </div>
          
          <div className={`p-3 rounded-lg border ${
            currentData.total <= currentData.goal
              ? 'bg-green-50 text-green-800 border-green-200'
              : 'bg-orange-50 text-orange-800 border-orange-200'
          }`}>
            <p className="font-medium">
              {currentData.total <= currentData.goal ? '🎯 Goal Achieved!' : '📈 Above Target'}
            </p>
            <p className="text-sm">
              {currentData.total <= currentData.goal
                ? `You're ${(currentData.goal - currentData.total).toFixed(1)}t below your goal.`
                : `You're ${(currentData.total - currentData.goal).toFixed(1)}t above your goal.`
              }
            </p>
          </div>
        </div>
      </div>

      {/* Personalized Tips */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Personalized Tips</h3>
        <div className="space-y-4">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div key={index} className={`p-4 rounded-lg border ${tip.color}`}>
                <div className="flex items-start">
                  <IconComponent className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium mb-1">{tip.title}</p>
                    <p className="text-sm mb-2">{tip.tip}</p>
                    <p className="text-xs opacity-75">{tip.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
            Calculate Detailed Footprint
          </button>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Join Carbon Challenge
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors">
            Share Your Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarbonTips;