import React, { useEffect, useRef, useState } from 'react';
import { Play, CheckCircle, Clock, BookOpen, Youtube, ExternalLink } from 'lucide-react';

const LearningSequence = () => {
  const sectionRef = useRef(null);
  const sequenceRef = useRef([]);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-fade-in-up');
            } else {
              entry.target.classList.add('animate-slide-in-left');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    sequenceRef.current.forEach((step, index) => {
      if (step) {
        setTimeout(() => observer.observe(step), index * 150);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleStepCompletion = (stepId) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const learningSequence = [
    {
      id: 1,
      title: 'Getting Started with AI Fundamentals',
      description: 'Understand the basics of artificial intelligence and machine learning concepts',
      type: 'Course',
      duration: '45 min',
      source: 'Udacity',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop&auto=format',
      url: 'https://www.udacity.com/course/ai-fundamentals--ud099',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Prompt Engineering Masterclass',
      description: 'Learn advanced techniques for crafting effective AI prompts',
      type: 'Course',
      duration: '2 hours',
      source: 'AspiraSys',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&auto=format',
      url: 'https://prompt-play.aspirasys.in/',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Building Your First AI Application',
      description: 'Hands-on tutorial to create a complete AI-powered web application',
      type: 'Course',
      duration: '3 hours',
      source: 'Coursera',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&auto=format',
      url: 'https://www.coursera.org/courses?query=artificial%20intelligence',
      difficulty: 'Advanced'
    },
    {
      id: 4,
      title: 'Cloud Architecture for AI Systems',
      description: 'Deploy and scale AI applications using cloud infrastructure',
      type: 'Course',
      duration: '1.5 hours',
      source: 'Great Learning',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop&auto=format',
      url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-computing-architecture',
      difficulty: 'Advanced'
    },
    {
      id: 5,
      title: 'AI Ethics and Best Practices',
      description: 'Understanding responsible AI development and ethical considerations',
      type: 'Course',
      duration: '1 hour',
      source: 'DataCamp',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&auto=format',
      url: 'https://www.datacamp.com/courses/ai-ethics',
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Portfolio Project: AI Chatbot',
      description: 'Complete capstone project to build and deploy your own AI chatbot',
      type: 'Course',
      duration: '5 hours',
      source: 'Udemy',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop&auto=format',
      url: 'https://www.udemy.com/topic/chatbots/?srsltid=AfmBOooF6r96wrP1COtkMk0Ua4PZ6SfJWOFWjeZxUyJ_X8otjN2R6lnS',
      difficulty: 'Advanced'
    }
  ];

  const getSourceIcon = (type) => {
    switch (type) {
      case 'YouTube':
        return <Youtube className="w-5 h-5 text-red-600" />;
      case 'Course':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'Tutorial':
        return <Play className="w-5 h-5 text-green-600" />;
      case 'Project':
        return <ExternalLink className="w-5 h-5 text-purple-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-gray-600" />;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4">
            Structured Learning Path
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our curated sequence of tutorials, courses, and projects to master AI and advanced technologies step by step
          </p>
        </div>

        {/* Learning Sequence */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-blue-200"></div>
            
            <div className="space-y-8">
              {learningSequence.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (sequenceRef.current[index] = el)}
                  className="relative opacity-0 -translate-x-8 transition-all duration-1000"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-6">
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        completedSteps.has(step.id) 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:scale-110'
                      }`}
                      onClick={() => toggleStepCompletion(step.id)}
                    >
                      {completedSteps.has(step.id) ? (
                        <CheckCircle className="w-8 h-8 text-white" />
                      ) : (
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      )}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="ml-24 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 group">
                    <div className="md:flex">
                      {/* Thumbnail */}
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img
                          src={step.thumbnail}
                          alt={`${step.title} thumbnail`}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback placeholder */}
                        <div className="hidden w-full h-48 md:h-full bg-gradient-to-br from-purple-100 to-blue-100 items-center justify-center">
                          <div className="text-center">
                            {getSourceIcon(step.type)}
                            <p className="text-sm text-gray-600 mt-2">
                              {step.type}
                            </p>
                          </div>
                        </div>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="w-12 h-12 text-white hover:scale-110 transition-transform duration-200" />
                        </div>

                        {/* Difficulty Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(step.difficulty)}`}>
                            {step.difficulty}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            {getSourceIcon(step.type)}
                            <span className="text-sm font-medium text-gray-500">{step.source}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{step.duration}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-title font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {step.description}
                        </p>

                        <div className="flex space-x-3">
                          <a 
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-button font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                          >
                            Start Learning
                          </a>
                          <button className="px-4 py-2 border-2 border-purple-200 text-purple-600 rounded-lg font-button font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300">
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSequence;