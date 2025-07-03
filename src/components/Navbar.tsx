import React from 'react';
import { Home, Camera, Users, Leaf, User, Map } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'posts', label: 'Places', icon: Camera },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'carbon', label: 'Carbon', icon: Leaf },
    { id: 'map', label: 'Map', icon: Map },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Leaf className="text-green-600 w-8 h-8 mr-2" />
            <span className="text-xl font-bold text-green-800">EcoVoyage</span>
          </div>
          
          <div className="flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentView(id)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentView === id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;