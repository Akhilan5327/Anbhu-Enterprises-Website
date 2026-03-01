
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0e0e0e]">
      {/* Subtle background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] blur-gradient rounded-full opacity-30"></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
