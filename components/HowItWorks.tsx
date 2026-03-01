
import React from 'react';
import { UserPlus, FileCheck, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Visit or Connect',
    description: 'Walk into our center or reach out digitally with your requirements.',
    badge: 'Step 01'
  },
  {
    icon: FileCheck,
    title: 'Instant Processing',
    description: 'Our experts handle your applications or documents with verified precision.',
    badge: 'Step 02'
  },
  {
    icon: Rocket,
    title: 'Seamless Result',
    description: 'Collect your high-quality prints or receive your verified digital status.',
    badge: 'Step 03'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Professional services, delivered instantly.
            </h2>
            <div className="space-y-12">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i !== steps.length - 1 && (
                    <div className="absolute top-16 left-8 bottom-[-48px] w-0.5 bg-slate-100 hidden md:block"></div>
                  )}
                  <div className="w-16 h-16 shrink-0 bg-slate-900 rounded-2xl flex items-center justify-center text-white z-10">
                    <s.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#4fbca1] uppercase tracking-widest">{s.badge}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">{s.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-md">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="relative p-2 bg-slate-900 rounded-[3rem] shadow-3xl">
              <div className="bg-slate-800 rounded-[2.5rem] overflow-hidden aspect-[9/16] relative border-4 border-slate-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=600" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
                  alt="Process verification" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-[#4fbca1] rounded-full flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-slate-900" />
                      </div>
                      <div className="text-white text-lg font-bold">Verification Success</div>
                    </div>
                    <div className="text-white/60 text-sm mb-1">Status Update</div>
                    <div className="text-white text-3xl font-black">APPROVED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
