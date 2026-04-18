import React, { useEffect, lazy, Suspense, useState } from 'react';
import Hero from '../components/Homepage/Hero';

/* ── Below-fold components loaded lazily (code-split) ─────── */
const HeroBotm   = lazy(() => import('../components/Homepage/HeroBotm'));
const AbtSec     = lazy(() => import('../components/Homepage/AbtSec'));
const ServSection = lazy(() => import('../components/Common/ServSection'));
const Bright     = lazy(() => import('../components/Common/Bright'));
const FAQ        = lazy(() => import('../components/Common/FAQ'));

/* ── Minimal skeleton shown while lazy chunks load ────────── */
const Skeleton = () => (
  <div style={{ minHeight: '200px', background: '#f3f4f6', borderRadius: '8px', margin: '8px 0' }} />
);

/* ════════════════════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════════════════════ */
const Home = () => {
  const [mounted, setMounted] = useState(false);

  /* Trigger initial animation on mount */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Single IntersectionObserver for all reveal elements —
     far more efficient than a scroll event listener           */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hm-visible');
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    /* Small delay so lazy-loaded sections can mount first */
    const timer = setTimeout(() => {
      document.querySelectorAll('.hm-reveal').forEach((el) => observer.observe(el));
    }, 120);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className={mounted ? 'hm-mounted' : ''}>
      {/* Hero is eager — it's above the fold */}
      <div className="hm-initial-fade-in">
        <Hero />
      </div>

      {/* Each below-fold section gets its own reveal wrapper  */}
      <Suspense fallback={<Skeleton />}>
        <div className="hm-reveal hm-delay-1"><HeroBotm /></div>
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <div className="hm-reveal hm-delay-2"><AbtSec /></div>
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <div className="hm-reveal hm-delay-1"><ServSection /></div>
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <div className="hm-reveal hm-delay-2"><Bright /></div>
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <div className="hm-reveal hm-delay-1"><FAQ /></div>
      </Suspense>

      {/* Scoped animation styles */}
      <style>{`
        /* Initial fade-in animation for page load */
        .hm-initial-fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: hmFadeIn 0.8s ease-out forwards;
        }

        @keyframes hmFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* GPU-composited reveal — opacity + transform only */
        .hm-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          will-change: opacity, transform;
        }
        .hm-reveal.hm-visible {
          opacity: 1;
          transform: translateY(0);
          will-change: auto;
        }

        /* Staggered entrance delays */
        .hm-delay-1 { transition-delay: 0.05s; }
        .hm-delay-2 { transition-delay: 0.12s; }

        /* Respect reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .hm-initial-fade-in {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .hm-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        /* Portrait phones — tighten vertical rhythm */
        @media (max-width: 480px) and (orientation: portrait) {
          .hm-initial-fade-in {
            transform: translateY(20px);
            animation-duration: 0.6s;
          }
          .hm-reveal { transform: translateY(14px); }
        }

        /* Landscape phones — less height, keep animation subtle */
        @media (max-width: 896px) and (orientation: landscape) {
          .hm-initial-fade-in {
            transform: translateY(15px);
            animation-duration: 0.5s;
          }
          .hm-reveal { transform: translateY(10px); transition-duration: 0.45s; }
        }
      `}</style>
    </div>
  );
};

export default Home;