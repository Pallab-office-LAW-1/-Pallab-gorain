
import React, { useEffect, useRef, useState } from 'react';
import { skillsData } from '../constants/portfolioData';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-2">Legal Proficiency</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A visual representation of my core legal competencies developed through academic study and practical court experience.
          </p>
          <div className="inline-block w-20 h-1 bg-amber-500 rounded mt-2"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {skillsData.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-700 dark:text-slate-300">{item.skill}</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.level}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-amber-500 h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? item.level : '0%' }}
                  role="progressbar"
                  aria-valuenow={parseInt(item.level)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${item.skill} proficiency`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
