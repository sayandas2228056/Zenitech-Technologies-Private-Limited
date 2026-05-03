import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award, ChevronRight, ChevronLeft, User, Building } from 'lucide-react';

const EnhancedCareerTimeline = () => {
  const experiences = [
    {
      company: "ZENITECH TECHNOLOGIES PRIVATE LIMITED",
      role: "Founder & CEO",
      period: "Apr 2026 - Present",
      duration: "2 mos",
      location: "Bengaluru, India",
      description: "Trusted Experts in Cybersecurity & Cloud Solutions, serving PAN India & Global clients.",
      highlights: [
        "Serve pan-India and global clients with enterprise-grade Cybersecurity and Cloud Solutions.",
      ],
      skills: ["Cybersecurity", "Cloud Computing", "IT Services"],
      color: "from-blue-600 to-indigo-800"
    },
    {
      company: "Zenitech Solutions",
      role: "Founder & CEO",
      period: "Oct 2021 - present",
      duration: "4 Years 4 Months",
      location: "Bengaluru, India",
      description: "Zenitech Solutions is an IT Services & Consulting firm having corporate office at Bengaluru, Silicon Valley of India. We offer IT, Cloud, Cybersecurity, Software, Telecom services PAN India & across the globe.",
      highlights: [
        "Deliver solutions that fit the unique requirements of customers.",
        "Offer products, services, solutions from Reliance Jio, Tata Tele, AWS, Microsoft Azure, Google Cloud, and many more industry leaders.",
        "Provide comprehensive Cloud Solutions including AWS, Azure, Google Cloud and more.",
        "Deliver Cyber Security Solutions including Firewall, Endpoint Security, Data Loss Prevention, and more.",
        "Offer Telecom Services including Internet, MPLS VPN, SD WAN, and Cloud Telephony Solutions."
      ],
      skills: ["Sales", "Business Development", "Cloud Computing", "Cybersecurity", "Software", "Telecommunications", "IT Services"],
      color: "from-blue-600 to-indigo-800"
    },
    {
      company: "Naush Group",
      role: "Business Head",
      period: "Oct 2020 - Sep 2021",
      duration: "1 yr",
      location: "Kolkata, India",
      description: "Naush Group is a diversified business entity engaged in various sectors including real estate, infrastructure, and trading.",
      highlights: [
        "Spearheaded business operations and strategic planning across multiple verticals including real estate and trading.",
        "Identified and explored new business opportunities to drive revenue growth and market presence.",
        "Built partnerships with vendors, investors, and clients to expand the company's footprint in key markets.",
        "Implemented cost optimization strategies that improved overall operational efficiency.",
        "Oversaw project execution timelines, ensuring timely delivery and client satisfaction."
      ],
      skills: ["Business Strategy", "Team Leadership", "Market Expansion", "Project Management", "Operations Management"],
      color: "from-purple-600 to-indigo-700"
    },
    {
      company: "Reliance Communications Ltd",
      role: "Assistant General Manager (Enterprise Business)",
      period: "Aug 2011 - Sep 2020",
      duration: "9 yrs 2 mos",
      location: "Kolkata, India",
      description: "Reliance Communications is the flagship company of Anil Dhirubhai Ambani Group Company. It is India's leading integrated telecommunication company.",
      highlights: [
        "Managed top enterprise customers across multiple industries in East Region of India.",
        "Developed new business opportunities from new/existing customers and reviewed customer requirements.",
        "Led discussions with customers on industry trends and proposed high-level technical solutions.",
        "Awarded Foreign Tour twice for over-achieving sales target.",
        "Executed orders from Allahabad Bank (1500 locations) and several other major clients."
      ],
      skills: ["Enterprise Sales", "Account Management", "Solution Selling", "Telecommunications", "Business Development"],
      color: "from-teal-600 to-blue-700"
    },
    {
      company: "Bharti Airtel Limited",
      role: "Manager-Sales & Marketing",
      period: "Feb 2010 - Jul 2011",
      duration: "1 yr 6 mos",
      location: "Bangalore, India",
      description: "Airtel comes from Bharti Airtel Limited, one of Asia's leading integrated telecom services providers pioneering several innovations in the telecom sector.",
      highlights: [
        "Led a team to contact customer needs and represented the company to B2B customers.",
        "Understood customer businesses and requirements, created and submitted proposals.",
        "Received Gold Award for increasing revenue from top B2B enterprise customers.",
        "Managed a team of 15 personnel and overachieved AOP target."
      ],
      skills: ["Team Leadership", "B2B Sales", "Customer Relationship Management", "Revenue Growth", "Telecommunications"],
      color: "from-red-600 to-rose-700"
    },
    {
      company: "Tata Teleservices Ltd",
      role: "Manager-Sales (Enterprise Business)",
      period: "Sep 2009 - Jan 2010",
      duration: "5 mos",
      location: "Bangalore, India",
      description: "Tata Teleservices Limited is the flagship company of Tata Groups in the telecom sector.",
      highlights: [
        "Responsible for achieving sales targets – order booking, maximizing revenue & customer retention.",
        "Interfaced with customers & pitched value propositions, enabling solution creation.",
        "Managed relationships and business for strategic customers like Intel, Microsoft, AOL, Capgemini, Toyota Kirloskar, and more."
      ],
      skills: ["Enterprise Sales", "Key Account Management", "Solution Development", "Client Relations", "Telecommunications"],
      color: "from-cyan-600 to-blue-700"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('');
  const cardRef = useRef(null);

  const TIMELINE_START = 2009;
  const TIMELINE_END = 2027; // extended to give right-side breathing room

  const parseStartDecimal = (period) => {
    const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    const parts = period.split(' - ')[0].trim().split(' ');
    const month = parts[0];
    const year = parseInt(parts[1]);
    return year + (monthMap[month] || 0) / 12;
  };

  // Sort experiences by start date ascending for timeline ordering
  const sortedOrder = [...experiences]
    .map((exp, i) => ({ i, val: parseStartDecimal(exp.period) }))
    .sort((a, b) => a.val - b.val)
    .map(x => x.i);

  const getPositionPercent = (period) => {
    const decimal = parseStartDecimal(period);
    return ((decimal - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100;
  };

  // Spread dots that are too close together (min 8% gap)
  const computeDotPositions = () => {
    const MIN_GAP = 8;
    // Build raw positions in index order
    const raw = experiences.map((exp, i) => ({
      i,
      raw: getPositionPercent(exp.period),
      pos: getPositionPercent(exp.period),
    }));

    // Sort by raw position, spread if overlapping
    const sorted = [...raw].sort((a, b) => a.raw - b.raw);
    for (let k = 1; k < sorted.length; k++) {
      if (sorted[k].pos - sorted[k - 1].pos < MIN_GAP) {
        sorted[k].pos = sorted[k - 1].pos + MIN_GAP;
      }
    }

    // Map back to original index
    const result = {};
    sorted.forEach(({ i, pos }) => { result[i] = Math.min(pos, 96); });
    return result;
  };

  const dotPositions = computeDotPositions();

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 400);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === activeIndex) return;
    setDirection(index > activeIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.remove('animate-slide-in-right', 'animate-slide-in-left');
      void cardRef.current.offsetWidth;
      cardRef.current.classList.add(direction === 'next' ? 'animate-slide-in-left' : 'animate-slide-in-right');
    }
  }, [activeIndex, direction]);

  const years = [];
  for (let y = TIMELINE_START; y <= TIMELINE_END; y += 2) years.push(y);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3 bg-blue-50 px-4 py-2 rounded-full">
            <span className="text-blue-800 font-semibold">Professional Portfolio</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Career Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 15 years of expertise in telecommunications, enterprise sales, and business leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-6 px-2">
          {/* Track */}
          <div className="h-1 bg-gray-200 rounded-full mx-4">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${(activeIndex / (experiences.length - 1)) * 100}%` }}
            />
          </div>

          {/* Year labels */}
          <div className="relative h-6 mt-1 mx-4">
            {years.map((year) => (
              <div
                key={year}
                className="absolute flex flex-col items-center"
                style={{ left: `${((year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100}%`, transform: 'translateX(-50%)' }}
              >
                <div className="h-2 w-px bg-gray-300" />
                <span className="text-xs text-gray-400 mt-0.5">{year}</span>
              </div>
            ))}
          </div>

          {/* Dots row — fixed height, no overflow */}
          <div className="relative mx-4 mt-6" style={{ height: '80px' }}>
            {experiences.map((exp, idx) => {
              const leftPct = dotPositions[idx];
              const isActive = idx === activeIndex;

              return (
                <div
                  key={idx}
                  className="absolute flex flex-col items-center cursor-pointer"
                  style={{
                    left: `${leftPct}%`,
                    top: 0,
                    transform: 'translateX(-50%)',
                    zIndex: isActive ? 20 : 10,
                  }}
                  onClick={() => handleDotClick(idx)}
                >
                  {/* Dot */}
                  <div
                    className={`rounded-full border-2 transition-all duration-300 flex items-center justify-center
                      ${isActive
                        ? 'w-5 h-5 border-indigo-700 bg-indigo-700 shadow-lg shadow-indigo-300'
                        : 'w-4 h-4 border-gray-400 bg-white hover:border-indigo-400'}`}
                  >
                    {isActive && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>

                  {/* Label — only for active dot, clamped width */}
                  {isActive && (
                    <div
                      className="mt-2 bg-white border border-indigo-100 rounded-lg shadow-md px-2 py-1 text-center"
                      style={{ minWidth: '110px', maxWidth: '160px' }}
                    >
                      <p className="font-semibold text-gray-800 text-xs leading-tight truncate">{exp.company}</p>
                      <p className="text-xs text-indigo-600 mt-0.5 whitespace-nowrap">{exp.period}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-10">
          <button
            className="bg-white text-gray-800 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg hover:bg-gray-50 transition disabled:opacity-50"
            onClick={handlePrev}
            disabled={isTransitioning}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
            <p className="text-gray-800 font-medium flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm">{activeIndex + 1} of {experiences.length}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 text-sm">{experiences[activeIndex].period}</span>
            </p>
          </div>

          <button
            className="bg-white text-gray-800 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg hover:bg-gray-50 transition disabled:opacity-50"
            onClick={handleNext}
            disabled={isTransitioning}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Experience Card */}
        <div
          ref={cardRef}
          className={`transform transition-all duration-400 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <div className={`bg-gradient-to-r ${experiences[activeIndex].color} text-white p-8`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {experiences[activeIndex].duration}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{experiences[activeIndex].role}</h2>
                  <div className="flex items-center text-white/90 gap-1">
                    <Building size={18} className="mr-1" />
                    <span className="text-xl">{experiences[activeIndex].company}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <Briefcase size={32} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center text-white/90">
                  <Calendar size={16} className="mr-2" />
                  <span>{experiences[activeIndex].period}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <MapPin size={16} className="mr-2" />
                  <span>{experiences[activeIndex].location}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Role</h3>
                    <p className="text-gray-700 leading-relaxed">{experiences[activeIndex].description}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeIndex].skills.map((skill, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Award size={20} className="mr-3 text-blue-600" />
                    Key Accomplishments
                  </h3>
                  <ul className="space-y-4">
                    {experiences[activeIndex].highlights.map((highlight, i) => (
                      <li key={i} className="flex bg-gray-50 p-4 rounded-xl">
                        <div className="mr-4 mt-1">
                          <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0" />
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block mb-6 mx-auto max-w-3xl">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-px bg-gray-300" />
              <span className="text-gray-500 font-medium">PROFESSIONAL PROFILE</span>
              <div className="w-20 h-px bg-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Connect with Haider Ali</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/haideraliraja/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a href="https://www.haider.zenitech.in/">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-xl hover:bg-gray-50 transition shadow-lg hover:shadow-xl">
                <User size={18} />
                View Profile
              </button>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(-40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left { animation: slideInLeft 0.4s forwards; }
        .animate-slide-in-right { animation: slideInRight 0.4s forwards; }
      `}</style>
    </div>
  );
};

export default EnhancedCareerTimeline;