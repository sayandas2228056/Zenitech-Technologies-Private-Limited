import React, { useState, useEffect, useRef, memo } from 'react'
import Logo from "../../assets/Logo.png";
import Pic1 from "../../assets/heroslider/Cloud.jpg"
import Pic5 from "../../assets/heroslider/cyber.jpg"
import Pic7 from "../../assets/heroslider/Cybersecurity3.png"

// Main slider images
const mainSlides = [Pic1, Pic5, Pic7]
const thumbSlides = mainSlides // share the same reference

const Hero = memo(() => {
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

  return (
    <section className="hero-wrap">
      {/* ======= LEFT ======= */}
      <div className="hero-left mt-7">
        <h1 className="hero-heading">
          Empower your business with our expertise in <br />
          <span className='text-orange-400'>Cybersecurity <span className='text-black'>&</span> Cloud Solutions<br /> </span>
        </h1>

        <p className="hero-sub">
          Your innovation partner for future-ready technology and consulting.
          <br />
          We are committed to delivering innovative, secure, and scalable solutions tailored to meet the evolving needs of your enterprise.
        </p>

        <div className="hero-actions">
          <a href="/appointment" className="btn-gs">
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

              <a href="mailto:info@zenitech.in" className="c-num block hover:underline">
                info@zenitech.in
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
              <text fontSize="8.2" fontWeight="700" letterSpacing="3.8" fill="#111111" fontFamily="Manrope,sans-serif">
                <textPath href="#bp">Zenitech Technologies Pvt Ltd</textPath>
              </text>
            </svg>
            <div className="badge-star">
              <img src={Logo} alt="Zenitech Logo" className="w-12 h-12 rounded-full" loading="eager" width="48" height="48" decoding="async" fetchPriority="high" />
            </div>
          </div>

          {/* Clipped image area */}
          <div className="img-clip">
            {mainSlides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Zenitech ${i === 0 ? 'Cloud Solutions' : i === 1 ? 'Cybersecurity' : 'Enterprise Security'}`}
                className={`s-img${i === active ? ' on' : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                width="800"
                height="440"
                decoding={i === 0 ? 'sync' : 'async'}
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail nav */}
        <div className="thumbs-row">
          <button className="nav-btn" onClick={prev} aria-label="Previous slide">←</button>
          <div className="thumbs-track">
            {thumbSlides.map((src, i) => (
              <div
                key={i}
                className={`thumb ${i === active ? 'on' : ''}`}
                onClick={() => { clearInterval(timerRef.current); goTo(i) }}
              >
                <img 
                  src={src} 
                  alt={`Thumbnail ${i + 1}`} 
                  loading="lazy"
                  width="200"
                  height="88"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <button className="nav-btn" onClick={next} aria-label="Next slide">→</button>
        </div>
      </div>

      <style>{HERO_CSS}</style>
    </section>
  )
})

Hero.displayName = 'Hero'

/* ═══════════════════════════════════════════════════════════
   HERO CSS — inlined as JSX <style> instead of DOM injection
   for faster First Contentful Paint
═══════════════════════════════════════════════════════════ */
const HERO_CSS = `
.hero-wrap, .hero-wrap * { box-sizing: border-box; }

.hero-wrap {
  font-family: 'Satoshi', 'Manrope', system-ui, sans-serif;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f2f2ec center/cover no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: clamp(40px, 5vw, 80px) clamp(20px, 4vw, 64px) clamp(30px, 4vw, 60px);
  gap: 0;
}

/* Slanted left panel */
.hero-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  right: clamp(30%, 40vw, 44%);
  background: #e8e8e1;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
  z-index: 0;
}

/* ---- LEFT ---- */
.hero-left {
  position: relative;
  z-index: 2;
  flex: 0 0 clamp(45%, 48vw, 50%);
  max-width: clamp(45%, 48vw, 50%);
  padding-right: clamp(14px, 2vw, 28px);
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
  padding: clamp(6px, 1vw, 9px) clamp(12px, 2vw, 20px);
  font-size: clamp(11px, 1.2vw, 12.5px);
  font-weight: 600;
  color: #1a1a1a;
  width: fit-content;
  margin-bottom: clamp(15px, 3vw, 30px);
  letter-spacing: 0.025em;
}

.hero-heading {
  font-size: clamp(28px, 5vw, 70px);
  font-weight: 900;
  line-height: clamp(1.1, 1.15, 1.06);
  color: #0d0d10;
  margin: 0 0 clamp(12px, 2vw, 22px);
  letter-spacing: -0.035em;
}

.uw {
  position: relative;
  display: inline-block;
}
.uw::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: clamp(2px, 0.3vw, 3px);
  height: clamp(2.5px, 0.4vw, 3.5px);
  background: #0d0d10;
  border-radius: 2px;
  display: block;
}

.hero-sub {
  font-size: clamp(12px, 1.5vw, 14.5px);
  color: #5e5e5e;
  line-height: 1.7;
  max-width: clamp(280px, 35vw, 400px);
  margin: 0 0 clamp(20px, 3vw, 38px);
  font-weight: 400;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 24px);
  flex-wrap: wrap;
}

.btn-gs {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0d0d10;
  color: #fff;
  font-family: inherit;
  font-size: clamp(12px, 1.3vw, 13.5px);
  font-weight: 700;
  padding: clamp(12px, 1.5vw, 15px) clamp(16px, 2vw, 22px) clamp(12px, 1.5vw, 15px) clamp(20px, 2.5vw, 28px);
  border-radius: 50px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.18s;
  letter-spacing: 0.01em;
}
.btn-gs:hover { background: #2b2b2b; transform: translateY(-2px); }

.btn-arrow {
  width: clamp(28px, 3.5vw, 34px); 
  height: clamp(28px, 3.5vw, 34px);
  background: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #0d0d10;
  font-size: clamp(14px, 1.5vw, 16px);
  flex-shrink: 0;
  line-height: 1;
}

.contact-blk {
  display: flex; align-items: center; gap: clamp(8px, 1.5vw, 13px);
}
.phone-ring {
  width: clamp(36px, 4.5vw, 48px); 
  height: clamp(36px, 4.5vw, 48px);
  border: 1.5px solid #c6c6be;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.phone-ring svg { 
  width: clamp(15px, 2vw, 19px); 
  height: clamp(15px, 2vw, 19px); 
  stroke: #333; 
}
.c-label { 
  font-size: clamp(10px, 1.2vw, 11px); 
  color: #999; 
  font-weight: 500; 
  display: block; 
  margin-bottom: 2px; 
}
.c-num  { 
  font-size: clamp(12px, 1.4vw, 14px); 
  font-weight: 800; 
  color: #0d0d10; 
  letter-spacing: 0.01em; 
  display: block; 
}

/* ---- RIGHT ---- */
.hero-right {
  position: relative;
  z-index: 2;
  flex: 0 0 clamp(45%, 48vw, 50%);
  max-width: clamp(45%, 48vw, 50%);
  padding-left: clamp(10px, 1.5vw, 18px);
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vw, 14px);
}

/* Main image box */
.main-img-box {
  position: relative;
  width: 100%;
  height: clamp(250px, 35vw, 440px);
  border-radius: clamp(14px, 2vw, 22px);
  overflow: visible;
  background: #e8e8e1;
}

.main-img-box .img-clip {
  position: absolute;
  inset: 0;
  border-radius: clamp(14px, 2vw, 22px);
  overflow: hidden;
}

.s-img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.65s ease;
}
.s-img.on { opacity: 1; }

/* Spinning badge */
.badge-wrap {
  position: absolute;
  top: clamp(12px, 2vw, 22px);
  left: clamp(-35px, -6vw, -56px);
  width: clamp(80px, 10vw, 116px); 
  height: clamp(80px, 10vw, 116px);
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
  animation: spinIt 8s linear infinite !important;
  animation-play-state: running !important;
  will-change: transform;
}

@keyframes spinIt { 
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); } 
}

.badge-star {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.badge-star svg { 
  width: clamp(22px, 3vw, 30px); 
  height: clamp(22px, 3vw, 30px); 
}

/* Thumbs row */
.thumbs-row {
  display: flex;
  align-items: center;
  gap: clamp(6px, 1vw, 10px);
  width: 100%;
}

.nav-btn {
  width: clamp(32px, 4vw, 40px); 
  height: clamp(32px, 4vw, 40px);
  border-radius: 50%;
  border: 1.5px solid #c6c6be;
  background: white;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  color: #333;
  font-size: clamp(12px, 1.5vw, 14px);
  transition: background 0.18s;
}
.nav-btn:hover { background: #eeeeea; }

.thumbs-track {
  display: flex; gap: clamp(6px, 1vw, 10px);
  flex: 1; overflow: hidden;
}

.thumb {
  flex: 1;
  height: clamp(60px, 10vw, 88px);
  border-radius: clamp(10px, 1.5vw, 13px);
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

/* Media Queries for specific breakpoints */
@media (max-width: 1024px) {
  .hero-wrap {
    padding: clamp(30px, 4vw, 50px) clamp(16px, 3vw, 40px) clamp(24px, 3vw, 40px);
  }
  
  .hero-wrap::before {
    right: 38%;
  }
  
  .hero-left {
    flex: 0 0 52%;
    max-width: 52%;
    padding-right: 20px;
  }
  
  .hero-right {
    flex: 0 0 48%;
    max-width: 48%;
    padding-left: 12px;
  }
  
  .main-img-box {
    height: clamp(200px, 30vw, 350px);
  }
  
  .badge-wrap {
    left: -40px;
    width: 90px;
    height: 90px;
  }
}

@media (max-width: 768px) {
  .hero-wrap {
    flex-direction: column;
    padding: clamp(80px, 15vh, 100px) clamp(16px, 3vw, 32px) clamp(32px, 5vw, 50px);
    min-height: calc(100vh - 80px);
  }
  
  .hero-wrap::before {
    display: none;
  }
  
  .hero-left {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
    margin-bottom: clamp(24px, 4vw, 40px);
  }
  
  .hero-right {
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
  }
  
  .hero-sub {
    max-width: 100%;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .main-img-box {
    height: clamp(220px, 40vw, 320px);
  }
  
  .badge-wrap {
    top: 16px;
    left: 16px;
    width: 80px;
    height: 80px;
  }
  
  .thumbs-row {
    gap: 8px;
  }
  
  .thumb {
    height: 70px;
  }
}

@media (max-width: 480px) {
  .hero-wrap {
    padding: clamp(80px, 15vh, 100px) 16px 32px;
    min-height: calc(100vh - 80px);
  }
  
  .hero-heading {
    font-size: clamp(24px, 6vw, 36px);
  }
  
  .hero-sub {
    font-size: 13px;
  }
  
  .btn-gs {
    width: 100%;
    justify-content: center;
  }
  
  .main-img-box {
    height: clamp(180px, 45vw, 250px);
  }
  
  .badge-wrap {
    width: 70px;
    height: 70px;
  }
  
  .thumb {
    height: 60px;
  }
  
  .nav-btn {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 360px) {
  .hero-wrap {
    padding: clamp(80px, 15vh, 100px) 12px 32px;
    min-height: calc(100vh - 80px);
  }
  
  .hero-heading {
    font-size: 22px;
  }
  
  .hero-sub {
    font-size: 12px;
  }
  
  .main-img-box {
    height: 160px;
  }
  
  .badge-wrap {
    width: 60px;
    height: 60px;
  }
}

/* Landscape orientation optimizations */
@media (max-height: 500px) and (orientation: landscape) {
  .hero-wrap {
    padding: clamp(16px, 2vw, 32px) clamp(16px, 3vw, 48px) clamp(16px, 2vw, 32px);
    min-height: 100vh;
  }
  
  .hero-left {
    margin-bottom: 16px;
  }
  
  .hero-sub {
    margin-bottom: 16px;
  }
  
  .main-img-box {
    height: clamp(150px, 25vh, 280px);
  }
  
  .badge-wrap {
    top: 12px;
  }
  
  .thumb {
    height: clamp(50px, 8vh, 70px);
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero-wrap {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Print styles */
@media print {
  .hero-wrap {
    display: none;
  }
}

/* Reduced motion preference — badge-spin intentionally excluded to keep spinning */
@media (prefers-reduced-motion: reduce) {
  .s-img,
  .thumb img,
  .hero-left .expert-tag,
  .hero-left .hero-heading,
  .hero-left .hero-sub,
  .hero-left .hero-actions,
  .hero-right {
    animation: none !important;
    transition: none !important;
  }
}
`

export default Hero;