import React, { useState, useEffect } from 'react';
import { Leaf, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setShowSubtext(true), 800);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    onEnterApp();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lime-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10">
        <div 
          className={`transition-all duration-1000 cursor-pointer group ${
            isAnimating ? 'transform scale-110' : 'transform scale-100'
          }`}
          onClick={handleClick}
        >
          <div className="flex items-center justify-center mb-6">
            <Leaf className={`text-green-400 transition-all duration-1000 ${
              isAnimating ? 'w-16 h-16 mr-4' : 'w-12 h-12 mr-2'
            }`} />
            <h1 className={`font-bold text-white transition-all duration-1000 ${
              isAnimating ? 'text-8xl' : 'text-6xl'
            }`}>
              EcoVoyage
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${
            showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-green-200 text-xl mb-8 max-w-2xl mx-auto">
              Connect with nature, share your journey, and make a difference for our planet
            </p>
            
            <div className="flex items-center justify-center text-green-300 group-hover:text-green-200 transition-colors">
              <span className="mr-2">Click to enter</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;