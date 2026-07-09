import { statsData } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Stats() {
  const { lang } = useLang();
  const stats = statsData[lang];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-14 print-hide">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-line border border-ink-line rounded-lg overflow-hidden">
        {stats.map((st, index) => (
          <FadeIn key={st.label} delay={index * 0.08}>
            <div className="h-full p-7 bg-ink-panel">
              <div className="font-display font-bold text-ink-accent leading-none" style={{ fontSize: 'clamp(2.1rem, 4vw, 3rem)' }} data-countup>
                {st.num}
              </div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted mt-2.5">
                {st.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
