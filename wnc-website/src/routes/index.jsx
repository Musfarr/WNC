import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

// Page imports
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';

// Service page imports
import CompanyFormation from '../pages/Services/CompanyFormation/CompanyFormation';
import BusinessBanking from '../pages/Services/BusinessBanking/BusinessBanking';
import BrandingIdentity from '../pages/Services/BrandingIdentity/BrandingIdentity';
import DigitalMarketing from '../pages/Services/DigitalMarketing/DigitalMarketing';
import FinancialServices from '../pages/Services/FinancialServices/FinancialServices';
import LegalServices from '../pages/Services/LegalServices/LegalServices';

// NotFound component for 404 errors
const NotFound = () => (
  <div className="page-container">
    <h1>404: Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <Link to="/" className="btn btn-primary">Back to Home</Link>
  </div>
);

// Router component that handles all routes
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    
    {/* Service detail pages */}
    <Route path="/services/company-formation" element={<CompanyFormation />} />
    <Route path="/services/business-banking" element={<BusinessBanking />} />
    <Route path="/services/branding-identity" element={<BrandingIdentity />} />
    <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
    <Route path="/services/financial-services" element={<FinancialServices />} />
    <Route path="/services/legal-services" element={<LegalServices />} />
    
    <Route path="*" element={<NotFound />} />
  </Routes>
);

// Router provider component that wraps the app in BrowserRouter
const RouterProvider = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

// Export components needed by App.jsx
export { 
  AppRouter,
  RouterProvider,
  NotFound,
  Link,
  NavLink
};
