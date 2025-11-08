# 🎉 Utkrisht 2025 - Tech Fest Website

> India's Premier Student-Run Technical Festival

[![Website](https://img.shields.io/badge/website-tulasutkrisht.com-blue)](https://tulasutkrisht.com)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-blue)](https://tailwindcss.com/)

A modern, futuristic website for Utkrisht 2025 - featuring a stunning dark theme with gold and electric blue accents, comprehensive event management, and production-ready optimizations.

![Utkrisht 2025](https://tulasutkrisht.com/og-image.jpg)

---

## ✨ Features

### 🎨 Design & UX
- **Modern Futuristic Theme** - Dark background with gold (#eab308) and electric blue (#06b6d4) neon accents
- **Glassmorphism Effects** - Beautiful frosted glass UI components
- **Smooth Animations** - Hover effects, transitions, and particle backgrounds
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Light/Dark Mode Toggle** - User preference with persistent storage

### 🚀 Performance
- **Optimized Images** - Lazy loading with Intersection Observer
- **Code Splitting** - Fast initial load times
- **PWA Ready** - Installable as mobile/desktop app
- **Service Worker** - Offline support and caching

### 🔍 SEO & Analytics
- **Complete SEO Setup** - Meta tags on all pages
- **Open Graph Tags** - Beautiful social media previews
- **Google Analytics 4** - Comprehensive tracking
- **Structured Data Ready** - Event schema preparation
- **Dynamic Sitemap** - All pages indexed

### ♿ Accessibility
- **WCAG 2.1 AA Compliant** (in progress)
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Friendly** - ARIA labels and semantic HTML
- **High Contrast** - Excellent color contrast ratios

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI framework
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool
- **React Router 6.30.1** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library
- **TSParticles** - Particle effects

### State & Data
- **TanStack Query 5.83.0** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Features
- **PWA Support** - Service Worker + Manifest
- **Google Analytics 4** - Event tracking
- **Theme System** - Dark/light mode

---

## 📦 Installation

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **bun**

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/utkrish-fest-spark.git

# Navigate to project directory
cd utkrish-fest-spark

# Install dependencies
npm install
# or
bun install

# Create environment file
cp .env.example .env

# Add your Google Analytics ID to .env
echo "VITE_GA_TRACKING_ID=G-XXXXXXXXXX" >> .env

# Start development server
npm run dev
# or
bun run dev
```

The site will be available at **http://localhost:8080**

---

## 🚀 Development

### Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Project Structure

```
utkrish-fest-spark/
├── public/                 # Static assets
│   ├── icons/             # PWA icons
│   ├── manifest.json      # PWA manifest
│   ├── sw.js             # Service worker
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.tsx    # Navigation component
│   │   ├── Footer.tsx    # Footer component
│   │   ├── SEO.tsx       # SEO meta tags
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── About.tsx     # About page
│   │   ├── Events.tsx    # Events listing
│   │   └── ...
│   ├── context/          # React context
│   │   └── ThemeContext.tsx
│   ├── hooks/            # Custom hooks
│   │   └── usePageTracking.ts
│   ├── utils/            # Utility functions
│   │   ├── analytics.ts  # GA4 integration
│   │   └── registerSW.ts # Service worker
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── docs/                 # Documentation
│   ├── START_HERE.md     # Quick navigation
│   ├── EXECUTIVE_SUMMARY.md
│   ├── OPTIMIZATION_GUIDE.md
│   └── ...
└── README.md            # This file
```

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Platforms

**Recommended platforms:**
- **Vercel** - Optimized for React/Vite ✅ Recommended
- **Netlify** - Easy deployment with CI/CD
- **Cloudflare Pages** - Fast global CDN
- **GitHub Pages** - Free static hosting

### Pre-Deployment Checklist

See [deploy-checklist.md](./deploy-checklist.md) for comprehensive pre-launch verification.

**Critical items:**
- [ ] Set `VITE_GA_TRACKING_ID` in environment variables
- [ ] Generate all PWA icons (8 sizes)
- [ ] Optimize images to WebP format
- [ ] Configure security headers
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit (target 90+ scores)

---

## 📊 Performance

### Current Metrics

| Metric | Score | Target |
|--------|-------|--------|
| **Lighthouse Performance** | 70 | 90+ |
| **SEO** | 85 | 95+ |
| **Accessibility** | 75 | 95+ |
| **Best Practices** | 90 | 95+ |
| **PWA** | 60 | 100 |

### Optimization Status

✅ **Completed:**
- SEO meta tags on all pages
- Google Analytics integration
- Service worker + PWA manifest
- Theme system (light/dark)
- Lazy loading images

⚠️ **In Progress:**
- WebP image conversion (80% file size reduction)
- PWA icons generation
- Event structured data (JSON-LD)
- ARIA labels for accessibility

See [OPTIMIZATION_GUIDE.md](./OPTIMIZATION_GUIDE.md) for detailed optimization strategies.

---

## 🎓 Documentation

Comprehensive documentation is available in the following files:

### Getting Started
- **[START_HERE.md](./START_HERE.md)** - Quick navigation guide
- **[QUICK_START.md](./QUICK_START.md)** - 5-minute setup

### Technical Documentation
- **[EXECUTIVE_SUMMARY.md](./EXECUTIVE_SUMMARY.md)** - Project overview & business case
- **[OPTIMIZATION_GUIDE.md](./OPTIMIZATION_GUIDE.md)** - Performance & SEO guide
- **[FEATURES_SUMMARY.md](./FEATURES_SUMMARY.md)** - Feature documentation

### Deployment
- **[deploy-checklist.md](./deploy-checklist.md)** - Pre-launch checklist
- **[tasks/roadmap.md](./tasks/roadmap.md)** - 30/60/90 day development plan

### Audits
- **[reports/report.md](./reports/report.md)** - Comprehensive audit report
- **[audits/seo.md](./audits/seo.md)** - SEO analysis
- **[audits/performance.md](./audits/performance.md)** - Performance audit
- **[audits/accessibility.md](./audits/accessibility.md)** - Accessibility audit

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** - `git checkout -b feature/amazing-feature`
3. **Commit your changes** - `git commit -m 'Add amazing feature'`
4. **Push to the branch** - `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style

- Use TypeScript for type safety
- Follow existing code patterns
- Add comments for complex logic
- Test on multiple browsers

---

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
# Google Analytics (Required for tracking)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Add other environment variables as needed
```

**Note:** Never commit `.env` to version control. Use `.env.example` as a template.

---

## 🐛 Known Issues

### Minor Issues
- PWA icons need to be generated (8 sizes)
- Images should be converted to WebP format
- Some ARIA labels missing

### Warnings
- React Router future flags (informational only)
- Google Analytics warning if ID not set

See [reports/report.md](./reports/report.md) for complete issue tracking.

---

## 📅 Roadmap

### Phase 1: Launch Ready (Week 1)
- [x] SEO implementation
- [x] Analytics integration
- [x] Theme system
- [ ] PWA icons
- [ ] Image optimization

### Phase 2: Enhancement (Month 1)
- [ ] Event structured data
- [ ] Enhanced accessibility
- [ ] Contact form backend
- [ ] Dynamic sitemap

### Phase 3: Advanced Features (Month 2-3)
- [ ] Push notifications
- [ ] User dashboard
- [ ] Live event updates
- [ ] Advanced analytics

See [tasks/roadmap.md](./tasks/roadmap.md) for detailed development plan.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Team

**Utkrisht 2025 Development Team**
- Website: https://tulasutkrisht.com
- Email: info@utkrisht2025.com
- Facebook: [Utkrisht 2025](https://facebook.com/utkrisht2025)
- Instagram: [@utkrisht2025](https://instagram.com/utkrisht2025)
- Twitter: [@utkrisht2025](https://twitter.com/utkrisht2025)

---

## 🙏 Acknowledgments

- **Design Inspiration:** Cognizance'25 (IIT Roorkee)
- **UI Components:** shadcn/ui, Radix UI
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Orbitron, Rajdhani, Poppins)
- **Particle Effects:** TSParticles

---

## 📞 Support

For questions, issues, or feature requests:

1. Check the [documentation](./START_HERE.md)
2. Search [existing issues](https://github.com/yourusername/utkrish-fest-spark/issues)
3. Create a [new issue](https://github.com/yourusername/utkrish-fest-spark/issues/new)
4. Email: support@utkrisht2025.com

---

## ⭐ Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation
- 🔀 Contributing code

---

**Made with ❤️ by the Utkrisht 2025 Team**

**Last Updated:** October 15, 2025
# TULAS-UTKRISHT
