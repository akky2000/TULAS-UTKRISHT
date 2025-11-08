# Site Map - Utkrisht 2025 Tech Fest

## Live URL
**Base:** https://tulasutkrisht.com

## Page Inventory

| Route | Page Component | Title | Meta Description | Status | Issues Found |
|-------|---------------|-------|-----------------|---------|--------------|
| / | Index.tsx | ✅ Set via SEO component | ✅ Set via SEO component | ✅ Live | Theme OK, SEO implemented |
| /about | About.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| /events | Events.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| /events/:id | EventDetail.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component, missing structured data** |
| /speakers | Speakers.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| /schedule | Schedule.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| /sponsors | Sponsors.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| /gallery | Gallery.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| /contact | Contact.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| /register | Register.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component, form tracking needed** |
| /core-team | CoreTeam.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |
| * | NotFound.tsx | ⚠️ Default | ⚠️ Missing | ✅ Live | **Missing SEO component** |

## Assets & Resources

### Images
- Event posters: `/assets/events/*.jpg`
- Gallery images: Various event photos
- Team member photos: `/assets/team/*.jpg` (if exists)

### External Resources
- Google Fonts: Orbitron, Rajdhani, Poppins ✅
- React TSParticles: Background animations ✅
- Lucide React: Icons ✅

## Technical Stack
- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.19
- **Styling:** Tailwind CSS 3.4.17
- **Router:** React Router DOM 6.30.1
- **UI Components:** Radix UI + shadcn/ui
- **State Management:** TanStack Query 5.83.0
- **Analytics:** Google Analytics 4 (configured)
- **PWA:** Service Worker + Manifest (configured)

## Critical Issues Found

### High Priority (RED 🔴)
1. **Missing SEO on 11/12 pages** - Only Index has SEO component
2. **No structured data** - Events missing Event schema
3. **Images not lazy-loaded** - Event posters load eagerly
4. **No image optimization** - Large JPG files, no WebP

### Medium Priority (YELLOW 🟡)
5. **Analytics tracking incomplete** - No custom events tracked
6. **PWA icons missing** - Icons folder empty
7. **No sitemap.xml for production** - Current sitemap is basic
8. **Security headers not configured** - Missing CSP, HSTS

### Low Priority (GREEN 🟢)
9. **Accessibility improvements** - Missing ARIA labels on some buttons
10. **Performance optimizations** - Code splitting opportunities

##

 Next Actions

See `reports/report.md` for detailed findings and prioritized action plan.
