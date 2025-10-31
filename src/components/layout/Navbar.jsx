import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import aspiraLogo from '../../assets/Aspira logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/Aspira-Sys' || location.pathname === '/';

  const navigationItems = [
    { name: 'Home', sectionId: 'hero', path: '/Aspira-Sys' },
    { name: 'About Us', sectionId: 'about', path: '/Aspira-Sys' },
    { name: 'Explore Internship', sectionId: 'internship-programs', path: '/Aspira-Sys' },
    { name: 'Ecosystem', sectionId: 'ecosystem', path: '/Aspira-Sys' },
    { name: 'FAQ', sectionId: 'faq', path: '/Aspira-Sys' },
    { name: 'Hire from Us', path: '/hire-from-us' },
    { name: 'Resources', path: '/resources' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleNavigation = (item) => {
    if (item.sectionId && isHomePage) {
      scrollToSection(item.sectionId);
    } else if (item.sectionId && !isHomePage) {
      // Navigate to home page and then scroll
      window.location.href = `/Aspira-Sys#${item.sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/Aspira-Sys">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center cursor-pointer"
            >
              <img 
                src={aspiraLogo} 
                alt="AspiraSys Logo" 
                className="h-24 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                item.path && !item.sectionId ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="px-3 py-2 rounded-md text-base font-medium transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-body"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="px-3 py-2 rounded-md text-base font-medium transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-body"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-2.5 rounded-full transition-all duration-300 shadow-lg font-button text-md cursor-pointer"
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
            className="md:hidden bg-white border-t border-gray-200 font-body"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                item.path && !item.sectionId ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-body"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-body"
                  >
                    {item.name}
                  </button>
                )
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    navigate('/contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-full font-button cursor-pointer"
                >
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