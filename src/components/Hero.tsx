import { Gitlab, Linkedin, Mail, Instagram, Github } from 'lucide-react';
import { personalInfo, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Hero() {
  const { lang } = useLang();
  const text = i18n[lang].hero;

  const socials = [
    { name: 'GitHub', href: personalInfo.github, icon: Github },
    { name: 'GitLab', href: personalInfo.gitlab, icon: Gitlab },
    { name: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
    { name: 'Instagram', href: personalInfo.instagram, icon: Instagram },
    { name: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
  ];

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 md:pt-32 pb-14 print:pt-0 print:pb-0">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div className="min-w-0">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
                Web &amp; Front-end Developer
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink-accent bg-ink-accent/10 border border-ink-accent/40 rounded-md px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-ink-accent animate-pulse" />
                {text.available}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="font-sans italic text-lg text-ink-muted mb-1.5">{text.greeting}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-ink-text" style={{ fontSize: 'clamp(3rem, 6.6vw, 5.6rem)' }}>
              <span className="block">{personalInfo.name}</span>
              <span className="block font-extrabold text-ink-accent">{text.subtitle}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-ink-text/80 max-w-xl mt-7">
              {text.desc}
            </p>
            <div className="hidden print:block text-ink-text font-mono font-bold text-xs mt-2">
              <p>{personalInfo.email} | https://portfolio-jr-lilac.vercel.app</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-wrap items-center gap-3.5 mt-8 print-hide">
            <a
              href="#contact"
              data-magnetic
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-accent text-white rounded-md font-semibold text-[15px] hover:bg-ink-accent-deep transition-colors"
            >
              {text.contactBtn} →
            </a>
            <div className="flex flex-wrap items-center gap-2.5">
              {socials.map(({ name, href, icon: Icon }) => href && (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={name}
                  className="w-11 h-11 flex items-center justify-center bg-ink-panel border border-ink-line rounded-md hover:bg-ink-panel-2 hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="w-5 h-5 text-ink-text" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} direction="left" className="justify-self-center w-full max-w-[420px] print-hide">
          <img
            src="/joao-blend.png"
            alt="João Rodrigues"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </FadeIn>
      </div>
    </section>
  );
}
