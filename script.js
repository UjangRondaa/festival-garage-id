/* ============================================
   FESTIVAL GARAGE ID — Interactivity
   ============================================ */

(function () {
  'use strict';

  // ===== CONFIG =====
  const WA_NUMBER = '6282198901253'; // GANTI: nomor WhatsApp admin (62 + nomor tanpa 0)
  const WA_BASE_MESSAGE = 'Halo Festival Garage ID, saya mau pesan mobil langka FH5.';

  // ===== 1. WhatsApp deep links =====
  // Semua elemen dengan [data-wa] otomatis diarahkan ke wa.me
  document.querySelectorAll('[data-wa]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const car = el.getAttribute('data-car');
      const msg = car
        ? `Halo Festival Garage ID, saya tertarik dengan *${car}*. Apakah masih ready stock?`
        : WA_BASE_MESSAGE;
      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener');
    });
  });

  // ===== 2. Smooth scroll dengan offset navbar =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '#wa') return; // biarkan default / handler lain
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
      window.scrollTo({ top, behavior: 'smooth' });
      // close mobile nav if open
      document.querySelector('.nav')?.classList.remove('is-open');
    });
  });

  // ===== 3. Active nav link saat scroll =====
  const sections = ['hero', 'katalog', 'cara-kerja', 'faq'].map((id) => ({
    id,
    el: document.getElementById(id),
    link: document.querySelector(`.nav__link[href="#${id}"]`),
  })).filter((s) => s.el && s.link);

  const setActive = () => {
    const scrollPos = window.scrollY + 120;
    let current = sections[0];
    for (const s of sections) {
      if (s.el.offsetTop <= scrollPos) current = s;
    }
    sections.forEach((s) =>
      s.link.classList.toggle('nav__link--active', s.id === current.id)
    );
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // ===== 4. Mobile nav toggle =====
  const navToggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ===== 5. FAQ — pastikan hanya 1 yang open (opsional) =====
  // Comment out kalau mau multiple boleh terbuka bersama
  document.querySelectorAll('.faq__item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq__item').forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // ===== 6. Lazy reveal animation (subtle) =====
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.car-card, .step, .faq__item').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      observer.observe(el);
    });
  }

  // ===== 7. Console branding =====
  console.log(
    '%c🏁 Festival Garage ID',
    'color: #E8490F; font-size: 24px; font-weight: 900;'
  );
  console.log(
    '%cDiler virtual mobil langka Forza Horizon 5.',
    'color: #999; font-size: 12px;'
  );
})();
