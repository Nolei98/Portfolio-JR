import { motion } from 'motion/react';
import { Gitlab, Linkedin, Mail, Instagram, ChevronDown } from 'lucide-react';
import { personalInfo, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Hero() {
  const { lang } = useLang();
  const text = i18n[lang].hero;

  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center relative pt-20">
      
      {/* Abstract pixel stairs */}
      <div className="absolute top-[15%] left-[5%] flex-col hidden md:flex -z-10 opacity-90">
        <div className="w-8 h-8 bg-brand-dark"></div>
        <div className="w-16 h-8 bg-brand-dark -mt-px"></div>
        <div className="w-24 h-8 bg-brand-dark -mt-px"></div>
      </div>
      
      {/* Abstract wavy line SVG */}
      <div className="absolute bottom-[20%] right-[5%] hidden md:block -z-10 opacity-50">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,75 Q50,0 100,75 T200,75" stroke="var(--color-brand-dark)" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 pt-10 mt-10 md:mt-0">
        <FadeIn delay={0.1}>
          <span className="inline-block bg-brand-dark text-brand-green px-4 py-1 border-2 border-brand-dark shadow-brutal text-[10px] font-bold uppercase tracking-[0.5em] font-mono mb-8 transform -rotate-2">
            {text.greeting}
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2} className="relative z-20 w-full">
          <h1 className="huge-text text-brand-dark relative block">
            {personalInfo.name}
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3} className="w-full relative z-10">
          <h2 className="huge-text text-outline mb-10 transform -rotate-1 flex justify-between w-full">
            {text.subtitle.split('').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <p className="max-w-xl text-lg md:text-xl font-medium text-brand-dark leading-relaxed mb-12 bg-brand-white p-6 border-2 border-brand-dark shadow-brutal rounded-2xl">
            {text.desc}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="flex flex-wrap items-center gap-8">
          <a
            href="#contact"
            className="px-8 py-4 bg-brand-accent text-brand-dark border-2 border-brand-dark font-bold font-mono text-[12px] uppercase tracking-widest shadow-brutal-hover rounded-2xl"
          >
            {text.contactBtn}
          </a>
          
          <div className="flex items-center gap-6">
            <a href={personalInfo.gitlab} target="_blank" rel="noreferrer" className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Gitlab className="w-6 h-6" />
              <span className="sr-only">GitLab</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </FadeIn>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 focus:outline-none focus:ring-4 focus:ring-brand-green rounded-full z-20">
        <motion.div 
          className="text-brand-dark p-2 bg-brand-green border-2 border-brand-dark shadow-brutal rounded-full cursor-pointer hover:bg-brand-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </a>
    </section>
  );
}
