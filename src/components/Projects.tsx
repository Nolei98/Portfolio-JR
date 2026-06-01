import React, { useState } from 'react';
import { projectsCategories, i18n } from '../data';
import { FadeIn, SectionHeading } from './ui/Layout';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useLang } from '../LanguageContext';

export function Projects() {
  const { lang } = useLang();
  const text = i18n[lang].projects;
  const [openCategory, setOpenCategory] = useState(projectsCategories[0].id);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? '' : id);
  };

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
      
      <div className="space-y-6 mt-16 relative z-10 max-w-5xl mx-auto">
        {projectsCategories.map((category) => (
          <FadeIn key={category.id} delay={0.1}>
            <div className="border-4 border-brand-dark bg-brand-white shadow-brutal rounded-[2rem] overflow-hidden">
              <button 
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 bg-brand-light hover:bg-[#e0e0d5] transition-colors focus:outline-none print-hide"
              >
                <h3 className="text-xl md:text-3xl font-display font-bold uppercase text-brand-dark text-left">
                  {category.label[lang as "en" | "pt"]}
                </h3>
                {openCategory === category.id ? (
                  <ChevronUp className="w-8 h-8 text-brand-dark" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-brand-dark" />
                )}
              </button>

              <div className={`p-6 md:p-8 border-t-4 border-brand-dark bg-brand-white space-y-16 ${openCategory === category.id ? 'block' : 'hidden print:block'}`}>
                {category.items.map((project, index) => (
                  <div key={project.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 pb-16 last:pb-0 border-b-2 border-dashed border-gray-300 last:border-0`}>
                    
                    {/* Project Image */}
                    <div className="w-full md:w-1/2 group relative border-4 border-brand-dark overflow-hidden bg-brand-dark shadow-[4px_4px_0_#111] transform hover:-translate-y-1 transition-transform rounded-[1.5rem]">
                      <div className="aspect-video w-full relative bg-gray-400">
                        {project.liveDemoLink && (
                           <a href={project.liveDemoLink} target="_blank" rel="noreferrer" className="absolute inset-0 z-10 print-hide">
                             <span className="sr-only">{project.title}</span>
                           </a>
                        )}
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 mix-blend-multiply group-hover:mix-blend-normal transform group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`w-full md:w-1/2 flex flex-col ${index % 2 !== 0 ? 'md:items-start text-left' : 'md:items-start text-left'} relative z-20`}>
                      <span className="text-[11px] uppercase tracking-widest font-bold text-brand-dark font-mono mb-3 block bg-brand-peach px-3 py-1 border-2 border-brand-dark shadow-[2px_2px_0_#111] rounded-xl self-start print:mx-auto">
                        {project.semester[lang as "en" | "pt"]}
                      </span>
                      
                      <h4 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 text-brand-dark">
                        {project.title}
                      </h4>
                      
                      <div className="mb-6 font-medium text-brand-dark/90 leading-relaxed max-w-lg print:mx-auto text-center">
                        <p>{project.description[lang as "en" | "pt"]}</p>
                      </div>

                      <ul className="flex flex-wrap gap-2 mb-8 justify-start print:mx-auto">
                        {project.technologies.map((tech) => (
                          <li key={tech} className="px-3 py-1 border-2 border-brand-dark bg-brand-light text-brand-dark font-bold text-[10px] uppercase rounded-lg">{tech}</li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-4 print-hide">
                        {project.repositoryLink && (
                          <a href={project.repositoryLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-dark px-4 py-2 border-2 border-brand-dark bg-brand-white hover:bg-brand-light shadow-[2px_2px_0_#111] hover:shadow-[4px_4px_0_#111] active:translate-y-px active:shadow-[1px_1px_0_#111] transition-all rounded-xl font-bold text-sm uppercase font-mono">
                            <Github className="w-5 h-5" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.liveDemoLink && (
                          <a href={project.liveDemoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-dark px-4 py-2 border-2 border-brand-dark bg-brand-yellow hover:bg-[#ebd52a] shadow-[2px_2px_0_#111] hover:shadow-[4px_4px_0_#111] active:translate-y-px active:shadow-[1px_1px_0_#111] transition-all rounded-xl font-bold text-sm uppercase font-mono">
                            <ExternalLink className="w-5 h-5" />
                            <span>Live</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
