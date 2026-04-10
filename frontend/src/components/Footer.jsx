import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="glass footer-container">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>FOSSEE Workshops</h3>
          <p>Promoting Free and Open Source Software for Education.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://fossee.in" target="_blank" rel="noopener noreferrer">FOSSEE Website</a></li>
            <li><a href="https://iitb.ac.in" target="_blank" rel="noopener noreferrer">IIT Bombay</a></li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} FOSSEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
