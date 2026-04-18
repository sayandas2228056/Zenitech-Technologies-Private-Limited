import React, { useState, useEffect } from "react";
import BgPic from "../../assets/pic6.jpg";

const taglineLines = [
  "Our success is measured by your success.",
  "That's why we work side-by-side with your teams,",
  "understanding your priorities and building solutions",
  " that fit seamlessly into your workflows.",
  "The result? Technology that feels intuitive, ",
  "adapts effortlessly, and delivers measurable business value.",
];

const HERO_BOTM_CSS = `
.hero-botm-section {
  width: 100%;
  min-height: 40vh;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(to bottom right, #111827, #1f2937);
  background-image: url('${BgPic}');
  background-size: cover;
  background-position: center;
  will-change: transform;
}

.hero-botm-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.hero-botm-content {
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  padding: clamp(16px, 2vw, 32px) clamp(16px, 3vw, 32px) clamp(16px, 2vw, 32px);
  min-height: 40vh;
}

.hero-botm-text {
  color: white;
  text-align: right;
  font-size: clamp(14px, 2vw, 20px);
  font-weight: 700;
  line-height: 1.5;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: clamp(16px, 2vw, 24px);
  font-family: 'Courier New', monospace;
  min-height: clamp(8em, 12vw, 12em);
  will-change: opacity;
}

.hero-botm-buttons {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1vw, 12px);
  width: 100%;
  align-items: center;
}

.hero-botm-btn {
  width: 100%;
  padding: clamp(10px, 1.5vw, 12px) clamp(20px, 3vw, 24px);
  border: 2px solid white;
  color: white;
  font-weight: 600;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  will-change: transform, background-color, color;
}

.hero-botm-btn:hover {
  background: white;
  color: #ea580c;
  transform: translateY(-2px);
}

/* Media Queries for different screen sizes */
@media (min-width: 768px) {
  .hero-botm-buttons {
    flex-direction: row;
    gap: clamp(12px, 1.5vw, 16px);
    width: auto;
    align-items: flex-end;
  }
  
  .hero-botm-btn {
    width: auto;
  }
}

@media (max-width: 480px) {
  .hero-botm-section {
    min-height: 50vh;
  }
  
  .hero-botm-content {
    padding: 16px;
  }
  
  .hero-botm-text {
    font-size: 13px;
    min-height: 10em;
  }
  
  .hero-botm-buttons {
    gap: 8px;
  }
  
  .hero-botm-btn {
    padding: 10px 16px;
    font-size: 14px;
  }
}

@media (max-width: 360px) {
  .hero-botm-text {
    font-size: 12px;
  }
  
  .hero-botm-btn {
    padding: 10px 14px;
    font-size: 13px;
  }
}

/* Landscape orientation optimizations */
@media (max-height: 500px) and (orientation: landscape) {
  .hero-botm-section {
    min-height: 60vh;
  }
  
  .hero-botm-content {
    padding: clamp(12px, 2vw, 20px);
  }
  
  .hero-botm-text {
    margin-bottom: 12px;
    min-height: clamp(6em, 10vh, 8em);
  }
  
  .hero-botm-buttons {
    gap: 8px;
  }
  
  .hero-botm-btn {
    padding: clamp(8px, 1vw, 10px) clamp(16px, 2vw, 20px);
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero-botm-section {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .hero-botm-section,
  .hero-botm-btn {
    transition: none !important;
    animation: none !important;
    will-change: auto;
  }
}
`;

const HeroBotm = () => {
  const [displayedLines, setDisplayedLines] = useState([""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    // Preload background image
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = BgPic;
    preloadLink.id = '__herobotm_preload__';
    if (!document.getElementById('__herobotm_preload__')) {
      document.head.appendChild(preloadLink);
    }

    // Inject CSS
    let styleEl = document.getElementById('__herobotm_css__');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = '__herobotm_css__';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = HERO_BOTM_CSS;

    return () => {
      const preloadEl = document.getElementById('__herobotm_preload__');
      if (preloadEl && preloadEl.parentNode) {
        preloadEl.parentNode.removeChild(preloadEl);
      }
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, []);

  useEffect(() => {
    if (lineIdx >= taglineLines.length) return;
    const timer = setTimeout(() => {
      if (charIdx < taglineLines[lineIdx].length) {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[lineIdx] = taglineLines[lineIdx].slice(0, charIdx + 1);
          return newLines;
        });
        setCharIdx(c => c + 1);
      } else {
        setDisplayedLines(prev => [...prev, ""]);
        setLineIdx(l => l + 1);
        setCharIdx(0);
      }
    }, charIdx < taglineLines[lineIdx]?.length ? 20 : 500);
    return () => clearTimeout(timer);
  }, [lineIdx, charIdx]);

  return (
    <section className="hero-botm-section">
      {/* Black overlay */}
      <div className="hero-botm-overlay" />

      <div className="hero-botm-content">
        <div className="hero-botm-text font-bold">
          {displayedLines.map((line, idx) => (
            <span key={idx}>{line}<br /></span>
          ))}
        </div>
        <div className="hero-botm-buttons">
          <a href='/services' className="hero-botm-btn">
            Our Services
          </a>
          <a href='/contact' className="hero-botm-btn">
            Contact Us
          </a>
          <a href='/appointment' className="hero-botm-btn">
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBotm;