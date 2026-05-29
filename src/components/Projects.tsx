import { projectsData, i18n } from '../data';
import { FadeIn, SectionHeading } from './ui/Layout';
import { Gitlab, ExternalLink } from 'lucide-react';
import { useLang } from '../LanguageContext';

export function Projects() {
  const { lang } = useLang();
  const text = i18n[lang].projects;

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
      
      <div className="space-y-32 mt-16 relative z-10">
        {projectsData.map((project, index) => (
          <FadeIn key={project.id} delay={0.1}>
            <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
              
              {/* Project Image */}
              <div className="w-full md:w-3/5 group relative border-4 border-brand-dark overflow-hidden bg-brand-dark shadow-brutal transform hover:rotate-1 transition-transform rounded-[2.5rem]">
                <div className="aspect-[16/10] sm:aspect-video w-full relative bg-gray-400">
                  <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-10">
                    <span className="sr-only">{project.title[lang]}</span>
                  </a>
                  <img 
                    src={project.image} 
                    alt={project.title[lang]} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 mix-blend-multiply group-hover:mix-blend-normal hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:items-start text-left' : 'md:items-end md:text-right'} relative z-20`}>
                <span className="text-[12px] uppercase tracking-widest font-bold text-brand-dark font-mono mb-4 block bg-brand-peach px-3 py-1 border-2 border-brand-dark shadow-[2px_2px_0_#111] rounded-xl">{text.projectLabel} / {project.id}</span>
                <h3 className="text-3xl md:text-5xl font-display font-bold uppercase mb-6 text-brand-dark bg-brand-light inline-block relative">
                  {project.title[lang]}
                  <div className="absolute -bottom-2 -left-2 w-full h-full bg-brand-accent -z-10 border-2 border-brand-dark hidden md:block rounded-xl"></div>
                </h3>
                
                <div className={`border-4 border-brand-dark bg-brand-white p-6 mb-6 font-bold text-brand-dark shadow-brutal md:-ml-12 ${index % 2 !== 0 ? 'md:ml-0 md:-mr-12' : ''} max-w-lg z-10 rounded-[2rem]`}>
                  <p>{project.description[lang]}</p>
                </div>

                <ul className={`flex flex-wrap gap-3 mb-8 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                  {project.tech.map((tech) => (
                    <li key={tech} className="px-4 py-2 border-2 border-brand-dark bg-brand-light text-brand-dark font-bold text-[11px] uppercase rounded-full">{tech}</li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <a href={project.gitlab} target="_blank" rel="noreferrer" className="text-brand-dark p-3 border-2 border-brand-dark bg-brand-white shadow-brutal-hover rounded-2xl">
                    <Gitlab className="w-6 h-6" />
                    <span className="sr-only">GitLab</span>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-brand-dark p-3 border-2 border-brand-dark bg-brand-yellow shadow-brutal-hover rounded-2xl">
                    <ExternalLink className="w-6 h-6" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </div>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
