// Theme toggle with persist
(function () {
  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggleBtn.textContent = next === 'light' ? '🌙' : '☀️';
    });
    const current = root.getAttribute('data-theme');
    toggleBtn.textContent = current === 'light' ? '🌙' : '☀️';
  }
})();

// Mobile menu toggle
(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!menuButton || !nav) return;
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
})();

// Smooth scroll offset for sticky header
(function () {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');
  const headerH = () => (header ? header.getBoundingClientRect().height : 0);
  links.forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - headerH() - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', id);
    });
  });
})();

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();


