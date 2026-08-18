import './style.css';

/** Reveal-on-scroll: adds `.in` to `.reveal` elements as they enter the viewport. */
function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (els.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 },
  );

  els.forEach((el) => observer.observe(el));
}

/** Theme toggle: cycles the data-theme attribute, seeded from the OS preference. */
function initThemeToggle(): void {
  const btn = document.getElementById('themetog');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const cur = root.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = cur === 'dark' ? 'light' : cur === 'light' ? 'dark' : prefersDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
  });
}

function init(): void {
  initReveal();
  initThemeToggle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
