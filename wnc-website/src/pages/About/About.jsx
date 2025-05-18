import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Hero from '../../reusables/components/Hero/Hero';
import CTA from '../../reusables/components/CTA/CTA';

import { 
  Partnership, 
  Growth, 
  Globe,
  LogoLinkedin,
  LogoTwitter,
  ChartBubble
} from '@carbon/icons-react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: '/assets/team/team-1.jpg',
      bio: 'With over 15 years of experience in business consulting, Sarah founded WNC-TECH with a vision to help businesses navigate global markets.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      image: '/assets/team/team-2.jpg',
      bio: 'Michael leads our operations with expertise in business process optimization and international business development.'
    },
    {
      id: 3,
      name: 'Aisha Al-Mansouri',
      position: 'Director of Legal Services',
      image: '/assets/team/team-3.jpg',
      bio: 'Aisha brings extensive knowledge in corporate law and regulatory compliance across MENA and European markets.'
    },
    {
      id: 4,
      name: 'Robert Williams',
      position: 'Head of Marketing',
      image: '/assets/team/team-4.jpg',
      bio: 'Robert specializes in digital marketing strategies and brand development for global companies.'
    }
  ];

  return (
    <div className="about-page">
      <Hero 
        title="About WNC-TECH"
        subtitle="Learn about our mission, our team, and why businesses choose us as their trusted partner"
        showButtons={false}
        backgroundImage="/assets/about-hero.jpg"
      />
      
      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h6 className="section-subtitle">OUR MISSION</h6>
              <h2 className="section-title">Empowering Business Growth Through Innovation</h2>
              <p>
                At WNC-TECH, our mission is to empower businesses of all sizes to establish, 
                expand, and thrive in today's competitive global marketplace. We believe in 
                providing comprehensive, tailored solutions that address the unique challenges 
                faced by each of our clients.
              </p>
              <p>
                We combine industry expertise, technological innovation, and a deep understanding 
                of international markets to deliver services that drive real business growth and 
                long-term success for our clients.
              </p>
            </div>
            <div className="mission-image">
              <img 
                src="/assets/mission-image.jpg" 
                alt="WNC-TECH Mission" 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Our+Mission';
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h6 className="section-subtitle">OUR VALUES</h6>
          <h2 className="section-title">The Principles That Guide Us</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Partnership size={32} />
              </div>
              <h3>Integrity</h3>
              <p>
                We conduct business with the highest ethical standards, 
                ensuring transparency and honesty in all our interactions.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <ChartBubble size={32} />
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously seek innovative solutions to help our clients 
                stay ahead in rapidly evolving markets.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Growth size={32} />
              </div>
              <h3>Excellence</h3>
              <p>
                We are committed to delivering exceptional quality and 
                exceeding expectations in everything we do.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Globe size={32} />
              </div>
              <h3>Global Perspective</h3>
              <p>
                We bring a global mindset and local expertise to help 
                businesses succeed in international markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h6 className="section-subtitle">OUR TEAM</h6>
          <h2 className="section-title">Meet The Experts Behind WNC-TECH</h2>
          <p className="section-description">
            Our diverse team of professionals brings together decades of experience 
            across business development, legal services, marketing, and technology.
          </p>
          
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-card" key={member.id}>
                <div className="team-image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x300?text=${member.name.replace(/ /g, '+')}`;
                    }}
                  />
                </div>
                <div className="team-details">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-social">
                    <a href="#" className="social-link">
                      <LogoLinkedin size={24} />
                    </a>
                    <a href="#" className="social-link">
                      <LogoTwitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="join-section">
        <div className="container">
          <div className="join-content">
            <div className="join-text">
              <h6 className="section-subtitle">JOIN OUR TEAM</h6>
              <h2 className="section-title">Grow Your Career With Us</h2>
              <p>
                We're always looking for talented professionals to join our team. If you're passionate 
                about helping businesses succeed and want to be part of an innovative, diverse, and 
                dynamic workplace, we'd love to hear from you.
              </p>
              <a href="/careers" className="btn btn-primary">View Open Positions</a>
            </div>
            <div className="join-image">
              <img 
                src="/assets/join-team.jpg" 
                alt="Join WNC-TECH Team" 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Join+Our+Team';
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="about-cta" style={{ paddingBottom: '0' }}>
        <CTA 
          title="Ready to transform your business?"
          subtitle="Schedule a free consultation with our experts today."
          buttonText="Contact Us"
          buttonLink="/contact"
          background="gradient"
        />
      </section>
    </div>
  );
};

export default About;
