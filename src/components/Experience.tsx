import { experienceData, i18n } from '../data';
import { FadeIn, SectionHeading } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Experience() {
  const { lang } = useLang();
  const text = i18n[lang].experience;

  return (
    <section id="experience" className="hidden print:block py-20 scroll-mt-20 relative">
      {/* Abstract background shapes */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#75A5E3] rounded-full -z-20 opacity-10 blur-3xl hidden md:block" />
      <div className="absolute top-[60%] right-[-5%] hidden md:flex flex-col items-end -z-10 opacity-80">
        <div className="w-16 h-12 bg-brand-dark"></div>
        <div className="w-8 h-12 bg-brand-dark -mt-px mr-8"></div>
      </div>

      <FadeIn>
        <SectionHeading subtitle={text.subtitle} title={text.title} />
      </FadeIn>
      
      <div className="space-y-8 mt-12 print:space-y-4 print:mt-6">
        {experienceData.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 relative group bg-brand-white p-8 border-4 border-brand-dark shadow-brutal hover:bg-brand-peach transition-colors rounded-[2rem] print:p-4 print:gap-4 print:border-2 print:shadow-none print:transform-none">
              
              <div className="md:w-1/4 shrink-0 flex items-center gap-3 print:mx-auto print:justify-center">
                <div className="p-3 bg-brand-accent border-2 border-brand-dark rounded-xl shadow-brutal text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-accent group-hover:-translate-y-1 transition-all print:p-2 print:shadow-none print:border print:hidden">
                  {exp.icon}
                </div>
                <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-brand-dark bg-brand-light px-3 py-1 border-2 border-brand-dark rounded-xl print:text-[10px] print:px-2 print:py-0 print:border">
                  {exp.period as string}
                </span>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold font-display uppercase text-brand-dark mb-4 print:text-lg print:mb-2 text-center">
                  {exp.role[lang]} / <span className="opacity-70">{exp.company}</span>
                </h3>
                <p className="font-medium text-brand-dark text-lg leading-relaxed print:text-sm text-center">
                  {exp.description[lang]}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
