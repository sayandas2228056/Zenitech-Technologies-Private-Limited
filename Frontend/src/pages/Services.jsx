import React, { useState, useEffect, useRef } from 'react';
import { Cloud, Shield, Check, ArrowRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Bright1 from '../components/Common/Bright1';
import ServiceHeader from '../components/Service/ServiceHeader';

/* ══════════════════════════════════════════════════════════════
   DATA  — edit content here without touching JSX or CSS
══════════════════════════════════════════════════════════════ */
const services = [
  {
    title: 'Cybersecurity',
    category: 'Security',
    icon: Shield,
    fullDesc:
      'Comprehensive cybersecurity solutions designed to protect digital assets, mitigate evolving threats, and ensure regulatory compliance. Leveraging a layered security approach, these services strengthen resilience across networks, applications, and user access points.',
    
    features: [
      'Threat Detection & Incident Response',
      'Vulnerability Assessment & Penetration Testing',
      'Compliance & Risk Management',
      'Identity & Access Management (IAM)',
      'Network & Endpoint Security',
      'Security Awareness & Training'
    ],

  },

  {
    title: 'Cloud Computing',
    category: 'Cloud',
    icon: Cloud,
    fullDesc:
      'End-to-end cloud solutions focused on scalability, performance, and cost optimization. Services include cloud strategy, seamless migration, and managed infrastructure across leading cloud platforms, enabling businesses to operate with agility and efficiency.',
    
    features: [
      'Cloud Strategy & Migration',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Cloud Architecture & Deployment',
      'Monitoring & Managed Services',
      'Cost Optimization & Resource Management'
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Risk Assessment',
    description:
      'Assess business objectives, existing infrastructure, and security posture to identify risks, gaps, and compliance requirements.',
  },
  {
    step: 2,
    title: 'Architecture & Solution Design',
    description:
      'Design secure and scalable cloud architectures aligned with best practices, incorporating Zero Trust principles and defense-in-depth strategies.',
  },
  {
    step: 3,
    title: 'Strategy & Roadmap Planning',
    description:
      'Define a clear implementation roadmap covering cloud migration, security integration, and operational workflows.',
  },
  {
    step: 4,
    title: 'Secure Infrastructure Setup',
    description:
      'Provision cloud infrastructure with built-in security controls, including network segmentation, identity policies, and access management.',
  },
  {
    step: 5,
    title: 'Implementation & Integration',
    description:
      'Deploy applications, security tools, and cloud services using automation and DevSecOps practices to ensure consistency and efficiency.',
  },
  {
    step: 6,
    title: 'Testing, Validation & Compliance',
    description:
      'Conduct rigorous testing including vulnerability assessments, penetration testing, and compliance validation against industry standards.',
  },
  {
    step: 7,
    title: 'Deployment & Knowledge Transfer',
    description:
      'Execute secure deployment with minimal downtime and provide training to ensure smooth adoption and operational readiness.',
  },
  {
    step: 8,
    title: 'Monitoring, Optimization & Support',
    description:
      'Continuously monitor systems, respond to threats, optimize performance, and provide ongoing support for sustained reliability and security.',
  },
];
const caseStudies = [
  {
    title: 'Multi-Cloud Infrastructure Optimization',
    client: 'E-commerce Enterprise',
    challenge: 'High infrastructure costs and inconsistent performance across cloud environments.',
    solution: 'Designed and implemented a multi-cloud architecture using AWS and Azure with auto-scaling and load balancing.',
    results: ['45% reduction in cloud infrastructure costs', '99.99% application uptime achieved', 'Improved application response time by 35%'],
  },
  {
    title: 'Advanced Threat Detection & Prevention',
    client: 'FinTech Company',
    challenge: 'Frequent phishing attacks and vulnerability to advanced persistent threats (APT).',
    solution: 'Deployed SIEM tools, endpoint protection, and AI-based threat detection systems.',
    results: ['90% reduction in security incidents', 'Real-time threat monitoring and alerts', 'Strengthened overall security posture'],
  },
  {
    title: 'Secure Cloud Migration',
    client: 'Healthcare Organization',
    challenge: 'Migrating sensitive patient data to the cloud while maintaining compliance (HIPAA/GDPR).',
    solution: 'Executed secure cloud migration with encryption, identity access management (IAM), and compliance frameworks.',
    results: ['100% compliance with healthcare regulations', 'Zero data loss during migration', 'Enhanced data accessibility with high security'],
  },
  {
    title: 'Disaster Recovery & Business Continuity',
    client: 'Banking Institution',
    challenge: 'Lack of a robust disaster recovery system leading to downtime risks.',
    solution: 'Implemented automated backup, disaster recovery planning, and failover systems on cloud infrastructure.',
    results: ['Recovery Time Objective (RTO) reduced to under 15 minutes', 'Ensured 24/7 business continuity', 'Minimized financial losses due to downtime'],
  },
  {
    title: 'Zero Trust Security Implementation',
    client: 'IT Services Company',
    challenge: 'Unsecured remote access and increasing insider threats.',
    solution: 'Adopted Zero Trust architecture with strict identity verification and network segmentation.',
    results: ['Eliminated unauthorized access incidents', 'Improved network visibility and control', 'Enhanced remote workforce security'],
  },
  {
    title: 'Cloud Cost Governance & Optimization',
    client: 'Startup SaaS Company',
    challenge: 'Uncontrolled cloud spending and inefficient resource usage.',
    solution: 'Implemented cost monitoring tools, rightsizing, and reserved instances strategy.',
    results: ['50% reduction in monthly cloud bills', 'Optimized resource utilization', 'Better financial forecasting for cloud expenses'],
  },
];

const whyUs = [
  {
    title: 'Security-First Architecture',
    desc: 'Solutions are designed with security embedded at every layer, ensuring protection across infrastructure, applications, and user access.',
  },
  {
    title: 'Cloud-Native Expertise',
    desc: 'Built on modern cloud principles to deliver scalable, resilient, and high-performance environments.',
  },
  {
    title: 'Zero Trust Implementation',
    desc: 'Adopts Zero Trust security models to enforce strict identity verification and minimize attack surfaces.',
  },
  {
    title: 'DevSecOps Integration',
    desc: 'Security is integrated throughout the development lifecycle, enabling faster and safer deployments.',
  },
  {
    title: 'Automation & Infrastructure as Code',
    desc: 'Leverages automation and IaC to ensure consistent, efficient, and repeatable infrastructure management.',
  },
  {
    title: 'Real-Time Monitoring & Response',
    desc: 'Continuous monitoring and proactive threat detection ensure high availability and rapid incident response.',
  },
  {
    title: 'Scalable & Cost-Optimized Solutions',
    desc: 'Architectures are designed to scale seamlessly while optimizing performance and operational costs.',
  },
  {
    title: 'Compliance-Oriented Approach',
    desc: 'Solutions are aligned with industry standards and best practices to support regulatory and security compliance.',
  },
  {
    title: 'Agile & Transparent Execution',
    desc: 'Iterative delivery with clear communication ensures adaptability and alignment with evolving business needs.',
  },
  {
    title: 'End-to-End Ownership',
    desc: 'From design to deployment and ongoing support, complete responsibility is maintained across the entire lifecycle.',
  },
];

const faqs = [
  { question: 'What makes ZENITECH TECHNOLOGIES PRIVATE LIMITED different from other IT service providers?', answer: 'We combine deep technical expertise with business acumen, offering end-to-end solutions tailored to your specific needs. Our agile approach and commitment to continuous support set us apart.' },
  { question: 'How do you ensure the security of our data?', answer: 'We implement industry-leading security measures, including encryption, access controls, and regular security audits. Our team stays updated with the latest security threats and best practices.' },
  { question: 'What is your typical project timeline?', answer: 'Project timelines vary based on scope and complexity. We provide detailed timelines during the planning phase and maintain transparent communication throughout the project.' },
  { question: 'Do you offer 24/7 support?', answer: 'Yes, we provide round-the-clock support for critical systems and offer different support tiers to meet your specific needs and budget.' },
];



/* ══════════════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════════════ */

/** Fires once when element enters viewport — returns [ref, isVisible] */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

/* ══════════════════════════════════════════════════════════════
   SMALL REUSABLE COMPONENTS
══════════════════════════════════════════════════════════════ */

/** Pill eyebrow label with orange dot */
const SectionLabel = ({ text }) => (
  <div className="sv-eyebrow-wrap">
    <span className="sv-eyebrow-pill">
      <span className="sv-eyebrow-dot" />
      {text}
    </span>
  </div>
);

/** Section heading */
const SectionHead = ({ children, center = true }) => (
  <h2 className={`sv-section-title${center ? '' : ' sv-section-title-left'}`}>{children}</h2>
);

/** Section subtitle */
const SectionSub = ({ children }) => (
  <p className="sv-section-sub">{children}</p>
);

/** Check bullet */
const CheckBullet = ({ text }) => (
  <div className="sv-check-row">
    <span className="sv-check-icon"><Check size={9} strokeWidth={3} color="#7c3aed" /></span>
    <span>{text}</span>
  </div>
);

/* ══════════════════════════════════════════════════════════════
   SERVICE CARD
══════════════════════════════════════════════════════════════ */

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className={`sv-service-card${hovered ? ' sv-service-card-hov' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div className={`sv-card-bar${hovered ? ' sv-card-bar-hov' : ''}`} />

      {/* Header */}
      <div className="sv-card-header">
        <div className={`sv-card-icon${hovered ? ' sv-card-icon-hov' : ''}`}>
          <Icon size={22} color={hovered ? '#fff' : '#7c3aed'} />
        </div>
        <div>
          <span className="sv-category-chip">{service.category}</span>
          <h3 className="sv-card-title">{service.title}</h3>
        </div>
      </div>

      {/* Body */}
      <p className="sv-card-desc">{service.fullDesc}</p>

      {/* Features */}
      <p className="sv-label-tiny">Key Features</p>
      <div className="sv-feat-list">
        {service.features.slice(0, 3).map((f, i) => <CheckBullet key={i} text={f} />)}
      </div>

      {/* CTA */}
      <Link to="/contact" className={`sv-card-cta${hovered ? ' sv-card-cta-hov' : ''}`}>
        Contact Us <ArrowRight size={15} />
      </Link>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════ */

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [processIndex, setProcessIndex] = useState(0);
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
  const [whyUsIndex, setWhyUsIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevProcess = () => setProcessIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextProcess = () => setProcessIndex((prev) => (prev >= processSteps.length - itemsPerSlide ? 0 : prev + 1));

  const prevCaseStudy = () => setCaseStudyIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextCaseStudy = () => setCaseStudyIndex((prev) => (prev >= caseStudies.length - itemsPerSlide ? 0 : prev + 1));

  const prevWhyUs = () => setWhyUsIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextWhyUs = () => setWhyUsIndex((prev) => (prev >= whyUs.length - itemsPerSlide ? 0 : prev + 1));

  return (
    <div className="sv-root">

      {/* ══ HERO + STATS ════════════════════════════════════════ */}
      <ServiceHeader />

      {/* ══ SERVICES ═══════════════════════════════════════════ */}
      <section className="sv-section sv-section-faded">
        <div className="sv-container">
          <div className="sv-section-header">
            <SectionLabel text="Our Expertise" />
            <SectionHead>Services &amp; Solutions</SectionHead>
            <SectionSub>Empowering businesses with cutting-edge digital services — Cybersecurity & Cloud Computing.</SectionSub>
          </div>
          <div className="sv-services-grid">
            {services.map((s, i) => <ServiceCard key={i} service={s} />)}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════ */}
      <section className="sv-section sv-section-white sv-border-y">
        <div className="sv-container">
          <div className="sv-section-header">
            <SectionLabel text="Our Process" />
            <SectionHead>How We Work</SectionHead>
            <SectionSub>Our proven methodology ensures successful delivery of technology solutions that drive real business value.</SectionSub>
          </div>
          <div className="sv-carousel-wrapper">
            <button className="sv-carousel-btn sv-carousel-btn-prev" onClick={prevProcess}>
              <ChevronLeft size={24} />
            </button>
            <div className="sv-process-grid sv-carousel-grid">
              {processSteps.slice(processIndex, processIndex + itemsPerSlide).map((step, i) => (
                <div key={i} className="sv-process-card">
                  <div className="sv-step-num">
                    <span>{step.step}</span>
                  </div>
                  <h3 className="sv-process-title">{step.title}</h3>
                  <p className="sv-process-desc">{step.description}</p>
                </div>
              ))}
            </div>
            <button className="sv-carousel-btn sv-carousel-btn-next" onClick={nextProcess}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="sv-carousel-dots">
            {Array.from({ length: Math.ceil(processSteps.length / itemsPerSlide) }).map((_, i) => (
              <button
                key={i}
                className={`sv-carousel-dot${i === Math.floor(processIndex / itemsPerSlide) ? ' sv-carousel-dot-active' : ''}`}
                onClick={() => setProcessIndex(i * itemsPerSlide)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDIES ═══════════════════════════════════════ */}
      <section className="sv-section sv-section-purple-faded">
        <div className="sv-container">
          <div className="sv-section-header">
            <SectionLabel text="Success Stories" />
            <SectionHead>Case Studies</SectionHead>
            <SectionSub>Discover how we've helped organizations transform their business through technology.</SectionSub>
          </div>
          <div className="sv-carousel-wrapper">
            <button className="sv-carousel-btn sv-carousel-btn-prev" onClick={prevCaseStudy}>
              <ChevronLeft size={24} />
            </button>
            <div className="sv-case-grid sv-carousel-grid">
              {caseStudies.slice(caseStudyIndex, caseStudyIndex + itemsPerSlide).map((study, i) => (
                <div key={i} className="sv-case-card">

                  <div className="sv-case-header">
                    <h3 className="sv-case-title">{study.title}</h3>
                    <span className="sv-case-chip">Case Study</span>
                  </div>

                  <p className="sv-case-client">{study.client}</p>

                  {[['Challenge', study.challenge], ['Solution', study.solution]].map(([lbl, txt]) => (
                    <div key={lbl} className="sv-case-block">
                      <p className="sv-label-tiny">{lbl}</p>
                      <p className="sv-case-text">{txt}</p>
                    </div>
                  ))}

                  <p className="sv-label-tiny sv-mt">Results</p>
                  {study.results.map((r, j) => <CheckBullet key={j} text={r} />)}

                </div>
              ))}
            </div>
            <button className="sv-carousel-btn sv-carousel-btn-next" onClick={nextCaseStudy}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="sv-carousel-dots">
            {Array.from({ length: Math.ceil(caseStudies.length / itemsPerSlide) }).map((_, i) => (
              <button
                key={i}
                className={`sv-carousel-dot${i === Math.floor(caseStudyIndex / itemsPerSlide) ? ' sv-carousel-dot-active' : ''}`}
                onClick={() => setCaseStudyIndex(i * itemsPerSlide)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ BRIGHT1 BANNER ═════════════════════════════════════ */}
      <Bright1 />

      {/* ══ WHY US ═════════════════════════════════════════════ */}
      <section className="sv-section sv-section-white">
        <div className="sv-container">
          <div className="sv-section-header">
            <SectionLabel text="Why Choose Us" />
            <SectionHead>
              Partner with{' '}
              <span className="sv-orange-accent">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>
            </SectionHead>
            <SectionSub>We combine technical expertise with business acumen to deliver solutions that drive real value and results.</SectionSub>
          </div>
          <div className="sv-carousel-wrapper">
            <button className="sv-carousel-btn sv-carousel-btn-prev" onClick={prevWhyUs}>
              <ChevronLeft size={24} />
            </button>
            <div className="sv-why-grid sv-carousel-grid">
              {whyUs.slice(whyUsIndex, whyUsIndex + itemsPerSlide).map((item, i) => (
                <div key={i} className="sv-why-card">
                  <div className="sv-why-dot" />
                  <h4 className="sv-why-title">{item.title}</h4>
                  <p className="sv-why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
            <button className="sv-carousel-btn sv-carousel-btn-next" onClick={nextWhyUs}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="sv-carousel-dots">
            {Array.from({ length: Math.ceil(whyUs.length / itemsPerSlide) }).map((_, i) => (
              <button
                key={i}
                className={`sv-carousel-dot${i === Math.floor(whyUsIndex / itemsPerSlide) ? ' sv-carousel-dot-active' : ''}`}
                onClick={() => setWhyUsIndex(i * itemsPerSlide)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════ */}
      <section className="sv-section sv-section-purple-faded sv-border-top">
        <div className="sv-container sv-container-narrow">
          <div className="sv-section-header">
            <SectionLabel text="FAQ" />
            <SectionHead>Frequently Asked Questions</SectionHead>
            <SectionSub>Find answers to common questions about our services and processes.</SectionSub>
          </div>

          <div className="sv-faq-box">
            {faqs.map((faq, i) => (
              <div key={i} className={`sv-faq-item${i < faqs.length - 1 ? ' sv-faq-divider' : ''}`}>
                <button
                  className={`sv-faq-btn${activeFaq === i ? ' sv-faq-btn-open' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className={`sv-faq-q${activeFaq === i ? ' sv-faq-q-open' : ''}`}>
                    {faq.question}
                  </span>
                  {activeFaq === i
                    ? <ChevronUp size={18} color="#7c3aed" className="sv-faq-icon" />
                    : <ChevronDown size={18} color="#9ca3af" className="sv-faq-icon" />}
                </button>
                {activeFaq === i && (
                  <div className="sv-faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="sv-cta-section">
        <div className="sv-cta-blob sv-cta-blob-tr" />
        <div className="sv-cta-blob sv-cta-blob-bl" />

        <div className="sv-cta-inner">
          <SectionLabel text="Get In Touch" />
          <h2 className="sv-cta-heading">Ready to Transform Your Business?</h2>
          <p className="sv-cta-sub">
            Contact us today to discuss how our services can help you achieve your technology and business goals.
          </p>

          <div className="sv-cta-btns">
            <Link to="/appointment" className="sv-btn-cta-solid">Schedule a Consultation</Link>
            <Link to="/product-demo" className="sv-btn-cta-outline">Request a Demo</Link>
          </div>

          <div className="sv-cta-contacts">
            {[
              { Icon: Phone, text: '+91 88200 66999 / +91 74390 04545' },
              { Icon: Mail, text: 'info@zenitech.in' },
            ].map(({ Icon, text }) => (
              <div key={text} className="sv-cta-contact-item">
                <Icon size={15} className="sv-cta-contact-icon" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SCOPED STYLES ══════════════════════════════════════ */}
      <style>{`
        /* ── Design tokens ─────────────────────────────────── */
        .sv-root {
          --sv-purple-900: #4c1d95;
          --sv-purple-700: #6d28d9;
          --sv-purple-600: #7c3aed;
          --sv-purple-500: #a855f7;
          --sv-purple-100: #f3f0ff;
          --sv-purple-50:  #faf5ff;
          --sv-orange:     #f97316;
          --sv-orange-lt:  #fb923c;
          --sv-orange-dk:  #ea580c;
          --sv-gray-900:   #1e1b4b;
          --sv-gray-700:   #374151;
          --sv-gray-500:   #6b7280;
          --sv-gray-200:   #e5e7eb;
          --sv-gray-100:   #f3f4f6;
          --sv-white:      #ffffff;
          --sv-faded:      #fafafa;
          --sv-radius-sm:  8px;
          --sv-radius-md:  10px;
          --sv-radius-lg:  14px;
          --sv-radius-xl:  16px;
          --sv-shadow-card: 0 2px 12px rgba(0,0,0,0.04);
          --sv-shadow-hov:  0 12px 40px rgba(124,58,237,0.12);
          font-family: 'Satoshi', system-ui, sans-serif;
          background: var(--sv-faded);
        }

        /* ── Shared layout ─────────────────────────────────── */
        .sv-container        { max-width: 1280px; margin: 0 auto; }
        .sv-container-narrow { max-width: 760px;  margin: 0 auto; }

        .sv-section {
          padding: clamp(4rem, 8vw, 6rem) 2rem;
        }
        .sv-section-white         { background: var(--sv-white); }
        .sv-section-faded         { background: var(--sv-faded); }
        .sv-section-purple-faded  { background: var(--sv-purple-50); }
        .sv-border-y   { border-top: 1px solid var(--sv-gray-100); border-bottom: 1px solid var(--sv-gray-100); }
        .sv-border-top { border-top: 1px solid #ede9fe; }

        .sv-section-header { margin-bottom: 3rem; }

        /* ── Eyebrow / Section titles ──────────────────────── */
        .sv-eyebrow-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 0.9rem;
        }
        .sv-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #fdf4ff;
          border: 1px solid #e9d5ff;
          color: var(--sv-purple-600);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 20px;
        }
        .sv-eyebrow-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--sv-orange);
        }

        .sv-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--sv-gray-900);
          margin-bottom: 0.8rem;
          line-height: 1.2;
          text-align: center;
        }
        .sv-section-title-left { text-align: left; }
        .sv-section-sub {
          color: var(--sv-gray-500);
          max-width: 520px;
          margin: 0 auto;
          font-size: 0.97rem;
          line-height: 1.75;
          text-align: center;
        }
        .sv-orange-accent { color: var(--sv-orange); }

        /* Hero + Stats handled by ServiceHeader component */

        /* ── Carousel ─────────────────────────────────────── */
        .sv-carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .sv-carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--sv-white);
          border: 1.5px solid var(--sv-gray-200);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          color: var(--sv-purple-600);
        }
        .sv-carousel-btn:hover {
          background: var(--sv-purple-600);
          color: #fff;
          border-color: var(--sv-purple-600);
          transform: scale(1.05);
        }
        .sv-carousel-grid {
          flex: 1;
          overflow: hidden;
        }
        .sv-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        .sv-carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--sv-gray-200);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .sv-carousel-dot:hover {
          background: var(--sv-purple-400);
        }
        .sv-carousel-dot.sv-carousel-dot-active {
          background: var(--sv-purple-600);
          width: 24px;
          border-radius: 4px;
        }

        /* ── Service cards ─────────────────────────────────── */
        .sv-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
        }
        .sv-service-card {
          background: var(--sv-white);
          border: 1.5px solid var(--sv-gray-200);
          border-radius: var(--sv-radius-xl);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          box-shadow: var(--sv-shadow-card);
          cursor: default;
        }
        .sv-service-card.sv-service-card-hov {
          border-color: var(--sv-purple-600);
          box-shadow: var(--sv-shadow-hov);
          transform: translateY(-5px);
        }
        .sv-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--sv-purple-600), var(--sv-purple-500));
          border-radius: var(--sv-radius-xl) var(--sv-radius-xl) 0 0;
          transition: background 0.3s;
        }
        .sv-card-bar.sv-card-bar-hov {
          background: linear-gradient(90deg, var(--sv-purple-600), var(--sv-orange));
        }
        .sv-card-header {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 1.1rem;
        }
        .sv-card-icon {
          width: 50px; height: 50px;
          border-radius: var(--sv-radius-sm);
          background: var(--sv-purple-100);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s;
        }
        .sv-card-icon.sv-card-icon-hov {
          background: linear-gradient(135deg, var(--sv-purple-600), var(--sv-purple-500));
        }
        .sv-category-chip {
          display: inline-block;
          background: var(--sv-purple-100);
          color: var(--sv-purple-600);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 0.18rem 0.6rem;
          border-radius: 20px;
          margin-bottom: 0.25rem;
        }
        .sv-card-title {
          color: var(--sv-gray-900);
          font-weight: 700;
          font-size: 1.05rem;
          margin: 0.25rem 0 0;
        }
        .sv-card-desc {
          color: var(--sv-gray-500);
          font-size: 0.89rem;
          line-height: 1.7;
          margin-bottom: 1.1rem;
        }

        /* ── Feature list & tech chips ─────────────────────── */
        .sv-label-tiny {
          color: #4c1d95;
          font-size: 0.71rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 0.55rem;
          margin-top: 0;
        }
        .sv-mt { margin-top: 1rem; }

        .sv-feat-list { display: flex; flex-direction: column; gap: 0; }
        .sv-check-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.35rem;
          font-size: 0.855rem;
          color: var(--sv-gray-700);
        }
        .sv-check-icon {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--sv-purple-100);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .sv-tech-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .sv-tech-chip {
          background: var(--sv-purple-100);
          border: 1px solid #ddd6fe;
          color: #5b21b6;
          font-size: 0.71rem;
          font-weight: 500;
          padding: 0.18rem 0.55rem;
          border-radius: var(--sv-radius-sm);
        }

        .sv-card-cta {
          margin-top: auto;
          padding-top: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--sv-purple-100);
          color: var(--sv-purple-600);
          border: 1.5px solid #ddd6fe;
          padding: 0.65rem 1.2rem;
          border-radius: var(--sv-radius-md);
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
          align-self: flex-start;
        }
        .sv-card-cta.sv-card-cta-hov {
          background: linear-gradient(135deg, var(--sv-purple-600), var(--sv-purple-500));
          color: #fff;
          border-color: transparent;
        }

        /* ── Process ───────────────────────────────────────── */
        .sv-process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .sv-process-card {
          background: var(--sv-faded);
          border: 1.5px solid var(--sv-gray-200);
          border-radius: var(--sv-radius-lg);
          padding: 1.6rem;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s, background 0.3s;
          cursor: default;
        }
        .sv-process-card:hover {
          border-color: var(--sv-purple-600);
          box-shadow: 0 8px 28px rgba(124,58,237,0.1);
          transform: translateY(-4px);
          background: var(--sv-white);
        }
        .sv-step-num {
          width: 42px; height: 42px;
          border-radius: var(--sv-radius-sm);
          background: linear-gradient(135deg, var(--sv-purple-600), var(--sv-purple-500));
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .sv-step-num span {
          color: #fff;
          font-weight: 800;
          font-size: 1rem;
        }
        .sv-process-title {
          color: var(--sv-gray-900);
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .sv-process-desc {
          color: var(--sv-gray-500);
          font-size: 0.875rem;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Case studies ──────────────────────────────────── */
        .sv-case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.75rem;
        }
        .sv-case-card {
          background: var(--sv-white);
          border: 1.5px solid var(--sv-gray-200);
          border-radius: var(--sv-radius-xl);
          padding: 1.75rem;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .sv-case-card:hover {
          border-color: var(--sv-orange);
          box-shadow: 0 12px 36px rgba(249,115,22,0.1);
          transform: translateY(-4px);
        }
        .sv-case-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }
        .sv-case-title {
          color: var(--sv-gray-900);
          font-weight: 700;
          font-size: 1rem;
          margin: 0;
        }
        .sv-case-chip {
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: var(--sv-orange-dk);
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.18rem 0.55rem;
          border-radius: 20px;
          flex-shrink: 0;
        }
        .sv-case-client {
          color: var(--sv-purple-600);
          font-size: 0.84rem;
          font-weight: 600;
          margin-bottom: 1.1rem;
        }
        .sv-case-block { margin-bottom: 0.85rem; }
        .sv-case-text {
          color: var(--sv-gray-500);
          font-size: 0.875rem;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Why us ────────────────────────────────────────── */
        .sv-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .sv-why-card {
          background: var(--sv-purple-50);
          border: 1.5px solid #ede9fe;
          border-radius: var(--sv-radius-lg);
          padding: 1.5rem;
          transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .sv-why-card:hover {
          border-color: var(--sv-purple-600);
          background: #f5f0ff;
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(124,58,237,0.1);
        }
        .sv-why-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--sv-orange);
          margin-bottom: 0.85rem;
        }
        .sv-why-title {
          color: var(--sv-gray-900);
          font-weight: 700;
          font-size: 0.97rem;
          margin-bottom: 0.5rem;
        }
        .sv-why-desc {
          color: var(--sv-gray-500);
          font-size: 0.855rem;
          line-height: 1.7;
          margin: 0;
        }

        /* ── FAQ ───────────────────────────────────────────── */
        .sv-faq-box {
          background: var(--sv-white);
          border-radius: var(--sv-radius-xl);
          border: 1.5px solid #ede9fe;
          overflow: hidden;
        }
        .sv-faq-divider { border-bottom: 1px solid var(--sv-gray-100); }
        .sv-faq-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          gap: 1rem;
          text-align: left;
          transition: background 0.2s;
        }
        .sv-faq-btn.sv-faq-btn-open { background: var(--sv-purple-50); }
        .sv-faq-q {
          color: var(--sv-gray-900);
          font-weight: 600;
          font-size: 0.95rem;
          line-height: 1.5;
          transition: color 0.2s;
        }
        .sv-faq-q.sv-faq-q-open { color: var(--sv-purple-600); }
        .sv-faq-icon { flex-shrink: 0; }
        .sv-faq-answer {
          padding: 0 1.5rem 1.25rem;
          color: var(--sv-gray-500);
          font-size: 0.9rem;
          line-height: 1.75;
        }

        /* ── CTA section ───────────────────────────────────── */
        .sv-cta-section {
          padding: clamp(4rem, 8vw, 6rem) 2rem;
          background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #7c3aed 100%);
          position: relative;
          overflow: hidden;
        }
        .sv-cta-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .sv-cta-blob-tr {
          top: -6rem; right: -6rem;
          width: 400px; height: 400px;
          background: rgba(255,255,255,0.05);
        }
        .sv-cta-blob-bl {
          bottom: -4rem; left: -4rem;
          width: 300px; height: 300px;
          background: rgba(249,115,22,0.12);
        }
        .sv-cta-inner {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        /* override eyebrow pill inside CTA for contrast */
        .sv-cta-inner .sv-eyebrow-pill {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.9);
        }
        .sv-cta-heading {
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .sv-cta-sub {
          color: rgba(233,213,255,0.8);
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 2rem;
        }
        .sv-cta-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .sv-btn-cta-solid {
          background: var(--sv-white);
          color: var(--sv-purple-600);
          padding: 0.85rem 2rem;
          border-radius: var(--sv-radius-md);
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .sv-btn-cta-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .sv-btn-cta-outline {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.4);
          color: #fff;
          padding: 0.85rem 2rem;
          border-radius: var(--sv-radius-md);
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .sv-btn-cta-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.7);
        }
        .sv-cta-contacts {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .sv-cta-contact-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(233,213,255,0.7);
          font-size: 0.875rem;
        }
        .sv-cta-contact-icon { color: rgba(233,213,255,0.7); }

        /* ── Responsive ────────────────────────────────────── */
        @media (max-width: 768px) {
          .sv-services-grid { grid-template-columns: 1fr; }
          .sv-case-grid     { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .sv-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .sv-hero-btns, .sv-cta-btns { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default Services;