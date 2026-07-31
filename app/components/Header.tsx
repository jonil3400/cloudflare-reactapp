import { motion } from 'motion/react';
import { Sun, Moon, FileText } from 'lucide-react';
import { useEffect } from 'react';

interface HeaderProps {
  activeTab: string;
  clickTab: (tab: string) => void;
  openResume: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ activeTab, clickTab, openResume, isDark, toggleTheme }: HeaderProps) {
  const navItems = [
    { id: 'home',path: '', label: 'Home' },
    { id: 'about',path: 'about', label: 'About' },
    { id: 'projects',path: 'projects', label: 'Projects' },
    { id: 'contact',path: 'contact', label: 'Contact' }
  ];



  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none w-full max-w-fit px-4">
      <nav 
        className="glass-panel rounded-full px-2 sm:px-3 py-1.5 flex items-center gap-1 sm:gap-2 shadow-lg shadow-[#9F7B42]/5 backdrop-blur-md pointer-events-auto"
        id="centered-floating-nav"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => clickTab(item.path)}
            className={`relative px-4 py-1.5 font-sans text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-250 cursor-pointer rounded-full ${
              activeTab === item.id
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            id={`nav-item-${item.id}`}
          >
            <span className="relative z-10">{item.label}</span>
            {activeTab === item.id && (
              <motion.span
                layoutId="activeTabBubble"
                className="absolute inset-0 bg-primary/10 rounded-full border border-primary/15"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}

        {/* Resume Button */}
        <button
          onClick={openResume}
          className="px-3.5 py-1.5 font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer rounded-full text-on-surface-variant hover:text-on-surface hover:bg-primary/5 flex items-center gap-1.5"
          id="nav-item-resume"
        >
          <FileText size={14} className="text-primary" />
          <span>Resume</span>
        </button>

        {/* Divider and Theme Toggle */}
        <div className="w-[1px] h-4 bg-outline-variant/40 mx-1 sm:mx-1.5 self-center" />
        <button
          onClick={toggleTheme}
          className="p-1.5 sm:p-2 text-on-surface-variant hover:text-on-surface transition-colors duration-200 rounded-full relative cursor-pointer flex items-center justify-center"
          aria-label="Toggle Theme"
          id="theme-toggle"
        >
          {isDark ? (
            <Sun size={15} className="text-primary hover:rotate-45 transition-transform duration-300" />
          ) : (
            <Moon size={15} className="text-on-surface-variant hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>
      </nav>
    </header>
  );
}
