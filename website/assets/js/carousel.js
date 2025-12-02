/**
 * Blueleaf Clinic - Doctors Carousel
 * Handles horizontal scrolling carousel with arrow navigation
 */

class DoctorsCarousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.track = this.carousel.querySelector('.doctors-carousel__track');
    this.prevBtn = this.carousel.querySelector('[data-carousel-prev]');
    this.nextBtn = this.carousel.querySelector('[data-carousel-next]');
    this.cards = this.track.querySelectorAll('.doctor-card');

    this.cardWidth = 0;
    this.scrollAmount = 0;
    this.maxScroll = 0;

    this.init();
  }

  init() {
    if (!this.track || !this.prevBtn || !this.nextBtn) {
      console.warn('Carousel elements not found');
      return;
    }

    // Calculate dimensions
    this.calculateDimensions();

    // Set initial button states
    this.updateButtons();

    // Event listeners
    this.prevBtn.addEventListener('click', () => this.scrollPrev());
    this.nextBtn.addEventListener('click', () => this.scrollNext());

    // Update on scroll
    this.track.addEventListener('scroll', () => {
      this.updateButtons();
    });

    // Recalculate on window resize
    window.addEventListener('resize', debounce(() => {
      this.calculateDimensions();
      this.updateButtons();
    }, 250));

    // Touch/swipe support
    this.initTouchSupport();
  }

  calculateDimensions() {
    if (this.cards.length === 0) return;

    // Get card width including gap
    const firstCard = this.cards[0];
    const cardStyle = window.getComputedStyle(firstCard);
    const marginRight = parseInt(cardStyle.marginRight) || 24; // default gap from CSS

    this.cardWidth = firstCard.offsetWidth + marginRight;

    // Scroll by 1 card on mobile, 2-3 on desktop
    const isMobile = window.innerWidth < 768;
    this.scrollAmount = isMobile ? this.cardWidth : this.cardWidth * 2;

    // Max scroll position
    this.maxScroll = this.track.scrollWidth - this.track.clientWidth;
  }

  scrollPrev() {
    const currentScroll = this.track.scrollLeft;
    const newScroll = Math.max(0, currentScroll - this.scrollAmount);

    this.track.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  }

  scrollNext() {
    const currentScroll = this.track.scrollLeft;
    const newScroll = Math.min(this.maxScroll, currentScroll + this.scrollAmount);

    this.track.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  }

  updateButtons() {
    const currentScroll = this.track.scrollLeft;

    // Disable prev button at start
    if (currentScroll <= 0) {
      this.prevBtn.disabled = true;
    } else {
      this.prevBtn.disabled = false;
    }

    // Disable next button at end
    if (currentScroll >= this.maxScroll - 5) { // -5 for rounding errors
      this.nextBtn.disabled = true;
    } else {
      this.nextBtn.disabled = false;
    }
  }

  initTouchSupport() {
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    this.track.addEventListener('mousedown', (e) => {
      isDown = true;
      this.track.style.cursor = 'grabbing';
      startX = e.pageX - this.track.offsetLeft;
      scrollLeft = this.track.scrollLeft;
    });

    this.track.addEventListener('mouseleave', () => {
      isDown = false;
      this.track.style.cursor = 'grab';
    });

    this.track.addEventListener('mouseup', () => {
      isDown = false;
      this.track.style.cursor = 'grab';
    });

    this.track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - this.track.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      this.track.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    this.track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX - this.track.offsetLeft;
      touchScrollLeft = this.track.scrollLeft;
    });

    this.track.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - this.track.offsetLeft;
      const walk = (x - touchStartX) * 2;
      this.track.scrollLeft = touchScrollLeft - walk;
    });
  }
}

// Debounce utility (if not already imported from main.js)
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

// Initialize all carousels on page
function initCarousels() {
  const carousels = document.querySelectorAll('.doctors-carousel');

  carousels.forEach(carousel => {
    new DoctorsCarousel(carousel);
  });

  console.log(`Initialized ${carousels.length} carousel(s)`);
}

// Auto-initialize on DOM load
document.addEventListener('DOMContentLoaded', initCarousels);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DoctorsCarousel, initCarousels };
}
