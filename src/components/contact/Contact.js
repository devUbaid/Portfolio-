import React, { useState } from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaVoicemail, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const ContactFooter = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email submission logic here
    console.log('Form submitted:', { email, message });
    // Reset form
    setEmail('');
    setMessage('');
    alert('Thank you for your message!');
  };
  
  return (
    <footer className="contact-footer" id='contacts'>
      <div className="contact-section">
        <h2 className="contact-title">CONTACT ME</h2>
        <p className="contact-text">
          Feel free to <span className="highlight">reach out</span> with me
        </p>
        
        <div className="social-icons-large">
          <a href="https://github.com/devUbaid" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
            <FaGithub />
          </a>
          <a href="mailto:mohdubaid74933@gmail.com.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
            <FaEnvelope />
          </a>

          <a href="https://www.linkedin.com/in/mohd-ubaidullah/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
            <FaInstagram />
          </a>
        </div>
        
        {/* Email Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Your message" 
              className="form-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      
      <div className="copyright-section">
        <p className="copyright-text">Designed and Developed by Mohd Ubaid</p>
        <p className="copyright-text">Copyright © {currentYear} </p>
      </div>
    </footer>
  );
};

export default ContactFooter;