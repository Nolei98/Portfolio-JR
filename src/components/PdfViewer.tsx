import { useEffect, useRef, useState } from 'react';

const PDFJS_VERSION = '4.7.76';
const PDFJS_BASE = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build`;

let pdfjsPromise: Promise<any> | null = null;
function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = import(/* @vite-ignore */ `${PDFJS_BASE}/pdf.min.mjs`).then((mod) => {
      mod.GlobalWorkerOptions.workerSrc = `${PDFJS_BASE}/pdf.worker.min.mjs`;
      return mod;
    });
  }
  return pdfjsPromise;
}

export function PdfViewer({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    setStatus('loading');
    if (container) container.innerHTML = '';

    loadPdfjs()
      .then(async (pdfjs) => {
        const doc = await pdfjs.getDocument(url).promise;
        if (cancelled || !container) return;

        const scale = Math.min(window.devicePixelRatio || 1, 2) * 1.5;
        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i);
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.className = 'w-full h-auto rounded-lg shadow-lg border border-ink-line';
          const ctx = canvas.getContext('2d');
          if (!ctx || cancelled) return;
          await page.render({ canvasContext: ctx, viewport }).promise;
          if (cancelled || !container) return;
          container.appendChild(canvas);
        }
        if (!cancelled) setStatus('ready');
      })
      .catch(() => !cancelled && setStatus('error'));

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="relative w-full h-full overflow-y-auto bg-ink-bg">
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-ink-muted font-mono text-[11px] uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-ink-accent animate-pulse" />
          Carregando PDF…
        </div>
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-muted font-mono text-[11px] uppercase tracking-widest text-center px-6">
          <span>Não foi possível exibir o PDF aqui.</span>
          <a href={url} target="_blank" rel="noreferrer" className="text-ink-accent underline">
            Abrir em nova aba
          </a>
        </div>
      )}
      <div ref={containerRef} className="max-w-3xl mx-auto flex flex-col items-center gap-4 p-4 sm:p-8" />
    </div>
  );
}
