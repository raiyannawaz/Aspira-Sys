import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Globe, 
  Palette, 
  Bot, 
  Video, 
  Code, 
  Database, 
  BarChart3, 
  TrendingUp,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const InternshipPrograms = () => {
  const oneMonthPrograms = [
    {
      icon: Globe,
      title: "AI-Powered Web Creation & Portfolio Launchpad",
      description: "Build stunning websites, master AI tools, and launch your digital identity in just 30 days.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Palette,
      title: "Creative Tech Intern: Design & Media with AI",
      description: "Master Canva, create pro visuals, and explore AI video/image/music generation hands-on.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Bot,
      title: "Agentic AI Specialist Internship",
      description: "Learn how to automate workflows, build smart AI agents, and work with emerging agent frameworks.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Video,
      title: "AI-Driven YouTube Content Creator Internship",
      description: "Script, design, and publish short-form content using AI avatars, editors, and growth strategies.",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50"
    }
  ];

  const fourMonthPrograms = [
    {
      icon: Code,
      title: "Full Stack Developer Internship with AI Co-Pilots",
      description: "Master modern web stacks and build full-fledged apps using Copilot, Claude, and Cursor.",
      color: "from-slate-600 to-blue-600",
      bgColor: "from-slate-50 to-blue-50"
    },
    {
      icon: Database,
      title: "AI-Powered Data Science & Machine Learning Internship",
      description: "Go from Python beginner to ML project creator using real-world datasets and AI-assisted coding.",
      color: "from-indigo-500 to-purple-600",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      icon: BarChart3,
      title: "Business Analyst Internship: AI + UX + Strategy",
      description: "Learn analysis, automation, and research tools to become a well-rounded business thinker.",
      color: "from-teal-500 to-green-600",
      bgColor: "from-teal-50 to-green-50"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Growth Strategy Internship with AI",
      description: "Create full-funnel campaigns, automate tasks, and launch a job-ready portfolio using AI tools.",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  const ProgramCard = ({ program, duration, index, isLongTerm = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative bg-gradient-to-br ${program.bgColor} p-6 rounded-2xl shadow-lg border border-gray-100 group cursor-pointer`}
    >
      {/* AI Badge */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center space-x-1 bg-white/80 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
          <Sparkles className="w-3 h-3" />
          <span>AI-Powered</span>
        </div>
      </div>

      {/* Duration Badge */}
      <div className="absolute top-4 left-4">
        <div className={`flex items-center space-x-1 ${isLongTerm ? 'bg-purple-100' : 'bg-green-100'} px-2 py-1 rounded-full text-xs font-medium ${isLongTerm ? 'text-purple-700' : 'text-green-700'}`}>
          <Clock className="w-3 h-3" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Icon */}
      <div className="mt-8 mb-4">
        <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <program.icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          {program.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {program.description}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {isLongTerm ? 'Deep-Dive Program' : 'Intensive Track'}
        </span>
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center space-x-1 text-sm font-medium text-gray-700 group-hover:text-gray-900"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="programs" className="py-20 bg-gray-50">
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
            <GraduationCap className="w-8 h-8 text-slate-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Internship Programs</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 via-gray-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our intensive 1-month tracks or comprehensive 4-month deep-dive programs, 
            all enhanced with cutting-edge AI tools and real-world project experience.
          </p>
        </motion.div>

        {/* 1-Month Programs */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <Calendar className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">1-Month Intensive Tracks</h3>
            <div className="ml-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Quick Start
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {oneMonthPrograms.map((program, index) => (
              <ProgramCard
                key={program.title}
                program={program}
                duration="1 Month"
                index={index}
                isLongTerm={false}
              />
            ))}
          </div>
        </div>

        {/* 4-Month Programs */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <Calendar className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">4-Month Deep-Dive Internships</h3>
            <div className="ml-4 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              Comprehensive
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {fourMonthPrograms.map((program, index) => (
              <ProgramCard
                key={program.title}
                program={program}
                duration="4 Months"
                index={index}
                isLongTerm={true}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-gray-100"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of successful graduates who launched their careers through our 
            AI-enhanced internship programs. Choose your path and start building your future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              Apply for 1-Month Program
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-300 hover:border-slate-400 hover:text-slate-600 text-gray-700 bg-white font-medium px-8 py-3 rounded-full transition-all duration-300"
            >
              Explore 4-Month Programs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipPrograms;