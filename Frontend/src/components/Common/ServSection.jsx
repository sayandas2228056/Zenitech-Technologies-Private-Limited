import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Cloud,
  Shield,
  ChevronDown,
  HelpCircle,
  Zap,
  Users,
} from 'lucide-react';

const services = [
  
  {
  title: 'Cybersecurity',
  shortDesc: 'Protect your digital ecosystem with intelligent, multi-layered security.',
  fullDesc: 'We deliver comprehensive cybersecurity solutions designed to safeguard your business from evolving threats. From proactive risk assessment to real-time threat detection and rapid incident response, our solutions ensure your systems, networks, and data remain secure, compliant, and resilient.',
  features: [
    'Advanced Vulnerability Assessment & Penetration Testing (VAPT)',
    '24/7 Security Monitoring & Incident Response (SOC Services)',
    'Network, Endpoint & Application Security',
    'Identity & Access Management (IAM)',
    'Regulatory Compliance & Risk Management (ISO, GDPR, HIPAA)',
    'Data Protection, Backup & Encryption Solutions'
  ],
  highlight: 'Protect. Detect. Respond. Secure your business with confidence.',
  icon: Shield,
  route: '/services/cybersecurity',
},
  {
  title: 'Cloud Solutions',
  shortDesc: 'Accelerate your business with scalable, secure, and high-performance cloud solutions.',
  fullDesc: 'We help organizations seamlessly adopt and optimize cloud technologies to enhance agility, reduce costs, and drive innovation. Whether you\'re migrating existing systems or building cloud-native applications, our expertise ensures a smooth, secure, and efficient cloud journey.',
  features: [
    'Cloud Migration & Deployment (AWS, Azure, Google Cloud)',
    'Infrastructure Design & Architecture (Public, Private, Hybrid)',
    'DevOps Enablement & CI/CD Pipeline Integration',
    'Performance Optimization & Cost Management',
    'Cloud Security & Compliance',
    'Managed Cloud Services & 24/7 Support'
  ],
  highlight: 'Build. Scale. Optimize. Power your growth with the cloud.',
  icon: Cloud,
  route: '/services/cloud-solutions',
}
];

const faqs = [
  {
    question: 'What services does ZENITECH TECHNOLOGIES PRIVATE LIMITED offer?',
    answer:
      'ZENITECH TECHNOLOGIES PRIVATE LIMITED provides services in Cloud, Cybersecurity, IT Services and more.',
    category: 'Services',
    icon: <Zap size={20} className="text-orange-500" />,
  },
  {
    question: 'Which cloud platforms do you support?',
    answer:
      'We support AWS, Azure, Google Cloud and more, covering IaaS, SaaS, PaaS, DR, and Managed Services.',
    category: 'Cloud',
    icon: <Shield size={20} className="text-orange-500" />,
  },
  {
    question: 'What cybersecurity solutions do you provide?',
    answer:
      'We offer Firewall , Endpoint Security , EDR , XDR , Email Security , DLP , SOC , VAPT , API Security , Cloud Security , Application Security , Network Security , OT Security etc to safeguard your infrastructure.',
    category: 'Cybersecurity',
    icon: <Shield size={20} className="text-orange-500" />,
  },
  {
    question: 'Who are your typical clients?',
    answer:
      'Our clients include enterprises of all sizes from IT/ITES, Startups, BFSI, Fintech, Healthcare, Pharmaceuticals , Manufacturing , Automobile, Retail, Ecommerce , Education , Media & Entertainment , Logistic & Supply and many more.',
    category: 'Clients',
    icon: <Users size={20} className="text-orange-500" />,
  },
  {
    question: 'How can we get in touch with ZENITECH TECHNOLOGIES PRIVATE LIMITED?',
    answer:
      'Email us at info@zenitech.in or call +91 88200 66999 / +91 74390 04545. Corporate Office in Bengaluru, India . Serving customers in PAN India and across the globe.',
    category: 'Contact',
    icon: <HelpCircle size={20} className="text-orange-500" />,
  },
];

const ServSection = () => {
  return (
    <div className="py-16 sm:py-20 bg-gradient-to-br from-orange-100 via-gray-50 to-orange-100">
      <div className="text-center mb-10 px-4 sm:px-0">
        <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-orange-600 uppercase mb-2">
          Our Expertise
        </h4>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
          Enterprise Cybersecurity & Cloud Solutions
        </h2>
        <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-600">
          Delivering comprehensive Cybersecurity & Cloud Solutions to help your business achieve digital transformation and operational excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-14"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between border-t-4 border-orange-600 min-h-[420px] max-h-[440px]">
                <div className="flex-1 flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-5 mx-auto">
                    <service.icon className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2 text-center">
                    {service.shortDesc}
                  </p>
                  <div className="border-t border-gray-100 pt-3 flex-1">
                    <p className="text-gray-700 text-sm sm:text-[15px] line-clamp-4 text-center">{service.fullDesc}</p>
                  </div>
                </div>
                <a
                  href={service.route}
                  className="mt-4 inline-flex items-center text-orange-600 text-sm sm:text-base font-semibold hover:text-orange-700 transition-colors justify-center"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServSection;