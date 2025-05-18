import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
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

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Company Formation',
      description: 'Register your business legally across different regions including UAE, UK, and US with our comprehensive formation services.',
      icon: Enterprise,
      link: '/services/company-formation',
      image: 'https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Company Registration', 'Documentation Management', 'Regulatory Compliance', 'Legal Structure Advice']
    },
    {
      id: 2,
      title: 'Business Banking',
      description: 'Set up your business banking seamlessly with our partnerships with leading financial institutions worldwide.',
      icon: Finance,
      link: '/services/business-banking',
      image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Business Account Setup', 'Multi-Currency Solutions', 'Payment Gateway Integration', 'Financial Advisory']
    },
    {
      id: 3,
      title: 'Legal Services',
      description: 'Navigate complex legal challenges with our expert team specializing in business law, contracts, IP protection, and compliance.',
      icon: DocumentSigned,
      link: '/services/legal-services',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Contract Drafting', 'IP Protection', 'Compliance Management', 'Legal Consultation']
    },
    {
      id: 4,
      title: 'Branding & Development',
      description: 'Create a stunning brand identity and professional website that effectively showcases your business to the world.',
      icon: Development,
      link: '/services/branding-development',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Brand Strategy', 'Visual Identity Design', 'Website Development', 'Content Creation']
    },
    {
      id: 5,
      title: 'Marketing Services',
      description: 'Expand your reach with our digital marketing, social media management, SEO, and targeted advertising strategies.',
      icon: ChartNetwork,
      link: '/services/marketing',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Digital Marketing', 'Social Media Management', 'SEO Optimization', 'Content Strategy']
    },
    {
      id: 6,
      title: 'Accounting & VAT',
      description: 'Keep your finances in order with our comprehensive accounting, bookkeeping, and tax compliance services.',
      icon: Finance,
      link: '/services/accounting',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Bookkeeping', 'VAT Registration', 'Tax Compliance', 'Financial Reporting']
    }
  ];

  // Custom slider functionality
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = services.length;
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  // Disable auto-sliding for now to avoid potential issues
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  // Parallax effect for hero section
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="services-page">
      {/* Enhanced Services Hero */}
      <section className="services-hero">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.4}px)` }}></div>
        <div className="overlay"></div>
        
        {/* Animated geometric shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="hero-grid"></div>
        
        <div className="container hero-container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              {/* <div className="hero-badge">INNOVATIVE SOLUTIONS</div> */}
              <h1 className="hero-title">
                <div className="title-accent"></div>
                <span className="hero-title-line">Transform Your</span>
                <span className="hero-title-line">Business <span className="text-gradient">Vision</span></span>
                <span className="hero-title-line">Into Reality</span>
              </h1>
              {/* <p className="hero-description">We provide comprehensive business solutions designed to help your company establish, grow, and succeed in today's competitive global market.</p> */}
              <div className="hero-buttons">
                <Link to="/contact" className="btn-hero-primary">Get Started</Link>
                <a href="#services-overvew" className="btn-hero-secondary">
                  Explore Services <ChevronDown size={20} />
                </a>
              </div>
            </div>
            
            {/* <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <div className="hero-image-accent"></div>
                <div className="hero-image"></div>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="hero-waves">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overvew" className="services-ovview">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">WHAT WE OFFER</h6>
            <h2 className="section-title">Our Specialized Business Services</h2>
            <p className="section-description">
              At WNC-TECH, we provide end-to-end business solutions tailored to your specific needs. 
              Whether you're establishing a new venture or looking to expand globally, our services 
              are designed to support every aspect of your business journey.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <div className="service-card" key={service.id}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="image-overlay"></div>
                  <div className="service-icon-wrapper">
                    <service.icon size={32} className="service-icon-svg" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-bullet"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link} className="btn-learn-more">
                    Learn More 
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">OUR APPROACH</h6>
            <h2 className="section-title">How We <span className="text-gradient">Work With You</span></h2>
            <p className="section-description">
              Our streamlined process ensures that we understand your business needs thoroughly
              and deliver tailored solutions that drive results.
            </p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>We begin with a comprehensive consultation to understand your business goals, challenges, and requirements.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Strategic Planning</h3>
                <p>Our team develops a customized plan tailored to your specific business needs and objectives.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>We execute the strategy efficiently, keeping you informed throughout the process.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Ongoing Support</h3>
                <p>We provide continuous support and adjustments as your business evolves and grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">CLIENT TESTIMONIALS</h6>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V9.5C10 9.76522 9.89464 10.0196 9.70711 10.2071C9.51957 10.3946 9.26522 10.5 9 10.5H8.5V11C8.5 11.1326 8.55268 11.2598 8.64645 11.3536C8.74021 11.4473 8.86739 11.5 9 11.5H10C10.2652 11.5 10.5196 11.6054 10.7071 11.7929C10.8946 11.9804 11 12.2348 11 12.5V13.5C11 13.7652 10.8946 14.0196 10.7071 14.2071C10.5196 14.3946 10.2652 14.5 10 14.5H7C6.73478 14.5 6.48043 14.3946 6.29289 14.2071C6.10536 14.0196 6 13.7652 6 13.5V12.5C6 12.2348 6.10536 11.9804 6.29289 11.7929C6.48043 11.6054 6.73478 11.5 7 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V8C14 6.93913 14.4214 5.92172 15.1716 5.17157C15.9217 4.42143 16.9391 4 18 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9.5C20 9.76522 19.8946 10.0196 19.7071 10.2071C19.5196 10.3946 19.2652 10.5 19 10.5H18.5V11C18.5 11.1326 18.5527 11.2598 18.6464 11.3536C18.7402 11.4473 18.8674 11.5 19 11.5H20C20.2652 11.5 20.5196 11.6054 20.7071 11.7929C20.8946 11.9804 21 12.2348 21 12.5V13.5C21 13.7652 20.8946 14.0196 20.7071 14.2071C20.5196 14.3946 20.2652 14.5 20 14.5H17C16.7348 14.5 16.4804 14.3946 16.2929 14.2071C16.1054 14.0196 16 13.7652 16 13.5V12.5C16 12.2348 16.1054 11.9804 16.2929 11.7929C16.4804 11.6054 16.7348 11.5 17 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "WNC-TECH provided exceptional support for our company formation in the UAE. Their expert team navigated all legal complexities, making the entire process seamless. Highly recommend their services!"
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://randomuser.me/api/portraits/women/48.jpg" alt="Rebecca Clark" />
                </div>
                <div className="author-info">
                  <h4>Rebecca Clark</h4>
                  <p>CEO, Innovate Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V9.5C10 9.76522 9.89464 10.0196 9.70711 10.2071C9.51957 10.3946 9.26522 10.5 9 10.5H8.5V11C8.5 11.1326 8.55268 11.2598 8.64645 11.3536C8.74021 11.4473 8.86739 11.5 9 11.5H10C10.2652 11.5 10.5196 11.6054 10.7071 11.7929C10.8946 11.9804 11 12.2348 11 12.5V13.5C11 13.7652 10.8946 14.0196 10.7071 14.2071C10.5196 14.3946 10.2652 14.5 10 14.5H7C6.73478 14.5 6.48043 14.3946 6.29289 14.2071C6.10536 14.0196 6 13.7652 6 13.5V12.5C6 12.2348 6.10536 11.9804 6.29289 11.7929C6.48043 11.6054 6.73478 11.5 7 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V8C14 6.93913 14.4214 5.92172 15.1716 5.17157C15.9217 4.42143 16.9391 4 18 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9.5C20 9.76522 19.8946 10.0196 19.7071 10.2071C19.5196 10.3946 19.2652 10.5 19 10.5H18.5V11C18.5 11.1326 18.5527 11.2598 18.6464 11.3536C18.7402 11.4473 18.8674 11.5 19 11.5H20C20.2652 11.5 20.5196 11.6054 20.7071 11.7929C20.8946 11.9804 21 12.2348 21 12.5V13.5C21 13.7652 20.8946 14.0196 20.7071 14.2071C20.5196 14.3946 20.2652 14.5 20 14.5H17C16.7348 14.5 16.4804 14.3946 16.2929 14.2071C16.1054 14.0196 16 13.7652 16 13.5V12.5C16 12.2348 16.1054 11.9804 16.2929 11.7929C16.4804 11.6054 16.7348 11.5 17 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "The marketing strategy developed by WNC-TECH transformed our digital presence completely. Within six months, we saw a 200% increase in qualified leads and a significant boost in brand recognition."
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Anderson" />
                </div>
                <div className="author-info">
                  <h4>David Anderson</h4>
                  <p>Marketing Director, Global Tech</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V9.5C10 9.76522 9.89464 10.0196 9.70711 10.2071C9.51957 10.3946 9.26522 10.5 9 10.5H8.5V11C8.5 11.1326 8.55268 11.2598 8.64645 11.3536C8.74021 11.4473 8.86739 11.5 9 11.5H10C10.2652 11.5 10.5196 11.6054 10.7071 11.7929C10.8946 11.9804 11 12.2348 11 12.5V13.5C11 13.7652 10.8946 14.0196 10.7071 14.2071C10.5196 14.3946 10.2652 14.5 10 14.5H7C6.73478 14.5 6.48043 14.3946 6.29289 14.2071C6.10536 14.0196 6 13.7652 6 13.5V12.5C6 12.2348 6.10536 11.9804 6.29289 11.7929C6.48043 11.6054 6.73478 11.5 7 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V8C14 6.93913 14.4214 5.92172 15.1716 5.17157C15.9217 4.42143 16.9391 4 18 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9.5C20 9.76522 19.8946 10.0196 19.7071 10.2071C19.5196 10.3946 19.2652 10.5 19 10.5H18.5V11C18.5 11.1326 18.5527 11.2598 18.6464 11.3536C18.7402 11.4473 18.8674 11.5 19 11.5H20C20.2652 11.5 20.5196 11.6054 20.7071 11.7929C20.8946 11.9804 21 12.2348 21 12.5V13.5C21 13.7652 20.8946 14.0196 20.7071 14.2071C20.5196 14.3946 20.2652 14.5 20 14.5H17C16.7348 14.5 16.4804 14.3946 16.2929 14.2071C16.1054 14.0196 16 13.7652 16 13.5V12.5C16 12.2348 16.1054 11.9804 16.2929 11.7929C16.4804 11.6054 16.7348 11.5 17 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="testimonial-text">
                "The legal team at WNC-TECH has been instrumental in helping us navigate complex regulatory requirements across multiple jurisdictions. Their expertise saved us time, money, and potential legal issues."
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sophia Rahman" />
                </div>
                <div className="author-info">
                  <h4>Sophia Rahman</h4>
                  <p>COO, Nexus Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Get in touch with our team of experts to discuss how we can help your business grow.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
              <Link to="/about" className="btn-secondary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
