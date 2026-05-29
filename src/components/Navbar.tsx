import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../LanguageContext';
import { i18n } from '../data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: text.about, href: '#about' },
    { name: text.skills, href: '#skills' },
    { name: text.experience, href: '#experience' },
    { name: text.projects, href: '#projects' },
    { name: text.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-light/95 backdrop-blur-md border-b-4 border-brand-dark py-4 shadow-[0_4px_0_#111]' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold text-brand-dark font-display tracking-tighter transform transition-transform cursor-pointer hover:text-brand-green relative select-none">
          &lt;d<span className="relative inline-block">ev<span className="absolute bottom-full translate-y-[9px] md:translate-y-[11px] left-1/2 -translate-x-1/2 text-[10px] text-brand-accent normal-case tracking-normal font-sans leading-none italic">Nolei</span></span>&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ol className="flex items-center gap-6 xl:gap-8 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark">
            {navLinks.map((link) => (
               <li key={link.name}>
                 <a href={link.href} className="flex items-center group">
                   <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-green mr-1 font-bold">{'>'}</span>
                   <span className="underline underline-offset-4 decoration-2 hover:line-through transition-all">{link.name}</span>
                 </a>
               </li>
            ))}
          </ol>
          <div className="flex items-center gap-4 print-hide">
            <button 
              onClick={toggleLang} 
              className="px-3 py-1 font-mono text-sm font-bold border-2 border-brand-dark shadow-[2px_2px_0_#111] hover:shadow-[4px_4px_0_#111] transition-all bg-brand-white rounded-lg flex items-center gap-2 focus:outline-none outline-none"
              aria-label="Toggle language"
            >
              {lang === 'en' ? '🇬🇧 EN' : '🇧🇷 PT'}
            </button>
            <button onClick={handleDownloadPDF} className="px-6 py-2 bg-brand-accent border-2 border-brand-dark text-brand-dark font-bold font-mono text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#111] hover:shadow-[0_0_0_#111] transition-all rounded-xl hover:-translate-y-0.5 focus:outline-none cursor-pointer">
              {text.resume}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden print-hide">
            <button 
              onClick={toggleLang} 
              className="px-2 py-1 font-mono text-xs font-bold border-2 border-brand-dark bg-brand-white rounded-lg focus:outline-none outline-none"
            >
              {lang === 'en' ? 'EN' : 'PT'}
            </button>
            <button 
            className="lg:hidden text-brand-dark hover:text-brand-green z-50 relative p-2 bg-brand-white border-2 border-brand-dark shadow-brutal rounded-xl focus:outline-none outline-none"
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
            className="fixed inset-0 bg-brand-light h-screen w-screen z-40 flex flex-col items-center justify-center border-l-4 border-brand-dark"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-bold text-3xl text-brand-dark uppercase tracking-widest underline underline-offset-4 decoration-4 hover:line-through transition-all hover:text-brand-green hover:shadow-[0_0_0_10px_brand-dark] rounded-lg p-2"
                >
                  <span className="block text-center text-brand-green font-bold mb-1 text-sm font-mono border-2 border-brand-dark bg-brand-dark p-1 rounded-xl">0{i + 1} //</span>
                  {link.name}
                </a>
              ))}
              <button 
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleDownloadPDF(e);
                }}
                className="mt-8 px-10 py-4 bg-brand-accent border-2 border-brand-dark text-brand-dark font-bold font-mono text-sm uppercase tracking-widest shadow-brutal-hover cursor-pointer"
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-white border-4 border-brand-dark rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-brutal text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-accent border-2 border-brand-dark shadow-[4px_4px_0_var(--color-brand-dark)] flex items-center justify-center mb-6 -rotate-6">
                <span className="text-brand-dark text-3xl font-bold font-display">!</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-dark mb-4">
                {lang === 'en' ? 'Open in New Tab' : 'Ação Necessária'}
              </h3>
              <p className="font-sans text-brand-dark mb-8 font-medium">
                {lang === 'en' 
                  ? 'To generate a perfect PDF without visual glitches, please open this app in a new tab (using the button in the top right of the preview) and click Download again.' 
                  : 'Para gerar um PDF perfeito e sem falhas visuais, abra este projeto em uma Nova Aba (através do botão no canto superior direito do preview) e clique em baixar novamente.'}
              </p>
              <button 
                onClick={() => setShowPrintModal(false)}
                className="px-6 py-4 bg-brand-green border-2 border-brand-dark text-brand-dark font-bold font-mono text-sm uppercase tracking-widest shadow-brutal-hover rounded-xl w-full"
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
