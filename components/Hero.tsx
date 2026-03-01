
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase mb-12">
          ESTABLISHED 2000
        </div>
        
        <h1 className="text-5xl md:text-[100px] font-extrabold text-[#d8e2a8] leading-[0.95] mb-12 tracking-tighter heading-font">
          Fast. Reliable.<br/> All-in-One<br/> Digital Services.
        </h1>
        
        <div className="flex justify-center gap-12 mt-12 opacity-40">
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Xerox</span>
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">E-Sevai</span>
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Banking</span>
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Insurance</span>
        </div>
      </div>
    </section>
  );
};
