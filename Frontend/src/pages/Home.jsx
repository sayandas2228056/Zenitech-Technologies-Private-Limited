import React, { useEffect, lazy, Suspense, useState } from 'react';
import Hero from '../components/Homepage/Hero';

/* ── Below-fold components loaded lazily (code-split) ─────── */
const HeroBotm   = lazy(() => import('../components/Homepage/HeroBotm'));
const AbtSec     = lazy(() => import('../components/Homepage/AbtSec'));
const ServSection = lazy(() => import('../components/Common/ServSection'));
const Bright     = lazy(() => import('../components/Common/Bright'));
const FAQ        = lazy(() => import('../components/Common/FAQ'));

/* ── Skeleton shown while lazy chunks load ────────── */
const Skeleton = () => (
  <div style={{ 
    minHeight: '400px', 
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    borderRadius: '12px', 
    margin: '16px 0',
    animation: 'shimmer 1.5s infinite'
  }} />
);

/* ════════════════════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════════════════════ */
const Home = () => {
  return (
    <div>
      {/* Hero is eager — it's above the fold */}
      <Hero />

      {/* Each below-fold section gets its own reveal wrapper  */}
      <Suspense fallback={<Skeleton />}>
        <HeroBotm />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <AbtSec />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <ServSection />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <Bright />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <FAQ />
      </Suspense>

      {/* Scoped animation styles */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;