import React from 'react';
import { Shield, Database, Eye, Lock } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center space-x-4 text-blue-200">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Last updated: January 1, 2025</span>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-400 mr-3" />
                  Information We Collect
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Drift collects minimal data necessary to provide its services. The types of information we collect include:
                </p>
                <div className="bg-blue-900/30 rounded-xl p-6 mb-4 backdrop-blur-sm border border-blue-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Automatically Collected Data</h3>
                  <ul className="text-blue-100 space-y-2 ml-6 list-disc">
                    <li>Discord User IDs (for identification purposes)</li>
                    <li>Discord Server IDs (to provide server-specific features)</li>
                    <li>Command usage data (to improve Bot functionality)</li>
                    <li>Message content (only when necessary for command execution)</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">User-Provided Data</h3>
                  <ul className="text-blue-100 space-y-2 ml-6 list-disc">
                    <li>Configuration settings and preferences</li>
                    <li>Custom commands and responses</li>
                    <li>Any information you voluntarily provide through Bot interactions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-400 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="text-blue-100 space-y-2 ml-6 list-disc">
                  <li>Providing and maintaining Bot functionality</li>
                  <li>Improving and optimizing Bot performance</li>
                  <li>Personalizing user experience</li>
                  <li>Troubleshooting and debugging issues</li>
                  <li>Preventing abuse and maintaining security</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-blue-400 mr-3" />
                  Data Protection and Security
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your data:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-900/30 rounded-xl p-4 backdrop-blur-sm border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
                    <p className="text-blue-100 text-sm">Data is encrypted both in transit and at rest using industry-standard protocols.</p>
                  </div>
                  <div className="bg-blue-900/30 rounded-xl p-4 backdrop-blur-sm border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
                    <p className="text-blue-100 text-sm">Strict access controls ensure only authorized personnel can access user data.</p>
                  </div>
                  <div className="bg-blue-900/30 rounded-xl p-4 backdrop-blur-sm border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Regular Audits</h3>
                    <p className="text-blue-100 text-sm">We conduct regular security audits and updates to maintain data protection.</p>
                  </div>
                  <div className="bg-blue-900/30 rounded-xl p-4 backdrop-blur-sm border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Data Minimization</h3>
                    <p className="text-blue-100 text-sm">We collect only the minimum data necessary for Bot functionality.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">!</span>
                  Data Sharing and Disclosure
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share data in the following circumstances:
                </p>
                <ul className="text-blue-100 space-y-2 ml-6 list-disc">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">⚖</span>
                  Your Rights
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  You have the following rights regarding your data:
                </p>
                <ul className="text-blue-100 space-y-2 ml-6 list-disc">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to delete your data</li>
                  <li>Right to restrict data processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to data processing</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};