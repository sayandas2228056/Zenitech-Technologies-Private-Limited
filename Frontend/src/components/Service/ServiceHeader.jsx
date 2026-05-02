import React from 'react';
import { Link } from 'react-router-dom';
import HeroBg from '../../assets/serv.jpg';

/* ══════════════════════════════════════════════════════════════
   ServiceHeader — Hero section for the Services page
   Extracted from Services.jsx and enhanced with a background image.
══════════════════════════════════════════════════════════════ */

const statistics = [
  { number: '10+', label: 'Security Tools Integrated' },
  { number: '99.9%', label: 'System Uptime' },
  { number: '24/7', label: 'Monitoring & Support' },
  { number: 'ISO Ready', label: 'Compliance Standards' },
];
const ServiceHeader = () => {
    return (
        <>
            {/* ══ HERO ═══════════════════════════════════════════════ */}
            <section className="sh-hero">
                {/* Background image */}
                <div className="sh-hero-bg">
                    <img src={HeroBg} alt="Services Background" className="sh-hero-bg-img" />
                </div>

                {/* Decorative blobs */}
                <div className="sh-blob sh-blob-tr" />
                <div className="sh-blob sh-blob-bl" />

                {/* Content */}
                <div className="sh-hero-inner">
                    <h1 className="sh-heading sh-anim" style={{ animationDelay: '0.08s' }}>
                        Technology Solutions for{' '}
                        <span className="sh-accent">Modern Business</span>
                    </h1>

                    <p className="sh-sub sh-anim" style={{ animationDelay: '0.18s' }}>
                        Comprehensive Cybersecurity &amp; Cloud Solutions to drive
                        innovation and sustainable growth for your organization.
                    </p>

                    <div className="sh-btns sh-anim" style={{ animationDelay: '0.28s' }}>
                        <Link to="/services/cybersecurity" className="sh-btn-solid">
                            Cybersecurity
                        </Link>
                        <Link to="/services/cloud-computing" className="sh-btn-outline">
                            Cloud Solutions
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══ STATS BAR ══════════════════════════════════════════ */}
            <div className="sh-stats-bar">
                {statistics.map((s, i) => (
                    <div key={i} className="sh-stat" style={{ animationDelay: `${i * 0.1}s` }}>
                        <p className="sh-stat-num">{s.number}</p>
                        <p className="sh-stat-label">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* ══ SCOPED STYLES ══════════════════════════════════════ */}
            <style>{`
        /* ── Tokens ─────────────────────────────────────────── */
        .sh-hero {
          --sh-purple-700: #6d28d9;
          --sh-purple-600: #7c3aed;
          --sh-purple-500: #a855f7;
          --sh-orange:     #f97316;
          --sh-orange-lt:  #fb923c;
          --sh-purple-pal: #e9d5ff;
          --sh-white:      #ffffff;
          position: relative;
          min-height: clamp(440px, 58vw, 600px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        /* ── Background ─────────────────────────────────────── */
        .sh-hero-bg {
          position: absolute;
          inset: 0;
        }
        .sh-hero-bg-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
        }


        /* ── Blobs ──────────────────────────────────────────── */
        .sh-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .sh-blob-tr {
          top: -5rem; right: -5rem;
          width: 460px; height: 460px;
          background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
          filter: blur(30px);
        }
        .sh-blob-bl {
          bottom: -3rem; left: -3rem;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%);
          filter: blur(24px);
        }

        /* ── Inner ──────────────────────────────────────────── */
        .sh-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 860px;
          padding: clamp(5rem, 10vw, 8rem) 1.5rem clamp(4rem, 8vw, 6rem);
        }

        /* ── Badge ──────────────────────────────────────────── */
        .sh-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 100px;
          padding: 0.35rem 1rem;
          margin-bottom: 1.6rem;
          animation: sh-fade-in 0.55s ease forwards;
          opacity: 0;
        }
        .sh-badge-dot {
          display: inline-block;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--sh-orange-lt);
          flex-shrink: 0;
        }
        .sh-pulse { animation: sh-pulse 2s ease-in-out infinite; }
        @keyframes sh-pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }

        .sh-badge-text {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        /* ── Heading & sub ──────────────────────────────────── */
        .sh-heading {
          font-size: clamp(2.2rem, 5vw, 3.7rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .sh-accent { color: var(--sh-orange-lt); }
        .sh-sub {
          color: rgba(233,213,255,0.88);
          font-size: 1.05rem;
          line-height: 1.78;
          max-width: 560px;
          margin: 0 auto 2.2rem;
        }

        /* ── Buttons ────────────────────────────────────────── */
        .sh-btns {
          display: flex;
          gap: 0.85rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .sh-btn-solid {
          background: var(--sh-white);
          color: var(--sh-purple-600);
          padding: 0.82rem 2rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .sh-btn-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.22);
        }
        .sh-btn-outline {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.42);
          color: #fff;
          padding: 0.82rem 2rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .sh-btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.72);
        }

        /* ── Animations ─────────────────────────────────────── */
        @keyframes sh-fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sh-anim {
          opacity: 0;
          animation: sh-fade-in 0.6s ease forwards;
        }

        /* ── Stats bar ──────────────────────────────────────── */
        .sh-stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 4px 20px rgba(124,58,237,0.07);
          text-align: center;
        }
        .sh-stat {
          padding: 1.75rem 1rem;
          border-right: 1px solid #f3f4f6;
          opacity: 0;
          animation: sh-fade-in 0.55s ease forwards;
        }
        .sh-stat:last-child { border-right: none; }
        .sh-stat-num {
          font-size: 2rem;
          font-weight: 800;
          color: #7c3aed;
          margin: 0 0 0.2rem;
          line-height: 1;
        }
        .sh-stat-label {
          color: #6b7280;
          font-size: 0.82rem;
          font-weight: 500;
          margin: 0;
        }

        /* ── Responsive ─────────────────────────────────────── */
        @media (max-width: 600px) {
          .sh-btns { flex-direction: column; align-items: center; }
          .sh-stats-bar { grid-template-columns: repeat(2, 1fr); }
          .sh-stat:nth-child(2) { border-right: none; }
        }
      `}</style>
        </>
    );
};

export default ServiceHeader;