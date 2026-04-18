import React from 'react';
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
    <footer className="bg-slate-900 text-white">
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
                Innovative Solutions of Cybersecurity & Cloud Computing Designed to Modernize, Protect, and Propel Your Business Forward with cutting-edge technology solutions.
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

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about/founder" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Founder Profile
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/cybersecurity" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="/services/cloud-computing" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Cloud Computing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-700 pt-12 mb-12">
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-8">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            
            {/* Bangalore Office */}
            <div className="space-y-4">
              <h4 className="text-base font-medium text-white mb-3">Corporate Office - Bengaluru</h4>
              <div className="flex items-start space-x-3">
                <HiOutlineLocationMarker className="mt-1 text-orange-400 flex-shrink-0" size={18} />
                <a
                  href="https://www.google.com/maps/place/ZENITECH+TECHNOLOGIES+PRIVATE+LIMITED/@17.8322113,71.4445055,6z/data=!4m10!1m2!2m1!1sZenitech+Technologies+Pvt.+Ltd.!3m6!1s0x2efa6a1b2571d453:0x6aa2f619aaa4d5aa!8m2!3d13.0335666!4d77.6289726!15sCh9aZW5pdGVjaCBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuWh8iHXplbml0ZWNoIHRlY2hub2xvZ2llcyBwdnQgbHRkkgEQc29mdHdhcmVfY29tcGFueeABAA!16s%2Fg%2F11tjs5xq43?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm leading-relaxed"
                >
                  Dex Co Work, 2nd Floor, 1383/433,<br />
                  5th Block, HBR Layout,<br />
                  Bengaluru - 560045, India
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <HiOutlineMail className="text-orange-400" size={18} />
                <a href="mailto:info@zenitech.in" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
                  info@zenitech.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlinePhone className="text-orange-400" size={18} />
                <a href="tel:+918820066999" className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm">
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