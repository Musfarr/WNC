import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = ({ 
  title = "Ready to take your business to the next level?", 
  subtitle = "Book a consultation with our experts and discover how we can help you grow.", 
  buttonText = "Book a Consultation",
  buttonLink = "/contact",
  background = "gradient" // Options: gradient, light, dark
}) => {
  
  const getBackgroundClass = () => {
    switch(background) {
      case 'light':
        return 'cta-light';
      case 'dark':
        return 'cta-dark';
      default:
        return 'cta-gradient';
    }
  };
  
  return (
    <div className={`cta ${getBackgroundClass()}`}>
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
        </div>
        <div className="cta-action">
          <Link to={buttonLink} className="cta-button">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
