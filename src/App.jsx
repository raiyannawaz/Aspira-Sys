import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import OffersSection from './components/sections/OffersSection';
import AboutUsSection from './components/sections/AboutUsSection';
import InternshipPrograms from './components/sections/InternshipPrograms';
import ExploreEcosystem from './components/sections/ExploreEcosystem';
import FAQSection from './components/sections/FAQSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <OffersSection />
        <AboutUsSection />
        <InternshipPrograms />
        <ExploreEcosystem />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
