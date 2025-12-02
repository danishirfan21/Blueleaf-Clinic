/**
 * Blueleaf Clinic - Main JavaScript
 * Handles: mobile menu, scroll animations, accordion, smooth scroll
 */

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu on window resize if desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ========================================
// SCROLL FADE-IN ANIMATIONS
// ========================================

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length === 0) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// ========================================
// ACCORDION FUNCTIONALITY
// ========================================

function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion__header');

  if (accordionHeaders.length === 0) return;

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all accordion items
      const allItems = document.querySelectorAll('.accordion__item');
      allItems.forEach(accordionItem => {
        accordionItem.classList.remove('active');
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ========================================
// STICKY HEADER ON SCROLL
// ========================================

function initStickyHeader() {
  const header = document.querySelector('.header');

  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0px 4px 16px rgba(43, 122, 155, 0.15)';
    } else {
      header.style.boxShadow = '0px 2px 8px rgba(43, 122, 155, 0.06)';
    }

    lastScroll = currentScroll;
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      // Skip if just "#"
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// FORM VALIDATION
// ========================================

function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const formGroups = form.querySelectorAll('.form-group');

      formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        const errorElement = group.querySelector('.form-error');

        // Remove previous error state
        group.classList.remove('error');

        // Check if required and empty
        if (input.hasAttribute('required') && !input.value.trim()) {
          group.classList.add('error');
          if (errorElement) {
            errorElement.textContent = 'This field is required';
          }
          isValid = false;
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            group.classList.add('error');
            if (errorElement) {
              errorElement.textContent = 'Please enter a valid email address';
            }
            isValid = false;
          }
        }

        // Phone validation
        if (input.type === 'tel' && input.value.trim()) {
          const phoneRegex = /^[\d\s\-\+\(\)]+$/;
          if (!phoneRegex.test(input.value)) {
            group.classList.add('error');
            if (errorElement) {
              errorElement.textContent = 'Please enter a valid phone number';
            }
            isValid = false;
          }
        }
      });

      if (isValid) {
        // Form is valid, show success message
        alert('Thank you! Your message has been received. We\'ll get back to you soon.');
        form.reset();
      } else {
        // Scroll to first error
        const firstError = form.querySelector('.form-group.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
}

// ========================================
// SET ACTIVE NAV LINK BASED ON CURRENT PAGE
// ========================================

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath ||
        (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('nav__link--active');
    }
  });
}

// ========================================
// CALL TO ACTION PHONE LINK
// ========================================

function initPhoneLinks() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

  phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Track phone click (can integrate with analytics)
      console.log('Phone link clicked:', link.href);
    });
  });
}

// ========================================
// INITIALIZE ALL ON DOM LOAD
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimations();
  initAccordion();
  initStickyHeader();
  initSmoothScroll();
  initFormValidation();
  setActiveNavLink();
  initPhoneLinks();

  console.log('Blueleaf Clinic: All scripts initialized ✓');
});

// ========================================
// UTILITY: DEBOUNCE FUNCTION
// ========================================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    debounce
  };
}
