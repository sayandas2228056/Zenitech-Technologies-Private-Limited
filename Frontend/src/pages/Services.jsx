import React, { useState, useEffect, useRef } from 'react';
import { Cloud, Shield, Check, ArrowRight, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Bright1 from '../components/Common/Bright1';
// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Cloud Computing',
    shortDesc: 'Secure and scalable cloud services for digital transformation.',
    fullDesc: 'We provide comprehensive cloud solutions including cloud migration, infrastructure setup, and managed services across AWS, Azure, and Google Cloud. Our cloud services help businesses reduce costs, improve scalability, and enhance operational efficiency.',
    icon: Cloud,
    category: 'Cloud',
    features: ['Cloud Migration & Strategy', 'Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)'],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes', 'Jio Cloud'],
  },
  {
    title: 'Cyber Security',
    shortDesc: 'Protecting your digital assets with advanced security systems.',
    fullDesc: 'Keeping your systems safe with reliable, scalable, and future-ready cybersecurity solutions that guard against evolving threats and ensure compliance across your organization.',
    icon: Shield,
    category: 'Security',
    features: ['Threat Detection & Response', 'Security Audits & Assessments', 'Compliance Management', 'Identity & Access Management', 'Network Security', 'Security Training'],
    technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Zero Trust'],
  },
];

const caseStudies = [
  {
    title: 'Multi-Cloud Infrastructure Optimization',
    client: 'E-commerce Enterprise',
    challenge: 'High infrastructure costs and inconsistent performance across cloud environments',
    solution: 'Designed and implemented a multi-cloud architecture using AWS and Azure with auto-scaling and load balancing',
    results: [
      '45% reduction in cloud infrastructure costs',
      '99.99% application uptime achieved',
      'Improved application response time by 35%',
    ],
  },
  {
    title: 'Advanced Threat Detection & Prevention',
    client: 'FinTech Company',
    challenge: 'Frequent phishing attacks and vulnerability to advanced persistent threats (APT)',
    solution: 'Deployed SIEM tools, endpoint protection, and AI-based threat detection systems',
    results: [
      '90% reduction in security incidents',
      'Real-time threat monitoring and alerts',
      'Strengthened overall security posture',
    ],
  },
  {
    title: 'Secure Cloud Migration',
    client: 'Healthcare Organization',
    challenge: 'Migrating sensitive patient data to the cloud while maintaining compliance (HIPAA/GDPR)',
    solution: 'Executed secure cloud migration with encryption, identity access management (IAM), and compliance frameworks',
    results: [
      '100% compliance with healthcare regulations',
      'Zero data loss during migration',
      'Enhanced data accessibility with high security',
    ],
  },
  {
    title: 'Disaster Recovery & Business Continuity',
    client: 'Banking Institution',
    challenge: 'Lack of a robust disaster recovery system leading to downtime risks',
    solution: 'Implemented automated backup, disaster recovery planning, and failover systems on cloud infrastructure',
    results: [
      'Recovery Time Objective (RTO) reduced to under 15 minutes',
      'Ensured 24/7 business continuity',
      'Minimized financial losses due to downtime',
    ],
  },
  {
    title: 'Zero Trust Security Implementation',
    client: 'IT Services Company',
    challenge: 'Unsecured remote access and increasing insider threats',
    solution: 'Adopted Zero Trust architecture with strict identity verification and network segmentation',
    results: [
      'Eliminated unauthorized access incidents',
      'Improved network visibility and control',
      'Enhanced remote workforce security',
    ],
  },
  {
    title: 'Cloud Cost Governance & Optimization',
    client: 'Startup SaaS Company',
    challenge: 'Uncontrolled cloud spending and inefficient resource usage',
    solution: 'Implemented cost monitoring tools, rightsizing, and reserved instances strategy',
    results: [
      '50% reduction in monthly cloud bills',
      'Optimized resource utilization',
      'Better financial forecasting for cloud expenses',
    ],
  },
];

const serviceProcess = [
  { step: 1, title: 'Discovery & Analysis', description: 'We begin by understanding your business needs, challenges, and objectives through detailed consultation and analysis.' },
  { step: 2, title: 'Strategy & Planning', description: 'Our team develops a comprehensive strategy and implementation plan tailored to your specific requirements.' },
  { step: 3, title: 'Implementation', description: 'We execute the solution using industry best practices and agile methodologies for optimal results.' },
  { step: 4, title: 'Testing & QA', description: 'Rigorous testing and quality checks ensure the solution meets all requirements and standards.' },
  { step: 5, title: 'Deployment & Training', description: 'Smooth deployment and comprehensive training ensure successful adoption of the solution.' },
  { step: 6, title: 'Ongoing Support', description: 'Continuous monitoring, maintenance, and support ensure long-term success and optimization.' },
];

const statistics = [
  { number: '100+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Expert Engineers' },
];

const faqs = [
  { question: 'What makes ZENITECH TECHNOLOGIES PRIVATE LIMITED different from other IT service providers?', answer: 'We combine deep technical expertise with business acumen, offering end-to-end solutions tailored to your specific needs. Our agile approach and commitment to continuous support set us apart.' },
  { question: 'How do you ensure the security of our data?', answer: 'We implement industry-leading security measures, including encryption, access controls, and regular security audits. Our team stays updated with the latest security threats and best practices.' },
  { question: 'What is your typical project timeline?', answer: 'Project timelines vary based on scope and complexity. We provide detailed timelines during the planning phase and maintain transparent communication throughout the project.' },
  { question: 'Do you offer 24/7 support?', answer: 'Yes, we provide round-the-clock support for critical systems and offer different support tiers to meet your specific needs and budget.' },
];

// ─── HOOK ────────────────────────────────────────────────────────────────────

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

// ─── REUSABLE BITS ───────────────────────────────────────────────────────────

const SectionLabel = ({ text }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.9rem' }}>
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      background: '#fdf4ff', border: '1px solid #e9d5ff',
      color: '#7c3aed', fontSize: '0.72rem', fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      padding: '0.3rem 0.9rem', borderRadius: 20,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f97316', display: 'inline-block' }} />
      {text}
    </span>
  </div>
);

const SectionHead = ({ children, center = true }) => (
  <h2 style={{
    fontFamily: "'Satoshi', sans-serif",
    fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 800,
    color: '#1e1b4b', marginBottom: '0.8rem', lineHeight: 1.2,
    textAlign: center ? 'center' : 'left',
  }}>{children}</h2>
);

const SectionSub = ({ children }) => (
  <p style={{ color: '#6b7280', maxWidth: 520, margin: '0 auto', fontSize: '0.97rem', lineHeight: 1.75, textAlign: 'center' }}>{children}</p>
);

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? '#7c3aed' : '#e5e7eb'}`,
        borderRadius: 16, padding: '2rem',
        display: 'flex', flexDirection: 'column', height: '100%',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 12px 40px rgba(124,58,237,0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-5px)' : 'none',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: hovered ? 'linear-gradient(90deg,#7c3aed,#f97316)' : 'linear-gradient(90deg,#7c3aed,#a855f7)', borderRadius: '16px 16px 0 0', transition: 'all 0.3s' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
        <div style={{ width: 50, height: 50, borderRadius: 12, background: hovered ? 'linear-gradient(135deg,#7c3aed,#a855f7)' : '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s' }}>
          <Icon size={22} color={hovered ? '#fff' : '#7c3aed'} />
        </div>
        <div>
          <span style={{ background: '#f3f0ff', color: '#7c3aed', fontSize: '0.7rem', padding: '0.18rem 0.6rem', borderRadius: 20, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>{service.category}</span>
          <h3 style={{ color: '#1e1b4b', fontWeight: 700, fontSize: '1.05rem', margin: '0.25rem 0 0', fontFamily: "'Satoshi', sans-serif" }}>{service.title}</h3>
        </div>
      </div>

      <p style={{ color: '#6b7280', fontSize: '0.89rem', lineHeight: 1.7, marginBottom: '1.1rem' }}>{service.fullDesc}</p>

      <div style={{ marginBottom: '1.1rem' }}>
        <p style={{ color: '#4c1d95', fontSize: '0.71rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '0.55rem' }}>Key Features</p>
        {service.features.slice(0, 3).map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={9} color="#7c3aed" strokeWidth={3} />
            </div>
            <span style={{ color: '#374151', fontSize: '0.855rem' }}>{f}</span>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '1.4rem' }}>
        <p style={{ color: '#4c1d95', fontSize: '0.71rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '0.55rem' }}>Technologies</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {service.technologies.slice(0, 5).map(t => (
            <span key={t} style={{ background: '#f3f0ff', border: '1px solid #ddd6fe', color: '#5b21b6', fontSize: '0.71rem', padding: '0.18rem 0.55rem', borderRadius: 6, fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>

      <Link to="/appointment" style={{
        marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
        background: hovered ? 'linear-gradient(135deg,#7c3aed,#a855f7)' : '#f3f0ff',
        color: hovered ? '#fff' : '#7c3aed',
        padding: '0.65rem 1.2rem', borderRadius: 10, fontSize: '0.875rem', fontWeight: 600,
        textDecoration: 'none', transition: 'all 0.3s', alignSelf: 'flex-start',
        border: hovered ? 'none' : '1.5px solid #ddd6fe',
      }}>
        Talk to Us <ArrowRight size={15} />
      </Link>
    </div>
  );
};

// ─── MAIN ────────────────────────────────────────────────────────────────────

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [statsRef, statsVisible] = useInView(0.2);

  const servicesWithIndex = services.map((s, i) => ({ ...s, index: i }));

  return (
    <>

      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      <style>{`* { box-sizing: border-box; } ::selection { background: rgba(124,58,237,0.15); }`}</style>

      <div style={{ background: '#fafafa', fontFamily: "'Satoshi', sans-serif" }}>

        {/* ── HERO ── */}
        <div style={{
          background: 'linear-gradient(135deg,#4c1d95 0%,#6d28d9 45%,#7c3aed 100%)',
          padding: 'clamp(5rem,10vw,8rem) 2rem clamp(4rem,8vw,6rem)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', width: 420, height: 420, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-3rem', left: '-3rem', width: 260, height: 260, borderRadius: '50%', background: 'rgba(249,115,22,0.12)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 30, padding: '0.3rem 1rem', marginBottom: '1.75rem' }}>
              <span style={{ color: '#fb923c', fontSize: '0.8rem', fontWeight: 600 }}>ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>
            </div>

            <h1 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: '1.1rem' }}>
              Technology Solutions for{' '}
              <span style={{ color: '#fb923c' }}>Modern Business</span>
            </h1>
            <p style={{ color: 'rgba(233,213,255,0.85)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2.2rem' }}>
              Comprehensive Cybersecurity & Cloud Computing services to drive innovation and growth for your organization.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/cybersecurity" style={{ background: '#fff', color: '#7c3aed', padding: '0.8rem 2rem', borderRadius: 10, fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', display: 'inline-block' }}>Cybersecurity</Link>
              <Link to="/cloud-computing" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.45)', color: '#fff', padding: '0.8rem 2rem', borderRadius: 10, fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none', display: 'inline-block' }}>Cloud Computing</Link>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div ref={statsRef} style={{ background: '#fff', borderBottom: '1px solid #f3f4f6', padding: '2.5rem 2rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {statistics.map((s, i) => (
              <div key={i} style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'none' : 'translateY(16px)', transition: `all 0.55s ease ${i * 0.1}s` }}>
                <p style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#7c3aed', margin: 0 }}>{s.number}</p>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.2rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES ── */}
        <section style={{ padding: 'clamp(4rem,8vw,6rem) 2rem', background: '#fafafa' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel text="Our Expertise" />
              <SectionHead>Services & Solutions</SectionHead>
              <SectionSub>Empowering businesses with cutting-edge digital and IT services — from Cloud Computing to Cyber Security.</SectionSub>
            </div>

            {/* Desktop */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.75rem' }} className="services-desktop">
              {servicesWithIndex.map((s, i) => <ServiceCard key={i} service={s} />)}
            </div>

            {/* Mobile */}
            <div className="services-mobile" style={{ display: 'none' }}>
              <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} style={{ paddingBottom: '3rem' }}>
                {servicesWithIndex.map((s, i) => <SwiperSlide key={i}><ServiceCard service={s} /></SwiperSlide>)}
              </Swiper>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ padding: 'clamp(4rem,8vw,6rem) 2rem', background: '#fff', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel text="Our Process" />
              <SectionHead>How We Work</SectionHead>
              <SectionSub>Our proven methodology ensures successful delivery of technology solutions that drive real business value.</SectionSub>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
              {serviceProcess.map((step, i) => (
                <div key={i}
                  style={{ background: '#fafafa', border: '1.5px solid #e5e7eb', borderRadius: 14, padding: '1.6rem', transition: 'all 0.3s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#fafafa'; }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: 'linear-gradient(135deg,#7c3aed,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', fontFamily: "'Satoshi', sans-serif" }}>{step.step}</span>
                  </div>
                  <h3 style={{ color: '#1e1b4b', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.7 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section style={{ padding: 'clamp(4rem,8vw,6rem) 2rem', background: '#faf5ff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel text="Success Stories" />
              <SectionHead>Case Studies</SectionHead>
              <SectionSub>Discover how we've helped organizations transform their business through technology.</SectionSub>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.75rem' }}>
              {caseStudies.map((study, i) => (
                <div key={i}
                  style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, padding: '1.75rem', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(249,115,22,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                    <h3 style={{ color: '#1e1b4b', fontWeight: 700, fontSize: '1rem', fontFamily: "'Satoshi', sans-serif" }}>{study.title}</h3>
                    <span style={{ background: '#fff7ed', border: '1px solid #fed7aa', color: '#ea580c', fontSize: '0.68rem', padding: '0.18rem 0.55rem', borderRadius: 20, fontWeight: 700, flexShrink: 0, marginLeft: '0.5rem' }}>Case Study</span>
                  </div>
                  <p style={{ color: '#7c3aed', fontSize: '0.84rem', fontWeight: 600, marginBottom: '1.1rem' }}>{study.client}</p>

                  {[['Challenge', study.challenge], ['Solution', study.solution]].map(([label, text]) => (
                    <div key={label} style={{ marginBottom: '0.85rem' }}>
                      <p style={{ color: '#4c1d95', fontSize: '0.71rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{label}</p>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{text}</p>
                    </div>
                  ))}

                  <p style={{ color: '#4c1d95', fontSize: '0.71rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Results</p>
                  {study.results.map((r, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.3rem' }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Check size={9} color="#7c3aed" strokeWidth={3} />
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.845rem' }}>{r}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Bright1/>
        {/* ── WHY US ── */}
        <section style={{ padding: 'clamp(4rem,8vw,6rem) 2rem', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel text="Why Choose Us" />
              <SectionHead>
                Partner with{' '}
                <span style={{ color: '#f97316' }}>ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>
              </SectionHead>
              <SectionSub>We combine technical expertise with business acumen to deliver solutions that drive real value and results.</SectionSub>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Deep Expertise', desc: 'Certified engineers with 10+ years of experience across cloud, security and infrastructure domains.' },
                { title: 'Agile Delivery', desc: 'Iterative, transparent delivery that adapts to your evolving needs and timelines.' },
                { title: 'End-to-End Support', desc: '24/7 monitoring, maintenance and dedicated support from day one to long-term operation.' },
                { title: 'Proven Results', desc: '100+ successful projects across fintech, healthcare, manufacturing and more.' },
              ].map((item, i) => (
                <div key={i}
                  style={{ background: '#faf5ff', border: '1.5px solid #ede9fe', borderRadius: 14, padding: '1.5rem', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = '#f5f0ff'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9fe'; e.currentTarget.style.background = '#faf5ff'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f97316', marginBottom: '0.85rem' }} />
                  <h4 style={{ color: '#1e1b4b', fontWeight: 700, fontSize: '0.97rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.855rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: 'clamp(4rem,8vw,6rem) 2rem', background: '#faf5ff', borderTop: '1px solid #ede9fe' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <SectionLabel text="FAQ" />
              <SectionHead>Frequently Asked Questions</SectionHead>
              <SectionSub>Find answers to common questions about our services and processes.</SectionSub>
            </div>

            <div style={{ background: '#fff', borderRadius: 16, border: '1.5px solid #ede9fe', overflow: 'hidden' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', background: activeFaq === i ? '#faf5ff' : 'transparent', border: 'none', cursor: 'pointer', gap: '1rem', textAlign: 'left', transition: 'background 0.2s' }}
                  >
                    <span style={{ color: activeFaq === i ? '#7c3aed' : '#1e1b4b', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5, transition: 'color 0.2s' }}>{faq.question}</span>
                    {activeFaq === i
                      ? <ChevronUp size={18} color="#7c3aed" style={{ flexShrink: 0 }} />
                      : <ChevronDown size={18} color="#9ca3af" style={{ flexShrink: 0 }} />}
                  </button>
                  {activeFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.75 }}>{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: 'clamp(4rem,8vw,6rem) 2rem', background: 'linear-gradient(135deg,#4c1d95 0%,#6d28d9 50%,#7c3aed 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-6rem', right: '-6rem', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', width: 300, height: 300, borderRadius: '50%', background: 'rgba(249,115,22,0.12)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <SectionLabel text="Get In Touch" />
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.9rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Ready to Transform Your Business?</h2>
            <p style={{ color: 'rgba(233,213,255,0.8)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              Contact us today to discuss how our services can help you achieve your technology and business goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/appointment" style={{ background: '#fff', color: '#7c3aed', padding: '0.85rem 2rem', borderRadius: 10, fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', display: 'inline-block' }}>Schedule a Consultation</Link>
              <Link to="/product-demo" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '0.85rem 2rem', borderRadius: 10, fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none', display: 'inline-block' }}>Request a Demo</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {[{ Icon: Phone, text: '+91 88200 66999 / ' }, { Icon: Mail, text: 'info@zenitech.in' }].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Icon size={15} color="rgba(233,213,255,0.7)" />
                  <span style={{ color: 'rgba(233,213,255,0.7)', fontSize: '0.875rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>


      <style>{`
        @media (max-width: 767px) {
          .services-desktop { display: none !important; }
          .services-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Services;