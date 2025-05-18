import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ 
  title = 'Transform Your Business Ideas Into Reality', 
  subtitle = 'We provide complete business solutions for startups and established companies looking to expand globally.',
  showButtons = true,
  backgroundImage = '/assets/hero-bg.jpg'
}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        
        {showButtons && (
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Our Services
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
