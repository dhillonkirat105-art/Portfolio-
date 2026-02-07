
import React from 'react';

interface HeroProps {
  onHireMeClick?: () => void;
  onViewWorkClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHireMeClick, onViewWorkClick }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="portrait-frame flex flex-col justify-center px-10 text-center scale-90 md:scale-100 transition-transform">
        <div className="mb-6 flex flex-col items-center">
           {/* Enlarged Profile Photo */}
           <div className="w-36 h-36 mx-auto rounded-full border-2 border-sky-400 p-2 mb-8 overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.4)] bg-black">
              <img 
                src="https://i.ibb.co/zVhcWMg8/68747470733a2f2f6373352e70696b6162752e72752f696d616765732f70726576696577735f636f6d6d2f323031352d3132.jpg" 
                className="w-full h-full rounded-full object-cover transition-all duration-500 hover:scale-110"
                alt="Eakamjeet Singh Logo"
              />
           </div>
           
           {/* Enlarged Buttons Container */}
           <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
             <button 
               onClick={onHireMeClick}
               className="px-14 py-4.5 bg-sky-400 text-black text-[12px] font-black tracking-[0.4em] uppercase rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl active:scale-95 border-2 border-sky-400 hover:border-white w-full md:w-auto whitespace-nowrap"
             >
               HIRE ME
             </button>
             
             <button 
               onClick={onViewWorkClick}
               className="px-14 py-4.5 bg-transparent text-white text-[12px] font-black tracking-[0.4em] uppercase rounded-full hover:bg-sky-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl active:scale-95 border-2 border-white/20 hover:border-sky-400 w-full md:w-auto whitespace-nowrap"
             >
               VIEW ALL WORK
             </button>
           </div>

           <p className="text-sky-400 text-[9px] font-black tracking-[0.4em] uppercase mb-3">Official Creator Channel</p>
           <h1 className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-5">
             EAKAM<br />
             <span className="text-sky-400 text-glow">SINGH</span>
           </h1>
        </div>

        <div className="space-y-4 max-w-xs mx-auto">
          <p className="text-white/50 text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold">
            Redefining visual narrative through cinematic documentation.
          </p>
        </div>
      </div>

      {/* Smooth Rolling Text Animation at the bottom of hero */}
      <div className="absolute bottom-24 left-0 w-full overflow-hidden bg-white/5 py-3 border-y border-white/5">
        <div className="rolling-text flex gap-20">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-xl font-black tracking-tighter text-white/10 italic uppercase">
              EAKAMJEET SINGH • EMZEKULZ1112@GMAIL.COM • CREATOR • STORYTELLER • 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
