import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import HomePage from './pages/HomePage';
import HireFromUs from './pages/HireFromUs';
import Resources from './pages/Resources';
import InternshipProgram from './pages/InternshipProgram';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/Aspira-Sys" element={<HomePage />} />
        <Route path="/hire-from-us" element={<HireFromUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/internship-program/:programId" element={<InternshipProgram />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
