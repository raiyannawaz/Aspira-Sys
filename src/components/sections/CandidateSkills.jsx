import React, { useEffect, useRef } from 'react';

const CandidateSkills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-fade-in-up');
            } else if (entry.target === ctaRef.current) {
              entry.target.classList.add('animate-scale-in');
            } else {
              // Determine if it's odd or even for alternating animations
              const index = skillsRef.current.indexOf(entry.target);
              if (index % 2 === 0) {
                entry.target.classList.add('animate-slide-in-left');
              } else {
                entry.target.classList.add('animate-slide-in-right');
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        setTimeout(() => observer.observe(skill), index * 200);
      }
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      title: 'Inhouse training, self learning and technical skills',
      description: 'Comprehensive training programs combined with self-directed learning to master cutting-edge technologies and frameworks.',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop&auto=format'
    },
    {
      title: 'Project Experience',
      description: 'Hands-on experience through real-world projects that simulate industry challenges and best practices.',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop&auto=format'
    },
    {
      title: 'Problem Solving & Soft Skills',
      description: 'Critical thinking abilities paired with communication, teamwork, and leadership skills essential for professional success.',
      icon: '🧩',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=300&fit=crop&auto=format'
    },
    {
      title: 'Personal Attributes',
      description: 'Strong work ethic, adaptability, creativity, and professional demeanor that align with organizational values.',
      icon: '⭐',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format'
    },
    {
      title: 'Working of Software Development Life Cycle',
      description: 'Deep understanding of SDLC phases, agile methodologies, and project management principles.',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&auto=format'
    },
    {
      title: 'Aptitude & Reasoning',
      description: 'Logical reasoning, analytical thinking, and quantitative skills essential for technical problem-solving.',
      icon: '🧠',
      image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=300&h=300&fit=crop&auto=format'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4">
            Our Candidates equipped with
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            industries leading tools and skills
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {skills.map((skill, index) => {
            const isOdd = index % 2 === 0; // 0-indexed, so 0,2,4 are "odd" positions (1st, 3rd, 5th)
            
            return (
              <div
                key={index}
                ref={(el) => (skillsRef.current[index] = el)}
                className={`flex flex-col lg:flex-row items-center gap-8 opacity-0 transition-all duration-1000 hover:scale-105 ${
                  !isOdd ? 'lg:flex-row-reverse translate-x-8' : '-translate-x-8'
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-xl">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <span className="text-3xl hover:scale-125 hover:rotate-12 transition-all duration-300">{skill.icon}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-title font-bold text-gray-900 leading-tight">
                    {skill.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="pt-2">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-6 rounded-lg font-button font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl text-sm">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-sm">
                  <div className={`relative ${isOdd ? 'lg:ml-6' : 'lg:mr-6'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="aspect-square bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img
                          src={skill.image}
                          alt={`${skill.title} - EdTech illustration`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback placeholder */}
                        <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2" role="img" aria-label={`${skill.title} skill illustration`}>{skill.icon}</div>
                            <div className="text-xs text-gray-500 font-medium">
                              Skill #{index + 1}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className={`absolute -top-3 ${isOdd ? '-right-3' : '-left-3'} w-8 h-8 bg-blue-200 rounded-full opacity-50`}></div>
                      <div className={`absolute -bottom-3 ${isOdd ? '-left-3' : '-right-3'} w-6 h-6 bg-indigo-200 rounded-full opacity-50`}></div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className={`absolute top-12 ${isOdd ? '-left-4' : '-right-4'} w-6 h-6 bg-yellow-200 rounded-full opacity-70 animate-bounce`}></div>
                    <div className={`absolute bottom-12 ${isOdd ? '-right-4' : '-left-4'} w-4 h-4 bg-green-200 rounded-full opacity-70 animate-bounce`} style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-16 opacity-0 scale-90 transition-all duration-1000">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-title font-bold text-gray-900 mb-4">
              Ready to hire exceptional talent?
            </h3>
            <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
              Connect with our trained professionals who are ready to contribute to your organization's success from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-button font-semibold text-base hover:from-blue-700 hover:to-indigo-700 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Start Hiring
              </button>
              <button className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-button font-semibold text-base hover:bg-blue-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSkills;