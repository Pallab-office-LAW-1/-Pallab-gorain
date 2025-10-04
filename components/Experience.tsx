
import React from 'react';
import { experienceData } from '../constants/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-2">Academic Journey & Court Practice</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A timeline of academic growth and practical legal experience.</p>
          <div className="inline-block w-20 h-1 bg-amber-500 rounded mt-2"></div>
        </div>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="absolute border-opacity-20 border-slate-700 dark:border-slate-500 h-full border" style={{left: '50%'}}></div>

          {experienceData.map((item, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div className="order-1 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">{item.year}</p>
                <h3 className="mb-3 font-bold text-slate-800 dark:text-slate-100 text-xl">{item.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;