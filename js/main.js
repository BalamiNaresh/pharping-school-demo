// Pharping Secondary School – Main JS

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile menu toggle ──────────────────────────────────────────
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close when clicking a link
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'))
    );
  }

  // ── Active nav link based on current page ──────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav-active');
    }
  });

  // ── Scroll reveal ──────────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // ── Animated number counters ───────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        let current = 0;
        const increment = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + increment, target);
          entry.target.textContent = current.toLocaleString() + suffix;
          if (current >= target) clearInterval(timer);
        }, 25);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObserver.observe(el));

  // ── Sticky header shadow ───────────────────────────────────────
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('shadow-lg', window.scrollY > 10);
    });
  }

  // ── Admission form submit (prevent default + show thank you) ───
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('form-success');
      if (msg) {
        msg.classList.remove('hidden');
        form.reset();
        setTimeout(() => msg.classList.add('hidden'), 5000);
      }
    });
  }



  // ── Page enter animation ──────────────────────────────────────
  document.body.classList.add('page-enter');

});
  // Course Structure Tabs
  (function injectTabStyle() {
    const s = document.createElement('style');
    s.textContent = '.active-tab{background:#0b1f3a;color:#fff;box-shadow:0 2px 8px rgba(11,31,58,.18);}';
    document.head.appendChild(s);
  })();

  const TABS = ['class9','class10','class11','class12'];
  function switchTab(id) {
    TABS.forEach(t => {
      const panel = document.getElementById('tab-' + t);
      if (panel) panel.classList.toggle('hidden', t !== id);
      const btn = document.getElementById('btn-' + t);
      if (!btn) return;
      if (t === id) {
        btn.classList.add('active-tab');
        btn.classList.remove('text-slate-500','hover:text-navy-900');
      } else {
        btn.classList.remove('active-tab');
        btn.classList.add('text-slate-500','hover:text-navy-900');
      }
    });
  }