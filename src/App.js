import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection';
import Partners from './components/Partners';
import LatestProjects from './components/LatestProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <InfoSection />
      <Partners />
      <LatestProjects />
      <Contact />
      <Footer />
    </div>
      
    
  );
}

export default App;
