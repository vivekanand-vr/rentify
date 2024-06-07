import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import logo from '../Assets/rentify-logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Rentify Logo" />
        </div>
        <div className="footer-social-links">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebook size={24} /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FaXTwitter size={24} /></a>
          <a href="https://www.instagram.com/vvek_9/" aria-label="Instagram"><FaInstagram size={24} /></a>
          <a href="https://www.linkedin.com/in/vivekanand-vernekar/" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Rentify. &nbsp; All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
