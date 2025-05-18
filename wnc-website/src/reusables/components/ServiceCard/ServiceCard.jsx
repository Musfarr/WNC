import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  color = '#0070f3' 
}) => {
  return (
    <Link to={link} className="service-card">
      <div className="service-card-icon" style={{ backgroundColor: `${color}15` }}>
        <FontAwesomeIcon icon={icon} style={{ color: color }} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <div className="service-card-learn-more">
        <span>Learn More</span>
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      </div>
    </Link>
  );
};

export default ServiceCard;
