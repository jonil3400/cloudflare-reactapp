import React from 'react';
import {  Menu, X } from 'lucide-react';

interface NavigationItem {
  label: string;
  path: string;
}

export const Navigation: React.FC<{ 
  activeSection: string; 
  onSectionClick: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}> = ({ activeSection, onSectionClick, isMenuOpen, setIsMenuOpen }) => {
  const navigationItems: NavigationItem[] = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Projects', path: 'projects' },
    { label: 'Skills', path: 'skills' },
    { label: 'Contact', path: 'contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Jonil Mark</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onSectionClick(item.path)}
                className={`transition-colors duration-200 hover:text-blue-400 ${
                  activeSection === item.path ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onSectionClick(item.path)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};