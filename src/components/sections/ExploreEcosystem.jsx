import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  FolderOpen, 
  Play, 
  BookOpen, 
  Users, 
  ExternalLink,
  ArrowRight,
  Code,
  Video,
  FileText,
  Briefcase
} from 'lucide-react';

const ExploreEcosystem = () => {
  const ecosystemItems = [
    {
      icon: FolderOpen,
      title: "Intern Projects",
      description: "Showcase of real-world solutions built during internships",
      buttonText: "View Projects",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600",
      secondaryIcon: Code
    },
    {
      icon: Play,
      title: "Videos & Tutorials",
      description: "YouTube library of training moments and success stories",
      buttonText: "Watch Now",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      hoverColor: "hover:from-red-600 hover:to-pink-600",
      secondaryIcon: Video
    },
    {
      icon: BookOpen,
      title: "Our Blog",
      description: "Insights, success stories, tips and guides for IT career growth",
      buttonText: "Read Blog",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      hoverColor: "hover:from-green-600 hover:to-emerald-600",
      secondaryIcon: FileText
    },
    {
      icon: Users,
      title: "Hire From Us",
      description: "Partner with us to recruit trained and experienced entry-level developers",
      buttonText: "Hire Now",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      hoverColor: "hover:from-purple-600 hover:to-violet-600",
      secondaryIcon: Briefcase
    }
  ];

  const EcosystemCard = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className={`relative bg-gradient-to-br ${item.bgColor} p-8 rounded-2xl shadow-lg border border-gray-100 group cursor-pointer overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-10">
        <item.secondaryIcon className="w-32 h-32 text-gray-400 transform rotate-12" />
      </div>

      {/* Main Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
          <item.icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
        >
          <span>{item.buttonText}</span>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </motion.div>
  );

  return (
    <section id="ecosystem" className="py-20 bg-white scroll-mt-8">
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
            <Rocket className="w-8 h-8 text-slate-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Our Ecosystem</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 via-gray-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive resources, projects, and opportunities that make AspiraSys 
            more than just an internship program — it's a complete career development ecosystem.
          </p>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {ecosystemItems.map((item, index) => (
            <EcosystemCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Impact in Numbers</h3>
            <p className="text-gray-600">Real results from our comprehensive ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: FolderOpen },
              { number: "50+", label: "Tutorial Videos", icon: Play },
              { number: "100+", label: "Blog Articles", icon: BookOpen },
              { number: "200+", label: "Successful Hires", icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-slate-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
      
      {/* Full Width Fixed Background Call to Action */}
      <div className="relative mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-fixed bg-cover bg-center bg-no-repeat min-h-[350px] flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-spectral">Ready to Join Our Ecosystem?</h4>
            <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto font-spectral leading-relaxed">
              Become part of a thriving community where learning never stops, opportunities abound, 
              and your career growth is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-800 hover:text-slate-900 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl font-spectral text-lg"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/80 hover:border-white text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 font-spectral text-lg backdrop-blur-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreEcosystem;