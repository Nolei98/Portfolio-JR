import { useState, useRef } from 'react';
import { personalInfo, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { useLang } from '../LanguageContext';

export function Contact() {
  const { lang } = useLang();
  const text = i18n[lang].contact;
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
    } catch {
      // clipboard unavailable — ignore
    }
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20 print-hide">
      <FadeIn
        className="relative overflow-hidden max-w-3xl mx-auto text-white rounded-2xl text-center p-9 sm:p-14 md:p-[4.75rem]"
        style={{ background: 'linear-gradient(150deg, var(--color-ink-navy), var(--color-ink-navy-deep))' }}
      >
        <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink-accent mb-5">
          {text.kicker}
        </span>
        <h2 className="font-display font-bold leading-[1.02] mb-5" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
          {text.title}
        </h2>
        <p className="text-[17px] leading-relaxed max-w-xl mx-auto mb-8 text-white/86">
          {text.p}
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          {personalInfo.whatsapp && (
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-ink-accent text-white rounded-md font-semibold text-[15px] hover:bg-ink-accent-deep transition-colors"
            >
              {text.btn}
            </a>
          )}
          <button
            onClick={copyEmail}
            data-magnetic
            className="cursor-pointer inline-flex items-center gap-2.5 px-7 py-4 bg-transparent text-white border-[1.5px] border-white/60 rounded-md font-mono text-[13px] font-bold hover:bg-white hover:text-ink-navy-deep transition-colors"
          >
            {copied ? text.copied : personalInfo.email}
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
