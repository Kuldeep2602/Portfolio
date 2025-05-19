import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiInfo, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const cards = [
    {
      title: 'Projects',
      bg: 'bg-white',
      text: 'text-black',
      icon: <FiBriefcase size={32} className="opacity-60" />,
      path: '/projects'
    },
    {
      title: 'About me',
      bg: 'bg-black',
      text: 'text-white',
      icon: <FiInfo size={32} className="opacity-60" />,
      path: '/about'
    },
    {
      title: 'Contact me',
      bg: 'bg-[#fff46b]',
      text: 'text-black',
      icon: <FiMail size={32} className="opacity-60" />,
      path: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-black p-6 md:p-12 font-sans">
      {/* Header */}
      <header className="text-center mb-12">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <br/>
          <br/>
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-200 font-mono mb-2">
            Kuldeep Singh
          </h1>
          <br/>
          
        </motion.div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto h-auto">
        {/* Large Blue Card - Left Side */}
        <motion.div 
          className="bg-[#2d2cff] rounded-[3rem] p-8 lg:col-span-2 relative overflow-hidden h-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Background Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 -mt-32 -mr-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full opacity-10 -mb-24 -mr-24"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Full Stack Developer
            </h2>
            
            <div className="mt-4 mb-8">
              <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm inline-block">
                <p className="text-xl text-blue-50 leading-relaxed">
                  I'm currently building awesome digital experiences and open for freelancing <span className="text-green-400">✓</span>
                </p>
              </div>
            </div>
            
            <div className="mt-auto grid grid-cols-2 gap-4 w-full max-w-md">
              <a 
                href="https://drive.google.com/file/d/1cGQj3yYtoyOuGP9HOnSbSQ8Ygy_Qzh68/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl flex items-center transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              <a 
                href="https://github.com/Kuldeep2602" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl flex items-center transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/kuldeep-singh2602/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl flex items-center transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://x.com/kuldeep26021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl flex items-center transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side Cards */}
        <div className="grid grid-rows-2 gap-6 h-full">
          {/* Top Row - Two Cards */}
          <div className="grid grid-cols-2 gap-6">
            {cards.slice(0, 2).map((card, index) => (
              <Link to={card.path} key={index} className="h-full">
                <motion.div
                  className={`${card.bg} ${card.text} rounded-3xl p-6 h-full flex flex-col`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-right mb-4">
                    {React.cloneElement(card.icon, { size: 20 })}
                  </div>
                  <h3 className="text-2xl font-bold mt-auto">
                    {card.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Bottom Row - Full Width Card */}
          <Link to={cards[2].path} className="h-full">
            <motion.div
              className={`${cards[2].bg} ${cards[2].text} rounded-3xl p-6 flex justify-between items-center h-full`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold">
                {cards[2].title}
              </h3>
              <div>
                {React.cloneElement(cards[2].icon, { size: 20 })}
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Removed Site of the Day Badge */}
    </div>
  );
};

export default LandingPage;
