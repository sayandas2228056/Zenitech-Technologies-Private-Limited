import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const dropdownRef = React.useRef(null);
  const servicesDropdownRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    };

    if (aboutDropdown || servicesDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [aboutDropdown, servicesDropdown]);

  const toggleDropdown = () => {
    setAboutDropdown(!aboutDropdown);
    setServicesDropdown(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
    setAboutDropdown(false);
  };

  const handleMouseEnter = (name) => {
    setHoveredDropdown(name);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  return (
    <header className="fixed left-0 top-0 w-full z-40 transition-all duration-300">
      <div
        className={`flex items-center justify-between mx-auto transition-all duration-500
          ${scrolled
            ? `max-w-5xl mx-auto mt-6 px-6 py-2.5
               bg-white/90 backdrop-blur-xl rounded-full
               shadow-[0_8px_25px_rgba(0,0,0,0.12)]
               border border-gray-200`
            : `max-w-full mt-0 px-10 py-4 bg-white shadow-md`
          }
        `}
      >
        {/* Logo */}
        <a href="/">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Zenitech Logo" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent tracking-wide">
                ZENITECH TECHNOLOGIES
              </span>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent tracking-wide">
                PRIVATE LIMITED
              </span>
            </div>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 font-semibold text-amber-600 font-medium items-center">
          <a href="/" className="nav-link relative transition-all duration-200 hover:text-orange-600 px-2 py-1">
            Home
            <span className="nav-underline" />
          </a>
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => handleMouseEnter('About')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleDropdown}
              className={`nav-link flex items-center gap-1 transition-all duration-200 px-2 py-1 ${aboutDropdown || hoveredDropdown === 'About' ? 'text-orange-600' : 'hover:text-orange-600'
                }`}
            >
              About
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${aboutDropdown || hoveredDropdown === 'About' ? 'rotate-180' : ''
                  }`}
              />
              <span className="nav-underline" />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 bg-white/98 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] z-50 transition-all duration-200 ${aboutDropdown || hoveredDropdown === 'About'
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2'
                }`}
            >
              <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">About Us</a>
              <a href="/about/founder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">About Founder</a>
            </div>
          </div>
          <div
            className="relative"
            ref={servicesDropdownRef}
            onMouseEnter={() => handleMouseEnter('Services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleServicesDropdown}
              className={`nav-link flex items-center gap-1 transition-all duration-200 px-2 py-1 ${servicesDropdown || hoveredDropdown === 'Services' ? 'text-orange-600' : 'hover:text-orange-600'
                }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesDropdown || hoveredDropdown === 'Services' ? 'rotate-180' : ''
                  }`}
              />
              <span className="nav-underline" />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 bg-white/98 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] z-50 transition-all duration-200 ${servicesDropdown || hoveredDropdown === 'Services'
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2'
                }`}
            >
              <a href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">All Services</a>
              <a href="/services/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">Cybersecurity</a>
              <a href="/services/cloud-computing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">Cloud Computing</a>
            </div>
          </div>
          <a href="/contact" className="nav-link relative transition-all duration-200 hover:text-orange-600 px-2 py-1">
            Contact
            <span className="nav-underline" />
          </a>
        </nav>

        {/* Let's Talk Button */}
        <a href="/appointment">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
            <span>Let's Talk</span>
            <span className="w-7 h-7 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>
        </a>

      </div>

      <style>{`
        .nav-link {
          position: relative;
        }
        
        .nav-underline {
          position: absolute;
          left: 50%;
          right: 50%;
          bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563eb 0%, #f97316 100%);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover .nav-underline {
          left: 0;
          right: 0;
        }
      `}</style>
    </header>
  );
};

export default NavBar;