import React, { useState } from 'react';
import './NewsletterSignup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const NewsletterSignup = ({
  title = "Subscribe to Our Newsletter",
  subtitle = "Stay updated with our latest news, insights, and special offers."
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Simulate form submission
    setStatus({
      submitted: true,
      success: true,
      message: 'Thank you for subscribing to our newsletter!'
    });
    
    // Reset form after successful submission
    setEmail('');
    
    // Reset message after some time
    setTimeout(() => {
      setStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h3 className="newsletter-title">{title}</h3>
        <p className="newsletter-subtitle">{subtitle}</p>
        
        {status.submitted && (
          <div className={`newsletter-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Subscribe</span>
            </button>
          </div>
          <p className="newsletter-privacy">
            By subscribing, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
