import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { ChevronDown, Menu, X } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const servicesDropdownRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const toggleMobileAbout = () => {
    setMobileAboutOpen(!mobileAboutOpen);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
    setMobileAboutOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 w-full z-60 transition-all duration-300">
      <div
        className={`flex items-center justify-between mx-auto transition-all duration-300 max-w-full mt-0 px-10 py-4 bg-white ${
          scrolled
            ? 'shadow-[0_4px_24px_rgba(0,0,0,0.13)] border-b border-gray-100'
            : 'shadow-md'
        }`}
      >
        {/* Logo */}
        <a href="/">
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Zenitech Logo"
              className="logo-img rounded-full"
              loading="eager"
              decoding="async"
            />
            {/* Desktop/Landscape: single line */}
            <span className="hidden md:block text-sm lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent tracking-wide whitespace-nowrap">
              ZENITECH TECHNOLOGIES PRIVATE LIMITED
            </span>
            {/* Mobile/Tablet: two lines */}
            <div className="flex md:hidden flex-col leading-tight">
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent tracking-wide whitespace-nowrap">
                ZENITECH TECHNOLOGIES
              </span>
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent tracking-wide whitespace-nowrap">
                PRIVATE LIMITED
              </span>
            </div>
          </div>
        </a>

        {/* Nav Links - Desktop only */}
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
              className={`absolute top-full left-0 mt-2 bg-white/98 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] z-70 transition-all duration-200 ${aboutDropdown || hoveredDropdown === 'About'
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
              className={`absolute top-full left-0 mt-2 bg-white/98 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] z-70 transition-all duration-200 ${servicesDropdown || hoveredDropdown === 'Services'
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2'
                }`}
            >
              <a href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">All Services</a>
              <a href="/services/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">Cybersecurity</a>
              <a href="/services/cloud-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 rounded-lg mx-2">Cloud Solutions</a>
            </div>
          </div>
          <a href="/contact" className="nav-link relative transition-all duration-200 hover:text-orange-600 px-2 py-1">
            Contact
            <span className="nav-underline" />
          </a>
        </nav>

        {/* Right side: Mobile shows Let's Talk + hamburger, Desktop shows Let's Talk */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          {/* Let's Talk - Mobile */}
          <a href="/appointment">
            <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-900 font-semibold text-xs px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
              <span>Let's Talk</span>
              <span className="w-5 h-5 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2.5"
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

          {/* Hamburger */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Let's Talk Button - Desktop only */}
        <a href="/appointment" className="hidden md:block">
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

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img src={Logo} alt="Zenitech Logo" className="w-10 h-10 rounded-full" loading="eager" width="40" height="40" decoding="async" />
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-sm bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent">
                    Zenitech Technologies
                  </span>
                  <span className="font-bold text-sm bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent">
                    Private Limited
                  </span>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="flex flex-col gap-2">
                <a
                  href="/"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-medium"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>

                {/* About Dropdown */}
                <div>
                  <button
                    onClick={toggleMobileAbout}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-medium"
                  >
                    <span>About</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileAboutOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      <a
                        href="/about"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200"
                        onClick={toggleMobileMenu}
                      >
                        About Us
                      </a>
                      <a
                        href="/about/founder"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200"
                        onClick={toggleMobileMenu}
                      >
                        About Founder
                      </a>
                    </div>
                  )}
                </div>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={toggleMobileServices}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      <a
                        href="/services"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200"
                        onClick={toggleMobileMenu}
                      >
                        All Services
                      </a>
                      <a
                        href="/services/cybersecurity"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200"
                        onClick={toggleMobileMenu}
                      >
                        Cybersecurity
                      </a>
                      <a
                        href="/services/cloud-computing"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200"
                        onClick={toggleMobileMenu}
                      >
                        Cloud Computing
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="/contact"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-medium"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-gray-100">
              <a
                href="/appointment"
                className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-red-500 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                <span>Let's Talk</span>
                <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
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
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Logo image sizing */
        .logo-img {
          width: 48px;
          height: 48px;
        }

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

        /* Mobile: clean layout — logo left, hamburger right only */
        @media (max-width: 767px) {
          header > div {
            padding: 8px 12px !important;
            max-width: 100% !important;
            margin-top: 0 !important;
            border-radius: 0 !important;
          }

          .logo-img {
            width: 38px;
            height: 38px;
          }
        }

        @media (max-width: 480px) {
          header > div {
            padding: 8px 10px !important;
          }

          .logo-img {
            width: 34px;
            height: 34px;
          }
        }

        @media (max-width: 360px) {
          header > div {
            padding: 6px 8px !important;
          }

          .logo-img {
            width: 30px;
            height: 30px;
          }
        }

        /* Landscape on mobile: keep compact */
        @media (max-height: 500px) and (orientation: landscape) and (max-width: 900px) {
          header > div {
            padding: 6px 12px !important;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          header {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .nav-link,
          .nav-underline,
          .transition-all,
          .transition-transform,
          .transition-opacity {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default NavBar;