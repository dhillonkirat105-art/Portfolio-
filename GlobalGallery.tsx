
import React, { useEffect, useState } from 'react';
import { ProjectData } from './types';

interface GlobalGalleryProps {
  projects: ProjectData[];
  isOpen: boolean;
  onClose: () => void;
}

const GlobalGallery: React.FC<GlobalGalleryProps> = ({ projects, isOpen, onClose }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isOpen]);

  // Flatten all images including main ones (if string) and gallery images
  const allThumbnails = projects.flatMap(p => {
    const images = [];
    if (typeof p.mainImage === 'string') {
      images.push({ url: p.mainImage, label: `${p.category} (Main)`, category: p.category });
    }
    p.galleryImages.forEach(img => {
      images.push({ ...img, category: p.category });
    });
    return images;
  });

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-black transition-all duration-700 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="h-full w-full flex flex-col items-center overflow-y-auto px-6 py-20 scroll-smooth custom-scrollbar">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 px-4">
            <div className={`transition-all duration-700 ${shouldAnimate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-sky-400 text-[10px] font-black tracking-[0.5em] uppercase mb-2">The Complete Works</p>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                VISUAL <span className="text-sky-400">ARCHIVE</span>
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="mt-8 md:mt-0 flex items-center gap-4 group"
            >
              <span className="text-white/40 text-[9px] font-black tracking-widest uppercase group-hover:text-white transition-colors">Close Archive</span>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-sky-400 group-hover:text-black transition-all">
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>

          {/* Grid Layout with Staggered Animations */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-4 pb-40">
            {allThumbnails.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(item.url)}
                className={`relative group break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl hover:border-sky-400/50 transition-all duration-500 cursor-zoom-in ${
                  shouldAnimate ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${idx * 50}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <img 
                  src={item.url} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.label}
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-sky-400 text-[9px] font-black tracking-widest uppercase mb-1">{item.category}</p>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-16 animate-in fade-in duration-300 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-8 right-8 text-white/40 text-[10px] font-black tracking-widest uppercase flex items-center gap-3">
             Exit Viewer
             <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-sky-400 hover:text-black transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </div>
          </div>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 animate-in zoom-in-95 duration-500"
            alt="Enlarged Archive View"
          />
        </div>
      )}

      {/* Floating Return Button */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[210] transition-all duration-700 delay-500 ${shouldAnimate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
         <button 
           onClick={onClose}
           className="px-12 py-4 bg-sky-400 text-black font-black text-[10px] tracking-[0.4em] rounded-full uppercase shadow-[0_20px_40px_rgba(56,189,248,0.3)] active:scale-95 transition-all hover:bg-white hover:scale-105"
         >
           BACK TO HOME
         </button>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          display: block;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          margin: 10px 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0284c7; /* Darker blue (Sky-600) */
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          transition: background 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0369a1; /* Even darker blue (Sky-700) */
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default GlobalGallery;
