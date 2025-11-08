// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics tracking ID not found');
    return;
  }

  // Load GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (!window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track custom events
export const trackCustomEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (!window.gtag) return;

  window.gtag('event', eventName, params);
};

// Track user interactions
export const trackButtonClick = (buttonName: string) => {
  trackEvent({
    action: 'click',
    category: 'Button',
    label: buttonName,
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

export const trackRegistration = (eventName: string) => {
  trackEvent({
    action: 'register',
    category: 'Event',
    label: eventName,
  });
};

export const trackDownload = (fileName: string) => {
  trackEvent({
    action: 'download',
    category: 'File',
    label: fileName,
  });
};
