const menuButton = document.querySelector('.menu-toggle');
const drawer = document.querySelector('#portfolio-drawer');
const closeButton = document.querySelector('.drawer-close');
const backdrop = document.querySelector('.drawer-backdrop');
const themeButton = document.querySelector('.theme-toggle');
const body = document.body;

function setDrawer(open) {
  body.classList.toggle('drawer-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close portfolio menu' : 'Open portfolio menu');
  drawer.setAttribute('aria-hidden', String(!open));
}

menuButton.addEventListener('click', () => setDrawer(menuButton.getAttribute('aria-expanded') !== 'true'));
closeButton.addEventListener('click', () => setDrawer(false));
backdrop.addEventListener('click', () => setDrawer(false));
drawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setDrawer(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setDrawer(false);
});

function setTheme(isDark) {
  body.classList.toggle('dark-mode', isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.innerHTML = `<span aria-hidden="true">${isDark ? '☼' : '◐'}</span> ${isDark ? 'Light Mode' : 'Dark Mode'}`;
  try { localStorage.setItem('fahim-portfolio-theme', isDark ? 'dark' : 'light'); } catch {}
}

let savedTheme = 'light';
try { savedTheme = localStorage.getItem('fahim-portfolio-theme') || 'light'; } catch {}
setTheme(savedTheme === 'dark');
themeButton.addEventListener('click', () => setTheme(themeButton.getAttribute('aria-pressed') !== 'true'));

document.querySelector('#year').textContent = new Date().getFullYear();
