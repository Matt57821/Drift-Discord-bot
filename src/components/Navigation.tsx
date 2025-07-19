import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, FileText, Shield, Zap } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <Link 
            to="/home"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <Bot className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Drift</span>
          </Link>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              to="/features"
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                location.pathname === '/features'
                  ? 'bg-blue-600/80 text-white backdrop-blur-sm'
                  : 'text-blue-200 hover:bg-blue-600/40 hover:text-white'
              }`}
            >
              <Zap className="h-4 w-4" />
              <span>Features</span>
            </Link>
            
            <Link
              to="/terms-of-service"
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                location.pathname === '/terms-of-service'
                  ? 'bg-blue-600/80 text-white backdrop-blur-sm'
                  : 'text-blue-200 hover:bg-blue-600/40 hover:text-white'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Terms of Service</span>
              <span className="sm:hidden">Terms</span>
            </Link>
            
            <Link
              to="/privacy-policy"
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                location.pathname === '/privacy-policy'
                  ? 'bg-blue-600/80 text-white backdrop-blur-sm'
                  : 'text-blue-200 hover:bg-blue-600/40 hover:text-white'
              }`}
            >
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Privacy Policy</span>
              <span className="sm:hidden">Privacy</span>
            </Link>
            
            <Link
              to="/add-to-discord"
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <Bot className="h-4 w-4" />
              <span className="hidden sm:inline">Add to Discord</span>
              <span className="sm:hidden">Add Bot</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};