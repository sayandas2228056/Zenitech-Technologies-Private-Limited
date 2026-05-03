import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";

const LoadingLight = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /*
     * Simulate a realistic loading curve:
     *  – Fast start (0→40) to feel responsive
     *  – Slow middle (40→80) where real assets load
     *  – Quick finish (80→100) once resources settle
     */
    let raf;
    const start = Date.now();
    const DURATION = 2000; // ms, matches the optimized App loader timing

    const tick = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / DURATION, 1);

      // Ease-out cubic curve — fast then slowing
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const getStatus = () => {
    if (progress < 25) return "Initializing systems...";
    if (progress < 50) return "Loading resources...";
    if (progress < 80) return "Preparing interface...";
    return "Launching...";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#E8F1FB] overflow-hidden z-[9999]">

      {/* Soft gradient glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(24,95,165,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(24,95,165,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main Card */}
      <div className="relative z-10 w-[90%] max-w-md p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl text-center">

        {/* Logo */}
        <div className="relative flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border border-blue-300 flex items-center justify-center animate-spin-slow bg-white">
            <img src={Logo} alt="Zenitech Technologies logo" className="w-12 h-12 object-contain" />
          </div>

          <div className="absolute inset-0 rounded-full border border-blue-200 animate-ping" />
        </div>

        {/* Brand */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-orange-500">
          ZENITECH TECHNOLOGIES PRIVATE LIMITED
        </h1>

        {/* Status */}
        <p className="text-sm text-blue-600 mb-4 font-mono tracking-wider">
          {getStatus()}
        </p>

        {/* Progress */}
        <div className="w-full">
          <div className="relative h-[4px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
              style={{
                width: `${progress}%`,
                transition: 'width 0.15s ease-out',
              }}
            />
          </div>

          <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
            <span>LOADING</span>
            <span className="text-blue-500">{progress}%</span>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-[11px] text-gray-500 tracking-widest uppercase">
          Cybersecurity • Cloud Solutions 
        </p>
      </div>

      {/* Animation */}
      <style>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingLight;