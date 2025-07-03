import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, TrendingUp, Code, Calendar } from 'lucide-react';
import profileImage from '../.././assets/images/profile.jpg';
import resumePDF from '../.././assets/resume.pdf';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Calendar, label: 'Experience', value: '2+ Years', color: 'text-orange-400' },
    { icon: TrendingUp, label: 'Projects Completed', value: '10+', color: 'text-green-400' },
    { icon: Code, label: 'Technologies', value: '10+ tools & techniques', color: 'text-blue-400' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Milni Chandrasekara
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
            Full-Stack Developer | Insightful Data Analyst
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Building efficient full-stack applications and turning data into meaningful insights through visualization and analysis to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href={resumePDF}
              download="resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover-lift"
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover-lift"
              aria-label="View My Work"
            >
              <ExternalLink className="w-5 h-5" />
              View My Work
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto justify-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 card-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
