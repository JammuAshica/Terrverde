import React from 'react';
import { Camera, Users, MapPin, Leaf } from 'lucide-react';

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

/**
 * Profile Tabs Component
 * Navigation tabs for different profile sections
 */
const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'posts', label: 'Posts', icon: Camera },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'places', label: 'Places Visited', icon: MapPin },
    { id: 'impact', label: 'Impact', icon: Leaf }
  ];

  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex space-x-8">
        {tabs.map(({ id, label, icon: Icon }) => (
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
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProfileTabs;