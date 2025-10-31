import React, { useEffect, useRef } from 'react';
import { PlayCircle, Clock, Users, Star, BookOpen, Code, Brain } from 'lucide-react';

const TechCourses = () => {
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
        }, index * 200);
      }
    });

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 1,
      title: 'AI Prompting Mastery',
      description: 'Master the art of AI prompt engineering with ChatGPT, Claude, and other AI models. Learn advanced techniques for optimal results.',
      icon: <Brain className="w-8 h-8" />,
      duration: '8 weeks',
      students: '2,500+',
      rating: 4.9,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&auto=format',
      tags: ['AI', 'Prompt Engineering', 'ChatGPT', 'Machine Learning'],
      courseUrl: 'https://prompt-play.aspirasys.in/',
      instructor: 'Dr. Sarah Chen'
    },
    {
      id: 2,
      title: 'Advanced Cloud Architecture',
      description: 'Deep dive into AWS, Azure, and GCP. Build scalable, resilient cloud infrastructure and master DevOps practices.',
      icon: <Code className="w-8 h-8" />,
      duration: '12 weeks',
      students: '1,800+',
      rating: 4.8,
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format',
      tags: ['AWS', 'Azure', 'DevOps', 'Kubernetes'],
      courseUrl: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-computing-architecture',
      instructor: 'Mike Johnson'
    },
    {
      id: 3,
      title: 'Full-Stack AI Development',
      description: 'Build complete AI-powered applications using React, Node.js, Python, and integrate with OpenAI APIs and vector databases.',
      icon: <BookOpen className="w-8 h-8" />,
      duration: '16 weeks',
      students: '3,200+',
      rating: 4.9,
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format',
      tags: ['React', 'Node.js', 'Python', 'OpenAI', 'Vector DB'],
      courseUrl: 'https://www.codingninjas.com/job-bootcamp-web-development?utm_source=google&utm_medium=%5Bsearch%5D&utm_campaign=19312337481_144235769683_p_coding%20ninjas%20bootcamp__749711541749_c____9061946&gad_source=1&gad_campaignid=19312337481&gbraid=0AAAAADKwKV14vEr07kD7EV0pS5xoqILQP&gclid=Cj0KCQjwmYzIBhC6ARIsAHA3IkStPYW9YgCJw4ozcWL0NcbIsGloKStsR7EbpHBIwUUv3EDBbynP3fwaAqK3EALw_wcB',
      instructor: 'Alex Rodriguez'
    }
  ];

  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4">
            Advanced Tech Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Level up your skills with our expert-designed courses covering the latest in AI, cloud computing, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={course.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 group opacity-0 translate-y-8 hover:-translate-y-2 hover:scale-105"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={`${course.title} course`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 items-center justify-center">
                  <div className="text-center">
                    <div className="text-purple-600 mb-2">{course.icon}</div>
                    <p className="text-sm text-gray-600 font-medium">
                      {course.title}
                    </p>
                  </div>
                </div>
                
                {/* Course Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {course.level}
                  </span>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-16 h-16 text-white hover:scale-110 transition-transform duration-200" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="flex items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-title font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-500">by {course.instructor}</p>
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Course Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-100 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={course.courseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-button font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl text-center"
                  >
                    Access Course
                  </a>
                  <button className="px-4 py-3 border-2 border-purple-200 text-purple-600 rounded-lg font-button font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCourses;