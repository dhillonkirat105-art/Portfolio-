
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="portrait-frame px-10 flex flex-col justify-center">
        <h2 className="text-5xl font-black tracking-tighter mb-4 leading-none uppercase">
          LET'S <br /><span className="text-sky-400 text-glow">COLLAB.</span>
        </h2>
        
        <p className="text-white/50 text-[10px] font-black tracking-[0.3em] uppercase mb-10">
          Contact: Eakamjeet Singh • <span className="text-sky-400">emzekulz1112@gmail.com</span>
        </p>

        <form className="space-y-6 mb-12" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              className="w-full bg-white/5 border-b border-white/20 px-4 py-4 focus:border-sky-400 outline-none font-bold text-[10px] tracking-widest placeholder:text-white/20 transition-all focus:bg-white/10"
            />
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-white/5 border-b border-white/20 px-4 py-4 focus:border-sky-400 outline-none font-bold text-[10px] tracking-widest placeholder:text-white/20 transition-all focus:bg-white/10"
            />
            <textarea 
              placeholder="THE PROJECT VISION" 
              rows={3}
              className="w-full bg-white/5 border-b border-white/20 px-4 py-4 focus:border-sky-400 outline-none font-bold text-[10px] tracking-widest placeholder:text-white/20 transition-all focus:bg-white/10 resize-none"
            />
          </div>
          
          <button className="w-full bg-white text-black py-6 font-black text-[12px] tracking-[0.4em] uppercase hover:bg-sky-400 transition-all hover:scale-[1.02] flex items-center justify-center gap-4 group shadow-xl">
            SEND MESSAGE
            <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>

        <div className="grid grid-cols-2 gap-4">
          <a 
            href="https://x.com/EkamSingh3468" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white/10 py-4 text-center text-[10px] font-black tracking-widest hover:border-sky-400 hover:text-sky-400 transition-all rounded-lg uppercase"
          >
            X (Twitter)
          </a>
          <a 
            href="https://www.instagram.com/ex_eakam?igsh=MWU3NGFiZXlrbG41cQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white/10 py-4 text-center text-[10px] font-black tracking-widest hover:border-sky-400 hover:text-sky-400 transition-all rounded-lg uppercase"
          >
            Instagram
          </a>
          <a 
            href="https://wa.me/917814652289" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white/10 py-4 text-center text-[10px] font-black tracking-widest bg-sky-400/10 text-sky-400 border-sky-400/50 hover:bg-sky-400 hover:text-black transition-all rounded-lg uppercase col-span-2 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.81 11.81 0 005.925 1.585h.005c6.637 0 12.032-5.396 12.035-12.03a11.82 11.82 0 00-3.517-8.503z"/>
            </svg>
            WhatsApp: +91 78146 52289
          </a>
          <a 
            href="mailto:emzekulz1112@gmail.com" 
            className="border border-white/10 py-4 text-center text-[10px] font-black tracking-widest hover:border-sky-400 hover:text-sky-400 transition-all rounded-lg uppercase col-span-2"
          >
            Email Me: emzekulz1112@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
