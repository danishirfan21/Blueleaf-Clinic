# Blueleaf Clinic - Website Codebase

## 💙 Modern Family Healthcare Website

Complete, production-ready website for Blueleaf Clinic built with HTML5, CSS3, and vanilla JavaScript.

🌐 **Live Site:** [https://blueleaf-clinic.netlify.app](https://blueleaf-clinic.netlify.app)

---

## 📁 File Structure

```
website/
├── index.html                  # Homepage with hero, services, doctors, testimonials
├── about.html                  # About us, mission, values, story
├── services.html               # Service details with FAQs (accordion)
├── doctors.html                # Doctors listing page
├── doctor-profile.html         # Individual doctor profile
├── contact.html                # Contact form, map, office hours
├── brand.html                  # Brand guidelines showcase
├── assets/
│   ├── css/
│   │   ├── tokens.css          # Design tokens (colors, fonts, spacing)
│   │   └── style.css           # All component styles & layouts
│   └── js/
│       ├── main.js             # Core functionality (menu, scroll, accordion, forms)
│       ├── carousel.js         # Doctors carousel with swipe support
│       └── mobile-cta.js       # Sticky mobile CTA bar
└── README.md                   # This file
```

---

## 🎨 Brand System

### Colors
- **Blueleaf Blue:** `#2B7A9B` (Primary)
- **Fresh Leaf Green:** `#6DB89F` (Accent)
- **Sunrise Coral:** `#E8927C` (CTA)
- **Warm Cream:** `#F8F6F3` (Background)
- **Deep Charcoal:** `#2C3E50` (Text)

### Typography
- **Headings:** Plus Jakarta Sans (Google Fonts)
- **Body:** Inter (Google Fonts)

### Design Principles
- Mobile-first responsive design
- 8px spacing grid system
- Rounded corners (12-16px radius)
- WCAG AA accessibility compliant
- Clean, modern, warm aesthetic

---

## ✨ Features

### Homepage (`index.html`)
- Hero section with dual CTAs
- Services grid (6 services)
- Doctors carousel (4 doctors, swipeable)
- Testimonials grid (3 testimonials)
- CTA banner
- Mobile sticky bottom bar

### About Page (`about.html`)
- Brand story section
- Mission statement
- 6 core values
- "What makes us different" cards

### Services Page (`services.html`)
- 6 detailed service sections
- Each service has description + CTA
- FAQ accordion (6 questions)
- Alternating cream/white backgrounds

### Doctors Page (`doctors.html`)
- Grid of 6 doctors
- Each card shows: photo, name, specialty, credentials, bio snippet
- Links to individual profiles

### Doctor Profile (`doctor-profile.html`)
- Full biography
- Education & training
- Areas of expertise (4 specialties)
- Patient testimonials
- Availability & booking CTA

### Contact Page (`contact.html`)
- Contact info cards (call, visit, email)
- Office hours display
- Appointment booking form with validation
- Map placeholder with Google Maps link

### Brand Guidelines (`brand.html`)
- Brand personality overview
- Logo variations & usage rules
- Complete color palette with HEX codes
- Typography showcase
- Design principles
- Photography guidelines
- Download assets section

---

## 🔧 JavaScript Features

### Mobile Menu (`main.js`)
- Hamburger toggle animation
- Closes on link click
- Closes on window resize (desktop)
- Prevents body scroll when open

### Scroll Animations (`main.js`)
- Fade-in effect using Intersection Observer
- Triggers at 10% visibility
- Applied to elements with `.fade-in` class

### Accordion (`main.js`)
- FAQ expand/collapse
- One item open at a time
- Smooth height transition
- Accessible ARIA attributes

### Form Validation (`main.js`)
- Required field checking
- Email format validation
- Phone number validation
- Real-time error display
- Success alert on submit

### Doctors Carousel (`carousel.js`)
- Horizontal scroll with arrow buttons
- Touch/swipe support
- Mouse drag to scroll
- Responsive: 1 card mobile, 2-3 desktop
- Auto-disable buttons at start/end

### Mobile CTA Bar (`mobile-cta.js`)
- Shows after 300px scroll
- Hides near footer (no overlap)
- Call + Book buttons
- Only active on mobile (<768px)

### Sticky Header (`main.js`)
- Enhanced shadow on scroll
- Always visible
- Smooth transitions

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px

### Mobile Optimizations
- Stacked layouts
- Larger touch targets (48px minimum)
- Simplified navigation
- Sticky bottom CTA bar
- Optimized font sizes

---

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text for all images
- WCAG AA color contrast (4.5:1 for text)
- Screen reader friendly
- Form labels and error messages

---

## 🚀 Getting Started

### Live Production Site

Visit the live website at: **[https://blueleaf-clinic.netlify.app](https://blueleaf-clinic.netlify.app)**

### Local Development

**1. Open Locally**

Simply open `index.html` in a modern web browser:
```bash
# Navigate to website folder
cd "D:\Blueleaf Clinic\website"

# Open index.html
# (Double-click or right-click → Open with → Browser)
```

**2. Local Development Server (Optional)**

For a better development experience:

**Using Python:**
```bash
cd "D:\Blueleaf Clinic\website"
python -m http.server 8000
# Visit: http://localhost:8000
```

**Using Node.js (with live-server):**
```bash
npm install -g live-server
cd "D:\Blueleaf Clinic\website"
live-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

---

## 🎯 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### Progressive Enhancement
- Core content accessible without JavaScript
- Enhanced interactions with JavaScript enabled
- Graceful fallbacks for older browsers

---

## 📝 Customization Guide

### Changing Colors

Edit `assets/css/tokens.css`:
```css
:root {
  --color-primary: #2B7A9B;  /* Change to your brand color */
  --color-accent: #6DB89F;   /* Change to your accent */
  /* ... */
}
```
All components automatically update.

### Adding a New Page

1. Copy an existing HTML file
2. Update the page title and meta description
3. Set correct active nav link class
4. Add content following BEM naming
5. Link from navigation and footer

### Modifying Spacing

All spacing uses the 8px grid system in `tokens.css`:
```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
/* ... */
```

---

## 🏗️ Code Architecture

### CSS Organization
- **tokens.css:** Design system variables (single source of truth)
- **style.css:** All component styles using BEM methodology

### BEM Naming Convention
```css
.block { }
.block__element { }
.block--modifier { }

/* Example: */
.doctor-card { }
.doctor-card__image { }
.doctor-card--featured { }
```

### JavaScript Modules
- Each feature in separate function
- Initialized on `DOMContentLoaded`
- Defensive programming (null checks)
- Debounced resize handlers
- Console logging for debugging

---

## 🔍 SEO & Performance

### SEO Optimizations
- Semantic HTML structure
- Meta descriptions on all pages
- Descriptive page titles
- Structured heading hierarchy (H1 → H6)
- Descriptive link text
- Alt text for images

### Performance
- CSS loaded in `<head>`
- JavaScript loaded before `</body>`
- Google Fonts with `display=swap`
- Minimal external dependencies
- Efficient selectors
- Debounced scroll/resize events

---

## 📞 Contact Information

**Blueleaf Clinic (Fictional)**
- Phone: (555) 123-4567
- Email: hello@blueleafclinic.com
- Address: 123 Wellness Way, Your City, ST 12345
- Hours: Mon-Fri 8am-6pm, Sat 9am-2pm

---

## 📄 License

This is a **fictional brand case study** created for portfolio and educational purposes.

**You May:**
- Use as a portfolio project
- Reference for your own work
- Learn from the code structure

**You May Not:**
- Claim as work for a real client
- Use "Blueleaf Clinic" name for actual business

---

## 🙏 Credits

**Fonts:**
- Plus Jakarta Sans by Tokotype (Google Fonts, SIL OFL)
- Inter by Rasmus Andersson (Google Fonts, SIL OFL)

**Design System:**
- Based on Blueleaf Clinic Brand Identity System 2025
- All branding documentation in parent directory

---

## 🔥 Quick Start Checklist

- [ ] Open `index.html` in browser
- [ ] Test mobile menu toggle
- [ ] Scroll to see fade-in animations
- [ ] Try the doctors carousel (swipe/click arrows)
- [ ] Submit the contact form
- [ ] Expand FAQ accordion items
- [ ] Resize browser to test responsive design
- [ ] Test on mobile device or emulator
- [ ] Check all page links work
- [ ] Verify sticky mobile CTA appears on scroll

---

## 🐛 Troubleshooting

**Fonts not loading?**
- Check internet connection (Google Fonts CDN)
- Verify `@import` in `tokens.css`

**JavaScript not working?**
- Check browser console for errors
- Ensure scripts are loaded after DOM elements
- Verify file paths are correct

**Carousel not scrolling?**
- Check that `.doctors-carousel__track` has overflow-x: auto
- Verify button `data-` attributes match JavaScript

**Form validation not working?**
- Ensure form has `data-validate` attribute
- Check that `.form-group`, `.form-input`, and `.form-error` classes exist

---

## 🌐 Deployment

**Live Site:** [https://blueleaf-clinic.netlify.app](https://blueleaf-clinic.netlify.app)

**Hosted on:** Netlify  
**Deployment:** Automatic deployment from GitHub (main branch)

### Deploy Your Own Copy

1. Fork this repository
2. Sign up for [Netlify](https://www.netlify.com/) (free)
3. Connect your GitHub account
4. Select the repository and set:
   - **Base directory**: `website`
   - **Build command**: (leave empty)
   - **Publish directory**: `website`
5. Deploy!

Your site will be live at a Netlify URL that you can customize.

---

## 📚 Documentation

Full brand documentation available in parent directory:
- `01_Brand_Identity_System.md`
- `02_Social_Media_Kit.md`
- `03_Ad_Banner_Pack.md`
- `04_Ebook_Lead_Magnet_Design.md`
- `05_Brand_Guidelines.md`
- `06_Mockup_Presentation_Ideas.md`

---

**Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript**

*Healthcare that grows with you.* 💙
