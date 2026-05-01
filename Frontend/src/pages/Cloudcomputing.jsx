import React, { useState, useEffect, useRef } from 'react';
import {
  Cloud, Server, Database, Globe, Shield,
  Zap, ArrowRight, Settings, Cpu, Lock,
  Check, ChevronDown, ChevronUp, Phone, Mail, MapPin, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Cloud1 from '../assets/serviceimg/Cloud1.jpg';
import Cloud2 from '../assets/serviceimg/Cloud2.jpg';
import Cloud3 from '../assets/serviceimg/Cloud3.jpg';
import Bright2 from '../components/Common/Bright2';
import useSEO from '../hooks/useSEO';

/* ══════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════ */

const services = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless transition of your infrastructure and applications to the cloud with minimal disruption to business operations.',
    features: ['Infrastructure Migration', 'Application Migration', 'Data Migration', 'Post-Migration Support'],
    color: '#D6E8F8',
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Scalable and reliable cloud infrastructure solutions tailored precisely to your business needs and growth trajectory.',
    features: ['Server Management', 'Load Balancing', 'Auto Scaling', 'Resource Optimization'],
    color: '#D0E2F4',
  },
  {
    icon: Database,
    title: 'Cloud Storage',
    description: 'Secure and efficient cloud storage solutions for your data with high availability and enterprise-grade redundancy.',
    features: ['Data Backup', 'Disaster Recovery', 'File Storage', 'Object Storage'],
    color: '#D6E8F8',
  },
  {
    icon: Globe,
    title: 'Multi-Cloud Solutions',
    description: 'Comprehensive multi-cloud strategies to leverage the best features of different providers optimally.',
    features: ['Cloud Strategy', 'Provider Management', 'Cost Optimization', 'Performance Tuning'],
    color: '#D0E2F4',
  },
];

const processSteps = [
  { step: '01', title: 'Assessment',   description: 'Evaluate your current infrastructure and identify cloud migration opportunities.',          icon: '' },
  { step: '02', title: 'Planning',     description: 'Develop a comprehensive cloud strategy aligned with your business objectives.',              icon: '' },
  { step: '03', title: 'Migration',    description: 'Execute the migration with minimal disruption to your business operations.',                 icon: '' },
  { step: '04', title: 'Optimization', description: 'Continuously optimize your cloud infrastructure for performance and cost efficiency.',       icon: '' },
];

const tabContent = [
  {
    title: 'Cloud Strategy',
    icon: '☁️',
    content: 'Our cloud strategy assessment helps identify the best cloud solutions for your business needs. We analyze your current infrastructure, applications, and business goals to create a tailored cloud roadmap that drives measurable results.',
    highlights: ['Readiness assessment', 'Cost-benefit analysis', 'Provider selection', 'Migration roadmap'],
    image: Cloud1,
  },
  {
    title: 'Migration Process',
    icon: '⚙️',
    content: 'Our expert team handles the entire migration process, ensuring minimal disruption to your business. We follow industry best practices and maintain strict security protocols throughout the migration lifecycle.',
    highlights: ['Zero-downtime options', 'Data integrity checks', 'Rollback planning', 'Security validation'],
    image: Cloud2,
  },
  {
    title: 'Ongoing Support',
    icon: '🛡️',
    content: '24/7 cloud infrastructure monitoring and support ensure optimal performance at all times. Our team proactively manages your cloud resources and addresses any issues before they impact operations.',
    highlights: ['24/7 SOC monitoring', 'Performance tuning', 'Cost governance', 'Incident management'],
    image: Cloud3,
  },
];

const features = [
  { icon: Shield, title: 'Cloud Security',    description: 'Advanced security measures to protect your cloud infrastructure from evolving threats.' },
  { icon: Zap,    title: 'High Performance',  description: 'Optimized cloud resources ensuring maximum performance and minimal latency.' },
  { icon: Settings, title: 'Scalability',     description: 'Flexible scaling options to meet changing business demands instantly.' },
  { icon: Cpu,    title: 'Cost Optimization', description: 'Intelligent resource management and cost governance to reduce cloud expenditure.' },
  { icon: Lock,   title: 'Data Protection',   description: 'Comprehensive data backup, encryption, and recovery solutions you can rely on.' },
  { icon: Globe,  title: 'Global Reach',      description: 'Worldwide cloud infrastructure deployment for geographically distributed organisations.' },
];

const cloudPartners = [
  { name: 'Amazon Web Services', short: 'AWS',          color: '#FF9900', bg: '#FFF3E0' },
  { name: 'Microsoft Azure',     short: 'Azure',        color: '#0078D4', bg: '#E3F2FD' },
  { name: 'Google Cloud',        short: 'GCP',          color: '#4285F4', bg: '#E8EAF6' },
  { name: 'Jio Cloud',           short: 'JioCloud',     color: '#0C3E73', bg: '#D6E8F8' },
];

const stats = [
  { num: '99.99%', label: 'Uptime SLA' },
  { num: '24/7',   label: 'Cloud Support' },
  { num: 'Experts',     label: 'in Cloud Computing' },
];

const trustBadges = [
  'Cloud-Native Architecture',
  'Auto-Scaling Infrastructure',
  'High Availability Design',
  'Infrastructure as Code (IaC)',
  'Secure Cloud Deployments'
];

const contactItems = [
  { icon: Phone, label: 'Call Us 24/7',    lines: ['+91 88200 66999', '+91 74390 04545'], links: ['tel:+918820066999', 'tel:+917439004545'] },
  { icon: Mail,  label: 'Email Us',        lines: ['info@zenitech.in'], links: ['mailto:info@zenitech.in'] },

];

/* ══════════════════════════════════════════════════════════════
   HOOKS & SMALL COMPONENTS
══════════════════════════════════════════════════════════════ */

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('cc-revealed'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const RevealCard = ({ children, className = '', delay = 0 }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`cc-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="cc-section-header">
    <div className="cc-eyebrow-row">
      <span className="cc-eyebrow-line" />
      <span className="cc-eyebrow">{eyebrow}</span>
      <span className="cc-eyebrow-line" />
    </div>
    <h2 className="cc-section-title">{title}</h2>
    {subtitle && <p className="cc-section-sub">{subtitle}</p>}
  </div>
);

const Tick = () => (
  <span className="cc-tick">
    <Check size={9} strokeWidth={3} color="#1565C0" />
  </span>
);

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════ */

const Cloudcomputing = () => {
  useSEO({
    title: 'Cloud Computing Services India',
    description:
      'Best cloud computing company in India — Zenitech offers cloud migration, multi-cloud solutions, IaaS, PaaS, cloud security & cost optimization. 24/7 managed cloud services from Bengaluru.',
    canonical: 'https://www.zenitech.in/services/cloud-solutions',
    keywords:
      'cloud computing services India, best cloud computing company India, cloud migration services, multi-cloud solutions, cloud infrastructure, managed cloud services, cloud security, IaaS PaaS India, Zenitech cloud computing, cloud consulting Bengaluru',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.zenitech.in/' },
      { name: 'Services', url: 'https://www.zenitech.in/services' },
      { name: 'Cloud Computing', url: 'https://www.zenitech.in/services/cloud-solutions' },
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Cloud Computing Services',
        serviceType: 'Cloud Computing',
        description:
          'End-to-end cloud computing solutions including cloud migration, infrastructure management (IaaS), platform services (PaaS), multi-cloud strategy, and cost optimization for businesses in India.',
        provider: {
          '@type': 'Organization',
          name: 'Zenitech Technologies Private Limited',
          url: 'https://www.zenitech.in/',
        },
        areaServed: { '@type': 'Country', name: 'India' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Cloud Computing Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Migration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Infrastructure (IaaS)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Storage & Backup' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Cloud Solutions' } },
          ],
        },
      },
    ],
  });

  const [activeTab, setActiveTab] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [processIndex, setProcessIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (el) setTimeout(() => el.classList.add('cc-hero-in'), 60);
  }, []);

  const prevService = () => setServiceIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextService = () => setServiceIndex((prev) => (prev >= services.length - itemsPerSlide ? 0 : prev + 1));

  const prevProcess = () => setProcessIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextProcess = () => setProcessIndex((prev) => (prev >= processSteps.length - itemsPerSlide ? 0 : prev + 1));

  const prevFeature = () => setFeatureIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextFeature = () => setFeatureIndex((prev) => (prev >= features.length - itemsPerSlide ? 0 : prev + 1));

  return (
    <div className="cc-root">

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="cc-hero" ref={heroRef}>
        <div className="cc-hero-blob cc-blob-1" />
        <div className="cc-hero-blob cc-blob-2" />

        <div className="cc-hero-layout">

          {/* Left — text */}
          <div className="cc-hero-text">
            <div className="cc-badge cc-badge-animate">
              <span className="cc-badge-dot cc-pulse" />
              <span>CLOUD COMPUTING SOLUTIONS</span>
            </div>

            <h1 className="cc-hero-heading cc-text-animate" style={{ animationDelay: '0.1s' }}>
              Transform your business with{' '}
              <em className="cc-hero-em">Cloud Computing</em>
            </h1>

            <p className="cc-hero-sub cc-text-animate" style={{ animationDelay: '0.2s' }}>
              Leverage the power of cloud computing to scale your business, reduce costs, and drive innovation with our comprehensive managed cloud solutions.
            </p>

            <div className="cc-hero-btns cc-text-animate" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact"      className="cc-btn-primary">Contact Us</Link>
              <Link to="/appointment" className="cc-btn-ghost">▶ &nbsp;Schedule a meeting</Link>
            </div>

            <div className="cc-badge cc-badge-sm cc-text-animate" style={{ animationDelay: '0.4s' }}>
              <span className="cc-badge-dot" />
              <span>Cloud Active &amp; monitored 24/7</span>
            </div>

            {/* Stats */}
            <div className="cc-stats-row cc-text-animate" style={{ animationDelay: '0.5s' }}>
              {stats.map((s, i) => (
                <div key={i} className="cc-stat">
                  <span className="cc-stat-num">{s.num}</span>
                  <span className="cc-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="cc-hero-image-col cc-text-animate" style={{ animationDelay: '0.25s' }}>
            <div className="cc-hero-image-frame">
              <div className="cc-hero-image-glow" />
              <img src={Cloud1} alt="Cloud Computing Dashboard" className="cc-hero-img" />
              <div className="cc-hero-img-badge">
                <span className="cc-badge-dot" style={{ width: 8, height: 8, background: '#4A9AD4', animation: 'cc-pulse 2s ease infinite' }} />
                <span>Cloud Active</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ TRUST BAR ══════════════════════════════════════════ */}
      <div className="cc-trust-bar">
        {trustBadges.map((t, i) => (
          <span key={i} className="cc-trust-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {t}
          </span>
        ))}
      </div>

      {/* ══ SERVICES ═══════════════════════════════════════════ */}
      <section className="cc-section cc-section-gray">
        <SectionHeader
          eyebrow="OUR SOLUTIONS"
          title="Comprehensive cloud services"
          subtitle="Transform your business with advanced cloud computing solutions designed to drive innovation, resilience, and sustained growth."
        />
        <div className="cc-carousel-wrapper">
          <button className="cc-carousel-btn cc-carousel-btn-prev" onClick={prevService}>
            <ChevronLeft size={24} />
          </button>
          <div className="cc-services-grid cc-carousel-grid">
            {services.slice(serviceIndex, serviceIndex + itemsPerSlide).map((svc, i) => (
              <RevealCard key={i} className="cc-service-card" delay={i * 80}>
                <div className="cc-card-accent-bar" />
                <div className="cc-card-icon-wrap" style={{ background: svc.color }}>
                  <svc.icon size={24} color="#1565C0" />
                </div>
                <h3 className="cc-card-title">{svc.title}</h3>
                <p className="cc-card-desc">{svc.description}</p>
                <div className="cc-feat-grid">
                  {svc.features.map((f, j) => (
                    <span key={j} className="cc-feat-chip"><Tick />{f}</span>
                  ))}
                </div>
              </RevealCard>
            ))}
          </div>
          <button className="cc-carousel-btn cc-carousel-btn-next" onClick={nextService}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="cc-carousel-dots">
          {Array.from({ length: Math.ceil(services.length / itemsPerSlide) }).map((_, i) => (
            <button
              key={i}
              className={`cc-carousel-dot${i === Math.floor(serviceIndex / itemsPerSlide) ? ' cc-carousel-dot-active' : ''}`}
              onClick={() => setServiceIndex(i * itemsPerSlide)}
            />
          ))}
        </div>
      </section>

      {/* ══ METHODOLOGY TABS ═══════════════════════════════════ */}
      <section className="cc-section cc-section-gray">
        <SectionHeader eyebrow="DETAILED APPROACH" title="Our cloud implementation strategy" />

        <div className="cc-tabs-layout">
          {/* Tab buttons */}
          <div className="cc-tab-list">
            {tabContent.map((tab, i) => (
              <button
                key={i}
                className={`cc-tab-btn${activeTab === i ? ' cc-tab-btn-active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <span className="cc-tab-icon">{tab.icon}</span>
                <span className="cc-tab-label">{tab.title}</span>
                {activeTab === i && <span className="cc-tab-active-bar" />}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="cc-tab-content-panel">
            <div className="cc-tab-panel-inner" key={activeTab}>
              {/* Image */}
              <img
                src={tabContent[activeTab].image}
                alt={tabContent[activeTab].title}
                className="cc-tab-image"
              />
              <div className="cc-tab-panel-eyebrow">
                <span className="cc-tab-panel-icon">{tabContent[activeTab].icon}</span>
                <span>{tabContent[activeTab].title}</span>
              </div>
              <p className="cc-tab-panel-body">{tabContent[activeTab].content}</p>
              <div className="cc-tab-highlights">
                {tabContent[activeTab].highlights.map((h, i) => (
                  <span key={i} className="cc-highlight-chip">
                    <span className="cc-highlight-dot" />{h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Bright2/>

      {/* ══ PROCESS ════════════════════════════════════════════ */}
      <section className="cc-section cc-section-white">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="Your journey to the cloud"
          subtitle="A four-step approach that takes you from assessment to fully optimised cloud operations with minimal disruption."
        />
        <div className="cc-carousel-wrapper">
          <button className="cc-carousel-btn cc-carousel-btn-prev" onClick={prevProcess}>
            <ChevronLeft size={24} />
          </button>
          <div className="cc-process-grid cc-carousel-grid">
            {processSteps.slice(processIndex, processIndex + itemsPerSlide).map((ps, i) => (
              <RevealCard key={i} className="cc-process-card" delay={i * 100}>
                <div className="cc-step-num">{ps.step}</div>
                <div className="cc-step-emoji">{ps.icon}</div>
                <h3 className="cc-card-title cc-card-title-sm">{ps.title}</h3>
                <p className="cc-card-desc cc-card-desc-xs">{ps.description}</p>
              </RevealCard>
            ))}
          </div>
          <button className="cc-carousel-btn cc-carousel-btn-next" onClick={nextProcess}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="cc-carousel-dots">
          {Array.from({ length: Math.ceil(processSteps.length / itemsPerSlide) }).map((_, i) => (
            <button
              key={i}
              className={`cc-carousel-dot${i === Math.floor(processIndex / itemsPerSlide) ? ' cc-carousel-dot-active' : ''}`}
              onClick={() => setProcessIndex(i * itemsPerSlide)}
            />
          ))}
        </div>
      </section>

      

      {/* ══ FEATURES ═══════════════════════════════════════════ */}
      <section className="cc-section cc-section-gray">
        <SectionHeader
          eyebrow="KEY FEATURES"
          title="Advanced cloud capabilities"
          subtitle="Every layer of your cloud environment protected and optimised by intelligent, adaptive tools."
        />
        <div className="cc-carousel-wrapper">
          <button className="cc-carousel-btn cc-carousel-btn-prev" onClick={prevFeature}>
            <ChevronLeft size={24} />
          </button>
          <div className="cc-features-grid cc-carousel-grid">
            {features.slice(featureIndex, featureIndex + itemsPerSlide).map((feat, i) => (
              <RevealCard key={i} className="cc-feat-card" delay={i * 80}>
                <div className="cc-feat-icon-wrap">
                  <feat.icon size={22} color="#1565C0" />
                </div>
                <h3 className="cc-card-title cc-card-title-sm">{feat.title}</h3>
                <p className="cc-card-desc cc-card-desc-xs">{feat.description}</p>
              </RevealCard>
            ))}
          </div>
          <button className="cc-carousel-btn cc-carousel-btn-next" onClick={nextFeature}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="cc-carousel-dots">
          {Array.from({ length: Math.ceil(features.length / itemsPerSlide) }).map((_, i) => (
            <button
              key={i}
              className={`cc-carousel-dot${i === Math.floor(featureIndex / itemsPerSlide) ? ' cc-carousel-dot-active' : ''}`}
              onClick={() => setFeatureIndex(i * itemsPerSlide)}
            />
          ))}
        </div>
      </section>

      {/* ══ CONTACT CTA ════════════════════════════════════════ */}
      <section className="cc-contact-section">
        <div className="cc-contact-blob" />
        <div className="cc-contact-grid">

          {/* Left — contact info */}
          <div>
            <div className="cc-badge cc-badge-light">
              <span className="cc-badge-dot cc-pulse" />
              <span>Get in touch</span>
            </div>
            <h2 className="cc-contact-heading">Contact information</h2>
            <p className="cc-contact-sub">
              Reach out to us through any of these channels. We're available to answer your questions 24/7.
            </p>

            <div className="cc-contact-items">
              {contactItems.map((item, i) => (
                <div key={i} className="cc-contact-item">
                  <div className="cc-contact-icon-box"><item.icon size={16} color="#fff" /></div>
                  <div>
                    <p className="cc-contact-item-label">{item.label}</p>
                    {item.lines && item.lines.map((l, j) => (
                      <a key={j} href={item.links[j]} className="cc-contact-item-value">{l}</a>
                    ))}
                    {item.sub && item.sub.map((s, j) => (
                      <div key={j} style={{ marginTop: j > 0 ? 10 : 0 }}>
                        <span className="cc-contact-city">{s.city}</span>
                        <span className="cc-contact-item-value">{s.addr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="cc-btn-white">Contact Us ↗</Link>
          </div>

          {/* Right — cloud card */}
          <div className="cc-contact-card">
            <div className="cc-contact-card-badge">
              <Cloud size={18} color="#6BA8E0" />
              <span>Cloud Computing</span>
            </div>
            <p className="cc-contact-card-body">
              Empowering businesses with scalable, secure cloud solutions. From migration to optimisation — we've got you covered at every stage.
            </p>
            <ul className="cc-contact-card-list">
              {['Cloud Migration Services', 'Infrastructure Management', 'Cost Optimisation', '24/7 Cloud Support'].map((item, i) => (
                <li key={i}>
                  <span className="cc-contact-card-dot" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="cc-badge cc-badge-light" style={{ marginTop: 24 }}>
              <span className="cc-badge-dot cc-pulse" />
              <span>All systems operational</span>
            </div>
          </div>

        </div>
      </section>

      {/* ══ SCOPED STYLES ══════════════════════════════════════ */}
      <style>{`
        /* ── Design tokens (darker navy blue) ─────────────── */
        .cc-root {
          --cc-blue-deep:    #021828;
          --cc-blue-dark:    #0C3E73;
          --cc-blue-mid:     #1565C0;
          --cc-blue-light:   #1A6BC4;
          --cc-blue-soft:    #4A9AD4;
          --cc-blue-pale:    #6BA8E0;
          --cc-blue-pal2:    #9DC5EF;
          --cc-blue-bg:      #D6E8F8;
          --cc-blue-bg2:     #D0E2F4;
          --cc-white:        #ffffff;
          --cc-gray-50:      #F5F8FC;
          --cc-gray-100:     #EAF0F8;
          --cc-gray-200:     #C8DAEA;
          --cc-gray-400:     #7A9AB8;
          --cc-text-main:    #07192E;
          --cc-text-body:    #2C4A68;
          --cc-text-muted:   #5A7A98;
          --cc-radius-sm:    8px;
          --cc-radius-md:    12px;
          --cc-radius-lg:    16px;
          --cc-radius-xl:    20px;
          --cc-shadow-card:  0 2px 12px rgba(21,101,192,0.07), 0 1px 3px rgba(0,0,0,0.05);
          --cc-shadow-hover: 0 8px 32px rgba(21,101,192,0.15), 0 2px 8px rgba(0,0,0,0.06);
          font-family: 'Satoshi', 'Inter', system-ui, sans-serif;
          color: var(--cc-text-main);
          background: var(--cc-white);
          overflow-x: hidden;
        }

        /* ── Scroll reveal ─────────────────────────────────── */
        .cc-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .cc-reveal.cc-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ══ HERO ══════════════════════════════════════════════ */
        .cc-hero {
          position: relative;
          background: linear-gradient(135deg, #021828 0%, #0C3E73 55%, #082F5C 100%);
          color: #fff;
          padding: 100px 48px 72px;
          overflow: hidden;
        }
        .cc-hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(65px);
          pointer-events: none;
        }
        .cc-blob-1 {
          width: 540px; height: 540px;
          background: radial-gradient(circle, rgba(26,107,196,0.2) 0%, transparent 70%);
          top: -150px; right: -130px;
        }
        .cc-blob-2 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(12,62,115,0.15) 0%, transparent 70%);
          bottom: -90px; left: -70px;
        }
        .cc-hero-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 460px;
          gap: 56px;
          align-items: center;
          padding-top: 52px;
        }
        .cc-hero-text { min-width: 0; }

        /* ── Hero image ──────────────────────────────────────── */
        .cc-hero-image-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cc-hero-image-frame {
          position: relative;
          width: 100%;
          max-width: 440px;
        }
        .cc-hero-image-glow {
          position: absolute;
          inset: -28px;
          border-radius: 28px;
          background: radial-gradient(ellipse at center, rgba(26,107,196,0.32) 0%, transparent 70%);
          filter: blur(24px);
          pointer-events: none;
          z-index: 0;
        }
        .cc-hero-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          border: 1.5px solid rgba(26,107,196,0.35);
          box-shadow: 0 24px 60px rgba(2,24,40,0.55), 0 0 0 1px rgba(26,107,196,0.12);
          display: block;
        }
        .cc-hero-img-badge {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(2,24,40,0.85);
          border: 1px solid rgba(26,107,196,0.38);
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 11.5px;
          font-weight: 600;
          color: var(--cc-blue-pal2);
          letter-spacing: 0.04em;
          white-space: nowrap;
          backdrop-filter: blur(10px);
        }

        /* ── Hero animations ─────────────────────────────────── */
        .cc-badge-animate { animation: cc-fade-up 0.6s ease forwards; opacity: 0; }
        .cc-text-animate  { animation: cc-fade-up 0.6s ease forwards; opacity: 0; }
        @keyframes cc-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Badge ───────────────────────────────────────────── */
        .cc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(26,107,196,0.18);
          border: 0.5px solid rgba(26,107,196,0.38);
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 20px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--cc-blue-pal2);
        }
        .cc-badge-sm { font-size: 11px; padding: 5px 12px; }
        .cc-badge-light {
          background: rgba(26,107,196,0.18);
          border-color: rgba(26,107,196,0.32);
          color: var(--cc-blue-pal2);
        }
        .cc-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--cc-blue-pale);
          flex-shrink: 0;
        }
        .cc-pulse { animation: cc-pulse 2s ease infinite; }
        @keyframes cc-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }

        /* ── Hero heading ────────────────────────────────────── */
        .cc-hero-heading {
          font-size: clamp(28px, 5vw, 50px);
          font-weight: 700;
          line-height: 1.12;
          color: #fff;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }
        .cc-hero-em {
          font-style: normal;
          color: var(--cc-blue-pale);
          position: relative;
        }
        .cc-hero-em::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--cc-blue-pale), transparent);
          border-radius: 2px;
        }
        .cc-hero-sub {
          font-size: 15.5px;
          color: var(--cc-blue-pal2);
          line-height: 1.75;
          max-width: 500px;
          margin-bottom: 32px;
        }
        .cc-hero-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        /* ── Stats row ───────────────────────────────────────── */
        .cc-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
          border-top: 1px solid rgba(26,107,196,0.22);
          padding-top: 28px;
          margin-top: 28px;
        }
        .cc-stat { text-align: center; padding: 6px 4px; }
        .cc-stat-num   { display: block; font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 4px; letter-spacing: -0.02em; }
        .cc-stat-label { display: block; font-size: 11px; color: var(--cc-blue-pale); letter-spacing: 0.04em; }

        /* ── Buttons ─────────────────────────────────────────── */
        .cc-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--cc-blue-mid);
          color: #fff;
          padding: 12px 24px;
          border-radius: var(--cc-radius-md);
          font-size: 14px; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(21,101,192,0.35);
        }
        .cc-btn-primary:hover {
          background: #0C3E73;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(21,101,192,0.45);
        }
        .cc-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: var(--cc-blue-pal2);
          padding: 12px 24px;
          border-radius: var(--cc-radius-md);
          font-size: 14px; font-weight: 500;
          border: 1px solid rgba(26,107,196,0.38);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .cc-btn-ghost:hover {
          background: rgba(26,107,196,0.14);
          border-color: rgba(26,107,196,0.58);
        }
        .cc-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff;
          color: var(--cc-blue-dark);
          padding: 12px 24px;
          border-radius: var(--cc-radius-md);
          font-size: 14px; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
        }
        .cc-btn-white:hover {
          background: var(--cc-blue-bg);
          transform: translateY(-1px);
        }

        /* ── Trust bar ───────────────────────────────────────── */
        .cc-trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px 24px;
          padding: 14px 32px;
          background: var(--cc-blue-bg);
          border-bottom: 1px solid var(--cc-gray-200);
        }
        .cc-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          color: var(--cc-blue-dark);
          letter-spacing: 0.03em;
        }

        /* ── Sections ────────────────────────────────────────── */
        .cc-section { padding: 80px 48px; }
        .cc-section-white { background: var(--cc-white); }
        .cc-section-gray  { background: var(--cc-gray-50); }

        /* ── Section header ──────────────────────────────────── */
        .cc-section-header { text-align: center; margin-bottom: 52px; }
        .cc-eyebrow-row {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-bottom: 14px;
        }
        .cc-eyebrow-line {
          display: block; width: 32px; height: 2px;
          background: var(--cc-blue-mid); border-radius: 2px;
        }
        .cc-eyebrow {
          font-size: 11px; font-weight: 700;
          color: var(--cc-blue-mid);
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .cc-section-title {
          font-size: clamp(22px, 3.5vw, 36px);
          font-weight: 700;
          color: var(--cc-text-main);
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
        }
        .cc-section-sub {
          font-size: 15px;
          color: var(--cc-text-body);
          line-height: 1.7;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── Service cards ───────────────────────────────────── */
        .cc-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }
        .cc-service-card {
          background: var(--cc-white);
          border: 1px solid var(--cc-gray-200);
          border-radius: var(--cc-radius-lg);
          padding: 26px;
          box-shadow: var(--cc-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.22s;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .cc-service-card:hover {
          border-color: var(--cc-blue-mid);
          box-shadow: var(--cc-shadow-hover);
          transform: translateY(-3px);
        }
        .cc-card-accent-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--cc-blue-dark), var(--cc-blue-mid));
          border-radius: var(--cc-radius-lg) var(--cc-radius-lg) 0 0;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .cc-service-card:hover .cc-card-accent-bar { opacity: 1; }
        .cc-card-icon-wrap {
          width: 52px; height: 52px;
          border-radius: var(--cc-radius-md);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          transition: transform 0.2s;
        }
        .cc-service-card:hover .cc-card-icon-wrap { transform: scale(1.08); }
        .cc-card-title {
          font-size: 16px; font-weight: 700;
          color: var(--cc-text-main);
          margin-bottom: 8px;
        }
        .cc-card-title-sm { font-size: 14.5px; }
        .cc-card-desc {
          font-size: 13.5px;
          color: var(--cc-text-body);
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .cc-card-desc-xs { font-size: 12.5px; margin-bottom: 0; }

        /* ── Feature chips (inside service cards) ────────────── */
        .cc-feat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .cc-feat-chip {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500;
          color: var(--cc-text-body);
          background: var(--cc-gray-50);
          border: 1px solid var(--cc-gray-200);
          border-radius: 6px;
          padding: 5px 8px;
        }
        .cc-tick {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--cc-blue-bg);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ── Process ─────────────────────────────────────────── */
        .cc-process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .cc-process-card {
          background: var(--cc-white);
          border: 1px solid var(--cc-gray-200);
          border-radius: var(--cc-radius-lg);
          padding: 28px 22px;
          text-align: center;
          box-shadow: var(--cc-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.22s;
        }
        .cc-process-card:hover {
          border-color: var(--cc-blue-mid);
          box-shadow: var(--cc-shadow-hover);
          transform: translateY(-3px);
        }
        .cc-step-num {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, var(--cc-blue-deep), var(--cc-blue-mid));
          color: #fff;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 800;
          margin: 0 auto 12px;
          box-shadow: 0 4px 14px rgba(21,101,192,0.32);
          letter-spacing: 0.02em;
        }
        .cc-step-emoji { font-size: 24px; margin-bottom: 12px; display: block; }

        /* ── Methodology tabs ────────────────────────────────── */
        .cc-tabs-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 24px;
          align-items: start;
        }
        .cc-tab-list {
          display: flex; flex-direction: column; gap: 8px;
        }
        .cc-tab-btn {
          position: relative;
          display: flex; align-items: center; gap: 12px;
          background: var(--cc-white);
          border: 1px solid var(--cc-gray-200);
          border-radius: var(--cc-radius-md);
          padding: 14px 18px;
          font-size: 14px; font-weight: 600;
          color: var(--cc-text-body);
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .cc-tab-btn:hover:not(.cc-tab-btn-active) {
          border-color: var(--cc-blue-mid);
          color: var(--cc-blue-dark);
          background: var(--cc-blue-bg);
        }
        .cc-tab-btn-active {
          background: linear-gradient(135deg, var(--cc-blue-deep), var(--cc-blue-dark));
          border-color: var(--cc-blue-dark);
          color: #fff;
          box-shadow: 0 4px 16px rgba(12,62,115,0.28);
        }
        .cc-tab-icon  { font-size: 18px; flex-shrink: 0; }
        .cc-tab-label { flex: 1; }
        .cc-tab-active-bar {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--cc-blue-pale);
          border-radius: 0 2px 2px 0;
        }

        /* ── Tab content panel ───────────────────────────────── */
        .cc-tab-content-panel {
          background: var(--cc-white);
          border: 1px solid var(--cc-gray-200);
          border-radius: var(--cc-radius-lg);
          padding: 0;
          box-shadow: var(--cc-shadow-card);
          overflow: hidden;
        }
        .cc-tab-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }
        .cc-tab-panel-inner {
          animation: cc-fade-in 0.3s ease;
        }
        @keyframes cc-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cc-tab-panel-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 700;
          color: var(--cc-blue-dark);
          letter-spacing: 0.04em;
          margin: 20px 24px 10px;
        }
        .cc-tab-panel-icon { font-size: 20px; }
        .cc-tab-panel-body {
          font-size: 14px;
          color: var(--cc-text-body);
          line-height: 1.75;
          margin: 0 24px 16px;
        }
        .cc-tab-highlights {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin: 0 24px 22px;
        }
        .cc-highlight-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          color: var(--cc-blue-dark);
          background: var(--cc-blue-bg);
          border: 1px solid var(--cc-gray-200);
          border-radius: 100px;
          padding: 5px 12px;
        }
        .cc-highlight-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cc-blue-mid);
          flex-shrink: 0;
        }

        /* ── Cloud partners ──────────────────────────────────── */
        .cc-partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 18px;
        }
        .cc-partner-card {
          background: var(--cc-white);
          border: 1px solid var(--cc-gray-200);
          border-radius: var(--cc-radius-lg);
          padding: 28px 20px;
          text-align: center;
          box-shadow: var(--cc-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.22s;
          cursor: default;
        }
        .cc-partner-card:hover {
          border-color: var(--cc-blue-mid);
          box-shadow: var(--cc-shadow-hover);
          transform: translateY(-3px);
        }
        .cc-partner-logo-wrap {
          width: 80px; height: 80px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
          transition: transform 0.2s;
        }
        .cc-partner-card:hover .cc-partner-logo-wrap { transform: scale(1.08); }
        .cc-partner-short {
          font-size: 18px; font-weight: 800;
          letter-spacing: -0.02em;
        }
        .cc-partner-name {
          font-size: 13px; font-weight: 600;
          color: var(--cc-text-main);
          margin: 0;
        }

        /* ── carousel ── */
        .cc-carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .cc-carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--cc-white);
          border: 1.5px solid var(--cc-gray-200);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          color: #1565C0;
        }
        .cc-carousel-btn:hover {
          background: #1565C0;
          color: #fff;
          border-color: #1565C0;
          transform: scale(1.05);
        }
        .cc-carousel-grid {
          flex: 1;
          overflow: hidden;
        }
        .cc-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        .cc-carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cc-gray-200);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .cc-carousel-dot:hover {
          background: #4A9AD4;
        }
        .cc-carousel-dot.cc-carousel-dot-active {
          background: #1565C0;
          width: 24px;
          border-radius: 4px;
        }

        /* ── Features grid ───────────────────────────────────── */
        .cc-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .cc-feat-card {
          background: var(--cc-white);
          border: 1px solid var(--cc-gray-200);
          border-radius: var(--cc-radius-lg);
          padding: 24px;
          box-shadow: var(--cc-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.22s;
          position: relative;
          overflow: hidden;
        }
        .cc-feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--cc-blue-dark), var(--cc-blue-mid));
          opacity: 0;
          transition: opacity 0.25s;
        }
        .cc-feat-card:hover {
          border-color: var(--cc-blue-mid);
          box-shadow: var(--cc-shadow-hover);
          transform: translateY(-3px);
        }
        .cc-feat-card:hover::before { opacity: 1; }
        .cc-feat-icon-wrap {
          width: 46px; height: 46px;
          background: var(--cc-blue-bg);
          border-radius: var(--cc-radius-md);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
          transition: transform 0.2s;
        }
        .cc-feat-card:hover .cc-feat-icon-wrap { transform: scale(1.1); }

        /* ── Contact section ─────────────────────────────────── */
        .cc-contact-section {
          position: relative;
          background: linear-gradient(135deg, #021828 0%, #082F5C 65%, #0C3E73 100%);
          color: #fff;
          padding: 80px 48px;
          overflow: hidden;
        }
        .cc-contact-blob {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(26,107,196,0.14) 0%, transparent 70%);
          top: -200px; right: -150px;
          pointer-events: none;
        }
        .cc-contact-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 48px;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }
        .cc-contact-heading {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .cc-contact-sub {
          font-size: 14.5px;
          color: var(--cc-blue-pal2);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .cc-contact-items {
          display: flex; flex-direction: column; gap: 20px;
          margin-bottom: 32px;
        }
        .cc-contact-item {
          display: flex; gap: 14px; align-items: flex-start;
        }
        .cc-contact-icon-box {
          width: 40px; height: 40px;
          background: rgba(26,107,196,0.22);
          border: 1px solid rgba(26,107,196,0.35);
          border-radius: var(--cc-radius-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cc-contact-item-label {
          font-size: 10.5px; font-weight: 700;
          color: var(--cc-blue-pale);
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }
        .cc-contact-item-value {
          display: block;
          font-size: 13.5px;
          color: var(--cc-blue-pal2);
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.2s;
          cursor: pointer;
        }
        .cc-contact-item-value:hover {
          color: #1565C0;
          text-decoration: underline;
        }
        .cc-contact-city {
          display: block;
          font-size: 13px; font-weight: 600;
          color: var(--cc-blue-pale);
          margin-bottom: 2px;
        }
        .cc-contact-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(26,107,196,0.28);
          border-radius: var(--cc-radius-xl);
          padding: 28px;
          backdrop-filter: blur(8px);
        }
        .cc-contact-card-badge {
          display: flex; align-items: center; gap: 10px;
          font-size: 16px; font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        .cc-contact-card-body {
          font-size: 14px;
          color: var(--cc-blue-pal2);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .cc-contact-card-list {
          list-style: none;
          display: flex; flex-direction: column; gap: 10px;
        }
        .cc-contact-card-list li {
          display: flex; align-items: center; gap: 10px;
          font-size: 13.5px;
          color: var(--cc-blue-pale);
        }
        .cc-contact-card-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cc-blue-mid);
          flex-shrink: 0;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media (max-width: 1000px) {
          .cc-hero-layout { grid-template-columns: 1fr; gap: 36px; }
          .cc-hero-image-col { display: none; }
        }
        @media (max-width: 900px) {
          .cc-hero    { padding: 80px 28px 56px; }
          .cc-section { padding: 60px 28px; }
          .cc-contact-section { padding: 60px 28px; }
          .cc-tabs-layout { grid-template-columns: 1fr; }
          .cc-contact-grid { grid-template-columns: 1fr; }
          .cc-contact-card { display: none; }
        }
        @media (max-width: 600px) {
          .cc-hero    { padding: 70px 20px 48px; }
          .cc-section { padding: 52px 20px; }
          .cc-contact-section { padding: 52px 20px; }
          .cc-stats-row { grid-template-columns: repeat(2, 1fr); }
          .cc-services-grid { grid-template-columns: 1fr; }
          .cc-trust-bar { gap: 6px 16px; }
        }
      `}</style>
    </div>
  );
};

export default Cloudcomputing;