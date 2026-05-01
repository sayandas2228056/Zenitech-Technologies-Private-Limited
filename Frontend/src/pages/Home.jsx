import React, { lazy, Suspense } from 'react';
import Hero from '../components/Homepage/Hero';
import useSEO from '../hooks/useSEO';

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

/* ── FAQ Schema Data ─────────────────────────────────── */
const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Zenitech Technologies offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zenitech Technologies offers comprehensive cybersecurity solutions and cloud computing services including cloud migration, security monitoring, threat detection, vulnerability assessment, and managed IT services for enterprises across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Zenitech Technologies located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zenitech Technologies Private Limited is headquartered in Bengaluru (Bangalore), Karnataka, India at Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bengaluru – 560045.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Zenitech provide 24/7 cybersecurity monitoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Zenitech Technologies provides round-the-clock 24/7 cybersecurity monitoring and threat detection services to ensure your business systems remain protected against evolving cyber threats.',
      },
    },
  ],
};

/* ════════════════════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════════════════════ */
const Home = () => {
  useSEO({
    title: 'Cybersecurity & Cloud Solutions India',
    description:
      'Zenitech Technologies — India\'s best cybersecurity and cloud computing company. Enterprise-grade cloud security solutions, managed IT services, cloud migration & 24/7 threat monitoring from Bengaluru.',
    canonical: 'https://www.zenitech.in/',
    keywords:
      'Zenitech Technologies, cybersecurity services India, cloud computing company India, cloud security solutions, managed IT services India, best cloud computing company India, cybersecurity solutions provider, IT services company India, cloud consulting Bengaluru',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.zenitech.in/' },
    ],
    jsonLd: [homeFaqSchema],
  });

  return (
    <article>
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
    </article>
  );
};

export default Home;