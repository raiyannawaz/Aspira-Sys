import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Heart, Users, Building2, Trophy } from 'lucide-react';

const AboutUsSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "AI-Enabled Learning",
      description: "Modern skill development with cutting-edge AI integration"
    },
    {
      icon: Building2,
      title: "Office-Based Programs",
      description: "Full-time, professional environment for career growth"
    },
    {
      icon: Users,
      title: "Real-World Projects",
      description: "Hands-on experience with industry-relevant challenges"
    },
    {
      icon: Trophy,
      title: "Career-Focused",
      description: "Programs designed for successful career launches"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Who We Are */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Users className="w-6 h-6 text-slate-600 mr-3" />
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AspiraSys offers IT Internship Programs focused on AI-enabled skill development. 
                As a Not-For-Profit Organization founded in <span className="font-semibold text-slate-700">October 2021</span>, 
                we are dedicated to giving back to the community by helping IT aspirants upskill 
                and unlock earning opportunities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We operate as a full-time, office-based internship center providing career-focused 
                programs that emphasize real-world project execution, self-learning, and professional growth.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                Our Vision
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed font-medium">
                  Creating an ecosystem that empowers IT aspirants for successful career 
                  launches and long-term growth.
                </p>
              </div>
            </div>

            {/* Our Motivation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                Our Motivation
              </h3>
              <div className="bg-gradient-to-r from-red-50 to-slate-50 p-6 rounded-xl border-l-4 border-red-500">
                <p className="text-gray-700 leading-relaxed font-medium mb-3">
                  Career success starts by building high-demand, job-ready skills — not just earning a degree.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  We aim to bridge the gap between raw potential and real opportunity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">What Makes Us Different</h4>
              
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-slate-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-2">{feature.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="text-2xl font-bold text-slate-700 mb-2">2021</div>
                <div className="text-sm text-gray-600">Founded</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">NPO</div>
                <div className="text-sm text-gray-600">Not-For-Profit</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-gray-100"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join AspiraSys and be part of a community that's dedicated to your professional growth 
            and career success through real-world experience and cutting-edge skill development.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
          >
            Learn More About Our Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;