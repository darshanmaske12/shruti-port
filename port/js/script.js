/**
 * SHRUTI BHARTI — CINEMATIC FILM PRODUCER PORTFOLIO
 * Vanilla JavaScript: Navigation, Scroll Reveals, Portfolio Filtering, Lightbox & Contact Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveals();
  initPortfolio();
  initLightbox();
  initContactForm();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. NAVBAR SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initNavbar() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on initial load
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileMenu) return;

  const toggleMenu = () => {
    const isActive = hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    document.body.style.overflow = isActive ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger.classList.contains('is-active')) {
        toggleMenu();
      }
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('is-active')) {
      toggleMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   3. SMOOTH SCROLLING WITH OFFSET
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  const headerHeight = 84;

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active Link Tracking on Scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
}

/* --------------------------------------------------------------------------
   4. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   -------------------------------------------------------------------------- */
function initScrollReveals() {
  // If user prefers reduced motion, reveal everything immediately
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-fade');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   5. PORTFOLIO FILTERING
   -------------------------------------------------------------------------- */
function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (!filterBtns.length || !portfolioCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Toggle active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('is-hidden');
          // Subtle fade in
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. LIGHTBOX & VIDEO PREVIEW
   -------------------------------------------------------------------------- */
let activeLightboxIndex = 0;
let visiblePortfolioItems = [];

function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');
  const mediaContainer = document.getElementById('lightboxMediaContainer');
  const titleEl = document.getElementById('lightboxTitle');
  const categoryEl = document.getElementById('lightboxCategory');

  if (!modal || !mediaContainer) return;

  const getVisibleItems = () => {
    return Array.from(document.querySelectorAll('.portfolio-card:not(.is-hidden)'));
  };

  const openLightbox = (index) => {
    visiblePortfolioItems = getVisibleItems();
    if (!visiblePortfolioItems.length) return;

    activeLightboxIndex = (index >= 0 && index < visiblePortfolioItems.length) ? index : 0;
    updateLightboxContent();

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Stop video if playing
    const video = mediaContainer.querySelector('video');
    if (video) video.pause();
    mediaContainer.innerHTML = '';
  };

  const updateLightboxContent = () => {
    const currentCard = visiblePortfolioItems[activeLightboxIndex];
    if (!currentCard) return;

    const title = currentCard.getAttribute('data-title') || 'Film Project';
    const category = currentCard.getAttribute('data-category-label') || 'Production';
    const imageSrc = currentCard.getAttribute('data-full-img');
    const videoSrc = currentCard.getAttribute('data-video-src');

    if (titleEl) titleEl.textContent = title;
    if (categoryEl) categoryEl.textContent = category;

    if (videoSrc) {
      mediaContainer.innerHTML = `
        <video controls autoplay playsinline style="width:100%; height:100%; object-fit:contain; background:#000;">
          <source src="${videoSrc}" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      `;
    } else {
      mediaContainer.innerHTML = `
        <img src="${imageSrc}" alt="${title}" style="width:100%; height:100%; object-fit:contain;">
      `;
    }
  };

  const showNext = () => {
    visiblePortfolioItems = getVisibleItems();
    activeLightboxIndex = (activeLightboxIndex + 1) % visiblePortfolioItems.length;
    updateLightboxContent();
  };

  const showPrev = () => {
    visiblePortfolioItems = getVisibleItems();
    activeLightboxIndex = (activeLightboxIndex - 1 + visiblePortfolioItems.length) % visiblePortfolioItems.length;
    updateLightboxContent();
  };

  // Bind Open Buttons across portfolio cards
  document.querySelectorAll('.portfolio-card').forEach((card, index) => {
    // Media click
    const mediaWrap = card.querySelector('.card-media-wrapper');
    if (mediaWrap) {
      mediaWrap.addEventListener('click', () => {
        visiblePortfolioItems = getVisibleItems();
        const curIndex = visiblePortfolioItems.indexOf(card);
        openLightbox(curIndex !== -1 ? curIndex : 0);
      });
    }

    // Action button clicks
    const openBtn = card.querySelector('.btn-open-lightbox');
    if (openBtn) {
      openBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        visiblePortfolioItems = getVisibleItems();
        const curIndex = visiblePortfolioItems.indexOf(card);
        openLightbox(curIndex !== -1 ? curIndex : 0);
      });
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'ArrowLeft') showPrev();
  });
}

/* --------------------------------------------------------------------------
   7. CONTACT FORM VALIDATION & FEEDBACK
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contactName')?.value.trim();
    const email = form.querySelector('#contactEmail')?.value.trim();
    const projectType = form.querySelector('#contactProject')?.value;
    const message = form.querySelector('#contactMessage')?.value.trim();

    // Basic Validation
    if (!name || !email || !message) {
      feedback.textContent = 'Please fill out all required fields before submitting.';
      feedback.className = 'form-feedback error';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.className = 'form-feedback error';
      return;
    }

    // Success State
    feedback.innerHTML = `<strong>Thank you, ${name}!</strong> Your inquiry regarding ${projectType || 'your project'} has been received. Shruti Bharti will review your message and respond promptly.`;
    feedback.className = 'form-feedback success';
    form.reset();

    setTimeout(() => {
      feedback.style.display = 'none';
      feedback.className = 'form-feedback';
    }, 7000);
  });
}

/* --------------------------------------------------------------------------
   8. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

