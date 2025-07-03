import React, { useState } from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Posts from './Posts';
import Communities from './Communities';
import CarbonFootprint from './CarbonFootprint';
import Profile from './Profile';
import MapView from './MapView';

const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'posts':
        return <Posts />;
      case 'communities':
        return <Communities />;
      case 'carbon':
        return <CarbonFootprint />;
      case 'profile':
        return <Profile />;
      case 'map':
        return <MapView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="pt-16">
        {renderView()}
      </main>
    </div>
  );
};

export default MainApp;