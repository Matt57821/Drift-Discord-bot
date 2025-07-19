import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Bot, Users, Zap, Lock } from 'lucide-react';

export const LearnMore: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bot className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Learn More About Drift
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover everything you need to know about our Discord bot, including features, policies, and how we protect your data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Bot Features</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Moderation Tools</h3>
                  <p className="text-blue-100 text-sm">Advanced moderation commands to keep your server safe and organized.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Entertainment</h3>
                  <p className="text-blue-100 text-sm">Fun games and interactive features to engage your community.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Good Functions</h3>
                  <p className="text-blue-100 text-sm">Helpful tools and automation to streamline server management.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Custom Commands</h3>
                  <p className="text-blue-100 text-sm">Create personalized commands tailored to your server's needs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Privacy & Security</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Data Protection</h3>
                  <p className="text-blue-100 text-sm">We collect minimal data and protect it with industry-standard encryption.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">No Data Selling</h3>
                  <p className="text-blue-100 text-sm">We never sell or share your personal information with third parties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Transparent Policies</h3>
                  <p className="text-blue-100 text-sm">Clear terms of service and privacy policy that are easy to understand.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">User Rights</h3>
                  <p className="text-blue-100 text-sm">Full control over your data with options to access, modify, or delete.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/terms-of-service"
            className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-6 shadow-xl hover:bg-slate-900/80 transition-all duration-200 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors" />
              <h3 className="text-xl font-bold text-white">Terms of Service</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Read our comprehensive terms of service to understand your rights and responsibilities when using Zyrnox.
            </p>
            <div className="mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">
              Read Terms →
            </div>
          </Link>

          <Link
            to="/privacy-policy"
            className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-6 shadow-xl hover:bg-slate-900/80 transition-all duration-200 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors" />
              <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Learn how we collect, use, and protect your data. Your privacy is our top priority.
            </p>
            <div className="mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">
              Read Policy →
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/home"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Bot className="h-5 w-5 mr-2" />
            Get Started with Drift
          </Link>
        </div>
      </div>
    </div>
  );
};