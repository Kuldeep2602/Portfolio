import React from 'react';
import { Link } from 'react-router-dom';
import { FolderOpen, User, Mail, FileText, Github, Linkedin, Twitter } from 'lucide-react';


const LandingPage = () => {
  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.15;
            }
          }
        `}
      </style>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-2 tracking-tight">Kuldeep Singh</h1>
          <p className="text-base text-gray-600 font-light">Full Stack Developer & Digital Experience Creator</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-7xl mx-auto flex gap-6 items-center justify-center">
          {/* Left: Main Card */}
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-100/70 to-blue-200/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/40 w-[520px] h-[450px] flex flex-col justify-between p-8 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2">
              {/* Available Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  style={{
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}
                ></span>
                <span className="bg-white/50 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-gray-700 shadow group-hover:bg-white/70 transition-colors duration-300 border border-white/30">Available for work</span>
              </div>
              
              {/* Main Content */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-light text-white/90 mb-4 leading-tight">Crafting Digital<br/>Experiences</h2>
                <p className="text-base text-white/80 font-light max-w-md">Specializing in modern web applications with <span className="text-blue-100/90 font-semibold">React, TypeScript, Next.js</span>,<br/>and cutting-edge design systems.<br/>Let's build something extraordinary together.</p>
              </div>
              
              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a href="https://drive.google.com/file/d/1W1nLUwRmCLbCBWnbV7ogf2gEhl-0tZf6/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-white/30 hover:bg-white/50 text-white/90 font-medium shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95 backdrop-blur-md border border-white/30">
                  <FileText className="w-4 h-4" /> Resume
                </a>
                <a href="https://github.com/Kuldeep2602" target="_blank" rel="noopener noreferrer" className="bg-white/30 hover:bg-white/50 text-white/90 font-medium shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95 backdrop-blur-md border border-white/30">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/kuldeep-singh2602/" target="_blank" rel="noopener noreferrer" className="bg-white/30 hover:bg-white/50 text-white/90 font-medium shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95 backdrop-blur-md border border-white/30">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href="https://x.com/kuldeep26021" target="_blank" rel="noopener noreferrer" className="bg-white/30 hover:bg-white/50 text-white/90 font-medium shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95 backdrop-blur-md border border-white/30">
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
              </div>
            </div>
          </div>

          {/* Right: Three Cards Stacked Vertically */}
          <div className="flex flex-col gap-4 items-center justify-center">
            {/* Projects Card */}
            <Link to="/projects" className="group">
              <div className="bg-blue-100/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/40 w-[260px] h-[140px] flex flex-col items-center justify-center p-4 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 hover:bg-blue-100/80">
                <div className="mb-3 p-3 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center group-hover:bg-white/70 transition-all duration-300 border border-white/30">
                  <FolderOpen className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-800/90 mb-1">Projects</h3>
                <p className="text-xs text-gray-600/80 font-light">View my work</p>
              </div>
            </Link>
            
            {/* About Card */}
            <Link to="/about" className="group">
              <div className="bg-blue-100/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/40 w-[260px] h-[140px] flex flex-col items-center justify-center p-4 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 hover:bg-blue-100/80">
                <div className="mb-3 p-3 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center group-hover:bg-white/70 transition-all duration-300 border border-white/30">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-800/90 mb-1">About</h3>
                <p className="text-xs text-gray-600/80 font-light">Learn more</p>
              </div>
            </Link>
            
            {/* Contact Card */}
            <a href="https://cal.com/kuldeep-singh" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-orange-100/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/40 w-[260px] h-[140px] flex flex-col items-center justify-center p-4 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 hover:bg-orange-100/80">
                <div className="mb-3 p-3 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center group-hover:bg-white/70 transition-all duration-300 border border-white/30">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-800/90 mb-1">Contact</h3>
                <p className="text-xs text-gray-600/80 font-light">Get in touch</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
