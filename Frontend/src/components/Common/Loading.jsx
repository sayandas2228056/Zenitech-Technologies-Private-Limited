import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Logo.png'

const Loading = () => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 33) setPhase(0)
    else if (progress < 66) setPhase(1)
    else setPhase(2)
  }, [progress])

  const phases = ['Initializing systems...', 'Securing connection...', 'Loading workspace...']

  return (
    <div style={styles.wrapper}>
      {/* Animated background grid */}
      <div style={styles.grid} />

      {/* Scanning line */}
      <div style={styles.scanLine} />

      {/* Corner brackets */}
      <div style={{ ...styles.corner, top: 24, left: 24, borderTop: '2px solid #f97316', borderLeft: '2px solid #f97316' }} />
      <div style={{ ...styles.corner, top: 24, right: 24, borderTop: '2px solid #f97316', borderRight: '2px solid #f97316' }} />
      <div style={{ ...styles.corner, bottom: 24, left: 24, borderBottom: '2px solid #f97316', borderLeft: '2px solid #f97316' }} />
      <div style={{ ...styles.corner, bottom: 24, right: 24, borderBottom: '2px solid #f97316', borderRight: '2px solid #f97316' }} />

      {/* Main content */}
      <div style={styles.content}>
        {/* Logo area */}
        <div style={styles.logoWrapper}>
          <div style={styles.logoRing}>
            <img src={Logo} alt="Zenitech Logo" style={styles.logo} />
          </div>
          <div style={styles.logoPulse} />
        </div>

        {/* Company name */}
        <div style={styles.nameBlock}>
          <h1 style={styles.name}>
            <span style={styles.nameOrange}>ZENITECH TECHNOLOGIES</span>
           
          </h1>
          <p style={styles.tagline}>PRIVATE LIMITED</p>
        </div>

        {/* Divider */}
        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerDot} />
          <div style={styles.dividerLine} />
        </div>

        {/* Status text */}
        <p style={styles.status}>{phases[phase]}</p>

        {/* Progress bar */}
        <div style={styles.progressContainer}>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
            <div style={{ ...styles.progressGlow, left: `${progress}%` }} />
          </div>
          <div style={styles.progressMeta}>
            <span style={styles.progressLabel}>LOADING</span>
            <span style={styles.progressPercent}>{progress}%</span>
          </div>
        </div>

        {/* Subtitle */}
        <p style={styles.subtitle}>Cybersecurity & Cloud Computing</p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Barlow+Condensed:wght@400;600;700&display=swap');

        @keyframes scanMove {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 8px #f97316; }
          50% { box-shadow: 0 0 24px #f97316, 0 0 48px #f9731644; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'fixed',
    inset: 0,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: "'Barlow Condensed', sans-serif",
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    pointerEvents: 'none',
  },
  scanLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)',
    animation: 'scanMove 3s linear infinite',
    pointerEvents: 'none',
  },
  corner: {
    position: 'absolute',
    width: 32,
    height: 32,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
    animation: 'fadeInUp 0.6s ease both',
    padding: '0 24px',
    width: '100%',
    maxWidth: 480,
  },
  logoWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoRing: {
    width: 88,
    height: 88,
    borderRadius: '50%',
    border: '2px solid transparent',
    borderTopColor: '#f97316',
    borderRightColor: '#f97316',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'ringRotate 2s linear infinite, glow 2s ease-in-out infinite',
    backgroundColor: '#f5f5f5',
  },
  logoPulse: {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    border: '1px solid rgba(249,115,22,0.4)',
    animation: 'pulse 2s ease-in-out infinite',
  },
  logo: {
    width: 56,
    height: 56,
    objectFit: 'contain',
    borderRadius: '50%',
  },
  nameBlock: {
    textAlign: 'center',
    lineHeight: 1,
  },
  name: {
    margin: 0,
    fontSize: 'clamp(26px, 6vw, 36px)',
    fontWeight: 700,
    letterSpacing: '0.08em',
    lineHeight: 1.1,
  },
  nameOrange: {
    color: '#f97316',
  },
  nameWhite: {
    color: '#f97316',
  },
  tagline: {
    margin: '6px 0 0',
    fontSize: 13,
    letterSpacing: '0.3em',
    color: '#f97316',
    fontFamily: "'Share Tech Mono', monospace",
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '80%',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)',
  },
  dividerDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: '#f97316',
    boxShadow: '0 0 8px rgba(249,115,22,0.5)',
  },
  status: {
    margin: 0,
    color: '#f97316',
    fontSize: 13,
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '0.1em',
  },
  progressContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  progressTrack: {
    position: 'relative',
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 2,
    overflow: 'visible',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #ea580c, #f97316)',
    borderRadius: 2,
    transition: 'width 0.1s linear',
  },
  progressGlow: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: '#f97316',
    boxShadow: '0 0 12px 4px rgba(249,115,22,0.4)',
    transition: 'left 0.1s linear',
  },
  progressMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 11,
    letterSpacing: '0.25em',
    color: '#666',
    fontFamily: "'Share Tech Mono', monospace",
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: 700,
    color: '#f97316',
    fontFamily: "'Share Tech Mono', monospace",
  },
  subtitle: {
    margin: 0,
    color: '#888',
    fontSize: 12,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    fontFamily: "'Share Tech Mono', monospace",
  },
}

export default Loading