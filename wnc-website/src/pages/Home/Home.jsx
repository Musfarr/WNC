import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Home Component with all the page sections
const Home = () => {
  // Service data
  const services = [
    {
      title: 'Company Formation',
      description: 'Register your business legally across different regions including UAE, UK, and US with our comprehensive formation services.',
      link: '/services/company-formation'
    },
    {
      title: 'Business Banking',
      description: 'Set up your business banking seamlessly with our partnerships with leading financial institutions worldwide.',
      link: '/services/business-banking'
    },
    {
      title: 'Branding & Identity',
      description: 'Build a strong brand identity with our expert design team to ensure your business stands out in the market.',
      link: '/services/branding-identity'
    },
    {
      title: 'Digital Marketing',
      description: 'Reach your target audience effectively with our results-driven digital marketing strategies and campaigns.',
      link: '/services/digital-marketing'
    },
    {
      title: 'Financial Services',
      description: 'Get comprehensive financial planning, accounting, and tax services tailored for your business needs.',
      link: '/services/financial-services'
    },
    {
      title: 'Legal Services',
      description: 'Navigate complex legal challenges with our expert legal team specializing in business and commercial law.',
      link: '/services/legal-services'
    }
  ];

  // Hero component with animated elements and creative design
  const Hero = () => (
    <section className="hero-section">
      <div className="hero-bacground">
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Transform Your Business Ideas Into Reality</h1>
            <p>We provide complete business solutions for startups and established companies looking to expand globally.</p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">Book a Consultation</a>
              <a href="/services" className="btn btn-secondary">Explore Our Services</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="graphic-element elem1"></div>
              <div className="graphic-element elem2"></div>
              <div className="graphic-element elem3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Service Card component with hover effects
  const ServiceCard = ({ title, description, index }) => {
    // Generate a unique color based on index
    const colors = ['#1e4d92', '#3a6ea5', '#0f3460', '#2c3e50', '#34495e', '#2a4365'];
    const color = colors[index % colors.length];
    
    return (
      <div className="service-card">
        <div className="service-card-icon" style={{ backgroundColor: `${color}15` }}>
          <div className="icon-inner" style={{ backgroundColor: color }}></div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-card-learn-more">
          <span>Learn More</span>
          <span className="arrow-icon">→</span>
        </div>
      </div>
    );
  };

  // Testimonial component
  const Testimonial = () => (
    <section className="testimonial-section">
      <div className="container">
        <h6 className="section-subtitle">TESTIMONIALS</h6>
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Working with WNC-TECH has been a game-changer for our business. Their company formation and legal services streamlined our expansion to the UAE market."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <p>CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Call to Action component
  const CTA = () => (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to grow your business?</h2>
          <p>Schedule a free consultation with our experts and discover how we can help you reach your business goals.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h6 className="section-subtitle">OUR SERVICES</h6>
          <h2 className="section-title">Comprehensive Business Solutions</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <a href={service.link} key={index} className="service-card-link">
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  index={index} 
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section">
        <div className="about-bg-element"></div>
        <div className="about-floating-elements">
          <div className="float-element element-1"></div>
          <div className="float-element element-2"></div>
          <div className="float-element element-3"></div>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-text-header">
                <div className="accent-line"></div>
                <h6 className="section-subtitle">ABOUT US</h6>
              </div>
              <h2 className="section-title">Your <span className="text-gradient">Global</span> Business Partner</h2>
              <p className="about-description">At WNC-TECH, we specialize in helping entrepreneurs and established businesses navigate the complexities of global expansion. With our team of experienced professionals, we provide end-to-end solutions tailored to your unique needs.</p>
              
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1V23M12 1L8 5M12 1L16 5M19 16V23M19 16L16 19M19 16L22 19M5 16V23M5 16L2 19M5 16L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">250+</h3>
                    <p>Businesses Launched</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">15+</h3>
                    <p>Global Markets</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">98<span className="percentage">%</span></h3>
                    <p>Client Satisfaction</p>
                  </div>
                </div>
              </div>
              
              <div className="about-cta">
                <a href="/about" className="btn btn-gradient">
                  <span>Learn More</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-frame">
                <div className="image-container">
                  <div className="overlay-effect"></div>
                  <div className="pattern-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonial />
      
      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;
