import React, { useEffect } from 'react'
import PreNav from '../components/Common/PreNav'
import NavBar from '../components/Common/NavBar'
import Hero from '../components/Homepage/Hero'
import AbtSec from '../components/Homepage/AbtSec'
import HeroBotm from '../components/Homepage/HeroBotm'
import Bright from '../components/Common/Bright'
import ServSection from '../components/Common/ServSection'
import FAQ from '../components/Common/FAQ'
import Footer from '../components/Common/Footer'

const Home = () => {
  // Add scroll animation effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (elementPosition < screenPosition - 100) {
          element.classList.add('fade-in-up');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 300);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div>
      <div className="animate-on-scroll">
        <Hero />
      </div>
      <div className="animate-on-scroll">
        <HeroBotm />
      </div>
      <div className="animate-on-scroll">
        <AbtSec/>
      </div>
      <div className="animate-on-scroll">
        <ServSection />
      </div>
      <div className="animate-on-scroll">
        <Bright />
      </div>
      <div className="animate-on-scroll">
        <FAQ/>
      </div>
      
      {/* CSS for animations */}
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

export default Home