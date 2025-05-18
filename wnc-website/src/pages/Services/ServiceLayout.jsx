import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceLayout.css';
import Hero from '../../reusables/components/Hero/Hero';
import CTA from '../../reusables/components/CTA/CTA';
import { Checkmark, ArrowRight } from '@carbon/icons-react';

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
      <Hero 
        title={title}
        subtitle={subtitle}
        showButtons={true}
        backgroundImage={heroImage}
      />

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
                <h3>Key Features</h3>
                <ul className="features-list">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <Checkmark className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="faqs-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              ))}
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
