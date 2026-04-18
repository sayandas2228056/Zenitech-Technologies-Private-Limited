import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import AboutFounder from './pages/AboutFounder';
import Services from './pages/Services';
import Cybersecurity from './pages/Cybersecurity';
import CloudComputing from './pages/Cloudcomputing';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

import Navbar from './components/Common/NavBar';
import Footer from './components/Common/Footer';
import Loading from './components/Common/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Clean loading control (no duplicate triggers)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Show loader
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/founder" element={<AboutFounder />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/cloud-computing" element={<CloudComputing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />

          {/* 🔥 Catch-all route (redirect unknown paths) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;