import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const hidePreloader = () => {
  const el = document.getElementById('app-preloader');
  if (!el) return;
  el.classList.add('pl-hide');
  el.addEventListener('transitionend', () => el.remove(), { once: true });
};

if (document.readyState === 'complete') {
  hidePreloader();
} else {
  window.addEventListener('load', hidePreloader, { once: true });
}
