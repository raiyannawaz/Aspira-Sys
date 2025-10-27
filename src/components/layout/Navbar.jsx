import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import aspiraLogo from '../../assets/Aspira logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    { name: 'Home', href: '#home', hasDropdown: false },
    { name: 'About Us', href: '#about', hasDropdown: false },
    { name: 'Program', href: '#program', hasDropdown: true },
    { name: 'Workshop', href: '#workshop', hasDropdown: false },
    { name: 'Hire From Us', href: '#hire', hasDropdown: false },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <img 
              src={aspiraLogo} 
              alt="AspiraSys Logo" 
              className="h-16 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => item.hasDropdown ? handleDropdownToggle(item.name) : null}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1 text-gray-700 hover:text-green-500 hover:bg-green-50"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2"
                      >
                        <a href="#internship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-500">
                          Internship Program
                        </a>
                        <a href="#training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500">
                          Training Program
                        </a>
                        <a href="#certification" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500">
                          Certification
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-lg"
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.hasDropdown ? handleDropdownToggle(item.name) : null}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 space-y-1"
                      >
                        <a href="#internship" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                          Internship Program
                        </a>
                        <a href="#training" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                          Training Program
                        </a>
                        <a href="#certification" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                          Certification
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-medium py-2 rounded-full">
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;