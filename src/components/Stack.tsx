import { skillsObj, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Stack() {
  const { lang } = useLang();
  const text = i18n[lang].skills;
  const skills = skillsObj[lang];
  const aboutText = i18n[lang].about;

  const marqueeItems = skills.flatMap((g) => g.items);
  const marqueeLoop = marqueeItems.concat(marqueeItems);

  return (
    <section id="stack" className="py-16 bg-ink-accent text-white relative print-hide scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-8">
        <FadeIn>
          <div className="flex items-end gap-4 mb-4">
            <span className="font-mono font-bold text-[13px] tracking-[0.1em] text-white">{text.subtitle}</span>
            <h2 className="font-display font-bold leading-none text-white" style={{ fontSize: 'clamp(2rem, 4.4vw, 3.2rem)' }}>
              {text.title}
            </h2>
            <span className="flex-1 h-px bg-white/28 mb-3" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white whitespace-nowrap mb-2 hidden sm:inline">
              {text.count}
            </span>
          </div>
          <p className="text-base leading-relaxed max-w-2xl text-white/82">{text.sub}</p>
        </FadeIn>
      </div>

      <div className="marquee-wrap overflow-hidden border-y border-white/25 py-5 mb-9" style={{ WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)' }}>
        <div className="marquee-track flex gap-3.5 w-max">
          {marqueeLoop.map((sk, i) => (
            <span key={`${sk.name}-${i}`} className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-black/16 border border-white/22 rounded-md font-mono text-[13px] font-bold whitespace-nowrap text-white">
              <img src={sk.icon} alt="" loading="lazy" decoding="async" className="w-5 h-5" /> {sk.name}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {skills.map((skillGroup, index) => (
          <FadeIn key={skillGroup.category} delay={index * 0.08} subtle>
            <div data-tilt className="stack-card bg-black/16 border border-white/20 rounded-lg p-5 sm:p-7 h-full">
              <div className="flex items-center gap-3 mb-4 pb-3.5 border-b border-white/20">
                <h3 className="font-display font-semibold text-lg text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {skillGroup.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-black/20 border border-white/22 rounded-md font-mono text-[12px] sm:text-[12.5px] font-semibold text-white"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Languages (Print Only) */}
      <div className="hidden print:block mt-4 p-4 border-2 border-brand-dark bg-brand-white rounded-2xl mx-auto max-w-4xl">
        <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-2 text-center w-full pb-2 border-b-2 border-brand-dark">{aboutText.langTitle}</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {aboutText.languages.map((langItem: any, index: number) => (
            <div key={index} className="flex items-center gap-2 border-2 border-brand-dark p-2 rounded-lg bg-brand-light">
              <img src={langItem.flag} alt={langItem.name} loading="lazy" decoding="async" className="w-4 h-auto rounded-[2px]" />
              <span className="font-mono text-[10px] font-bold">{langItem.name}</span>
              <span className="font-mono text-[10px] text-brand-dark/70 ml-2">- {langItem.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
