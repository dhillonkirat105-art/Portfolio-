
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="portrait-frame px-10 flex flex-col justify-center">
        <h2 className="text-4xl font-black tracking-tighter mb-8 leading-none border-l-4 border-sky-400 pl-6">
          THE <span className="text-sky-400">VISION</span><br />BEHIND THE LENS.
        </h2>
        
        <div className="space-y-6 text-white/70 text-sm leading-loose font-bold uppercase tracking-wide mb-8">
          <p>
            I am Eakamjeet Singh, a creator dedicated to bridging the gap between high-end visual aesthetics and engaging digital content.
          </p>
          <p>
            My mission is to inspire my audience by pushing the boundaries of storytelling and delivering content that resonates on a deeper level.
          </p>
        </div>

        {/* Integrated Metric */}
        <div className="mb-10 p-5 border border-sky-400/20 bg-sky-400/5 rounded-2xl">
           <p className="text-[9px] font-black text-sky-400 tracking-[0.2em] uppercase">Audience Retention</p>
           <p className="text-[11px] font-bold text-white/50 mt-1 uppercase tracking-wider">Top 1% of Educational Channels worldwide.</p>
        </div>

        <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/visuals/800/1000" 
            alt="Studio Setup" 
            className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="text-center">
               <p className="text-5xl font-black text-white tracking-tighter">4K</p>
               <p className="text-[9px] text-sky-400 font-black tracking-widest uppercase mt-1">Eakamjeet Singh Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
