import React from 'react';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import ServiceLayout from './ServiceLayout';

const ServicePlaceholder = ({ title }) => {
  const serviceData = {
    title: title || "Our Service",
    subtitle: "This service page is coming soon",
    icon: faTools,
    heroImage: "/assets/services/default-service-hero.jpg",
    description: `
      <p>This service page is currently under development. We're working hard to bring you detailed 
      information about our ${title.toLowerCase()} services.</p>
      
      <p>In the meantime, please feel free to <a href="/contact">contact us</a> directly for more 
      information about how we can help your business with ${title.toLowerCase()}.</p>
      
      <p>Our team of experts is ready to assist you with personalized solutions tailored to your 
      specific business needs.</p>
    `,
    
    features: [
      "Comprehensive service offerings",
      "Expert consultation and support",
      "Tailored solutions for your business",
      "Competitive pricing",
      "Fast turnaround times",
      "Ongoing support and maintenance"
    ],
    
    ctaTitle: "Interested in our services?",
    ctaText: "Contact us today to learn more about how we can help your business succeed."
  };

  return <ServiceLayout {...serviceData} />;
};

export default ServicePlaceholder;
