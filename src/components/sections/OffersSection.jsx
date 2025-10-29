import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Wifi, 
  UserCheck, 
  MessageSquare, 
  Award, 
  FileText, 
  Trophy, 
  DollarSign, 
  Building, 
  Handshake 
} from 'lucide-react';

const OffersSection = () => {
  const offers = [
    {
      icon: Users,
      text: "Personalized Skill Guidance based on each intern's strengths",
      color: "text-indigo-600"
    },
    {
      icon: Wifi,
      text: "High-speed Internet, computers & air-conditioned learning spaces",
      color: "text-blue-600"
    },
    {
      icon: UserCheck,
      text: "Technical mentorship by industry professionals",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      text: "Soft-skill training: communication, email writing, interviews",
      color: "text-purple-600"
    },
    {
      icon: Award,
      text: "Valuable certifications upon completion of stacks and projects",
      color: "text-yellow-600"
    },
    {
      icon: FileText,
      text: "Resume preparation, LinkedIn optimization, and referral guidance",
      color: "text-red-600"
    },
    {
      icon: Trophy,
      text: "Hackathons and debugging challenges with prizes",
      color: "text-orange-600"
    },
    {
      icon: DollarSign,
      text: 'Live Projects with stipends: "Earn while you Learn"',
      color: "text-emerald-600"
    },
    {
      icon: Building,
      text: "MoUs with IT companies for hiring",
      color: "text-cyan-600"
    },
    {
      icon: Handshake,
      text: "Collaborations with colleges and external training firms",
      color: "text-pink-600"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gray-50 scroll-mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Offers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center font-spectral">What AspiraSys Offers</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <offer.icon className={`w-5 h-5 ${offer.color} mt-0.5 flex-shrink-0`} />
                <p className="text-gray-700 text-sm font-spectral">{offer.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;