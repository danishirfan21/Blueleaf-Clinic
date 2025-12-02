/**
 * Blueleaf Clinic - Mobile Sticky CTA Bar
 * Shows/hides sticky bottom bar with Call and Book buttons on mobile
 */

class MobileCTABar {
  constructor() {
    this.ctaBar = document.querySelector('.mobile-cta-bar');
    this.showThreshold = 300; // Show after scrolling 300px
    this.lastScroll = 0;
    this.isVisible = false;

    this.init();
  }

  init() {
    if (!this.ctaBar) {
      console.warn('Mobile CTA bar not found');
      return;
    }

    // Show/hide on scroll
    window.addEventListener('scroll', () => this.handleScroll());

    // Hide when in footer (optional)
    this.checkFooterProximity();

    // Track CTA clicks (for analytics)
    this.trackClicks();

    console.log('Mobile CTA bar initialized');
  }

  handleScroll() {
    const currentScroll = window.pageYOffset;

    // Show after threshold
    if (currentScroll > this.showThreshold && !this.isVisible) {
      this.show();
    }

    // Hide when scrolling back to top
    if (currentScroll <= this.showThreshold && this.isVisible) {
      this.hide();
    }

    // Check if near footer
    this.checkFooterProximity();

    this.lastScroll = currentScroll;
  }

  show() {
    this.ctaBar.classList.add('visible');
    this.isVisible = true;
  }

  hide() {
    this.ctaBar.classList.remove('visible');
    this.isVisible = false;
  }

  checkFooterProximity() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const footerTop = footer.offsetTop;
    const windowBottom = window.pageYOffset + window.innerHeight;

    // Hide CTA bar when footer is visible to avoid overlap
    if (windowBottom >= footerTop - 100) {
      this.ctaBar.style.transform = 'translateY(100%)';
    } else if (this.isVisible) {
      this.ctaBar.style.transform = 'translateY(0)';
    }
  }

  trackClicks() {
    const callBtn = this.ctaBar.querySelector('.mobile-cta-bar__btn--call');
    const bookBtn = this.ctaBar.querySelector('.mobile-cta-bar__btn--book');

    if (callBtn) {
      callBtn.addEventListener('click', () => {
        console.log('Mobile CTA: Call button clicked');
        // Track with analytics (e.g., Google Analytics)
        // gtag('event', 'click', { 'event_category': 'Mobile CTA', 'event_label': 'Call' });
      });
    }

    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        console.log('Mobile CTA: Book button clicked');
        // Track with analytics
        // gtag('event', 'click', { 'event_category': 'Mobile CTA', 'event_label': 'Book' });
      });
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Only init on mobile/tablet devices
  if (window.innerWidth < 768) {
    new MobileCTABar();
  }

  // Re-init on resize if switching to mobile
  let mobileCtaBar = null;
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth < 768 && !mobileCtaBar) {
      mobileCtaBar = new MobileCTABar();
    }
  }, 250));
});

// Debounce utility
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

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MobileCTABar };
}
