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
              opacity: 0.3;
            }
          }
        `}
      </style>
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-start py-10 px-4 font-sans">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-2 h-2 bg-yellow-200 rounded-full mb-4"></div>
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-2 tracking-tight">Kuldeep Singh</h1>
          <div className="text-lg md:text-xl text-gray-600 mb-2">Full Stack Developer </div>
        </div>
      </header>

      <div className="w-full max-w-6xl mx-auto flex flex-row items-start justify-center gap-6">
        {/* Left: Blue Glass Card */}
        <div className="flex items-start justify-end">
          <div className="bg-gradient-to-br from-[#c7d7fa] via-[#e0e7ff] to-[#a5b4fc] rounded-3xl shadow-2xl p-12 flex flex-col justify-between min-h-[520px] w-[540px] relative" style={{boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)'}}>
            {/* Available for work badge */}
            <div className="absolute top-8 left-8 flex items-center gap-2">
              <span 
                className="w-3 h-3 bg-green-400 rounded-full"
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              ></span>
              <span className="bg-white/60 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 shadow">Available for work</span>
            </div>
            <div className="mt-16 mb-8">
              <h2 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">Crafting Digital<br/>Experiences</h2>
              <p className="text-lg text-white font-light max-w-lg">Specializing in modern web applications with <span className="text-blue-100 font-semibold">React, TypeScript</span>,<br/>and cutting-edge design systems.<br/>Let's build something extraordinary together.</p>
            </div>
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <a href="https://drive.google.com/file/d/1cGQj3yYtoyOuGP9HOnSbSQ8Ygy_Qzh68/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/60 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-200">
                <FileText className="w-5 h-5" /> Resume
              </a>
              <a href="https://github.com/Kuldeep2602" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/60 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-200">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kuldeep-singh2602/" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/60 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-200">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a href="https://x.com/kuldeep26021" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/60 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-200">
                <Twitter className="w-5 h-5" /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Right: Cards */}
        <div className="flex flex-col gap-6 items-center justify-start mt-2">
          {/* Projects Card */}
          <Link to="/projects" className="w-full flex justify-center group">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 w-[340px] h-[180px] flex flex-col items-center justify-center p-8 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2">
              <div className="mb-4 p-4 rounded-3xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <FolderOpen className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Projects</h3>
              <p className="text-base text-gray-500 font-light">View my work</p>
            </div>
          </Link>
          {/* About Card */}
          <Link to="/about" className="w-full flex justify-center group">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 w-[340px] h-[180px] flex flex-col items-center justify-center p-8 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2">
              <div className="mb-4 p-4 rounded-3xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <User className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-base text-gray-500 font-light">Learn more</p>
            </div>
          </Link>
          {/* Contact Card */}
          <Link to="/contact" className="w-full flex justify-center group">
            <div className="bg-orange-50 rounded-3xl shadow-lg hover:shadow-2xl border border-orange-200 w-[340px] h-[180px] flex flex-col items-center justify-center p-8 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2">
              <div className="mb-4 p-4 rounded-3xl bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                <Mail className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-base text-gray-500 font-light">Get in touch</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
