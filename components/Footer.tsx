
import React from 'react';
import { footerData, navLinks, contactInfo } from '../constants/portfolioData';
import { ExternalLinkIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Tagline */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-serif text-amber-600 dark:text-amber-400 mb-2">{footerData.brand}</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">{footerData.tagline}</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(1).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
             <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>Purulia Court</li>
                <li>Purulia, West Bengal</li>
                <li className="pt-2"><a href={`mailto:${contactInfo.email}`} className="hover:text-amber-500 transition-colors">{contactInfo.email}</a></li>
             </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-500 dark:text-slate-400">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
