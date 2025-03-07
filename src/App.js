import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Technical from './components/technical/Technical';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Technical />
      <Contact />
    </div>
  );
}

export default App;