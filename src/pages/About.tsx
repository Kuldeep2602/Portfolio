import { FiArrowRight, FiMail, FiMapPin, FiUser, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="py-2 px-4 sm:px-6 mb-2">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight text-glow transition-colors duration-300">About Me</h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-light transition-colors duration-300">Full Stack Developer passionate about creating exceptional digital experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left column - Profile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-3xl p-5 h-fit"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4 overflow-hidden border-4 border-white/50 dark:border-white/20 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <span className="text-4xl font-light">KS</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Kuldeep Singh</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-6 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full inline-block text-sm border border-blue-100 dark:border-blue-800 transition-colors duration-300">Full Stack Developer</p>

              <div className="w-full space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/5 px-4 py-3 rounded-xl border border-white/40 dark:border-white/10 text-sm shadow-sm transition-all duration-300">
                  <FiMapPin className="text-blue-500 dark:text-blue-400" />
                  <span>Noida, India</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/5 px-4 py-3 rounded-xl border border-white/40 dark:border-white/10 text-sm shadow-sm transition-all duration-300">
                  <FiMail className="text-blue-500 dark:text-blue-400" />
                  <a href="mailto:kuldeeprathore1637@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    kuldeeprathore1637@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/1FKKIlL_NYfJxPopVgLHYZ-QEZGWiW5id/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-blue-600/20 text-sm"
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
            className="md:col-span-2 flex flex-col gap-4"
          >
            {/* Journey section */}
            <div className="glass-panel rounded-3xl p-5">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4 border border-blue-100 dark:border-blue-800 transition-colors duration-300">
                  <FiUser className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">My Journey</h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4 font-light transition-colors duration-300">
                My experience is rooted in building <strong className="text-gray-900 dark:text-white font-medium">production-grade applications</strong> with a product-aware mindset.
                As a <strong className="font-medium text-gray-900 dark:text-white">Full Stack Developer Intern</strong> at <a href="https://www.whatbytes.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 hover:underline">WhatBytes</a>, I build and scale high-performance MERN/Next.js and Django framework , contributing directly to live, production-level projects.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-0 font-light transition-colors duration-300">
                This deep technical work is balanced by my time as a <strong className="font-medium text-gray-900 dark:text-white">Product Intern</strong> at <a href="https://leapscholar.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 hover:underline">Leap Scholar</a>, where I analyzed user needs to guide product decisions. This dual perspective allows me to not only build features—but to build the <strong className="font-medium text-gray-900 dark:text-white">right features</strong> that solve real problems.
              </p>
            </div>

            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel rounded-3xl p-5"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl mr-4 border border-purple-100 dark:border-purple-800 transition-colors duration-300">
                  <FiCode className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Skills & Expertise</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Django', 'React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'MySQL', 'C++', 'Python', 'Redux', 'Express', 'Git', 'RESTful APIs'].map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.05 * i + 0.4 }}
                    className="bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-white/40 dark:border-white/10 transition-colors cursor-default shadow-sm"
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
