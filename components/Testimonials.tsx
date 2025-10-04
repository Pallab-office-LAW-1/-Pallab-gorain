
import React from 'react';
import { testimonialsData } from '../constants/portfolioData';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-2">Academic & Professional References</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">What mentors and colleagues say about my dedication to legal studies.</p>
          <div className="inline-block w-20 h-1 bg-amber-500 rounded mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col">
              <p className="text-slate-600 dark:text-slate-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-600 dark:text-amber-400">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;