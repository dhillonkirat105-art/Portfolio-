
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import ProjectSection from './components/Projects';
import Article from './components/Article';
import GlobalGallery from './components/GlobalGallery';
import { SectionType } from './types';
import { PROJECTS_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.HOME);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((type: SectionType) => {
    const sectionsList = [
      SectionType.HOME,
      SectionType.PROJECT1,
      SectionType.PROJECT2,
      SectionType.PROJECT3,
      SectionType.PROJECT4,
      SectionType.PROJECT5,
      SectionType.ARTICLE1,
      SectionType.ARTICLE2,
      SectionType.ARTICLE3,
      SectionType.CONTACT
    ];
    const index = sectionsList.indexOf(type);
    if (scrollContainerRef.current && index !== -1) {
      scrollContainerRef.current.scrollTo({
        top: window.innerHeight * index,
        behavior: 'smooth'
      });
      setActiveSection(type);
    }
  }, []);

  const sections = [
    { 
      type: SectionType.HOME, 
      component: (
        <Hero 
          onHireMeClick={() => scrollToSection(SectionType.CONTACT)} 
          onViewWorkClick={() => setIsArchiveOpen(true)}
        />
      )
    },
    ...PROJECTS_DATA.map((p, i) => ({
      type: SectionType[`PROJECT${i + 1}` as keyof typeof SectionType],
      component: (
        <ProjectSection 
          number={p.number}
          category={p.category}
          mainImage={p.mainImage}
          description={p.description}
          galleryImages={p.galleryImages}
        />
      )
    })),
    {
      type: SectionType.ARTICLE1,
      component: (
        <Article 
          tag="STRATEGY 01"
          title="THE POWER OF THE FIRST CLICK"
          subtitle="Why your thumbnail is 90% of your content's success."
          content={[
            "In the digital landscape, a thumbnail is more than just a picture; it is the entry point to your narrative. It is the visual handshake that determines whether a viewer stays or scrolls.",
            "Great thumbnails bridge the gap between curiosity and commitment. By utilizing psychological triggers and high-contrast visuals, we ensure your content stands out in a crowded feed."
          ]}
          highlight="A thumbnail isn't just an asset—it's a promise of the value waiting inside."
        />
      )
    },
    {
      type: SectionType.ARTICLE2,
      component: (
        <Article 
          tag="QUALITY 02"
          title="HIGH DEFINITION IMPACT"
          subtitle="Precision engineering for the modern viewer."
          content={[
            "We specialize in high-fidelity designs that maintain clarity on every device. From mobile screens to 4K displays, every pixel is placed with intentionality.",
            "Our mastery of color theory and subject isolation creates a depth of field that demands attention, turning simple concepts into cinematic masterpieces."
          ]}
          highlight="We design for the split-second decision that defines modern digital consumption."
        />
      )
    },
    {
      type: SectionType.ARTICLE3,
      component: (
        <Article 
          tag="DELIVERY 03"
          title="RAPID PRECISION SCALE"
          subtitle="World-class quality at an accessible pace."
          content={[
            "Consistency is the engine of growth. Our workflow is optimized for rapid iteration without sacrificing a single detail of the creative vision.",
            "We offer a 24-hour turnaround on flagship designs, ensuring that your upload schedule never waits on production. Premium quality, delivered at the speed of the internet."
          ]}
          highlight="Your growth shouldn't be limited by production bottlenecks. We scale with you."
        />
      )
    },
    { 
      type: SectionType.CONTACT, 
      component: <Contact /> 
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const index = Math.round(scrollPosition / window.innerHeight);
      if (sections[index]) {
        setActiveSection(sections[index].type);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden select-none">
      {/* Background Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      {/* Vertical Scroller */}
      <div 
        ref={scrollContainerRef}
        className="snap-container z-10 relative"
      >
        {sections.map((section) => (
          <div 
            key={section.type}
            className="snap-section"
          >
            {section.component}
          </div>
        ))}
      </div>

      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />

      {/* Vertical progress bar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {sections.map((section) => (
          <div 
            key={section.type}
            className={`w-1 transition-all duration-500 rounded-full ${
              activeSection === section.type ? 'h-12 bg-sky-400' : 'h-3 bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Global Archive Overlay (The "Other Page") */}
      <GlobalGallery 
        projects={PROJECTS_DATA} 
        isOpen={isArchiveOpen} 
        onClose={() => setIsArchiveOpen(false)} 
      />
    </div>
  );
};

export default App;
