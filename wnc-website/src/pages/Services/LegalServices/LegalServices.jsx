import React from 'react';
import ServiceLayout from '../ServiceLayout';
import { Scales, Document, Dashboard, Certificate } from '@carbon/icons-react';

const LegalServices = () => {
  const serviceData = {
    title: "Legal Services",
    subtitle: "Expert legal solutions for your business needs",
    icon: Scales,
    heroImage: "/assets/services/legal-services-hero.jpg",
    description: `
      <p>Navigate complex legal challenges with our expert team specializing in business and commercial law. 
      We provide comprehensive legal services tailored to your specific industry requirements.</p>
      
      <p>At WNC-TECH, we understand that legal matters can be complex and overwhelming for businesses. 
      Our team of experienced legal professionals offers practical, business-focused legal solutions 
      that protect your interests while supporting your growth objectives.</p>
      
      <p>From day-to-day compliance to strategic legal planning and dispute resolution, 
      we provide the legal expertise you need to operate with confidence in today's 
      complex regulatory environment.</p>
    `,
    
    features: [
      "Business contracts and agreements review",
      "Intellectual property protection",
      "Corporate governance and compliance",
      "Dispute resolution and litigation support",
      "Employment and labor law guidance",
      "Mergers and acquisitions legal advisory",
      "Regulatory compliance management",
      "International business law",
      "Privacy and data protection compliance",
      "Commercial real estate transactions",
      "Risk management and mitigation",
      "Business succession planning"
    ],
    
    processSteps: [
      {
        title: "Initial Legal Consultation",
        description: "We assess your current legal situation, identify potential risks, and outline available legal options aligned with your business goals."
      },
      {
        title: "Strategy Development",
        description: "Based on your specific needs, we develop a tailored legal strategy that addresses your immediate concerns while supporting long-term objectives."
      },
      {
        title: "Legal Documentation",
        description: "Our legal team drafts, reviews, or revises all necessary legal documents to ensure proper protection and compliance."
      },
      {
        title: "Implementation",
        description: "We guide you through implementing legal solutions, whether establishing new structures, resolving disputes, or securing rights."
      },
      {
        title: "Ongoing Support",
        description: "We provide continued legal guidance as your business evolves, ensuring your legal foundation remains solid through growth and change."
      },
      {
        title: "Legal Risk Monitoring",
        description: "Our team monitors relevant legal developments and helps you adapt proactively to changing regulations and requirements."
      }
    ],
    
    faqs: [
      {
        question: "Do you provide ongoing legal support or just one-time services?",
        answer: "We offer both project-based legal services and ongoing legal support through our retainer arrangements. Many clients begin with a specific legal need and then transition to our ongoing support services as they experience the value of having consistent legal guidance."
      },
      {
        question: "How do you handle legal matters requiring specialized expertise?",
        answer: "While our team has expertise across core business law areas, we maintain a network of specialized legal partners for highly specific matters. We coordinate these relationships seamlessly, ensuring you always have the right expertise while maintaining a single point of contact."
      },
      {
        question: "What industries do you have experience working with?",
        answer: "Our legal team has extensive experience across multiple sectors including technology, financial services, healthcare, manufacturing, professional services, and e-commerce. This diverse background allows us to understand industry-specific regulations and best practices."
      },
      {
        question: "How do you structure your legal service fees?",
        answer: "We offer flexible fee arrangements including hourly rates, fixed project fees, monthly retainers, and success-based fee structures. During our initial consultation, we'll discuss the most appropriate fee arrangement based on your specific needs and budget considerations."
      },
      {
        question: "Can you help with international legal matters?",
        answer: "Yes, we assist with international business law through our global network of legal partners. Whether you're expanding internationally, dealing with cross-border contracts, or navigating international regulations, we provide coordinated legal support across jurisdictions."
      }
    ],
    
    relatedServices: [
      {
        title: "Company Formation",
        description: "Establish your business with the optimal legal structure to support your goals and protect your interests.",
        icon: Certificate,
        link: "/services/company-formation"
      },
      {
        title: "Financial Services",
        description: "Ensure your financial operations are legally sound and compliant with relevant regulations.",
        icon: Dashboard,
        link: "/services/financial-services"
      }
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default LegalServices;
