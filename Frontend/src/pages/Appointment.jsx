import React, { useState, useEffect } from 'react';
import Bright from "../components/Common/Bright2.jsx"
import {
    Phone, Mail, CalendarCheck, Shield, CheckCircle,
    Star, Clock, Users, Award, ArrowRight, Zap, Lock
} from 'lucide-react';
import AppointmentForm from '../components/Appointment/AppointmentForm.jsx';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

/* ════════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════ */
const steps = [
    {
        Icon: CalendarCheck,
        title: 'Choose a Time',
        desc: 'Select a convenient date and time that works for your schedule.',
        detail: 'Real-time availability — no back-and-forth emails',
    },
    {
        Icon: Mail,
        title: 'Confirm by Email',
        desc: "You'll receive a confirmation email with all the meeting details.",
        detail: 'Includes calendar invite and preparation materials',
    },
    {
        Icon: Phone,
        title: 'Meet an Expert',
        desc: 'Join a one-on-one call with our consultant.',
        detail: 'Personalised consultation session',
    },
];

const benefits = [
    { Icon: Shield,      title: 'Tailored Advice',              desc: 'Customised recommendations based on your specific industry and risk profile.' },
    { Icon: CheckCircle, title: 'No Obligations',               desc: 'Free consultation — no pressure, no hidden commitments.' },
    { Icon: Award,       title: 'Industry Certified Expert',      desc: 'Industry certified experts .' },
    { Icon: Users,       title: 'Industry-Specific Solutions',  desc: 'Deep expertise across various industries.' },
];

const featurePills = [
    { Icon: Clock,        label: 'Fast Response', note: '< 2 hr' },
    { Icon: Lock,         label: 'Confidential',  note: '100%' },
    { Icon: CheckCircle,  label: 'Free Session',  note: 'Always' },
];

/* ════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════ */
const Appointment = () => {
    useSEO({
        title: 'Schedule a Consultation',
        description:
            'Book a free cybersecurity & cloud consulting session with Zenitech Technologies experts. Get tailored IT advice for your business. Fast response, 100% confidential.',
        canonical: 'https://www.zenitech.in/appointment',
        keywords:
            'book cybersecurity consultation, cloud computing consultation India, schedule IT consultation, free cybersecurity assessment, Zenitech appointment',
        breadcrumbs: [
            { name: 'Home', url: 'https://www.zenitech.in/' },
            { name: 'Appointment', url: 'https://www.zenitech.in/appointment' },
        ],
    });

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('apg-in'); obs.unobserve(e.target); }
            }),
            { threshold: 0.07 }
        );
        document.querySelectorAll('.apg-reveal').forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <div className="apg-root">

            {/* ══ HERO + FORM ════════════════════════════════════ */}
            <section className="apg-hero">

                {/* ── Left info panel ─────────────────────────── */}
                <div className="apg-hero-left">
                    {/* Decorative layers */}
                    <div className="apg-dot-grid" />
                    <div className="apg-blob apg-blob-tr" />
                    <div className="apg-blob apg-blob-bl" />
                    <div className="apg-blob apg-blob-center" />

                    <div className="apg-hero-content">

                        {/* Badge */}
                        <div className="apg-trust-badge">
                            <span className="apg-badge-dot" />
                            <Phone size={12} />
                            <span>We are ready to assist you</span>
                        </div>

                        {/* Heading */}
                        <h1 className="apg-hero-h1">
                           Talk to <br />
                            Us
                        </h1>

                        <p className="apg-hero-p">
                            Connect with our certified experts to assess your security posture
                            and build a tailored defence strategy — completely free.
                        </p>

                        {/* Feature pills */}
                        <div className="apg-feature-pills">
                            {featurePills.map(({ Icon, label, note }, i) => (
                                <div key={i} className="apg-feature-pill">
                                    <div className="apg-fpill-icon"><Icon size={14} /></div>
                                    <span className="apg-fpill-label">{label}</span>
                                    <span className="apg-fpill-note">{note}</span>
                                </div>
                            ))}
                        </div>

                        {/* Benefit checklist */}
                        <div className="apg-checklist">
                            {benefits.slice(0, 4).map(({ Icon, title }, i) => (
                                <div key={i} className="apg-check-row">
                                    <div className="apg-check-tick"><CheckCircle size={13} /></div>
                                    <span>{title}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stat strip */}
                        <div className="apg-stats">
                            {[['Global', 'Client Support'], ['Interactive', 'Sessions'], ['24/7', 'Support']].map(([n, l], i) => (
                                <div key={i} className="apg-stat">
                                    <span className="apg-stat-num">{n}</span>
                                    <span className="apg-stat-lbl">{l}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Right form panel ────────────────────────── */}
                <div className="apg-hero-right">
                    <AppointmentForm />
                </div>
            </section>

            {/* ══ HOW IT WORKS ═══════════════════════════════════ */}
            <section className="apg-section apg-section-faded apg-reveal">
                <div className="apg-container">
                    <div className="apg-sec-hdr">
                        <span className="apg-pill"><span className="apg-dot" />Our Process</span>
                        <h2 className="apg-sec-title">How It Works</h2>
                        <p className="apg-sec-sub">
                            Three simple steps to get the cybersecurity guidance your business needs.
                        </p>
                    </div>

                    <div className="apg-steps">
                        {steps.map(({ Icon, title, desc, detail }, i) => (
                            <div
                                key={i}
                                className={`apg-step${activeStep === i ? ' apg-step-active' : ''}`}
                                onMouseEnter={() => setActiveStep(i)}
                            >
                                {/* Connector line (pseudo via sibling, done with CSS) */}
                                <div className="apg-step-num">{i + 1}</div>
                                <div className={`apg-step-icon-wrap${activeStep === i ? ' apg-sicon-active' : ''}`}>
                                    <Icon size={26} />
                                </div>
                                <h3 className="apg-step-title">{title}</h3>
                                <p className="apg-step-desc">{desc}</p>
                                <div className="apg-step-detail-chip">{detail}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Bright/>
            {/* ══ BENEFITS ═══════════════════════════════════════ */}
            <section className="apg-section apg-section-white apg-reveal">
                <div className="apg-container">
                    <div className="apg-sec-hdr">
                        <span className="apg-pill"><span className="apg-dot" />Why Choose Us</span>
                        <h2 className="apg-sec-title">What You'll Walk Away With</h2>
                        <p className="apg-sec-sub">
                            Every session is tailored to your specific business needs and security posture.
                        </p>
                    </div>

                    <div className="apg-benefits-grid">
                        {benefits.map(({ Icon, title, desc }, i) => (
                            <div key={i} className="apg-benefit-card">
                                <div className="apg-bcard-icon-wrap">
                                    <div className="apg-bcard-icon"><Icon size={20} /></div>
                                </div>
                                <div className="apg-bcard-body">
                                    <h4 className="apg-bcard-title">{title}</h4>
                                    <p className="apg-bcard-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ CTA BANNER ═════════════════════════════════════ */}
            <section className="apg-cta apg-reveal">
                <div className="apg-cta-dot-grid" />
                <div className="apg-cta-blob apg-cta-blob-tr" />
                <div className="apg-cta-blob apg-cta-blob-bl" />
                <div className="apg-cta-inner">
                    <div className="apg-trust-badge apg-badge-lt">
                        <Phone size={12} />
                        <span>24/7 Emergency Support Available</span>
                    </div>
                    <h2 className="apg-cta-h">Need Help Right Now?</h2>
                    <p className="apg-cta-p">
                        Can't wait for a scheduled session? Our security team is standing
                        by to assist with urgent matters — any time, any day.
                    </p>
                    <div className="apg-cta-actions">
                        <a href="tel:+918820066999" className="apg-cta-phone">
                            <Phone size={16} /> +91 88200 66999
                        </a>
                        <span className="apg-cta-divider" />
                        <Link to="/contact" className="apg-cta-btn">
                            Contact Support <ArrowRight size={15} />
                        </Link>
                    </div>
                    <p className="apg-cta-note">
                        ⚡ Average response time under 2 hours during business hours
                    </p>
                </div>
            </section>

            {/* ══ SCOPED STYLES ══════════════════════════════════ */}
            <style>{`
                /* ── Design tokens ───────────────────────────────── */
                .apg-root {
                    --apg-blue-deep:   #042C53;
                    --apg-blue-mid:    #185FA5;
                    --apg-blue-light:  #378ADD;
                    --apg-blue-pale:   #85B7EB;
                    --apg-blue-pal2:   #B5D4F4;
                    --apg-blue-bg:     #E8F1FB;
                    --apg-blue-bg2:    #EAF4FF;
                    --apg-orange:      #F97316;
                    --apg-white:       #ffffff;
                    --apg-gray-50:     #F7F9FC;
                    --apg-gray-100:    #EEF2F8;
                    --apg-gray-200:    #D8E4F0;
                    --apg-gray-400:    #8FA7C0;
                    --apg-gray-500:    #6A85A0;
                    --apg-gray-700:    #3D5470;
                    --apg-gray-900:    #0D1F33;
                    --apg-faded:       #F7F9FC;
                    --apg-r:           14px;
                    --apg-shadow:      0 2px 14px rgba(24,95,165,0.07), 0 1px 3px rgba(0,0,0,0.05);
                    --apg-shadow-h:    0 8px 32px rgba(24,95,165,0.14), 0 2px 8px rgba(0,0,0,0.06);
                    font-family: 'Inter', system-ui, sans-serif;
                    background: var(--apg-white);
                    color: var(--apg-gray-900);
                }

                /* ── Scroll reveal ──────────────────────────────── */
                .apg-reveal {
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .apg-reveal.apg-in { opacity: 1; transform: none; }

                /* ── Layout helpers ─────────────────────────────── */
                .apg-container     { max-width: 1180px; margin: 0 auto; }
                .apg-section       { padding: clamp(4rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem); }
                .apg-section-white { background: var(--apg-white); }
                .apg-section-faded { background: var(--apg-faded); }

                /* ── Section header ─────────────────────────────── */
                .apg-sec-hdr { text-align:center; margin-bottom:3rem; }
                .apg-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: var(--apg-blue-bg);
                    border: 1px solid var(--apg-blue-bg2);
                    color: var(--apg-blue-mid);
                    font-size: 0.69rem;
                    font-weight: 700;
                    letter-spacing: 0.13em;
                    text-transform: uppercase;
                    padding: 0.32rem 0.9rem;
                    border-radius: 100px;
                    margin-bottom: 0.9rem;
                }
                .apg-dot {
                    display: inline-block;
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: var(--apg-orange);
                }
                .apg-sec-title {
                    font-size: clamp(1.8rem,3.5vw,2.4rem);
                    font-weight: 800;
                    color: var(--apg-gray-900);
                    margin: 0 0 0.75rem;
                    letter-spacing: -0.02em;
                }
                .apg-sec-sub {
                    color: var(--apg-gray-500);
                    font-size: 0.97rem;
                    line-height: 1.75;
                    max-width: 520px;
                    margin: 0 auto;
                }

                /* ════════════════════════════════════════════════
                   HERO
                ════════════════════════════════════════════════ */
                .apg-hero {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: stretch;
                }

                /* ── Left panel ─────────────────────────────────── */
                .apg-hero-left {
                    position: relative;
                    background: linear-gradient(140deg, #042C53 0%, #0C447C 30%, #185FA5 65%, #378ADD 100%);
                    padding: clamp(6rem,10vw,9rem) clamp(1.75rem,4vw,3.75rem) clamp(4rem,7vw,6rem);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }

                /* Dot-grid overlay */
                .apg-dot-grid {
                    position: absolute; inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }

                /* Blobs */
                .apg-blob { position:absolute; border-radius:50%; pointer-events:none; }
                .apg-blob-tr {
                    top:-6rem; right:-6rem;
                    width:420px; height:420px;
                    background: radial-gradient(circle, rgba(133,183,235,0.12) 0%, transparent 65%);
                    filter: blur(40px);
                    animation: apg-float 8s ease-in-out infinite;
                }
                .apg-blob-bl {
                    bottom:-4rem; left:-4rem;
                    width:300px; height:300px;
                    background: radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 65%);
                    filter: blur(32px);
                    animation: apg-float 10s ease-in-out infinite reverse;
                }
                .apg-blob-center {
                    top:50%; left:55%;
                    transform: translate(-50%,-50%);
                    width:500px; height:500px;
                    background: radial-gradient(circle, rgba(24,95,165,0.14) 0%, transparent 65%);
                    filter: blur(60px);
                    pointer-events: none;
                }
                @keyframes apg-float {
                    0%,100% { transform: translateY(0); }
                    50%      { transform: translateY(-18px); }
                }

                /* Hero content */
                .apg-hero-content {
                    position: relative;
                    z-index: 1;
                    color: #fff;
                    max-width: 500px;
                }

                /* Trust badge */
                .apg-trust-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 100px;
                    padding: 0.38rem 1rem;
                    font-size: 0.76rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.9);
                    margin-bottom: 1.5rem;
                    backdrop-filter: blur(6px);
                }
                .apg-badge-dot {
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #4ade80;
                    box-shadow: 0 0 0 2px rgba(74,222,128,0.3);
                    animation: apg-pulse 2s ease-in-out infinite;
                }
                @keyframes apg-pulse {
                    0%,100% { box-shadow: 0 0 0 2px rgba(74,222,128,0.3); }
                    50%      { box-shadow: 0 0 0 5px rgba(74,222,128,0.1); }
                }

                /* Heading */
                .apg-hero-h1 {
                    font-size: clamp(2.1rem,4.5vw,3.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.08;
                    margin: 0 0 1.1rem;
                    letter-spacing: -0.025em;
                }
                .apg-h1-accent {
                    background: linear-gradient(100deg, #85B7EB 0%, #B5D4F4 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .apg-hero-p {
                    font-size: 1rem;
                    color: rgba(181,212,244,0.82);
                    line-height: 1.78;
                    max-width: 430px;
                    margin: 0 0 1.6rem;
                }

                /* Feature pills row */
                .apg-feature-pills {
                    display: flex;
                    gap: 0.6rem;
                    flex-wrap: wrap;
                    margin-bottom: 1.75rem;
                }
                .apg-feature-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.38rem;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 10px;
                    padding: 0.45rem 0.9rem;
                    backdrop-filter: blur(4px);
                }
                .apg-fpill-icon {
                    color: #85B7EB;
                    display: flex;
                    align-items: center;
                }
                .apg-fpill-label {
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.88);
                }
                .apg-fpill-note {
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: #4ade80;
                    background: rgba(74,222,128,0.12);
                    border-radius: 6px;
                    padding: 1px 6px;
                }

                /* Checklist */
                .apg-checklist {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    margin-bottom: 1.75rem;
                }
                .apg-check-row {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-size: 0.875rem;
                    color: rgba(181,212,244,0.85);
                }
                .apg-check-tick {
                    color: #4ade80;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }

                /* Stats strip */
                .apg-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 14px;
                    overflow: hidden;
                    backdrop-filter: blur(8px);
                }
                .apg-stat {
                    text-align: center;
                    padding: 1rem 0.5rem;
                    border-right: 1px solid rgba(255,255,255,0.1);
                }
                .apg-stat:last-child { border-right: none; }
                .apg-stat-num { display:block; font-size:1.35rem; font-weight:900; color:#fff; letter-spacing:-0.02em; }
                .apg-stat-lbl { display:block; font-size:0.67rem; color:rgba(181,212,244,0.6); margin-top:2px; }

                /* ── Right panel ─────────────────────────────────── */
                .apg-hero-right {
                    background: var(--apg-gray-50);
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding: clamp(5rem,8vw,8rem) clamp(1.25rem,3.5vw,2.75rem) clamp(2.5rem,5vw,4rem);
                }
                .apg-hero-right > * { width: 100%; max-width: 560px; }

                /* ════════════════════════════════════════════════
                   STEPS
                ════════════════════════════════════════════════ */
                .apg-steps {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    position: relative;
                }

                /* Connector line between cards */
                .apg-steps::before {
                    content: '';
                    position: absolute;
                    top: 52px;
                    left: calc(16.67% + 32px);
                    right: calc(16.67% + 32px);
                    height: 2px;
                    background: linear-gradient(90deg, var(--apg-blue-pal2), var(--apg-blue-mid), var(--apg-blue-pal2));
                    z-index: 0;
                }

                .apg-step {
                    background: var(--apg-white);
                    border: 1.5px solid var(--apg-gray-200);
                    border-radius: 18px;
                    padding: 2.25rem 1.75rem 1.75rem;
                    text-align: center;
                    position: relative;
                    z-index: 1;
                    cursor: default;
                    transition: border-color .3s, box-shadow .3s, transform .3s, background .3s;
                    box-shadow: var(--apg-shadow);
                }
                .apg-step:hover, .apg-step.apg-step-active {
                    border-color: var(--apg-blue-mid);
                    box-shadow: var(--apg-shadow-h);
                    transform: translateY(-6px);
                    background: var(--apg-blue-bg);
                }
                .apg-step-num {
                    position: absolute;
                    top: -14px; left: 50%;
                    transform: translateX(-50%);
                    width: 30px; height: 30px;
                    background: linear-gradient(135deg, #042C53, var(--apg-blue-mid));
                    color: #fff;
                    font-weight: 800;
                    font-size: 0.8rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(24,95,165,0.35);
                    border: 2.5px solid var(--apg-white);
                }
                .apg-step-icon-wrap {
                    width: 68px; height: 68px;
                    border-radius: 50%;
                    background: var(--apg-blue-pal2);
                    color: var(--apg-blue-mid);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.1rem;
                    transition: background .3s, color .3s, box-shadow .3s;
                }
                .apg-sicon-active {
                    background: var(--apg-blue-mid);
                    color: #fff;
                    box-shadow: 0 8px 20px rgba(24,95,165,0.3);
                }
                .apg-step-title { font-size: 1.05rem; font-weight: 800; color: var(--apg-gray-900); margin: 0 0 0.45rem; }
                .apg-step-desc  { font-size: 0.86rem; color: var(--apg-gray-500); line-height: 1.65; margin: 0 0 0.8rem; }
                .apg-step-detail-chip {
                    display: inline-block;
                    background: var(--apg-blue-bg);
                    border: 1px solid var(--apg-blue-bg2);
                    color: var(--apg-blue-mid);
                    font-size: 0.72rem;
                    font-weight: 600;
                    border-radius: 100px;
                    padding: 0.25rem 0.75rem;
                }

                /* ════════════════════════════════════════════════
                   BENEFITS GRID
                ════════════════════════════════════════════════ */
                .apg-benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 1.25rem;
                }
                .apg-benefit-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    background: var(--apg-white);
                    border: 1.5px solid var(--apg-gray-200);
                    border-radius: var(--apg-r);
                    padding: 1.6rem 1.5rem;
                    transition: border-color .3s, box-shadow .3s, transform .3s;
                    cursor: default;
                    position: relative;
                    overflow: hidden;
                }
                .apg-benefit-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0;
                    width: 3px; height: 100%;
                    background: linear-gradient(180deg, var(--apg-blue-mid), var(--apg-blue-light));
                    opacity: 0;
                    transition: opacity .3s;
                    border-radius: 3px 0 0 3px;
                }
                .apg-benefit-card:hover {
                    border-color: var(--apg-blue-pal2);
                    box-shadow: var(--apg-shadow-h);
                    transform: translateY(-4px);
                }
                .apg-benefit-card:hover::before { opacity: 1; }
                .apg-bcard-icon-wrap { flex-shrink: 0; }
                .apg-bcard-icon {
                    width: 48px; height: 48px;
                    background: var(--apg-blue-bg);
                    border: 1.5px solid var(--apg-blue-bg2);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--apg-blue-mid);
                    transition: background .25s, box-shadow .25s;
                }
                .apg-benefit-card:hover .apg-bcard-icon {
                    background: var(--apg-blue-mid);
                    color: #fff;
                    border-color: var(--apg-blue-mid);
                    box-shadow: 0 6px 16px rgba(24,95,165,0.3);
                }
                .apg-bcard-body {}
                .apg-bcard-title { font-size: 0.97rem; font-weight: 700; color: var(--apg-gray-900); margin: 0 0 0.35rem; }
                .apg-bcard-desc  { font-size: 0.85rem; color: var(--apg-gray-500); line-height: 1.7; margin: 0; }

                /* ════════════════════════════════════════════════
                   CTA BANNER
                ════════════════════════════════════════════════ */
                .apg-cta {
                    position: relative;
                    background: linear-gradient(140deg, #042C53 0%, #0C447C 35%, #185FA5 65%, #378ADD 100%);
                    padding: clamp(4rem,9vw,7rem) 2rem;
                    overflow: hidden;
                    text-align: center;
                }
                .apg-cta-dot-grid {
                    position: absolute; inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }
                .apg-cta-blob { position: absolute; border-radius: 50%; pointer-events: none; }
                .apg-cta-blob-tr {
                    top:-6rem; right:-6rem;
                    width:420px; height:420px;
                    background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%);
                    filter: blur(40px);
                }
                .apg-cta-blob-bl {
                    bottom:-4rem; left:-4rem;
                    width:300px; height:300px;
                    background: radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 65%);
                    filter: blur(32px);
                }
                .apg-cta-inner { position: relative; z-index: 1; max-width: 620px; margin: 0 auto; }

                .apg-badge-lt {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.18);
                    margin-bottom: 1.25rem;
                }
                .apg-cta-h {
                    font-size: clamp(1.9rem,4vw,2.75rem);
                    font-weight: 900;
                    color: #fff;
                    margin: 0 0 0.85rem;
                    letter-spacing: -0.025em;
                }
                .apg-cta-p {
                    font-size: 1rem;
                    color: rgba(181,212,244,0.8);
                    line-height: 1.75;
                    margin: 0 0 2rem;
                }
                .apg-cta-actions {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-bottom: 1.25rem;
                }
                .apg-cta-phone {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255,255,255,0.1);
                    border: 1.5px solid rgba(255,255,255,0.22);
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 100px;
                    font-size: 0.97rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: background .2s, border-color .2s;
                    backdrop-filter: blur(4px);
                }
                .apg-cta-phone:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.4); }
                .apg-cta-divider {
                    display: block;
                    width: 1px; height: 28px;
                    background: rgba(255,255,255,0.2);
                }
                .apg-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.45rem;
                    background: #fff;
                    color: var(--apg-blue-mid);
                    padding: 0.76rem 1.8rem;
                    border-radius: 100px;
                    font-size: 0.95rem;
                    font-weight: 700;
                    text-decoration: none;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                    transition: transform .2s, box-shadow .2s;
                }
                .apg-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.25); }
                .apg-cta-note {
                    font-size: 0.78rem;
                    color: rgba(181,212,244,0.48);
                    margin: 0;
                }

                /* ── Responsive ─────────────────────────────────── */
                @media (max-width: 960px) {
                    .apg-hero { grid-template-columns: 1fr; min-height: auto; }
                    .apg-hero-left { padding: 6rem 2rem 3rem; }
                    .apg-hero-right { padding: 2.5rem 1.5rem; }
                    .apg-steps { grid-template-columns: 1fr; }
                    .apg-steps::before { display: none; }
                }
                @media (max-width: 640px) {
                    .apg-feature-pills { gap: 0.4rem; }
                    .apg-cta-actions { flex-direction: column; }
                    .apg-cta-divider { display: none; }
                    .apg-benefits-grid { grid-template-columns: 1fr; }
                    .apg-benefit-card { flex-direction: column; gap: 0.75rem; }
                    .apg-hero-left { padding: 5rem 1.25rem 2.5rem; }
                    .apg-hero-right { padding: 2rem 1rem; }
                }
            `}</style>
        </div>
    );
};

export default Appointment;