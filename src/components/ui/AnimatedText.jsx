import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = ({ phrases, className = "", duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, duration);

    return () => clearInterval(interval);
  }, [phrases.length, duration]);

  return (
    <div className="relative inline-block overflow-hidden min-h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            y: 50, 
            opacity: 0
          }}
          animate={{ 
            y: 0, 
            opacity: 0.9
          }}
          exit={{ 
            y: -50, 
            opacity: 0
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut",
            opacity: { duration: 0.4 }
          }}
          className={`${className} inline-block`}
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;