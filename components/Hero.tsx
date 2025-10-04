
import React from 'react';
import { heroData } from '../constants/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5" style={{backgroundImage: `url(${heroData.heroImage})`}}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent dark:from-slate-900 dark:via-slate-900/50 dark:to-transparent"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="relative inline-block mb-8">
            <img src={heroData.badgeImage} alt="Advocate Pallab Kumar Gorain" className="w-40 h-40 rounded-full object-cover shadow-2xl"/>
            <div className="absolute inset-0 rounded-full animate-spin-slow" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'16\' fill=\'transparent\'%3E%3CtextPath href=\'%23textcircle\' startOffset=\'50%25\'%3E Advocate Pallab Kumar Gorain • %3C/textPath%3E%3C/text%3E%3Cdefs%3E%3Cpath id=\'textcircle\' d=\'M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0\' fill=\'none\'/%3E%3C/defs%3E%3C/svg%3E")'
            }}>
                {/* This div uses an SVG data URL to create rotating text. The actual text is for screen readers. */}
                <span className="sr-only">Advocate Pallab Kumar Gorain</span>
            </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {heroData.name}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 mb-6">
          {heroData.title}
        </p>
        <p className="text-md md:text-lg max-w-2xl mx-auto text-slate-500 dark:text-slate-400 italic mb-8">
          {heroData.quote}
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#contact" className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:bg-amber-700 transform hover:scale-105 transition-all duration-300">
            {heroData.cta1}
          </a>
          <a href="/resume.pdf" download className="px-8 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-full shadow-lg hover:bg-slate-300 dark:hover:bg-slate-600 transform hover:scale-105 transition-all duration-300">
            {heroData.cta2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;