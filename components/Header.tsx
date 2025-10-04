
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { navLinks, footerData } from '../constants/portfolioData';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-serif text-amber-600 dark:text-amber-400">{footerData.brand}</a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">{link.name}</a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-300">
                {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full right-0 w-64 bg-white dark:bg-slate-800 shadow-lg rounded-b-lg p-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={closeMenu} className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-2 text-center">{link.name}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
