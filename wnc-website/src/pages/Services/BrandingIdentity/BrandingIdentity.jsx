import React from 'react';
import ServiceLayout from '../ServiceLayout';
import { Carbon, ColorPalette, Idea, LogoTwitter } from '@carbon/icons-react';

const BrandingIdentity = () => {
  const serviceData = {
    title: "Branding & Identity Services",
    subtitle: "Create a memorable brand that resonates with your audience and drives business growth",
    icon: ColorPalette,
    heroImage: "/assets/services/branding-identity-hero.jpg",
    description: `
      <p>Your brand is more than just a logo—it's the essence of your business identity and the foundation 
      of your relationship with customers. At WNC-TECH, we craft compelling brand identities that 
      tell your unique story and connect with your target audience.</p>
      
      <p>Our branding specialists combine strategic thinking with creative excellence to develop 
      cohesive brand systems that work across all touchpoints—from digital platforms to physical 
      spaces and customer experiences.</p>
      
      <p>Whether you're launching a new venture, refreshing an existing brand, or repositioning 
      in the marketplace, our comprehensive branding services ensure your business stands out 
      in today's crowded market with authenticity and purpose.</p>
    `,
    
    features: [
      "Brand strategy development and positioning",
      "Visual identity design (logo, color palette, typography)",
      "Brand voice and messaging guidelines",
      "Brand collateral and stationery design",
      "Digital brand presence optimization",
      "Brand style guides and usage manuals",
      "Packaging design and product branding",
      "Environmental branding and signage",
      "Brand storytelling and narrative development",
      "Brand launch and activation campaigns",
      "Brand audits and performance analysis",
      "Brand extension and evolution strategies"
    ],
    
    processSteps: [
      {
        title: "Discovery & Research",
        description: "We immerse ourselves in your business, industry, competitors, and audience to understand your unique value proposition and market position."
      },
      {
        title: "Brand Strategy Development",
        description: "Based on research insights, we craft a strategic framework that defines your brand positioning, personality, values, and key messaging."
      },
      {
        title: "Creative Concept Development",
        description: "Our creative team develops multiple visual directions that bring your brand strategy to life through distinctive design elements."
      },
      {
        title: "Identity Design & Refinement",
        description: "We refine the selected direction into a comprehensive visual identity system with all core brand elements and applications."
      },
      {
        title: "Brand Guidelines Creation",
        description: "We compile detailed brand guidelines that ensure consistent implementation across all channels and touchpoints."
      },
      {
        title: "Implementation & Activation",
        description: "We roll out your new brand identity across all platforms and help you launch it effectively to both internal and external audiences."
      }
    ],
    
    faqs: [
      {
        question: "How long does a complete branding project typically take?",
        answer: "A comprehensive branding project usually takes between 8-12 weeks, depending on the scope and complexity. This timeline includes research, strategy development, design, and finalization of brand guidelines."
      },
      {
        question: "What's the difference between a logo and a brand identity?",
        answer: "A logo is just one element of your brand identity. A complete brand identity includes your logo, color palette, typography, imagery style, voice, messaging, and how these elements work together across various applications to create a cohesive brand experience."
      },
      {
        question: "Do you provide brand naming services?",
        answer: "Yes, we offer brand naming services as part of our comprehensive branding packages. This includes name generation, trademark screening, domain availability checking, and linguistic appropriateness assessment."
      },
      {
        question: "How do you ensure our brand will stand out from competitors?",
        answer: "We conduct thorough competitive analysis to identify gaps and opportunities in your market. Our strategy-first approach ensures we position your brand distinctively, focusing on your unique value proposition and authentic differentiators."
      },
      {
        question: "Will we own all the rights to our brand assets?",
        answer: "Yes, upon final payment, you receive full ownership and rights to all deliverables created as part of your branding project. We provide all source files and comprehensive usage guidelines for your team."
      }
    ],
    
    relatedServices: [
      {
        title: "Digital Marketing",
        description: "Amplify your brand reach with targeted digital marketing strategies that build on your brand foundation.",
        icon: LogoTwitter,
        link: "/services/digital-marketing"
      },
      {
        title: "Web Development",
        description: "Translate your brand identity into an engaging digital experience with custom website development.",
        icon: Idea,
        link: "/services/web-development"
      }
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default BrandingIdentity;
