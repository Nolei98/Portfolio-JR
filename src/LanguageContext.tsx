import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { i18n } from './data';

type Language = 'en' | 'pt';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'pt' || urlLang === 'en') {
      return urlLang;
    }
    const navLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
    return navLang;
  });
  
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);

    const desc = i18n[lang].hero.desc;
    document.documentElement.lang = lang;
    
    // Update meta tags
    document.querySelector('meta[name="description"]')?.setAttribute('content', desc);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', desc);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', desc);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'pt' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
