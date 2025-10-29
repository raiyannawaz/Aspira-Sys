import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Building2, Award, HandHeart, ArrowUp } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import SimpleParticles from '../ui/simple-particles';

const HeroSection = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const stats = [
    { icon: Award, label: 'Careers Launched', value: '100+', color: 'text-green-500' },
    { icon: Users, label: 'Current Ongoing Interns', value: '1000+', color: 'text-red-500' },
    { icon: Building2, label: 'Active Centers', value: '5', color: 'text-blue-500' },
    { icon: HandHeart, label: 'Strategic Collaborations', value: 'NGOs & Colleges', color: 'text-green-400' },
  ];

  // Animated text phrases
  const animatedPhrases = [
    "Transforming Lives",
    "Building Careers", 
    "Shaping Futures",
    "Creating Opportunities"
  ];

  const ctaButtons = [
    { text: 'Explore Internships', primary: true, icon: ArrowRight },
    { text: 'View Intern Projects', primary: false },
    { text: 'Watch Our Journey', primary: false, icon: Play },
    { text: 'Hire From Us', primary: true },
  ];

  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-100 overflow-hidden scroll-mt-8">
      
      {/* Particles Background Animation */}
      <div className="absolute inset-0 z-10">
        <SimpleParticles />
      </div>
      
      {/* Professional Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='modernBg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f1f5f9;stop-opacity:1' /%3E%3Cstop offset='30%25' style='stop-color:%23e2e8f0;stop-opacity:1' /%3E%3Cstop offset='70%25' style='stop-color:%23cbd5e1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e0e7ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='accentGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234f46e5;stop-opacity:0.1' /%3E%3Cstop offset='50%25' style='stop-color:%237c3aed;stop-opacity:0.05' /%3E%3Cstop offset='100%25' style='stop-color:%232563eb;stop-opacity:0.1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23modernBg)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23accentGrad)'/%3E%3Cg opacity='0.1'%3E%3Ccircle cx='200' cy='200' r='100' fill='none' stroke='%234f46e5' stroke-width='2'/%3E%3Ccircle cx='1600' cy='300' r='150' fill='none' stroke='%237c3aed' stroke-width='1.5'/%3E%3Ccircle cx='400' cy='800' r='80' fill='none' stroke='%232563eb' stroke-width='2'/%3E%3Ccircle cx='1400' cy='800' r='120' fill='none' stroke='%234f46e5' stroke-width='1'/%3E%3C/g%3E%3Cg opacity='0.08'%3E%3Cpath d='M0,300 C400,250 800,350 1200,300 C1400,275 1600,325 1920,300' stroke='%23475569' stroke-width='3' fill='none'/%3E%3Cpath d='M0,500 C300,450 600,550 900,500 C1200,450 1500,550 1920,500' stroke='%23475569' stroke-width='2' fill='none'/%3E%3Cpath d='M0,700 C500,650 1000,750 1500,700 C1700,675 1800,725 1920,700' stroke='%23475569' stroke-width='1.5' fill='none'/%3E%3C/g%3E%3Cg opacity='0.06'%3E%3Crect x='100' y='100' width='60' height='60' rx='8' fill='%234f46e5'/%3E%3Crect x='1700' y='150' width='80' height='40' rx='6' fill='%237c3aed'/%3E%3Crect x='300' y='900' width='50' height='70' rx='10' fill='%232563eb'/%3E%3Crect x='1500' y='900' width='70' height='50' rx='8' fill='%234f46e5'/%3E%3Crect x='800' y='50' width='40' height='90' rx='12' fill='%237c3aed'/%3E%3Crect x='1200' y='950' width='90' height='30' rx='6' fill='%232563eb'/%3E%3C/g%3E%3Cg opacity='0.04'%3E%3Ctext x='150' y='60' font-family='Arial,sans-serif' font-size='18' fill='%234f46e5' font-weight='300'%3ETECH%3C/text%3E%3Ctext x='1650' y='80' font-family='Arial,sans-serif' font-size='16' fill='%237c3aed' font-weight='300'%3EINNOVATION%3C/text%3E%3Ctext x='50' y='1050' font-family='Arial,sans-serif' font-size='14' fill='%232563eb' font-weight='300'%3ELEARNING%3C/text%3E%3Ctext x='1450' y='1060' font-family='Arial,sans-serif' font-size='20' fill='%234f46e5' font-weight='300'%3EFUTURE%3C/text%3E%3Ctext x='850' y='540' font-family='Arial,sans-serif' font-size='24' fill='%237c3aed' font-weight='300' opacity='0.3'%3EASPIRA%3C/text%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-slate-50/20 to-blue-50/30"></div>
        
        {/* Additional subtle tech pattern overlay */}
        <div 
          className="absolute inset-0 bg-repeat opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23475569' opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='0' cy='0' r='1'/%3E%3Ccircle cx='60' cy='0' r='1'/%3E%3Ccircle cx='0' cy='60' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3Ccircle cx='30' cy='0' r='0.5'/%3E%3Ccircle cx='0' cy='30' r='0.5'/%3E%3Ccircle cx='60' cy='30' r='0.5'/%3E%3Ccircle cx='30' cy='60' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          {/* Title */}

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-10 lg:text-left text-center"
            >
              <div className="space-y-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-spectral"
                >
                  <div className="mb-2">
                    Empowering IT Aspirants.
                  </div>
                  <AnimatedText 
                    phrases={animatedPhrases}
                    className="bg-gradient-to-r from-indigo-600 via-slate-600 to-blue-600 bg-clip-text text-transparent"
                    duration={2500}
                  />
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl lg:mx-0 mx-auto font-spectral"
                >
                  Join our mission to equip IT aspirants with AI-enhanced skills, 
                  real-world projects, and career-launching internships.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4 lg:justify-start justify-center"
              >
                {ctaButtons.map((button, index) => (
                  <motion.button
                    key={button.text}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (button.text === 'Explore Internships') {
                        scrollToSection('internship-programs');
                      } else if (button.text === 'View Intern Projects') {
                        scrollToSection('explore-ecosystem');
                      } else if (button.text === 'Hire From Us') {
                        scrollToSection('about-us');
                      }
                    }}
                    className={`
                      ${button.primary 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg' 
                        : 'border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600 text-gray-700 bg-white'
                      }
                      px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 cursor-pointer
                    `}
                  >
                    <span>{button.text}</span>
                    {button.icon && <button.icon className="w-4 h-4" />}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Professional Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Professional Image Container */}
                <div className="relative bg-white rounded-xl shadow-xl p-4 border border-gray-100 max-w-sm mx-auto">
                  {/* EdTech Professional Background */}
                  <div 
                    className="aspect-square rounded-lg flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='edtechBg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ddd6fe;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23e0e7ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f0f9ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23edtechBg)'/%3E%3Cg opacity='0.8'%3E%3Crect x='40' y='70' width='300' height='30' rx='8' fill='%234f46e5'/%3E%3Crect x='40' y='120' width='240' height='30' rx='8' fill='%237c3aed'/%3E%3Crect x='40' y='170' width='280' height='30' rx='8' fill='%232563eb'/%3E%3Crect x='40' y='220' width='200' height='30' rx='8' fill='%234338ca'/%3E%3C/g%3E%3Cg opacity='0.6'%3E%3Ccircle cx='350' cy='85' r='8' fill='%234f46e5'/%3E%3Ccircle cx='300' cy='135' r='6' fill='%237c3aed'/%3E%3Ccircle cx='330' cy='185' r='7' fill='%232563eb'/%3E%3Ccircle cx='260' cy='235' r='5' fill='%234338ca'/%3E%3C/g%3E%3Cg opacity='0.9' fill='%23ffffff'%3E%3Ctext x='60' y='90' font-family='Arial,sans-serif' font-size='14' font-weight='600'%3ELearning Management%3C/text%3E%3Ctext x='60' y='140' font-family='Arial,sans-serif' font-size='14' font-weight='600'%3ESkill Development%3C/text%3E%3Ctext x='60' y='190' font-family='Arial,sans-serif' font-size='14' font-weight='600'%3ECareer Guidance%3C/text%3E%3Ctext x='60' y='240' font-family='Arial,sans-serif' font-size='14' font-weight='600'%3EIndustry Connect%3C/text%3E%3C/g%3E%3Cg opacity='0.4'%3E%3Crect x='40' y='280' width='320' height='80' rx='12' fill='none' stroke='%234f46e5' stroke-width='3'/%3E%3Ctext x='200' y='325' font-family='Arial,sans-serif' font-size='18' fill='%234f46e5' font-weight='700' text-anchor='middle'%3EEdTech Excellence%3C/text%3E%3C/g%3E%3Cg opacity='0.3'%3E%3Cpath d='M60,320 L120,300 L180,320 L240,300 L300,320' stroke='%237c3aed' stroke-width='2' fill='none'/%3E%3Ccircle cx='80' cy='40' r='15' fill='none' stroke='%234f46e5' stroke-width='2'/%3E%3Ccircle cx='320' cy='40' r='15' fill='none' stroke='%237c3aed' stroke-width='2'/%3E%3Crect x='20' y='20' width='20' height='20' rx='4' fill='%232563eb'/%3E%3Crect x='360' y='20' width='20' height='20' rx='4' fill='%234338ca'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Content Overlay */}
                    {/* <div className="relative z-10 text-center space-y-3 bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-white/60 shadow-lg">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-md">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-gray-900">Professional Excellence</h3>
                        <p className="text-xs text-gray-600 font-medium">Building tomorrow's tech leaders</p>
                      </div>
                    </div> */}
                    
                    {/* Educational Elements Overlay */}
                    <div className="absolute inset-0 z-0">
                      {/* Floating education icons */}
                      <div className="absolute top-4 right-4 w-6 h-6 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                      </div>
                      <div className="absolute top-1/2 left-4 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="absolute top-1/2 right-4 w-5 h-5 bg-slate-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg border border-gray-100"
                  >
                    <Award className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 shadow-lg border border-gray-100"
                  >
                    <Users className="w-4 h-4 text-green-500" />
                  </motion.div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute inset-0 -z-10">
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    className={`absolute w-2 h-2 bg-slate-400/40 rounded-full`}
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${20 + (i % 3) * 25}%`
                    }}
                  />
                ))}

                {/* Wave-like background elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-0 right-0 w-96 h-96 opacity-20"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-transparent to-slate-200 rounded-full blur-3xl"></div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [0, -360],
                    scale: [0.9, 1.2, 0.9]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 5
                  }}
                  className="absolute bottom-0 left-0 w-80 h-80 opacity-15"
                >
                  <div className="w-full h-full bg-gradient-to-tr from-gray-200 via-transparent to-blue-200 rounded-full blur-3xl"></div>
                </motion.div>

                {/* Geometric shapes */}
                <motion.div
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -20, 0],
                    rotate: [0, 45, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/4 right-1/4 w-8 h-8 bg-slate-300/30 rotate-45"
                />

                <motion.div
                  animate={{
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-300/40 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg md:text-xl font-bold text-gray-900 font-spectral">{stat.value}</p>
                      <p className="text-xs text-gray-600 font-medium font-spectral">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0
        }}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: "rgb(51 65 85)" // slate-700
        }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
        style={{ display: showScrollToTop ? 'block' : 'none' }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default HeroSection;