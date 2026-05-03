import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="ft-root" itemScope itemType="https://schema.org/WPFooter">
      <style>{`
        .ft-root {
          --ft-blue-deep:   #042C53;
          --ft-blue-mid:    #185FA5;
          --ft-blue-light:  #378ADD;
          --ft-blue-pale:   #85B7EB;
          --ft-blue-pal2:   #B5D4F4;
          --ft-blue-bg:     #E8F1FB;
          --ft-blue-bg2:    #EAF4FF;
          --ft-orange-500:  #F97316;
          --ft-white:       #ffffff;
          --ft-gray-100:    #EEF2F8;
          --ft-gray-200:    #D8E4F0;
          --ft-gray-400:    #8FA7C0;
          --ft-gray-700:    #D8E4F0;
          --ft-text-main:   #0D1F33;
          --ft-text-body:   #3D5470;
          --ft-text-muted:  #6A85A0;
          font-family: 'Satoshi', 'Inter', system-ui, sans-serif;
          background: var(--ft-blue-deep);
          color: var(--ft-white);
        }
        .ft-text-brand {
          color: var(--ft-orange-500);
        }
        .ft-text-muted {
          color: var(--ft-gray-400);
        }
        .ft-text-subtle {
          color: var(--ft-gray-700);
        }
        .ft-text-heading {
          color: var(--ft-gray-100);
        }
        .ft-link-hover:hover {
          color: var(--ft-blue-pale);
        }
        .ft-icon-accent {
          color: var(--ft-orange-500);
        }
        .ft-social-bg {
          background: rgba(255,255,255,0.1);
        }
        .ft-social-hover:hover {
          background: var(--ft-blue-mid);
        }
        .ft-whatsapp-hover:hover {
          background: #25D366;
        }
        .ft-divider {
          border-color: rgba(255,255,255,0.1);
        }
        .ft-divider-dark {
          border-color: rgba(255,255,255,0.05);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-3">
                <img src={Logo} alt="Zenitech Technologies" className="w-16 h-16 rounded-full object-cover hidden lg:block" />
                <h2 className="text-2xl font-bold">
                  <span className="text-xl font-bold text-orange-500">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>
                </h2>
              </div>
              <p className="ft-text-subtle text-base leading-relaxed max-w-md">
              We provide cutting-edge cybersecurity and cloud solutions engineered for India's growing businesses. We protect what you've built today while preparing your infrastructure for tomorrow.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold ft-text-heading uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  aria-label="WhatsApp"
                  href="https://wa.me/918820066999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 ft-social-bg rounded-full flex items-center justify-center ft-whatsapp-hover transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
                <a 
                  aria-label="LinkedIn" 
                  href="https://www.linkedin.com/company/zenitechtechnologies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 ft-social-bg rounded-full flex items-center justify-center ft-social-hover transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links — using React Router <Link> for SPA navigation */}
          <nav aria-label="Company links">
            <h3 className="text-sm font-semibold ft-text-heading uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/founder" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  Founder &amp; CEO Profile
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  Schedule a Meeting
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services — keyword-rich anchor text for internal linking */}
          <nav aria-label="Service links">
            <h3 className="text-sm font-semibold ft-text-heading uppercase tracking-wider mb-6">
              Our Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/cybersecurity" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/solutions/cloud-solutions" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  Cloud Solutions
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>

        {/* Contact Information — structured NAP data on every page */}
        <div
          className="ft-divider pt-12 mb-12"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <meta itemProp="name" content="Zenitech Technologies Private Limited" />
          <meta itemProp="url" content="https://www.zenitech.in/" />

          <h3 className="text-sm font-semibold ft-text-heading uppercase tracking-wider mb-8">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            
            {/* Bangalore Office */}
            <div
              className="space-y-4"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <h4 className="text-base font-medium text-white mb-3">Corporate Office — Bengaluru</h4>
              <div className="flex items-start space-x-3">
                <HiOutlineLocationMarker className="mt-1 ft-icon-accent flex-shrink-0" size={18} />
                <a
                  href="https://www.google.com/maps/place/ZENITECH+TECHNOLOGIES+PRIVATE+LIMITED/@13.0335666,77.6289726,16z"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm leading-relaxed"
                >
                  <span itemProp="streetAddress">Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout</span>,<br />
                  <span itemProp="addressLocality">Bengaluru</span> — <span itemProp="postalCode">560045</span>,{' '}
                  <span itemProp="addressRegion">Karnataka</span>,{' '}
                  <span itemProp="addressCountry">India</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-8 pt-6 ft-divider-dark">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <HiOutlineMail className="ft-icon-accent" size={18} />
                <a
                  href="mailto:info@zenitech.in"
                  className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm"
                  itemProp="email"
                >
                  info@zenitech.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlinePhone className="ft-icon-accent" size={18} />
                <a
                  href="tel:+918820066999"
                  className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm"
                  itemProp="telephone"
                >
                  +91 88200 66999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlinePhone className="ft-icon-accent" size={18} />
                <a href="tel:+917439004545" className="ft-text-subtle ft-link-hover transition-colors duration-200 text-sm">
                  +91 74390 04545
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="ft-divider pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="ft-text-muted text-sm">
             © 2026 <span className="ft-text-brand font-semibold">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>. All rights reserved.
            </p>
            <p className="ft-text-muted text-sm">
              Developed by <span className="ft-text-brand font-semibold">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;