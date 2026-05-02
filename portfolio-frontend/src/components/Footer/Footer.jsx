import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Logo & Tagline */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>SG<span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            Software Developer passionate about building clean, performant, and
            user-friendly web applications using React, Node.js, and Java.
          </p>
          <p className="footer-tagline footer-tagline-sub">
            Always learning. Always building. Always improving.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <Link to={section} smooth duration={500} offset={-80}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/gargsakshi9798" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/gargsakhi9798/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:gargsakshi9798@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            Made with <FiHeart className="heart-icon" /> by{' '}
            <span className="footer-name">Sakshi Garg</span> &copy; {new Date().getFullYear()}
          </p>
          <Link to="hero" smooth duration={800} className="back-to-top" aria-label="Back to top">
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
