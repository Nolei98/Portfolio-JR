import { motion } from 'motion/react';
import { Gitlab, Linkedin, Mail, Instagram, ChevronDown, Github, Phone } from 'lucide-react';
import { personalInfo, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Hero() {
  const { lang } = useLang();
  const text = i18n[lang].hero;

  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center relative pt-8 md:pt-20 print:min-h-0 print:pt-0 print:mt-0 print:pb-2">
      
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

      <div className="relative z-10 grid lg:grid-cols-[1.25fr_0.85fr] gap-10 lg:gap-14 items-center pt-4 mt-6 md:pt-10 md:mt-0">
        <div className="order-2 lg:order-1 min-w-0">
        <FadeIn delay={0.05}>
          <span className="inline-flex items-center gap-2 bg-brand-dark text-brand-white px-4 py-2 border-2 border-brand-dark rounded-full shadow-[4px_4px_0_var(--color-brand-accent)] text-[10px] font-bold uppercase tracking-[0.2em] font-mono mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            {text.available}
          </span>
        </FadeIn>
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
          <div className="relative inline-block max-w-xl mb-8 md:mb-12 print:mb-2">
            <p className="text-[14px] md:text-xl font-medium text-brand-dark leading-relaxed bg-brand-white p-5 md:p-6 border-2 border-brand-dark shadow-brutal rounded-2xl relative print:p-2 print:text-xs print:shadow-none print:border">
              {text.desc}
            </p>
            <div className="hidden print:block text-brand-dark font-mono font-bold text-xs mt-2 w-full text-center">
              <p>{personalInfo.email} | https://portfolio-jr-lilac.vercel.app</p>
            </div>
            <a href="#about" className="absolute -bottom-4 right-4 md:-bottom-[18px] md:-right-[18px] focus:outline-none focus:ring-4 focus:ring-brand-accent rounded-full z-20">
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

        <FadeIn delay={0.5} className="flex flex-wrap items-center gap-4 md:gap-8 print-hide">
          <a
            href="#contact"
            data-magnetic
            className="px-6 py-3 md:px-8 md:py-4 bg-brand-accent text-brand-dark border-2 border-brand-dark font-bold font-mono text-[10px] md:text-[12px] uppercase tracking-widest shadow-brutal-hover rounded-xl md:rounded-2xl"
          >
            {text.contactBtn}
          </a>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-2 md:mt-0">
            {personalInfo.gitlab && (
              <a href={personalInfo.gitlab} target="_blank" rel="noreferrer" className="p-2 md:p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-xl md:rounded-2xl">
                <Gitlab className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">GitLab</span>
              </a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 md:p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-xl md:rounded-2xl">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 md:p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-xl md:rounded-2xl">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {personalInfo.instagram && (
              <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="p-2 md:p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-xl md:rounded-2xl">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            )}
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="p-2 md:p-3 bg-brand-white border-2 border-brand-dark text-brand-dark shadow-brutal-hover rounded-xl md:rounded-2xl">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Email</span>
              </a>
            )}
          </div>
        </FadeIn>
        </div>

        <FadeIn delay={0.3} direction="left" className="order-1 lg:order-2 justify-self-center w-full max-w-[340px] print-hide">
          <div className="relative">
            <div className="absolute -inset-2.5 bg-brand-clay border-2 border-brand-dark rounded-[2rem] -rotate-3"></div>
            <div className="relative p-3.5 bg-brand-white border-2 border-brand-dark shadow-brutal rounded-[2rem] transform rotate-2 hover:rotate-0 transition-transform">
            <div className="w-full aspect-[4/5] overflow-hidden border-2 border-brand-dark bg-brand-dark rounded-[1.5rem]">
              <img
                src="/joao-portrait.png"
                alt="João Rodrigues"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 22%' }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-brand-orange-neon border-2 border-brand-dark rounded-full shadow-brutal flex items-center justify-center rotate-12">
              <span className="text-2xl font-display font-bold text-brand-white">*</span>
            </div>
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
