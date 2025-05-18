import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">WNC-TECH</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-content">
              <Link to="/services/company-formation" onClick={() => setMobileMenuOpen(false)}>
                Company Formation
              </Link>
              <Link to="/services/bank-account-setup" onClick={() => setMobileMenuOpen(false)}>
                Bank Account Setup
              </Link>
              <Link to="/services/branding-development" onClick={() => setMobileMenuOpen(false)}>
                Branding & Development
              </Link>
              <Link to="/services/marketing" onClick={() => setMobileMenuOpen(false)}>
                Marketing Services
              </Link>
              <Link to="/services/accounting" onClick={() => setMobileMenuOpen(false)}>
                Accounting & VAT
              </Link>
              <Link to="/services/legal" onClick={() => setMobileMenuOpen(false)}>
                Legal & Compliance
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link cta-btn" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
