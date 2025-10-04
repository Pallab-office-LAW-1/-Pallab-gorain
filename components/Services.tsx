
import React from 'react';
import { servicesData } from '../constants/portfolioData';
import { LawIcon } from './icons';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-2">Areas of Legal Interest</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Wide-ranging legal interests with special focus on practical litigation and constitutional law.</p>
          <div className="inline-block w-20 h-1 bg-amber-500 rounded mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <LawIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
