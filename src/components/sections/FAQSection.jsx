import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Target, 
  Briefcase, 
  MapPin, 
  Users, 
  Code, 
  Brain, 
  Palette, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Star,
  Heart
} from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      title: "About AspiraSys Approach",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "What is the AspiraSys approach to career success?",
          answer: "Master one RIGHT skill. Build projects. Get hired. Grow. Our internships are focused on building job-ready IT professionals with hands-on mentoring."
        },
        {
          question: "Why is real-world experience important?",
          answer: "Without real project work, skills fade. Many aspirants delay or lose their career momentum due to lack of experience."
        },
        {
          question: "What's your advice for someone looking for an IT job?",
          answer: "\"Searching for a job without skill is like starting a car without a key.\""
        }
      ]
    },
    {
      title: "Career Journey",
      icon: MapPin,
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "What is your 6-step career journey?",
          answer: "1. Choose Skills → 2. Learn Fundamentals → 3. Master Advanced Concepts → 4. Build Real Projects → 5. Get First Job → 6. Grow with Experience"
        },
        {
          question: "What happens if someone skips steps or rushes the process?",
          answer: "Impatience and distraction can prevent interns from reaching job-readiness. The journey requires discipline, consistency, and focused learning."
        }
      ]
    },
    {
      title: "Getting Started",
      icon: Users,
      color: "from-purple-500 to-violet-500",
      faqs: [
        {
          question: "How can I join AspiraSys Internship?",
          answer: "Contact us through our website or visit our center. We'll guide you through the application process and help you choose the right program."
        },
        {
          question: "Are the programs really free?",
          answer: "Yes, AspiraSys operates as a Not-For-Profit Organization. Our programs are designed to give back to the community."
        },
        {
          question: "Do I need prior coding experience?",
          answer: "No prior experience is required. We start from the fundamentals and build up your skills progressively."
        },
        {
          question: "Do you provide remote learning options?",
          answer: "We focus on office-based, full-time programs to ensure maximum engagement and real-world professional experience."
        },
        {
          question: "What kind of companies hire your interns?",
          answer: "We have partnerships with various IT companies ranging from startups to established firms looking for trained entry-level developers."
        }
      ]
    }
  ];

  const offerings = [
    { icon: Target, text: "Personalized Skill Guidance based on each intern's strengths" },
    { icon: Code, text: "High-speed Internet, computers & air-conditioned learning spaces" },
    { icon: Users, text: "Technical mentorship by industry professionals" },
    { icon: Brain, text: "Soft-skill training: communication, email writing, interviews" },
    { icon: CheckCircle, text: "Valuable certifications upon completion of stacks and projects" },
    { icon: Briefcase, text: "Resume preparation, LinkedIn optimization, and referral guidance" },
    { icon: Star, text: "Hackathons and debugging challenges with prizes" },
    { icon: TrendingUp, text: "Live Projects with stipends: \"Earn while you Learn\"" },
    { icon: Heart, text: "MoUs with IT companies for hiring" },
    { icon: Users, text: "Collaborations with colleges and external training firms" }
  ];

  const skillStacks = [
    {
      category: "Core Tech",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: "Python, JavaScript, SQL, HTML/CSS, React, Node.js, Git, GitHub, APIs"
    },
    {
      category: "AI & Data",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      skills: "Prompt Engineering (ChatGPT, Gemini), ML Basics, Pandas, NumPy, Hugging Face"
    },
    {
      category: "No-Code & Creative Tools",
      icon: Palette,
      color: "from-pink-500 to-pink-600",
      skills: "Canva, Figma, Webflow, Synthesia, InVideo, RunwayML, Glide, Bubble"
    },
    {
      category: "Digital Marketing",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
      skills: "SEO, AI Content Writing, Google Analytics, Looker Studio, Funnels"
    }
  ];

  const outcomes = [
    { level: "No Skill", outcome: "No job opportunity — future becomes stagnant", color: "from-red-500 to-red-600", icon: AlertCircle },
    { level: "Mediocre Skill", outcome: "Get experience, but limited salary", color: "from-orange-500 to-orange-600", icon: AlertCircle },
    { level: "Basic Skill", outcome: "Entry-level IT role with basic contract", color: "from-yellow-500 to-yellow-600", icon: CheckCircle },
    { level: "Good Skill", outcome: "After 20–30 weeks of focus, unlock full-time roles in core tech", color: "from-green-500 to-green-600", icon: Star }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
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
            <HelpCircle className="w-8 h-8 text-slate-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 via-gray-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our programs, approach, and career development process.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-20">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center text-white">
                  <category.icon className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openFAQ === `${categoryIndex}-${faqIndex}` ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openFAQ === `${categoryIndex}-${faqIndex}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What AspiraSys Offers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What AspiraSys Offers</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <offering.icon className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm">{offering.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Stacks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skill Stacks Taught at AspiraSys</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center mr-3`}>
                    <stack.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{stack.category}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{stack.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Expected Outcomes Based on Skill Level</h3>
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.level}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${outcome.color} rounded-lg flex items-center justify-center mr-4`}>
                    <outcome.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{outcome.level}</h4>
                    <p className="text-gray-600">{outcome.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h4 className="text-2xl font-bold mb-4">Together, we create opportunities, build careers, and shape a brighter future.</h4>
          <p className="mb-6 opacity-90">
            Ready to start your transformation journey with AspiraSys?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-700 hover:text-slate-900 font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;