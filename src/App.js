import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
