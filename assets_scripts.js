// Minimal interactive behaviors: mobile nav toggle, subscribe form (local storage)
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if (mobileNav.hasAttribute('hidden')) mobileNav.removeAttribute('hidden');
      else mobileNav.setAttribute('hidden', '');
    });
  }

  // Subscribe form — stores email in localStorage and gives a friendly response.
  const form = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email');
  const msg = document.getElementById('subscribe-msg');

  if (form && emailInput && msg) {
    // Prefill if previously saved
    const saved = localStorage.getItem('rbp360_subscribe');
    if (saved) {
      msg.textContent = `Previously saved: ${saved}`;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.style.color = 'crimson';
        return;
      }
      localStorage.setItem('rbp360_subscribe', email);
      msg.style.color = '';
      msg.textContent = 'Thanks — your email is saved locally. You will be notified here when apps go live.';
      emailInput.value = '';
    });
  }
});