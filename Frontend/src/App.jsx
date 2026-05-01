import React, { lazy, Suspense, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './components/Common/NavBar';
import Footer from './components/Common/Footer';
import Loading from './components/Common/Loading';

/* ── Code-split ALL pages for smaller initial bundle ─────────── */
const Home          = lazy(() => import('./pages/Home'));
const About         = lazy(() => import('./pages/About'));
const AboutFounder  = lazy(() => import('./pages/AboutFounder'));
const Services      = lazy(() => import('./pages/Services'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const CloudComputing = lazy(() => import('./pages/Cloudcomputing'));
const Contact       = lazy(() => import('./pages/Contact'));
const Appointment   = lazy(() => import('./pages/Appointment'));

/* ── Scroll to top on route change (critical for SPA SEO) ─── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  // useLayoutEffect runs synchronously before paint — prevents any
  // visible "scroll from footer to top" flash on navigation
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* ── Page placeholder keeps footer below the fold while chunks load ── */
const PagePlaceholder = () => (
  <div style={{ minHeight: '100vh' }} aria-hidden="true" />
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Wait for the page to be truly ready:
   *  1. All critical resources (fonts, stylesheets, images above the fold)
   *  2. A minimum display time so the loader doesn't flash
   */
  const finishLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const MIN_DISPLAY_MS = 1800;          // minimum loader visibility
    const MAX_WAIT_MS    = 6000;          // hard timeout fallback
    const start = Date.now();

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(finishLoading, remaining);
    };

    // Hard timeout — never wait longer than MAX_WAIT_MS
    const hardTimer = setTimeout(finish, MAX_WAIT_MS);

    // Wait for the window to fully load (images, fonts, stylesheets, sub-resources)
    if (document.readyState === 'complete') {
      // Already loaded (e.g. hot reload in dev)
      setTimeout(finish, MIN_DISPLAY_MS - (Date.now() - start));
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    return () => {
      clearTimeout(hardTimer);
      window.removeEventListener('load', finish);
    };
  }, [finishLoading]);

  // 🔥 Show branded loader until page is truly ready
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Navbar — site-wide navigation landmark */}
      <Navbar />

      {/* ✅ Semantic <main> landmark for SEO & accessibility */}
      <main className="flex-grow" id="main-content" style={{ minHeight: '100vh' }}>
        {/*
          PagePlaceholder keeps <main> tall while the lazy chunk loads,
          so the footer stays below the viewport — no flash.
        */}
        <Suspense fallback={<PagePlaceholder />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/founder" element={<AboutFounder />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/cloud-solutions" element={<CloudComputing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />

            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;