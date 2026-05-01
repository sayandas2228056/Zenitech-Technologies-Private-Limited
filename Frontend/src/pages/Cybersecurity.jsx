import React, { useState, useEffect, useRef } from 'react';
import { ShieldAlert, Activity, Globe, Lock, BarChart3, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Bright2 from '../components/Common/Bright2';
import useSEO from '../hooks/useSEO';
import herobg from "../assets/serviceimg/Cybersecurity.jpeg";

import Cyber1 from "../assets/serviceimg/Cybersecurity.jpeg";
import Cyber2 from "../assets/serviceimg/Cybersecurity2.png";
import Cyber3 from "../assets/serviceimg/Cybersecurity3.png";
/* ─── tiny hook: animate elements in on scroll ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('cs-revealed'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── reusable section header ─── */
const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="cs-section-header">
    <div className="cs-eyebrow-row">
      <span className="cs-eyebrow-line" />
      <span className="cs-eyebrow">{eyebrow}</span>
      <span className="cs-eyebrow-line" />
    </div>
    <h2 className="cs-section-title">{title}</h2>
    {subtitle && <p className="cs-section-sub">{subtitle}</p>}
  </div>
);

/* ─── animated card wrapper ─── */
const RevealCard = ({ children, className = '', style = {}, delay = 0 }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`cs-reveal-card ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};

const Cybersecurity = () => {
  useSEO({
    title: 'Cybersecurity Services India',
    description:
      'Enterprise cybersecurity solutions by Zenitech: threat detection, VAPT, network security, cloud security, 24/7 SOC monitoring & incident response. Trusted cybersecurity services provider in India.',
    canonical: 'https://www.zenitech.in/services/cybersecurity',
    keywords:
      'cybersecurity services India, cybersecurity solutions provider, network security, threat detection, penetration testing, cloud security, VAPT, SOC monitoring, Zenitech cybersecurity, managed security services India',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.zenitech.in/' },
      { name: 'Services', url: 'https://www.zenitech.in/services' },
      { name: 'Cybersecurity', url: 'https://www.zenitech.in/services/cybersecurity' },
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Cybersecurity Solutions',
        serviceType: 'Cybersecurity Services',
        description:
          'Comprehensive cybersecurity services including threat detection, vulnerability assessment, penetration testing, identity & access management, network security, and 24/7 SOC monitoring for enterprises in India.',
        provider: {
          '@type': 'Organization',
          name: 'Zenitech Technologies Private Limited',
          url: 'https://www.zenitech.in/',
        },
        areaServed: { '@type': 'Country', name: 'India' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Cybersecurity Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Security' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Protection & Encryption' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Threat Detection & Monitoring' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Security' } },
          ],
        },
      },
    ],
  });

  const [activeTab, setActiveTab] = useState(0);
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

  const prevFeature = () => setFeatureIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextFeature = () => setFeatureIndex((prev) => (prev >= features.length - itemsPerSlide ? 0 : prev + 1));

  useEffect(() => {
    const el = heroRef.current;
    if (el) { setTimeout(() => el.classList.add('cs-hero-in'), 50); }
  }, []);

  const tabs = [
    {
      title: 'Security assessment',
      icon: '🔍',
      image: Cyber1,
      content: 'Our comprehensive security assessment identifies vulnerabilities, evaluates current security measures, and provides detailed recommendations for improvement. We use industry-leading tools and methodologies to ensure nothing is overlooked.',
      highlights: ['Vulnerability scanning', 'Risk scoring', 'Gap analysis', 'Compliance check']
    },
    {
      title: 'Implementation',
      icon: '⚙️',
      image: Cyber2,
      content: 'Our expert team implements security solutions with precision and minimal business disruption. We follow best practices and ensure all systems are properly configured and tested before going live.',
      highlights: ['Zero-downtime deploy', 'Config hardening', 'Integration testing', 'Staff training']
    },
    {
      title: 'Ongoing support',
      icon: '🛡️',
      image: Cyber3,
      content: '24/7 monitoring and support ensure your systems remain secure. Our team proactively identifies and addresses potential threats before they can impact your business operations.',
      highlights: ['24/7 SOC coverage', 'Incident response', 'Monthly reporting', 'Patch management']
    }
  ];

  const services = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Network Security',
      description: 'Comprehensive protection for your network infrastructure against unauthorized access and evolving cyber threats.',
      features: ['Firewall management', 'Intrusion detection', 'VPN solutions', 'Network monitoring'],
      color: '#E8F1FB'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'Data Protection',
      description: 'Advanced encryption and security measures to safeguard your sensitive business data and customer information.',
      features: ['Data encryption', 'Backup solutions', 'Access control', 'Data loss prevention'],
      color: '#EAF4FF'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: 'Threat Detection',
      description: 'Real-time monitoring and advanced threat detection systems to identify and neutralise potential security breaches.',
      features: ['AI-powered detection', 'Behavioural analysis', 'Malware protection', '24/7 monitoring'],
      color: '#E8F1FB'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure and services to protect your cloud-based operations and applications at every layer.',
      features: ['Cloud migration', 'Multi-cloud security', 'Container security', 'Identity management'],
      color: '#EAF4FF'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Assessment', description: 'Comprehensive security audit to identify vulnerabilities and risk areas across your current infrastructure.', icon: '' },
    { step: '02', title: 'Strategy', description: 'Develop a customised security strategy tailored to your business needs and compliance requirements.', icon: '' },
    { step: '03', title: 'Implementation', description: 'Deploy advanced security solutions with minimal disruption to your day-to-day business operations.', icon: '' },
    { step: '04', title: 'Monitoring', description: 'Continuous 24/7 monitoring and proactive threat management to ensure ongoing, comprehensive protection.', icon: '' }
  ];

 const features = [
  {
    icon: ShieldAlert,
    title: 'Advanced Threat Detection',
    description:
      'Leverages intelligent detection mechanisms to identify and respond to potential threats in real time, minimizing risk exposure.',
  },
  {
    icon: Activity,
    title: 'Incident Response & Mitigation',
    description:
      'Structured incident response processes enable rapid containment, investigation, and remediation of security events.',
  },
  {
    icon: Globe,
    title: 'Distributed Security Coverage',
    description:
      'Ensures consistent protection across geographically distributed environments, including cloud and hybrid infrastructures.',
  },
  {
    icon: Lock,
    title: 'Data Protection & Integrity',
    description:
      'Implements strong encryption, secure backup strategies, and data integrity controls to safeguard critical information.',
  },
  {
    icon: BarChart3,
    title: 'Security Analytics & Insights',
    description:
      'Provides actionable insights through advanced analytics and centralized reporting for improved visibility and decision-making.',
  },
  {
    icon: Settings,
    title: 'Tailored Security Architecture',
    description:
      'Designs customized security frameworks aligned with specific business requirements and evolving threat landscapes.',
  },
];
  const stats = [
    { icon: '↑', num: '99.9%', label: 'Uptime guarantee' },
    { icon: '⏱', num: '24/7', label: 'Security monitoring' },
    { icon: '★', num: 'Experts', label: 'in Cybersecurity' }
  ];

  return (
    <div className="cs-root">

      {/* ══════════════════════════════════
          HERO  (dark blue — brand anchor)
      ══════════════════════════════════ */}
      <section className="cs-hero" ref={heroRef}>
        {/* Background mesh blobs */}
        <div className="cs-hero-blob cs-hero-blob-1" />
        <div className="cs-hero-blob cs-hero-blob-2" />

        {/* Two-column hero layout */}
        <div className="cs-hero-layout">

          {/* LEFT — text content */}
          <div className="cs-hero-content">
            {/* Badge */}
            <div className="cs-badge cs-hero-badge-animate">
              <span className="cs-badge-dot cs-pulse" />
              <span>CYBERSECURITY SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h1 className="cs-hero-heading cs-hero-text-animate" style={{ animationDelay: '0.1s' }}>
              Secure your digital{' '}
              <em className="cs-hero-em">future</em>
            </h1>

            {/* Sub */}
            <p className="cs-hero-sub cs-hero-text-animate" style={{ animationDelay: '0.2s' }}>
              Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure complete data security with 24/7 monitoring and expert support.
            </p>

            {/* Buttons */}
            <div className="cs-hero-btns cs-hero-text-animate" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="cs-btn-primary">Contact Us</Link>
              <Link to="/appointment" className="cs-btn-ghost">▶ &nbsp;Schedule a meeting</Link>
            </div>

            {/* Protected pill */}
            <div className="cs-badge cs-badge-sm cs-hero-text-animate" style={{ animationDelay: '0.4s' }}>
              <span className="cs-badge-dot" />
              <span>System protected &amp; monitored 24/7</span>
            </div>

            {/* Stats row */}
            <div className="cs-stats-row cs-hero-text-animate" style={{ animationDelay: '0.5s' }}>
              {stats.map((s, i) => (
                <div key={i} className="cs-stat">
                  <span className="cs-stat-icon">{s.icon}</span>
                  <span className="cs-stat-num">{s.num}</span>
                  <span className="cs-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — hero image */}
          <div className="cs-hero-image-col cs-hero-text-animate" style={{ animationDelay: '0.25s' }}>
            <div className="cs-hero-image-frame">
              {/* Glow ring behind image */}
              <div className="cs-hero-image-glow" />
              <img
                src={herobg}
                alt="Cybersecurity professional at work"
                className="cs-hero-img"
              />
              {/* Floating badge on image */}
              <div className="cs-hero-img-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Enterprise-grade protection</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
          TRUST BAR
      ══════════════════════════════════ */}
      <div className="cs-trust-bar">
     {[
         'Zero Trust Security Model',
          'End-to-End Encryption',
           '24/7 Threat Monitoring',
           'Secure Access Control (IAM)',
           'Vulnerability Assessment Ready'
  ].map((t, i) => (
    <span key={i} className="cs-trust-item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {t}
    </span>
  ))}
  </div>

      {/* ══════════════════════════════════
          SERVICES  (light gray bg)
      ══════════════════════════════════ */}
      <section className="cs-section cs-section-gray">
        <SectionHeader
          eyebrow="OUR SOLUTIONS"
          title="Comprehensive security services"
          subtitle="Protect your business with advanced cybersecurity solutions designed to defend against modern threats and ensure business continuity."
        />
        <div className="cs-services-grid">
          {services.map((svc, i) => (
            <RevealCard key={i} className="cs-service-card" delay={i * 80}>
              <div className="cs-service-icon-wrap" style={{ background: svc.color }}>
                {svc.icon}
              </div>
              <h3 className="cs-card-title">{svc.title}</h3>
              <p className="cs-card-desc">{svc.description}</p>
              <div className="cs-features-grid">
                {svc.features.map((f, j) => (
                  <span key={j} className="cs-feature-chip">
                    <span className="cs-check">✓</span>
                    {f}
                  </span>
                ))}
              </div>
            </RevealCard>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          PROCESS  (white bg)
      ══════════════════════════════════ */}
      <section className="cs-section cs-section-white">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="How we secure your business"
          subtitle="A four-step approach that transforms vulnerabilities into strength — systematically and with minimal disruption."
        />
        <div className="cs-process-grid">
          {processSteps.map((ps, i) => (
            <RevealCard key={i} className="cs-process-card" delay={i * 100}>
              {i < processSteps.length - 1 && <span className="cs-connector-line" />}
              <div className="cs-step-num">{ps.step}</div>
              <div className="cs-step-emoji">{ps.icon}</div>
              <h3 className="cs-card-title cs-card-title-sm">{ps.title}</h3>
              <p className="cs-card-desc cs-card-desc-xs">{ps.description}</p>
            </RevealCard>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          METHODOLOGY TABS  (light gray bg)
      ══════════════════════════════════ */}
      <section className="cs-section cs-section-gray">
        <SectionHeader
          eyebrow="DETAILED APPROACH"
          title="Our security methodology"
        />
        <div className="cs-tabs-layout">
          {/* Tab buttons */}
          <div className="cs-tab-list">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`cs-tab-btn${activeTab === i ? ' cs-tab-btn-active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <span className="cs-tab-icon">{tab.icon}</span>
                <span className="cs-tab-label">{tab.title}</span>
                {activeTab === i && <span className="cs-tab-active-bar" />}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="cs-tab-content-panel">
            <div className="cs-tab-panel-inner" key={activeTab}>
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="cs-tab-image"
              />
              <div className="cs-tab-panel-eyebrow">
                <span className="cs-tab-panel-icon">{tabs[activeTab].icon}</span>
                <span>{tabs[activeTab].title}</span>
              </div>
              <p className="cs-tab-panel-body">{tabs[activeTab].content}</p>
              <div className="cs-tab-highlights">
                {tabs[activeTab].highlights.map((h, i) => (
                  <span key={i} className="cs-highlight-chip">
                    <span className="cs-highlight-dot" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Bright2 />
      {/* ══════════════════════════════════
          FEATURES  (white bg)
      ══════════════════════════════════ */}
      <section className="cs-section cs-section-white">
        <SectionHeader
          eyebrow="KEY FEATURES"
          title="Advanced security features"
          subtitle="Every layer of your digital environment protected by intelligent, adaptive security tools."
        />
        <div className="cs-carousel-wrapper">
          <button className="cs-carousel-btn cs-carousel-btn-prev" onClick={prevFeature}>
            <ChevronLeft size={24} />
          </button>
          <div className="cs-features-grid-full cs-carousel-grid">
            {features.slice(featureIndex, featureIndex + itemsPerSlide).map((feat, i) => (
              <RevealCard key={i} className="cs-feat-card" delay={i * 80}>
                <div className="cs-feat-icon">
                  <feat.icon size={32} color="#185FA5" />
                </div>
                <h3 className="cs-card-title cs-card-title-sm">{feat.title}</h3>
                <p className="cs-card-desc cs-card-desc-xs">{feat.description}</p>
              </RevealCard>
            ))}
          </div>
          <button className="cs-carousel-btn cs-carousel-btn-next" onClick={nextFeature}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="cs-carousel-dots">
          {Array.from({ length: Math.ceil(features.length / itemsPerSlide) }).map((_, i) => (
            <button
              key={i}
              className={`cs-carousel-dot${i === Math.floor(featureIndex / itemsPerSlide) ? ' cs-carousel-dot-active' : ''}`}
              onClick={() => setFeatureIndex(i * itemsPerSlide)}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          CONTACT CTA  (dark blue gradient)
      ══════════════════════════════════ */}
      <section className="cs-contact-section">
        <div className="cs-contact-blob" />
        <div className="cs-contact-grid">
          {/* Left: contact info */}
          <div>
            <div className="cs-badge cs-badge-light">
              <span className="cs-badge-dot cs-pulse" />
              <span>Get in touch</span>
            </div>
            <h2 className="cs-contact-heading">Contact information</h2>
            <p className="cs-contact-sub">
              Reach out to us through any of these channels. We're available to answer your questions 24/7.
            </p>

            <div className="cs-contact-items">
              {[
                {
                  icon: '📞', label: 'CALL US 24/7',
                  lines: ['+91 88200 66999', '+91 74390 04545'],
                  links: ['tel:+918820066999', 'tel:+917439004545']
                },
                { icon: '✉', label: 'EMAIL US', lines: ['info@zenitech.in'], links: ['mailto:info@zenitech.in'] },
              ].map((item, i) => (
                <div key={i} className="cs-contact-item">
                  <div className="cs-contact-icon-box">{item.icon}</div>
                  <div>
                    <p className="cs-contact-item-label">{item.label}</p>
                    {item.lines && item.lines.map((l, j) => (
                      <a key={j} href={item.links[j]} className="cs-contact-item-value">{l}</a>
                    ))}
                    {item.sub && item.sub.map((s, j) => (
                      <div key={j} style={{ marginTop: j > 0 ? '10px' : 0 }}>
                        <span className="cs-contact-city">{s.city}</span>
                        <span className="cs-contact-item-value">{s.addr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="cs-btn-white">Contact us ↗</Link>
          </div>

          {/* Right: card */}
          <div className="cs-contact-card">
            <div className="cs-contact-card-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Cybersecurity</span>
            </div>
            <p className="cs-contact-card-body">
              Protecting your digital world with cutting-edge security solutions. From threat detection to compliance — we've got you covered.
            </p>
            <ul className="cs-contact-card-list">
              {['24/7 security monitoring', 'Advanced threat protection', 'Incident response services', 'Tailored security consulting'].map((item, i) => (
                <li key={i}>
                  <span className="cs-contact-card-dot" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="cs-badge cs-badge-light" style={{ marginTop: '24px' }}>
              <span className="cs-badge-dot cs-pulse" />
              <span>All systems nominal</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STYLES
      ══════════════════════════════════ */}
      <style>{`
        /* ── tokens ── */
        .cs-root {
          --cs-blue-deep:   #042C53;
          --cs-blue-mid:    #185FA5;
          --cs-blue-light:  #378ADD;
          --cs-blue-pale:   #85B7EB;
          --cs-blue-pal2:   #B5D4F4;
          --cs-blue-bg:     #E8F1FB;
          --cs-white:       #ffffff;
          --cs-gray-50:     #F7F9FC;
          --cs-gray-100:    #EEF2F8;
          --cs-gray-200:    #D8E4F0;
          --cs-gray-400:    #8FA7C0;
          --cs-text-main:   #0D1F33;
          --cs-text-body:   #3D5470;
          --cs-text-muted:  #6A85A0;
          --cs-radius-sm:   8px;
          --cs-radius-md:   12px;
          --cs-radius-lg:   16px;
          --cs-radius-xl:   20px;
          --cs-shadow-card: 0 2px 12px rgba(24,95,165,0.07), 0 1px 3px rgba(0,0,0,0.05);
          --cs-shadow-hover: 0 8px 32px rgba(24,95,165,0.14), 0 2px 8px rgba(0,0,0,0.06);
          font-family: 'Satoshi', 'Inter', system-ui, sans-serif;
          color: var(--cs-text-main);
          background: var(--cs-white);
          overflow-x: hidden;
        }

        /* ── scroll reveal ── */
        .cs-reveal-card {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .cs-reveal-card.cs-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── HERO ── */
        .cs-hero {
          position: relative;
          background: linear-gradient(135deg, #042C53 0%, #185FA5 55%, #0C447C 100%);
          color: #fff;
          padding: 100px 48px 72px;
          overflow: hidden;
        }
        .cs-hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .cs-hero-blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #378ADD28 0%, transparent 70%);
          top: -120px; right: -100px;
        }
        .cs-hero-blob-2 {
          width: 360px; height: 360px;
          background: radial-gradient(circle, #185FA522 0%, transparent 70%);
          bottom: -80px; left: -60px;
        }
        .cs-shield-bg { display: none; }

        /* ── hero two-column layout ── */
        .cs-hero-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 56px;
          align-items: center;
          padding-top: 60px;
        }
        .cs-hero-content {
          position: relative;
          min-width: 0;
        }

        /* ── hero image column ── */
        .cs-hero-image-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cs-hero-image-frame {
          position: relative;
          width: 100%;
          max-width: 460px;
        }
        .cs-hero-image-glow {
          position: absolute;
          inset: -24px;
          border-radius: 28px;
          background: radial-gradient(ellipse at center, rgba(55,138,221,0.28) 0%, transparent 70%);
          filter: blur(20px);
          pointer-events: none;
          z-index: 0;
        }
        .cs-hero-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 20px;
          border: 1.5px solid rgba(55,138,221,0.3);
          box-shadow:
            0 24px 60px rgba(4,44,83,0.5),
            0 0 0 1px rgba(55,138,221,0.12),
            inset 0 1px 0 rgba(133,183,235,0.15);
          display: block;
        }
        .cs-hero-img-badge {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(4,44,83,0.82);
          border: 1px solid rgba(55,138,221,0.35);
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 11.5px;
          font-weight: 600;
          color: #B5D4F4;
          letter-spacing: 0.04em;
          white-space: nowrap;
          backdrop-filter: blur(10px);
        }

        /* hero animations */
        .cs-hero-badge-animate { animation: cs-fade-up 0.6s ease forwards; opacity: 0; }
        .cs-hero-text-animate   { animation: cs-fade-up 0.6s ease forwards; opacity: 0; }
        .cs-hero.cs-hero-in .cs-hero-badge-animate,
        .cs-hero.cs-hero-in .cs-hero-text-animate { /* triggered by .cs-hero-in */ }

        @keyframes cs-fade-up {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── badge ── */
        .cs-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(55,138,221,0.15);
          border: 0.5px solid rgba(55,138,221,0.35);
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 20px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--cs-blue-pal2);
        }
        .cs-badge-sm { font-size: 11px; padding: 5px 12px; }
        .cs-badge-light {
          background: rgba(55,138,221,0.18);
          border-color: rgba(55,138,221,0.3);
          color: var(--cs-blue-pal2);
        }
        .cs-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--cs-blue-pale);
          flex-shrink: 0;
        }
        .cs-pulse { animation: cs-pulse 2s ease infinite; }
        @keyframes cs-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }

        /* ── hero heading ── */
        .cs-hero-heading {
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 600;
          line-height: 1.12;
          color: #fff;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }
        .cs-hero-em {
          font-style: normal;
          color: var(--cs-blue-pale);
          position: relative;
        }
        .cs-hero-em::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--cs-blue-pale), transparent);
          border-radius: 2px;
        }
        .cs-hero-sub {
          font-size: 15.5px;
          color: var(--cs-blue-pal2);
          line-height: 1.75;
          max-width: 520px;
          margin-bottom: 32px;
        }
        .cs-hero-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        /* ── buttons ── */
        .cs-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--cs-blue-light);
          color: #fff;
          padding: 12px 24px;
          border-radius: var(--cs-radius-md);
          font-size: 14px; font-weight: 600;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(55,138,221,0.35);
        }
        .cs-btn-primary:hover {
          background: #2A6FB8;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(55,138,221,0.45);
        }
        .cs-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: var(--cs-blue-pal2);
          padding: 12px 24px;
          border-radius: var(--cs-radius-md);
          font-size: 14px; font-weight: 500;
          border: 1px solid rgba(55,138,221,0.35);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .cs-btn-ghost:hover {
          background: rgba(55,138,221,0.12);
          border-color: rgba(55,138,221,0.55);
        }
        .cs-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff;
          color: var(--cs-blue-mid);
          padding: 12px 24px;
          border-radius: var(--cs-radius-md);
          font-size: 14px; font-weight: 600;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }
        .cs-btn-white:hover {
          background: var(--cs-blue-bg);
          transform: translateY(-1px);
        }

        /* ── stats row ── */
        .cs-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
          border-top: 1px solid rgba(55,138,221,0.2);
          padding-top: 32px;
          margin-top: 32px;
        }
        .cs-stat { text-align: center; padding: 8px 4px; }
        .cs-stat-icon { display: block; font-size: 18px; color: var(--cs-blue-light); margin-bottom: 6px; }
        .cs-stat-num  { display: block; font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 4px; letter-spacing: -0.02em; }
        .cs-stat-label{ display: block; font-size: 11px; color: var(--cs-blue-pale); letter-spacing: 0.04em; }

        /* ── trust bar ── */
        .cs-trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px 24px;
          padding: 14px 32px;
          background: var(--cs-blue-bg);
          border-bottom: 1px solid var(--cs-gray-200);
        }
        .cs-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          color: var(--cs-blue-mid);
          letter-spacing: 0.03em;
        }

        /* ── sections ── */
        .cs-section {
          padding: 80px 48px;
        }
        .cs-section-white { background: var(--cs-white); }
        .cs-section-gray  { background: var(--cs-gray-50); }

        /* ── section header ── */
        .cs-section-header { text-align: center; margin-bottom: 52px; }
        .cs-eyebrow-row {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-bottom: 14px;
        }
        .cs-eyebrow-line {
          display: block; width: 32px; height: 2px;
          background: var(--cs-blue-light);
          border-radius: 2px;
        }
        .cs-eyebrow {
          font-size: 11px; font-weight: 700;
          color: var(--cs-blue-light);
          letter-spacing: 0.14em;
        }
        .cs-section-title {
          font-size: clamp(22px, 3.5vw, 36px);
          font-weight: 700;
          color: var(--cs-text-main);
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
        }
        .cs-section-sub {
          font-size: 15px;
          color: var(--cs-text-body);
          line-height: 1.7;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── services grid ── */
        .cs-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }
        .cs-service-card {
          background: var(--cs-white);
          border: 1px solid var(--cs-gray-200);
          border-radius: var(--cs-radius-lg);
          padding: 26px;
          box-shadow: var(--cs-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.22s;
          cursor: default;
        }
        .cs-service-card:hover {
          border-color: var(--cs-blue-light);
          box-shadow: var(--cs-shadow-hover);
          transform: translateY(-3px);
        }
        .cs-service-icon-wrap {
          width: 50px; height: 50px;
          border-radius: var(--cs-radius-md);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          transition: transform 0.2s;
        }
        .cs-service-card:hover .cs-service-icon-wrap { transform: scale(1.08); }

        /* ── card typography ── */
        .cs-card-title {
          font-size: 16px; font-weight: 700;
          color: var(--cs-text-main);
          margin-bottom: 8px;
        }
        .cs-card-title-sm { font-size: 14.5px; }
        .cs-card-desc {
          font-size: 13.5px;
          color: var(--cs-text-body);
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .cs-card-desc-xs { font-size: 12.5px; margin-bottom: 0; }

        /* ── feature chips ── */
        .cs-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .cs-feature-chip {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500;
          color: var(--cs-text-body);
          background: var(--cs-gray-50);
          border: 1px solid var(--cs-gray-200);
          border-radius: 6px;
          padding: 5px 8px;
        }
        .cs-check {
          display: flex; align-items: center; justify-content: center;
          width: 16px; height: 16px;
          background: var(--cs-blue-bg);
          border-radius: 50%;
          font-size: 9px;
          color: var(--cs-blue-mid);
          font-weight: 700;
          flex-shrink: 0;
        }

        /* ── process ── */
        .cs-process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          position: relative;
        }
        .cs-process-card {
          position: relative;
          background: var(--cs-white);
          border: 1px solid var(--cs-gray-200);
          border-radius: var(--cs-radius-lg);
          padding: 28px 22px;
          text-align: center;
          box-shadow: var(--cs-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.22s;
          overflow: visible;
        }
        .cs-process-card:hover {
          border-color: var(--cs-blue-light);
          box-shadow: var(--cs-shadow-hover);
          transform: translateY(-3px);
        }
        .cs-step-num {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, var(--cs-blue-deep), var(--cs-blue-light));
          color: #fff;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 800;
          margin: 0 auto 12px;
          box-shadow: 0 4px 14px rgba(24,95,165,0.3);
          letter-spacing: 0.02em;
        }
        .cs-step-emoji {
          font-size: 24px;
          margin-bottom: 12px;
          display: block;
        }
        .cs-connector-line {
          display: none; /* hidden on small screens, shown on large */
        }

        /* ── tabs ── */
        .cs-tabs-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          align-items: start;
        }
        .cs-tab-list {
          display: flex; flex-direction: column; gap: 8px;
        }
        .cs-tab-btn {
          position: relative;
          display: flex; align-items: center; gap: 12px;
          background: var(--cs-white);
          border: 1px solid var(--cs-gray-200);
          border-radius: var(--cs-radius-md);
          padding: 14px 18px;
          font-size: 14px; font-weight: 600;
          color: var(--cs-text-body);
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .cs-tab-btn:hover:not(.cs-tab-btn-active) {
          border-color: var(--cs-blue-light);
          color: var(--cs-blue-mid);
          background: var(--cs-blue-bg);
        }
        .cs-tab-btn-active {
          background: linear-gradient(135deg, var(--cs-blue-deep), var(--cs-blue-mid));
          border-color: var(--cs-blue-mid);
          color: #fff;
          box-shadow: 0 4px 16px rgba(24,95,165,0.25);
        }
        .cs-tab-icon { font-size: 18px; flex-shrink: 0; }
        .cs-tab-label { flex: 1; }
        .cs-tab-active-bar {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--cs-blue-pale);
          border-radius: 0 2px 2px 0;
        }

        /* ── tab content panel ── */
        .cs-tab-content-panel {
          background: var(--cs-white);
          border: 1px solid var(--cs-gray-200);
          border-radius: var(--cs-radius-lg);
          padding: 0;
          box-shadow: var(--cs-shadow-card);
          overflow: hidden;
        }
        .cs-tab-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }
        .cs-tab-panel-inner {
          animation: cs-fade-in 0.3s ease;
        }
        @keyframes cs-fade-in {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cs-tab-panel-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 700;
          color: var(--cs-blue-mid);
          letter-spacing: 0.04em;
          margin: 20px 24px 10px;
        }
        .cs-tab-panel-icon { font-size: 20px; }
        .cs-tab-panel-body {
          font-size: 14px;
          color: var(--cs-text-body);
          line-height: 1.75;
          margin: 0 24px 16px;
        }
        .cs-tab-highlights {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin: 0 24px 22px;
        }
        .cs-highlight-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          color: var(--cs-blue-mid);
          background: var(--cs-blue-bg);
          border: 1px solid var(--cs-gray-200);
          border-radius: 100px;
          padding: 5px 12px;
        }
        .cs-highlight-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cs-blue-light);
          flex-shrink: 0;
        }

        /* ── carousel ── */
        .cs-carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .cs-carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--cs-white);
          border: 1.5px solid var(--cs-gray-200);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          color: #185FA5;
        }
        .cs-carousel-btn:hover {
          background: #185FA5;
          color: #fff;
          border-color: #185FA5;
          transform: scale(1.05);
        }
        .cs-carousel-grid {
          flex: 1;
          overflow: hidden;
        }
        .cs-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        .cs-carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cs-gray-200);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .cs-carousel-dot:hover {
          background: #4a9eff;
        }
        .cs-carousel-dot.cs-carousel-dot-active {
          background: #185FA5;
          width: 24px;
          border-radius: 4px;
        }

        /* ── features full ── */
        .cs-features-grid-full {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .cs-feat-card {
          background: var(--cs-white);
          border: 1px solid var(--cs-gray-200);
          border-radius: var(--cs-radius-lg);
          padding: 24px;
          box-shadow: var(--cs-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.22s;
          position: relative;
          overflow: hidden;
        }
        .cs-feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--cs-blue-mid), var(--cs-blue-light));
          opacity: 0;
          transition: opacity 0.25s;
        }
        .cs-feat-card:hover {
          border-color: var(--cs-blue-light);
          box-shadow: var(--cs-shadow-hover);
          transform: translateY(-3px);
        }
        .cs-feat-card:hover::before { opacity: 1; }
        .cs-feat-icon {
          width: 44px; height: 44px;
          background: var(--cs-blue-bg);
          border-radius: var(--cs-radius-md);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          margin-bottom: 14px;
          transition: transform 0.2s;
        }
        .cs-feat-card:hover .cs-feat-icon { transform: scale(1.1); }

        /* ── contact section ── */
        .cs-contact-section {
          position: relative;
          background: linear-gradient(135deg, #042C53 0%, #0C447C 65%, #185FA5 100%);
          color: #fff;
          padding: 80px 48px;
          overflow: hidden;
        }
        .cs-contact-blob {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(55,138,221,0.12) 0%, transparent 70%);
          top: -200px; right: -150px;
          pointer-events: none;
        }
        .cs-contact-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 48px;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }
        .cs-contact-heading {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .cs-contact-sub {
          font-size: 14.5px;
          color: var(--cs-blue-pal2);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .cs-contact-items {
          display: flex; flex-direction: column; gap: 20px;
          margin-bottom: 32px;
        }
        .cs-contact-item {
          display: flex; gap: 14px; align-items: flex-start;
        }
        .cs-contact-icon-box {
          width: 40px; height: 40px;
          background: rgba(55,138,221,0.18);
          border: 1px solid rgba(55,138,221,0.3);
          border-radius: var(--cs-radius-md);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }
        .cs-contact-item-label {
          font-size: 10.5px; font-weight: 700;
          color: var(--cs-blue-pale);
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }
        .cs-contact-item-value {
          display: block;
          font-size: 13.5px;
          color: var(--cs-blue-pal2);
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.2s;
          cursor: pointer;
        }
        .cs-contact-item-value:hover {
          color: #185FA5;
          text-decoration: underline;
        }
        .cs-contact-city {
          display: block;
          font-size: 13px; font-weight: 600;
          color: var(--cs-blue-pale);
          margin-bottom: 2px;
        }

        /* ── contact card ── */
        .cs-contact-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(55,138,221,0.28);
          border-radius: var(--cs-radius-xl);
          padding: 28px;
          backdrop-filter: blur(8px);
        }
        .cs-contact-card-badge {
          display: flex; align-items: center; gap: 10px;
          font-size: 16px; font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        .cs-contact-card-body {
          font-size: 14px;
          color: var(--cs-blue-pal2);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .cs-contact-card-list {
          list-style: none;
          display: flex; flex-direction: column; gap: 10px;
        }
        .cs-contact-card-list li {
          display: flex; align-items: center; gap: 10px;
          font-size: 13.5px;
          color: var(--cs-blue-pale);
        }
        .cs-contact-card-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cs-blue-light);
          flex-shrink: 0;
        }

        /* ══ RESPONSIVE ════════════════════ */
        @media (max-width: 900px) {
          .cs-hero { padding: 80px 28px 56px; }
          .cs-hero-layout { grid-template-columns: 1fr; gap: 36px; padding-top: 40px; }
          .cs-hero-image-col { display: none; }
          .cs-section { padding: 60px 28px; }
          .cs-contact-section { padding: 60px 28px; }
          .cs-tabs-layout { grid-template-columns: 1fr; }
          .cs-contact-grid { grid-template-columns: 1fr; }
          .cs-contact-card { display: none; }
        }
        @media (max-width: 600px) {
          .cs-hero { padding: 70px 20px 48px; }
          .cs-section { padding: 52px 20px; }
          .cs-contact-section { padding: 52px 20px; }
          .cs-stats-row { grid-template-columns: repeat(2, 1fr); gap: 0; }
          .cs-services-grid { grid-template-columns: 1fr; }
          .cs-trust-bar { gap: 6px 16px; }
        }
      `}</style>
    </div>
  );
};

export default Cybersecurity;