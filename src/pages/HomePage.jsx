import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import OffersSection from '../components/sections/OffersSection';
import AboutUsSection from '../components/sections/AboutUsSection';
import InternshipPrograms from '../components/sections/InternshipPrograms';
import ExploreEcosystem from '../components/sections/ExploreEcosystem';
import FAQSection from '../components/sections/FAQSection';

const HomePage = () => (
  <main>
    <HeroSection />
    <OffersSection />
    <AboutUsSection />
    <InternshipPrograms />
    <ExploreEcosystem />
    <FAQSection />
  </main>
);

export default HomePage;