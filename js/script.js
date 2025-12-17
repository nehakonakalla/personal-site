document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          menuToggle && menuToggle.classList.remove('active');
        }
      }
    });
  });

  // Resolve profile image named 'nehaprofilepic' with unknown extension
  function setImageByBase(id, baseName) {
    const el = document.getElementById(id);
    if (!el) return;
    const exts = ['jpg', 'jpeg', 'png', 'webp', 'avif'];
    let idx = 0;
    function tryNext() {
      if (idx >= exts.length) return;
      const path = `images/${baseName}.${exts[idx++]}`;
      const testImg = new Image();
      testImg.onload = function() { el.src = path; el.style.display = 'block'; };
      testImg.onerror = tryNext;
      testImg.src = path;
    }
    tryNext();
  }

  setImageByBase('hero-photo', 'nehaprofilepic');
  setImageByBase('profile-avatar', 'nehaprofilepic');
  // Skills "Show more/less" toggle
  const skillsTags = document.getElementById('skills-tags');
  const skillsToggle = document.getElementById('skills-toggle');
  if (skillsTags && skillsToggle) {
    skillsToggle.addEventListener('click', function() {
      const expanded = skillsTags.classList.toggle('expanded');
      skillsToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      skillsToggle.textContent = expanded ? 'Show less' : 'Show more';
    });
  }
});
