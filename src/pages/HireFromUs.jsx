import React, { useEffect, useRef } from 'react';
import ProfilesWeOffer from '../components/sections/ProfilesWeOffer';
import HowItWorks from '../components/sections/HowItWorks';
import CandidateSkills from '../components/sections/CandidateSkills';
import CompaniesSection from '../components/sections/CompaniesSection';

const HireFromUs = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  return (
    <main>
      {/* Hero Section */}
      {/* <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"> */}
        {/* <div className="container mx-auto px-4">
          <div ref={heroRef} className="text-center max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-1000">
            <h1 className="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
              Hire From Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed hover:text-blue-700 transition-colors duration-300">
              Find skilled developers and professionals ready to contribute to your organization from day one
            </p>
          </div>
        </div> */}
        
        {/* Animated Background Elements */}
        {/* <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-pink-200 rounded-full opacity-30 animate-float" style={{animationDelay: '0.5s'}}></div> */}
      {/* </section> */}

      <ProfilesWeOffer />
      <HowItWorks />
      <CandidateSkills />
      <CompaniesSection />
    </main>
  );
};

export default HireFromUs;