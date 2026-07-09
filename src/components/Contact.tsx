import { personalInfo, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';
import { Phone } from 'lucide-react';

export function Contact() {
  const { lang } = useLang();
  const text = i18n[lang].contact;

  return (
    <section id="contact" className="py-32 mb-20 relative print-hide">
      {/* Abstract background shapes */}
      <div className="absolute bottom-[-10%] right-[10%] hidden md:flex flex-col -z-10 opacity-70">
        <div className="w-16 h-8 bg-brand-dark"></div>
        <div className="w-24 h-8 bg-brand-dark -mt-px -ml-8"></div>
        <div className="w-8 h-8 bg-brand-dark -mt-px ml-8"></div>
      </div>

      <FadeIn className="text-center max-w-3xl mx-auto bg-brand-accent p-6 sm:p-12 lg:p-20 border-4 border-brand-dark shadow-brutal relative rounded-[2rem] sm:rounded-[3rem]">
        <div className="absolute -top-4 -right-1 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-brand-orange-neon border-4 border-brand-dark rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl rotate-12">
          !
        </div>
        <span className="text-[10px] sm:text-[12px] bg-brand-white border-2 border-brand-dark px-3 py-1 font-bold uppercase tracking-widest font-mono mb-4 sm:mb-6 inline-block rounded-xl">{text.subtitle}</span>
        <h2 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-7xl font-bold font-display uppercase mb-6 sm:mb-8 text-brand-dark break-words sm:break-normal hyphens-auto w-full">
          {text.title}
        </h2>
        <p className="font-bold text-brand-dark text-sm sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed mx-auto break-words w-full">
          {text.p}
        </p>
        {personalInfo.whatsapp && (
          <a 
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-magnetic
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:px-10 sm:py-5 bg-brand-white text-brand-dark border-4 border-brand-dark font-bold font-mono hover:bg-brand-dark hover:text-brand-white transition-colors text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0_#111] hover:shadow-none hover:translate-x-1 hover:translate-y-1 rounded-2xl break-words whitespace-normal text-center"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            {text.btn}
          </a>
        )}
      </FadeIn>
    </section>
  );
}
