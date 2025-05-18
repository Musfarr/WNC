import React from 'react';
import ServiceLayout from '../ServiceLayout';
import {  CurrencyDollar, Money, PiggyBank } from '@carbon/icons-react';


const BusinessBanking = () => {
  const serviceData = {
    title: "Business Banking Services",
    subtitle: "Streamline financial operations with modern banking solutions for your business",
    icon: PiggyBank,
    heroImage: "/assets/services/business-banking-hero.jpg",
    description: `
      <p>WNC-TECH provides comprehensive business banking solutions that empower your 
      company with the financial tools needed to thrive in today's competitive market.</p>
      
      <p>From streamlined account setup to integrated payment solutions, our business banking 
      services are designed to eliminate friction in your financial operations while maximizing 
      efficiency and security.</p>
      
      <p>Our global network of banking partners ensures you can operate seamlessly across borders, 
      with multi-currency support and international payment capabilities built for modern business needs.</p>
    `,
    
    features: [
      "Business account setup across multiple jurisdictions",
      "Multi-currency accounts with competitive exchange rates",
      "Integrated payment gateway solutions",
      "Corporate credit and debit card issuance",
      "Online and mobile banking platforms",
      "International wire transfer capabilities",
      "Merchant services and POS solutions",
      "Cash management and treasury services",
      "Trade financing and letters of credit",
      "API integrations for accounting software",
      "Fraud protection and security measures",
      "Dedicated business banking relationship manager"
    ],
    
    processSteps: [
      {
        title: "Initial Consultation",
        description: "We assess your business banking needs and recommend the optimal banking solutions aligned with your operational requirements."
      },
      {
        title: "Documentation Preparation",
        description: "Our team helps compile and prepare all necessary documentation for account opening and compliance verification."
      },
      {
        title: "Banking Partner Selection",
        description: "Based on your business profile and needs, we connect you with the most suitable banking partners from our global network."
      },
      {
        title: "Account Activation",
        description: "We expedite the account opening process and ensure all features are properly activated and configured."
      },
      {
        title: "Integration Setup",
        description: "Our technical team assists in integrating your banking services with your existing financial and accounting systems."
      },
      {
        title: "Ongoing Support",
        description: "We provide continuous support to help optimize your banking operations and resolve any issues that may arise."
      }
    ],
    
    faqs: [
      {
        question: "How long does it take to set up a business bank account?",
        answer: "The timeframe varies depending on the jurisdiction and banking partner, but typically ranges from 1-4 weeks. Our services aim to expedite this process through our established banking relationships."
      },
      {
        question: "Can I open a business account remotely without visiting a bank?",
        answer: "Yes, many of our banking partners offer fully digital onboarding processes that allow you to open accounts remotely. We facilitate this process with proper documentation and verification procedures."
      },
      {
        question: "Do you offer banking solutions for high-risk industries?",
        answer: "We work with specialized banking partners who can accommodate various business types, including those in regulated or high-risk industries. Each case is assessed individually to find suitable banking solutions."
      },
      {
        question: "What documents are required to open a business bank account?",
        answer: "Typically required documents include company registration certificates, articles of incorporation, proof of business address, director and shareholder identification, and business plans. Requirements vary by jurisdiction and banking institution."
      },
      {
        question: "Can you help with merchant account setup for online payments?",
        answer: "Yes, we offer comprehensive merchant account setup services, including payment gateway integration, multi-currency processing, and fraud prevention systems tailored to your business model."
      }
    ],
    
    relatedServices: [
      {
        title: "Company Formation",
        description: "Establish your business entity with the optimal legal structure before setting up your banking relationships.",
        icon: CurrencyDollar,
        link: "/services/company-formation"
      },
      {
        title: "Financial Services",
        description: "Complement your banking setup with comprehensive financial management and accounting services.",
        icon: Money,
        link: "/services/financial-services"
      }
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default BusinessBanking;
