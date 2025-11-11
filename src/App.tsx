import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect, useRef } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { usePageTracking } from "@/hooks/usePageTracking";
import { initGA } from "@/utils/analytics";
import { registerServiceWorker } from "@/utils/registerSW";

// Force dark theme immediately on load
if (typeof document !== 'undefined') {
  // Remove any existing theme classes
  document.documentElement.classList.remove('light', 'dark');
  // Always start with dark theme for futuristic design
  const savedTheme = localStorage.getItem('theme');
  document.documentElement.classList.add(savedTheme === 'light' ? 'light' : 'dark');
  // Set to dark if not explicitly set to light
  if (!savedTheme || savedTheme === 'dark') {
    localStorage.setItem('theme', 'dark');
  }
}

// Initialize analytics and service worker
if (typeof window !== 'undefined') {
  initGA();
  // registerServiceWorker(); // Disabled for development to prevent caching issues
}

import BackgroundParticles from "@/components/BackgroundParticles";
import { lazy } from "react";
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Speakers = lazy(() => import("./pages/Speakers"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

const CoreTeam = lazy(() => import("./pages/CoreTeam"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Component to track page views
function PageTracker() {
  usePageTracking();
  return null;
}

function ScrollAndFocusManager() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const el = document.getElementById("main") as HTMLElement | null;
    mainRef.current = el;
    if (el) {
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true } as any);
    }
  }, [location]);
  return null;
}

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BackgroundParticles />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTracker />
          <ScrollAndFocusManager />
          <Routes>
            <Route path="/" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><Index /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><About /></Suspense>} />
            <Route path="/events" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><Events /></Suspense>} />
            <Route path="/events/:id" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><EventDetail /></Suspense>} />
            <Route path="/speakers" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><Speakers /></Suspense>} />
            <Route path="/schedule" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><Schedule /></Suspense>} />
            <Route path="/sponsors" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><Sponsors /></Suspense>} />
            <Route path="/gallery" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><Gallery /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><Contact /></Suspense>} />

            <Route path="/core-team" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><CoreTeam /></Suspense>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Suspense fallback={<div className="container mx-auto pt-24">Loading…</div>}><NotFound /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
