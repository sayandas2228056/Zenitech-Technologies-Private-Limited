import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Award, BookOpen, Briefcase } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import EnhancedCareerTimeline from "../components/Common/EnhancedCareerTimeline.jsx";
import Logo from "../assets/Logo.png";
import Founder from "../assets/Founder.jpg";
import IIITBLogo from '../assets/EduLogo/iiitbofficial_logo.jpeg';
import IITRLogo from '../assets/EduLogo/indian_institute_of_technology_roorkee_logo.jpeg';
import AIMALogo from '../assets/EduLogo/All India Management Association.jpeg';
import VMLogo from '../assets/EduLogo/ramakrishna_mission_vidyamandira_logo.jpeg';
import useSEO from '../hooks/useSEO';
const AboutFounder = () => {
  useSEO({
    title: 'Founder & CEO — Mr. Haider Ali',
    description:
      'Meet Mr. Haider Ali, Founder & CEO of Zenitech Technologies. 20+ years of experience in enterprise IT, cybersecurity & cloud solutions. IIT Roorkee & IIIT Bangalore alumnus.',
    canonical: 'https://www.zenitech.in/about/founder',
    keywords:
      'Haider Ali Zenitech, Zenitech founder, CEO Zenitech Technologies, IT leader Bengaluru, cybersecurity expert India, cloud computing professional',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.zenitech.in/' },
      { name: 'About', url: 'https://www.zenitech.in/about' },
      { name: 'Founder', url: 'https://www.zenitech.in/about/founder' },
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Haider Ali',
        jobTitle: 'Founder & CEO',
        url: 'https://www.haider.zenitech.in/',
        email: 'haider@zenitech.in',
        telephone: '+91-88200-66999',
        worksFor: {
          '@type': 'Organization',
          name: 'Zenitech Technologies Private Limited',
          url: 'https://www.zenitech.in/',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology, Roorkee' },
          { '@type': 'CollegeOrUniversity', name: 'International Institute of Information Technology Bangalore' },
        ],
        knowsAbout: ['Cybersecurity', 'Cloud Computing', 'IT Consulting', 'Enterprise Solutions', 'B2B Sales'],
      },
    ],
  });

  return (
    <div className="md:mt-10 min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
  <div className="max-w-6xl mx-auto py-16 px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Left Section */}
      <div>
        <h1 className="text-4xl mt-10 md:text-5xl font-bold mb-4">Leadership</h1>
        <div className="w-24 h-1 bg-white mb-6"></div>
        <p className="text-lg text-blue-100 mb-8">
          Meet the visionary behind <span className="text-orange-500 font-bold">ZENITECH TECHNOLOGIES PRIVATE LIMITED</span> and discover the expertise 
          that drives our success in the technology sector.
        </p>
      </div>

      {/* Right Section - Circular Logo */}
      <div className="hidden lg:flex justify-end">
        <div className="relative w-48 h-48 rounded-full flex items-center justify-center bg-blue-900">
          {/* Blue ring effect */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-600"></div>

          {/* White circle with Zenitech text */}
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center z-10">
            <span className="text-orange-500 font-bold text-xl">Zenitech</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Profile Card */}
            <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-slate-100 p-8">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-40 h-40 bg-blue-100 rounded-full mb-6 overflow-hidden shadow-md">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center">
                    <span className="text-6xl font-bold text-blue-900"><img src={Founder}/></span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Mr. Haider Ali</h2>
                <p className="text-blue-900 font-medium mb-4">Founder & CEO</p>
                <div className="w-12 h-1 bg-blue-900 mb-4"></div>
                <p className="text-slate-600 text-sm mb-6">
                  Technology visionary with 20+ years of experience in Enterprise Cybersecurity & Cloud Solutions
                </p>
                
                {/* Contact Information */}
                <div className="w-full space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="text-blue-900 shrink-0" size={16} />
                    <a href="mailto:haider@zenitech.in" className="text-sm hover:text-blue-900 transition-colors">
                      haider@zenitech.in
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="text-blue-900 shrink-0" size={16} />
                    <a href="tel:+918820066999" className="text-sm hover:text-blue-900 transition-colors">
                      +91 88200 66999
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="text-blue-900 shrink-0" size={16} />
                    <span className="text-sm">Bengaluru, India</span>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-900 hover:text-white transition-colors"
                  >
                    <FaLinkedin size={15} />
                  </a>
                  <a 
                    href="https://wa.me/918820066999" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-900 hover:text-white transition-colors"
                  >
                    <FaWhatsapp size={15} />
                  </a>
                  <a
                    href="tel:+918820066999"
                    className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-900 hover:text-white transition-colors"
                    title="Call +91 88200 66999"
                  >
                    <Phone size={15} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bio & Experience */}
            <div className="lg:col-span-2 p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                    <Briefcase size={14} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Professional Overview</h3>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6">With over two decades of experience in B2B Sales and Business Development, I specialize in Cybersecurity & Cloud Services PAN India and across the globe. At Zenitech Solutions, we've built our foundation on personalized consulting that addresses the unique challenges faced by enterprise clients in today's rapidly evolving technological landscape.
                </p>
                
                <p className="text-slate-700 leading-relaxed mb-6">My core expertise lies in cultivating strategic partnerships and nurturing enterprises, consistently opening new business avenues and driving sustainable growth. Working alongside industry-leading OEMs and technology partners, our team has developed a reputation for delivering cutting-edge solutions that seamlessly integrate with our clients' existing infrastructure.
                </p>
                
                <div className="mt-8">
                  <a href="https://www.haider.zenitech.in/">
                    <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center gap-2 shadow-sm">
                      Connect with Me <ExternalLink size={16} />
                    </button>
                  </a>
                </div>
              </div>
              
              {/* Education Section */}
              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                    <BookOpen size={14} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Education & Certifications</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <div className="flex items-start">
                      <img src={IITRLogo} alt="IIT Roorkee Logo" className="w-10 h-10 rounded-full bg-white border mr-4" />
                      <div>
                        <div className="text-xs font-medium text-blue-900 mb-1">Nov 2023 – Apr 2025</div>
                        <h4 className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                          <span className="mr-2">Indian Institute of Technology, Roorkee</span>
                        </h4>
                        <div className="text-sm text-slate-600">Advanced Certification in Cloud Computing</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <div className="flex items-start">
                      <img src={IIITBLogo} alt="IIIT Bangalore Logo" className="w-10 h-10 rounded-full bg-white border mr-4" />
                      <div>
                        <div className="text-xs font-medium text-blue-900 mb-1">Apr 2024 – Nov 2024</div>
                        <h4 className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                          <span className="mr-2">International Institute of Information Technology Bangalore</span>
                        </h4>
                        <div className="text-sm text-slate-600">Advanced Executive Program in Cybersecurity</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <div className="flex items-start">
                      <img src={AIMALogo} alt="AIMA Logo" className="w-10 h-10 rounded-full bg-white border mr-4" />
                      <div>
                        <div className="text-xs font-medium text-blue-900 mb-1">1996 – 1998</div>
                        <h4 className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                          <span className="mr-2">All India Management Association (AIMA)</span>
                        </h4>
                        <div className="text-sm text-slate-600">Post Graduate Diploma in Information Technology & Management</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <div className="flex items-start">
                      <img src={VMLogo} alt="Ramakrishna Mission Vidyamandira Logo" className="w-10 h-10 rounded-full bg-white border mr-4" />
                      <div>
                        <div className="text-xs font-medium text-blue-900 mb-1">1992 – 1995</div>
                        <h4 className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                          <span className="mr-2">Ramakrishna Mission Vidyamandira</span>
                        </h4>
                        <div className="text-sm text-slate-600">Bachelor of Science</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Competencies Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="w-8 h-1 bg-blue-900 mr-3"></span>
            Core Competencies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Strategic IT Consulting", description: "Tailored technology solutions that drive business growth" },
              { title: "Enterprise Cloud Solutions", description: "Seamless migration and optimization of cloud infrastructure" },
              { title: "Cybersecurity", description: "Comprehensive protection against evolving digital threats" },
              { title: "Technology Partnerships", description: "Strategic alliances with leading global technology providers" },
              { title: "Digital Transformation", description: "Guiding enterprises through technological evolution" }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-slate-100 rounded-lg hover:shadow-md transition-shadow bg-slate-50">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EnhancedCareerTimeline/>
    </div>
  );
};

export default AboutFounder;





