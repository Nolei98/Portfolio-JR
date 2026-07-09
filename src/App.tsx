import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Stack } from './components/Stack';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { LanguageProvider, useLang } from './LanguageContext';
import { ScrollFX } from './components/ScrollFX';
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
      <ScrollFX />
      <Navbar />
      <div id="portfolio-main">
        <main className="font-sans print:px-0">
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Work />
          <Stack />
          <Contact />
        </main>
        <footer className="print-hide py-10 px-4 md:px-6 border-t border-ink-line bg-ink-bg text-ink-muted text-center font-mono">
          <p className="text-[11px] uppercase tracking-[0.04em]">{text.text1} · {text.text2}</p>
        </footer>
      </div>
      
      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: -12 }}
            exit={{ opacity: 0, y: 50, rotate: -12 }}
            className="fixed bottom-4 right-2 md:bottom-8 md:right-8 z-50 rounded-lg md:rounded-2xl print-hide"
          >
            <button
              onClick={scrollToTop}
              className="group w-10 h-10 md:w-14 md:h-14 rounded-full bg-ink-accent flex items-center justify-center hover:bg-ink-accent-deep hover:-translate-y-1 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
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

