
import React from 'react';
import { ShieldCheck, Lock, Award, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I switched to Anbhu three months ago and my document workflow is already significantly better. The accuracy is just worlds apart from other centers.",
    author: "Sarah Jenkins",
    role: "Digital Nomad",
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    quote: "Finally, a service center that doesn't feel like a chore. It's sophisticated, fast, and the government document support is unbeatable.",
    author: "Markus Chen",
    role: "Product Designer",
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    quote: "The automated GST filing tools have helped me maintain my business without even thinking about it. Best financial decision of the year.",
    author: "Elena Rodriguez",
    role: "Marketing Director",
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export const Trust: React.FC = () => {
  return (
    <section id="security" className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Security First</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Your data is safe. <br />Your identity is private.</h3>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              We employ industry-leading protocols to ensure your documents and identity are protected at every layer. Anbhu is built on a foundation of trust.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">CSC Authorized</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Official government service partner for verified applications.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <Lock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Encrypted Systems</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">State-of-the-art digital infrastructure keeps your sensitive files private.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <Award className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Verified Expert</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">ISO 9001 certified processes for document handling.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-500/10 rounded-full blur-[120px]"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                {testimonials.slice(0, 2).map((t, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl">
                    <Quote className="w-8 h-8 text-emerald-400 mb-4 opacity-50" />
                    <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img src={t.image} className="w-10 h-10 rounded-full" alt={t.author} />
                      <div>
                        <div className="text-sm font-bold text-white">{t.author}</div>
                        <div className="text-xs text-slate-500">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl">
                  <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
                  <p className="text-slate-300 italic mb-6 leading-relaxed">"{testimonials[2].quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={testimonials[2].image} className="w-10 h-10 rounded-full" alt={testimonials[2].author} />
                    <div>
                      <div className="text-sm font-bold text-white">{testimonials[2].author}</div>
                      <div className="text-xs text-slate-500">{testimonials[2].role}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-500 p-6 rounded-3xl text-slate-900 flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-black mb-1">99%</div>
                  <div className="text-sm font-bold opacity-80 uppercase tracking-wider">Application Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
