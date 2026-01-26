# Cinematic Design Transformation - Rumah Pemuridan

## Overview
Website telah ditransformasi menjadi landing page cinematic dengan nuansa warm, inspirational, dan epic sesuai permintaan.

## Design Features Implemented

### 1. Color Palette (Warm & Spiritual)
- **Primary Gold**: `#D4A574`, `#C89F5D` (warm golden tones)
- **Secondary Burgundy**: `#8B4049` (deep maroon/burgundy)
- **Accent Blue**: `#4A7C99` (soft, calm blue)
- **Background**: Cream to warm beige gradients (`#FFFCF7`, `#FFF9EF`)
- **Text**: Dark brown (`#2C1810`)

### 2. Typography
- **Cinzel**: Elegant serif font for headings (epic, classical feel)
- **Playfair Display**: Secondary serif for quotes and subheadings
- **Montserrat**: Clean sans-serif for body text (readability)

### 3. Visual Effects

#### Glassmorphism
- Transparent navbar dengan backdrop blur
- Card components dengan frosted glass effect
- Smooth transitions on scroll

#### Parallax Scrolling
- Hero background bergerak lebih lambat saat scroll (0.5x speed)
- Creates depth and cinematic feel

#### Animations
- Fade-in animations untuk hero content
- Slide-up effects untuk sections
- Hover effects dengan scale dan shadow transitions
- Smooth scroll indicator

#### Custom Scrollbar
- Warm gold color (`#C89F5D`)
- Matches overall aesthetic

### 4. Components Created/Updated

#### Hero Component (`components/hero.tsx`)
- Full-screen cinematic hero
- SVG mountain silhouette background dengan warm gradient
- Logo centered dengan drop shadow
- Animated call-to-action buttons
- Scroll indicator dengan bounce animation

#### Header (`components/header.tsx`)
- Fixed position dengan glassmorphism effect
- Changes appearance on scroll
- Transparent saat di top, glass effect setelah scroll
- Smooth color transitions

#### Footer (`components/footer.tsx`)
- Dark gradient background (dark brown to black)
- Gold accent colors
- Three-column layout

#### Homepage (`app/page.tsx`)
- Hero section dengan parallax
- About section dengan gradient text
- Latest news grid dengan glass cards
- CTA section dengan gradient background

#### About Page (`app/tentang/page.tsx`)
- Gradient hero banner
- Glass card components
- Numbered mission cards
- Scripture quotes dengan special styling

### 5. Hero Background
Created SVG mountain silhouette (`public/hero-bg.svg`):
- Layered mountains dengan opacity
- Warm gradient sky (burgundy → gold → light gold)
- Mist/fog effect di bagian bawah
- Scalable vector format (no pixelation)

## Custom CSS Classes (globals.css)

### Glassmorphism
```css
.glass {
  background: rgba(255, 252, 247, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 165, 116, 0.2);
}
```

### Text Effects
```css
.text-shadow /* Readability on images */
.text-shadow-lg /* Stronger shadow */
.gradient-text /* Gold gradient text */
.shimmer /* Shimmer animation */
```

## Tailwind Configuration

Custom theme extension in `tailwind.config.js`:

### Colors
- `gold`: 50-900 scale
- `burgundy`: 50-900 scale
- `warmBlue`: 50-900 scale
- `cream`: 50-900 scale
- `darkBrown`: 50-900 scale

### Animations
- `fadeIn`: Opacity 0 → 1
- `slideUp`: Translate Y from bottom
- `slideDown`: Translate Y from top
- `scaleIn`: Scale from 0.95 to 1
- `shimmer`: Moving gradient effect

### Gradients
- `warmGradient`: Cream to warm beige
- `heroGradient`: Burgundy to gold
- `accentGradient`: Gold to burgundy

## Files Modified/Created

### Created
- ✅ `components/hero.tsx` - Cinematic hero component
- ✅ `public/hero-bg.svg` - Mountain silhouette background
- ✅ `tailwind.config.js` - Custom theme configuration
- ✅ `CINEMATIC_DESIGN.md` - This documentation

### Modified
- ✅ `app/globals.css` - Custom CSS classes
- ✅ `components/header.tsx` - Glassmorphism navbar
- ✅ `components/footer.tsx` - Dark gradient footer
- ✅ `app/page.tsx` - Cinematic homepage
- ✅ `app/tentang/page.tsx` - Styled about page
- ✅ `package.json` - Added framer-motion

## Next Steps (Optional Enhancements)

### Admin Panel Transformation
- [ ] Implement Admin LTE-style dashboard
- [ ] Sidebar navigation dengan warm colors
- [ ] Card-based statistics
- [ ] Improved table design
- [ ] Matching color scheme

### Additional Features
- [ ] Replace hero SVG dengan actual mountain golden hour photo
- [ ] Add cross silhouette graphic
- [ ] People silhouettes in hero
- [ ] More parallax sections
- [ ] Smooth scroll navigation
- [ ] Loading animations
- [ ] Page transitions

### Performance
- [ ] Optimize images
- [ ] Lazy load components
- [ ] Reduce bundle size
- [ ] Add meta tags for SEO

## Color Reference Quick Guide

| Element | Color | Hex |
|---------|-------|-----|
| Primary Gold | Main accent | #D4A574 |
| Deep Gold | Hover states | #C89F5D |
| Burgundy | Secondary accent | #8B4049 |
| Dark Brown | Text | #2C1810 |
| Cream | Background | #FFFCF7 |
| Warm Blue | Links/accents | #4A7C99 |

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Backdrop-filter supported in all major browsers
- CSS Grid & Flexbox
- Custom properties (CSS variables)

## Deployment
✅ Committed to GitHub: `23e56c6`
✅ Auto-deploying to Vercel
✅ Production URL: Check Vercel dashboard

---
**Yayasan Rumah Pemuridan** - Cinematic Landing Page
