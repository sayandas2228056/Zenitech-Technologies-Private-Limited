import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Prenav = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>haider@zenitech.in</span>
            </div>
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>+91 88200 66999</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" />
              <span>Bangalore / Bengaluru, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
              LinkedIn
            </a>
            <a href="/appointment" className="bg-white text-blue-900 px-3 py-1 rounded text-xs font-medium hover:bg-blue-50 transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prenav;
