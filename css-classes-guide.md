# CSS Classes Guide - TestDino Landing Page

This guide provides a comprehensive overview of CSS classes organized by sections to help LLMs understand the styling system without reading the full CSS file.

## Table of Contents
1. [Typography & Fonts](#typography--fonts)
2. [Layout & Grid](#layout--grid)
3. [Navigation](#navigation)
4. [Hero Section](#hero-section)
5. [Pricing Components](#pricing-components)
6. [Blog Components](#blog-components)
7. [Footer](#footer)
8. [FAQ/Accordion](#faqaccordion)
9. [Comparison Tables](#comparison-tables)
10. [Form Elements](#form-elements)
11. [Utility Classes](#utility-classes)
12. [Responsive Breakpoints](#responsive-breakpoints)
13. [Unique Strengths Section](#unique-strengths-section)
14. [Why Choose TestDino Section](#why-choose-testdino-section)
15. [Feature Comparison Section](#feature-comparison-section)
16. [Loading & Animation Components](#loading--animation-components)

---

## Typography & Fonts

### Font Families
- `font-family: Geist, sans-serif` - Primary font
- `font-family: "Geist Mono", monospace` - Code/monospace
- `font-family: "Tobias TRIAL"` - Custom display font
- `font-family: "Manrope", sans-serif` - Headers
- `font-family: "Inter", sans-serif` - Navigation font

### Font Utilities
- `.ff-geist-mono` - Geist Mono font family utility

### Text Sizes
- `.blog-header` - 28px, line-height 2.25rem, font-weight 700
- `.blog-text` - 18px, line-height 30px
- `.pricing-card-title` - 1.125rem, font-weight 700
- `.pricing-card-price-text` - 1.875rem, font-weight 600
- `.comparison-price` - 34px, font-weight 600, line-height 40px
- `.comparison-price-unit` - 14px, font-weight 400
- `.pricing-card-price-unit` - 14px, font-weight 600

### Text Utilities
- `.text-balance` - text-wrap: balance
- `.text-gradient` - Gradient text (blue to purple)
- `.text-brand-blue` - Color: #5B75EE
- `.text-neutral` - Color: #212123
- `.text-muted` - Color: #6B7280

### CSS Custom Properties
- `--background`, `--foreground` - Light/dark theme variables
- `--primary`, `--secondary` - Color scheme variables
- `--border`, `--input`, `--ring` - UI element variables
- `--radius` - Border radius variable (0.5rem)

---

## Layout & Grid

### Container Classes
- `.pricing-container` - max-width: 1200px, margin: 0 auto
- `.comparison-container` - max-width: 1080px, margin: 0 auto
- `.footer-content` - max-width: 1280px, margin: 0 auto
- `.unique-strengths-container` - max-width: 1080px, margin: 0 auto
- `.why-choose-container` - max-width: 1280px, margin: 0 auto
- `.feature-comparison-header` - max-width: 1280px, margin: 0 auto
- `.feature-section` - max-width: 1280px, margin: 0 auto
- `#wrapper` - max-width: 1080px, margin: 0 auto, padding: 0 24px

### Grid Systems
- `.pricing-cards-grid` - Responsive grid (1/2/4 columns)
- `.footer-main-grid` - 1fr auto layout
- `.xl\:grid-cols-4` - 4 column grid (desktop)
- `.feature-comparison-grid` - 1fr grid (2fr on desktop)
- `.comparison-cards-container` - Flex column (row on desktop)

### Flexbox Utilities
- `.flex-center` - Center alignment
- `.flex-center-start` - Start alignment
- `.flex-center-between` - Space between
- `.gap-xs` to `.gap-xl` - Spacing utilities

### Section Layouts
- `.unique-strengths-section` - Full width, centered content
- `.why-choose-section` - White background, centered content
- `.feature-comparison-section` - Centered content with padding
- `.comparison-section` - White background, centered content

---

## Navigation

### Header Structure
- `.header-container` - Sticky header, height 56px/80px, z-index 50
- `.nav-wrapper` - Main nav container, max-width 1200px, border-radius 20px
- `.nav-content` - Flex container for nav items

### Logo & Branding
- `.nav-logo` - Logo container (flex-shrink: 0)
- `.nav-logo-img` - Logo image styling (height: auto)
- `.nav-logo-link` - Logo link wrapper (flex, gap: 8px)

### Navigation Links
- `.nav-links-desktop` - Desktop navigation (hidden on mobile, gap: 32px)
- `.nav-link` - Individual nav link styling (color: #171717, font-weight: 400)
- `.nav-link--active` - Active state (font-weight: 700)
- `.nav-link:hover` - Hover state (color: rgba(0, 0, 0, 0.7))

### Mobile Menu
- `.mobile-menu-button` - Hamburger menu button (display: block on mobile)
- `.mobile-menu-overlay` - Full-screen overlay (z-index: 9999, background: rgba(0, 0, 0, 0.8))
- `.mobile-menu-content` - Mobile menu container (flex column, background: white)
- `.mobile-menu-header` - Mobile menu header (flex, justify-content: space-between)
- `.mobile-menu-logo` - Mobile menu logo container
- `.mobile-menu-close` - Mobile menu close button
- `.mobile-menu-nav` - Mobile navigation area (flex: 1, padding: 30px 24px 0)
- `.mobile-menu-links` - Mobile link container (flex column, gap: 16px)
- `.mobile-menu-link` - Mobile menu link (font-size: 18px, color: #171717)
- `.mobile-menu-link--active` - Active mobile link (font-weight: 700)

### CTA Buttons
- `.nav-cta-button` - Desktop CTA button (display: none on mobile, background: black)
- `.mobile-menu-cta` - Mobile CTA container (padding: 32px 24px 32px)
- `.mobile-menu-cta-button` - Mobile CTA button (width: 100%, background: #171717)

### Responsive Navigation States
- `.mobile-menu-overlay.hidden` - Hidden overlay state
- Body classes: `.index-page`, `.mobile-menu-open`, `.scrolled` - State management

---

## Hero Section

### Hero Container
- `.hero-section` - Main hero container with gradient background
- `.hero-section::before` - Pattern overlay
- `.alternative-hero-section` - Alternative hero with different gradient
- `.alternative-hero-section::before` - Alternative pattern overlay

### Mobile Hero Styling
- White text and SVG styling for mobile
- `.playwright-badge` - Badge styling (border-radius: 9999px, padding: 8px 18px)
- `.playwright-badge-icon` - Badge icon container
- `.pop-up` - Button styling
- `#sidebarList` - Tab navigation

### Interactive Elements
- `.elem-star-hero` - Decorative star element
- `.animate-spin-slow` - Slow rotation animation (2.8s linear infinite)

### Hero Section States
- `.hero-section` - Default hero styling
- `.alternative-hero-section` - Alternative gradient hero
- Mobile-specific white text and SVG styling
- Responsive navigation logo switching (white/black based on scroll state)

### Hero Responsive Behavior
- Mobile: Always white text and SVG
- Desktop: Dynamic logo color based on scroll state
- Index page: Special white logo when not scrolled
- Non-index pages: Always black logo

---

## Pricing Components

### Pricing Cards
- `.pricing-card` - Base pricing card (min-height 650px)
- `.plan-card` - Base pricing card (min-height 650px)
- `.plan-card-gradient` - Plan card with gradient border
- `.pricing-card--neutral` - Free plan styling (padding: 24px)
- `.pricing-card--pro` - Pro plan styling (padding: 24px)
- `.pricing-card--team` - Team plan styling (padding: 18px)

### Card Structure
- `.pricing-card-header` - Card header container (flex, align-items: center)
- `.pricing-card-title` - Plan title (1.125rem, font-weight: 700)
- `.pricing-card-subtitle` - Plan description (14px, color: #6B7280)
- `.pricing-card-price` - Price container (margin-top: 1rem, margin-bottom: 1.5rem)
- `.pricing-card-price-text` - Price amount (1.875rem, font-weight: 600)
- `.pricing-card-price-unit` - Price unit (14px, color: #6B7280, font-weight: 600)
- `.pricing-card-button` - CTA button (width: 100%, background: #000, color: white)
- `.pricing-card-features` - Features list (flex column, gap: 0.75rem)

### Active States
- `.plan-active` - Blue border active state (border: 2px solid #5B75EE)
- `.active-plan` - Legacy active plan class
- `.active-plan--black` - Black border active state (border: 2px solid #171717)
- `.active-plan--gradient-pro` - Gradient border for pro
- `.active-plan--gradient-team` - Gradient border for team
- `.cell-highlighted` - Highlighted cell (background: rgb(91 117 238 / 5%))

### AI Features
- `.ai-features-container` - AI features section (width: 107%, background: #EEF4FF)
- `.ai-header` - AI section header (flex, align-items: center, gap: 16px)
- `.feature-item` - Individual feature item (flex, align-items: center, gap: 0.75rem)
- `.feature-item--table` - Table variant of feature item
- `.feature-item__icon` - Feature item icon (16px x 16px)
- `.feature-item__text` - Feature item text (16px, color: #212123)
- `.ai-feature-section` - Individual AI feature styling (background: #F1F8FF)
- `.advanced-ai-text` - Advanced AI features text styling (color: #5B75EE)
- `.enterprise-ai-feature` - Enterprise AI feature styling (gradient text)

### Pricing Calculator
- `.pricing-calculator` - Calculator container (flex column, gap: 12px)
- `.pricing-calculator-card` - Individual calculator cards (flex: 1, height: 120px)
- `#testExecutionSlider` - Test execution slider (height: 8px, gradient background)
- `.slider-labels` - Slider tick labels container (position: relative, height: 18px)
- `.slider-label` - Individual slider label (position: absolute, font-size: 15px)

### Pricing Tables
- `.pricing-table` - Pricing table container (max-width: 1200px, margin: 0 auto 2rem)
- `.pricing-table-header` - Table header (flex column, border-bottom: 1px solid #E5E5E5)
- `.pricing-table-header-content` - Header content wrapper (flex, align-items: center)
- `.pricing-table-title` - Table title (17.5px, font-weight: 600)
- `.pricing-table-row` - Table row (flex column, border-bottom: 1px solid #E5E5E5)
- `.pricing-table-cell` - Table cell (padding: 1rem, flex, align-items: center)
- `.pricing-table-cell--label` - Label cell (width: 100%, font-size: 16px)
- `.pricing-table-cell--value` - Value cell (font-size: 16px, color: #212123)
- `.pricing-table-cell--highlighted` - Highlighted cell (background: rgb(91 117 238 / 5%))

### Pricing Sections
- `.pricing-section` - Main pricing section (padding: 1rem 1rem 6.25rem, background: #FAFAFA)
- `.pricing-cards-grid` - Pricing cards grid layout (responsive: 1/2/4 columns)

### Tags and Labels
- `.tag-most-popular` - Most popular tag (gradient background, color: white)
- `.activeCTa_pln` - Active CTA plan styling (color: #645CFC)

---

## Blog Components

### Blog Layout
- `.blog-content-section` - Main blog content area (padding: 6rem left/right on desktop)
- `.blog-header` - Blog post title (28px, font-weight: 700, color: #0B0C0E)
- `.blog-text` - Blog paragraph text (18px, line-height: 30px, color: #404040)

### Quote Section
- `.quote-container` - Quote wrapper (margin: 1.5rem 0)
- `.quote-mark` - Quote mark styling (margin-bottom: 0.5rem)
- `.quote-mark .quote-svg` - Quote SVG (40px x 40px, filtered color)
- `.quote-text` - Quote text content (padding-left: 0)
- `.quote-text .blog-text` - Quote text styling (22px, font-weight: 600, line-height: 36px)

### Feature Boxes
- `.feature-box` - Information box container (border: 1px solid #E5E5E5, background: #FAFAFA)
- `.bullet-item` - Bullet point item (flex, align-items: flex-start)
- `.bullet-item .bullet-point` - Bullet point styling (6px x 6px, background: #000, border-radius: 50%)
- `.numbered-item` - Numbered list item (flex, align-items: flex-start, margin-top: 6px)
- `.numbered-item-b` - Alternative numbered item variant
- `.numbered-item .number` - Number styling (17px, font-weight: 500)
- `.item-content` - Content wrapper (flex column, flex: 1)
- `.item-content h4` - Content heading (font-weight: 600, margin-bottom: 8px)
- `.item-content p` - Content paragraph (18px, line-height: 1.5, color: #404040)

### Category Filters
- `.blog-filters-container` - Filter container (flex, justify-content: center, margin-bottom: 2rem)
- `.blog-filters-scroll` - Scrollable filter list (flex, gap: 1rem, overflow-x: auto)
- `.category-btn` - Filter button (height: 2.5rem, padding: 0.4375rem 1rem, border-radius: 0.25rem)
- `.category-btn.active` - Active filter state (background: #E5E5E5, color: #171717, font-weight: 500)
- `.category-btn.inactive` - Inactive filter state (background: white, color: #404040, font-weight: 400)

### Table of Contents
- `#toc-nav` - TOC container (background: #f9f9f9, border-radius: 0.5rem, padding: 16px)
- `.toc-link` - TOC link styling (position: relative)
- `.toc-link span` - TOC link text (font-size: 16px, line-height: 1.25)

### Blog Tags
- `.tag-product-led-growth` - Product-led growth tag (padding: 0.25rem 0.75rem, background: #F5F5F5)
- `.tag-product-led-growth:hover` - Tag hover state (background: #E5E5E5)

### Mobile Blog Adjustments
- Mobile typography improvements (smaller font sizes, adjusted spacing)
- Responsive feature box adjustments (smaller padding, adjusted gaps)
- Mobile TOC styling (full width, relative positioning)
- Mobile category filter improvements (horizontal scroll, no wrap)

---

## Footer

### Footer Structure
- `.footer-container` - Main footer container (background: #FAFAFA, padding: 20px, font-family: Geist)
- `.footer-content` - Footer content wrapper (max-width: 1280px, margin: 0 auto, position: relative)
- `.footer-main-grid` - Footer grid layout (grid-template-columns: 1fr, gap: 48px)

### Newsletter Section
- `.footer-newsletter` - Newsletter container (flex column, align-items: flex-start)
- `.footer-logo-container` - Logo container (flex, align-items: center, margin-bottom: 24px)
- `.footer-logo` - Footer logo (flex, height: auto, align-items: center)
- `.footer-logo img` - Footer logo image (width: 160px on mobile, 224px on tablet, 256px on desktop)
- `.footer-newsletter-text` - Newsletter description (color: rgba(11, 12, 14, 0.8), font-size: 16px)
- `.footer-form` - Newsletter form (flex row, width: 100%, height: 40px, max-width: 400px)
- `.footer-form-input` - Email input (width: 75%, height: 40px, border-radius: 6px)
- `.footer-form-button` - Submit button (width: 25%, height: 40px, background: #171717, color: #FAFAFA)

### Social Links
- `.footer-social` - Social links container (flex, gap: 12px, height: 40px)
- `.footer-social-link` - Individual social link (36px x 36px, border: 1px solid #E5E5E5, border-radius: 6px)
- `.footer-social-link:hover` - Social link hover (background: rgba(243, 244, 246, 1))

### Footer Links
- `.footer-links-section` - Links container (flex, gap: 81px, flex-direction: row)
- `.footer-links-group` - Link group (flex column)
- `.footer-links-title` - Section title (18px, font-weight: 600, color: #0b0c0e, font-family: Manrope)
- `.footer-links-list` - Links list (flex column, gap: 24px, list-style: none)
- `.footer-links-item` - Individual link item (margin: 0)
- `.footer-links-link` - Link styling (color: rgba(11, 12, 14, 0.8), transition: color 0.2s ease)
- `.footer-links-link:hover` - Link hover (color: #333333)

### Footer Bottom
- `.footer-bottom` - Bottom section (flex, justify-content: center, margin-top: 32px)
- `.footer-bottom-border` - Bottom border container (width: 85%, border-top: 1px solid #E5E5E5)
- `.footer-copyright` - Copyright text (color: rgba(11, 12, 14, 0.7), font-size: 16px, text-align: center)

### Footer Decorative Elements
- `.footer-dino-logo` - Decorative dino logo (display: none on mobile, position: absolute, transform: scale(4.5))

### Form Control Spacing
- `.footer-form .wpcf7-form-control-wrap` - Form control wrapper (margin-right: 12px)

---

## FAQ/Accordion

### FAQ Structure
- `.faq-section` - Main FAQ container (padding: 3rem left/right, background: white)
- `.faq-header` - FAQ title (text-align: center, font-size: 28px/42px, font-family: Manrope)
- `.faq-accordion-item` - Individual FAQ item (margin-bottom: 32px, border-bottom: 1px solid #E2E4E9)
- `.faq-accordion-item--active` - Active FAQ item (background: white, border-bottom: 1px solid #E2E4E9)

### Accordion Elements
- `.faq-accordion-button` - FAQ question button (width: 100%, text-align: left, padding: 10px, font-size: 16px/18px)
- `.faq-accordion-content` - FAQ answer container (margin-top: 12px/16px, font-family: Geist, font-size: 16px)
- `.faq-accordion-text` - FAQ answer text (color: #0B0C0E, font-size: 16px, padding-right: 22px, padding-bottom: 32px)
- `.faq-accordion-text--spaced` - Spaced text variant (margin-bottom: 16px)
- `.faq-accordion-list` - FAQ answer list (list-style-type: disc, list-style-position: inside, line-height: 24px)
- `.faq-accordion-list li` - List item (margin-bottom: 8px)
- `.faq-accordion-icon` - Expand/collapse icon (20px x 20px, transition: transform 0.3s ease)
- `.faq-accordion-icon--rotated` - Rotated icon state (transform: rotate(180deg))

### FAQ Responsive Behavior
- Mobile: Smaller font sizes, adjusted padding
- Desktop: Larger font sizes, more spacing
- Smooth transitions for accordion interactions

---

## Comparison Tables

### Table Structure
- `.comparison-table` - Main comparison table (background: white, max-width: 1200px, margin: 2rem auto)
- `.comparison-table__section` - Table section (border-bottom: 1px solid #E5E5E5)
- `.comparison-table__header` - Table header (flex column)
- `.comparison-table__header--desktop` - Desktop header (display: none on mobile)
- `.comparison-table__header-content` - Header content (flex, align-items: center, cursor: pointer)
- `.comparison-table__row` - Table row (flex column on mobile, flex row on desktop)
- `.comparison-table__cell` - Table cell (padding: 1rem, flex, align-items: center)
- `.comparison-table__tiers` - Plan tiers header (gap: 0 on desktop)

### Cell Types
- `.comparison-table__cell--label` - Feature label cell (width: 100%, font-size: 16px, color: #212123)
- `.comparison-table__cell--value` - Feature value cell (font-size: 16px, color: #212123)
- `.comparison-table__cell--highlighted` - Highlighted cell (background: rgb(91 117 238 / 5%), font-weight: 700)

### Pricing Display
- `.comparison-price` - Comparison table price styling (34px, font-weight: 600, line-height: 40px)
- `.comparison-price-unit` - Price unit styling (14px, font-weight: 400, color: #525252)
- `.cell-highlighted` - Highlighted cell styling (background: rgb(91 117 238 / 5%), font-weight: 700)

### Mobile Tabs
- `.mobile-tabs-nav` - Mobile tab navigation (position: sticky, top: 66px, z-index: 5)
- `.mobile-tab-btn` - Mobile tab button (background: transparent, color: #6B7280, font-size: 14px)
- `.mobile-tab-btn.active` - Active tab state (font-weight: 800, font-size: 16px, border-bottom: 2px solid #171717)
- `.mobile-tab-btn span` - Tab button text (pointer-events: none, user-select: none)

### Comparison Cards
- `.comparison-section` - Comparison section (width: 100%, padding: 3rem 0, background: white)
- `.comparison-container` - Comparison container (max-width: 1080px, margin: 0 auto)
- `.comparison-title` - Comparison title (text-align: center, font-size: 28px/42px, font-family: Manrope)
- `.comparison-cards-container` - Cards container (flex column on mobile, flex row on desktop)
- `.comparison-card` - Individual comparison card (flex: 1, border: 1px solid #E5E7EB, border-radius: 0.75rem)
- `.comparison-card--currents` - Currents card styling (background: #F4F8FF, border: 1px solid #C8DEFF)
- `.comparison-card--testdino` - TestDino card styling (background: #F5FDF7, border: 1px solid #C3F4D2)
- `.comparison-card-title` - Card title (color: #171717, font-size: 20px, font-family: Geist, font-weight: 600)
- `.comparison-features-list` - Features list (flex column, gap: 1rem)
- `.comparison-feature-item` - Individual feature (flex, align-items: flex-start, gap: 0.75rem)
- `.comparison-feature-icon` - Feature icon (18px x 16px, margin-top: 0.25rem)
- `.comparison-feature-text` - Feature text (font-size: 15px/16px, color: #222)

### Collapsible Table Behavior
- `.comparison-table[data-collapsed="true"]` - Collapsed table state
- `.comparison-table__header-content img` - Dropdown arrow (transition: transform 200ms ease)
- Mobile column visibility controls with data-tier attributes

---

## Form Elements

### Input Styling
- `.footer-form-input` - Email input styling (width: 75%, height: 40px, border-radius: 6px, border: 1px solid #E2E4E9)
- `input[type="range"]` - Range slider styling (height: 8px, border-radius: 5px, background: #e2e8f0)
- `input[type="radio"]` - Radio button styling (20px x 20px, border: 2px solid #d1d5db, border-radius: 50%)
- `input[type="radio"]:checked` - Checked radio state (border-color: #171717, background: #171717, box-shadow: inset 0 0 0 4px white)

### Range Slider Specific
- `#testExecutionSlider` - Test execution slider (height: 8px, gradient background, border-radius: 9999px)
- `#testExecutionSlider::-webkit-slider-thumb` - Webkit slider thumb (16px x 16px, background: #fff, border: 2px solid #171717)
- `#testExecutionSlider::-moz-range-thumb` - Firefox slider thumb (16px x 16px, background: #fff, border: 2px solid #171717)
- `.slider-labels` - Slider labels container (position: relative, height: 18px, margin-top: 12px)
- `.slider-label` - Individual slider label (position: absolute, font-size: 15px, color: #4B5563)

### Buttons
- `.pricing-card-button` - Pricing CTA button (width: 100%, background: #000, color: white, border-radius: 0.5rem)
- `.pricing-card-button:hover` - Button hover state (background: #333)
- `.popup-modal-btn-submit` - Modal submit button (background: #645CFC, border-radius: 10px, padding: 10px 20px)
- `.popup-modal-btn-cancel` - Modal cancel button
- `.btn-arrow` - Button with arrow icon (12px x 12px, margin-left: 8px)
- `.nav-cta-button` - Navigation CTA button (border-radius: 6px, background: black, color: #ffffff)
- `.mobile-menu-cta-button` - Mobile CTA button (width: 100%, background: #171717, color: #ffffff)

### Special Elements
- `.playwright-badge` - Playwright badge (border-radius: 9999px, padding: 8px 18px, background: white, border: 1px solid #D1D5DB)
- `.playwright-badge-icon` - Playwright badge icon (flex, align-items: center, justify-content: center, margin-right: 8px)
- `.tag-most-popular` - Most popular tag styling (gradient background, color: white, padding: 4px 8px)
- `.section` - Generic section styling (border-bottom: 1px solid #F5FDF7)
- `.review-syste-list` - Review system list styling (position: relative, left: 15px, top: 5px)
- `.activeCTa_pln` - Active CTA plan styling (color: #645CFC)

### Form Containers
- `.footer-form` - Newsletter form (flex row, width: 100%, height: 40px, max-width: 400px)
- `.popup-modal-container` - Modal container (padding: 24px, max-width: 90% on mobile)
- `.popup-modal-actions` - Modal actions (flex-direction: column on mobile, gap: 16px)
- `.popup-modal-btn` - Modal button (width: 100% on mobile)

### Form Control Wrappers
- `.footer-form .wpcf7-form-control-wrap` - Form control wrapper (margin-right: 12px)

---

## Utility Classes

### Spacing
- `.gap-xs` - 0.25rem gap
- `.gap-sm` - 0.5rem gap
- `.gap-md` - 0.75rem gap
- `.gap-lg` - 1rem gap
- `.gap-xl` - 1.5rem gap

### Backgrounds
- `.bg-blue-light` - #F1F8FF
- `.bg-blue-lighter` - #EEF4FF
- `.bg-highlight` - Highlighted background (rgb(91 117 238 / 5%))
- `.bg-gray-100` - Gray background (rgb(243 244 246))

### Borders
- `.border-blue` - Blue border (1px solid #D1E5FF)
- `.border-blue-top` - Blue top border (6px solid #5B75EE)
- `.border-neutral` - Neutral border (1px solid #E5E5E5)

### Icons
- `.check-icon` - Check mark icon (20px x 20px)
- `.check-icon--small` - Small check icon (16px x 16px, margin-top: 2px)
- `.check-icon--large` - Large check icon (24px x 24px)

### Animations
- `.animate-fade-in` - Fade in animation (fadeIn 0.8s ease-out forwards)
- `.animate-spin-slow` - Slow spin animation (spin-slow 2.8s linear infinite)
- `.rotating-text` - Text rotation animation (slideUp 8s infinite)
- `.rotating-text-4` - 4-item text rotation (slideUp-4 8s infinite)

### Loading States
- `.loading-spinner` - Loading spinner container (40px x 40px, position: relative)
- `.spinner-ring` - Individual spinner ring (32px x 32px, border: 3px solid #000, animation: spinner-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite)

### Scrollbar
- `.scrollbar-hide` - Hide scrollbar (-ms-overflow-style: none, scrollbar-width: none)
- `.scrollbar-hide::-webkit-scrollbar` - Webkit scrollbar hide (display: none)

### Text Utilities
- `.text-balance` - Text wrap balance (text-wrap: balance)
- `.text-gradient` - Gradient text (linear-gradient(90deg, #5B75EE 0%, #9C1DE2 100%))
- `.text-brand-blue` - Brand blue color (#5B75EE)
- `.text-neutral` - Neutral text color (#212123)
- `.text-muted` - Muted text color (#6B7280)

### Layout Utilities
- `.flex-center` - Center alignment (display: flex, align-items: center, justify-content: center)
- `.flex-center-start` - Start alignment (display: flex, align-items: center, justify-content: flex-start)
- `.flex-center-between` - Space between (display: flex, align-items: center, justify-content: space-between)

### Keyframes
- `@keyframes fadeIn` - Fade in animation (opacity: 0 to 1, translateY: 20px to 0)
- `@keyframes spin-slow` - Slow spin animation (scale: 1 to 1.5 to 1)
- `@keyframes slideUp` - Slide up animation (translateY: 0% to -400%)
- `@keyframes slideUp-4` - 4-item slide up animation
- `@keyframes spinner-ring` - Spinner ring animation (rotate: 0deg to 360deg)

---

## Responsive Breakpoints

### Mobile First Approach
- Base styles: Mobile (default)
- `@media (width >= 768px)` - Tablet and up
- `@media (width >= 900px)` - Desktop navigation
- `@media (width >= 1024px)` - Large desktop
- `@media (width >= 1280px)` - Extra large

### Mobile Specific
- `@media (width <= 767px)` - Mobile only
- `@media (width <= 1023px)` - Tablet and mobile
- `@media (width <= 639px)` - Small mobile
- `@media (width <= 600px)` - Very small mobile
- `@media (max-width: 768px)` - Mobile responsive adjustments
- `@media (max-width: 1100px)` - Footer form adjustments

### Custom Breakpoints
- `@media (width <= 1340px)` - Custom pricing grid (2 columns instead of 4)
- `@media (width <= 1300px)` - Why choose cards stack (flex-direction: column)
- `@media (width <= 1250px)` - Hero star positioning and blog mobile fixes
- `@media (width <= 1200px)` - Hero star positioning adjustment
- `@media (min-width: 1025px)` - Desktop-only blog content padding
- `@media (min-width: 750px)` - Footer adjustments
- `@media (min-width: 900px)` - Navigation desktop display

### Responsive Grid Systems
- `.pricing-cards-grid` - 1 column (mobile) → 2 columns (640px+) → 4 columns (1280px+)
- `.feature-comparison-grid` - 1 column (mobile) → 2 columns (768px+)
- `.comparison-cards-container` - Column (mobile) → Row (768px+)
- `.footer-main-grid` - 1 column (mobile) → 1fr auto (750px+)

### Mobile-Specific Adjustments
- Navigation: Mobile menu overlay, hamburger button
- Hero: White text and SVG styling, gradient background
- Pricing: Stacked cards, adjusted padding and spacing
- Blog: Horizontal scroll filters, mobile typography
- Tables: Mobile tabs, collapsible sections
- Forms: Full-width buttons, adjusted input sizes

---

## Unique Strengths Section

### Section Structure
- `.unique-strengths-section` - Main section container (width: 100%, padding: 60px 0, background: white)
- `.unique-strengths-container` - Content container (max-width: 1080px, margin: 0 auto, gap: 60px)
- `.unique-strengths-title` - Section title (font-size: 42px/28px, font-family: Manrope, font-weight: 600)
- `.unique-strengths-content` - Content wrapper (flex column, gap: 60px)

### Platform Sections
- `.platform-section` - Individual platform section (flex column, gap: 24px)
- `.platform-header` - Platform header (flex column, gap: 16px)
- `.platform-title` - Platform title (font-size: 22px/20px, font-family: Geist, font-weight: 600)
- `.platform-description` - Platform description (font-size: 18px/16px, line-height: 30px/26px)

### Features Grid
- `.features-grid` - Features container (padding: 32px/20px, background: white, border: 1px solid #E5E5E5)
- `.feature-card` - Individual feature card (flex: 1, flex column, gap: 16px)
- `.feature-card-icon-wrapper` - Icon wrapper (padding: 6.67px, background: white, border: 1px solid #E5E5E5)
- `.feature-card-icon` - Feature icon (26.67px x 26.67px)
- `.feature-card-title` - Feature title (font-size: 20px/18px, font-family: Manrope, font-weight: 700)
- `.feature-card-description` - Feature description (font-size: 16px/14px, line-height: 30px/24px)

---

## Why Choose TestDino Section

### Section Structure
- `.why-choose-section` - Main section (padding: 48px 0 96px/48px 0, background: white)
- `.why-choose-container` - Content container (max-width: 1280px, margin: 0 auto)
- `.why-choose-header` - Section header (text-align: center, margin-bottom: 40px)
- `.why-choose-title` - Section title (font-size: 42px/28px, font-family: Manrope, font-weight: 600)
- `.why-choose-description` - Section description (font-size: 16px, max-width: 870px, margin: 0 auto)

### Comparison Table
- `.comparison-table-wrapper` - Table wrapper (overflow: hidden, border-radius: 8px)
- `.table-header` - Table header (height: 60px/auto, grid-template-columns: repeat(3, 1fr))
- `.header-feature` - Feature column header (padding: 0 20px/8px)
- `.header-currents` - Currents column header (padding: 14px 60px/10px 8px, background: #F5F5F5)
- `.header-testdino` - TestDino column header (padding: 14px 60px/10px 8px, background: #DCFCE6)
- `.header-text` - Header text (font-size: 18px/14px, font-weight: 500)
- `.header-testdino-text` - TestDino header text (font-size: 19.33px/14px, font-weight: 600)
- `.header-logo` - Header logo (30.75px x 28.12px/20px x 18px)

### Table Rows
- `.table-row` - Table row (height: 60px/auto, grid-template-columns: repeat(3, 1fr))
- `.row-feature` - Feature column (padding: 0 20px/8px)
- `.row-currents` - Currents column (padding: 14px 60px/10px 8px, background: #FAFAFA)
- `.row-testdino` - TestDino column (padding: 14px 60px/10px 8px, background: #F5FDF7)
- `.feature-text` - Feature text (font-size: 16px/12px, font-weight: 500)
- `.feature-icon` - Feature icon (19px x 19px/15px x 15px)

### Descriptions
- `.descriptions-section` - Descriptions container (flex column, gap: 24px)
- `.description-item` - Individual description (padding-top: 24px)
- `.description-title` - Description title (font-size: 22px/18px, font-weight: 600, margin-bottom: 16px/12px)
- `.description-text` - Description text (font-size: 18px/14px, line-height: 30px/24px)

---

## Feature Comparison Section

### Section Structure
- `.feature-comparison-section` - Main section (padding: 48px 0)
- `.feature-comparison-header` - Section header (text-align: center, margin-bottom: 32px, max-width: 1280px)
- `.feature-comparison-title` - Section title (font-size: 42px/28px, font-family: Manrope, font-weight: 600)
- `.feature-comparison-description` - Section description (font-size: 16px/14px, line-height: 24px/20px)

### Feature Sections
- `.feature-section` - Individual feature section (max-width: 1280px, margin: 0 auto, padding: 0 16px)
- `.feature-section-title` - Feature title (font-size: 22px/18px, font-family: Geist, font-weight: 600)
- `.feature-comparison-grid` - Features grid (grid-template-columns: 1fr/1fr 1fr, gap: 24px)

### Comparison Cards
- `.comparison-card` - Comparison card (background: #FAFAFA, border: 1px solid #E5E5E5, padding: 24px/16px)
- `.comparison-card.testdino-card` - TestDino card (border-color: #A3A3A3)
- `.card-header` - Card header (flex, align-items: center, gap: 8px)
- `.card-title` - Card title (font-size: 20px/16px, font-family: Geist, font-weight: 600)
- `.card-title.testdino-title` - TestDino title (color: black, font-family: Manrope, font-weight: 700)
- `.card-logo` - Card logo (32px x 32px/24px x 24px)
- `.card-description` - Card description (font-size: 18px/14px, line-height: 30px/24px)

### Feature Details
- `.feature-details` - Feature details container (padding-left: 4px, margin-top: 8px)
- `.feature-label` - Feature label (font-size: 18px/14px, font-weight: 700, line-height: 30px/24px)
- `.feature-value` - Feature value (font-size: 18px/14px, font-weight: 400, line-height: 30px/24px)

---

## Loading & Animation Components

### Loading Spinners
- `.loading-spinner` - Loading spinner container (40px x 40px, position: relative)
- `.spinner-ring` - Individual spinner ring (32px x 32px, border: 3px solid #000, animation: spinner-ring)
- `.spinner-ring:nth-child(1)` - First ring (animation-delay: -0.45s)
- `.spinner-ring:nth-child(2)` - Second ring (animation-delay: -0.3s)
- `.spinner-ring:nth-child(3)` - Third ring (animation-delay: -0.15s)

### Text Animations
- `.rotating-text` - Rotating text container (display: inline-block, overflow: hidden, height: 1.5em)
- `.rotating-text span` - Rotating text span (display: block, animation: slideUp 8s infinite)
- `.rotating-text-4` - 4-item rotating text (height: 1.5em, animation: slideUp-4 8s infinite)
- `.rotating-text-4 span` - 4-item rotating text span (display: block, animation: slideUp-4 8s infinite)

### Fade Animations
- `.animate-fade-in` - Fade in animation (animation: fadeIn 0.8s ease-out forwards)
- `.animate-spin-slow` - Slow spin animation (animation: spin-slow 2.8s linear infinite)

---

## Key Design Patterns

### Color Scheme
- Primary: #171717 (Black)
- Secondary: #5B75EE (Blue)
- Accent: #9C1DE2 (Purple)
- Neutral: #212123, #6B7280
- Background: #FAFAFA, #F7FAFC
- Success: #DCFCE6, #F5FDF7 (Green variants)
- Info: #F4F8FF, #C8DEFF (Blue variants)
- Warning: #F5F5F5 (Gray variants)

### CSS Custom Properties (Design Tokens)
- `--background`, `--foreground` - Light/dark theme variables
- `--primary`, `--secondary` - Color scheme variables
- `--border`, `--input`, `--ring` - UI element variables
- `--radius` - Border radius variable (0.5rem)
- `--sidebar-*` - Sidebar theme variables
- `--chart-*` - Chart color variables

### Border Radius
- Small: 0.25rem (4px)
- Medium: 0.5rem (8px)
- Large: 0.75rem (12px)
- Full: 9999px (Pills)
- Custom: 6.67px (Feature card icons)

### Shadows
- Light: 0 1px 3px rgb(0 0 0 / 10%)
- Medium: 0 4px 6px rgb(0 0 0 / 5%)
- Strong: 0 4px 12px rgb(91 117 238 / 15%)
- Card: 0 1px 2px 0 rgba(0, 0, 0, 0.05)

### Transitions
- Standard: 0.2s ease
- Smooth: 0.3s ease
- Slow: 0.8s ease-out
- Spinner: 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite
- Text rotation: 8s infinite

### Typography Scale
- Display: 42px/28px (Manrope, font-weight: 600)
- Heading: 22px/20px (Geist, font-weight: 600)
- Body: 18px/16px (Geist, line-height: 30px/24px)
- Small: 16px/14px (Geist, line-height: 24px/20px)
- Caption: 14px/12px (Geist)

### Spacing Scale
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 0.75rem (12px)
- lg: 1rem (16px)
- xl: 1.5rem (24px)
- 2xl: 2rem (32px)
- 3xl: 3rem (48px)
- 4xl: 4rem (64px)

### Component Patterns
- Cards: White background, 1px solid border, border-radius
- Buttons: Solid background, rounded corners, hover states
- Forms: Clean inputs with focus states
- Tables: Alternating row colors, clear borders
- Modals: Overlay with centered content
- Navigation: Sticky positioning with state management

### Responsive Patterns
- Mobile-first approach with progressive enhancement
- Flexible grid systems (1 → 2 → 4 columns)
- Stacked layouts on mobile, side-by-side on desktop
- Touch-friendly sizing (minimum 44px touch targets)
- Optimized typography scaling

This guide provides a comprehensive overview of the CSS class system used in the TestDino landing page, organized by functional sections for easy reference and context token optimization.