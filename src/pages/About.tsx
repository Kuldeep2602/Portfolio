import { FiArrowRight, FiMail, FiMapPin, FiUser, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 text-gray-800">
      {/* Navigation */}
      <nav className="py-3 px-4 sm:px-6 mb-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">About Me</h1>
          <p className="text-sm text-gray-600 font-light">Full Stack Developer passionate about creating exceptional digital experiences</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 transition-all duration-300 hover:shadow-xl h-fit"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-4 overflow-hidden border-4 border-white/80 shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-blue-500">
                  <span className="text-4xl font-light">KS</span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-1">Kuldeep Singh</h3>
              <p className="text-blue-600 font-medium mb-4 bg-blue-50/60 px-3 py-1 rounded-full inline-block text-sm">Full Stack Developer</p>
              
              <div className="w-full space-y-3 mb-5">
                <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/40 shadow-sm text-sm">
                  <FiMapPin className="text-blue-500" />
                  <span>Noida, India</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/40 shadow-sm text-sm">
                  <FiMail className="text-blue-500" />
                  <a href="mailto:kuldeeprathore1637@gmail.com" className="hover:text-blue-600 transition-colors">
                    kuldeeprathore1637@gmail.com
                  </a>
                </div>
              </div>
              
              <a 
                href="https://drive.google.com/file/d/1W1nLUwRmCLbCBWnbV7ogf2gEhl-0tZf6/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-md backdrop-blur-md border border-blue-400/40 text-sm"
              >
                Download CV
                <FiArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Middle column - Experience and Education */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {/* Journey section */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-xl mr-3">
                  <FiUser className="text-blue-600 w-5 h-5" />
                </div>
                <h2 className="text-xl font-medium text-gray-800">My Journey</h2>
              </div>
              
            
<p className="text-gray-600 text-sm leading-relaxed mb-3">
  My experience is rooted in building <strong>production-grade applications</strong> with a product-aware mindset.        
  As a <strong className="font-medium text-gray-900">Full Stack Developer Intern</strong> at <a href="https://www.whatbytes.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:underline">WhatBytes</a>, I build and scale high-performance MERN/Next.js and Django framework , contributing directly to live, production-level projects.
</p>
<p className="text-gray-600 text-sm leading-relaxed mb-0">
  This deep technical work is balanced by my time as a <strong className="font-medium text-gray-900">Product Intern</strong> at <a href="https://leapscholar.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:underline">Leap Scholar</a>, where I analyzed user needs to guide product decisions. This dual perspective allows me to not only build features—but to build the <strong className="font-medium text-gray-900">right features</strong> that solve real problems.
</p>

            </div>

            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-xl mr-3">
                  <FiCode className="text-blue-600 w-5 h-5" />
                </div>
                <h2 className="text-xl font-medium text-gray-800">Skills & Expertise</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['Django','React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'MySQL', 'C++', 'Python', 'Redux', 'Express', 'Git', 'RESTful APIs'].map((skill, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.05 * i + 0.4 }}
                    className="bg-blue-50/60 backdrop-blur-sm text-blue-600/90 px-3 py-1 rounded-lg text-xs font-medium border border-white/40 shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
