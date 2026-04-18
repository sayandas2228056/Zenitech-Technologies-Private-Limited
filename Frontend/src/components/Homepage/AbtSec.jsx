import { FaPhoneAlt, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import pic8 from "../../assets/pic3.jpg";
import AbtPic from "../../assets/CyberSec.jpg";
import { useEffect } from 'react';
import BgPic from "../../assets/pic1.jpg";
import OptimizedImage from '../Common/OptimizedImage';

const AbtSection = () => {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative py-12 md:py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        {/* Background with opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BgPic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.05'
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Side - Images */}
          <div className="relative w-full md:w-1/2">
            <OptimizedImage
              src={AbtPic}
              alt="About Us Main"
              className="rounded-xl w-full h-auto shadow-lg"
              loading="lazy"
            />
            <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-orange-500 text-white text-center px-4 md:px-5 py-2 md:py-3 rounded-md shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold">Expertise in:</h2>
              <p className="text-xs md:text-sm tracking-wide">Cybersecurity & Cloud Computing</p>
            </div>
            <div className="absolute -bottom-4 md:-bottom-5 -right-4 md:-right-5">
              <OptimizedImage
                src={pic8}
                alt="Team"
                className="w-32 md:w-40 rounded-xl shadow-md border-4 border-white"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">About ZENITECH TECHNOLOGIES PRIVATE LIMITED</p>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-5 leading-snug typewriter">
              Empowering Digital Growth <br /> with Trusted Technology
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-base text-gray-700">
                <span className='font-bold'>ZENITECH TECHNOLOGIES PRIVATE LIMITED </span> is a leading IT Services & Consulting company headquartered in Bengaluru — the Silicon Valley of India.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                We provide a comprehensive portfolio of services including<span className='font-bold'> Cybersecurity </span>&<span className='font-bold'> Cloud Computing</span>.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Through strong partnerships with top-tier OEMs and global tech brands, we consistently deliver high-value outcomes across multiple industries.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Our clients span from startups to large enterprises across domains like IT/ITES, Startups, BFSI,  Fintech, Healthcare, Pharmaceuticals ,  Manufacturing , Automobile, Retail, Ecommerce , Education , Media & Entertainment , Logistic & Supply and many more.
              </p>
            </div>

            <ul className="text-left space-y-3 my-6">
              {[
                "24/7 Call Support Available",
                "Highly Skilled Consultants",
                "Certified Expert Team Members",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-800 text-sm md:text-base">
                  <FaCheckCircle className="text-orange-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              {/* Phone Contact */}
              <div className="flex items-center gap-4">
                <div className="p-3 md:p-4 bg-orange-100 rounded-full">
                  <FaPhoneAlt className="text-orange-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us anytime</p>
                  <h4 className="text-sm font-semibold">
                    <a href="tel:+918820066999" className="hover:underline text-orange-600">
                      +91 88200 66999
                    </a>
                  </h4>
                  <h4 className="text-sm font-semibold">
                    <a href="tel:+917439004545" className="hover:underline text-orange-600">
                      +91 74390 04545
                    </a>
                  </h4>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-center gap-4">
                <div className="p-3 md:p-4 bg-orange-100 rounded-full">
                  <FaEnvelope className="text-orange-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <h4 className="text-sm font-semibold">
                    <a
                      href="mailto:info@zenitech.in?subject=We%20are%20interested%20in%20working%20with%20you&body=Hello%20from%20your%20website%20zenitech.in"
                      className="hover:underline text-orange-600"
                    >
                      info@zenitech.in
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Your Strategic Partner for <span className='text-orange-500 font-bold'>Cybersecurity</span> & <span className='text-orange-500 font-bold'>Cloud Computing</span> Services
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(40) forwards;
        }
        @media (max-width: 768px) {
          .typewriter {
            white-space: normal;
            animation: none;
          }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
};

export default AbtSection;
