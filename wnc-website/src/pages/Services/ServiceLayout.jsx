import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceLayout.css';
import Hero from '../../reusables/components/Hero/Hero';
import CTA from '../../reusables/components/CTA/CTA';
import { Checkmark, ArrowRight, Add, Subtract } from '@carbon/icons-react';

const ServiceLayout = ({ 
  title,
  subtitle,
  description,
  icon,
  features,
  processSteps,
  faqs,
  relatedServices,
  heroImage = '/assets/services/default-service-hero.jpg',
  ctaTitle = "Ready to get started?",
  ctaText = "Contact us today to learn more about our services and how we can help your business succeed."
}) => {
  return (
    <div className="service-page">
      <div className="custom-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="custom-hero-overlay">
          <div className="hero-pattern"></div>
        </div>
        <div className="custom-hero-content">
          <h1 className="animated-title">{title}</h1>
          <p className="animated-subtitle">{subtitle}</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Our Services
            </Link>
          </div>
          {/* <div className="hero-scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="scroll-text">Scroll down</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview-content">
            <div className="service-icon">
              {icon && React.createElement(icon, { size: 32, className: 'feature-icon' })}
            </div>
            <h2 className="section-title">{title}</h2>
            <div className="service-description" dangerouslySetInnerHTML={{ __html: description }} />

            {features && features.length > 0 && (
              <div className="service-features">
                <h3 className="features-title">Key Features</h3>
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon-container">
                        <Checkmark className="feature-icon" />
                      </div>
                      <div className="feature-content">
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {processSteps && processSteps.length > 0 && (
        <section className="service-process">
          <div className="container">
            <h2 className="section-title">Our Process</h2>
            <p className="section-description">
              We follow a structured approach to ensure the best results for your business.
            </p>
            
            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="process-number">{index + 1}</div>
                  <div className="process-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="service-faqs">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faqs-container">
              {faqs.map((faq, index) => {
                const [isOpen, setIsOpen] = useState(index === 0);
                return (
                  <div className={`faq-item ${isOpen ? 'active' : ''}`} key={index}>
                    <div 
                      className="faq-question-container" 
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <h3 className="faq-question">{faq.question}</h3>
                      <button className="faq-toggle">
                        {isOpen ? <Subtract size={20} /> : <Add size={20} />}
                      </button>
                    </div>
                    <div className={`faq-answer-container ${isOpen ? 'open' : ''}`}>
                      <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-cta">
        <CTA 
          title={ctaTitle}
          subtitle={ctaText}
          buttonText="Contact Us"
          buttonLink="/contact"
          background="gradient"
        />
      </section>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="related-services">
          <div className="container">
            <h2 className="section-title">Related Services</h2>
            <p className="section-description">
              Explore other services that might be beneficial for your business.
            </p>
            
            <div className="related-services-grid">
              {relatedServices.map((service, index) => (
                <Link to={service.link} className="related-service-card" key={index}>
                  <div className="related-service-icon">
                    <service.icon />
                  </div>
                  <h3>{service.title}</h3>
                  <div className="related-service-link">
                    <span>Learn More</span>
                    <ArrowRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceLayout;
