import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  GraduationCap,
  Building2,
  CheckCircle,
  Linkedin,
  Youtube,
  Instagram
} from 'lucide-react';

// Import collaboration images
import AmesImage from '../assets/Collabs/Ames.jpg';
import TietImage from '../assets/Collabs/Tiet.jpg';
import MazharuloomImage from '../assets/Collabs/Mazharuloom.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedPrograms: [],
    branch: '',
    message: ''
  });
  const [selectedBranch, setSelectedBranch] = useState('ambur');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programOptions = [
    'AI-Powered Web Creation & Portfolio Launchpad',
    'Creative Tech Intern: Design & Media with AI',
    'Agentic AI Specialist Internship',
    'AI-Driven YouTube Content Creator Internship',
    'Full Stack Developer Internship with AI Co-Pilots',
    'AI-Powered Data Science & Machine Learning Internship',
    'Business Analyst Internship: AI + UX + Strategy',
    'Digital Marketing & Growth Strategy Internship with AI'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProgramChange = (program) => {
    setFormData(prev => ({
      ...prev,
      interestedPrograms: prev.interestedPrograms.includes(program)
        ? prev.interestedPrograms.filter(p => p !== program)
        : [...prev.interestedPrograms, program]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        interestedPrograms: [],
        branch: '',
        message: ''
      });
    }, 3000);
  };

  const branches = {
    ambur: {
      name: 'Ambur Branch',
      address: 'Ambur, Tamil Nadu',
      iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3890.8657440132797!2d78.7139544!3d12.7872254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad094ba499626f%3A0xfed2b5439de8bbb7!2sMasjid%20E%20Rasheedh%20(TNTJ%20Bazaar%20Branch)!5e0!3m2!1sen!2sin!4v1761891531090!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    chennai: {
      name: 'Chennai Branch',
      address: 'Chennai, Tamil Nadu',
      iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.7832401855433!2d80.26695209965277!3d13.082565154492126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265007f08d9e1%3A0xb27e6bf9fe1ded1d!2sAnaikar%20Complex!5e0!3m2!1sen!2sin!4v1761891599179!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/aspirasys/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Youtube, href: 'https://www.youtube.com/@AspiraSys/videos', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: Instagram, href: 'https://www.instagram.com/aspirasysofficial/', label: 'Instagram', color: 'hover:bg-pink-600' }
  ];

  const collaborations = [
    {
      name: 'Ames College, Ambur',
      location: 'Ambur, Tamil Nadu',
      image: AmesImage,
      link: 'https://www.amescollegeedu.in'
    },
    {
      name: 'Tiet Trust, Pernambut',
      location: 'Pernambut, Tamil Nadu',
      image: TietImage,
      link: 'https://tietpbt.org'
    },
    {
      name: 'Mazharuloom College, Ambur',
      location: 'Ambur, Tamil Nadu',
      image: MazharuloomImage,
      link: 'https://mucollege.ac.in/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-title">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your career with AI-powered skills? We're here to help you take the next step. 
              Contact us to learn more about our programs or get personalized guidance.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-title">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been sent successfully. We'll contact you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Interested Programs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Interested Programs (Select multiple)
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3">
                    {programOptions.map((program, index) => (
                      <label key={index} className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={formData.interestedPrograms.includes(program)}
                          onChange={() => handleProgramChange(program)}
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">{program}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Branch Selection */}
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Branch *
                  </label>
                  <div className="relative">
                    <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select a branch</option>
                      <option value="ambur">Ambur</option>
                      <option value="chennai">Chennai</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Tell us more about your goals and questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Branch Selection for Map */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-title">Our Locations</h3>
              
              {/* Branch Tabs */}
              <div className="flex space-x-4 mb-6">
                {Object.entries(branches).map(([key, branch]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedBranch(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedBranch === key
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {branch.name}
                  </button>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: branches[selectedBranch].iframe 
                  }} 
                />
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-900">{branches[selectedBranch].name}</span>
                </div>
                <p className="text-gray-600 mt-1">{branches[selectedBranch].address}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-title">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@aspirasys.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Support Hours</p>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-title">Follow Us</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-100 ${social.color} text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>Connect with us on social media for the latest updates, success stories, and industry insights.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Collaborations Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-title">
              Our Collaborations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We partner with leading educational institutions to provide the best learning experience and opportunities for our students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => window.open(collab.link, '_blank')}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={collab.image}
                    alt={`${collab.name} logo`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 items-center justify-center">
                    <div className="text-center">
                      <Building2 className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 font-medium">
                        {collab.name}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Visit Website</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-title group-hover:text-indigo-600 transition-colors duration-300">
                    {collab.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {collab.location}
                  </p>
                  <div className="flex items-center text-indigo-600 text-sm font-medium">
                    <span>Visit Institution</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;