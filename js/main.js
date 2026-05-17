// ========== Theme Toggle ==========
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  toggle.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
  });

  // ========== Scroll Reveal ==========
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ========== Email Copy ==========
  const emailCopy = document.getElementById('emailCopy');
  const copyIcon = document.getElementById('copyIcon');
  emailCopy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('hello@lixinyun.design');
      copyIcon.outerHTML = '<svg class="icon icon-sm copy-done" id="copyIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 6"/></svg>';
      setTimeout(() => {
        const icon = document.getElementById('copyIcon');
        if (icon) {
          icon.outerHTML = '<svg class="icon icon-sm" id="copyIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        }
      }, 2000);
    } catch {
      // fallback
    }
  });

  // ========== Contact Form ==========
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 6"/></svg> 发送成功';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.innerHTML = origHTML;
      btn.style.background = '';
      e.target.reset();
    }, 2000);
  });

  // ========== Nav scroll effect ==========
  const nav = document.querySelector('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 100 && y > lastScroll) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = y;
  }, { passive: true });