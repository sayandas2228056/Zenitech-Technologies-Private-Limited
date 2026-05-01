import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";

const LoadingLight = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 18);

    return () => clearInterval(timer);
  }, []);

  const getStatus = () => {
    if (progress < 30) return "Initializing...";
    if (progress < 70) return "Preparing environment...";
    return "Launching...";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f8f9fb] overflow-hidden">

      {/* 🔥 Soft gradient glow */}
      <div className="absolute w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-3xl" />

      {/* 🔥 Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* 🔥 Main Card */}
      <div className="relative z-10 w-[90%] max-w-md p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-orange-200 shadow-xl text-center">

        {/* 🔥 Logo */}
        <div className="relative flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border border-orange-300 flex items-center justify-center animate-spin-slow bg-white">
            <img src={Logo} alt="logo" className="w-12 h-12 object-contain" />
          </div>

          <div className="absolute inset-0 rounded-full border border-orange-200 animate-ping" />
        </div>

        {/* 🔥 Brand */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-orange-500">ZENITECH TECHNOLOGIES</span>{" "}
          
        </h1>

        <p className="text-xs tracking-[0.3em] text-orange-500 mb-6">
          PRIVATE LIMITED
        </p>

        {/* 🔥 Status */}
        <p className="text-sm text-orange-500 mb-4 font-mono tracking-wider">
          {getStatus()}
        </p>

        {/* 🔥 Progress */}
        <div className="w-full">
          <div className="relative h-[4px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
            <span>LOADING</span>
            <span className="text-orange-500">{progress}%</span>
          </div>
        </div>

        {/* 🔥 Footer */}
        <p className="mt-6 text-[11px] text-gray-400 tracking-widest uppercase">
          Cybersecurity • Cloud Solutions 
        </p>
      </div>

      {/* 🔥 Animation */}
      <style>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingLight;