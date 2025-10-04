
import React from 'react';
import { aboutData } from '../constants/portfolioData';
import { LawIcon } from './icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-2">{aboutData.title}</h2>
          <div className="inline-block w-20 h-1 bg-amber-500 rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <img src={aboutData.aboutImage} alt="Pallab Kumar Gorain" className="rounded-lg shadow-2xl w-full" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-amber-500 rounded-lg -z-10"></div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-serif font-semibold mb-4 flex items-center gap-3">
              <LawIcon className="w-8 h-8 text-amber-500" />
              {aboutData.subtitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
