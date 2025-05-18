import React from 'react';
import ServiceLayout from '../ServiceLayout';
import { 
  LogoTwitter, 
  Search, 
  ChartLine, 
  Email 
} from '@carbon/icons-react';

const DigitalMarketing = () => {
  const serviceData = {
    title: "Digital Marketing Services",
    subtitle: "Drive growth and engagement with data-driven digital marketing strategies",
    icon: ChartLine,
    heroImage: "/assets/services/digital-marketing-hero.jpg",
    description: `
      <p>In today's digital-first world, an effective online presence is essential for business success. 
      WNC-TECH provides comprehensive digital marketing solutions that connect your brand with the 
      right audience at the right time, driving meaningful engagement and measurable results.</p>
      
      <p>Our data-driven approach combines strategic thinking with creative execution, ensuring that 
      every marketing dollar you invest works efficiently toward achieving your business goals.</p>
      
      <p>From search engine optimization to social media campaigns and content marketing, our 
      team of digital marketing experts will create a tailored strategy that amplifies your brand 
      voice and delivers sustainable growth for your business.</p>
    `,
    
    features: [
      "Search engine optimization (SEO)",
      "Pay-per-click (PPC) advertising",
      "Social media marketing and management",
      "Content marketing and strategy",
      "Email marketing campaigns",
      "Conversion rate optimization (CRO)",
      "Marketing automation implementation",
      "Analytics and performance reporting",
      "Competitor analysis and benchmarking",
      "Influencer marketing campaigns",
      "Video marketing strategy",
      "User experience (UX) optimization"
    ],
    
    processSteps: [
      {
        title: "Digital Marketing Audit",
        description: "We analyze your current digital footprint, identify strengths, weaknesses, and opportunities for improvement."
      },
      {
        title: "Strategy Development",
        description: "Based on research and business objectives, we create a comprehensive digital marketing roadmap tailored to your needs."
      },
      {
        title: "Channel & Tactic Selection",
        description: "We identify the optimal marketing channels and tactics to reach your target audience effectively."
      },
      {
        title: "Content Creation",
        description: "Our creative team develops compelling, on-brand content optimized for each selected marketing channel."
      },
      {
        title: "Campaign Execution",
        description: "We implement campaigns across chosen platforms with meticulous attention to timing, targeting, and messaging."
      },
      {
        title: "Monitoring & Optimization",
        description: "Through continuous performance monitoring, we optimize campaigns in real-time to maximize ROI and results."
      }
    ],
    
    faqs: [
      {
        question: "How quickly will I see results from digital marketing efforts?",
        answer: "Results timeline varies by channel. SEO typically shows meaningful results in 3-6 months, while paid advertising can drive immediate traffic. Social media and content marketing often show progressive improvement over 2-4 months. We provide realistic timelines based on your specific strategy."
      },
      {
        question: "How do you measure the success of digital marketing campaigns?",
        answer: "We establish clear KPIs aligned with your business goals—whether that's website traffic, lead generation, conversion rates, or revenue growth. Our detailed reporting includes both campaign-specific metrics and overall business impact analysis."
      },
      {
        question: "What budget should I allocate for digital marketing?",
        answer: "Effective digital marketing budgets vary widely based on industry, competition, and objectives. We work with clients at various budget levels, creating strategies that maximize impact while respecting financial constraints. We'll recommend the most efficient allocation across channels based on your goals."
      },
      {
        question: "Do you specialize in specific industries for digital marketing?",
        answer: "While we have experience across many sectors, we have particular expertise in B2B services, technology, financial services, and professional services. However, our methodology and approach adapt well to various industries as the core principles of effective digital marketing remain consistent."
      },
      {
        question: "Can you work with our in-house marketing team?",
        answer: "Absolutely! We often collaborate with in-house teams, providing specialized expertise while integrating with your existing processes. We can fill specific skill gaps, provide strategic guidance, or handle complete campaign execution depending on your needs."
      }
    ],
    
    relatedServices: [
      {
        title: "Branding & Identity",
        description: "Ensure your digital marketing efforts align with a strong, consistent brand that resonates with your audience.",
        icon: LogoTwitter,
        link: "/services/branding-identity"
      },
      {
        title: "Web Development",
        description: "Maximize the effectiveness of your digital marketing with a high-performing, conversion-optimized website.",
        icon: Search,
        link: "/services/web-development"
      }
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default DigitalMarketing;
