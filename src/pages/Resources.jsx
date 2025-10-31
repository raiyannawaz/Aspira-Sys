import React, { useEffect, useRef } from 'react';
import TechCourses from '../components/sections/TechCourses';
import LearningSequence from '../components/sections/LearningSequence';

const Resources = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  return (
    <main>
      {/* Hero Section */}
      

      <TechCourses />
      <LearningSequence />
    </main>
  );
};

export default Resources;