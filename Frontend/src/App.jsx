import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import AboutFounder from './pages/AboutFounder'
import Services from './pages/Services'
import Cybersecurity from './pages/Cybersecurity'
import CloudComputing from './pages/Cloudcomputing'
import Navbar from './components/Common/NavBar'
import Footer from './components/Common/Footer'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
const App = () => {
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
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App