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

const HeroBotm = () => {
  const [displayedLines, setDisplayedLines] = useState([""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

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
    <section
      className="w-full min-h-[40vh] relative overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      style={{ backgroundImage: `url(${BgPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex flex-col items-end justify-end h-full px-4 py-8 min-h-[40vh]">
        <div className="text-white text-right text-base md:text-lg lg:text-xl font-normal leading-snug drop-shadow-lg mb-6 font-mono min-h-[8em]">
          {displayedLines.map((line, idx) => (
            <span key={idx}>{line}<br /></span>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto items-center md:items-end">
          <a href='/services'>
            <button className="w-full md:w-auto px-6 py-2 border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-orange-600 transition duration-300">
              Our Services
            </button>
          </a>
          <a href='/product-demo'>
            <button className="w-full md:w-auto px-6 py-2 border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-orange-600 transition duration-300">
              Book a Demo
            </button>
          </a>
          <a href='/appointment'>
            <button className="w-full md:w-auto px-6 py-2 border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-orange-600 transition duration-300">
              Book an Appointment
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBotm