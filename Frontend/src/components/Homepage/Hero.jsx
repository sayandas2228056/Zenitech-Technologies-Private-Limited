import React, { useState, useEffect, useRef } from 'react'
import BgPic from '../../assets/pic5.jpg';
import Logo from "../../assets/Logo.png";
import Pic1 from "../../assets/heroslider/Cloud.jpg"
import Pic4 from "../../assets/heroslider/Cloud3.jpg"
import Pic5 from "../../assets/heroslider/cyber.jpg"
import Pic7 from "../../assets/heroslider/Cybersecurity3.png"
// Main slider images — from the original Consulo site
// Replace these with your own hosted images if needed
const mainSlides = [Pic1,Pic5,Pic7
]

const thumbSlides = [Pic1,Pic5,Pic7
]

const HERO_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

.hero-wrap, .hero-wrap * { box-sizing: border-box; }

.hero-wrap {
  font-family: 'Manrope', sans-serif;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f2f2ec center/cover no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 64px 60px;
  gap: 0;
}

/* Slanted left panel */
.hero-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  right: 44%;
  background: #e8e8e1;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
  z-index: 0;
}

/* ---- LEFT ---- */
.hero-left {
  position: relative;
  z-index: 2;
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 28px;
  display: flex;
  flex-direction: column;
}

.expert-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.9);
  border: 1.5px solid #d2d2ca;
  border-radius: 40px;
  padding: 9px 20px;
  font-size: 12.5px;
  font-weight: 600;
  color: #1a1a1a;
  width: fit-content;
  margin-bottom: 30px;
  letter-spacing: 0.025em;
}

.hero-heading {
  font-size: clamp(42px, 4.8vw, 70px);
  font-weight: 900;
  line-height: 1.06;
  color: #0d0d10;
  margin: 0 0 22px;
  letter-spacing: -0.035em;
}

.uw {
  position: relative;
  display: inline-block;
}
.uw::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: 3px;
  height: 3.5px;
  background: #0d0d10;
  border-radius: 2px;
  display: block;
}

.hero-sub {
  font-size: 14.5px;
  color: #5e5e5e;
  line-height: 1.7;
  max-width: 400px;
  margin: 0 0 38px;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.btn-gs {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0d0d10;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  padding: 15px 22px 15px 28px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.18s;
  letter-spacing: 0.01em;
}
.btn-gs:hover { background: #2b2b2b; transform: translateY(-2px); }

.btn-arrow {
  width: 34px; height: 34px;
  background: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #0d0d10;
  font-size: 16px;
  flex-shrink: 0;
  line-height: 1;
}

.contact-blk {
  display: flex; align-items: center; gap: 13px;
}
.phone-ring {
  width: 48px; height: 48px;
  border: 1.5px solid #c6c6be;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.phone-ring svg { width: 19px; height: 19px; stroke: #333; }
.c-label { font-size: 11px; color: #999; font-weight: 500; display: block; margin-bottom: 2px; }
.c-num  { font-size: 14px; font-weight: 800; color: #0d0d10; letter-spacing: 0.01em; display: block; }

/* ---- RIGHT ---- */
.hero-right {
  position: relative;
  z-index: 2;
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* Main image box */
.main-img-box {
  position: relative;
  width: 100%;
  height: 440px;
  border-radius: 22px;
  overflow: visible; /* badge hangs outside */
  background: #ccc;
}

.main-img-box .img-clip {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  overflow: hidden;
}

.s-img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0;
  transition: opacity 0.65s ease;
}
.s-img.on { opacity: 1; }

/* Spinning badge */
.badge-wrap {
  position: absolute;
  top: 22px;
  left: -56px;
  width: 116px; height: 116px;
  z-index: 30;
}

.badge-bg {
  position: absolute; inset: 0;
  border-radius: 50%;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.badge-spin {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  animation: spinIt 14s linear infinite;
}
@keyframes spinIt { to { transform: rotate(360deg); } }

.badge-star {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.badge-star svg { width: 30px; height: 30px; }

/* Thumbs row */
.thumbs-row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.nav-btn {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1.5px solid #c6c6be;
  background: white;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  color: #333;
  font-size: 14px;
  transition: background 0.18s;
}
.nav-btn:hover { background: #eeeeea; }

.thumbs-track {
  display: flex; gap: 10px;
  flex: 1; overflow: hidden;
}

.thumb {
  flex: 1;
  height: 88px;
  border-radius: 13px;
  overflow: hidden;
  cursor: pointer;
  border: 2.5px solid transparent;
  transition: border-color 0.25s, transform 0.2s;
}
.thumb:hover { transform: translateY(-2px); }
.thumb.on  { border-color: #0d0d10; }
.thumb img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.35s ease;
}
.thumb:hover img { transform: scale(1.06); }

/* Fade-in animations */
@keyframes fadeUp {
  from { opacity:0; transform:translateY(26px); }
  to   { opacity:1; transform:translateY(0); }
}
.hero-left .expert-tag { animation: fadeUp 0.5s 0.05s ease both; }
.hero-left .hero-heading { animation: fadeUp 0.5s 0.17s ease both; }
.hero-left .hero-sub    { animation: fadeUp 0.5s 0.29s ease both; }
.hero-left .hero-actions{ animation: fadeUp 0.5s 0.41s ease both; }
.hero-right              { animation: fadeUp 0.6s 0.2s  ease both; }
`

const Hero = () => {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const total = mainSlides.length

  const goTo = (i) => setActive((i + total) % total)
  const prev = () => { clearInterval(timerRef.current); goTo(active - 1) }
  const next = () => { clearInterval(timerRef.current); goTo(active + 1) }

  useEffect(() => {
    timerRef.current = setInterval(() => setActive(p => (p + 1) % total), 4500)
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    const el = document.createElement('style')
    el.id = '__hero_css__'
    el.textContent = HERO_CSS
    if (!document.getElementById('__hero_css__')) document.head.appendChild(el)
    return () => document.getElementById('__hero_css__')?.remove()
  }, [])

  return (
    <section className="hero-wrap">
      {/* ======= LEFT ======= */}
      <div className="hero-left mt-7">
      {/*  <div className="expert-tag">
          <span>+</span>
          <div className="text-left">
            <span className="block text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent">
              ZENITECH TECHNOLOGIES
            </span>
            <span className="block font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              PRIVATE LIMITED
            </span>
          </div>
          <span>+</span>
        </div>*/}

        <h1 className="hero-heading">
          Empower your business with our expertise in <br />
          <span className='text-orange-400'>Cybersecurity <span className='text-black'>&</span> Cloud Computing<br/> </span>
        </h1>

        <p className="hero-sub">
            Your innovation partner for future-ready technology and consulting.
            <br />
            We are committed to delivering innovative, secure, and scalable solutions tailored to meet the evolving needs of your enterprise.

        </p>

        <div className="hero-actions">
          <a href="#" className="btn-gs">
            Get Started
            <span className="btn-arrow">↗</span>
          </a>

          <div className="contact-blk">
            <div className="phone-ring">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
            </div>
            <div>
             <span className="c-label">Need help?</span>

                 <a href="tel:+918820066999" className="c-num block hover:underline">
                   +91 88200 66999
                 </a>

                 <a href="tel:+917439004545" className="c-num block hover:underline">
                   +91 74390 04545
                 </a>
            </div>
          </div>
        </div>
      </div>

      {/* ======= RIGHT ======= */}
      <div className="hero-right">
        {/* Main image */}
        <div className="main-img-box">
          {/* Spinning badge — sits outside clip, on the left */}
          <div className="badge-wrap">
            <div className="badge-bg" />
            <svg className="badge-spin" viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="bp" d="M 58,58 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0" />
              </defs>
              <text fontSize="8.2" fontWeight="700" letterSpacing="3.8" fill="#111" fontFamily="Manrope,sans-serif">
                <textPath href="#bp">•ZENITECH TECHNOLOGIES PRIVATE LIMITED</textPath>
              </text>
            </svg>
            <div className="badge-star">
              <img src={Logo} alt="Zenitech Logo" className="w-10 h-10 rounded-full" />
            </div>
          </div>

          {/* Clipped image area */}
          <div className="img-clip">
            {mainSlides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className={`s-img ${i === active ? 'on' : ''}`}
                onError={(e) => { if (i === 0) e.target.src = BgPic }}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail nav */}
        <div className="thumbs-row">
          <button className="nav-btn" onClick={prev} aria-label="Previous">←</button>
          <div className="thumbs-track">
            {thumbSlides.map((src, i) => (
              <div
                key={i}
                className={`thumb ${i === active ? 'on' : ''}`}
                onClick={() => { clearInterval(timerRef.current); goTo(i) }}
              >
                <img src={src} alt={`Thumb ${i + 1}`} />
              </div>
            ))}
          </div>
          <button className="nav-btn" onClick={next} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  )
}

export default Hero