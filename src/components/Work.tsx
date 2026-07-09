import React, { useState, useEffect } from 'react';
import { projectsCategories, i18n } from '../data';
import { FadeIn } from './ui/Layout';
import { Github, ExternalLink, GraduationCap, Briefcase, Code2, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../LanguageContext';

const categoryIcons: Record<string, React.ReactNode> = {
  'university-projects': <GraduationCap className="w-6 h-6" />,
  'web-ecommerce': <Briefcase className="w-6 h-6" />,
  'backend-architecture': <Code2 className="w-6 h-6" />,
};

export function Work() {
  const { lang } = useLang();
  const text = i18n[lang].projects;
  const [openId, setOpenId] = useState<string | null>(null);

  const activeCategory = projectsCategories.find((c) => c.id === openId) || null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openId ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openId]);

  const viewLabel = lang === 'pt' ? 'Ver projetos' : 'View projects';
  const countLabel = (n: number) =>
    lang === 'pt' ? `${n} ${n === 1 ? 'projeto' : 'projetos'}` : `${n} ${n === 1 ? 'project' : 'projects'}`;

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 print:py-0">
      <FadeIn className="flex items-end gap-4 mb-9 print-hide">
        <span className="font-mono font-bold text-ink-accent text-[13px] tracking-[0.1em]">{text.subtitle}</span>
        <h2 className="font-display font-bold text-ink-text leading-none" style={{ fontSize: 'clamp(2rem, 4.4vw, 3.2rem)' }}>
          {text.title}
        </h2>
        <span className="flex-1 h-px bg-ink-line mb-3" />
      </FadeIn>

      {/* Category cards -> open modal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print-hide">
        {projectsCategories.map((category, index) => (
          <FadeIn key={category.id} delay={index * 0.1}>
            <button
              onClick={() => setOpenId(category.id)}
              data-tilt
              className="group w-full h-full text-left flex flex-col gap-4 p-7 bg-ink-panel border border-ink-line rounded-lg hover:-translate-y-1 hover:border-ink-accent transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="w-[3.25rem] h-[3.25rem] flex items-center justify-center bg-ink-accent/15 border border-ink-accent/40 rounded-lg text-ink-accent">
                  {categoryIcons[category.id]}
                </span>
                <span className="text-4xl font-display font-bold text-ink-accent leading-none">
                  {category.items.length}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold text-ink-text leading-tight">
                  {category.label[lang as 'en' | 'pt']}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {countLabel(category.items.length)}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 self-start font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-ink-accent">
                {viewLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </FadeIn>
        ))}
      </div>

      {/* Modal pop-up */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/74 backdrop-blur-sm p-4 md:p-6 print-hide"
          >
            <motion.div
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 24 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-ink-panel border border-ink-line rounded-2xl p-6 md:p-10 hide-scrollbar"
            >
              <div className="flex items-start justify-between gap-4 mb-8 sticky top-0">
                <div className="flex items-center gap-4">
                  <span className="w-[3.25rem] h-[3.25rem] flex-none flex items-center justify-center bg-ink-accent/15 border border-ink-accent/40 rounded-lg text-ink-accent">
                    {categoryIcons[activeCategory.id]}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-display font-bold text-ink-text leading-none">
                      {activeCategory.label[lang as 'en' | 'pt']}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">
                      {countLabel(activeCategory.items.length)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpenId(null)}
                  aria-label={lang === 'pt' ? 'Fechar' : 'Close'}
                  className="w-11 h-11 flex-none flex items-center justify-center bg-ink-panel-2 border border-ink-line rounded-md hover:bg-ink-accent hover:text-white transition-colors text-ink-text"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {activeCategory.items.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col bg-ink-bg border border-ink-line rounded-lg overflow-hidden"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-ink-panel-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 p-5 flex-1">
                      <span className="self-start text-[10px] uppercase tracking-widest font-bold text-ink-accent font-mono">
                        {project.semester[lang as 'en' | 'pt']}
                      </span>
                      <h4 className="text-xl md:text-2xl font-display font-semibold text-ink-text">
                        {project.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-ink-text/70 flex-1">
                        {project.description[lang as 'en' | 'pt']}
                      </p>
                      <ul className="flex flex-wrap gap-1.5 mt-1">
                        {project.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="px-2.5 py-1 bg-white/7 text-ink-text font-mono font-semibold text-[10px] rounded"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      {(project.repositoryLink || project.liveDemoLink) && (
                        <div className="flex items-center gap-3 mt-1">
                          {project.repositoryLink && (
                            <a
                              href={project.repositoryLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-ink-text px-4 py-2 border border-ink-line rounded-md hover:border-ink-accent transition-colors font-bold text-xs uppercase font-mono"
                            >
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </a>
                          )}
                          {project.liveDemoLink && (
                            <a
                              href={project.liveDemoLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-ink-text px-4 py-2 bg-ink-accent rounded-md hover:bg-ink-accent-deep transition-colors font-bold text-xs uppercase font-mono"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Print-only listing (modal doesn't print) */}
      <div className="hidden print:block space-y-4 mt-6">
        <h2 className="font-display font-bold uppercase text-2xl mb-2 text-center">{text.title}</h2>
        {projectsCategories.map((category) => (
          <div key={category.id} className="border-2 border-brand-dark rounded-2xl p-4 bg-brand-white">
            <h3 className="font-display font-bold uppercase text-lg mb-2">{category.label[lang as 'en' | 'pt']}</h3>
            {category.items.map((project) => (
              <div key={project.id} className="mb-2">
                <p className="font-bold text-sm">{project.title} — <span className="font-mono text-xs">{project.technologies.join(', ')}</span></p>
                <p className="text-xs">{project.description[lang as 'en' | 'pt']}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
