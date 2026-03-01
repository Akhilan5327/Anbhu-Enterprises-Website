
import React from 'react';
import { 
  Printer, 
  CreditCard, 
  Landmark, 
  Plane, 
  CheckCircle2, 
  Fingerprint, 
  Car, 
  TrainFront, 
  UserCheck,
  Phone
} from 'lucide-react';

const serviceCategories = [
  {
    category: "Printing & Documents",
    icon: Printer,
    color: "text-blue-400",
    items: [
      "Xerox / Photocopy (B/W & Colour)",
      "Scanning & Lamination",
      "Spiral & Soft Binding",
      "PVC Card Printing",
      "Typing (English & Tamil)",
      "Rental Agreement Printing"
    ]
  },
  {
    category: "Banking & Digital Finance",
    icon: CreditCard,
    color: "text-emerald-400",
    items: [
      "Domestic Money Transfer",
      "Aadhaar Card (New & Correction)",
      "Micro ATM Services",
      "UPI & Online Payment Assistance",
      "PAN Card (New & Correction)",
      "Smart Card Services"
    ]
  },
  {
    category: "Govt & E-Sevai Services",
    icon: Landmark,
    color: "text-amber-400",
    items: [
      "GST Registration & Filing",
      "Income Tax Return (ITR)",
      "EPF Claims & Passbook",
      "Employment Registration",
      "EC / Patta / Chitta Services",
      "Driving License Applications"
    ]
  },
  {
    category: "Travel & Insurance",
    icon: Plane,
    color: "text-rose-400",
    items: [
      "Vehicle Insurance (Bike/Car)",
      "Health & Life Insurance",
      "Train (IRCTC) Booking",
      "Flight & Bus Ticket Booking",
      "Ola / Uber Assistance",
      "Fastag Registration"
    ]
  }
];

export const Features: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Contact Hero Section: Balanced & Centered */}
        <div className="mb-48 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* Left: Phone Mockup */}
          <div className="relative flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Phone Mockup Body */}
              <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-black rounded-[3.5rem] border-[8px] border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden z-10">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
                
                {/* Screen Content */}
                <div className="h-full bg-[#f0f4e3] flex flex-col p-4 pt-14 gap-1">
                   <div className="flex justify-between items-center px-2 mb-3">
                      <span className="text-black font-black text-lg heading-font">2026</span>
                      <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
                         <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="px-2 mb-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Anbhu Hub</div>
                      <div className="text-black/60 text-[10px] leading-snug">
                         All-in-one verified services.
                      </div>
                   </div>

                   {/* Grid Cards inside phone */}
                   <div className="grid grid-cols-2 gap-1 flex-grow">
                      <div className="bg-[#4fbca1] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <Fingerprint className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">Aadhaar</div>
                      </div>
                      <div className="bg-[#5ed3c0] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">PAN Card</div>
                      </div>
                      <div className="bg-[#93c9bc] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <Car className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">Driving</div>
                      </div>
                      <div className="bg-[#acc9bc] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <TrainFront className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">Train</div>
                      </div>
                      <div className="bg-[#99bc80] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <Plane className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">Flight</div>
                      </div>
                      <div className="bg-[#bcd898] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <Landmark className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">Banking</div>
                      </div>
                      <div className="bg-[#d4e1a1] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <UserCheck className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">Voter ID</div>
                      </div>
                      <div className="bg-[#e9f0d1] p-3 flex flex-col justify-between rounded-sm">
                         <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                            <Printer className="w-4 h-4 text-black/60" />
                         </div>
                         <div className="text-black font-black text-[10px] uppercase">Xerox</div>
                      </div>
                   </div>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-[#d8e2a8]/5 rounded-full blur-[100px] z-0"></div>
            </div>
          </div>

          {/* Right Content Section - Centered content alignment */}
          <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-5xl md:text-[80px] font-black text-white heading-font leading-[0.9] mb-8 tracking-tighter">
              Feel free<br />
              to call on.
            </h3>
            
            <p className="text-3xl md:text-5xl font-black text-[#d8e2a8] mb-8 tracking-tight">
              +91 98765 43210
            </p>
            
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center gap-5 bg-white text-black px-14 py-7 rounded-full text-2xl font-black hover:bg-[#d8e2a8] transition-all shadow-2xl active:scale-95 group"
            >
              <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
          </div>
        </div>

        {/* Detailed Service Category Grids */}
        <div className="space-y-32">
          {serviceCategories.map((cat, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#d8e2a8]/30 transition-colors">
                  <cat.icon className={`w-8 h-8 ${cat.color}`} />
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-white heading-font tracking-tight">{cat.category}</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {cat.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="relative group/card flex items-center gap-5 p-8 bg-[#0e0e0e] border border-white/10 rounded-[2.5rem] hover:border-[#d8e2a8]/50 hover:bg-white/[0.02] transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/card:bg-[#d8e2a8]/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-white/20 group-hover/card:text-[#d8e2a8] transition-colors" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-white/60 group-hover/card:text-white transition-colors tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Badges */}
        <div className="mt-40 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-10">
          {["Authorized CSC Center", "E-Sevai Authorized", "ISO 9001:2015", "Digital India Partner"].map((tag) => (
            <div key={tag} className="flex items-center gap-4 px-10 py-4 rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#d8e2a8]" />
              <span className="text-xs font-black text-white/40 uppercase tracking-[0.3em]">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
