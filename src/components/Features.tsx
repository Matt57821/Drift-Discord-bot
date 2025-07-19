import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Shield, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bot className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Drift Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover all the powerful features that make Drift the ultimate Discord bot for your server.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Welcome Messages */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8 shadow-2xl hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Welcome Messages</h2>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Greet new members with customizable welcome messages that make them feel at home in your server.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Custom welcome messages</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Personalized greetings</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Channel-specific messages</span>
              </div>
            </div>
          </div>

          {/* Rules System */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8 shadow-2xl hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Rules Command</h2>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Let users easily access server rules with a simple command that displays all rules clearly.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">On-demand rules display</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Easy /rules command</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Formatted rule display</span>
              </div>
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Add Drift to your Discord server and start using these powerful features today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/add-to-discord"
                className="inline-flex items-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Bot className="h-5 w-5 mr-2" />
                Add to Discord
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/learn-more"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};