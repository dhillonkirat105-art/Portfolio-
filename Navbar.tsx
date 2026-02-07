
import React from 'react';
import { SectionType } from '../types';

interface NavbarProps {
  activeSection: SectionType;
  onNavClick: (type: SectionType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick }) => {
  const isProjectActive = [
    SectionType.PROJECT1,
    SectionType.PROJECT2,
    SectionType.PROJECT3,
    SectionType.PROJECT4,
    SectionType.PROJECT5
  ].includes(activeSection);

  const isStrategyActive = [
    SectionType.ARTICLE1,
    SectionType.ARTICLE2,
    SectionType.ARTICLE3
  ].includes(activeSection);

  const navItems = [
    { label: 'HOME', type: SectionType.HOME },
    { label: 'WORK', type: SectionType.PROJECT1 },
    { label: 'STRATEGY', type: SectionType.ARTICLE1 },
    { label: 'CONTACT', type: SectionType.CONTACT },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full px-4 py-6 md:px-6 md:py-8 flex justify-center z-50">
      <div className="flex items-center gap-6 md:gap-8 bg-white/5 backdrop-blur-xl px-8 py-4 md:px-10 md:py-5 rounded-full border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          let isActive = false;
          if (item.label === 'WORK') isActive = isProjectActive;
          else if (item.label === 'STRATEGY') isActive = isStrategyActive;
          else isActive = activeSection === item.type;
          
          return (
            <button
              key={item.type}
              onClick={() => onNavClick(item.type)}
              className={`text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] transition-all duration-300 uppercase relative group ${
                isActive ? 'text-sky-400' : 'text-white/40 hover:text-white'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-400 animate-in fade-in duration-500" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
