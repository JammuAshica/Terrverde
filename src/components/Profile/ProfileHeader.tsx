import React from 'react';
import { MapPin, Calendar, Settings, Camera } from 'lucide-react';

interface ProfileHeaderProps {
  userProfile: {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    location: string;
    joined: string;
    stats: {
      posts: number;
      communities: number;
      followers: number;
      following: number;
      carbonSaved: number;
      placesVisited: number;
    };
  };
}

/**
 * Profile Header Component
 * Displays user information, avatar, and statistics
 */
const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userProfile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        {/* Avatar */}
        <div className="relative">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-green-200"
          />
          <button className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        
        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <h1 className="text-2xl font-bold text-gray-900 mr-3">{userProfile.name}</h1>
            <button className="text-gray-500 hover:text-gray-700">
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-2">{userProfile.username}</p>
          <p className="text-gray-700 mb-4">{userProfile.bio}</p>
          
          {/* Meta Information */}
          <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {userProfile.location}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Joined {userProfile.joined}
            </div>
          </div>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-gray-900">{userProfile.stats.posts}</div>
              <div className="text-sm text-gray-600">Posts</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{userProfile.stats.communities}</div>
              <div className="text-sm text-gray-600">Communities</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{userProfile.stats.followers}</div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{userProfile.stats.following}</div>
              <div className="text-sm text-gray-600">Following</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-600">{userProfile.stats.carbonSaved}t</div>
              <div className="text-sm text-gray-600">CO₂ Saved</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-600">{userProfile.stats.placesVisited}</div>
              <div className="text-sm text-gray-600">Places</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;