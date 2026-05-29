import React, { useEffect, useState } from 'react';

export default function LeftScrollbar() {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      
      if (scrollHeight <= clientHeight) {
        setThumbHeight(0);
        return;
      }
      
      const heightPercent = Math.max((clientHeight / scrollHeight) * 100, 10);
      setThumbHeight(heightPercent);
      
      const maxScrollTop = scrollHeight - clientHeight;
      const scrollPercent = maxScrollTop > 0 ? (window.scrollY / maxScrollTop) : 0;
      
      const maxThumbTop = 100 - heightPercent;
      setThumbTop(scrollPercent * maxThumbTop);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    const observer = new ResizeObserver(handleScroll);
    observer.observe(document.body);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    
    const clickPercent = clickY / rect.height;
    const maxScrollTop = scrollHeight - clientHeight;
    const targetScrollY = clickPercent * maxScrollTop;
    
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  return (
    <div 
      className="fixed top-0 left-0 w-[14px] h-[100vh] bg-brand-light border-r-2 border-brand-dark z-[60] hidden sm:block cursor-pointer print-hide"
      onMouseEnter={() => {
        document.documentElement.classList.add('is-scrollbar-active');
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        document.documentElement.classList.remove('is-scrollbar-active');
        setIsHovered(false);
      }}
      onClick={handleClick}
    >
      <div 
        className={`w-full border-2 border-brand-dark transition-colors duration-150 ${isHovered ? 'bg-brand-dark' : 'bg-brand-accent'}`} 
        style={{ 
          height: `${thumbHeight}%`, 
          top: `${thumbTop}%`,
          position: 'absolute'
        }}
      />
    </div>
  );
}
