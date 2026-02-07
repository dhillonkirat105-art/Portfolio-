
import React from 'react';
import { CHANNEL_STATS } from '../constants.tsx';

const Stats: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="portrait-frame px-10 flex flex-col justify-center text-center">
        <h2 className="text-4xl font-black tracking-tighter mb-12">CHANNEL METRICS</h2>
        
        <div className="grid grid-cols-1 gap-10">
          {CHANNEL_STATS.map((stat, idx) => (
            <div key={idx} className="relative group">
              <p className="text-sky-400 text-[10px] font-black tracking-[0.4em] mb-2 uppercase">{stat.label}</p>
              <p className="text-7xl font-black tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</p>
              <div className="w-12 h-1 bg-sky-400 mx-auto mt-4" />
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 border border-sky-400/20 bg-sky-400/5 rounded-2xl">
           <p className="text-[10px] font-black text-sky-400 tracking-[0.2em] uppercase">Audience Retention</p>
           <p className="text-xs font-bold text-white/50 mt-2">Top 1% of Educational Channels worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
