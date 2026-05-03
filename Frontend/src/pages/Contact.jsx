import React, { useState, useEffect, useRef } from 'react';
import {
    Phone, Mail, MapPin, MessageCircle,
    Clock, Zap, Globe, Calendar, Wrench, RefreshCw,
    ArrowRight, ChevronDown, ChevronUp, Send, Check
} from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Cnt from '../assets/Axep1.jpg';
import { Link } from 'react-router-dom';
import ContactForm from '../components/Contact/ContactForm';
import useSEO from '../hooks/useSEO';

/* ══════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════ */

const infoCards = [
    {
        icon: Phone,
        title: 'Call Us 24/7',
        lines: ['+91 88200 66999', '+91 74390 04545'],
        action: () => { window.location.href = 'tel:8820066999'; },
        color: '#E8F1FB',
        iconColor: '#185FA5',
    },
    {
        icon: Mail,
        title: 'Email Us',
        lines: ['info@zenitech.in'],
        action: () => { window.location.href = 'mailto:info@zenitech.in'; },
        color: '#EAF4FF',
        iconColor: '#185FA5',
    },
    {
        icon: MapPin,
        title: 'Our Office',
        lines: ['Bengaluru, India'],
        action: () => { window.open('https://www.google.com/maps/place/ZENITECH+TECHNOLOGIES+PRIVATE+LIMITED/@13.033567,77.628973,16z/data=!4m6!3m5!1s0x2efa6a1b2571d453:0x6aa2f619aaa4d5aa!8m2!3d13.0335666!4d77.6289726!16s%2Fg%2F11tjs5xq43?hl=en&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D'); },
        color: '#E8F1FB',
        iconColor: '#185FA5',
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        lines: ['+91 88200 66999'],
        action: () => { window.open('https://wa.me/918820066999', '_blank'); },
        color: '#EAF4FF',
        iconColor: '#185FA5',
    },
    {
        icon: FaLinkedin,
        title: 'LinkedIn',
        lines: ['Follow us'],
        action: () => { window.open('https://www.linkedin.com/company/zenitech-technologies/posts/?feedView=all', '_blank'); },
        color: '#EAF4FF',
        iconColor: '#0077B5',
    },
];

const offices = [
    {
        name: 'Bengaluru Office',
        address: 'Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bengaluru – 560045, India',
        mapUrl: 'https://www.google.com/maps?ll=13.033567,77.628973&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=7683974504345032106',
    }
];

const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/company/zenitech-technologies/posts/?feedView=all' },
    { name: 'WhatsApp', icon: <FaWhatsapp size={18} />, url: 'https://wa.me/918820066999' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:info@zenitech.in' },
    { name: 'Call', icon: <Phone size={18} />, url: 'tel:+918820066999' },
];

const faqs = [
    { icon: Clock, question: 'What are your business hours?', answer: 'Monday to Friday 9AM to 6PM.' },
    { icon: Zap, question: 'How quickly can I expect a response?', answer: 'We respond within 2-4 hours during business days. For urgent matters, our support line is available round the clock.' },
    { icon: Globe, question: 'Do you offer remote services?', answer: 'Yes, we serve clients globally with remote support, virtual consultations, and cloud-delivered solutions.' },
    { icon: Calendar, question: 'How can I schedule a consultation?', answer: 'Use our contact form, email, or phone call to schedule a consultation at a time that works best for you.' },
    { icon: Wrench, question: 'What services do you offer?', answer: 'We provide comprehensive solutions including cybersecurity & cloud computing' },
    { icon: RefreshCw, question: 'Do you provide 24/7 support?', answer: 'Yes, our technical support team is available 24/7 to assist you with any critical issues or incidents.' },
];

/* ══════════════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════════════ */

function useReveal(threshold = 0.12) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('ct-revealed'); obs.disconnect(); } },
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
        <div ref={ref} className={`ct-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════ */

const Contact = () => {
    useSEO({
        title: 'Contact Us',
        description:
            'Contact Zenitech Technologies for cybersecurity & cloud computing solutions. Call +91 88200 66999, email info@zenitech.in, or visit our Bengaluru office. 24/7 support available.',
        canonical: 'https://www.zenitech.in/contact',
        keywords:
            'contact Zenitech, Zenitech Technologies contact, cybersecurity company Bengaluru, cloud computing company contact, IT services contact India',
        breadcrumbs: [
            { name: 'Home', url: 'https://www.zenitech.in/' },
            { name: 'Contact', url: 'https://www.zenitech.in/contact' },
        ],
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
            },
        ],
    });

    const [activeFaq, setActiveFaq] = useState(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (el) setTimeout(() => el.classList.add('ct-hero-in'), 60);
    }, []);

    return (
        <div className="ct-root">

            {/* ══ HERO BANNER ════════════════════════════════════════ */}
            <section className="ct-hero" ref={heroRef}>
                <div className="ct-hero-bg">
                    <img src={Cnt} alt="Contact Background" className="ct-hero-bg-img" />
                    <div className="ct-hero-overlay opacity-40" />
                </div>
                <div className="ct-hero-blob ct-blob-1" />
                <div className="ct-hero-blob ct-blob-2" />

                <div className="ct-hero-inner">
                    <div className="ct-badge ct-badge-animate">
                        <span className="ct-badge-dot ct-pulse" />
                        <span className='font-bold text-white'>GET IN TOUCH</span>
                        <span className="ct-badge-dot ct-pulse" />
                    </div>
                    <h1 className="ct-hero-heading ct-text-animate" style={{ animationDelay: '0.1s' }}>
                        Contact <em className="ct-hero-em">us</em>
                    </h1>
                    <p className="ct-hero-sub ct-text-animate font-bold text-white" style={{ animationDelay: '0.2s' }}>
                        We'd love to hear from you. Our team is always ready to assist — reach out through any channel below.
                    </p>
                    {/* Breadcrumb */}
                    <div className="ct-breadcrumb ct-text-animate" style={{ animationDelay: '0.3s' }}>
                        <Link to="/" className="ct-bread-link">Home</Link>
                        <span className="ct-bread-sep">›</span>
                        <span className="ct-bread-current">Contact</span>
                    </div>
                </div>
            </section>

            {/* ══ INFO CARDS ═════════════════════════════════════════ */}
            <div className="ct-cards-strip">
                {infoCards.map((card, i) => (
                    <RevealCard key={i} className={`ct-info-card${card.action ? ' ct-info-card-clickable' : ''}`} delay={i * 80}>
                        <div onClick={card.action} style={{ cursor: card.action ? 'pointer' : 'default' }}>
                            <div className="ct-info-card-icon" style={{ background: card.color }}>
                                <card.icon size={22} color={card.iconColor} />
                            </div>
                            <h3 className="ct-info-card-title">{card.title}</h3>
                            {card.lines.map((l, j) => <p key={j} className="ct-info-card-line">{l}</p>)}
                            {card.action && (
                                <span className="ct-info-card-arrow">
                                    <ArrowRight size={13} />
                                </span>
                            )}
                        </div>
                    </RevealCard>
                ))}
            </div>

            {/* ══ MAIN SECTION: INFO LEFT + FORM RIGHT ═══════════════ */}
            <section className="ct-section ct-section-white">
                <div className="ct-main-grid">

                    {/* LEFT — contact details */}
                    <RevealCard className="ct-left-col">
                        <div className="ct-eyebrow-row">
                            <span className="ct-eyebrow-line" />
                            <span className="ct-eyebrow">CONTACT INFORMATION</span>
                            <span className="ct-eyebrow-line" />
                        </div>
                        <h2 className="ct-col-heading">How to reach us</h2>
                        <p className="ct-col-sub">
                            Reach out through any of these channels. We're available to answer your questions round the clock.
                        </p>

                        {/* Contact blocks */}
                        <div className="ct-contact-blocks">
                            {[
                                {
                                    icon: Phone, label: 'PHONE',
                                    content: (
                                        <>
                                            <button className="ct-contact-val ct-contact-link" onClick={() => window.location.href = 'tel:8820066999'}>+91 88200 66999</button>
                                            <button className="ct-contact-val ct-contact-link" onClick={() => window.location.href = 'tel:7439004545'}>+91 74390 04545</button>
                                        </>
                                    )
                                },
                                {
                                    icon: MessageCircle, label: 'WHATSAPP',
                                    content: <button className="ct-contact-val ct-contact-link" onClick={() => window.open('https://wa.me/918820066999', '_blank')}>+91 88200 66999</button>
                                },
                                {
                                    icon: Mail, label: 'EMAIL',
                                    content: <button className="ct-contact-val ct-contact-link" onClick={() => window.location.href = 'mailto:info@zenitech.in'}>info@zenitech.in</button>
                                },
                                {
                                    icon: MapPin, label: 'OFFICES',
                                    content: (
                                        <div className="ct-offices">
                                            {offices.map((o, i) => (
                                                <a key={i} href={o.mapUrl} target="_blank" rel="noopener noreferrer" className="ct-office-block">
                                                    <span className="ct-office-name">{o.name}</span>
                                                    <span className="ct-office-addr">{o.address}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )
                                },
                            ].map(({ icon: Icon, label, content }, i) => (
                                <div key={i} className="ct-contact-block">
                                    <div className="ct-contact-block-icon"><Icon size={16} color="#185FA5" /></div>
                                    <div>
                                        <p className="ct-contact-block-label">{label}</p>
                                        {content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="ct-socials">
                            <p className="ct-socials-label">Connect with us</p>
                            <div className="ct-social-row">
                                {socialLinks.map((s, i) => (
                                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                                        className="ct-social-btn" aria-label={s.name}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </RevealCard>

                    {/* RIGHT — form */}
                    <RevealCard className="ct-right-col" delay={100}>
                        <div className="ct-eyebrow-row">
                            <span className="ct-eyebrow-line" />
                            <span className="ct-eyebrow">SEND A MESSAGE</span>
                            <span className="ct-eyebrow-line" />
                        </div>
                        <h2 className="ct-col-heading">We'd love to hear from you</h2>
                        <p className="ct-col-sub">Fill in the form below and we'll get back to you within 24 hours.</p>
                        <ContactForm />
                    </RevealCard>

                </div>
            </section>

            {/* ══ MAP ════════════════════════════════════════════════ */}
            <section className="ct-section ct-section-gray">
                <div className="ct-map-header">
                    <div className="ct-eyebrow-row ct-eyebrow-row-center">
                        <span className="ct-eyebrow-line" />
                        <span className="ct-eyebrow">FIND US</span>
                        <span className="ct-eyebrow-line" />
                    </div>
                    <h2 className="ct-section-title ct-center">Visit our office</h2>
                </div>

                <RevealCard className="ct-map-wrap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1789978535837!2d77.62639769999999!3d13.0335666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1789d5c92d9f%3A0x6aa2f619aaa4d5aa!2sZenitech%20Solutions!5e0!3m2!1sen!2sin!4v1715862154275!5m2!1sen!2sin"
                        width="100%" height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Zenitech Bangalore Office"
                    />
                </RevealCard>

                <div className="ct-map-links">
                    {offices.map((o, i) => (
                        <a key={i} href={o.mapUrl} target="_blank" rel="noopener noreferrer" className="ct-map-link">
                            <MapPin size={14} />
                            {o.name} — Get directions
                        </a>
                    ))}
                </div>
            </section>

            {/* ══ FAQ ════════════════════════════════════════════════ */}
            <section className="ct-section ct-section-white">
                <div className="ct-faq-layout">

                    {/* Left sticky label */}
                    <div className="ct-faq-left">
                        <RevealCard>
                            <div className="ct-eyebrow-row">
                                <span className="ct-eyebrow-line" />
                                <span className="ct-eyebrow">FAQ</span>
                            </div>
                            <h2 className="ct-section-title ct-faq-title">Frequently asked questions</h2>
                            <p className="ct-col-sub">Quick answers to common questions about our services and processes.</p>
                            <Link to="/appointment" className="ct-btn-primary ct-btn-sm ct-faq-cta">
                                Still have questions? <ArrowRight size={14} />
                            </Link>
                        </RevealCard>
                    </div>

                    {/* Right accordion */}
                    <div className="ct-faq-right">
                        {faqs.map((faq, i) => (
                            <RevealCard key={i} className={`ct-faq-item${i < faqs.length - 1 ? ' ct-faq-divider' : ''}`} delay={i * 60}>
                                <button
                                    className={`ct-faq-btn${activeFaq === i ? ' ct-faq-btn-open' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                >
                                    <div className="ct-faq-btn-left">
                                        <div className="ct-faq-icon-wrap">
                                            <faq.icon size={15} color={activeFaq === i ? '#185FA5' : '#8FA7C0'} />
                                        </div>
                                        <span className={`ct-faq-q${activeFaq === i ? ' ct-faq-q-open' : ''}`}>{faq.question}</span>
                                    </div>
                                    {activeFaq === i
                                        ? <ChevronUp size={17} color="#185FA5" style={{ flexShrink: 0 }} />
                                        : <ChevronDown size={17} color="#8FA7C0" style={{ flexShrink: 0 }} />}
                                </button>
                                {activeFaq === i && <div className="ct-faq-answer">{faq.answer}</div>}
                            </RevealCard>
                        ))}
                    </div>

                </div>
            </section>

            {/* ══ BOTTOM CTA STRIP ═══════════════════════════════════ */}
            <section className="ct-cta-strip">
                <div className="ct-cta-blob" />
                <div className="ct-cta-inner">
                    <h2 className="ct-cta-heading">Ready to start your project?</h2>
                    <p className="ct-cta-sub">Let's discuss how Zenitech Technologies can drive your digital transformation.</p>
                    <div className="ct-cta-btns">
                        <a href="mailto:info@zenitech.in" className="ct-btn-white">Email Us ↗</a>
                        <a href="tel:+918820066999" className="ct-btn-ghost-light">Call Now</a>
                    </div>
                </div>
            </section>

            {/* ══ SCOPED STYLES ══════════════════════════════════════ */}
            <style>{`
        /* ── Tokens ──────────────────────────────────────────── */
        .ct-root {
          --ct-blue-deep:   #042C53;
          --ct-blue-mid:    #185FA5;
          --ct-blue-light:  #378ADD;
          --ct-blue-pale:   #85B7EB;
          --ct-blue-pal2:   #B5D4F4;
          --ct-blue-bg:     #E8F1FB;
          --ct-blue-bg2:    #EAF4FF;
          --ct-white:       #ffffff;
          --ct-gray-50:     #F7F9FC;
          --ct-gray-100:    #EEF2F8;
          --ct-gray-200:    #D8E4F0;
          --ct-gray-400:    #8FA7C0;
          --ct-text-main:   #0D1F33;
          --ct-text-body:   #3D5470;
          --ct-text-muted:  #6A85A0;
          --ct-radius-sm:   8px;
          --ct-radius-md:   12px;
          --ct-radius-lg:   16px;
          --ct-radius-xl:   20px;
          --ct-shadow-card: 0 2px 12px rgba(24,95,165,0.07), 0 1px 3px rgba(0,0,0,0.05);
          --ct-shadow-hov:  0 8px 32px rgba(24,95,165,0.14), 0 2px 8px rgba(0,0,0,0.06);
          font-family: 'Satoshi', 'Inter', system-ui, sans-serif;
          color: var(--ct-text-main);
          background: var(--ct-white);
          overflow-x: hidden;
        }

        /* ── Reveal ──────────────────────────────────────────── */
        .ct-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .ct-reveal.ct-revealed { opacity: 1; transform: translateY(0); }

        /* ══ HERO ══════════════════════════════════════════════ */
        .ct-hero {
          position: relative;
          height: clamp(340px, 50vw, 480px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .ct-hero-bg {
          position: absolute;
          inset: 0;
        }
        .ct-hero-bg-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .ct-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(4,44,83,0.88) 0%, rgba(24,95,165,0.75) 55%, rgba(12,68,124,0.82) 100%);
        }
        .ct-hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          pointer-events: none;
        }
        .ct-blob-1 {
          width: 420px; height: 420px;
          top: -120px; right: -80px;
          background: radial-gradient(circle, rgba(55,138,221,0.2) 0%, transparent 70%);
        }
        .ct-blob-2 {
          width: 260px; height: 260px;
          bottom: -60px; left: -40px;
          background: radial-gradient(circle, rgba(24,95,165,0.15) 0%, transparent 70%);
        }
        .ct-hero-inner {
          position: relative;
          z-index: 1;
          text-align: center;
          color: #fff;
          padding: 0 24px;
        }

        /* ── Badge ───────────────────────────────────────────── */
        .ct-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(55,138,221,0.18);
          border: 0.5px solid rgba(55,138,221,0.38);
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 18px;
          font-size: 11.5px; font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--ct-blue-pal2);
        }
        .ct-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--ct-blue-pale);
          flex-shrink: 0;
        }
        .ct-badge-animate { animation: ct-fade-up 0.6s ease forwards; opacity: 0; }
        .ct-text-animate  { animation: ct-fade-up 0.6s ease forwards; opacity: 0; }
        @keyframes ct-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ct-pulse { animation: ct-pulse 2s ease infinite; }
        @keyframes ct-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }

        .ct-hero-heading {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }
        .ct-hero-em {
          font-style: normal;
          color: var(--ct-blue-pale);
        }
        .ct-hero-sub {
          font-size: 1.05rem;
          color: var(--ct-blue-pal2);
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 18px;
        }
        .ct-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12.5px;
          color: rgba(181,212,244,0.6);
        }
        .ct-bread-link {
          color: rgba(181,212,244,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ct-bread-link:hover { color: var(--ct-blue-pale); }
        .ct-bread-sep { opacity: 0.5; }
        .ct-bread-current { color: var(--ct-blue-pale); font-weight: 500; }

        /* ══ INFO CARDS STRIP ══════════════════════════════════ */
        .ct-cards-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0;
          background: var(--ct-white);
          border-bottom: 1px solid var(--ct-gray-100);
          box-shadow: 0 4px 24px rgba(24,95,165,0.08);
        }
        .ct-info-card {
          padding: 28px 24px;
          border-right: 1px solid var(--ct-gray-100);
          transition: background 0.2s;
        }
        .ct-info-card:last-child { border-right: none; }
        .ct-info-card-clickable { cursor: pointer; }
        .ct-info-card-clickable:hover { background: var(--ct-blue-bg); }
        .ct-info-card-icon {
          width: 48px; height: 48px;
          border-radius: var(--ct-radius-md);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
          transition: transform 0.2s;
        }
        .ct-info-card-clickable:hover .ct-info-card-icon { transform: scale(1.08); }
        .ct-info-card-title {
          font-size: 13px; font-weight: 700;
          color: var(--ct-text-main);
          margin-bottom: 6px;
        }
        .ct-info-card-line {
          font-size: 13px;
          color: var(--ct-text-body);
          line-height: 1.6;
        }
        .ct-info-card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11.5px; font-weight: 600;
          color: var(--ct-blue-mid);
          margin-top: 6px;
        }

        /* ══ SECTIONS ══════════════════════════════════════════ */
        .ct-section {
          padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.25rem, 5vw, 3rem);
        }
        .ct-section-white { background: var(--ct-white); }
        .ct-section-gray  { background: var(--ct-gray-50); }

        /* ── Eyebrow ─────────────────────────────────────────── */
        .ct-eyebrow-row {
          display: flex; align-items: center;
          gap: 10px; margin-bottom: 12px;
        }
        .ct-eyebrow-row-center { justify-content: center; }
        .ct-eyebrow-line {
          display: block; width: 28px; height: 2px;
          background: var(--ct-blue-light); border-radius: 2px;
        }
        .ct-eyebrow {
          font-size: 10.5px; font-weight: 700;
          color: var(--ct-blue-light);
          letter-spacing: 0.14em;
        }

        /* ── Main grid ───────────────────────────────────────── */
        .ct-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ct-col-heading {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 800;
          color: var(--ct-text-main);
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .ct-col-sub {
          font-size: 0.95rem;
          color: var(--ct-text-body);
          line-height: 1.75;
          margin-bottom: 28px;
        }

        /* ── Contact blocks ──────────────────────────────────── */
        .ct-contact-blocks {
          display: flex; flex-direction: column; gap: 20px;
          margin-bottom: 28px;
        }
        .ct-contact-block {
          display: flex; gap: 14px; align-items: flex-start;
        }
        .ct-contact-block-icon {
          width: 36px; height: 36px;
          background: var(--ct-blue-bg);
          border-radius: var(--ct-radius-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ct-contact-block-label {
          font-size: 10px; font-weight: 700;
          color: var(--ct-blue-mid);
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }
        .ct-contact-val {
          display: block;
          font-size: 14px;
          color: var(--ct-text-body);
          line-height: 1.7;
        }
        .ct-contact-link {
          background: none; border: none; cursor: pointer;
          text-align: left; padding: 0;
          transition: color 0.2s;
        }
        .ct-contact-link:hover { color: var(--ct-blue-mid); }

        /* ── Offices ─────────────────────────────────────────── */
        .ct-offices { display: flex; flex-direction: column; gap: 10px; }
        .ct-office-block {
          display: block;
          padding: 10px 12px;
          border-radius: var(--ct-radius-sm);
          border: 1px solid var(--ct-gray-200);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .ct-office-block:hover {
          border-color: var(--ct-blue-light);
          background: var(--ct-blue-bg);
        }
        .ct-office-name {
          display: block;
          font-size: 12.5px; font-weight: 600;
          color: var(--ct-blue-mid);
          margin-bottom: 3px;
        }
        .ct-office-addr {
          display: block;
          font-size: 12px;
          color: var(--ct-text-muted);
          line-height: 1.55;
        }

        /* ── Socials ─────────────────────────────────────────── */
        .ct-socials { border-top: 1px solid var(--ct-gray-100); padding-top: 20px; }
        .ct-socials-label {
          font-size: 11px; font-weight: 700;
          color: var(--ct-text-muted);
          letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 12px;
        }
        .ct-social-row { display: flex; gap: 10px; }
        .ct-social-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: var(--ct-blue-bg);
          border: 1px solid var(--ct-gray-200);
          display: flex; align-items: center; justify-content: center;
          color: var(--ct-blue-mid);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ct-social-btn:hover {
          background: var(--ct-blue-mid);
          border-color: var(--ct-blue-mid);
          color: #fff;
        }

        /* ── Right col (form bg) ─────────────────────────────── */
        .ct-right-col {
          background: var(--ct-gray-50);
          border: 1px solid var(--ct-gray-200);
          border-radius: var(--ct-radius-xl);
          padding: 36px;
          box-shadow: var(--ct-shadow-card);
        }

        /* ══ FORM ══════════════════════════════════════════════ */
        .ct-form { margin-top: 8px; }
        .ct-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        .ct-field { display: flex; flex-direction: column; gap: 5px; }
        .ct-field-full { grid-column: 1 / -1; }
        .ct-field-label {
          font-size: 11.5px; font-weight: 600;
          color: var(--ct-text-muted);
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .ct-input {
          padding: 10px 14px;
          border: 1.5px solid var(--ct-gray-200);
          border-radius: var(--ct-radius-sm);
          font-size: 13.5px;
          color: var(--ct-text-main);
          background: var(--ct-white);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
          resize: none;
        }
        .ct-input::placeholder { color: var(--ct-gray-400); }
        .ct-input:focus {
          border-color: var(--ct-blue-light);
          box-shadow: 0 0 0 3px rgba(55,138,221,0.12);
        }
        .ct-textarea { min-height: 100px; }
        .ct-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 13px 24px;
        }
        .ct-spinner {
          display: inline-block;
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: ct-spin 0.7s linear infinite;
        }
        @keyframes ct-spin { to { transform: rotate(360deg); } }
        .ct-form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 24px;
          gap: 12px;
        }
        .ct-success-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: var(--ct-blue-bg);
          display: flex; align-items: center; justify-content: center;
        }
        .ct-success-heading {
          font-size: 1.25rem; font-weight: 700;
          color: var(--ct-text-main);
        }
        .ct-success-sub {
          font-size: 0.9rem;
          color: var(--ct-text-body);
          line-height: 1.65;
        }

        /* ── Buttons ─────────────────────────────────────────── */
        .ct-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--ct-blue-deep), var(--ct-blue-mid));
          color: #fff;
          padding: 13px 26px;
          border-radius: var(--ct-radius-md);
          font-size: 14px; font-weight: 600;
          text-decoration: none; border: none; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(24,95,165,0.3);
        }
        .ct-btn-primary:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(24,95,165,0.4);
        }
        .ct-btn-primary:disabled { opacity: 0.65; cursor: not-allowed; }
        .ct-btn-sm { padding: 10px 20px; font-size: 13px; }

        /* ══ MAP ═══════════════════════════════════════════════ */
        .ct-section-title { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; color: var(--ct-text-main); margin-bottom: 0; }
        .ct-center { text-align: center; }
        .ct-map-header { text-align: center; margin-bottom: 32px; }
        .ct-map-wrap {
          border-radius: var(--ct-radius-xl);
          overflow: hidden;
          height: 400px;
          box-shadow: var(--ct-shadow-hov);
          border: 1px solid var(--ct-gray-200);
          max-width: 1200px;
          margin: 0 auto;
        }
        .ct-map-links {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-top: 16px;
        }
        .ct-map-link {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 13.5px; font-weight: 600;
          color: var(--ct-blue-mid);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ct-map-link:hover { color: var(--ct-blue-light); }

        /* ══ FAQ ═══════════════════════════════════════════════ */
        .ct-faq-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 60px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ct-faq-left { position: sticky; top: 100px; }
        .ct-faq-title { margin-bottom: 12px; }
        .ct-faq-cta { margin-top: 24px; }
        .ct-faq-right {
          background: var(--ct-gray-50);
          border: 1px solid var(--ct-gray-200);
          border-radius: var(--ct-radius-xl);
          overflow: hidden;
          box-shadow: var(--ct-shadow-card);
        }
        .ct-faq-divider { border-bottom: 1px solid var(--ct-gray-100); }
        .ct-faq-btn {
          width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          padding: 18px 22px;
          background: transparent; border: none; cursor: pointer;
          gap: 12px; text-align: left;
          transition: background 0.2s;
        }
        .ct-faq-btn.ct-faq-btn-open { background: var(--ct-blue-bg); }
        .ct-faq-btn-left {
          display: flex; align-items: center; gap: 10px;
          flex: 1; min-width: 0;
        }
        .ct-faq-icon-wrap {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: var(--ct-gray-100);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .ct-faq-btn-open .ct-faq-icon-wrap { background: var(--ct-blue-bg); }
        .ct-faq-q {
          font-size: 14px; font-weight: 600; line-height: 1.5;
          color: var(--ct-text-main);
          transition: color 0.2s;
        }
        .ct-faq-q.ct-faq-q-open { color: var(--ct-blue-mid); }
        .ct-faq-answer {
          padding: 0 22px 18px 62px;
          font-size: 13.5px;
          color: var(--ct-text-body);
          line-height: 1.75;
        }

        /* ══ CTA STRIP ═════════════════════════════════════════ */
        .ct-cta-strip {
          position: relative;
          background: linear-gradient(135deg, #042C53 0%, #0C447C 60%, #185FA5 100%);
          padding: clamp(3.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 3rem);
          text-align: center;
          overflow: hidden;
        }
        .ct-cta-blob {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          top: -180px; right: -120px;
          background: radial-gradient(circle, rgba(55,138,221,0.12) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
        }
        .ct-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .ct-cta-heading {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800; color: #fff;
          margin-bottom: 12px; letter-spacing: -0.01em;
        }
        .ct-cta-sub {
          font-size: 1rem;
          color: var(--ct-blue-pal2);
          line-height: 1.7; margin-bottom: 28px;
        }
        .ct-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .ct-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--ct-blue-mid);
          padding: 12px 26px; border-radius: var(--ct-radius-md);
          font-size: 14px; font-weight: 700; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
        }
        .ct-btn-white:hover { background: var(--ct-blue-bg); transform: translateY(-1px); }
        .ct-btn-ghost-light {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--ct-blue-pal2);
          padding: 12px 26px; border-radius: var(--ct-radius-md);
          font-size: 14px; font-weight: 600;
          border: 1.5px solid rgba(55,138,221,0.38);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .ct-btn-ghost-light:hover {
          background: rgba(55,138,221,0.12);
          border-color: rgba(55,138,221,0.6);
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media (max-width: 900px) {
          .ct-main-grid   { grid-template-columns: 1fr; gap: 36px; }
          .ct-faq-layout  { grid-template-columns: 1fr; gap: 32px; }
          .ct-faq-left    { position: static; }
          .ct-right-col   { padding: 24px; }
        }
        @media (max-width: 640px) {
          .ct-form-grid   { grid-template-columns: 1fr; }
          .ct-cards-strip { grid-template-columns: 1fr 1fr; }
          .ct-map-wrap    { height: 280px; }
          .ct-hero-heading { font-size: 2rem; }
        }
        @media (max-width: 400px) {
          .ct-cards-strip { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default Contact;