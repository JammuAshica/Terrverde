import React, { useState } from 'react';
import { User, Settings, Camera } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import ProfileContent from './ProfileContent';

/**
 * Profile Component
 * User profile page with posts, communities, places, and impact data
 */
const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');

  // Mock user profile data
  const userProfile = {
    name: 'Alex Thompson',
    username: '@alex_eco_explorer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    bio: 'Nature photographer and environmental advocate. Exploring the world one green space at a time 🌿',
    location: 'San Francisco, CA',
    joined: 'March 2023',
    stats: {
      posts: 24,
      communities: 8,
      followers: 342,
      following: 189,
      carbonSaved: 1.2,
      placesVisited: 15
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <ProfileHeader userProfile={userProfile} />

      {/* Tab Navigation */}
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <ProfileContent activeTab={activeTab} userProfile={userProfile} />
    </div>
  );
};

export default Profile;