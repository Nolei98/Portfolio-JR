import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { BackToTop } from './components/BackToTop';
import { LanguageProvider, useLang } from './LanguageContext';
import { i18n } from './data';

function AppContent() {
  const { lang } = useLang();
  const text = i18n[lang].footer;

  return (
    <>
      <div className="absolute top-[10%] right-0 w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] bg-[#E8A0BF] rounded-full blur-[120px] opacity-40 pointer-events-none -z-20 overflow-hidden" />
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 font-sans overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 px-6 border-t-4 border-brand-dark mt-12 bg-brand-dark text-brand-white text-center font-mono rounded-t-3xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-[12px] uppercase tracking-[0.2em] opacity-80 font-bold">
            {text.text1} <br className="hidden md:block"/>
            {'<dev>'} {text.text2}
          </p>
          <div className="w-12 h-12 rounded-2xl bg-brand-green border-2 border-brand-dark shadow-brutal flex items-center justify-center -rotate-12 mt-4 hover:rotate-12 transition-transform">
            <span className="text-brand-dark text-2xl font-bold font-display">!</span>
          </div>
        </div>
      </footer>
      <BackToTop />
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

