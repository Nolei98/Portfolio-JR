import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import LeftScrollbar from './components/LeftScrollbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { LanguageProvider, useLang } from './LanguageContext';
import { i18n } from './data';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

function AppContent() {
  const { lang } = useLang();
  const text = i18n[lang].footer;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <LeftScrollbar />
      <Navbar />
      <div id="portfolio-main">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 md:pt-24 font-sans">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="print-hide py-12 px-6 border-t-4 border-brand-dark mt-12 bg-brand-dark text-brand-white text-center font-mono rounded-t-3xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-[12px] uppercase tracking-[0.2em] opacity-90 font-bold italic">
            João Rodrigues <br className="hidden md:block"/>
            « Innovate today, build the future »
          </p>
          <div className="mt-2 text-brand-white font-bold text-lg font-display tracking-widest relative select-none">
            &lt;d<span className="relative inline-block">ev<span className="absolute bottom-full translate-y-[10px] left-1/2 -translate-x-1/2 text-[10px] text-brand-accent normal-case tracking-normal font-sans leading-none italic">Nolei</span></span>&gt;
          </div>
        </div>
      </footer>
      </div>
      
      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: -12 }}
            exit={{ opacity: 0, y: 50, rotate: -12 }}
            className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 rounded-2xl print-hide"
          >
            <button 
              onClick={scrollToTop}
              className="group w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-orange-neon border-2 border-brand-dark shadow-[4px_4px_0_var(--color-brand-accent)] flex items-center justify-center hover:rotate-12 hover:-translate-y-2 hover:shadow-[6px_6px_0_var(--color-brand-accent)] active:translate-y-1 active:shadow-[2px_2px_0_var(--color-brand-accent)] transition-all duration-300 custom-focus"
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6 md:w-7 md:h-7 text-brand-dark group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

