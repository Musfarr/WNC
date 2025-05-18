import React from 'react';
import './Contact.css';
import Hero from '../../reusables/components/Hero/Hero';
import ContactForm from '../../reusables/components/ContactForm/ContactForm';

// Import FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Hero 
        title="Get In Touch"
        subtitle="We're here to answer your questions and discuss your business needs"
        showButtons={false}
        backgroundImage="/assets/contact-hero.jpg"
      />
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <ContactForm 
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
            </div>
            
            <div className="contact-info-container">
              <div className="contact-info-content">
                <h2 className="contact-heading">Contact Information</h2>
                <p className="contact-description">
                  Have questions or ready to start your project? Reach out to us 
                  using any of the channels below. Our team is available to assist you.
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Visit Our Office</h4>
                      <p>123 Business Avenue, Suite 100<br />Dubai, UAE</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Email Us</h4>
                      <p>
                        <a href="mailto:info@wnc-tech.com">info@wnc-tech.com</a><br />
                        <a href="mailto:support@wnc-tech.com">support@wnc-tech.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Call Us</h4>
                      <p>
                        <a href="tel:+97141234567">+971 4 123 4567</a><br />
                        <a href="tel:+971509876543">+971 50 987 6543</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Working Hours</h4>
                      <p>
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <h4>Connect With Us</h4>
                  <div className="social-icons">
                    <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.953922427607!2d55.272348!3d25.197525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="WNC-TECH Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
