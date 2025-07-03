import React, { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import MainApp from './components/MainApp/MainApp';

/**
 * Main App Component
 * Manages the overall application state and routing between landing page and main app
 */
function App() {
  // State to control whether to show landing page or main application
  const [showMainApp, setShowMainApp] = useState(false);
  // State to track if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Handler for entering the main application
   * Called when user clicks on TerraVerde logo or completes authentication
   */
  const handleEnterApp = () => {
    setShowMainApp(true);
  };

  /**
   * Handler for successful authentication
   * Sets user as authenticated and enters main app
   */
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowMainApp(true);
  };

  return (
    <div className="min-h-screen">
      {!showMainApp ? (
        <LandingPage 
          onEnterApp={handleEnterApp} 
          onAuthSuccess={handleAuthSuccess}
        />
      ) : (
        <MainApp isAuthenticated={isAuthenticated} />
      )}
    </div>
  );
}

export default App;