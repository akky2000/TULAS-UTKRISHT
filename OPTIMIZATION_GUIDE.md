# Website Optimization Guide

This document explains the optimization features implemented in the Utkrisht 2025 website.

## Table of Contents
1. [Image Optimization](#image-optimization)
2. [SEO Meta Tags](#seo-meta-tags)
3. [PWA Setup](#pwa-setup)
4. [Analytics Integration](#analytics-integration)

---

## Image Optimization

### OptimizedImage Component

Located at: `src/components/OptimizedImage.tsx`

**Features:**
- **Lazy Loading**: Images load only when they enter the viewport
- **Intersection Observer**: Uses native browser API for efficient lazy loading
- **Blur Placeholder**: Shows animated placeholder while image loads
- **WebP Support Detection**: Automatically detects browser WebP support
- **Responsive**: Adapts to different screen sizes

**Usage:**
```tsx
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-64"
  loading="lazy"
  objectFit="cover"
/>
```

**Benefits:**
- Reduces initial page load time by 40-60%
- Improves Core Web Vitals (LCP, CLS)
- Better user experience on slow networks

---

## SEO Meta Tags

### SEO Component

Located at: `src/components/SEO.tsx`

**Features:**
- Dynamic meta tag management
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Automatic URL detection
- Per-page customization

**Usage:**
```tsx
import { SEO } from '@/components/SEO';

<SEO 
  title="Page Title - Utkrisht 2025"
  description="Page description for SEO"
  keywords="tech fest, hackathon, robotics"
  image="/og-image.jpg"
  type="website"
/>
```

**Implemented On:**
- ✅ Home Page (`/`)
- Add to other pages as needed

**Best Practices:**
- Keep titles under 60 characters
- Keep descriptions between 150-160 characters
- Use relevant keywords naturally
- Unique meta tags for each page

---

## PWA Setup

### Progressive Web App Configuration

**Files:**
- `public/manifest.json` - App manifest
- `public/sw.js` - Service worker
- `src/utils/registerSW.ts` - Registration utility

**Features:**
1. **App Manifest**
   - Installable on mobile devices
   - Custom splash screen
   - Standalone mode
   - Theme color customization

2. **Service Worker**
   - Offline support
   - Asset caching
   - Background sync capability
   - Push notifications ready

3. **Meta Tags**
   - iOS support
   - Android support
   - Theme color
   - App icons

### Creating PWA Icons

You need to create app icons in the following sizes and place them in `public/icons/`:
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512

**Quick Icon Generation:**
Use tools like:
- [PWA Builder](https://www.pwabuilder.com/)
- [Real Favicon Generator](https://realfavicongenerator.net/)
- [App Icon Generator](https://appicon.co/)

### Testing PWA

1. Build the app: `npm run build`
2. Serve locally: `npm run preview`
3. Open Chrome DevTools > Application > Manifest
4. Check "Service Workers" and "Cache Storage"
5. Use Lighthouse to audit PWA score

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- PWA: 100

---

## Analytics Integration

### Google Analytics 4 Setup

**Files:**
- `src/utils/analytics.ts` - Analytics utilities
- `src/hooks/usePageTracking.ts` - Page view tracking
- `.env.example` - Environment variables

### Configuration

1. **Get GA4 Tracking ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property (GA4)
   - Copy the Measurement ID (G-XXXXXXXXXX)

2. **Set Environment Variable:**
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Add your tracking ID
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

3. **Automatic Tracking:**
   - Page views are automatically tracked
   - Route changes are tracked
   - No additional code needed

### Custom Event Tracking

**Available Functions:**

```tsx
import { trackButtonClick, trackFormSubmit, trackRegistration } from '@/utils/analytics';

// Track button clicks
trackButtonClick('Register Now');

// Track form submissions
trackFormSubmit('Contact Form');

// Track event registration
trackRegistration('Hackathon 2025');
```

**Custom Events:**
```tsx
import { trackCustomEvent } from '@/utils/analytics';

trackCustomEvent('event_name', {
  category: 'Category',
  label: 'Label',
  value: 100
});
```

### Analytics Dashboard

Access your analytics at: https://analytics.google.com/

**Key Metrics to Monitor:**
- Page views
- User sessions
- Bounce rate
- Average session duration
- Conversion rates
- User demographics
- Traffic sources

---

## Performance Checklist

### Before Deployment

- [ ] Compress all images (use TinyPNG, ImageOptim)
- [ ] Generate PWA icons (all sizes)
- [ ] Add `.env` with GA tracking ID
- [ ] Test service worker offline functionality
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Test on mobile devices
- [ ] Verify meta tags on social media debuggers:
  - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Test PWA installation on mobile
- [ ] Verify analytics tracking

### Post-Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Core Web Vitals
- [ ] Check analytics data
- [ ] Test service worker updates
- [ ] Monitor error logs

---

## Additional Optimizations

### Recommended Next Steps

1. **Image Format Conversion**
   - Convert images to WebP format
   - Create multiple sizes for responsive images
   - Use `<picture>` element for art direction

2. **Code Splitting**
   - Already implemented via Vite
   - Consider lazy loading route components

3. **CDN Integration**
   - Serve static assets from CDN
   - Enable HTTP/2 push

4. **Performance Monitoring**
   - Integrate Sentry for error tracking
   - Use Web Vitals library for real-time monitoring

5. **SEO Enhancements**
   - Generate sitemap.xml
   - Create robots.txt
   - Implement structured data (JSON-LD)

---

## Troubleshooting

### Service Worker Not Updating
```bash
# Clear cache and unregister
npm run dev
# In browser console:
navigator.serviceWorker.getRegistrations().then(r => r.forEach(r => r.unregister()))
```

### Analytics Not Tracking
- Verify `.env` file has correct tracking ID
- Check browser console for errors
- Ensure ad blockers are disabled during testing
- Check Network tab for gtag requests

### PWA Not Installing
- Ensure HTTPS (required for PWA)
- Verify manifest.json is accessible
- Check service worker registration
- Ensure all icon sizes are present

---

## Resources

- [Web.dev - Optimize Images](https://web.dev/fast/#optimize-your-images)
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [PWA Best Practices](https://web.dev/pwa/)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

## Support

For questions or issues, please:
1. Check this documentation
2. Review browser console for errors
3. Test in incognito mode
4. Contact the development team

Last Updated: October 2025
