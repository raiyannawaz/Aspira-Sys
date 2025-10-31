import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import company logos
import AkrkLogo from '../../assets/Companies/Akrk.jpg';
import ColanLogo from '../../assets/Companies/Colan.png';
import FamysysLogo from '../../assets/Companies/famysys.png';
import IvyLogo from '../../assets/Companies/Ivy.png';
import FsmLogo from '../../assets/Companies/Fsm.png';
import NohitatuLogo from '../../assets/Companies/Nohitatu.png';

const CompaniesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const companies = [
    {
      name: 'Akrk Technologies Private Limited',
      image: AkrkLogo,
      description: 'Akrk Technologies Private Limited incorporated with MCA on 30 November 2018. The Akrk Technologies Private Limited is listed in the class of company and classified as Non Govt Company. This company is registered at Registrar of Companies(ROC).'
    },
    {
      name: 'Colan Info-tech',
      image: ColanLogo,
      description: 'As passionate professionals of technology, we offer the best of support and services within the agree time-frames and budgets. We bring intent will and soul into our operations as we charge forward to help customers scale new peaks, develop monetization avenues, and diversify their reach and impact.'
    },
    {
      name: 'Famysys',
      image: FamysysLogo,
      description: 'Famysys is a professional services for small businesses to large companies all over the world. Our streamlined development process enables us to deliver on time consistently. Famysys combines art and technology to deliver consistent branding and solid e-business solutions that span the Internet, print, broadcasting.'
    },
    {
      name: 'Ivy Mobility',
      image: IvyLogo,
      description: 'Ivy Mobility provides a cloud-based intelligent Route-to-Market (iRTM) solution for consumer goods companies. Some of the world\'s largest consumer goods companies manage their secondary sales and field force automation using our solutions to increase productivity, reduce out-of-stocks, and drive-up same-store sales.'
    },
    {
      name: 'FSM Global Technologies',
      image: FsmLogo,
      description: 'FSM Global Technologies is a subsidiary of Ducont Systems, a leading IT Products & Services provider based in the Middle East with over 20 years of experience in the design of Digital Transformation Solutions, Enterprise Mobility, IT Consulting, Business Process Consulting, Microsoft Solutions and Analytics catering to various verticals.'
    },
    {
      name: 'Nohitatu',
      image: NohitatuLogo,
      description: 'Nohitatu is custom offshore software Development Company located in Chennai (southern part of India) was established in the year 2003. From the beginning, the company was founded on the principle of providing simple and valuable solution for client we meet.'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === companies.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, companies.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === companies.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? companies.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4">
            Companies that have worked with us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We Connect the right talent & the right companies to make hiring happen
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            {/* Carousel Track */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {companies.map((company, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Company Image */}
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-64 h-48 bg-gray-100 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                          <img
                            src={company.image}
                            alt={company.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center">
                            <div className="text-center">
                              <div className="text-4xl mb-2">🏢</div>
                              <p className="text-sm text-gray-600 font-medium">
                                {company.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company Details */}
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-title font-bold text-gray-900">
                        {company.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {company.description}
                      </p>
                      <div className="pt-2">
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-6 rounded-lg font-button font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Company Count */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            {currentIndex + 1} of {companies.length} companies
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;