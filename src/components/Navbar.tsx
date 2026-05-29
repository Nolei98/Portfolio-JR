import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../LanguageContext';
import { i18n } from '../data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  
  const text = i18n[lang].nav;

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold text-brand-dark font-display tracking-tighter transform transition-transform cursor-pointer hover:text-brand-green">
          {'<dev>'}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ol className="flex items-center gap-8 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark">
            {navLinks.map((link) => (
               <li key={link.name}>
                 <a href={link.href} className="flex items-center group">
                   <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-green mr-1 font-bold">{'>'}</span>
                   <span className="hover:line-through transition-all">{link.name}</span>
                 </a>
               </li>
            ))}
          </ol>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang} 
              className="px-3 py-1 font-mono text-sm font-bold border-2 border-brand-dark shadow-[2px_2px_0_#111] hover:shadow-[4px_4px_0_#111] transition-all bg-brand-white rounded-lg flex items-center gap-2"
              aria-label="Toggle language"
            >
              {lang === 'en' ? '🇬🇧 EN' : '🇧🇷 PT'}
            </button>
            <a fill="true" href="/resume.pdf" target="_blank" className="px-6 py-2 bg-brand-green border-2 border-brand-dark text-brand-dark font-bold font-mono text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#111] hover:shadow-[0_0_0_#111] transition-all rounded-xl hover:-translate-y-0.5">
              {text.resume}
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLang} 
              className="px-2 py-1 font-mono text-xs font-bold border-2 border-brand-dark bg-brand-white rounded-lg"
            >
              {lang === 'en' ? 'EN' : 'PT'}
            </button>
            <button 
            className="md:hidden text-brand-dark hover:text-brand-green z-50 relative p-2 bg-brand-white border-2 border-brand-dark shadow-brutal rounded-xl"
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
                  className="font-display font-bold text-3xl text-brand-dark uppercase tracking-widest hover:line-through transition-all hover:text-brand-green hover:shadow-[0_0_0_10px_brand-dark] rounded-lg p-2"
                >
                  <span className="block text-center text-brand-green font-bold mb-1 text-sm font-mono border-2 border-brand-dark bg-brand-dark p-1 rounded-xl">0{i + 1} //</span>
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="mt-8 px-10 py-4 bg-brand-green border-2 border-brand-dark text-brand-dark font-bold font-mono text-sm uppercase tracking-widest shadow-brutal-hover"
              >
                {text.resume}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
