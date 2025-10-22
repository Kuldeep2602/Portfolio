import { FaUserTie, FaGraduationCap, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-light text-gray-800 mb-2">About Me</h2>
          <p className="text-sm text-gray-600 font-light">Full Stack Developer passionate about creating exceptional digital experiences</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left column - Photo and contact */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 flex flex-col gap-4"
          >
            {/* Profile photo card */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-4 overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden border border-white/80">
                <div className="aspect-square flex items-center justify-center text-blue-500">
                  <span className="text-5xl font-light">KS</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-gray-800">Kuldeep Singh</h3>
                <p className="text-blue-600 text-sm font-medium mt-1 bg-blue-50/60 px-3 py-1 rounded-full inline-block">Full Stack Developer</p>
              </div>
            </div>
            
            {/* Download CV button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <a 
                href="https://drive.google.com/file/d/1jXxlcOX6-BeI_859h2KO7r2dAKBeSYLp/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-md border border-blue-400/40"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right column - Bio and skills */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3 flex flex-col gap-4"
          >
            {/* Bio */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-xl mr-3 border border-white/40 shadow-sm">
                  <FaUserTie className="text-blue-600 text-lg" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">My Journey</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building modern web applications.
                With 3+ years of experience, I create seamless user experiences with clean, efficient code,
                combining thoughtful design and performance optimization to deliver exceptional digital products.
              </p>
            </div>
            
           
            
            {/* Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-xl mr-3 border border-white/40 shadow-sm">
                  <FaCode className="text-blue-600 text-lg" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Skills</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'MySQL', 'WebRTC', 'C++'].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 * i + 0.8 }}
                    className="bg-blue-50/60 backdrop-blur-sm text-blue-600/90 px-3 py-1 text-xs rounded-lg font-medium border border-white/40 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
