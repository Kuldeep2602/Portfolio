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
          <div className="bg-gradient-to-br from-[#c7d7fa] via-[#e0e7ff] to-[#a5b4fc] rounded-3xl shadow-2xl p-12 flex flex-col justify-between min-h-[520px] w-[540px] relative transition-all duration-300 ease-out transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-3xl group" style={{boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)'}}>
            {/* Available for work badge */}
            <div className="absolute top-8 left-8 flex items-center gap-2">
              <span 
                className="w-3 h-3 bg-green-600 rounded-full"
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              ></span>
              <span className="bg-white/60 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 shadow group-hover:bg-white/80 transition-colors duration-300">Available for work</span>
            </div>
            <div className="mt-16 mb-8">
              <h2 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight group-hover:text-blue-50 transition-colors duration-300">Crafting Digital<br/>Experiences</h2>
              <p className="text-lg text-white font-light max-w-lg group-hover:text-blue-50 transition-colors duration-300">Specializing in modern web applications with <span className="text-blue-300 font-semibold">Next.js, node.js, typescript</span>,<br/>and cutting-edge design systems.<br/>Let's build something extraordinary together.</p>
            </div>
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <a href="https://drive.google.com/file/d/1eheUbjGbvG7LBctczPDZlzFowA8QWQ6o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/70 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95">
                <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" /> Resume
              </a>
              <a href="https://github.com/Kuldeep2602" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/70 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95">
                <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kuldeep-singh2602/" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/70 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95">
                <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" /> LinkedIn
              </a>
              <a href="https://x.com/kuldeep26021" target="_blank" rel="noopener noreferrer" className="bg-blue-100/40 hover:bg-blue-100/70 text-blue-900 font-medium shadow rounded-xl px-4 py-3 flex items-center gap-2 text-base transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95">
                <Twitter className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Right: Cards */}
        <div className="flex flex-col gap-5 items-center justify-start mt-2">
          {/* Projects Card */}
          <Link to="/projects" className="w-full flex justify-center group">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl border border-white/30 w-[340px] h-[168px] flex flex-col items-center justify-center p-6 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 hover:bg-white/90">
              <div className="mb-3 p-3 rounded-3xl bg-blue-100/70 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-200/80 transition-all duration-300">
                <FolderOpen className="w-9 h-9 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">Projects</h3>
              <p className="text-base text-gray-500 font-light">View my work</p>
            </div>
          </Link>
          {/* About Card */}
          <Link to="/about" className="w-full flex justify-center group">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl border border-white/30 w-[340px] h-[168px] flex flex-col items-center justify-center p-6 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 hover:bg-white/90">
              <div className="mb-3 p-3 rounded-3xl bg-blue-100/70 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-200/80 transition-all duration-300">
                <User className="w-9 h-9 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">About</h3>
              <p className="text-base text-gray-500 font-light">What else</p>
            </div>
          </Link>
          {/* Contact Card */}
          <a href="https://cal.com/kuldeep-singh" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center group">
            <div className="bg-orange-50/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl border border-orange-200/40 w-[340px] h-[168px] flex flex-col items-center justify-center p-6 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 hover:bg-orange-50/90">
              <div className="mb-3 p-3 rounded-3xl bg-orange-100/70 backdrop-blur-sm flex items-center justify-center group-hover:bg-orange-200/80 transition-all duration-300">
                <Mail className="w-9 h-9 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">Contact</h3>
              <p className="text-base text-orange-600 font-medium">Get in touch</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
