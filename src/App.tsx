import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--paper)] dark:bg-[#0b0b0b] transition-colors duration-300 relative">
        <CustomCursor />

        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
          <ThemeToggle />
        </div>

        <main className="flex-grow px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Work />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
