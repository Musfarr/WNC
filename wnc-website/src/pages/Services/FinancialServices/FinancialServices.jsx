import React from 'react';
import ServiceLayout from '../ServiceLayout';
import { 
  Money, 
  CurrencyDollar, 
  ReportData, 
} from '@carbon/icons-react';

const FinancialServices = () => {
  const serviceData = {
    title: "Financial Services",
    subtitle: "Comprehensive financial solutions to optimize your business performance",
    icon: Money,
    heroImage: "/assets/services/financial-services-hero.jpg",
    description: `
      <p>WNC-TECH offers strategic financial services designed to strengthen your business's 
      financial health and support sustainable growth. Our team of experienced financial professionals 
      provides tailored solutions that address your specific business challenges.</p>
      
      <p>From day-to-day accounting and tax planning to complex financial modeling and 
      investment strategies, we deliver actionable financial insights that help you make 
      confident business decisions.</p>
      
      <p>Our holistic approach integrates financial best practices with your overall business 
      strategy, ensuring that financial management becomes a competitive advantage rather 
      than a compliance exercise.</p>
    `,
    
    features: [
      "Comprehensive accounting and bookkeeping",
      "Tax planning and compliance",
      "Financial reporting and analysis",
      "Cash flow forecasting and management",
      "Budgeting and financial planning",
      "Investment strategy and portfolio management",
      "Financial risk assessment and mitigation",
      "Capital raising and debt structuring",
      "Mergers and acquisitions financial advisory",
      "Financial systems implementation",
      "Business valuation services",
      "Profitability analysis and optimization"
    ],
    
    processSteps: [
      {
        title: "Financial Assessment",
        description: "We conduct a comprehensive review of your current financial situation, systems, and processes to identify strengths and areas for improvement."
      },
      {
        title: "Strategy Development",
        description: "Based on assessment findings, we create a tailored financial strategy aligned with your business objectives and growth plans."
      },
      {
        title: "Implementation Planning",
        description: "We develop a detailed implementation roadmap with clear milestones, responsibilities, and resource requirements."
      },
      {
        title: "Service Execution",
        description: "Our financial professionals deliver the agreed services with precision and attention to detail, maintaining regular communication throughout."
      },
      {
        title: "Performance Monitoring",
        description: "We track key financial indicators and provide regular reports on progress and improvements to your financial position."
      },
      {
        title: "Strategic Reviews",
        description: "Quarterly strategic reviews ensure your financial services continue to evolve with your changing business needs and market conditions."
      }
    ],
    
    faqs: [
      {
        question: "How can financial services improve my business profitability?",
        answer: "Our financial services help identify revenue leakage, optimize cost structures, improve pricing strategies, and enhance capital efficiency. By implementing data-driven financial best practices, clients typically see profitability improvements of 10-25% within the first year."
      },
      {
        question: "Do you work with businesses of all sizes?",
        answer: "Yes, we serve businesses across the growth spectrum—from startups to established enterprises. Our service approach scales appropriately based on your business size, complexity, and specific needs, with tailored solutions for each growth stage."
      },
      {
        question: "Can you integrate with our existing accounting software?",
        answer: "Absolutely. We work with all major accounting and financial management platforms including QuickBooks, Xero, NetSuite, Sage, and many others. We can also recommend and implement new systems if your current solution doesn't meet your needs."
      },
      {
        question: "How do you ensure data security with financial information?",
        answer: "We implement bank-level security protocols for all financial data, including end-to-end encryption, multi-factor authentication, secure client portals, regular security audits, and strict access controls. All our practices comply with GDPR, SOC 2, and industry-specific regulations."
      },
      {
        question: "What sets your financial services apart from traditional accounting firms?",
        answer: "Unlike traditional firms focused primarily on compliance and reporting, we take a strategic, forward-looking approach. We integrate financial expertise with business strategy, technology, and operational insights to deliver holistic solutions that drive growth, not just maintain financial records."
      }
    ],
    
    relatedServices: [
      {
        title: "Business Banking",
        description: "Complement your financial management with streamlined banking services designed for business efficiency.",
        icon: CurrencyDollar,
        link: "/services/business-banking"
      },
      {
        title: "Legal Services",
        description: "Ensure your financial activities are supported by solid legal structures and compliance frameworks.",
        icon: ReportData,
        link: "/services/legal-services"
      }
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default FinancialServices;
