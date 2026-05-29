import { personalInfo, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Contact() {
  const { lang } = useLang();
  const text = i18n[lang].contact;

  return (
    <section id="contact" className="py-32 mb-20 relative">
      {/* Abstract background shapes */}
      <div className="absolute top-[10%] left-[-5%] w-[200px] h-[200px] bg-[#75A5E3] rounded-full -z-20 opacity-30 blur-xl hidden md:block" />
      <div className="absolute bottom-[-10%] right-[10%] hidden md:flex flex-col -z-10 opacity-70">
        <div className="w-16 h-8 bg-brand-dark"></div>
        <div className="w-24 h-8 bg-brand-dark -mt-px -ml-8"></div>
        <div className="w-8 h-8 bg-brand-dark -mt-px ml-8"></div>
      </div>

      <FadeIn className="text-center max-w-3xl mx-auto bg-brand-accent p-12 lg:p-20 border-4 border-brand-dark shadow-brutal relative rounded-[3rem]">
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-white border-4 border-brand-dark rounded-full flex items-center justify-center font-bold text-2xl rotate-12">
          !
        </div>
        <span className="text-[12px] bg-brand-white border-2 border-brand-dark px-3 py-1 font-bold uppercase tracking-widest font-mono mb-6 inline-block rounded-xl">{text.subtitle}</span>
        <h2 className="text-5xl md:text-7xl font-bold font-display uppercase mb-8 text-brand-dark leading-none">
          {text.title}
        </h2>
        <p className="font-bold text-brand-dark text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          {text.p}
        </p>
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-10 py-5 bg-brand-white text-brand-dark border-4 border-brand-dark font-bold font-mono hover:bg-brand-dark hover:text-brand-white transition-colors text-sm uppercase tracking-widest shadow-[4px_4px_0_#111] hover:shadow-none hover:translate-x-1 hover:translate-y-1 rounded-2xl"
        >
          {text.btn}
        </a>
      </FadeIn>
    </section>
  );
}
