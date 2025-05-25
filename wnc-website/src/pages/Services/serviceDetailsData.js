// Detailed data for each service: how we help, features, process, faqs, etc.
// key: id (matches servicesData.js)
const serviceDetailsData = {
  1: {
    howWeHelp: [
      'We design and launch a professional Wix store tailored to your brand.',
      'Full product integration, payment setup, and mobile optimization.',
      'Ongoing support for updates and marketing.'
    ],
    features: [
      'Custom storefront design',
      'Payment gateway integration',
      'Mobile-ready layouts',
      'SEO optimization',
      'Product import and setup'
    ],
    process: [
      'Consultation to understand your products and branding.',
      'Store design and product setup.',
      'Payment and shipping configuration.',
      'Launch and post-launch support.'
    ],
    faqs: [
      { q: 'How long does it take to launch?', a: 'Most stores are ready in 7-10 business days.' },
      { q: 'Can I update products myself?', a: 'Yes, you get full access and training.' }
    ]
  },
  2: {
    howWeHelp: [
      'Showcase your products or portfolio with a visually stunning Wix website.',
      'Personalized layouts to highlight your unique offerings.',
      'Easy-to-update galleries and sections.'
    ],
    features: [
      'Gallery and product display',
      'Custom branding',
      'Responsive design',
      'SEO setup',
      'Easy content management'
    ],
    process: [
      'Initial consultation and requirements gathering.',
      'Design mockups and client feedback.',
      'Website build and content upload.',
      'Final review and launch.'
    ],
    faqs: [
      { q: 'Can I add more products later?', a: 'Yes, you can easily update your site.' },
      { q: 'Is the site mobile-friendly?', a: 'Absolutely, all designs are responsive.' }
    ]
  },
  3: {
    howWeHelp: [
      'Deliver modern, fast, and mobile-friendly Webflow sites.',
      'Focus on business goals and user experience.',
      'Provide ongoing support and updates.'
    ],
    features: [
      'Responsive layouts',
      'SEO optimization',
      'CMS integration',
      'Fast load times',
      'Custom animations'
    ],
    process: [
      'Discovery and strategy session.',
      'Design and prototyping.',
      'Development and content integration.',
      'Testing and launch.'
    ],
    faqs: [
      { q: 'Can I manage the site myself?', a: 'Yes, we provide training for Webflow CMS.' },
      { q: 'How secure is my site?', a: 'Webflow offers robust security and hosting.' }
    ]
  },
  4: {
    howWeHelp: [
      'Craft high-converting landing pages in Webflow.',
      'Focus on clear calls-to-action and lead generation.',
      'Integrate with your marketing tools.'
    ],
    features: [
      'Custom landing page design',
      'Conversion-focused layouts',
      'A/B testing ready',
      'Mobile optimization',
      'Analytics integration'
    ],
    process: [
      'Strategy call to define goals.',
      'Wireframes and design approval.',
      'Development and integration.',
      'Launch and performance review.'
    ],
    faqs: [
      { q: 'Can I use my own domain?', a: 'Yes, we help connect your domain.' },
      { q: 'Do you provide copywriting?', a: 'Copywriting services are available upon request.' }
    ]
  },
  5: {
    howWeHelp: [
      'Design custom eBay HTML templates for standout listings.',
      'Enhance product visibility and trust.',
      'A+ content creation for higher conversion.'
    ],
    features: [
      'Mobile-optimized HTML templates',
      'Branding and graphic design',
      'A+ content blocks',
      'SEO-friendly code',
      'Easy integration with eBay'
    ],
    process: [
      'Gather product and branding info.',
      'Template and content design.',
      'Client review and revisions.',
      'Delivery and integration support.'
    ],
    faqs: [
      { q: 'Are templates eBay compliant?', a: 'Yes, all templates follow eBay guidelines.' },
      { q: 'Can I reuse templates?', a: 'Yes, templates are reusable for multiple listings.' }
    ]
  },
  6: {
    howWeHelp: [
      'Provide legally sound equipment hire agreements.',
      'Tailored to construction and real estate needs.',
      'Ensure compliance and clarity for all parties.'
    ],
    features: [
      'Customizable contract templates',
      'Clear terms and conditions',
      'Industry-specific clauses',
      'Editable digital documents',
      'Expert legal review'
    ],
    process: [
      'Consultation to understand requirements.',
      'Drafting agreement based on needs.',
      'Review and finalization.',
      'Delivery in digital format.'
    ],
    faqs: [
      { q: 'Is this template legally valid?', a: 'Yes, reviewed by legal professionals.' },
      { q: 'Can I edit the agreement?', a: 'Yes, files are fully editable.' }
    ]
  },
  7: {
    howWeHelp: [
      'Provide professional templates for rental inspections.',
      'Help landlords and property managers document property condition.',
      'Ensure compliance with local regulations.'
    ],
    features: [
      'Detailed inspection checklists',
      'Editable PDF/Word files',
      'Guidance notes',
      'Compliance-ready',
      'Easy customization'
    ],
    process: [
      'Consultation to determine needs.',
      'Template selection and customization.',
      'Delivery and usage guidance.'
    ],
    faqs: [
      { q: 'Can I use this for multiple properties?', a: 'Yes, templates are reusable.' },
      { q: 'Is this accepted by agencies?', a: 'Templates meet industry standards.' }
    ]
  },
  8: {
    howWeHelp: [
      'Offer comprehensive contractor agreement templates.',
      'Protect your business and contractors.',
      'Ensure all legal requirements are met.'
    ],
    features: [
      'Customizable agreement',
      'Clear payment terms',
      'Confidentiality clauses',
      'Editable digital format',
      'Legal compliance'
    ],
    process: [
      'Requirements assessment.',
      'Template drafting.',
      'Client review and edits.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Is this suitable for freelancers?', a: 'Yes, works for contractors and freelancers.' },
      { q: 'Can I add my own clauses?', a: 'Yes, templates are fully editable.' }
    ]
  },
  9: {
    howWeHelp: [
      'Provide cleaning service agreement templates.',
      'Protect both service provider and client.',
      'Clarify scope and payment terms.'
    ],
    features: [
      'Scope of work section',
      'Editable contract',
      'Payment schedule',
      'Termination clauses',
      'Legal compliance'
    ],
    process: [
      'Initial consultation.',
      'Template customization.',
      'Review and delivery.'
    ],
    faqs: [
      { q: 'Is this valid for commercial cleaning?', a: 'Yes, suitable for commercial and residential.' },
      { q: 'Can I use this in any country?', a: 'Templates can be adapted for local laws.' }
    ]
  },
  10: {
    howWeHelp: [
      'Draft privacy policies for websites and online businesses.',
      'Ensure compliance with data protection laws.',
      'Tailor policies to your business model.'
    ],
    features: [
      'GDPR/CCPA compliance',
      'Customizable templates',
      'Clear language',
      'Easy integration',
      'Legal review'
    ],
    process: [
      'Business and data review.',
      'Drafting privacy policy.',
      'Client review and edits.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Is this policy up to date?', a: 'Yes, regularly updated for compliance.' },
      { q: 'Can I use it for e-commerce?', a: 'Yes, suitable for all online businesses.' }
    ]
  },
  11: {
    howWeHelp: [
      'Provide digital image licensing solutions.',
      'Protect your creative assets legally.',
      'Flexible licensing options.'
    ],
    features: [
      'Custom license agreements',
      'Clear usage terms',
      'Digital delivery',
      'Legal compliance',
      'Support for copyright issues'
    ],
    process: [
      'Consultation to understand asset use.',
      'Drafting license agreement.',
      'Client review and approval.',
      'Delivery of final documents.'
    ],
    faqs: [
      { q: 'Can I license multiple images?', a: 'Yes, agreements cover multiple assets.' },
      { q: 'Are licenses international?', a: 'Yes, valid globally.' }
    ]
  },
  12: {
    howWeHelp: [
      'Provide UK business address for mail and registration.',
      'Ensure privacy and professionalism.',
      'Handle mail forwarding securely.'
    ],
    features: [
      'Prestigious UK address',
      'Mail forwarding',
      'Company registration support',
      'Confidentiality',
      'Annual renewal reminders'
    ],
    process: [
      'Sign up and verification.',
      'Address allocation.',
      'Mail forwarding setup.',
      'Ongoing support.'
    ],
    faqs: [
      { q: 'Can I use this for company registration?', a: 'Yes, address is suitable for HMRC and Companies House.' },
      { q: 'Is mail forwarding included?', a: 'Yes, forwarding is part of the service.' }
    ]
  },
  13: {
    howWeHelp: [
      'Provide commercial tenancy agreement templates.',
      'Protect both landlord and tenant interests.',
      'Compliant with UK property law.'
    ],
    features: [
      'Customizable lease terms',
      'Break clause options',
      'Editable digital files',
      'Legal compliance',
      'Expert legal review'
    ],
    process: [
      'Consultation to determine needs.',
      'Template drafting and customization.',
      'Client review and edits.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Is this suitable for offices and retail?', a: 'Yes, works for various commercial properties.' },
      { q: 'Can I edit the agreement?', a: 'Yes, all files are editable.' }
    ]
  },
  14: {
    howWeHelp: [
      'Provide demand letter templates for legal and compliance needs.',
      'Help you communicate payment or contract demands professionally.',
      'Templates reviewed by legal experts.'
    ],
    features: [
      'Customizable letter format',
      'Legal compliance',
      'Clear language',
      'Editable digital files',
      'Guidance notes included'
    ],
    process: [
      'Requirements gathering.',
      'Template drafting.',
      'Client review and edits.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Is this suitable for international use?', a: 'Yes, templates can be adapted.' },
      { q: 'Can I send this digitally?', a: 'Yes, provided in digital format.' }
    ]
  },
  15: {
    howWeHelp: [
      'Provide letter of intent templates for business negotiations.',
      'Clarify terms and expectations before formal agreements.',
      'Editable for various business needs.'
    ],
    features: [
      'Customizable template',
      'Editable sections',
      'Legal compliance',
      'Digital delivery',
      'Guidance notes'
    ],
    process: [
      'Consultation to understand intent.',
      'Template drafting.',
      'Client review.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Can I use this for real estate?', a: 'Yes, suitable for various sectors.' },
      { q: 'Is this legally binding?', a: 'It can be, depending on how it’s used.' }
    ]
  },
  16: {
    howWeHelp: [
      'Provide professional cover letter templates.',
      'Tailored for job applications in any industry.',
      'Editable and easy to personalize.'
    ],
    features: [
      'Modern design',
      'Editable fields',
      'Industry-specific options',
      'Digital delivery',
      'Guidance notes'
    ],
    process: [
      'Template selection.',
      'Customization for your needs.',
      'Delivery and usage tips.'
    ],
    faqs: [
      { q: 'Can I use this for any job?', a: 'Yes, templates are versatile.' },
      { q: 'Is the format ATS-friendly?', a: 'Yes, designed for Applicant Tracking Systems.' }
    ]
  },
  17: {
    howWeHelp: [
      'Provide employment offer letter templates.',
      'Ensure legal compliance and clarity for new hires.',
      'Editable for various roles.'
    ],
    features: [
      'Customizable sections',
      'Legal compliance',
      'Editable digital files',
      'Guidance notes',
      'Modern formatting'
    ],
    process: [
      'Template selection.',
      'Customization for your company.',
      'Delivery and support.'
    ],
    faqs: [
      { q: 'Is this suitable for remote roles?', a: 'Yes, templates are adaptable.' },
      { q: 'Can I use this for contractors?', a: 'Yes, with minor edits.' }
    ]
  },
  18: {
    howWeHelp: [
      'Offer LOR writing services for academic and professional needs.',
      'Highlight your strengths and achievements.',
      'Tailored for each recipient.'
    ],
    features: [
      'Custom-written letters',
      'Industry/academic focus',
      'Editable drafts',
      'Confidential service',
      'Fast turnaround'
    ],
    process: [
      'Consultation to gather details.',
      'Drafting the letter.',
      'Client review and edits.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Can you write for academic and work references?', a: 'Yes, both are supported.' },
      { q: 'How fast is delivery?', a: 'Usually within 3-5 business days.' }
    ]
  },
  19: {
    howWeHelp: [
      'Provide resignation letter templates for employees.',
      'Ensure professionalism and clarity.',
      'Editable for any situation.'
    ],
    features: [
      'Customizable templates',
      'Clear structure',
      'Editable digital files',
      'Guidance notes',
      'Professional formatting'
    ],
    process: [
      'Template selection.',
      'Customization for your needs.',
      'Delivery and usage tips.'
    ],
    faqs: [
      { q: 'Can I use this for immediate resignation?', a: 'Yes, templates cover various notice periods.' },
      { q: 'Is this suitable for any industry?', a: 'Yes, templates are versatile.' }
    ]
  },
  20: {
    howWeHelp: [
      'Provide accountant-issued letter templates.',
      'Useful for business or compliance needs.',
      'Editable and professionally formatted.'
    ],
    features: [
      'Customizable templates',
      'Professional formatting',
      'Editable digital files',
      'Guidance notes',
      'Confidential service'
    ],
    process: [
      'Template selection.',
      'Customization for your needs.',
      'Delivery and support.'
    ],
    faqs: [
      { q: 'Is this suitable for banks?', a: 'Yes, templates are accepted by most institutions.' },
      { q: 'Can I edit the letter?', a: 'Yes, all files are editable.' }
    ]
  },
  21: {
    howWeHelp: [
      'Provide IT and computer service agreement templates.',
      'Protect both provider and client.',
      'Editable for various IT services.'
    ],
    features: [
      'Customizable contracts',
      'Scope of work section',
      'Editable digital files',
      'Legal compliance',
      'Guidance notes'
    ],
    process: [
      'Consultation to determine needs.',
      'Template drafting.',
      'Client review and edits.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Can I use this for freelance IT work?', a: 'Yes, templates are suitable for freelancers.' },
      { q: 'Is this legally compliant?', a: 'Yes, reviewed by legal experts.' }
    ]
  },
  22: {
    howWeHelp: [
      'Provide website security services to protect against cyber threats.',
      'Assess vulnerabilities and implement best practices.',
      'Ongoing monitoring and support.'
    ],
    features: [
      'Security audit',
      'Malware removal',
      'Firewall setup',
      'Ongoing monitoring',
      'Security updates'
    ],
    process: [
      'Initial security assessment.',
      'Implementation of security measures.',
      'Ongoing monitoring and support.'
    ],
    faqs: [
      { q: 'How often should I update security?', a: 'We recommend regular updates and monitoring.' },
      { q: 'Can you remove existing malware?', a: 'Yes, malware removal is included.' }
    ]
  },
  23: {
    howWeHelp: [
      'Optimize and clean your website for better speed and safety.',
      'Remove unnecessary files and code.',
      'Improve user experience and SEO.'
    ],
    features: [
      'Performance audit',
      'Code cleanup',
      'Image optimization',
      'SEO improvements',
      'Faster load times'
    ],
    process: [
      'Website audit.',
      'Optimization and cleanup.',
      'Testing and delivery.'
    ],
    faqs: [
      { q: 'Will my site be faster?', a: 'Yes, you’ll see improved load times.' },
      { q: 'Is downtime required?', a: 'We aim for zero downtime during optimization.' }
    ]
  },
  24: {
    howWeHelp: [
      'Draft website terms and conditions for compliance.',
      'Tailored to your business and industry.',
      'Editable and up to date.'
    ],
    features: [
      'Customizable templates',
      'Legal compliance',
      'Editable digital files',
      'Guidance notes',
      'Expert legal review'
    ],
    process: [
      'Consultation to understand your business.',
      'Drafting terms and conditions.',
      'Client review and edits.',
      'Final delivery.'
    ],
    faqs: [
      { q: 'Is this suitable for e-commerce sites?', a: 'Yes, templates are adaptable.' },
      { q: 'Can I edit the terms?', a: 'Yes, all files are editable.' }
    ]
  },
  25: {
    howWeHelp: [
      'Set up and manage affiliate programs for your business.',
      'Recruit and onboard affiliates.',
      'Monitor performance and optimize campaigns.'
    ],
    features: [
      'Affiliate program setup',
      'Recruitment strategies',
      'Performance tracking',
      'Commission management',
      'Reporting dashboards'
    ],
    process: [
      'Consultation to understand business goals.',
      'Program setup and recruitment.',
      'Ongoing management and optimization.'
    ],
    faqs: [
      { q: 'Can I track affiliate sales?', a: 'Yes, we provide tracking tools.' },
      { q: 'Do you handle payouts?', a: 'Yes, commission management is included.' }
    ]
  },
  26: {
    howWeHelp: [
      'Provide detailed Amazon market analysis reports.',
      'Identify trends and opportunities for sellers.',
      'Actionable insights for growth.'
    ],
    features: [
      'Competitor analysis',
      'Sales trend reports',
      'Product opportunity identification',
      'Market share insights',
      'Custom recommendations'
    ],
    process: [
      'Requirements gathering.',
      'Data analysis and report generation.',
      'Client review and recommendations.'
    ],
    faqs: [
      { q: 'How often can I get reports?', a: 'Reports can be generated monthly or quarterly.' },
      { q: 'Are recommendations actionable?', a: 'Yes, each report includes next steps.' }
    ]
  },
  27: {
    howWeHelp: [
      'Provide Etsy market analysis reports for sellers.',
      'Identify best-selling products and trends.',
      'Actionable insights for shop growth.'
    ],
    features: [
      'Product trend analysis',
      'Competitor insights',
      'Shop performance review',
      'Custom recommendations',
      'Visual charts and graphs'
    ],
    process: [
      'Requirements gathering.',
      'Data analysis and report creation.',
      'Client review and recommendations.'
    ],
    faqs: [
      { q: 'How do I use the report?', a: 'We provide guidance on implementing recommendations.' },
      { q: 'Can I get updates?', a: 'Yes, follow-up reports are available.' }
    ]
  },
  28: {
    howWeHelp: [
      'Optimize Etsy listings for better visibility and sales.',
      'Keyword research and SEO improvements.',
      'Enhance product descriptions and images.'
    ],
    features: [
      'SEO optimization',
      'Keyword research',
      'Product description improvement',
      'Image enhancement',
      'Performance tracking'
    ],
    process: [
      'Listing audit.',
      'Optimization and enhancements.',
      'Reporting and follow-up.'
    ],
    faqs: [
      { q: 'Will my sales improve?', a: 'Optimized listings typically see higher sales.' },
      { q: 'How long does optimization take?', a: 'Usually 3-5 business days.' }
    ]
  },
  29: {
    howWeHelp: [
      'Optimize ecommerce websites for mobile devices.',
      'Improve speed and user experience.',
      'Increase conversions on mobile.'
    ],
    features: [
      'Mobile-friendly layouts',
      'Performance improvements',
      'Responsive design',
      'SEO optimization',
      'Testing on multiple devices'
    ],
    process: [
      'Mobile audit.',
      'Optimization and design updates.',
      'Testing and delivery.'
    ],
    faqs: [
      { q: 'Will my site work on all phones?', a: 'Yes, we test on major devices.' },
      { q: 'Is SEO included?', a: 'Yes, mobile SEO is part of the service.' }
    ]
  },
  30: {
    howWeHelp: [
      'Optimize static websites for mobile performance.',
      'Improve speed and accessibility.',
      'Enhance user experience.'
    ],
    features: [
      'Mobile optimization',
      'Accessibility improvements',
      'Performance enhancements',
      'SEO improvements',
      'Testing and validation'
    ],
    process: [
      'Site audit.',
      'Optimization and updates.',
      'Testing and delivery.'
    ],
    faqs: [
      { q: 'Is this for any static site?', a: 'Yes, works for HTML, Jekyll, Hugo, etc.' },
      { q: 'Do you provide a report?', a: 'Yes, a summary report is included.' }
    ]
  },
  31: {
    howWeHelp: [
      'Assist with creating international PayPal accounts.',
      'Guide you through compliance and verification.',
      'Ongoing support for account management.'
    ],
    features: [
      'Step-by-step guidance',
      'Compliance checks',
      'Document preparation',
      'Account setup',
      'Support for troubleshooting'
    ],
    process: [
      'Consultation and requirements.',
      'Document preparation.',
      'Account setup and verification.',
      'Ongoing support.'
    ],
    faqs: [
      { q: 'Is this legal in my country?', a: 'We check compliance for your location.' },
      { q: 'How long does setup take?', a: 'Usually 2-5 business days.' }
    ]
  },
  32: {
    howWeHelp: [
      'Set up online card terminals for accepting payments.',
      'Integrate with your website or POS.',
      'Provide training and ongoing support.'
    ],
    features: [
      'Terminal setup',
      'Integration support',
      'Training for staff',
      'Security compliance',
      'Ongoing technical support'
    ],
    process: [
      'Requirements gathering.',
      'Setup and integration.',
      'Training and support.'
    ],
    faqs: [
      { q: 'Can I accept international cards?', a: 'Yes, terminals support multiple card types.' },
      { q: 'Is technical support included?', a: 'Yes, ongoing support is provided.' }
    ]
  }
};

export default serviceDetailsData;
