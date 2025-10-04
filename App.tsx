
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
// FIX: Imported the Skills component to be rendered in the main app layout.
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        {/* FIX: Rendered the Skills component to display the legal proficiency section. */}
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;