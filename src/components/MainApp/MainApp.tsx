import React, { useState } from 'react';
import Navbar from './Navbar';
import Issues from '../Issues/Issues';
import Diary from '../Diary/Diary';
import Communities from '../Communities/Communities';
import CarbonFootprint from '../CarbonFootprint/CarbonFootprint';
import Profile from '../Profile/Profile';
import MapView from '../MapView/MapView';

interface MainAppProps {
  isAuthenticated: boolean;
}

/**
 * Main Application Component
 * Manages navigation between different sections of the platform
 */
const MainApp: React.FC<MainAppProps> = ({ isAuthenticated }) => {
  // Current active view state
  const [currentView, setCurrentView] = useState('issues');

  /**
   * Render the appropriate component based on current view
   */
  const renderView = () => {
    switch (currentView) {
      case 'issues':
        return <Issues />;
      case 'diary':
        return <Diary />;
      case 'communities':
        return <Communities />;
      case 'carbon':
        return <CarbonFootprint />;
      case 'profile':
        return <Profile />;
      case 'map':
        return <MapView />;
      default:
        return <Issues />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        isAuthenticated={isAuthenticated}
      />
      
      {/* Main Content Area */}
      <main className="pt-16">
        <div className="transition-all duration-300 ease-in-out">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default MainApp;