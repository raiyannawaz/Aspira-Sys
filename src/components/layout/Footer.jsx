import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram 
} from 'lucide-react';

const Footer = () => {
  const programsLinks = [
    'Internship Program',
    'Training Program', 
    'Certification',
    'Workshops'
  ];

  const companyLinks = [
    'About Us',
    'Our Mission',
    'Success Stories',
    'Blog'
  ];

  const supportLinks = [
    'FAQ',
    'Contact',
    'Hire From Us',
    'Careers'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Column - Brand and Contact */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4 font-spectral">
                AspiraSys
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed font-spectral">
                Transforming IT aspirants into job-ready professionals through hands-on mentoring and real-world experience.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="font-spectral">contact@aspirasys.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="font-spectral">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="font-spectral">123 Tech Street, Innovation City</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 font-spectral">Programs</h4>
              <ul className="space-y-2">
                {programsLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-spectral"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 font-spectral">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-spectral"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 font-spectral">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-spectral"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm font-spectral mb-4 md:mb-0">
            © 2025 AspiraSys. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;