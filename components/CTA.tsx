
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0e0e0e] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(216,226,168,0.15)_0%,rgba(14,14,14,0)_60%)]"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 mb-10">
          <Sparkles className="w-10 h-10 text-[#d8e2a8]" />
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter heading-font leading-[0.9]">
          Expertise you <br /> can rely on.
        </h2>
        <p className="text-xl text-white/40 mb-16 max-w-2xl mx-auto font-medium">
          Whether it's a single photocopy or complex GST filing, Anbhu Enterprises ensures precision and speed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="w-full sm:w-auto bg-[#d8e2a8] text-black px-12 py-6 rounded-full text-xl font-black hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-[#d8e2a8]/10">
            Visit Our Center
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-16 text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          Common Service Centre (CSC) • Government Authorized
        </div>
      </div>
    </section>
  );
};
