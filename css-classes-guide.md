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

---

## Typography & Fonts

### Font Families
- `font-family: Geist, sans-serif` - Primary font
- `font-family: "Geist Mono", monospace` - Code/monospace
- `font-family: "Tobias TRIAL"` - Custom display font
- `font-family: "Manrope", sans-serif` - Headers

### Font Utilities
- `.ff-geist-mono` - Geist Mono font family utility

### Text Sizes
- `.blog-header` - 28px, line-height 2.25rem, font-weight 700
- `.blog-text` - 18px, line-height 30px
- `.pricing-card-title` - 1.125rem, font-weight 700
- `.pricing-card-price-text` - 1.875rem, font-weight 600

### Text Utilities
- `.text-balance` - text-wrap: balance
- `.text-gradient` - Gradient text (blue to purple)
- `.text-brand-blue` - Color: #5B75EE
- `.text-neutral` - Color: #212123
- `.text-muted` - Color: #6B7280

---

## Layout & Grid

### Container Classes
- `.pricing-container` - max-width: 1200px, margin: 0 auto
- `.comparison-container` - max-width: 1080px, margin: 0 auto
- `.footer-content` - max-width: 1280px, margin: 0 auto

### Grid Systems
- `.pricing-cards-grid` - Responsive grid (1/2/4 columns)
- `.footer-main-grid` - 1fr auto layout
- `.xl\:grid-cols-4` - 4 column grid (desktop)

### Flexbox Utilities
- `.flex-center` - Center alignment
- `.flex-center-start` - Start alignment
- `.flex-center-between` - Space between
- `.gap-xs` to `.gap-xl` - Spacing utilities

---

## Navigation

### Header Structure
- `.header-container` - Sticky header, height 56px/80px
- `.nav-wrapper` - Main nav container, max-width 1200px
- `.nav-content` - Flex container for nav items

### Logo & Branding
- `.nav-logo` - Logo container
- `.nav-logo-img` - Logo image styling
- `.nav-logo-link` - Logo link wrapper

### Navigation Links
- `.nav-links-desktop` - Desktop navigation (hidden on mobile)
- `.nav-link` - Individual nav link styling
- `.nav-link--active` - Active state (font-weight 700)

### Mobile Menu
- `.mobile-menu-button` - Hamburger menu button
- `.mobile-menu-overlay` - Full-screen overlay
- `.mobile-menu-content` - Mobile menu container
- `.mobile-menu-nav` - Mobile navigation area
- `.mobile-menu-links` - Mobile link container

### CTA Buttons
- `.nav-cta-button` - Desktop CTA button
- `.mobile-menu-cta-button` - Mobile CTA button

---

## Hero Section

### Hero Container
- `.hero-section` - Main hero container with gradient background
- `.hero-section::before` - Pattern overlay

### Mobile Hero Styling
- White text and SVG styling for mobile
- `.playwright-badge` - Badge styling
- `.pop-up` - Button styling
- `#sidebarList` - Tab navigation

### Interactive Elements
- `.elem-star-hero` - Decorative star element
- `.animate-spin-slow` - Slow rotation animation

---

## Pricing Components

### Pricing Cards
- `.pricing-card` - Base pricing card (min-height 650px)
- `.plan-card` - Base pricing card (min-height 650px)
- `.plan-card-gradient` - Plan card with gradient border
- `.pricing-card--neutral` - Free plan styling
- `.pricing-card--pro` - Pro plan styling
- `.pricing-card--team` - Team plan styling

### Card Structure
- `.pricing-card-header` - Card header container
- `.pricing-card-title` - Plan title
- `.pricing-card-subtitle` - Plan description
- `.pricing-card-price` - Price container
- `.pricing-card-price-text` - Price amount
- `.pricing-card-price-unit` - Price unit (per month/year)
- `.pricing-card-button` - CTA button
- `.pricing-card-features` - Features list

### Active States
- `.plan-active` - Blue border active state
- `.active-plan--black` - Black border active state
- `.active-plan--gradient-pro` - Gradient border for pro
- `.active-plan--gradient-team` - Gradient border for team

### AI Features
- `.ai-features-container` - AI features section
- `.ai-header` - AI section header
- `.feature-item` - Individual feature item
- `.feature-item--table` - Table variant of feature item
- `.feature-item__icon` - Feature item icon
- `.feature-item__text` - Feature item text
- `.ai-feature-section` - Individual AI feature styling
- `.advanced-ai-text` - Advanced AI features text styling
- `.enterprise-ai-feature` - Enterprise AI feature styling

### Pricing Calculator
- `.pricing-calculator` - Calculator container
- `.pricing-calculator-card` - Individual calculator cards
- `#testExecutionSlider` - Test execution slider
- `.slider-labels` - Slider tick labels container
- `.slider-label` - Individual slider label

### Pricing Tables
- `.pricing-table` - Pricing table container
- `.pricing-table-header` - Table header
- `.pricing-table-header-content` - Header content wrapper
- `.pricing-table-title` - Table title
- `.pricing-table-row` - Table row
- `.pricing-table-cell` - Table cell
- `.pricing-table-cell--label` - Label cell
- `.pricing-table-cell--value` - Value cell
- `.pricing-table-cell--highlighted` - Highlighted cell

### Pricing Sections
- `.pricing-section` - Main pricing section
- `.pricing-cards-grid` - Pricing cards grid layout

---

## Blog Components

### Blog Layout
- `.blog-content-section` - Main blog content area
- `.blog-header` - Blog post title
- `.blog-text` - Blog paragraph text

### Quote Section
- `.quote-container` - Quote wrapper
- `.quote-mark` - Quote mark styling
- `.quote-text` - Quote text content

### Feature Boxes
- `.feature-box` - Information box container
- `.bullet-item` - Bullet point item
- `.bullet-point` - Bullet point styling
- `.numbered-item` - Numbered list item
- `.numbered-item-b` - Alternative numbered item variant
- `.number` - Number styling
- `.item-content` - Content wrapper

### Category Filters
- `.blog-filters-container` - Filter container
- `.blog-filters-scroll` - Scrollable filter list
- `.category-btn` - Filter button
- `.category-btn.active` - Active filter state
- `.category-btn.inactive` - Inactive filter state

### Table of Contents
- `#toc-nav` - TOC container
- `.toc-link` - TOC link styling

---

## Footer

### Footer Structure
- `.footer-container` - Main footer container
- `.footer-content` - Footer content wrapper
- `.footer-main-grid` - Footer grid layout

### Newsletter Section
- `.footer-newsletter` - Newsletter container
- `.footer-logo-container` - Logo container
- `.footer-newsletter-text` - Newsletter description
- `.footer-form` - Newsletter form
- `.footer-form-input` - Email input
- `.footer-form-button` - Submit button

### Social Links
- `.footer-social` - Social links container
- `.footer-social-link` - Individual social link

### Footer Links
- `.footer-links-section` - Links container
- `.footer-links-group` - Link group
- `.footer-links-title` - Section title
- `.footer-links-list` - Links list
- `.footer-links-item` - Individual link item
- `.footer-links-link` - Link styling

### Footer Bottom
- `.footer-bottom` - Bottom section
- `.footer-copyright` - Copyright text

---

## FAQ/Accordion

### FAQ Structure
- `.faq-section` - Main FAQ container
- `.faq-header` - FAQ title
- `.faq-accordion-item` - Individual FAQ item
- `.faq-accordion-item--active` - Active FAQ item

### Accordion Elements
- `.faq-accordion-button` - FAQ question button
- `.faq-accordion-content` - FAQ answer container
- `.faq-accordion-text` - FAQ answer text
- `.faq-accordion-list` - FAQ answer list
- `.faq-accordion-icon` - Expand/collapse icon
- `.faq-accordion-icon--rotated` - Rotated icon state

---

## Comparison Tables

### Table Structure
- `.comparison-table` - Main comparison table
- `.comparison-table__section` - Table section
- `.comparison-table__header` - Table header
- `.comparison-table__row` - Table row
- `.comparison-table__cell` - Table cell
- `.comparison-table__tiers` - Plan tiers header

### Cell Types
- `.comparison-table__cell--label` - Feature label cell
- `.comparison-table__cell--value` - Feature value cell
- `.comparison-table__cell--highlighted` - Highlighted cell

### Pricing Display
- `.comparison-price` - Comparison table price styling
- `.comparison-price-unit` - Price unit styling
- `.cell-highlighted` - Highlighted cell styling

### Mobile Tabs
- `.mobile-tabs-nav` - Mobile tab navigation
- `.mobile-tab-btn` - Mobile tab button
- `.mobile-tab-btn.active` - Active tab state

### Comparison Cards
- `.comparison-section` - Comparison section
- `.comparison-card` - Individual comparison card
- `.comparison-card--currents` - Currents card styling
- `.comparison-card--testdino` - TestDino card styling
- `.comparison-features-list` - Features list
- `.comparison-feature-item` - Individual feature

---

## Form Elements

### Input Styling
- `.footer-form-input` - Email input styling
- `input[type="range"]` - Range slider styling
- `input[type="radio"]` - Radio button styling

### Buttons
- `.pricing-card-button` - Pricing CTA button
- `.popup-modal-btn-submit` - Modal submit button
- `.btn-arrow` - Button with arrow icon

### Special Elements
- `.playwright-badge-icon` - Playwright badge icon
- `.tag-most-popular` - Most popular tag styling
- `.section` - Generic section styling
- `.review-syste-list` - Review system list styling
- `.activeCTa_pln` - Active CTA plan styling

### Form Containers
- `.footer-form` - Newsletter form
- `.popup-modal-container` - Modal container
- `.popup-modal-actions` - Modal actions

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
- `.bg-highlight` - Highlighted background
- `.bg-gray-100` - Gray background

### Borders
- `.border-blue` - Blue border
- `.border-blue-top` - Blue top border
- `.border-neutral` - Neutral border

### Icons
- `.check-icon` - Check mark icon (20px)
- `.check-icon--small` - Small check icon (16px)
- `.check-icon--large` - Large check icon (24px)

### Animations
- `.animate-fade-in` - Fade in animation
- `.animate-spin-slow` - Slow spin animation
- `.rotating-text` - Text rotation animation
- `.rotating-text-4` - 4-item text rotation

### Loading States
- `.loading-spinner` - Loading spinner container
- `.spinner-ring` - Individual spinner ring

### Scrollbar
- `.scrollbar-hide` - Hide scrollbar
- `.scrollbar-hide::-webkit-scrollbar` - Webkit scrollbar hide

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

### Custom Breakpoints
- `@media (width <= 1340px)` - Custom pricing grid
- `@media (width <= 1300px)` - Why choose cards stack
- `@media (width <= 1250px)` - Hero star positioning

---

## Key Design Patterns

### Color Scheme
- Primary: #171717 (Black)
- Secondary: #5B75EE (Blue)
- Accent: #9C1DE2 (Purple)
- Neutral: #212123, #6B7280
- Background: #FAFAFA, #F7FAFC

### Border Radius
- Small: 0.25rem (4px)
- Medium: 0.5rem (8px)
- Large: 0.75rem (12px)
- Full: 9999px (Pills)

### Shadows
- Light: 0 1px 3px rgb(0 0 0 / 10%)
- Medium: 0 4px 6px rgb(0 0 0 / 5%)
- Strong: 0 4px 12px rgb(91 117 238 / 15%)

### Transitions
- Standard: 0.2s ease
- Smooth: 0.3s ease
- Slow: 0.8s ease-out

This guide provides a comprehensive overview of the CSS class system used in the TestDino landing page, organized by functional sections for easy reference and context token optimization.