import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import AuthModal from './AuthModal';

interface LandingPageProps {
  onEnterApp: () => void;
  onAuthSuccess: () => void;
}

/**
 * Landing Page Component
 * Features animated TerraVerde logo with green nature background and authentication options
 */
const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp, onAuthSuccess }) => {
  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  /**
   * Initialize animations on component mount
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setShowSubtext(true), 1000);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  /**
   * Handle logo click to enter app
   */
  const handleLogoClick = () => {
    onEnterApp();
  };

  /**
   * Handle authentication modal opening
   */
  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Green Nature Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        {/* Semi-transparent green overlay for better text readability */}
        <div className="absolute inset-0 bg-green-900/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Authentication Buttons */}
      <div className="absolute top-6 right-6 z-20 flex space-x-4">
        <button
          onClick={() => handleAuthClick('signin')}
          className="px-6 py-2 bg-white/90 backdrop-blur-sm text-green-800 rounded-full font-medium hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Sign In
        </button>
        <button
          onClick={() => handleAuthClick('signup')}
          className="px-6 py-2 bg-emerald-600/90 backdrop-blur-sm text-white rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Sign Up
        </button>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lime-400/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-teal-400/40 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div 
            className={`transition-all duration-1500 cursor-pointer group ${
              isAnimating ? 'transform scale-110' : 'transform scale-100'
            }`}
            onClick={handleLogoClick}
          >
            {/* Logo and Title - No Leaf Symbol */}
            <div className="flex items-center justify-center mb-8">
              <h1 className={`font-bold text-white transition-all duration-1500 tracking-wide ${
                isAnimating ? 'text-9xl' : 'text-7xl'
              }`}>
                TerraVerde
              </h1>
            </div>
            
            {/* Subtitle and Call to Action */}
            <div className={`transition-all duration-1000 delay-700 ${
              showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <p className="text-green-100 text-2xl mb-10 max-w-3xl mx-auto font-medium">
                Connect with nature enthusiasts, share your green journey, and make a positive impact on our planet
              </p>
              
              <div className="flex items-center justify-center text-green-200 group-hover:text-green-100 transition-colors text-lg">
                <span className="mr-3 font-medium">Click to explore</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSuccess={onAuthSuccess}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      )}
    </div>
  );
};

export default LandingPage;