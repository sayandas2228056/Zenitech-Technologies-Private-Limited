import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award, ChevronRight, ChevronLeft, ExternalLink, User, Building } from 'lucide-react';

const EnhancedCareerTimeline = () => {
  const experiences = [
    {
      company: "Zenitech Solutions",
      role: "Founder & CEO",
      period: "Oct 2021 - Feb 2026",
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
      description: "Naush Group is a diversified business entity engaged in various sectors including real estate, infrastructure, and trading. The group is known for its entrepreneurial approach and strategic growth in emerging markets.",
      highlights: [
        "Spearheaded business operations and strategic planning across multiple verticals including real estate and trading.",
        "Identified and explored new business opportunities to drive revenue growth and market presence.",
        "Built partnerships with vendors, investors, and clients to expand the company's footprint in key markets.",
        "Implemented cost optimization strategies that improved overall operational efficiency.",
        "Oversaw project execution timelines, ensuring timely delivery and client satisfaction."
      ],
      skills: [
        "Business Strategy",
        "Team Leadership",
        "Market Expansion",
        "Project Management",
        "Operations Management"
      ],
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
      role: "Manager-Sales & Marketing (Market Facing Title: B2B U&R Cluster Head)",
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

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 500);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === activeIndex) return;
    
    setDirection(index > activeIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.remove('animate-slide-in-right', 'animate-slide-in-left');
      void cardRef.current.offsetWidth; // Force reflow
      cardRef.current.classList.add(direction === 'next' ? 'animate-slide-in-left' : 'animate-slide-in-right');
    }
  }, [activeIndex, direction]);

  // Generate years for the timeline
  const generateYearMarks = () => {
    const startYear = 2009;
    const endYear = 2025;
    const years = [];
    
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    
    return years;
  };

  const years = generateYearMarks();
  
  // Calculate position percentage for experience on timeline
  const getPositionPercentage = (period) => {
    const startYear = 2009;
    const endYear = 2025;
    const totalYears = endYear - startYear;
    
    const [startDate] = period.split(' - ');
    const [month, year] = startDate.split(' ');
    
    // Convert month to number (0-11)
    const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    const monthNum = monthMap[month] / 12;
    const yearDiff = parseInt(year) - startYear;
    
    return ((yearDiff + monthNum) / totalYears) * 100;
  };

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

        {/* Timeline with years */}
        <div className="relative mb-12 px-6">
          <div className="h-1 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${(activeIndex / (experiences.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          {/* Year markers */}
          <div className="flex justify-between mt-2 relative">
            {years.map((year, idx) => (
              <div key={idx} className="text-xs text-gray-500 absolute transform -translate-x-1/2" style={{ left: `${((year - 2009) / (2025 - 2009)) * 100}%` }}>
                {year % 2 === 0 && (
                  <>
                    <div className="h-3 w-px bg-gray-300 mx-auto mb-1"></div>
                    {year}
                  </>
                )}
              </div>
            ))}
          </div>
          
          {/* Position indicators */}
          <div className="relative h-14 mt-8">
            {experiences.map((exp, idx) => {
              const position = getPositionPercentage(exp.period);
              return (
                <div 
                  key={idx}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer
                    ${idx === activeIndex ? 'z-20' : 'z-10'}`}
                  style={{ left: `${position}%`, top: '50%' }}
                  onClick={() => handleDotClick(idx)}
                >
                  <div className={`flex flex-col items-center`}>
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300
                      ${idx === activeIndex 
                        ? 'border-indigo-700 bg-white scale-125 shadow-lg' 
                        : 'border-gray-400 bg-gray-100 hover:scale-110'}`}
                    ></div>
                    <div className={`absolute top-full mt-2 transition-all duration-300 whitespace-nowrap text-center
                      ${idx === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                      <p className="font-medium text-gray-800">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.period}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation and Current Position */}
        <div className="flex justify-between items-center mb-12">
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
              <span className="text-gray-500">|</span>
              <span>{experiences[activeIndex].period}</span>
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
          className={`transform perspective-1000 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-500 hover:shadow-2xl">
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
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                        >
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
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
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
        
        {/* Footer - Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block mb-6 mx-auto max-w-3xl">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-px bg-gray-300"></div>
              <span className="text-gray-500 font-medium">PROFESSIONAL PROFILE</span>
              <div className="w-20 h-px bg-gray-300"></div>
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
            <a href="https://www.haider.zenitech.in/"><button 
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-xl hover:bg-gray-50 transition shadow-lg hover:shadow-xl"
            >
              
              <User size={18} />
              View Profile
            </button></a>
            
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
        
        .animate-slide-in-left {
          animation: slideInLeft 0.5s forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.5s forwards;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default EnhancedCareerTimeline;
