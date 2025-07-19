import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Bot className="h-24 w-24 text-blue-400 animate-pulse" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Drift
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The ultimate Discord bot for your server. Enhance your community with powerful moderation, 
          entertainment, and more features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/add-to-discord"
            className="px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Add to Discord
          </Link>
          <Link
            to="/learn-more"
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};