import { useEffect, useState, useRef, useCallback } from 'react';

export default function LeftScrollbar() {
  const [scrollState, setScrollState] = useState({
    progress: 0,
    thumbHeight: 100,
  });
  
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (documentHeight <= windowHeight) {
      setScrollState({ progress: 0, thumbHeight: 0 });
      return;
    }

    // Calculate thumb height proportionally
    let thumbHeight = Math.max(
      (windowHeight / documentHeight) * windowHeight,
      40 // minimum thumb size
    );

    const scrollableHeight = documentHeight - windowHeight;
    const progress = window.scrollY / scrollableHeight;

    setScrollState({
      progress,
      thumbHeight
    });
  }, []);

  useEffect(() => {
    // Use ResizeObserver for more accurate content height changes
    const resizeObserver = new ResizeObserver(() => handleScroll());
    resizeObserver.observe(document.body);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      resizeObserver.disconnect();
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isDragging) {
      document.documentElement.classList.add('is-scrollbar-active');
      document.body.classList.add('is-scrollbar-active');
    } else {
      document.documentElement.classList.remove('is-scrollbar-active');
      document.body.classList.remove('is-scrollbar-active');
    }
  }, [isDragging]);

  useEffect(() => {
    const handleNativeScrollbarGrabbed = (e: MouseEvent) => {
      if (e.clientX >= window.innerWidth - 18) {
        setIsDragging(true);
      }
    };

    const handleNativeScrollbarReleased = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousedown', handleNativeScrollbarGrabbed);
    window.addEventListener('mouseup', handleNativeScrollbarReleased);
    return () => {
      window.removeEventListener('mousedown', handleNativeScrollbarGrabbed);
      window.removeEventListener('mouseup', handleNativeScrollbarReleased);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    
    const startY = e.clientY;
    const startScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const maxThumbScroll = windowHeight - scrollState.thumbHeight;
    
    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaY = moveEvent.clientY - startY;
      const deltaProgress = deltaY / maxThumbScroll;
      const newScrollY = startScrollY + (deltaProgress * scrollableHeight);
      
      window.scrollTo({
        top: Math.max(0, Math.min(scrollableHeight, newScrollY)),
        behavior: 'auto'
      });
    };
    
    const handlePointerUp = () => {
      setIsDragging(false);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
    
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };
  
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const maxThumbScroll = windowHeight - scrollState.thumbHeight;
    
    // We want the center of the thumb to jump to the clickY if possible
    let newProgress = (clickY - scrollState.thumbHeight / 2) / maxThumbScroll;
    newProgress = Math.max(0, Math.min(1, newProgress));
    
    window.scrollTo({
      top: newProgress * scrollableHeight,
      behavior: 'smooth'
    });
  };

  if (scrollState.thumbHeight === 0) return null;

  return (
    <div 
      ref={trackRef}
      onMouseDown={handleTrackClick}
      className="fixed top-0 left-0 w-[14px] h-[100vh] bg-brand-light border-r-2 border-brand-dark z-[60] hidden sm:block cursor-pointer"
    >
      <div 
        onPointerDown={handlePointerDown}
        className={`absolute left-0 w-[14px] border-2 border-brand-dark transition-colors cursor-grab active:cursor-grabbing ${isDragging ? 'bg-brand-dark' : 'bg-brand-accent hover:bg-brand-dark'}`}
        style={{ 
          height: `${scrollState.thumbHeight}px`,
          top: `${scrollState.progress * (window.innerHeight - scrollState.thumbHeight)}px`
        }}
      />
    </div>
  );
}
