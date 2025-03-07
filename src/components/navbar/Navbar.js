import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handle scroll events
  useEffect(() => {
    // Function to get the height of the home section
    // We'll use half of viewport height as an approximation if we can't find the actual element
    const getScrollThreshold = () => {
      const homeSection = document.getElementById('home');
      return homeSection ? homeSection.offsetHeight / 2 : window.innerHeight / 2;
    };

    const scrollThreshold = getScrollThreshold();

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Only start hiding/showing navbar after passing the threshold
      if (currentScrollPos > scrollThreshold) {
        // Determine if scrolling up or down
        const isScrollingDown = currentScrollPos > prevScrollPos;
        
        // Set visibility based on scroll direction
        setVisible(!isScrollingDown);
      } else {
        // Always show navbar when above the threshold
        setVisible(true);
      }
      
      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Mohd Ubaid</div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="navbar-logo">Mohd Ubaid</div>
            <button className="close-menu-btn" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className='mobile-menu-content'>
            <ul className="mobile-menu-links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#about" onClick={closeMenu}>About Me</a></li>
              <li><a href="#contacts" onClick={closeMenu}>Contacts</a></li>
            </ul>
            <div className="mobile-theme-toggle">
              <a href="https://github.com/devUbaid" className="github-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-icon.png" alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="desktop-menu">
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
        
        <div className="desktop-theme-toggle">
          <a href="https://github.com/devUbaid" className="github-link" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-icon.png" alt="GitHub" className="github-icon" />
          </a>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;