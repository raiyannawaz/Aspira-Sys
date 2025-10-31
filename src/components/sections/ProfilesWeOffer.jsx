import React, { useEffect, useRef } from 'react';

const ProfilesWeOffer = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe section header
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe cards with staggered animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 100);
      }
    });

    return () => observer.disconnect();
  }, []);

  const profiles = [
    {
      title: 'AI Engineering',
      description: 'AI techs',
      icon: '🤖',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'Computer Vision']
    },
    {
      title: 'Full Stack Developer',
      description: 'MERN, MEAN, ASP.net, Spring boot',
      icon: '💻',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Angular', 'ASP.NET', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Mobile App Developer',
      description: 'ReactNative, Flutter',
      icon: '📱',
      technologies: ['React Native', 'Flutter', 'Dart', 'Android', 'iOS', 'Firebase', 'Expo']
    },
    {
      title: 'Data Science',
      description: 'Advanced analytics and insights',
      icon: '📊',
      technologies: ['Python', 'R', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau', 'Power BI', 'SQL']
    },
    {
      title: 'UI/UX Designer',
      description: 'Figma, Canva and Adobe Photoshop',
      icon: '🎨',
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva', 'Sketch', 'InVision']
    },
    {
      title: 'Machine Learning',
      description: 'Advanced ML solutions',
      icon: '🧠',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'MLflow', 'Docker', 'AWS ML', 'Azure ML']
    }
  ];

  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4">
            Profiles We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our Aspirants are well trained in both technical and soft-skills polishing them to play an integral part of their future Organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-blue-300 group opacity-0 translate-y-8 hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300" role="img" aria-label={`${profile.title} icon`}>{profile.icon}</span>
                </div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-2">
                  {profile.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {profile.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wide">
                  Key Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {profile.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-4 rounded-lg font-button font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl text-sm group-hover:animate-pulse">
                  View Candidates
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesWeOffer;