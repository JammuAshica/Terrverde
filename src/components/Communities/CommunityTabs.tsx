import React from 'react';
import { Users, Activity, Heart, MapPin } from 'lucide-react';

interface CommunityTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

/**
 * Community Tabs Component
 * Navigation tabs for different community categories
 */
const CommunityTabs: React.FC<CommunityTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'joined', label: 'Joined', icon: Users, count: 8 },
    { id: 'active', label: 'Active', icon: Activity, count: 12 },
    { id: 'cause', label: 'For a Cause', icon: Heart, count: 24 },
    { id: 'regional', label: 'Regional', icon: MapPin, count: 156 }
  ];

  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex space-x-8">
        {tabs.map(({ id, label, icon: Icon, count }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === id
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              activeTab === id
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CommunityTabs;