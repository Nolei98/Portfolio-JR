import { motion } from 'motion/react';
import { Gitlab, Linkedin, Mail, Instagram, ChevronDown, Github, Phone } from 'lucide-react';
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
        <div className="w-8 h-8 bg-brand-accent"></div>
        <div className="w-16 h-8 bg-brand-accent -mt-px"></div>
        <div className="w-24 h-8 bg-brand-accent -mt-px"></div>
      </div>
      
      {/* Abstract wavy line SVG */}
      <motion.div 
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[5%] hidden md:block -z-10 opacity-50"
      >
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,75 Q50,0 100,75 T200,75" stroke="var(--color-brand-dark)" strokeWidth="3" fill="none" />
        </svg>
      </motion.div>

      <div className="relative z-10 pt-10 mt-10 md:mt-0">
        <FadeIn delay={0.1}>
          <span className="inline-block bg-brand-dark text-brand-accent px-4 py-1 border-2 border-brand-dark shadow-[6px_6px_0_var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.5em] font-mono mb-8 transform -rotate-2">
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
          <div className="relative inline-block max-w-xl mb-12">
            <p className="text-lg md:text-xl font-medium text-brand-dark leading-relaxed bg-brand-white p-6 border-2 border-brand-dark shadow-brutal rounded-2xl relative">
              {text.desc}
            </p>
            <a href="#about" className="absolute -bottom-[18px] -right-[18px] focus:outline-none focus:ring-4 focus:ring-brand-accent rounded-full z-20">
              <motion.div 
                className="text-brand-dark p-2 bg-brand-accent border-2 border-brand-dark shadow-[4px_4px_0_#111] rounded-full cursor-pointer hover:bg-brand-white transition-colors flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} className="flex flex-wrap items-center gap-8">
          <a
            href="#contact"
            className="px-8 py-4 bg-brand-accent text-brand-dark border-2 border-brand-dark font-bold font-mono text-[12px] uppercase tracking-widest shadow-brutal-hover rounded-2xl"
          >
            {text.contactBtn}
          </a>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4 md:mt-0">
            <a href={personalInfo.gitlab} target="_blank" rel="noreferrer" className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Gitlab className="w-6 h-6" />
              <span className="sr-only">GitLab</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-2xl">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
