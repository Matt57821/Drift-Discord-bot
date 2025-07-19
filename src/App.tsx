import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { StarField } from './components/StarField';
import { Home } from './components/Home';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { LearnMore } from './components/LearnMore';
import { AddToDiscord } from './components/AddToDiscord';
import { Features } from './components/Features';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      <StarField />
      <Navigation />
      <div className="pt-16">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/add-to-discord" element={<AddToDiscord />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;