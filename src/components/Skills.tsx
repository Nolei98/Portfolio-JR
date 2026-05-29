import { skillsObj, i18n } from '../data';
import { FadeIn, SectionHeading } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Skills() {
  const { lang } = useLang();
  const text = i18n[lang].skills;
  const skills = skillsObj[lang];

  return (
    <section id="skills" className="py-20 scroll-mt-20 relative">
      {/* Abstract background shapes */}
      <div className="absolute top-[50%] right-[-10%] w-[400px] h-[400px] bg-[#75A5E3] rounded-full -z-20 opacity-10 blur-3xl hidden md:block" />
      <div className="absolute bottom-[-5%] left-[-5%] hidden md:flex flex-col -z-10 opacity-80">
        <div className="w-32 h-8 bg-brand-dark"></div>
        <div className="w-24 h-8 bg-brand-dark -mt-px"></div>
        <div className="w-16 h-8 bg-brand-dark -mt-px"></div>
      </div>

      <FadeIn>
        <SectionHeading subtitle={text.subtitle} title={text.title} />
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {skills.map((skillGroup, index) => (
          <FadeIn key={skillGroup.category} delay={index * 0.1}>
            <div className="h-full p-6 md:p-8 border-4 border-brand-dark bg-brand-light shadow-brutal shadow-brutal-hover rounded-3xl relative overflow-hidden">
              <h3 className="text-[12px] uppercase tracking-widest font-mono font-bold mb-6 text-brand-dark border-2 border-brand-dark pb-1 bg-brand-blue inline-block px-3 py-1 -ml-6 -mt-2 shadow-[2px_2px_0_#111] rounded-r-xl">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <li 
                    key={item.name}
                    className="flex items-center gap-2 font-mono text-[11px] font-bold px-4 py-2 border-2 border-brand-dark bg-brand-white text-brand-dark hover:bg-brand-peach hover:-translate-y-1 hover:shadow-brutal transition-all cursor-crosshair rounded-full"
                  >
                    {item.icon ? (
                      <img src={item.icon} alt={`${item.name} icon`} className="w-5 h-5 object-contain" />
                    ) : (
                      <div className="w-5 h-5 bg-brand-dark rounded-full opacity-20" />
                    )}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
