import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from './servicesData';
import serviceDetailsData from './serviceDetailsData';
import './ServiceDetail.css';
import {
  Enterprise,
  Finance,
  DocumentSigned,
  ChartNetwork,
  Development,
  ArrowRight,
  ArrowLeft,
  ChevronDown
} from '@carbon/icons-react';

const iconMap = {
  Enterprise,
  Finance,
  DocumentSigned,
  ChartNetwork,
  Development
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => String(s.id) === String(id));
  const details = serviceDetailsData[id];

  if (!service) {
    return (
      <div className="service-detail-notfound">
        <h2>Service Not Found</h2>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || FaRegBuilding;

  return (
    <div className="service-detail-page animate-fade-in">
      <div className="service-detail-hero animate-slide-up">
        <div className="service-icon-large">
          <Icon size={48} />
        </div>
        <h1>{service.name}</h1>
        <div className="service-category">{service.category}</div>
      </div>
      <div className="service-detail-image animate-fade-in">
        <img src={service.image} alt={service.name} />
      </div>
      {/* <div className="service-detail-content animate-slide-up">
        <p className="service-description">{service.description}</p>
        <a href={service.url} target="_blank" rel="noopener noreferrer" className="btn-learn-more">View on Startitup Global</a>
      </div> */}
      {details && (
        <>
          <section className="service-detail-section animate-fade-in">
            <h2>How We Help</h2>
            <ul className="how-we-help-list">
              {details.howWeHelp.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </section>
          <section className="service-detail-section animate-slide-up">
            <h2>Key Features</h2>
            <ul className="features-list">
              {details.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
            </ul>
          </section>
          <section className="service-detail-section animate-fade-in">
            <h2>Our Process</h2>
            <ol className="process-list">
              {details.process.map((step, idx) => <li key={idx}>{step}</li>)}
            </ol>
          </section>
          <section className="service-detail-section animate-slide-up">
            <h2>FAQs</h2>
            <div className="faq-list">
              {details.faqs.map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <div className="faq-q">Q: {faq.q}</div>
                  <div className="faq-a">A: {faq.a}</div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
      <div className="service-detail-help animate-fade-in">
        <h2>Ready to Get Started?</h2>
        <p>Our team specializes in {service.category.toLowerCase()} solutions. Contact us for a custom strategy and expert support.</p>
        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
