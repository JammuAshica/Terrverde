import React from 'react';
import { BookOpen, Users, Leaf, User, Map, AlertTriangle } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isAuthenticated: boolean;
}

/**
 * Navigation Bar Component
 * Lively and colorful navigation with gradient effects
 */
const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, isAuthenticated }) => {
  // Navigation items configuration with vibrant gradients
  const navItems = [
    { 
      id: 'issues', 
      label: 'Issues', 
      icon: AlertTriangle, 
      gradient: 'from-red-500 to-pink-500',
      hoverGradient: 'hover:from-red-600 hover:to-pink-600'
    },
    { 
      id: 'diary', 
      label: 'Diary', 
      icon: BookOpen, 
      gradient: 'from-blue-500 to-indigo-500',
      hoverGradient: 'hover:from-blue-600 hover:to-indigo-600'
    },
    { 
      id: 'communities', 
      label: 'Communities', 
      icon: Users, 
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'hover:from-purple-600 hover:to-pink-600'
    },
    { 
      id: 'carbon', 
      label: 'Carbon', 
      icon: Leaf, 
      gradient: 'from-green-500 to-emerald-500',
      hoverGradient: 'hover:from-green-600 hover:to-emerald-600'
    },
    { 
      id: 'map', 
      label: 'Map', 
      icon: Map, 
      gradient: 'from-orange-500 to-red-500',
      hoverGradient: 'hover:from-orange-600 hover:to-red-600'
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: User, 
      gradient: 'from-teal-500 to-cyan-500',
      hoverGradient: 'hover:from-teal-600 hover:to-cyan-600'
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl z-40 border-b-2 border-gradient-to-r from-emerald-400 to-teal-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section with Gradient */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent tracking-wide">
              TerraVerde
            </span>
          </div>
          
          {/* Navigation Items with Gradients */}
          <div className="flex space-x-2">
            {navItems.map(({ id, label, icon: Icon, gradient, hoverGradient }) => (
              <button
                key={id}
                onClick={() => setCurrentView(id)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  currentView === id
                    ? `bg-gradient-to-r ${gradient} text-white shadow-lg`
                    : `text-gray-600 hover:text-white bg-gradient-to-r ${gradient} hover:shadow-md opacity-70 hover:opacity-100`
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* User Status Indicator with Animation */}
          {isAuthenticated && (
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">Online</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;