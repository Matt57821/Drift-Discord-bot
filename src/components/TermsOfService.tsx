import React from 'react';
import { Calendar, User, Gavel } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Gavel className="h-12 w-12 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <div className="flex items-center justify-center space-x-4 text-blue-200">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 1, 2025</span>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">1</span>
                  Acceptance of Terms
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  By using Drift ("the Bot"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Bot. These terms may be updated from time to time, and your continued use of the Bot constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">2</span>
                  Description of Service
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Drift is a Discord bot that provides various features and functionalities to enhance your Discord server experience. The Bot may include but is not limited to:
                </p>
                <ul className="text-blue-100 space-y-2 ml-6 list-disc">
                  <li>Moderation tools and commands</li>
                  <li>Entertainment features and games</li>
                  <li>Good functions and automation</li>
                  <li>Server management capabilities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">3</span>
                  User Responsibilities
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  As a user of Drift, you agree to:
                </p>
                <ul className="text-blue-100 space-y-2 ml-6 list-disc">
                  <li>Use the Bot in compliance with Discord's Terms of Service</li>
                  <li>Not use the Bot for any illegal or harmful activities</li>
                  <li>Not attempt to exploit, hack, or disrupt the Bot's functionality</li>
                  <li>Respect other users and maintain a positive community environment</li>
                  <li>Not spam or abuse the Bot's commands</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">4</span>
                  Data Collection and Privacy
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Drift may collect and store certain data to provide its services. This includes Discord user IDs, server IDs, and message content when necessary for command execution. For detailed information about data collection and usage, please refer to our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">5</span>
                  Limitation of Liability
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Drift is provided "as is" without any warranties. We are not liable for any damages or losses resulting from the use of the Bot. This includes but is not limited to server disruptions, data loss, or any other issues that may arise from the Bot's operation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">6</span>
                  Service Availability
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  We strive to maintain high availability of Drift, but we cannot guarantee 100% uptime. The Bot may be temporarily unavailable due to maintenance, updates, or technical issues. We are not responsible for any inconvenience caused by service interruptions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600/60 rounded-full flex items-center justify-center text-sm font-bold mr-3 backdrop-blur-sm">7</span>
                  Termination
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  We reserve the right to terminate or suspend access to Drift at any time, without prior notice, for any reason including violation of these Terms of Service. Upon termination, your right to use the Bot ceases immediately.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};