import { useState, useEffect } from 'react';
import { FaRegHandshake } from 'react-icons/fa';
import CntPic from "../../assets/Axep.jpg";
// Mock image - replace with your actual CntPic import


const Bright1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center py-24 overflow-hidden"
      style={{ backgroundImage: `url(${CntPic})` }}
    >
      {/* Subtle dark blurred background image */}
      <img
        src={CntPic}
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        style={{ zIndex: 0, filter: 'blur(6px) brightness(0.5)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168,85,247,0.12) 1px, transparent 0)`, // violet grid
          backgroundSize: '44px 44px',
        }}
      />
      {/* Main Content Container */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center max-w-3xl w-full mx-4 md:mx-auto py-20 px-6 md:px-12 rounded-[2.5rem] shadow-2xl transition-all duration-1000 text-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        onMouseMove={handleMouseMove}
        style={{
          background:
            'linear-gradient(135deg, rgba(76,29,149,0.97) 0%, rgba(54,16,88,0.99) 100%)', // darker purple to violet
          backdropFilter: 'blur(36px) saturate(160%)',
          WebkitBackdropFilter: 'blur(36px) saturate(160%)',
          border: '1.5px solid rgba(168,85,247,0.22)', // soft violet border
          boxShadow:
            '0 25px 50px -12px rgba(76,29,149,0.32), 0 0 0 1px rgba(168,85,247,0.08), inset 0 1px 0 rgba(139,92,246,0.10)',
        }}
      >
        {/* Subtle inner glow following mouse */}
        <div
          className="absolute inset-0 rounded-[2.5rem] opacity-40 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.13), transparent 40%)`, // violet glow
          }}
        />
        {/* Main Heading */}
        <h1
          className={`text-4xl md:text-6xl font-bold leading-[1.08] text-white mb-7 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            textShadow: '0 2px 40px rgba(91,33,182,0.5)', // purple shadow
          }}
        >
          Let&apos;s create something{' '}
          <span
            className="bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            extraordinary
          </span>{' '}
          together
        </h1>
        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-purple-100/90 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
            textShadow: '0 1px 3px rgba(139,92,246,0.3)', // purple shadow
          }}
        >
          Ready to transform your vision into reality? Our team of experts is here to deliver exceptional results that exceed your expectations.
        </p>
        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
        >
          <a href="/contact">
            <button className="group relative px-10 py-5 rounded-full font-semibold text-white text-lg shadow-xl transition-all duration-300 border border-purple-400/40 backdrop-blur-md bg-transparent font-sans overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <div className="relative flex items-center gap-4">
                <FaRegHandshake className="text-2xl transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
                <span className="font-medium">Let&apos;s Work Together</span>
              </div>
            </button>
          </a>
        </div>
      </div>
      {/* Floating Dots for Depth */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-fuchsia-400/60 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping delay-1000" />
      <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-ping delay-2000" />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Bright1;