import React, { useState, useEffect } from 'react';
import { projectsCategories, i18n } from '../data';
import { FadeIn, SectionHeading } from './ui/Layout';
import { Github, ExternalLink, GraduationCap, Briefcase, Code2, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../LanguageContext';

const categoryIcons: Record<string, React.ReactNode> = {
  'university-projects': <GraduationCap className="w-6 h-6" />,
  'web-ecommerce': <Briefcase className="w-6 h-6" />,
  'backend-architecture': <Code2 className="w-6 h-6" />,
};

export function Projects() {
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
    <section id="projects" className="py-20 scroll-mt-20 relative">
      {/* Abstract background shapes */}
      <div className="absolute top-[25%] left-[-5%] w-[300px] h-[300px] bg-[#75A5E3] rounded-full -z-20 opacity-20 blur-2xl hidden md:block" />
      <div className="absolute bottom-[10%] right-[0%] hidden md:block -z-10 opacity-40">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,0 Q120,100 10,200" stroke="var(--color-brand-dark)" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <FadeIn>
        <SectionHeading subtitle={text.subtitle} title={text.title} />
      </FadeIn>

      {/* Category drawers -> open modal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 relative z-10 print-hide">
        {projectsCategories.map((category, index) => (
          <FadeIn key={category.id} delay={index * 0.1}>
            <button
              onClick={() => setOpenId(category.id)}
              className="group w-full h-full text-left flex flex-col gap-5 p-7 border-4 border-brand-dark bg-brand-white shadow-brutal shadow-brutal-hover rounded-[2rem] focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <span className="w-14 h-14 flex items-center justify-center bg-brand-accent border-2 border-brand-dark rounded-2xl shadow-[3px_3px_0_#111] text-brand-dark -rotate-3 group-hover:rotate-0 transition-transform">
                  {categoryIcons[category.id]}
                </span>
                <span className="text-4xl font-display font-bold text-transparent [-webkit-text-stroke:1.5px_var(--color-brand-dark)]">
                  {category.items.length}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-brand-dark leading-tight">
                  {category.label[lang as 'en' | 'pt']}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-brand-dark/60">
                  {countLabel(category.items.length)}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 self-start px-4 py-2 bg-brand-light border-2 border-brand-dark rounded-xl font-mono text-[11px] font-bold uppercase tracking-widest text-brand-dark">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/75 backdrop-blur-sm p-4 md:p-6 print-hide"
          >
            <motion.div
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 24 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-brand-light border-4 border-brand-dark rounded-[2rem] shadow-brutal p-6 md:p-10 hide-scrollbar"
            >
              {/* Modal header */}
              <div className="flex items-start justify-between gap-4 mb-8 sticky top-0">
                <div className="flex items-center gap-4">
                  <span className="w-14 h-14 flex-none flex items-center justify-center bg-brand-accent border-2 border-brand-dark rounded-2xl shadow-[3px_3px_0_#111] text-brand-dark">
                    {categoryIcons[activeCategory.id]}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-display font-bold uppercase text-brand-dark leading-none">
                      {activeCategory.label[lang as 'en' | 'pt']}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-brand-dark/60">
                      {countLabel(activeCategory.items.length)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpenId(null)}
                  aria-label={lang === 'pt' ? 'Fechar' : 'Close'}
                  className="w-11 h-11 flex-none flex items-center justify-center bg-brand-white border-2 border-brand-dark rounded-xl shadow-[3px_3px_0_#111] hover:bg-brand-orange-neon hover:text-brand-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Project cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCategory.items.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col bg-brand-white border-2 border-brand-dark rounded-[1.5rem] overflow-hidden shadow-brutal"
                  >
                    <div className="aspect-video w-full overflow-hidden border-b-2 border-brand-dark bg-brand-dark">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-5 flex-1">
                      <span className="self-start text-[10px] uppercase tracking-widest font-bold text-brand-dark font-mono bg-brand-peach px-3 py-1 border-2 border-brand-dark shadow-[2px_2px_0_#111] rounded-lg">
                        {project.semester[lang as 'en' | 'pt']}
                      </span>
                      <h4 className="text-xl md:text-2xl font-display font-bold uppercase text-brand-dark">
                        {project.title}
                      </h4>
                      <p className="text-sm font-medium text-brand-dark/90 leading-relaxed flex-1">
                        {project.description[lang as 'en' | 'pt']}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="px-3 py-1 border-2 border-brand-dark bg-brand-light text-brand-dark font-bold text-[10px] uppercase rounded-lg font-mono"
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
                              className="flex items-center gap-2 text-brand-dark px-4 py-2 border-2 border-brand-dark bg-brand-white hover:bg-brand-light shadow-[2px_2px_0_#111] hover:shadow-[4px_4px_0_#111] transition-all rounded-xl font-bold text-xs uppercase font-mono"
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
                              className="flex items-center gap-2 text-brand-dark px-4 py-2 border-2 border-brand-dark bg-brand-yellow hover:bg-[#ebd52a] shadow-[2px_2px_0_#111] hover:shadow-[4px_4px_0_#111] transition-all rounded-xl font-bold text-xs uppercase font-mono"
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
