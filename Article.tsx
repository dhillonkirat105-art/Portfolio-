
import React from 'react';

interface ArticleProps {
  tag: string;
  title: string;
  subtitle: string;
  content: string[];
  highlight?: string;
}

const Article: React.FC<ArticleProps> = ({ tag, title, subtitle, content, highlight }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black px-6 py-20 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.03),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-2xl flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Editorial Header */}
        <header className="mb-16 border-l-2 border-sky-400 pl-8">
          <p className="text-sky-400 text-[10px] font-black tracking-[0.4em] uppercase mb-4">
            {tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-white uppercase mb-4">
            {title}
          </h2>
          <p className="text-white/40 text-xs md:text-sm font-medium tracking-[0.1em] uppercase leading-relaxed">
            {subtitle}
          </p>
        </header>

        {/* Minimalist Body Content */}
        <div className="space-y-10">
          {content.map((para, i) => (
            <p 
              key={i} 
              className="text-white/80 text-base md:text-lg leading-relaxed font-medium transition-colors hover:text-white duration-500"
            >
              {para}
            </p>
          ))}
          
          {highlight && (
            <div className="mt-20 relative">
              <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10" />
              <span className="text-sky-400 text-[9px] font-black tracking-[0.3em] uppercase mb-6 block">
                Insight
              </span>
              <blockquote className="text-white text-2xl md:text-3xl font-black tracking-tight leading-snug uppercase italic">
                "{highlight}"
              </blockquote>
            </div>
          )}
        </div>

        {/* Footer Accent */}
        <footer className="mt-24 flex items-center gap-4 opacity-20">
          <div className="h-[1px] w-12 bg-white" />
          <div className="w-2 h-2 rounded-full border border-white" />
          <div className="h-[1px] flex-grow bg-white/20" />
        </footer>
      </div>
    </div>
  );
};

export default Article;
