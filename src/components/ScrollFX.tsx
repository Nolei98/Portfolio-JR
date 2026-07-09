import { useEffect, useRef } from 'react';

/**
 * Modern scroll/pointer effects, framework-agnostic (raw DOM inside useEffect):
 *  - top scroll-progress bar
 *  - cursor spotlight glow
 *  - magnetic elements  ->  [data-magnetic]
 *  - 3D tilt elements    ->  [data-tilt]
 *  - count-up numbers    ->  [data-countup]
 * Uses a requestAnimationFrame loop (no dependency on 'scroll' events firing) and
 * event delegation on document, so it survives React re-renders. Honors reduced-motion.
 */
export function ScrollFX() {
  const barRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bar = barRef.current;
    const spot = spotRef.current;
    const ACCENT = '193,93,48'; // terracotta rgb

    const scrollTop = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const countUp = (el: Element) => {
      if (reduced) return;
      const m = (el.textContent || '').trim().match(/^(\d+)(\D*)$/);
      if (!m) return;
      const target = parseInt(m[1], 10), suf = m[2] || '', dur = 1150, t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        (el as HTMLElement).textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const countPass = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll('[data-countup]:not([data-done])').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) { el.setAttribute('data-done', '1'); countUp(el); }
      });
    };

    let last = -1;
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const st = scrollTop();
      if (st !== last) {
        last = st;
        const h = (document.documentElement.scrollHeight || 0) - (window.innerHeight || 0);
        if (bar) bar.style.width = (h > 0 ? Math.min(100, (st / h) * 100) : 0) + '%';
        countPass();
      }
    };
    countPass();
    raf = requestAnimationFrame(loop);

    let onMove: ((e: PointerEvent) => void) | null = null;
    let onOut: ((e: PointerEvent) => void) | null = null;
    if (!reduced) {
      onMove = (e: PointerEvent) => {
        const t = e.target as Element;
        const mag = t.closest && (t.closest('[data-magnetic]') as HTMLElement | null);
        if (mag) {
          const r = mag.getBoundingClientRect();
          mag.style.transition = 'transform .12s ease-out';
          mag.style.transform =
            'translate(' + ((e.clientX - (r.left + r.width / 2)) * 0.3) + 'px,' +
            ((e.clientY - (r.top + r.height / 2)) * 0.35) + 'px)';
        }
        const tilt = t.closest && (t.closest('[data-tilt]') as HTMLElement | null);
        if (tilt) {
          const r = tilt.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          tilt.style.transition = 'transform .1s linear';
          tilt.style.transform =
            'perspective(820px) rotateX(' + ((0.5 - py) * 11) + 'deg) rotateY(' +
            ((px - 0.5) * 11) + 'deg) translateY(-4px)';
        }
        if (spot) {
          spot.style.background =
            'radial-gradient(340px circle at ' + e.clientX + 'px ' + e.clientY +
            'px, rgba(' + ACCENT + ',.12), transparent 72%)';
          spot.style.opacity = '1';
        }
      };
      onOut = (e: PointerEvent) => {
        const t = e.target as Element;
        if (!t || !t.closest) return;
        const mag = t.closest('[data-magnetic]') as HTMLElement | null;
        if (mag && (!e.relatedTarget || !mag.contains(e.relatedTarget as Node))) {
          mag.style.transition = 'transform .3s'; mag.style.transform = '';
        }
        const tl = t.closest('[data-tilt]') as HTMLElement | null;
        if (tl && (!e.relatedTarget || !tl.contains(e.relatedTarget as Node))) {
          tl.style.transition = 'transform .5s cubic-bezier(.2,.7,.2,1)'; tl.style.transform = '';
        }
      };
      document.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerout', onOut, true);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (onMove) document.removeEventListener('pointermove', onMove);
      if (onOut) document.removeEventListener('pointerout', onOut, true);
    };
  }, []);

  return (
    <>
      <div
        ref={barRef}
        className="print-hide"
        style={{ position: 'fixed', top: 0, left: 0, height: '3px', width: '0%', background: '#C15D30', zIndex: 60 }}
      />
      <div
        ref={spotRef}
        className="print-hide"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 40, opacity: 0, transition: 'opacity .5s' }}
      />
    </>
  );
}
