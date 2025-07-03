import React from 'react';
import { Users, MessageCircle, Calendar, TrendingUp } from 'lucide-react';
import { getCommunityById } from './communityData';

interface CommunityDetailsProps {
  selectedCommunity: number | null;
}

/**
 * Community Details Component
 * Shows detailed information and recent activity for selected community
 */
const CommunityDetails: React.FC<CommunityDetailsProps> = ({ selectedCommunity }) => {
  if (!selectedCommunity) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Select a community to view details</p>
        </div>
      </div>
    );
  }

  const community = getCommunityById(selectedCommunity);
  
  if (!community) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-12">
          <p className="text-gray-600">Community not found</p>
        </div>
      </div>
    );
  }

  // Mock recent activity data
  const recentActivity = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
      action: 'shared a new conservation update',
      time: '2 hours ago',
      content: 'Great news! We\'ve successfully planted 500 trees this month.'
    },
    {
      id: 2,
      user: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
      action: 'posted a wildlife sighting',
      time: '5 hours ago',
      content: 'Spotted a family of deer near the river trail!'
    },
    {
      id: 3,
      user: 'Emma Rodriguez',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
      action: 'organized a cleanup event',
      time: '1 day ago',
      content: 'Join us this Saturday for a beach cleanup at 9 AM.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Community Header */}
      <div className="relative h-32 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">{community.name}</h2>
          <p className="text-green-100 text-sm">{community.location}</p>
        </div>
      </div>

      <div className="p-6">
        {/* Community Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Users className="w-6 h-6 text-green-600 mx-auto mb-1" />
            <p className="text-lg font-bold text-gray-900">{community.members.toLocaleString()}</p>
            <p className="text-xs text-gray-600">Members</p>
          </div>
          
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <p className="text-lg font-bold text-gray-900">+12%</p>
            <p className="text-xs text-gray-600">Growth</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <img
                  src={activity.avatar}
                  alt={activity.user}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1 mb-1">
                    <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{activity.content}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
            View Full Community
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Discussion
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;