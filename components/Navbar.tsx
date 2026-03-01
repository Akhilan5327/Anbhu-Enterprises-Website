import React from 'react';
import { Moon } from 'lucide-react';

export const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-8 px-10`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Image */}
          <img 
            src="https://img.sanishtech.com/u/d619414e563fbfa6054215322b767fd3.jpg" 
            alt="Anbhu Enterprises Logo" 
            width="40" 
            height="40" 
            className="rounded-md object-contain"
          />
          <span className="text-2xl font-bold tracking-tight text-white heading-font">Anbhu Enterprises</span>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <Moon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};