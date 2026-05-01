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

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3">
                <span className="text-orange-500">ZENITECH TECHNOLOGIES</span>
                <span className="text-orange-500"> PRIVATE LIMITED</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-md">
                India's trusted cybersecurity and cloud computing services provider. We deliver enterprise-grade security solutions, cloud migration, managed IT services, and 24/7 threat monitoring from Bengaluru.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  aria-label="WhatsApp"
                  href="https://wa.me/918820066999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
                <a 
                  aria-label="LinkedIn" 
                  href="https://www.linkedin.com/company/zenitechtechnologies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links — using React Router <Link> for SPA navigation */}
          <nav aria-label="Company links">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  About Zenitech Technologies
                </Link>
              </li>
              <li>
                <Link to="/about/founder" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Founder &amp; CEO Profile
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  IT Services &amp; Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services — keyword-rich anchor text for internal linking */}
          <nav aria-label="Service links">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/cybersecurity" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Cloud Computing Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Managed IT Services India
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Cloud Security Consulting
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Information — structured NAP data on every page */}
        <div
          className="border-t border-slate-700 pt-12 mb-12"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <meta itemProp="name" content="Zenitech Technologies Private Limited" />
          <meta itemProp="url" content="https://www.zenitech.in/" />

          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-8">
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
                <HiOutlineLocationMarker className="mt-1 text-orange-400 flex-shrink-0" size={18} />
                <a
                  href="https://www.google.com/maps/place/ZENITECH+TECHNOLOGIES+PRIVATE+LIMITED/@13.0335666,77.6289726,16z"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm leading-relaxed"
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
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <HiOutlineMail className="text-orange-400" size={18} />
                <a
                  href="mailto:info@zenitech.in"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  itemProp="email"
                >
                  info@zenitech.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlinePhone className="text-orange-400" size={18} />
                <a
                  href="tel:+918820066999"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  itemProp="telephone"
                >
                  +91 88200 66999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlinePhone className="text-orange-400" size={18} />
                <a href="tel:+917439004545" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  +91 74390 04545
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
             © 2026 <span className="text-orange-400 font-semibold">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Developed by <span className="text-orange-400 font-semibold">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;