import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const getScrollThreshold = () => {
      const homeSection = document.getElementById('home');
      return homeSection ? homeSection.offsetHeight / 2 : window.innerHeight / 2;
    };

    const scrollThreshold = getScrollThreshold();

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > scrollThreshold) {
        const isScrollingDown = currentScrollPos > prevScrollPos;
        setVisible(!isScrollingDown);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
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

        {/* Toggle Button */}
        <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
