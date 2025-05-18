import React from 'react';
import ServiceLayout from '../ServiceLayout';
import { Building, PiggyBank, Scales, Globe } from '@carbon/icons-react';

const CompanyFormation = () => {
  const serviceData = {
    title: "Company Formation Services",
    subtitle: "Establish your business legally and efficiently across multiple jurisdictions",
    icon: Building,
    heroImage: "/assets/services/company-formation-hero.jpg",
    description: `
      <p>At WNC-TECH, we simplify the complex process of company formation, helping entrepreneurs 
      and businesses establish their presence legally and efficiently in multiple jurisdictions.</p>
      
      <p>Our comprehensive company formation services are designed to save you time and resources, 
      ensuring compliance with local regulations while optimizing your business structure for growth
      and tax efficiency.</p>
      
      <p>Whether you're a startup looking to establish your first legal entity or an established 
      business expanding into new markets, our team of experts will guide you through every step
      of the process, from initial consultation to full operational setup.</p>
    `,
    
    features: [
      "Business structure consultation and optimization",
      "Complete legal documentation preparation",
      "Registered office address services",
      "Corporate secretary and compliance services",
      "Government liaison and expedited processing",
      "Shareholder and directorship setup",
      "Trademark and intellectual property registration",
      "Post-incorporation compliance support",
      "Multi-jurisdictional business setup",
      "Digital business licenses and permits",
      "Annual compliance management",
      "Corporate governance advisory"
    ],
    
    processSteps: [
      {
        title: "Initial Consultation",
        description: "We begin with a thorough consultation to understand your business goals, structure requirements, and jurisdictional preferences."
      },
      {
        title: "Jurisdiction Selection",
        description: "Based on your business needs, we recommend the optimal jurisdiction(s) for your company formation, considering tax implications, legal requirements, and future growth plans."
      },
      {
        title: "Documentation Preparation",
        description: "Our team prepares all necessary documentation, including articles of incorporation, memorandum of association, and other required legal documents."
      },
      {
        title: "Submission and Registration",
        description: "We manage the submission process with relevant authorities, ensuring all requirements are met and addressing any queries that arise during the registration process."
      },
      {
        title: "Post-Registration Setup",
        description: "After successful registration, we assist with all post-incorporation requirements like bank account setup, tax registration, and operational licenses."
      },
      {
        title: "Ongoing Compliance Support",
        description: "We provide ongoing support to ensure your company maintains compliance with all regulatory and legal requirements in its jurisdiction of operation."
      }
    ],
    
    faqs: [
      {
        question: "How long does it take to form a company?",
        answer: `<p>The timeframe for company formation varies by jurisdiction. In the UAE, it typically takes 3-7 business days, while in the UK it can be completed in 24-48 hours. US formations generally take 5-10 business days. Expedited services are available in most jurisdictions for an additional fee.</p>`
      },
      {
        question: "Do I need to be physically present to form a company?",
        answer: `<p>In most cases, you do not need to be physically present. We can manage the entire process remotely. However, some jurisdictions may require in-person appearances for specific processes like bank account opening, though even these requirements often have digital alternatives now.</p>`
      },
      {
        question: "What documents do I need to provide for company formation?",
        answer: `<p>Typically, you'll need to provide:</p>
        <ul>
          <li>Passport copies and proof of address for all shareholders and directors</li>
          <li>Business plan or activity description</li>
          <li>Proposed company name options</li>
          <li>Details of share structure and ownership percentages</li>
        </ul>
        <p>Additional requirements may vary by jurisdiction and business activity.</p>`
      },
      {
        question: "Which jurisdiction is best for my business?",
        answer: `<p>The ideal jurisdiction depends on your specific business needs, target markets, tax considerations, and long-term goals. During our consultation, we analyze these factors to recommend the most suitable jurisdiction. Popular options include the UAE (for tax benefits and Middle East access), UK (for European credibility), and US (for access to US markets and investors).</p>`
      },
      {
        question: "Can you help with bank account opening after company formation?",
        answer: `<p>Yes, we provide comprehensive support for corporate bank account opening, both locally and internationally. We have established relationships with various financial institutions and can recommend the best banking options based on your business requirements and facilitate the account opening process.</p>`
      }
    ],
    
    relatedServices: [
      {
        title: "Bank Account Setup",
        icon: PiggyBank,
        link: "/services/bank-account-setup"
      },
      {
        title: "Legal & Compliance",
        icon: Scales,
        link: "/services/legal"
      },
      {
        title: "International Expansion",
        icon: Globe,
        link: "/services/international-expansion"
      }
    ],
    
    ctaTitle: "Ready to establish your business?",
    ctaText: "Contact us today for a free consultation about your company formation needs."
  };

  return <ServiceLayout {...serviceData} />;
};

export default CompanyFormation;
