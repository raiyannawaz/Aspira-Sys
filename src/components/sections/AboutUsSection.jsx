import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Heart, Users, Rocket, Zap, Trophy, Award } from 'lucide-react';

const AboutUsSection = () => {
  const features = [
    {
      icon: Rocket,
      title: "AI-Enhanced Learning",
      description: "Leverage cutting-edge AI tools for accelerated skill development",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Expert Mentoring",
      description: "One-on-one guidance from industry professionals",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Real Projects",
      description: "Build portfolio-worthy projects for actual clients",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certificates valued by top tech companies",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Fast-Track Career",
      description: "From beginner to job-ready in months, not years",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "100% Free",
      description: "Not-for-profit model, giving back to the community",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-slate-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 via-gray-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content - Company Information (3 rows) */}
          <div className="grid grid-rows-3 gap-4 h-full">
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between h-full min-h-[180px]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Who We Are</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-spectral text-sm">
                AspiraSys is a Not-For-Profit Organization dedicated to empowering IT 
                aspirants with job-ready skills. We combine industry expertise with 
                innovative AI-enhanced learning to create a transformative educational 
                experience.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between h-full min-h-[180px]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-spectral text-sm">
                To be the leading platform that transforms IT aspirants into industry-ready 
                professionals, bridging the gap between academic knowledge and real-world application.
              </p>
            </motion.div>

            {/* Our Motivation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between h-full min-h-[180px]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Motivation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-spectral text-sm">
                We believe everyone deserves access to quality tech education. Our 
                not-for-profit model ensures that financial barriers never stand 
                between talent and opportunity.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Features Grid (2x3) */}
          <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full min-h-[180px]"
              >
                <div>
                  <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 font-spectral">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-spectral">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutUsSection;