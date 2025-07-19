import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Shield, CheckCircle, ExternalLink, ArrowLeft } from 'lucide-react';

export const AddToDiscord: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleAddToDiscord = () => {
    // Redirect to Discord OAuth URL
    window.open(
      'https://discord.com/oauth2/authorize?client_id=1395040836315516989&permissions=8&integration_type=0&scope=bot',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/80 rounded-3xl border border-blue-500/30 p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Bot className="h-16 w-16 text-blue-400 animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Add Drift to Discord
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to enhance your Discord server? Add Drift and unlock powerful moderation, entertainment, and more features.
            </p>
          </div>

          <div className="space-y-8">
            {/* Permissions Overview */}
            <div className="bg-blue-900/40 rounded-2xl p-6 border border-blue-500/20">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                Permissions Required
              </h2>
              <p className="text-blue-100 mb-4">
                Drift requires Administrator permissions to function properly and provide all features:
              </p>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-orange-500/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Administrator</h3>
                      <p className="text-orange-100 text-sm">Full server management permissions</p>
                    </div>
                  </div>
                  <p className="text-orange-100 text-sm mt-4 leading-relaxed">
                    Administrator permission allows Zyrnox to access all necessary features for moderation, 
                    server management, and providing the best possible experience for your Discord server.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/70 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">Moderation</h3>
                </div>
                <p className="text-blue-100 text-sm">
                  Advanced moderation tools to keep your server safe and organized.
                </p>
              </div>
              <div className="bg-slate-800/70 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-3">
                  <Bot className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">Entertainment</h3>
                </div>
                <p className="text-blue-100 text-sm">
                  Fun games and interactive features to engage your community.
                </p>
              </div>
              <div className="bg-slate-800/70 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">Utilities</h3>
                </div>
                <p className="text-blue-100 text-sm">
                  Helpful tools and automation to streamline server management.
                </p>
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="bg-blue-900/40 rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-start space-x-4">
                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    id="confirm-add"
                    checked={isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                    className="sr-only"
                  />
                  <label
                    htmlFor="confirm-add"
                    className={`
                      relative flex items-center justify-center w-6 h-6 rounded-lg cursor-pointer transition-all duration-200
                      ${isConfirmed 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg border-2 border-blue-400' 
                        : 'bg-slate-700/70 border-2 border-blue-500/50 hover:border-blue-400'
                      }
                    `}
                  >
                    <CheckCircle 
                      className={`
                        w-4 h-4 text-white transition-all duration-200 transform
                        ${isConfirmed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                      `}
                    />
                  </label>
                </div>
                <label htmlFor="confirm-add" className="text-blue-100 leading-relaxed cursor-pointer">
                  I understand that Drift will be added to my Discord server with the permissions listed above. 
                  I have read and agree to the{' '}
                  <Link to="/terms-of-service" className="text-blue-400 hover:text-blue-300 underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleAddToDiscord}
                disabled={!isConfirmed}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isConfirmed
                    ? 'bg-[#5865F2] hover:bg-[#4752C4] text-white hover:scale-105 shadow-lg'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ExternalLink className="h-5 w-5" />
                <span>Add Drift to Discord</span>
              </button>
              <Link
                to="/home"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Security Notice */}
            <div className="text-center">
              <p className="text-sm text-blue-200">
                🔒 Your data is secure. Drift only collects minimal data necessary for functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};