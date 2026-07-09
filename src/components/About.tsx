import { useRef } from 'react';
import { i18n } from '../data';
import { FadeIn, SectionHeading } from './ui/Layout';
import { useLang } from '../LanguageContext';
import { Music, ChevronLeft, ChevronRight } from 'lucide-react';

export function About() {
  const { lang } = useLang();
  const text = i18n[lang].about;
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="hidden print:block py-20 scroll-mt-20 relative">
      {/* Abstract background shapes */}
      <div className="absolute top-[30%] -right-10 flex flex-col items-start -z-10 opacity-80 hidden md:flex">
         <div className="w-16 h-8 bg-brand-dark"></div>
         <div className="w-8 h-8 bg-brand-dark -mt-px relative left-8"></div>
      </div>
      <div className="absolute bottom-[10%] -left-12 -z-10 opacity-50 hidden md:block">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,10 C50,140 100,10 140,140" stroke="var(--color-brand-dark)" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <FadeIn>
        <SectionHeading subtitle={text.subtitle} title={text.title} />
      </FadeIn>
      
      <div className="flex flex-col lg:flex-row gap-12 items-start mt-8 print:flex-row print:gap-6 print:mt-2 print:items-center">
        
        {/* Image */}
        <div className="w-full lg:w-5/12 order-1 lg:order-2 mb-4 lg:mb-0 print:order-1 print:w-1/3 print:flex print:justify-center print:mb-0">
          <FadeIn delay={0.4} direction="left">
            <div className="relative group p-4 bg-brand-white border-2 border-brand-dark shadow-brutal transform rotate-2 hover:rotate-0 transition-transform rounded-[2rem] print:rotate-0 print:p-0 print:shadow-none print:border-none print:bg-transparent">
              <div className="aspect-square w-full max-w-md mx-auto relative z-10 overflow-hidden border-2 border-brand-dark bg-brand-dark rounded-[1.5rem] print:w-32 print:h-32 print:mx-auto">
                <img 
                  src="https://i.imgur.com/81SP9An.jpeg" 
                  alt="João Rodrigues" 
                  className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border-2 border-brand-dark rounded-full shadow-brutal z-20 flex items-center justify-center print:hidden">
                 <span className="text-3xl font-display font-bold text-white">@</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-7/12 order-2 lg:order-1 space-y-6 print:order-2 print:w-2/3 print:space-y-2">
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-brand-dark font-medium text-lg leading-relaxed bg-brand-white p-8 border-2 border-brand-dark shadow-brutal rounded-3xl print:p-2 print:text-xs print:space-y-2 print:shadow-none print:border-none print:bg-transparent">
              <p dangerouslySetInnerHTML={{ __html: text.p1 }} />
              <p>{text.p2}</p>
              {text.p3 && <p>{text.p3}</p>}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="print-hide">
            <div className="bg-brand-white p-6 md:p-8 border-2 border-brand-dark shadow-brutal rounded-3xl mt-6">
              <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-6 pb-4 border-b-2 border-brand-dark inline-block print:mb-2 print:pb-2 print:text-center print:w-full">{text.langTitle}</h3>
              <div className="space-y-5 print:space-y-2 print:flex print:flex-wrap print:gap-4 print:justify-center">
                {text.languages.map((langItem: any, index: number) => (
                  <div key={index} className="space-y-2 print:w-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1 text-[11px] md:text-sm font-bold font-mono">
                      <span className="flex items-center gap-2">
                        <img src={langItem.flag} alt={langItem.name} className="w-5 h-auto rounded-[2px]" />
                        {langItem.name}
                      </span>
                      <span className="opacity-80 sm:text-right text-brand-dark/70 break-words w-full sm:w-auto">{langItem.level}</span>
                    </div>
                    <div className="h-3 w-full bg-brand-light border-2 border-brand-dark rounded-full overflow-hidden print:hidden">
                      <div 
                        className="h-full bg-brand-accent transition-all duration-1000 ease-out border-r-2 border-brand-dark"
                        style={{ width: `${langItem.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-6 print-hide">
            <div className="bg-brand-dark text-brand-white p-6 md:p-8 border-2 border-brand-dark shadow-[6px_6px_0_var(--color-brand-accent)] rounded-3xl mt-6 relative">
              <div className="flex items-center gap-3 mb-6">
                <Music className="w-6 h-6 text-[#1DB954]" />
                <h3 className="font-display font-bold text-xl uppercase tracking-wider">{text.musicTitle}</h3>
              </div>
              <div className="absolute top-6 right-6 md:right-8 flex gap-2">
                <button 
                  onClick={scrollLeft}
                  className="w-8 h-8 rounded-full bg-[#181818] border border-[#333] flex items-center justify-center hover:bg-[#282828] transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-brand-white" />
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-8 h-8 rounded-full bg-[#181818] border border-[#333] flex items-center justify-center hover:bg-[#282828] transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-brand-white" />
                </button>
              </div>
              <div ref={carouselRef} className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar">
                {text.musicAlbums.map((album: any, i: number) => (
                  <a 
                    key={i} 
                    href={album.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block shrink-0 w-36 xs:w-40 sm:w-44 bg-[#181818] p-3 rounded-lg hover:bg-[#282828] transition-colors border border-transparent hover:border-[#333] snap-start"
                  >
                    <div className="relative aspect-square w-full mb-3 rounded shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden">
                      <img src={album.image} alt={album.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 right-2 w-10 h-10 bg-[#1DB954] text-black rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-bold text-sm text-balance text-white truncate mb-1">{album.title}</h4>
                    <p className="text-xs text-[#a7a7a7] font-mono truncate">{album.artist}</p>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
