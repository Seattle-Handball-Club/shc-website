import React, { useState, useEffect } from 'react';
import { Star, Calendar, MapPin, ArrowRight, Heart, Zap, Smile, Menu, X } from 'lucide-react';

// --- Utility Components ---

interface StickerProps {
  children: React.ReactNode;
  rotation?: string;
  color?: string;
  className?: string;
}

const Sticker: React.FC<StickerProps> = ({ children, rotation = '3deg', color = 'bg-yellow-400', className = '' }) => (
  <div 
    className={`inline-flex items-center justify-center px-6 py-3 font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:scale-110 hover:rotate-0 transition-all cursor-pointer ${color} ${className}`}
    style={{ transform: `rotate(${rotation})` }}
  >
    {children}
  </div>
);

// interface PillImageProps {
//   src: string;
//   alt: string;
//   className?: string;
// }

// const PillImage: React.FC<PillImageProps> = ({ src, alt, className }) => (
//   <div className={`overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}>
//     <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
//   </div>
// );

interface MarqueeProps {
  text: string;
  bg?: string;
  textCol?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, bg = "bg-emerald-500", textCol = "text-white" }) => (
  <div className={`py-4 border-y-2 border-black overflow-hidden ${bg} ${textCol}`}>
    <div className="flex gap-8 animate-marquee whitespace-nowrap">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-3xl md:text-5xl font-black uppercase tracking-tight flex items-center gap-6">
          {text} <Star className="fill-current" />
        </span>
      ))}
    </div>
  </div>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black font-sans selection:bg-pink-400 overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .font-display { font-family: 'Impact', 'Arial Black', sans-serif; }
        .clip-arch { clip-path: ellipse(100% 100% at 50% 100%); }
      `}</style>

      {/* --- HEADER --- */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 flex justify-between items-start pointer-events-none">
        {/* Logo Blob */}
        <div className="pointer-events-auto relative group">
          <div className="absolute inset-0 bg-black rounded-full translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          <div className="relative bg-white border-2 border-black px-6 py-3 rounded-full flex items-center gap-2">
             <span className="font-display text-2xl tracking-tighter">SHC</span>
             <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Menu Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="pointer-events-auto bg-blue-600 text-white border-2 border-black p-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- FULL SCREEN MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-40 bg-yellow-400 transition-transform duration-500 ease-in-out flex items-center justify-center ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-8 text-center">
           {['The Club', 'Schedule', 'Membership', 'Merch'].map((item, i) => (
             <a key={i} href="#" className="font-display text-6xl md:text-8xl uppercase hover:text-white hover:scale-110 transition-all rotate-[-2deg] hover:rotate-[2deg]">
               {item}
             </a>
           ))}
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 px-4 md:px-8 min-h-screen flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Left: Typography */}
        <div className="w-full md:w-1/2 relative z-10 mb-12 md:mb-0">
          <Sticker rotation="-5deg" color="bg-pink-400 text-white" className="mb-8 absolute -top-12 -left-4 md:left-0">
             Est. 2018
          </Sticker>
          
          <h1 className="font-display text-[18vw] md:text-[10vw] leading-[0.85] tracking-tighter text-black drop-shadow-sm">
            THROW<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-700">JUMP</span><br/>
            SCORE
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl font-bold max-w-md leading-tight">
            Seattle's loud, proud, and chaotic Olympic Handball community.
          </p>

          <div className="mt-12 flex gap-4">
             <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors flex items-center gap-2">
                Join the Squad <ArrowRight />
             </button>
             <div className="flex items-center -space-x-4">
                {[1,2,3].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-200"></div>
                ))}
             </div>
          </div>
        </div>

        {/* Right: Visuals */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh]">
           {/* Decorative Shapes */}
           <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
           <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>

           {/* Main Image - Arch Shape */}
           <div className="absolute inset-0 md:inset-12 bg-white border-2 border-black rounded-t-[15rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="w-full h-full bg-slate-100 relative">
                 {/* Abstract Court */}
                 <div className="absolute bottom-0 w-full h-1/3 bg-emerald-500 border-t-2 border-black"></div>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/3 border-x-2 border-t-2 border-dashed border-white rounded-t-full"></div>
                 
                 {/* Floating Elements (Simulated Parallax) */}
                 <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-orange-500 rounded-full border-2 border-black" style={{ transform: `translateY(${offsetY * -0.2}px)` }}></div>
                 <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-600 border-2 border-black transform rotate-45" style={{ transform: `rotate(45deg) translateY(${offsetY * -0.1}px)` }}></div>
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-9xl opacity-10 rotate-12">HANDBALL</span>
                 </div>
              </div>
           </div>
        </div>
      </header>

      <Marquee text="No Experience Needed // Come Thru // Bring Water //" />

      {/* --- INFO CARDS (Offset Grid) --- */}
      <section className="py-24 px-4 md:px-8 bg-blue-600 relative">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            
            {/* Card 1 */}
            <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:-translate-y-12 rotate-1">
               <div className="w-16 h-16 bg-yellow-400 rounded-2xl border-2 border-black flex items-center justify-center mb-6">
                  <Zap size={32} />
               </div>
               <h3 className="font-display text-3xl mb-4">Fast Paced</h3>
               <p className="font-bold text-slate-600">More goals than soccer. More contact than basketball. It's the adrenaline rush you've been missing.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] md:translate-y-0 z-10">
               <div className="w-16 h-16 bg-pink-400 rounded-2xl border-2 border-black flex items-center justify-center mb-6 text-white">
                  <Heart size={32} fill="currentColor" />
               </div>
               <h3 className="font-display text-3xl mb-4">Community First</h3>
               <p className="font-bold text-slate-600">We play hard, but we hang out harder. Post-game beers and weekend socials are mandatory.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:-translate-y-8 rotate-2">
               <div className="w-16 h-16 bg-emerald-500 rounded-2xl border-2 border-black flex items-center justify-center mb-6 text-white">
                  <Smile size={32} />
               </div>
               <h3 className="font-display text-3xl mb-4">All Welcome</h3>
               <p className="font-bold text-slate-600">Never played? Perfect. 90% of our club started as adults. We'll teach you everything.</p>
            </div>

         </div>
      </section>

      {/* --- SCHEDULE --- */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="relative">
               <h2 className="font-display text-6xl md:text-8xl uppercase relative z-10">The<br/>Weekly<br/>Grind</h2>
               <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-yellow-400 rounded-full z-0"></div>
            </div>
            <Sticker rotation="12deg" color="bg-white" className="mt-8 md:mt-0">
               Updated for Fall '25
            </Sticker>
         </div>

         <div className="space-y-6">
            {[
               { day: 'TUESDAY', time: '7:00 PM', loc: 'Loyal Heights', type: 'Social Scrimmage', color: 'bg-emerald-100' },
               { day: 'THURSDAY', time: '7:30 PM', loc: 'Green Lake', type: 'Team Training', color: 'bg-pink-100' },
               { day: 'SATURDAY', time: '10:00 AM', loc: 'Miller CC', type: 'Skills Clinic', color: 'bg-blue-100' },
            ].map((item, idx) => (
               <div key={idx} className={`group relative ${item.color} border-2 border-black p-6 md:p-8 rounded-2xl transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div className="flex items-center gap-4">
                        <div className="font-display text-4xl w-16">{idx + 1}</div>
                        <div>
                           <h3 className="font-black text-2xl uppercase">{item.day}</h3>
                           <div className="flex items-center gap-2 font-bold text-slate-600">
                              <Calendar size={16} /> {item.time}
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex flex-col md:items-end gap-1">
                        <span className="font-black text-xl uppercase tracking-wide">{item.type}</span>
                        <span className="flex items-center gap-2 font-bold text-slate-500 text-sm">
                           <MapPin size={14} /> {item.loc}
                        </span>
                     </div>

                     <button className="md:hidden bg-black text-white px-4 py-2 rounded-lg font-bold text-sm mt-4">Map</button>
                     
                     <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                        <div className="bg-black text-white p-3 rounded-full">
                           <ArrowRight />
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- MEMBERSHIP CTA --- */}
      <section className="bg-yellow-400 border-y-2 border-black py-24 px-4 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-10 -left-10 text-[20vw] font-display leading-none rotate-12">JOIN</div>
            <div className="absolute bottom-10 -right-10 text-[20vw] font-display leading-none -rotate-12">US</div>
         </div>

         <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 md:p-16 rounded-[3rem] text-center relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
               <Sticker rotation="-2deg" color="bg-pink-500 text-white">First Month Free</Sticker>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl mb-6 mt-4">READY TO PLAY?</h2>
            <p className="text-xl font-bold text-slate-600 mb-12 max-w-xl mx-auto">
               $40/month gets you unlimited practices, league games, and a pretty sweet jersey.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
               <button className="bg-black text-white px-8 py-4 rounded-xl font-black text-xl border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]">
                  Sign Up Now
               </button>
               <button className="bg-white text-black px-8 py-4 rounded-xl font-black text-xl border-2 border-black hover:bg-slate-50 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Drop In ($10)
               </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
               <h2 className="font-display text-6xl mb-6 text-emerald-400">SEATTLE HC</h2>
               <p className="font-bold text-gray-400 max-w-sm">
                  Building the future of handball in the Pacific Northwest, one jump shot at a time.
               </p>
            </div>
            <div>
               <h4 className="font-black uppercase mb-4 text-lg">Socials</h4>
               <ul className="space-y-2 font-bold text-gray-400">
                  <li className="hover:text-yellow-400 cursor-pointer">Instagram</li>
                  <li className="hover:text-yellow-400 cursor-pointer">Twitter</li>
                  <li className="hover:text-yellow-400 cursor-pointer">Facebook</li>
               </ul>
            </div>
            <div>
               <h4 className="font-black uppercase mb-4 text-lg">Contact</h4>
               <ul className="space-y-2 font-bold text-gray-400">
                  <li>hello@seattlehandball.com</li>
                  <li>Media Inquiries</li>
                  <li>Sponsorship</li>
               </ul>
            </div>
         </div>
         
         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center font-bold text-gray-500 text-sm">
            <div>© 2025 Seattle Handball Club.</div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
               Made with <Heart size={12} className="text-pink-500 fill-current" /> in Seattle
            </div>
         </div>
      </footer>

    </div>
  );
};

export default App;

