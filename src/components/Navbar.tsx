import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../LanguageContext';
import { i18n } from '../data';
import { PdfViewer } from './PdfViewer';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  const text = i18n[lang].nav;
  const resumeUrl = lang === 'pt' ? '/Curriculo_Joao_Rodrigues_PT.pdf' : '/Resume_Joao_Rodrigues_EN.pdf';
  const resumeFileName = lang === 'pt' ? 'Curriculo_Joao_Rodrigues_PT.pdf' : 'Resume_Joao_Rodrigues_EN.pdf';

  const handleDownloadPDF = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResumeOpen(true);
  };

  useEffect(() => {
    if (!isResumeOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsResumeOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isResumeOpen]);

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
        <div className="relative z-[60] flex items-center gap-3 lg:hidden print-hide">
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

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-screen z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 24, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-4xl h-[88vh] bg-ink-panel border border-ink-line rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-ink-line bg-ink-panel-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-md bg-ink-accent/15 border border-ink-accent/40 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-ink-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-sm sm:text-base text-ink-text truncate">
                      {lang === 'pt' ? 'Currículo — João Rodrigues' : 'Resume — João Rodrigues'}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted truncate">{resumeFileName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={resumeUrl}
                    download={resumeFileName}
                    data-magnetic
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-ink-accent text-white rounded-md font-mono text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-ink-accent-deep transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{lang === 'pt' ? 'Baixar' : 'Download'}</span>
                  </a>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    aria-label="Close"
                    className="w-9 h-9 flex items-center justify-center border border-ink-line rounded-md text-ink-text hover:bg-ink-panel hover:border-ink-accent transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div key={resumeUrl} className="flex-1 min-h-0">
                <PdfViewer url={resumeUrl} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
