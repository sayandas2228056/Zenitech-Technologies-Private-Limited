import { useState, useEffect } from 'react';
import { FaRegHandshake } from 'react-icons/fa';
import BgPic from '../../assets/Axep3.jpg';

const Bright2 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <section
            className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center py-24 overflow-hidden"
            style={{ backgroundImage: `url(${BgPic})` }}
        >
            {/* Blue dot grid noise */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(55,138,221,0.18) 1px, transparent 0)`,
                    backgroundSize: '44px 44px',
                    zIndex: 1,
                }}
            />

            {/* Main card */}
            <div
                className={`relative flex flex-col items-center justify-center max-w-3xl w-full mx-4 md:mx-auto py-20 px-6 md:px-12 rounded-[2.5rem] shadow-2xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                onMouseMove={handleMouseMove}
                style={{
                    zIndex: 2,
                    background:
                        'linear-gradient(135deg, rgba(4,44,83,0.97) 0%, rgba(12,68,124,0.99) 100%)',
                    backdropFilter: 'blur(36px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(36px) saturate(160%)',
                    border: '1.5px solid rgba(55,138,221,0.25)',
                    boxShadow:
                        '0 25px 50px -12px rgba(4,44,83,0.45), 0 0 0 1px rgba(55,138,221,0.08), inset 0 1px 0 rgba(133,183,235,0.10)',
                }}
            >
                {/* Mouse-follow inner glow */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(55,138,221,0.14), transparent 40%)`,
                        opacity: 0.55,
                    }}
                />

                {/* Badge */}
                <div
                    className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    style={{
                        background: 'rgba(55,138,221,0.15)',
                        border: '1px solid rgba(55,138,221,0.3)',
                        color: '#85B7EB',
                    }}
                >
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#85B7EB', animation: 'b2-pulse 2s ease infinite' }}
                    />
                    Available for new projects
                </div>

                {/* Heading */}
                <h2
                    className={`text-4xl md:text-6xl font-bold leading-[1.08] text-white mb-7 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        textShadow: '0 2px 40px rgba(4,44,83,0.6)',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Partner with{' '}
                     <span
            className="bg-gradient-to-r from-orange-400 via-orange-550 to-orange-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Zenitech
          </span>
                    
                </h2>

                {/* Subtitle */}
                <p
                    className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    style={{
                        color: 'rgba(181,212,244,0.88)',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                        textShadow: '0 1px 3px rgba(24,95,165,0.3)',
                    }}
                >
                    Ready to transform your vision into reality? Our team of cybersecurity experts is here to deliver exceptional protection that exceeds your expectations.
                </p>

                {/* CTA Button */}
                <div
                    className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                >
                    <a href="/contact">
                        <button
                            className="group relative px-10 py-5 rounded-full font-semibold text-white text-lg shadow-xl transition-all duration-300 overflow-hidden"
                            style={{
                                background: 'transparent',
                                border: '1.5px solid rgba(55,138,221,0.45)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            {/* hover fill */}
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #185FA5, #378ADD)',
                                    boxShadow: 'inset 0 1px 0 rgba(133,183,235,0.2)',
                                }}
                            />
                            {/* glow ring on hover */}
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ boxShadow: '0 0 28px rgba(55,138,221,0.4)' }}
                            />
                            <div className="relative flex items-center gap-4">
                                <FaRegHandshake
                                    className="text-2xl transition-transform duration-300 group-hover:scale-110"
                                    style={{ filter: 'drop-shadow(0 0 8px rgba(55,138,221,0.8))' }}
                                />
                                <span className="font-medium">Let&apos;s Work Together</span>
                            </div>
                        </button>
                    </a>
                </div>
            </div>

          
            <style>{`
        @keyframes b2-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
        </section>
    );
};

export default Bright2;