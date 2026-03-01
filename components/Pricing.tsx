
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Lite',
    price: '0',
    description: 'Essential services for individuals and side projects.',
    features: ['Standard Color Spectrum', '100 Monthly Prints', 'Cloud Storage', 'Basic Finishes']
  },
  {
    name: 'Anbhu Pro',
    price: '49',
    description: 'High-altitude production for professionals.',
    features: ['Extended Spectrum (10-bit)', 'Unlimited Prints', 'Priority Queuing', 'Metallic & Gloss Finishes', 'Dedicated Support'],
    popular: true
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#d8e2a8] font-bold uppercase tracking-widest text-xs mb-6">Pricing</h2>
          <h3 className="text-5xl font-black text-white heading-font">Select your tier.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`p-12 rounded-[2rem] border transition-all ${
                p.popular ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-white'
              }`}
            >
              <div className="mb-10">
                <h4 className="text-2xl font-black mb-3 heading-font">{p.name}</h4>
                <p className={`text-sm opacity-60`}>{p.description}</p>
              </div>
              <div className="mb-12 flex items-baseline gap-1">
                <span className="text-6xl font-black heading-font">${p.price}</span>
                <span className="text-lg opacity-40 font-medium">/mo</span>
              </div>
              <div className="space-y-4 mb-12">
                {p.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${p.popular ? 'text-black' : 'text-[#d8e2a8]'}`} />
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-5 rounded-full font-bold transition-all ${
                p.popular ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-zinc-200'
              }`}>
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
