
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
             <div className="flex items-center gap-3 mb-10">
              <div className="grid grid-cols-2 gap-0.5 w-7 h-7">
                <div className="bg-[#60a5fa] rounded-[1px]"></div>
                <div className="bg-[#a7f3d0] rounded-[1px]"></div>
                <div className="bg-[#34d399] rounded-[1px]"></div>
                <div className="bg-[#fbbf24] rounded-[1px]"></div>
              </div>
              <span className="text-3xl font-black tracking-tighter text-white heading-font uppercase">Anbhu</span>
            </div>
            <p className="text-white/30 text-xl max-w-sm leading-relaxed mb-10 font-medium italic">
              "Turning digital complexities into seamless realities since 2000."
            </p>
            <div className="flex gap-10">
              <div>
                <span className="block text-[10px] font-black text-[#d8e2a8] uppercase tracking-widest mb-2">Since</span>
                <span className="text-white font-bold text-lg">2000</span>
              </div>
              <div>
                <span className="block text-[10px] font-black text-[#d8e2a8] uppercase tracking-widest mb-2">Location</span>
                <span className="text-white font-bold text-lg">Tamil Nadu</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-[#d8e2a8] font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Main Center</h5>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Anbhu Enterprises<br />
              Opp. Government Hospital Road<br />
              Main Street, Digital Hub District<br />
              Tamil Nadu, India
            </p>
          </div>
          <div>
            <h5 className="text-[#d8e2a8] font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Contact</h5>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              support@anbhu.in<br />
              +91 98765 43210<br />
              +91 44 2345 6789
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-white/5">
          <div className="text-white/10 text-[10px] font-mono tracking-widest font-black uppercase">
            &copy; 2024 ANBHU ENTERPRISES • ISO CERTIFIED SERVICE CENTER
          </div>
          <div className="flex gap-10 text-white/20 text-[10px] uppercase font-black tracking-[0.2em]">
            <a href="#" className="hover:text-[#d8e2a8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d8e2a8] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#d8e2a8] transition-colors">CSC Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
