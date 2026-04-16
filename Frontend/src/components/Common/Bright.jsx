import React, { useState, useEffect } from 'react';
import { FaRegHandshake } from 'react-icons/fa';
import CntPic from "../../assets/pic3.jpg"; // your copper/ember image

const Bright = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => { setIsVisible(true); }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center py-24 overflow-hidden"
      style={{ backgroundImage: `url(${CntPic})` }}
    >
      <img
        src={CntPic}
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ zIndex: 0, filter: 'blur(6px) brightness(0.35)', opacity: 0.6 }}
      />
      {/* Copper-toned dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(205,127,50,0.18) 1px, transparent 0)`,
          backgroundSize: '44px 44px',
        }}
      />

      <div
        className={`relative z-10 flex flex-col items-center justify-center max-w-3xl w-full mx-4 md:mx-auto py-20 px-6 md:px-12 rounded-[2.5rem] shadow-2xl transition-all duration-1000 text-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        onMouseMove={handleMouseMove}
        style={{
          background: 'linear-gradient(135deg, rgba(80,30,8,0.97) 0%, rgba(45,12,3,0.99) 100%)',
          backdropFilter: 'blur(36px) saturate(160%)',
          WebkitBackdropFilter: 'blur(36px) saturate(160%)',
          border: '1.5px solid rgba(205,127,50,0.28)',
          boxShadow:
            '0 25px 50px -12px rgba(140,50,0,0.45), 0 0 0 1px rgba(205,127,50,0.08), inset 0 1px 0 rgba(205,127,50,0.12)',
        }}
      >
        {/* Mouse-follow ember glow */}
        <div
          className="absolute inset-0 rounded-[2.5rem] opacity-40 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(205,127,50,0.15), transparent 40%)`,
          }}
        />

        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full"
          style={{ background: 'rgba(205,127,50,0.12)', border: '1px solid rgba(205,127,50,0.3)' }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#cd7f32', boxShadow: '0 0 8px rgba(205,127,50,0.9)' }}
          />
          <span className="text-[13px] tracking-wide" style={{ color: '#e0a060' }}>
            Available for new projects
          </span>
        </div>

        <h1
          className={`text-4xl md:text-6xl font-bold leading-[1.08] text-white mb-7 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            textShadow: '0 2px 40px rgba(160,60,0,0.6)',
          }}
        >
          Let&apos;s create something{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #e8943a, #cd7f32, #f5c87a, #cd7f32)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            extraordinary
          </span>{' '}
          together
        </h1>

        <p
          className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          style={{ color: 'rgba(240,200,160,0.85)' }}
        >
          Ready to transform your vision into reality? Our team of experts is here to deliver
          exceptional results that exceed your expectations.
        </p>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <a href="/contact">
            <button
              className="group relative px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-300 backdrop-blur-md bg-transparent overflow-hidden"
              style={{ border: '1.5px solid rgba(205,127,50,0.45)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: 'linear-gradient(90deg, rgba(160,80,20,0.7), rgba(200,100,30,0.6))' }}
              />
              <div className="relative flex items-center gap-4">
                <FaRegHandshake
                  className="text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(205,127,50,0.8))' }}
                />
                <span>Let&apos;s Work Together</span>
              </div>
            </button>
          </a>
        </div>
      </div>

      {/* Floating dots */}
      <div className="absolute top-1/4 right-10 w-2 h-2 rounded-full animate-ping" style={{ background: 'rgba(230,140,50,0.7)' }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full animate-ping delay-1000" style={{ background: 'rgba(200,100,30,0.5)' }} />
      <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 rounded-full animate-ping delay-2000" style={{ background: 'rgba(210,120,40,0.6)' }} />
    </section>
  );
};

export default Bright;