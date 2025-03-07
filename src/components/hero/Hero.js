import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id='home'>
      <div className="hero-container">
        <div className="hero-intro">
          <h2 className="hero-greeting">Hello, my name is</h2>
          <h1 className="hero-name">Mohd Ubaidullah.</h1>
          <h2 className="hero-title">I design and build meaningful experiences.</h2>
          <p className="hero-bio">
            I am a Full Stack Developer — a constantly evolving with a passion for innovation, learning and a vision to make a lasting impact.
          </p>
          <div className="hero-actions">
            <a href="#contacts" className="btn-primary">Contact Me</a>
            <a href="https://www.linkedin.com/in/mohd-ubaidullah/" className="btn-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;