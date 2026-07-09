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
          <p className="text-[11px] uppercase tracking-[0.04em] text-center">{text.text1} · {text.text2}</p>
        </footer>
      </div>
      
      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-2 md:bottom-8 md:right-8 z-50 print-hide"
          >
            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              animate="rest"
              className="relative w-11 h-11 md:w-14 md:h-14 rounded-xl border border-ink-accent/40 bg-ink-accent/10 backdrop-blur-md shadow-xl overflow-hidden"
              style={{ perspective: 400 }}
            >
              {/* lid that peels open on hover, revealing the page behind it */}
              <motion.span
                aria-hidden
                variants={{ rest: { rotateX: 0, opacity: 0.85 }, hover: { rotateX: 70, opacity: 0.15 } }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="absolute inset-0 rounded-xl bg-ink-accent origin-top"
                style={{ transformStyle: 'preserve-3d' }}
              />
              {/* arrow, poking up through the opening lid */}
              <motion.span
                variants={{ rest: { y: 1 }, hover: { y: -4 } }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="relative flex items-center justify-center w-full h-full"
              >
                <ArrowUp className="w-4 h-4 md:w-6 md:h-6 text-white drop-shadow" />
              </motion.span>
            </motion.button>
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

