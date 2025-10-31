import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Calendar, 
  CheckCircle, 
  Star,
  Globe, 
  Palette, 
  Bot, 
  Video, 
  Code, 
  Database, 
  BarChart3, 
  TrendingUp,
  Sparkles,
  ExternalLink,
  Download
} from 'lucide-react';

const InternshipProgram = () => {
  const { programId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle brochure download
  const downloadBrochure = (programTitle) => {
    // Create a simple brochure content
    const brochureContent = `
ASPIRASYS INTERNSHIP PROGRAM BROCHURE
=====================================

Program: ${programTitle}
Duration: ${program?.duration}
Type: ${program?.type}

PROGRAM OVERVIEW:
${program?.longDescription}

WHAT YOU'LL LEARN:
${program?.highlights?.map((highlight, index) => `${index + 1}. ${highlight}`).join('\n') || ''}

CURRICULUM:
${program?.curriculum?.map((item, index) => `${item.week}: ${item.topic}\n   ${item.details}`).join('\n\n') || ''}

LEARNING OUTCOMES:
${program?.outcomes?.map((outcome, index) => `${index + 1}. ${outcome}`).join('\n') || ''}

APPLY NOW:
Visit: https://docs.google.com/forms/d/e/1FAIpQLSesxuDBrxsq17OQyCWjj7BZ8exnl-uW57sClDLs8AN0vLV05w/viewform

Contact: info@aspirasys.in
Website: www.aspirasys.in

© 2025 AspiraSys - Transforming IT Education
    `.trim();

    // Create and download the file
    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${programTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Program data with detailed information
  const programData = {
    "ai-web-creation": {
      icon: Globe,
      title: "AI-Powered Web Creation & Portfolio Launchpad",
      duration: "1 Month",
      type: "Intensive Track",
      description: "Transform from beginner to web developer in just 30 days using cutting-edge AI tools and modern frameworks.",
      longDescription: "This intensive 1-month program is designed to fast-track your journey into web development. You'll learn to leverage AI-powered coding assistants, master modern web technologies, and build a professional portfolio that showcases your skills to potential employers.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "Master HTML5, CSS3, and JavaScript fundamentals",
        "Build responsive websites using modern frameworks",
        "Learn AI-powered development with GitHub Copilot",
        "Create a professional portfolio website",
        "Deploy projects using modern hosting platforms",
        "Understand web performance optimization"
      ],
      curriculum: [
        { week: "Week 1", topic: "Web Fundamentals & AI Tools Setup", details: "HTML5, CSS3, JavaScript basics, GitHub Copilot introduction" },
        { week: "Week 2", topic: "Modern Frontend Development", details: "React.js, responsive design, CSS frameworks" },
        { week: "Week 3", topic: "Backend Integration & APIs", details: "Node.js basics, API integration, database connections" },
        { week: "Week 4", topic: "Portfolio Creation & Deployment", details: "Project showcase, deployment, performance optimization" }
      ],
      outcomes: [
        "Build 3-5 professional web projects",
        "Create a job-ready portfolio website",
        "Master AI-assisted coding techniques",
        "Understand modern web development workflow"
      ]
    },
    "creative-tech-design": {
      icon: Palette,
      title: "Creative Tech Intern: Design & Media with AI",
      duration: "1 Month",
      type: "Intensive Track",
      description: "Master digital design and AI-powered content creation tools to become a versatile creative professional.",
      longDescription: "Dive into the world of creative technology where traditional design meets artificial intelligence. This program combines visual design principles with cutting-edge AI tools for creating stunning graphics, videos, and multimedia content.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "Master Canva Pro and advanced design techniques",
        "AI-powered image generation with Midjourney/DALL-E",
        "Video editing with AI assistance tools",
        "Music and audio generation using AI",
        "Brand identity and logo design",
        "Social media content strategy"
      ],
      curriculum: [
        { week: "Week 1", topic: "Design Fundamentals & Canva Mastery", details: "Color theory, typography, layout principles, Canva Pro features" },
        { week: "Week 2", topic: "AI Image & Video Generation", details: "Midjourney, DALL-E, AI video tools, prompt engineering" },
        { week: "Week 3", topic: "Multimedia Content Creation", details: "Audio design, music generation, video editing with AI" },
        { week: "Week 4", topic: "Portfolio & Brand Development", details: "Personal branding, portfolio creation, client presentation" }
      ],
      outcomes: [
        "Create professional design portfolio",
        "Master AI-powered creative tools",
        "Develop brand identity projects",
        "Build social media content library"
      ]
    },
    "agentic-ai-specialist": {
      icon: Bot,
      title: "Agentic AI Specialist Internship",
      duration: "1 Month",
      type: "Intensive Track",
      description: "Learn to build and deploy intelligent AI agents that can automate complex workflows and tasks.",
      longDescription: "Step into the future of AI automation with this specialized program focusing on agentic AI systems. You'll learn to create intelligent agents that can perform complex tasks, make decisions, and interact with various systems autonomously.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "Understanding AI agent architecture and frameworks",
        "Building autonomous workflow automation",
        "Integration with external APIs and services",
        "Natural language processing for agent communication",
        "Multi-agent system coordination",
        "Real-world deployment and monitoring"
      ],
      curriculum: [
        { week: "Week 1", topic: "AI Agent Fundamentals", details: "Agent architecture, decision-making systems, basic automation" },
        { week: "Week 2", topic: "Workflow Automation", details: "Complex task automation, API integrations, data processing" },
        { week: "Week 3", topic: "Multi-Agent Systems", details: "Agent coordination, communication protocols, collaborative AI" },
        { week: "Week 4", topic: "Deployment & Optimization", details: "Production deployment, monitoring, performance optimization" }
      ],
      outcomes: [
        "Build functional AI agent systems",
        "Automate complex business workflows",
        "Deploy production-ready agents",
        "Understand enterprise AI integration"
      ]
    },
    "youtube-content-creator": {
      icon: Video,
      title: "AI-Driven YouTube Content Creator Internship",
      duration: "1 Month",
      type: "Intensive Track",
      description: "Create engaging YouTube content using AI tools for scripting, editing, and audience growth.",
      longDescription: "Transform your creative vision into a successful YouTube channel using the power of AI. This program covers everything from content strategy to AI-assisted video production and audience engagement.",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "AI-powered script writing and storytelling",
        "Automated video editing with AI tools",
        "Thumbnail design using AI generation",
        "Voice synthesis and avatar creation",
        "YouTube SEO and algorithm optimization",
        "Audience analytics and growth strategies"
      ],
      curriculum: [
        { week: "Week 1", topic: "Content Strategy & AI Scripting", details: "Channel planning, AI script generation, storytelling techniques" },
        { week: "Week 2", topic: "Video Production with AI", details: "AI editing tools, automated workflows, visual effects" },
        { week: "Week 3", topic: "AI Avatars & Voice Synthesis", details: "Digital avatars, voice cloning, automated narration" },
        { week: "Week 4", topic: "Growth & Optimization", details: "YouTube SEO, analytics, monetization strategies" }
      ],
      outcomes: [
        "Launch a professional YouTube channel",
        "Create AI-assisted content pipeline",
        "Master video SEO and growth hacking",
        "Build audience engagement strategies"
      ]
    },
    "fullstack-developer": {
      icon: Code,
      title: "Full Stack Developer Internship with AI Co-Pilots",
      duration: "4 Months",
      type: "Deep-Dive Program",
      description: "Become a complete full-stack developer with expertise in modern technologies and AI-assisted development.",
      longDescription: "This comprehensive 4-month program transforms you into a skilled full-stack developer. You'll master both frontend and backend technologies while learning to leverage AI coding assistants for maximum productivity and code quality.",
      color: "from-slate-600 to-blue-600",
      bgColor: "from-slate-50 to-blue-50",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "Master React.js, Node.js, and database technologies",
        "Advanced AI-assisted coding with Copilot and Cursor",
        "Build scalable web applications from scratch",
        "Learn DevOps, deployment, and cloud services",
        "Work on real client projects",
        "Agile development methodologies"
      ],
      curriculum: [
        { week: "Month 1", topic: "Frontend Mastery", details: "React.js, TypeScript, modern CSS, responsive design" },
        { week: "Month 2", topic: "Backend Development", details: "Node.js, Express.js, databases, API design" },
        { week: "Month 3", topic: "Full-Stack Integration", details: "Authentication, real-time features, testing, optimization" },
        { week: "Month 4", topic: "Professional Development", details: "DevOps, deployment, project management, portfolio" }
      ],
      outcomes: [
        "Build complete full-stack applications",
        "Master modern development workflows",
        "Create professional developer portfolio",
        "Ready for junior developer positions"
      ]
    },
    "data-science-ml": {
      icon: Database,
      title: "AI-Powered Data Science & Machine Learning Internship",
      duration: "4 Months",
      type: "Deep-Dive Program",
      description: "Transform into a data scientist with hands-on experience in machine learning and AI-assisted analysis.",
      longDescription: "Embark on a comprehensive journey into data science and machine learning. This program combines theoretical knowledge with practical application, using real-world datasets and AI tools to solve complex problems.",
      color: "from-indigo-500 to-purple-600",
      bgColor: "from-indigo-50 to-purple-50",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "Python programming and data manipulation",
        "Machine learning algorithms and model building",
        "Data visualization and storytelling",
        "AI-assisted data analysis and insights",
        "Real-world project implementation",
        "Industry-standard tools and frameworks"
      ],
      curriculum: [
        { week: "Month 1", topic: "Python & Data Fundamentals", details: "Python mastery, pandas, numpy, data preprocessing" },
        { week: "Month 2", topic: "Machine Learning Basics", details: "Supervised/unsupervised learning, scikit-learn, model evaluation" },
        { week: "Month 3", topic: "Advanced ML & Deep Learning", details: "Neural networks, TensorFlow, computer vision, NLP" },
        { week: "Month 4", topic: "Production & Portfolio", details: "Model deployment, MLOps, portfolio projects, presentation" }
      ],
      outcomes: [
        "Build end-to-end ML projects",
        "Master data analysis workflows",
        "Create data science portfolio",
        "Ready for data analyst/scientist roles"
      ]
    },
    "business-analyst": {
      icon: BarChart3,
      title: "Business Analyst Internship: AI + UX + Strategy",
      duration: "4 Months",
      type: "Deep-Dive Program",
      description: "Develop strategic thinking and analytical skills enhanced by AI tools and user experience design.",
      longDescription: "This unique program combines business analysis, user experience design, and strategic thinking with AI-powered tools. You'll learn to identify opportunities, analyze markets, and create solutions that drive business value.",
      color: "from-teal-500 to-green-600",
      bgColor: "from-teal-50 to-green-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "Business process analysis and optimization",
        "User experience research and design",
        "AI-powered data analysis and insights",
        "Strategic planning and market research",
        "Stakeholder management and communication",
        "Project management methodologies"
      ],
      curriculum: [
        { week: "Month 1", topic: "Business Analysis Fundamentals", details: "Process mapping, requirements gathering, stakeholder analysis" },
        { week: "Month 2", topic: "UX Research & Design", details: "User research, wireframing, prototyping, usability testing" },
        { week: "Month 3", topic: "Data-Driven Decision Making", details: "Analytics tools, AI insights, reporting, visualization" },
        { week: "Month 4", topic: "Strategic Implementation", details: "Project management, change management, presentation skills" }
      ],
      outcomes: [
        "Conduct comprehensive business analysis",
        "Design user-centered solutions",
        "Create strategic recommendations",
        "Ready for business analyst positions"
      ]
    },
    "digital-marketing": {
      icon: TrendingUp,
      title: "Digital Marketing & Growth Strategy Internship with AI",
      duration: "4 Months",
      type: "Deep-Dive Program",
      description: "Master digital marketing using AI tools for campaign optimization and growth hacking strategies.",
      longDescription: "Dive deep into the world of digital marketing enhanced by artificial intelligence. Learn to create, execute, and optimize marketing campaigns using cutting-edge AI tools and data-driven strategies.",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
      highlights: [
        "Multi-channel digital marketing strategies",
        "AI-powered content creation and optimization",
        "Social media automation and management",
        "SEO and SEM with AI assistance",
        "Email marketing and funnel optimization",
        "Analytics and performance measurement"
      ],
      curriculum: [
        { week: "Month 1", topic: "Digital Marketing Foundations", details: "Marketing strategy, brand development, audience research" },
        { week: "Month 2", topic: "Content & Social Media", details: "AI content creation, social automation, influencer marketing" },
        { week: "Month 3", topic: "Paid Advertising & SEO", details: "Google Ads, Facebook Ads, AI-optimized campaigns, SEO" },
        { week: "Month 4", topic: "Analytics & Growth", details: "Performance tracking, A/B testing, growth hacking, portfolio" }
      ],
      outcomes: [
        "Launch complete marketing campaigns",
        "Master AI marketing tools",
        "Build digital marketing portfolio",
        "Ready for marketing specialist roles"
      ]
    }
  };

  const program = programData[programId];

  // Function to get suggested programs based on current program
  const getSuggestedPrograms = (currentProgramId) => {
    const allPrograms = Object.entries(programData).map(([id, data]) => ({
      id,
      ...data
    }));

    // Remove current program from suggestions
    const otherPrograms = allPrograms.filter(p => p.id !== currentProgramId);

    // Define program relationships and suggestions
    const suggestions = {
      // 1-Month programs suggestions
      "ai-web-creation": ["fullstack-developer", "creative-tech-design", "agentic-ai-specialist"],
      "creative-tech-design": ["youtube-content-creator", "digital-marketing", "ai-web-creation"],
      "agentic-ai-specialist": ["data-science-ml", "fullstack-developer", "ai-web-creation"],
      "youtube-content-creator": ["creative-tech-design", "digital-marketing", "agentic-ai-specialist"],
      
      // 4-Month programs suggestions
      "fullstack-developer": ["ai-web-creation", "data-science-ml", "agentic-ai-specialist"],
      "data-science-ml": ["agentic-ai-specialist", "business-analyst", "fullstack-developer"],
      "business-analyst": ["digital-marketing", "data-science-ml", "creative-tech-design"],
      "digital-marketing": ["youtube-content-creator", "business-analyst", "creative-tech-design"]
    };

    const suggestedIds = suggestions[currentProgramId] || [];
    const suggestedPrograms = suggestedIds
      .map(id => otherPrograms.find(p => p.id === id))
      .filter(Boolean)
      .slice(0, 3);

    // If we don't have enough suggested programs, fill with random others
    if (suggestedPrograms.length < 3) {
      const remainingPrograms = otherPrograms.filter(p => !suggestedIds.includes(p.id));
      const additionalNeeded = 3 - suggestedPrograms.length;
      const randomAdditional = remainingPrograms
        .sort(() => Math.random() - 0.5)
        .slice(0, additionalNeeded);
      suggestedPrograms.push(...randomAdditional);
    }

    return suggestedPrograms.slice(0, 3);
  };

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`bg-gradient-to-br ${program.bgColor} pt-24 pb-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Programs</span>
          </motion.button>

          {/* Program Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${program.duration === '1 Month' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                      {program.duration}
                    </span>
                    <span className="flex items-center space-x-1 text-gray-600">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm">AI-Powered</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{program.type}</p>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-title">
                {program.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {program.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSesxuDBrxsq17OQyCWjj7BZ8exnl-uW57sClDLs8AN0vLV05w/viewform', '_blank')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => downloadBrochure(program.title)}
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl items-center justify-center">
                <div className="text-center">
                  <program.icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">{program.title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Program Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-title">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {program.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Curriculum */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-title">Program Curriculum</h2>
          <div className="space-y-6">
            {program.curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.week}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{item.topic}</h3>
                </div>
                <p className="text-gray-600">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Learning Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-title">Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {program.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Suggested Programs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-title">You Might Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getSuggestedPrograms(programId).map((suggestedProgram, index) => (
              <motion.div
                key={suggestedProgram.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative bg-gradient-to-br ${suggestedProgram.bgColor} p-6 rounded-2xl shadow-lg border border-gray-100 group cursor-pointer`}
              >
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`flex items-center space-x-1 ${suggestedProgram.duration === '1 Month' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'} px-2 py-1 rounded-full text-xs font-medium`}>
                    <Clock className="w-3 h-3" />
                    <span>{suggestedProgram.duration}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <suggestedProgram.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight font-title">
                    {suggestedProgram.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    {suggestedProgram.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/internship-program/${suggestedProgram.id}`)}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 shadow-md font-button"
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSesxuDBrxsq17OQyCWjj7BZ8exnl-uW57sClDLs8AN0vLV05w/viewform', '_blank')}
                    className="px-4 py-2 border-2 border-indigo-200 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300"
                  >
                    Apply
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-title">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers through our AI-powered internship programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSesxuDBrxsq17OQyCWjj7BZ8exnl-uW57sClDLs8AN0vLV05w/viewform', '_blank')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Apply for This Program</span>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => downloadBrochure(program.title)}
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Get Brochure</span>
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default InternshipProgram;