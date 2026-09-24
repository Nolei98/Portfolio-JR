import { statsData } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export function Stats() {
  const { lang } = useLang();
  const stats = statsData[lang];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-14 print-hide">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-line border border-ink-line rounded-lg overflow-hidden">
        {stats.map((st, index) => {
          const CardContent = (
            <div className={`h-full p-4 sm:p-7 bg-ink-panel transition-all duration-300 relative group ${st.link ? 'hover:bg-ink-panel-2 cursor-pointer' : ''}`}>
              <div className="flex items-start justify-between gap-2">
                <div className="font-display font-bold text-ink-accent leading-none" style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)' }} data-countup>
                  {st.num}
                </div>
                {st.link && (
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1" />
                )}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted group-hover:text-ink-text mt-2 sm:mt-2.5 leading-snug break-words transition-colors">
                {st.label}
              </div>
            </div>
          );

          return (
            <FadeIn key={st.label} delay={index * 0.08}>
              {st.link ? (
                <a
                  href={st.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full no-underline"
                >
                  {CardContent}
                </a>
              ) : (
                CardContent
              )}
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
