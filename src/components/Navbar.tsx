import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../LanguageContext';
import { i18n } from '../data';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const { lang, toggleLang } = useLang();

  const text = i18n[lang].nav;

  const handleDownloadPDF = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (window.self !== window.top) {
        setShowPrintModal(true);
      } else {
        window.print();
      }
    } catch {
      window.print();
    }
  };

  const navLinks = [
    { name: text.skills, href: '#stack' },
    { name: text.projects, href: '#work' },
    { name: text.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink-bg/78 backdrop-blur-md border-b border-ink-line print:static print:bg-transparent print:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#home" className="font-mono font-bold text-xl md:text-2xl tracking-tight text-ink-text relative select-none">
          &lt;d<span className="relative inline-block">ev<span className="absolute bottom-full translate-y-[9px] left-1/2 -translate-x-1/2 text-[9px] text-ink-accent normal-case tracking-normal font-sans italic leading-none">Nolei</span></span>&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ol className="flex items-center gap-7 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="pb-[3px] border-b-[1.5px] border-transparent hover:text-ink-text hover:border-ink-accent transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <div className="flex items-center gap-3 print-hide">
            <button
              onClick={toggleLang}
              className="cursor-pointer flex items-center gap-2 px-3 py-2 font-mono text-xs font-bold text-ink-text bg-transparent border border-ink-line rounded-md hover:border-ink-accent transition-colors"
              aria-label="Toggle language"
            >
              <img
                src={lang === 'en' ? "https://api.iconify.design/flag:br-4x3.svg" : "https://api.iconify.design/flag:us-4x3.svg"}
                alt={lang === 'en' ? "BR Flag" : "US Flag"}
                className="w-4 h-auto rounded-[2px]"
              />
              {lang === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={handleDownloadPDF}
              data-magnetic
              className="cursor-pointer flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white bg-ink-accent rounded-md hover:bg-ink-accent-deep transition-colors"
            >
              ↓ {text.resume}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden print-hide">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-2 py-1.5 font-mono text-xs font-bold text-ink-text border border-ink-line rounded-md"
          >
            <img
              src={lang === 'en' ? "https://api.iconify.design/flag:br-4x3.svg" : "https://api.iconify.design/flag:us-4x3.svg"}
              alt={lang === 'en' ? "BR Flag" : "US Flag"}
              className="w-4 h-auto rounded-[2px]"
            />
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            className="text-ink-text p-2 border border-ink-line rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-ink-bg h-screen w-screen z-40 flex flex-col items-center justify-center border-l border-ink-line"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-bold text-3xl text-ink-text uppercase tracking-widest hover:text-ink-accent transition-colors"
                >
                  <span className="block text-center text-ink-accent font-bold mb-1 text-sm font-mono">0{i + 1} //</span>
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleDownloadPDF(e);
                }}
                className="mt-8 px-10 py-4 bg-ink-accent text-white font-bold font-mono text-sm uppercase tracking-widest rounded-md cursor-pointer"
              >
                {text.resume}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPrintModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-ink-panel border border-ink-line rounded-2xl p-6 md:p-8 max-w-sm w-full text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-ink-accent flex items-center justify-center mb-6 -rotate-6">
                <span className="text-white text-3xl font-bold font-display">!</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-ink-text mb-4">
                {lang === 'en' ? 'Open in New Tab' : 'Ação Necessária'}
              </h3>
              <p className="font-sans text-ink-muted mb-8">
                {lang === 'en'
                  ? 'To generate a perfect PDF without visual glitches, please open this app in a new tab (using the button in the top right of the preview) and click Download again.'
                  : 'Para gerar um PDF perfeito e sem falhas visuais, abra este projeto em uma Nova Aba (através do botão no canto superior direito do preview) e clique em baixar novamente.'}
              </p>
              <button
                onClick={() => setShowPrintModal(false)}
                className="px-6 py-4 bg-ink-accent text-white font-bold font-mono text-sm uppercase tracking-widest rounded-md w-full cursor-pointer"
              >
                {lang === 'en' ? 'Understood' : 'Entendi'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
