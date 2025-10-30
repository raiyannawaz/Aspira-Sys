import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Target, 
  Users, 
  Star,
  Code,
  Settings,
  TrendingUp
} from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(5); // Default to open the last question as shown in image

  const faqs = [
    {
      question: "What is the AspiraSys approach to career success?",
      answer: "Our approach focuses on mastering one RIGHT skill, building real projects, and getting hired. We provide hands-on mentoring and real-world experience to make you job-ready.",
      icon: Target,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50"
    },
    {
      question: "How can I join AspiraSys Internship?",
      answer: "Contact us through our website or visit our center. We'll guide you through the application process and help you choose the right program based on your interests and career goals.",
      icon: Users,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50"
    },
    {
      question: "Are the programs really free?",
      answer: "Yes, AspiraSys operates as a Not-For-Profit Organization. Our programs are completely free and designed to give back to the community and create opportunities for IT aspirants.",
      icon: Star,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50"
    },
    {
      question: "Do I need prior coding experience?",
      answer: "No prior experience is required. We start from the fundamentals and build up your skills progressively. Our programs are designed for beginners who are passionate about learning.",
      icon: Code,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50"
    },
    {
      question: "What technologies and tools do you teach?",
      answer: "We teach modern web technologies including HTML, CSS, JavaScript, React, Node.js, databases, and AI tools. Our curriculum is updated regularly to match industry demands.",
      icon: Settings,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50"
    },
    {
      question: "What kind of companies hire your interns?",
      answer: "We have partnerships with various IT companies ranging from startups to established firms looking for trained entry-level developers with real project experience.",
      icon: TrendingUp,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50"
    }
  ];





  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="pt-20 bg-gray-50 scroll-mt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-title">FAQ</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 font-body">
            Common questions about our programs and approach
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${faq.iconBg} rounded-full flex items-center justify-center mr-4`}>
                    <faq.icon className={`w-5 h-5 ${faq.iconColor}`} />
                  </div>
                  <span className="font-semibold text-gray-900 font-title text-lg">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 ml-14">
                      <p className="text-gray-600 leading-relaxed font-body">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Closing Section */}
      <div className="w-full mt-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-16 text-center text-white"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center pt-8">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 font-title leading-tight">
              Together, we create opportunities, build careers, and shape a brighter future.
            </h4>
            <p className="mb-6 text-base md:text-lg max-w-3xl mx-auto font-body leading-relaxed opacity-95">
              Ready to start your transformation journey with AspiraSys?
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 hover:text-indigo-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl font-button text-sm"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;