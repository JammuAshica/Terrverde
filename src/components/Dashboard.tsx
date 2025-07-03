import React from 'react';
import { MapPin, Users, Leaf, Camera, TrendingUp, Heart } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back to EcoVoyage</h1>
        <p className="text-gray-600">Your journey to a greener planet continues here</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <Camera className="text-green-500 w-12 h-12 mr-4" />
            <div>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-gray-600">Places Shared</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <Users className="text-blue-500 w-12 h-12 mr-4" />
            <div>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-gray-600">Communities</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <Leaf className="text-emerald-500 w-12 h-12 mr-4" />
            <div>
              <p className="text-2xl font-bold text-gray-900">1.2t</p>
              <p className="text-gray-600">CO₂ Saved</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <MapPin className="text-red-500 w-12 h-12 mr-4" />
            <div>
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Places</h2>
          <div className="space-y-4">
            {[
              { place: 'Redwood National Park', country: 'USA', date: '2 days ago', likes: 24 },
              { place: 'Amazon Rainforest', country: 'Brazil', date: '1 week ago', likes: 45 },
              { place: 'Banff National Park', country: 'Canada', date: '2 weeks ago', likes: 32 },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.place}</p>
                  <p className="text-sm text-gray-600">{item.country} • {item.date}</p>
                </div>
                <div className="flex items-center text-gray-500">
                  <Heart className="w-4 h-4 mr-1" />
                  <span className="text-sm">{item.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <TrendingUp className="text-green-500 w-8 h-8 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Carbon Footprint</p>
                  <p className="text-sm text-gray-600">15% reduction this month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">2.3t</p>
                <p className="text-sm text-gray-600">CO₂ this year</p>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Conservation Goals</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tree planting goal</span>
                  <span>75/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;