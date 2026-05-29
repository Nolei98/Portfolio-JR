import { i18n } from '../data';
import { FadeIn, SectionHeading } from './ui/Layout';
import { useLang } from '../LanguageContext';
import { Music, HeartHandshake } from 'lucide-react';

export function About() {
  const { lang } = useLang();
  const text = i18n[lang].about;

  return (
    <section id="about" className="py-20 scroll-mt-20 relative">
      {/* Abstract background shapes */}
      <div className="absolute top-[30%] -right-10 flex flex-col items-start -z-10 opacity-80 hidden md:flex">
         <div className="w-16 h-8 bg-brand-dark"></div>
         <div className="w-8 h-8 bg-brand-dark -mt-px relative left-8"></div>
      </div>
      <div className="absolute bottom-[10%] -left-12 -z-10 opacity-50 hidden md:block">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,10 C50,140 100,10 140,140" stroke="var(--color-brand-dark)" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <FadeIn>
        <SectionHeading subtitle={text.subtitle} title={text.title} />
      </FadeIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-brand-dark font-medium text-lg leading-relaxed bg-brand-white p-8 border-2 border-brand-dark shadow-brutal rounded-3xl">
              <p dangerouslySetInnerHTML={{ __html: text.p1 }} />
              <p>{text.p2}</p>
              <p>{text.p3}</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <FadeIn delay={0.2}>
              <div className="bg-brand-blue p-6 border-2 border-brand-dark shadow-brutal rounded-3xl h-full transform hover:-translate-y-1 transition-transform">
                <Music className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-2">{text.musicTitle}</h3>
                <p className="font-mono text-sm leading-relaxed font-bold opacity-90">{text.musicDesc}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-brand-pink p-6 border-2 border-brand-dark shadow-brutal rounded-3xl h-full transform hover:-translate-y-1 transition-transform">
                <HeartHandshake className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-2">{text.softTitle}</h3>
                <p className="font-mono text-sm leading-relaxed font-bold opacity-90">{text.softDesc}</p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 lg:col-span-5 mb-4 lg:mb-0">
          <FadeIn delay={0.4} direction="left">
            <div className="relative group p-4 bg-brand-white border-2 border-brand-dark shadow-brutal transform rotate-2 hover:rotate-0 transition-transform rounded-[2rem]">
              <div className="aspect-square w-full max-w-md mx-auto relative z-10 overflow-hidden border-2 border-brand-dark bg-brand-dark rounded-[1.5rem]">
                <img 
                  src="https://i.imgur.com/81SP9An.jpeg" 
                  alt="João Rodrigues" 
                  className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-yellow border-2 border-brand-dark rounded-full shadow-brutal z-20 flex items-center justify-center">
                 <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">@</span>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
