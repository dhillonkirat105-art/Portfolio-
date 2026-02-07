
import React, { useState } from 'react';

interface GalleryImage {
  url: string;
  label: string;
}

interface ProjectSectionProps {
  number: string;
  category: string;
  mainImage: string | string[];
  description: string;
  galleryImages: GalleryImage[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ 
  number, 
  category, 
  mainImage, 
  description, 
  galleryImages 
}) => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const renderMainImage = () => {
    if (Array.isArray(mainImage)) {
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full">
          {mainImage.slice(0, 4).map((img, i) => (
            <img 
              key={i}
              src={img} 
              className="w-full h-full object-cover scale-[1.05] transition-transform duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-100"
              alt={`Project ${number} Collage ${i}`}
            />
          ))}
        </div>
      );
    }
    return (
      <img 
        src={mainImage} 
        className="w-full h-full object-cover scale-[1.05] transition-transform duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-100"
        alt={`Project ${number} Main`}
      />
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Main Project Container */}
      <div className="w-full max-w-4xl px-6 flex flex-col justify-center animate-in fade-in slide-in-from-bottom-2 duration-700">
        <div className="mb-4">
          <p className="text-sky-400 text-[9px] font-black tracking-[0.4em] uppercase mb-1">{category}</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-white">
            PROJECT <span className="text-sky-400">{number}</span>
          </h2>
        </div>

        {/* Scaled Main Cover / Collage */}
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 mb-6 group cursor-pointer shadow-[0_0_40px_rgba(56,189,248,0.06)] bg-zinc-900">
          {renderMainImage()}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-40" />
          
          <div className="absolute bottom-4 left-4">
             <span className="bg-sky-400 text-black px-2.5 py-0.5 rounded-full text-[8px] font-black tracking-widest uppercase shadow-lg">Featured Content</span>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-8 max-w-xl">
          <p className="text-white/60 text-[12px] md:text-sm font-medium leading-relaxed uppercase tracking-wider">
            {description}
          </p>
        </div>

        {galleryImages.length > 0 ? (
          <button 
            onClick={() => setShowGallery(true)}
            className="w-full bg-white text-black py-5 px-10 font-black text-[11px] tracking-[0.3em] uppercase transition-all duration-300 flex items-center justify-center gap-4 group rounded-xl shadow-lg active:scale-[0.98] hover:bg-sky-400 hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.3)]"
          >
            EXPLORE THE ARCHIVE
            <div className="flex items-center">
              <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        ) : (
          <div className="w-full py-4 border border-white/5 rounded-xl text-center">
            <p className="text-white/20 text-[9px] font-black tracking-[0.2em] uppercase">Visual series complete</p>
          </div>
        )}
      </div>

      {/* Explore More Overlay Page */}
      <div 
        className={`fixed inset-0 z-[100] bg-black transition-all duration-700 ease-in-out ${
          showGallery ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full w-full flex flex-col items-center overflow-y-auto px-6 py-10 scroll-smooth custom-scrollbar">
          <div className="w-full max-w-4xl">
            <div className={`flex justify-between items-center mb-10 px-2 transition-all duration-700 ${showGallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div>
                <p className="text-sky-400 text-[9px] font-black tracking-[0.4em] uppercase mb-1">Visual Collection</p>
                <h3 className="text-3xl font-black tracking-tighter text-white uppercase">THUMBNAIL GALLERY</h3>
              </div>
              <button 
                onClick={() => setShowGallery(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-sky-400 hover:text-black transition-all group"
              >
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-12 pb-32 px-2">
              {galleryImages.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(item.url)}
                  className={`relative group opacity-0 cursor-zoom-in ${showGallery ? 'animate-fadeInUp' : ''}`}
                  style={{ 
                    animationDelay: `${idx * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                   <div className="mb-3 flex justify-between items-end">
                      <p className="text-sky-400 text-[10px] font-black tracking-[0.2em] uppercase">{item.label}</p>
                      <div className="h-px bg-sky-400/20 flex-grow mx-4 mb-1"></div>
                      <span className="text-white/10 text-base font-black italic">0{idx + 1}</span>
                   </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 shadow-xl bg-zinc-900">
                    <img 
                      src={item.url} 
                      className="w-full h-full object-cover scale-[1.05] transition-all duration-700 group-hover:scale-100"
                      alt={item.label}
                    />
                    <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/5 transition-all pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Back Button */}
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] transition-all duration-700 ${showGallery ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
           <button 
             onClick={() => setShowGallery(false)}
             className="px-8 py-3.5 bg-sky-400 text-black font-black text-[9px] tracking-widest rounded-full uppercase shadow-xl shadow-sky-400/20 active:scale-95 transition-all hover:bg-white hover:scale-105"
           >
             Return to Portfolio
           </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-8 right-8 text-white/40 text-[10px] font-black tracking-widest uppercase flex items-center gap-3">
             Click anywhere to close
             <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </div>
          </div>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500"
            alt="Enlarged view"
          />
        </div>
      )}
      
      <style>{`
        @keyframes fadeInUpProject {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeInUp {
          animation: fadeInUpProject 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #38bdf8;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ProjectSection;
