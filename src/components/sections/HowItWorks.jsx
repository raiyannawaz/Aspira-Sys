import React, { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-fade-in-up');
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-slide-in-right');
            } else {
              entry.target.classList.add('animate-slide-in-left');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    stepsRef.current.forEach((step, index) => {
      if (step) {
        setTimeout(() => observer.observe(step), index * 150);
      }
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Share your hiring requirements with us',
      description: 'Tell us about your project needs, team size, required skills, and timeline.',
      icon: '📋'
    },
    {
      number: 2,
      title: 'We share a curated lists of candidates as per your need',
      description: 'Receive carefully selected profiles that match your specific requirements.',
      icon: '👥'
    },
    {
      number: 3,
      title: 'Review Profiles and state the interview process',
      description: 'Evaluate candidate portfolios and define your interview methodology.',
      icon: '🔍'
    },
    {
      number: 4,
      title: 'Release offers and onboard candidates to your firm',
      description: 'Finalize hiring decisions and seamlessly integrate new team members.',
      icon: '🎯'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Smooth Hiring process with a proven track record
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-300 opacity-0 -translate-x-8 hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{step.icon}</span>
                    <h3 className="text-lg font-title font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  {/* <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - GIF/Image Placeholder */}
          <div ref={imageRef} className="lg:pl-8 opacity-0 translate-x-8 transition-all duration-1000">
            <div className="relative hover:scale-105 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 shadow-xl">
                {/* Teaching Tech Illustration */}
                <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format"
                    alt="Students learning technology in classroom"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-3" role="img" aria-label="Teaching technology illustration">👨‍🏫</div>
                      <h3 className="text-lg font-title font-bold text-gray-700 mb-1">
                        Teaching Tech
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Training Process
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-indigo-200 rounded-full opacity-50"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 -left-6 w-8 h-8 bg-yellow-200 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute bottom-12 -right-6 w-6 h-6 bg-green-200 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg font-button font-semibold text-base hover:from-blue-700 hover:to-indigo-700 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse hover:animate-none">
            Start Hiring Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;