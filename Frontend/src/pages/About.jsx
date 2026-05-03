import React, { useState, useEffect, useRef } from 'react';
import {
  PhoneCall, Network, ArrowRight, ChevronRight,
  Users, Award, Target, BarChart3, Shield, Clock,
  Mail, ChevronDown, ChevronUp, Activity, Cloud, Lock, ChevronLeft
} from 'lucide-react';
import heroimg from "../assets/Abthero.jpg";
import Pic1 from '../assets/Abtsc.jpg';
import Pic2 from '../assets/heroslider/cyber.jpg'
import Logo from '../assets/Logo.png';
import Founder from '../assets/Founder.jpg';
import { FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Bright1 from '../components/Common/Bright2.jsx';
import OptimizedImage from '../components/Common/OptimizedImage.jsx';
import useSEO from '../hooks/useSEO';

/* ══════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════ */

const stats = [
  { icon: Lock, count: 'Cyber Security', label: 'Protection' },
  { icon: Shield, count: '99.9%', label: 'System Uptime' },
  { icon: Cloud, count: 'Cloud Solutions', label: 'Deployment Capability' },
  
];

const values = [
  {
    title: 'Innovation Excellence',
    description:
      'Continuously explores emerging technologies to deliver forward-looking solutions that keep organizations competitive in a rapidly evolving digital landscape.',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'Builds long-term partnerships through clear communication, tailored solutions, and a deep understanding of business objectives.',
  },
  {
    title: 'Technical Expertise',
    description:
      'Applies specialized knowledge across cloud and security domains to design and implement reliable, scalable solutions.',
  },
  {
    title: 'Integrity & Trust',
    description:
      'Maintains the highest standards of ethics, confidentiality, and accountability across all engagements.',
  },
  {
    title: 'Security by Design',
    description:
      'Integrates security principles at every stage of the solution lifecycle to ensure resilient and protected systems.',
  },
  {
    title: 'Scalability & Performance',
    description:
      'Designs architectures that are optimized for performance, flexibility, and seamless scalability as business needs evolve.',
  },
  {
    title: 'Operational Excellence',
    description:
      'Follows structured processes and best practices to ensure consistent quality, reliability, and efficient delivery.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Regularly evaluates and enhances systems, processes, and strategies to adapt to new challenges and technological advancements.',
  },
];
const services = [
  { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your digital assets and infrastructure.' },
  { icon: Clock, title: 'Cloud Solutions', description: 'Strategic cloud adoption and migration services for enhanced scalability and efficiency.' },
];

const founderData = {
  name: 'Haider Ali',
  title: 'Founder & CEO',
  summary: 'Technology visionary with 25+ years of experience in Enterprise IT Solutions. Expertise in IT, Cloud, Cybersecurity, Software, and Telecom Services.',
  email: 'haider@zenitech.in',
  phone: '+91 88200 66999',
  location: 'Bangalore / Bengaluru, India',
  highlights: ['24/7 security monitoring', 'Advanced threat protection', 'Incident response services', 'Tailored security consulting'],
  socials: [
    { name: 'LinkedIn', icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/haideraliraja/' },
    { name: 'WhatsApp', icon: <FaWhatsapp size={16} />, url: 'https://wa.me/8820066999' },
  ],
};

const faqData = [
  {
    question: 'What services are offered?',
    answer:
      'Services include cybersecurity solutions, cloud architecture design, infrastructure deployment, monitoring, and ongoing support tailored to modern business needs.',
  },
  {
    question: 'Where is the company based?',
    answer:
      'Operations are based in India, with the ability to support clients remotely across different regions and time zones.',
  },
  {
    question: 'Which industries are supported?',
    answer:
      'Solutions are designed to support a wide range of industries including technology, startups, finance, healthcare, education, and manufacturing.',
  },
  {
    question: 'What is the approach to cybersecurity?',
    answer:
      'A security-first approach is followed, incorporating principles such as Zero Trust, layered defense, and continuous monitoring to protect systems and data.',
  },
  {
    question: 'Which cloud platforms are supported?',
    answer:
      'Solutions are compatible with major cloud platforms and include support for multi-cloud and hybrid environments.',
  },
  {
    question: 'How is data security ensured?',
    answer:
      'Data is protected through encryption, secure access controls, identity management, and regular security assessments.',
  },
  {
    question: 'Is ongoing support provided?',
    answer:
      'Yes, continuous monitoring, maintenance, and support services are available to ensure system stability and security over time.',
  },
  {
    question: 'Can solutions be customized?',
    answer:
      'All solutions are tailored based on specific business requirements, infrastructure, and security needs.',
  },
  {
    question: 'How is scalability handled in cloud solutions?',
    answer:
      'Cloud architectures are designed to scale dynamically based on workload demands, ensuring performance and cost efficiency.',
  },
  {
    question: 'What makes the approach reliable for a new company?',
    answer:
      'The focus is on modern technologies, best practices, and structured processes, ensuring reliable and future-ready solutions without over-reliance on legacy systems.',
  },
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
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('ab-revealed'); obs.disconnect(); } },
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
    <div ref={ref} className={`ab-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const SectionHeader = ({ tag, title, subtitle, light = false }) => (
  <div className="ab-section-header">
    <span className={`ab-eyebrow-pill${light ? ' ab-eyebrow-pill-light' : ''}`}>
      <span className={`ab-eyebrow-dot${light ? ' ab-eyebrow-dot-light' : ''}`} />
      {tag}
    </span>
    <h2 className={`ab-section-title${light ? ' ab-section-title-light' : ''}`}>{title}</h2>
    <div className={`ab-title-bar${light ? ' ab-title-bar-light' : ''}`} />
    {subtitle && <p className={`ab-section-sub${light ? ' ab-section-sub-light' : ''}`}>{subtitle}</p>}
  </div>
);

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════ */

const About = () => {
  useSEO({
    title: 'About Us — IT Services & Consulting',
    description:
      'About Zenitech Technologies — a premier IT services & consulting company in Bengaluru, India. Specializing in cybersecurity, cloud computing, and managed IT solutions for enterprises.',
    canonical: 'https://www.zenitech.in/about',
    keywords:
      'about Zenitech Technologies, IT services company India, IT consulting Bengaluru, cybersecurity company India, cloud computing company, managed IT services, Zenitech about',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.zenitech.in/' },
      { name: 'About', url: 'https://www.zenitech.in/about' },
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const [valueIndex, setValueIndex] = useState(0);
  const [missionIndex, setMissionIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) setTimeout(() => el.classList.add('ab-hero-in'), 60);
  }, []);

  const prevValue = () => setValueIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextValue = () => setValueIndex((prev) => (prev >= values.length - itemsPerSlide ? 0 : prev + 1));

  const prevMission = () => setMissionIndex((prev) => (prev === 0 ? 0 : prev - 1));
  const nextMission = () => setMissionIndex((prev) => (prev >= 4 - itemsPerSlide ? 0 : prev + 1));

  return (
    <div className="ab-root">

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="ab-hero" ref={heroRef}>
        {/* Background image + gradient overlay */}
        <div className="ab-hero-bg">
          <OptimizedImage src={heroimg} alt="" aria-hidden="true" className="ab-hero-bg-img" loading="eager" />
          <div className="ab-hero-overlay opacity-50" />
        </div>

        <div className="ab-hero-blob ab-blob-1" />
        <div className="ab-hero-blob ab-blob-2" />

        <div className="ab-hero-layout">
          {/* Left — text */}
          <div className="ab-hero-text">
            <div className="ab-badge ab-badge-animate">
              <span className="ab-badge-dot ab-pulse" />
              About <span className="text-orange-500">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>
            </div>

            <h1 className="ab-hero-heading ab-text-animate" style={{ animationDelay: '0.1s' }}>
              Grow your business{' '}
              <em className="ab-hero-em">with us</em>
            </h1>

            <p className="ab-hero-sub ab-text-animate" style={{ animationDelay: '0.2s' }}>
              Delivering innovative, reliable, and scalable technology solutions to businesses of every size.
            </p>

            <div className="ab-hero-btns ab-text-animate" style={{ animationDelay: '0.3s' }}>
              <Link to="/solutions" className="ab-btn-primary">Our Services <ArrowRight size={16} /></Link>
              <Link to="/contact" className="ab-btn-ghost">Contact Us</Link>
            </div>
          </div>

          {/* Right — rotating logo card */}
          <div className="ab-hero-logo-col ab-text-animate" style={{ animationDelay: '0.25s' }}>
            <div className="ab-logo-card">
              <OptimizedImage src={Logo} alt="Zenitech Logo" className="ab-logo-img" loading="eager" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="ab-wave-wrap">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,40 C240,90 480,0 720,50 C960,100 1200,20 1440,50 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      {/* ══ WHO WE ARE ═════════════════════════════════════════ */}
      <section className="ab-section ab-section-white" id="about">
        <div className="ab-two-col">
          <RevealCard className="ab-half">
            <span className="ab-badge-pill">
              <span className="ab-badge-pill-inner">WHO WE ARE</span>
            </span>
            <div className="ab-text-stack">
              <p><span className="text-orange-500 font-bold ab-fw">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span> is a premier IT Services &amp; Consulting company headquartered in Bengaluru, the Silicon Valley of India. As a trusted IT Services Company, we specialise in comprehensive technology solutions that drive business growth.</p>
              <p>With a team of highly skilled professionals, we provide cutting-edge Cybersecurity & Cloud Solutions. Our strategic partnerships with leading technology providers enable us to deliver cutting-edge solutions tailored to each client.</p>
              <p>Our clients span from startups to large enterprises across domains like IT/ITES, Startups, BFSI, Fintech, Healthcare, Pharmaceuticals , Manufacturing , Automobile, Retail, Ecommerce , Education , Media & Entertainment , Logistics & Supply and many more.</p>
            </div>
            <Link to="/solutions" className="ab-link-arrow">
              Explore Our Services <ChevronRight size={16} className="ab-link-chevron" />
            </Link>
          </RevealCard>

          <RevealCard className="ab-half" delay={80}>
            <div className="ab-img-frame">
              <div className="ab-img-blob-tl" />
              <div className="ab-img-blob-br" />
              <OptimizedImage src={Pic1} alt="Zenitech Team" className="ab-section-img" loading="lazy" />
              <div className="ab-img-chip ab-img-chip-tl">Cybersecurity and Cloud Solutions Experts</div>
            </div>
          </RevealCard>
        </div>
      </section>
{/* ══ MISSION & VISION ═══════════════════════════════════ */}
<section className="ab-section ab-section-faded">
  <SectionHeader tag="OUR PURPOSE" title="Mission & Vision" />

  <div className="ab-carousel-wrapper">
    <button className="ab-carousel-btn ab-carousel-btn-prev" onClick={prevMission}>
      <ChevronLeft size={24} />
    </button>
    <div className="ab-mission-grid ab-carousel-grid">
      {[
        {
          Icon: Target,
          head: 'Our Mission',
          body:
            'To deliver secure, scalable, and efficient cloud and cybersecurity solutions that help businesses operate with confidence. The focus is on simplifying complex technologies, strengthening security posture, and enabling organizations to adapt and grow in a rapidly evolving digital environment.',
        },
        {
          Icon: Award,
          head: 'Our Vision',
          body:
            'To build a trusted technology practice that enables organizations to adopt cloud and security solutions with clarity, reliability, and long-term sustainability. The vision is centered on creating systems that are resilient, secure, and designed for future growth.',
        },
        {
          Icon: Shield,
          head: 'Security Commitment',
          body:
            'Security is treated as a core foundation, not an add-on. Every solution is designed with principles such as Zero Trust, data protection, and continuous monitoring to ensure systems remain protected against evolving threats.',
        },
        {
          Icon: Cloud,
          head: 'Cloud Focus',
          body:
            'Emphasis is placed on modern cloud architectures that are scalable, cost-efficient, and performance-driven. Solutions are designed to support flexibility, high availability, and seamless integration across environments.',
        },
      ].slice(missionIndex, missionIndex + itemsPerSlide).map((card, i) => (
        <RevealCard key={i} className="ab-mission-card" delay={i * 100}>
          <div className="ab-mission-icon-wrap">
            <card.Icon size={26} color="#fff" />
          </div>
          <h3 className="ab-mission-title">{card.head}</h3>
          <p className="ab-mission-body">{card.body}</p>
        </RevealCard>
      ))}
    </div>
    <button className="ab-carousel-btn ab-carousel-btn-next" onClick={nextMission}>
      <ChevronRight size={24} />
    </button>
  </div>
  <div className="ab-carousel-dots">
    {Array.from({ length: Math.ceil(4 / itemsPerSlide) }).map((_, i) => (
      <button
        key={i}
        className={`ab-carousel-dot${i === Math.floor(missionIndex / itemsPerSlide) ? ' ab-carousel-dot-active' : ''}`}
        onClick={() => setMissionIndex(i * itemsPerSlide)}
      />
    ))}
  </div>
</section>

      {/* ══ WHAT WE DO ═════════════════════════════════════════ */}
      <section className="ab-section ab-section-white" id="services">
        <SectionHeader
          tag="OUR EXPERTISE"
          title="What we do"
          subtitle="ZENITECH TECHNOLOGIES PRIVATE LIMITED offers a comprehensive portfolio of solutions to address your most complex technology challenges."
        />
        <div className="ab-two-col ab-two-col-reverse">
          <RevealCard className="ab-half" delay={80}>
            <div className="ab-img-frame">
              <div className="ab-img-blob-tr" />
              <div className="ab-img-blob-bl" />
              <OptimizedImage src={Pic2} alt="Zenitech Services" className="ab-section-img" loading="lazy" />
              <div className="ab-img-chip ab-img-chip-br">Trusted Experts</div>
            </div>
          </RevealCard>

          <RevealCard className="ab-half">
            <h2 className="ab-sub-heading">Our premium services</h2>
            <p className="ab-sub-body">As a cybersecurity and cloud solutions provider, we combine best-in-class technologies to deliver seamless, integrated solutions for complex business challenges.</p>
            <div className="ab-services-mini-grid">
              {services.map((svc, i) => (
                <div key={i} className="ab-mini-card">
                  <div className="ab-mini-icon-wrap"><svc.icon size={26} color="#185FA5" /></div>
                  <h4 className="ab-mini-title">{svc.title}</h4>
                  <p className="ab-mini-desc">{svc.description}</p>
                </div>
              ))}
            </div>
          </RevealCard>
        </div>
      </section>

      {/* ══ BRIGHT1 BANNER ═════════════════════════════════════ */}
      <Bright1 />

      {/* ══ FOUNDER ════════════════════════════════════════════ */}
      <section className="ab-section ab-section-faded" id="founder">
        <SectionHeader tag="LEADERSHIP" title="Meet our founder" />

        <RevealCard className="ab-founder-card">
          {/* Photo col */}
          <div className="ab-founder-photo-col">
            <OptimizedImage src={Founder} alt={`${founderData.name} – ${founderData.title}`} className="ab-founder-img" loading="lazy" />
            <div className="ab-founder-socials">
              {founderData.socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="ab-social-btn" aria-label={`${founderData.name} on ${s.name}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Info col */}
          <div className="ab-founder-info">
            <h3 className="ab-founder-name">{founderData.name}</h3>
            <p className="ab-founder-role">{founderData.title}</p>
            <div className="ab-founder-bar" />
            <p className="ab-founder-summary">{founderData.summary}</p>

            <div className="ab-founder-contacts">
              {[
                { icon: Mail, href: `mailto:${founderData.email}`, text: founderData.email },
                { icon: PhoneCall, href: `tel:${founderData.phone.replace(/\D/g, '')}`, text: founderData.phone },
                { icon: Network, href: null, text: founderData.location },
              ].map(({ icon: Icon, href, text }, i) => (
                <div key={i} className="ab-founder-contact-row">
                  <div className="ab-founder-contact-icon"><Icon size={16} color="#185FA5" /></div>
                  {href
                    ? <a href={href} className="ab-founder-contact-text ab-link">{text}</a>
                    : <span className="ab-founder-contact-text">{text}</span>}
                </div>
              ))}
            </div>

            <Link to="/about/founder" className="ab-btn-primary ab-btn-inline">
              Full Profile <ArrowRight size={16} />
            </Link>
          </div>
        </RevealCard>
      </section>

    

      

      {/* ══ CORE VALUES ════════════════════════════════════════ */}
      <section className="ab-section ab-section-faded">
        <SectionHeader
          tag="OUR PRINCIPLES"
          title="Our core values"
          subtitle="The principles that guide our approach and define who we are as an organisation."
        />
        <div className="ab-carousel-wrapper">
          <button className="ab-carousel-btn ab-carousel-btn-prev" onClick={prevValue}>
            <ChevronLeft size={24} />
          </button>
          <div className="ab-values-grid ab-carousel-grid">
            {values.slice(valueIndex, valueIndex + itemsPerSlide).map((v, i) => (
              <RevealCard key={i} className="ab-value-card" delay={i * 80}>
                <div className="ab-value-accent" />
                <h3 className="ab-value-title">{v.title}</h3>
                <p className="ab-value-desc">{v.description}</p>
              </RevealCard>
            ))}
          </div>
          <button className="ab-carousel-btn ab-carousel-btn-next" onClick={nextValue}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="ab-carousel-dots">
          {Array.from({ length: Math.ceil(values.length / itemsPerSlide) }).map((_, i) => (
            <button
              key={i}
              className={`ab-carousel-dot${i === Math.floor(valueIndex / itemsPerSlide) ? ' ab-carousel-dot-active' : ''}`}
              onClick={() => setValueIndex(i * itemsPerSlide)}
            />
          ))}
        </div>
      </section>

        {/* ══ FAQ ════════════════════════════════════════════════ */}
      <section className="ab-section ab-section-white">
        <SectionHeader tag="FAQ" title="Frequently asked questions" />
        <div className="ab-faq-box">
          {faqData.map((faq, i) => (
            <div key={i} className={`ab-faq-item${i < faqData.length - 1 ? ' ab-faq-divider' : ''}`}>
              <button
                className={`ab-faq-btn${activeFaq === i ? ' ab-faq-btn-open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span className={`ab-faq-q${activeFaq === i ? ' ab-faq-q-open' : ''}`}>{faq.question}</span>
                {activeFaq === i
                  ? <ChevronUp size={18} color="#185FA5" style={{ flexShrink: 0 }} />
                  : <ChevronDown size={18} color="#9CA3AF" style={{ flexShrink: 0 }} />}
              </button>
              {activeFaq === i && <div className="ab-faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ══ SCOPED STYLES ══════════════════════════════════════ */}
      <style>{`
        /* ── Tokens ──────────────────────────────────────────── */
        .ab-root {
          --ab-blue-deep:   #042C53;
          --ab-blue-mid:    #185FA5;
          --ab-blue-light:  #378ADD;
          --ab-blue-pale:   #85B7EB;
          --ab-blue-pal2:   #B5D4F4;
          --ab-blue-bg:     #E8F1FB;
          --ab-blue-bg2:    #EAF4FF;
          --ab-orange-500:  #F97316;
          --ab-white:       #ffffff;
          --ab-gray-50:     #F7F9FC;
          --ab-gray-100:    #EEF2F8;
          --ab-gray-200:    #D8E4F0;
          --ab-gray-400:    #8FA7C0;
          --ab-text-main:   #0D1F33;
          --ab-text-body:   #3D5470;
          --ab-text-muted:  #6A85A0;
          --ab-faded:       #F7F9FC;
          --ab-radius-sm:   8px;
          --ab-radius-md:   12px;
          --ab-radius-lg:   16px;
          --ab-radius-xl:   20px;
          --ab-shadow-card: 0 2px 12px rgba(24,95,165,0.07), 0 1px 3px rgba(0,0,0,0.05);
          --ab-shadow-hov:  0 8px 32px rgba(24,95,165,0.14), 0 2px 8px rgba(0,0,0,0.06);
          font-family: 'Satoshi', 'Inter', system-ui, sans-serif;
          background: var(--ab-white);
          color: var(--ab-text-main);
          overflow-x: hidden;
        }

        /* ── Scroll reveal ───────────────────────────────────── */
        .ab-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .ab-reveal.ab-revealed { opacity: 1; transform: translateY(0); }

        /* ── Utility ─────────────────────────────────────────── */
        .ab-orange { color: var(--ab-orange); }
        .ab-fw     { font-weight: 700; }
        .ab-section { padding: clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem); }
        .ab-section-white { background: var(--ab-white); }
        .ab-section-faded { background: var(--ab-faded); }

        /* ══ HERO ══════════════════════════════════════════════ */
        .ab-hero {
          position: relative;
          padding: clamp(5rem, 10vw, 8rem) clamp(1.25rem, 5vw, 3rem) clamp(4rem, 8vw, 6rem);
          overflow: hidden;
          color: #fff;
        }
        /* ── Hero background image ──────────────────────────── */
        .ab-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .ab-hero-bg-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }
        .ab-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4,44,83,0.88) 0%,
            rgba(24,95,165,0.82) 50%,
            rgba(12,68,124,0.86) 100%
          );
        }
        .ab-hero-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(60px);
        }
        .ab-blob-1 {
          width: 480px; height: 480px;
          top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(55,138,221,0.18) 0%, transparent 70%);
        }
        .ab-blob-2 {
          width: 300px; height: 300px;
          bottom: -80px; left: -60px;
          background: radial-gradient(circle, rgba(24,95,165,0.12) 0%, transparent 70%);
        }
        .ab-hero-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 56px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 48px;
        }

        /* ── Hero badge ──────────────────────────────────────── */
        .ab-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(55,138,221,0.18);
          border: 0.5px solid rgba(55,138,221,0.38);
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 22px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--ab-blue-pal2);
        }
        .ab-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--ab-blue-pale);
          flex-shrink: 0;
        }
        .ab-badge-animate { animation: ab-fade-up 0.6s ease forwards; opacity: 0; }
        .ab-text-animate  { animation: ab-fade-up 0.6s ease forwards; opacity: 0; }
        @keyframes ab-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ab-pulse { animation: ab-pulse 2s ease infinite; }
        @keyframes ab-pulse {
          0%,100% { opacity: 1; } 50% { opacity: 0.35; }
        }

        /* ── Hero heading ────────────────────────────────────── */
        .ab-hero-heading {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }
        .ab-hero-em {
          font-style: normal;
          color: var(--ab-blue-pale);
          position: relative;
        }
        .ab-hero-em::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--ab-blue-pale), transparent);
          border-radius: 2px;
        }
        .ab-hero-sub {
          font-size: 1.05rem;
          color: var(--ab-blue-pal2);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .ab-hero-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* ── Logo card ───────────────────────────────────────── */
        .ab-hero-logo-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .ab-logo-card {
          position: relative;
          background: #fff;
          border-radius: 50%;
          padding: 2.5rem;
          box-shadow: 0 24px 60px rgba(4,44,83,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ab-logo-img { width: 200px; height: auto; display: block; object-fit: contain; border-radius: 50%; }

        /* ── Wave ────────────────────────────────────────────── */
        .ab-wave-wrap {
          position: absolute;
          bottom: 0; left: 0; width: 100%;
          line-height: 0;
        }
        .ab-wave-wrap svg { display: block; width: 100%; height: 80px; }

        /* ── Buttons ─────────────────────────────────────────── */
        .ab-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--ab-white);
          color: var(--ab-blue-mid);
          padding: 12px 24px;
          border-radius: var(--ab-radius-md);
          font-size: 0.9rem; font-weight: 700;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          cursor: pointer;
        }
        .ab-btn-primary:hover {
          background: var(--ab-blue-bg);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .ab-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: var(--ab-blue-pal2);
          padding: 12px 24px;
          border-radius: var(--ab-radius-md);
          font-size: 0.9rem; font-weight: 600;
          border: 2px solid rgba(55,138,221,0.4);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          cursor: pointer;
        }
        .ab-btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(55,138,221,0.8);
        }
        .ab-btn-inline { margin-top: 28px; color: var(--ab-blue-mid); background: var(--ab-white); }

        /* ── Sections & layout ───────────────────────────────── */
        .ab-section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .ab-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--ab-blue-bg);
          border: 1px solid var(--ab-blue-bg2);
          color: var(--ab-blue-mid);
          font-size: 0.71rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 20px;
          margin-bottom: 0.9rem;
        }
        .ab-eyebrow-pill-light {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.9);
        }
        .ab-eyebrow-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--ab-orange-500);
        }
        .ab-eyebrow-dot-light { background: var(--ab-blue-pale); }
        .ab-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--ab-text-main);
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }
        .ab-section-title-light { color: #fff; }
        .ab-title-bar {
          width: 52px; height: 3px;
          background: linear-gradient(90deg, var(--ab-blue-mid), var(--ab-blue-light));
          border-radius: 2px;
          margin: 0 auto 1rem;
        }
        .ab-title-bar-light {
          background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(55,138,221,0.5));
        }
        .ab-section-sub {
          font-size: 0.97rem;
          color: var(--ab-text-muted);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.75;
        }
        .ab-section-sub-light { color: rgba(181,212,244,0.75); }

        /* ── Two column layout ───────────────────────────────── */
        .ab-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ab-two-col-reverse { }
        .ab-half { min-width: 0; }

        /* ── Image frame ─────────────────────────────────────── */
        .ab-img-frame { position: relative; }
        .ab-img-blob-tl, .ab-img-blob-tr, .ab-img-blob-bl, .ab-img-blob-br {
          position: absolute;
          width: 120px; height: 120px;
          border-radius: 50%;
          opacity: 0.45;
        }
        .ab-img-blob-tl { top: -20px;    left: -20px;   background: var(--ab-blue-bg); }
        .ab-img-blob-br { bottom: -20px; right: -20px;  background: var(--ab-blue-bg2); }
        .ab-img-blob-tr { top: -20px;    right: -20px;  background: var(--ab-blue-bg); }
        .ab-img-blob-bl { bottom: -20px; left: -20px;   background: var(--ab-blue-bg2); }
        .ab-section-img {
          position: relative;
          z-index: 1;
          width: 100%;
          border-radius: var(--ab-radius-lg);
          box-shadow: 0 16px 48px rgba(24,95,165,0.14), 0 2px 8px rgba(0,0,0,0.06);
          display: block;
        }
        .ab-img-chip {
          position: absolute;
          z-index: 2;
          background: var(--ab-blue-mid);
          color: #fff;
          font-size: 12px; font-weight: 600;
          padding: 8px 16px;
          border-radius: var(--ab-radius-sm);
          box-shadow: 0 4px 12px rgba(24,95,165,0.35);
        }
        .ab-img-chip-tl { top: 16px; left: 16px; }
        .ab-img-chip-br { bottom: 16px; right: 16px; }

        /* ── Who we are text ─────────────────────────────────── */
        .ab-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0;
          background: var(--ab-blue-bg);
          border: 1px solid var(--ab-blue-bg2);
          border-radius: 100px;
          padding: 2px 4px 2px 4px;
          margin-bottom: 20px;
        }
        .ab-badge-pill-inner {
          background: var(--ab-blue-mid);
          color: #fff;
          font-size: 11px; font-weight: 700;
          padding: 4px 14px;
          border-radius: 100px;
          letter-spacing: 0.08em;
        }
        .ab-badge-pill-sub {
          color: var(--ab-blue-mid);
          font-size: 11px; font-weight: 600;
          padding: 0 12px;
        }
        .ab-text-stack {
          display: flex; flex-direction: column; gap: 14px;
          margin-bottom: 24px;
        }
        .ab-text-stack p {
          font-size: 0.97rem;
          color: var(--ab-text-body);
          line-height: 1.75;
        }
        .ab-link-arrow {
          display: inline-flex; align-items: center; gap: 4px;
          color: var(--ab-blue-mid);
          font-size: 0.9rem; font-weight: 600;
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
        }
        .ab-link-arrow:hover { color: var(--ab-blue-light); gap: 8px; }
        .ab-link { color: var(--ab-blue-mid); text-decoration: none; } 
        .ab-link:hover { color: var(--ab-blue-light); }
        .ab-link-chevron { transition: margin-left 0.2s; }

        /* ── Mission & Vision ────────────────────────────────── */
        .ab-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .ab-mission-card {
          background: var(--ab-white);
          border: 1.5px solid var(--ab-blue-bg2);
          border-top: 4px solid var(--ab-blue-mid);
          border-radius: var(--ab-radius-lg);
          padding: 36px 28px;
          box-shadow: var(--ab-shadow-card);
          transition: transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .ab-mission-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--ab-shadow-hov);
        }
        .ab-mission-icon-wrap {
          width: 56px; height: 56px;
          background: var(--ab-blue-mid);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 4px 14px rgba(24,95,165,0.35);
        }
        .ab-mission-title {
          font-size: 1.25rem; font-weight: 700;
          color: var(--ab-blue-mid);
          margin-bottom: 12px;
        }
        .ab-mission-body {
          font-size: 0.92rem;
          color: var(--ab-gray-400);
          line-height: 1.75;
        }

        /* ── What we do ──────────────────────────────────────── */
        .ab-sub-heading {
          font-size: 1.7rem; font-weight: 800;
          color: var(--ab-text-main);
          margin-bottom: 12px;
        }
        .ab-sub-body {
          font-size: 0.97rem;
          color: var(--ab-gray-400);
          line-height: 1.75;
          margin-bottom: 24px;
        }
        .ab-services-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .ab-mini-card {
          background: var(--ab-white);
          border: 1.5px solid var(--ab-gray-200);
          border-radius: var(--ab-radius-lg);
          padding: 20px;
          box-shadow: var(--ab-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, background 0.2s, transform 0.2s;
          cursor: default;
        }
        .ab-mini-card:hover {
          border-color: var(--ab-blue-mid);
          background: var(--ab-blue-bg);
          box-shadow: var(--ab-shadow-hov);
          transform: translateY(-3px);
        }
        .ab-mini-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: var(--ab-blue-bg);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
          transition: background 0.2s;
        }
        .ab-mini-card:hover .ab-mini-icon-wrap { background: var(--ab-blue-bg2); }
        .ab-mini-title {
          font-size: 1rem; font-weight: 700;
          color: var(--ab-text-main);
          margin-bottom: 6px;
        }
        .ab-mini-desc {
          font-size: 0.84rem;
          color: var(--ab-gray-400);
          line-height: 1.65;
        }

        /* ── Founder ─────────────────────────────────────────── */
        .ab-founder-card {
          display: flex;
          align-items: flex-start;
          gap: 4rem;
          background: linear-gradient(135deg, var(--ab-blue-bg), var(--ab-blue-bg2));
          border: 1.5px solid var(--ab-blue-bg2);
          border-radius: var(--ab-radius-xl);
          padding: clamp(2rem, 4vw, 3.5rem);
          box-shadow: var(--ab-shadow-card);
          max-width: 1000px;
          margin: 0 auto;
        }
        .ab-founder-photo-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .ab-founder-ring {
          position: absolute;
          width: 170px; height: 170px;
          border: 4px solid var(--ab-blue-mid);
          border-radius: 50%;
          transform: rotate(-6deg);
        }
        .ab-founder-img {
          width: 160px; height: 160px;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          border: 3px solid #fff;
          box-shadow: 0 8px 28px rgba(24,95,165,0.25);
          margin-bottom: 20px;
        }
        .ab-founder-socials {
          display: flex; gap: 10px;
          margin-top: 12px;
        }
        .ab-social-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid var(--ab-blue-bg2);
          display: flex; align-items: center; justify-content: center;
          color: var(--ab-blue-mid);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          box-shadow: 0 2px 8px rgba(24,95,165,0.1);
        }
        .ab-social-btn:hover {
          background: var(--ab-blue-mid);
          color: #fff;
          border-color: var(--ab-blue-mid);
        }
        .ab-founder-info { flex: 1; min-width: 0; }
        .ab-founder-name {
          font-size: 1.75rem; font-weight: 800;
          color: var(--ab-text-main);
          margin-bottom: 4px;
        }
        .ab-founder-role {
          font-size: 1rem; font-weight: 600;
          color: var(--ab-blue-mid);
          margin-bottom: 16px;
        }
        .ab-founder-bar {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, var(--ab-blue-mid), var(--ab-blue-light));
          border-radius: 2px;
          margin-bottom: 18px;
        }
        .ab-founder-summary {
          font-size: 0.97rem;
          color: var(--ab-text-body);
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .ab-founder-contacts {
          display: flex; flex-direction: column; gap: 12px;
          margin-bottom: 4px;
        }
        .ab-founder-contact-row {
          display: flex; align-items: center; gap: 10px;
        }
        .ab-founder-contact-icon {
          width: 34px; height: 34px;
          background: var(--ab-blue-bg);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ab-founder-contact-text {
          font-size: 0.9rem;
          color: var(--ab-text-body);
        }

        /* ── FAQ ─────────────────────────────────────────────── */
        .ab-faq-box {
          max-width: 760px;
          margin: 0 auto;
          background: var(--ab-white);
          border: 1.5px solid var(--ab-blue-bg2);
          border-radius: var(--ab-radius-lg);
          overflow: hidden;
          box-shadow: var(--ab-shadow-card);
        }
        .ab-faq-divider { border-bottom: 1px solid var(--ab-blue-bg); }
        .ab-faq-btn {
          width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 24px;
          background: transparent;
          border: none; cursor: pointer;
          gap: 14px; text-align: left;
          transition: background 0.2s;
        }
        .ab-faq-btn.ab-faq-btn-open { background: var(--ab-blue-bg); }
        .ab-faq-q {
          font-size: 0.95rem; font-weight: 600; line-height: 1.5;
          color: var(--ab-text-main);
          transition: color 0.2s;
        }
        .ab-faq-q.ab-faq-q-open { color: var(--ab-blue-mid); }
        .ab-faq-answer {
          padding: 0 24px 18px;
          font-size: 0.9rem;
          color: var(--ab-gray-400);
          line-height: 1.75;
        }

        /* ── Statistics ──────────────────────────────────────── */
        .ab-stats-section {
          position: relative;
          background: linear-gradient(135deg, #042C53 0%, #185FA5 55%, #0C447C 100%);
          padding: clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem);
          overflow: hidden;
        }
        .ab-stats-blob {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(55,138,221,0.13) 0%, transparent 70%);
          top: -150px; right: -100px;
          pointer-events: none;
          filter: blur(50px);
        }
        .ab-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .ab-stat-card {
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(55,138,221,0.22);
          border-radius: var(--ab-radius-lg);
          padding: 2rem 1.5rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: background 0.25s, transform 0.22s;
          cursor: default;
        }
        .ab-stat-card:hover {
          background: rgba(255,255,255,0.13);
          transform: translateY(-4px);
        }
        .ab-stat-icon-wrap {
          display: flex; justify-content: center;
          margin-bottom: 14px;
        }
        .ab-stat-num {
          display: block;
          font-size: 2.4rem; font-weight: 800;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .ab-stat-label {
          display: block;
          font-size: 0.82rem;
          color: var(--ab-blue-pale);
          letter-spacing: 0.04em;
        }

        /* ── carousel ── */
        .ab-carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 0 auto;
          max-width: 1200px;
        }
        .ab-carousel-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--ab-blue-mid), var(--ab-blue-deep));
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          color: #fff;
          box-shadow: 0 4px 14px rgba(24,95,165,0.3);
        }
        .ab-carousel-btn:hover {
          background: linear-gradient(135deg, var(--ab-blue-deep), #0C447C);
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(24,95,165,0.4);
        }
        .ab-carousel-btn:active {
          transform: scale(0.95);
        }
        .ab-carousel-grid {
          flex: 1;
          overflow: hidden;
        }
        .ab-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        .ab-carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--ab-gray-300);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ab-carousel-dot:hover {
          background: var(--ab-blue-light);
          transform: scale(1.2);
        }
        .ab-carousel-dot.ab-carousel-dot-active {
          background: linear-gradient(135deg, var(--ab-blue-mid), var(--ab-blue-deep));
          width: 32px;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(24,95,165,0.3);
        }

        /* ── Core Values ─────────────────────────────────────── */
        .ab-values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .ab-value-card {
          background: var(--ab-white);
          border: 1.5px solid var(--ab-gray-200);
          border-left: 4px solid var(--ab-blue-mid);
          border-radius: var(--ab-radius-lg);
          padding: 28px 24px;
          box-shadow: var(--ab-shadow-card);
          transition: border-color 0.25s, box-shadow 0.25s, background 0.2s, transform 0.22s;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .ab-value-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--ab-blue-mid), var(--ab-blue-light));
        }
        .ab-value-card:hover {
          background: var(--ab-blue-bg);
          border-color: var(--ab-blue-light);
          box-shadow: var(--ab-shadow-hov);
          transform: translateY(-4px);
        }
        .ab-value-accent { display: none; }
        .ab-value-title {
          font-size: 1.1rem; font-weight: 700;
          color: var(--ab-blue-mid);
          margin-bottom: 10px;
        }
        .ab-value-desc {
          font-size: 0.9rem;
          color: var(--ab-gray-400);
          line-height: 1.75;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media (max-width: 960px) {
          .ab-hero-layout   { grid-template-columns: 1fr; gap: 32px; }
          .ab-hero-logo-col { display: none; }
          .ab-two-col       { grid-template-columns: 1fr; gap: 2.5rem; }
          .ab-two-col-reverse > :first-child { order: 2; }
          .ab-two-col-reverse > :last-child  { order: 1; }
          .ab-mission-grid  { grid-template-columns: 1fr; }
          .ab-values-grid   { grid-template-columns: 1fr 1fr; }
          .ab-founder-card  { flex-direction: column; align-items: center; gap: 2rem; }
        }
        @media (max-width: 600px) {
          .ab-services-mini-grid { grid-template-columns: 1fr; }
          .ab-hero-btns { flex-direction: column; }
          .ab-mission-grid  { grid-template-columns: 1fr 1fr; }
          .ab-values-grid   { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </div>
  );
};

export default About;