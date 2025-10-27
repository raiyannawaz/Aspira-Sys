import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutUsSection from './components/sections/AboutUsSection';
import InternshipPrograms from './components/sections/InternshipPrograms';
import ExploreEcosystem from './components/sections/ExploreEcosystem';
import FAQSection from './components/sections/FAQSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <InternshipPrograms />
        <ExploreEcosystem />
        <FAQSection />
      </main>
    </div>
  );
}

export default App;
