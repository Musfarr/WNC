import React from 'react';
import './App.css';
import { RouterProvider, AppRouter } from './routes';
import { NavLink } from 'react-router-dom';

// Dependency warning component
const DependencyWarning = () => {
  // We no longer need this warning since we're using direct imports
  return null;
};

// Navigation component with React Router
const Navbar = () => {
  return (
    <nav className="navbar-simple">
      <div className="navbar-container">
        <div className="navbar-logo">WNC-TECH</div>
        <ul className="nav-menu">
          <li><NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
          <li><NavLink to="/blog" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer-simple">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h3>WNC-TECH</h3>
            <p>We help businesses transform their ideas into reality, providing end-to-end solutions for startup success and established business growth.</p>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/services/company-formation">Company Formation</a></li>
              <li><a href="/services/business-banking">Business Banking</a></li>
              <li><a href="/services/branding-identity">Branding & Identity</a></li>
              <li><a href="/services/digital-marketing">Digital Marketing</a></li>
              <li><a href="/services/financial-services">Financial Services</a></li>
              <li><a href="/services/legal-services">Legal Services</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>123 Business Avenue, Dubai, UAE</li>
              <li>+971 4 123 4567</li>
              <li>info@wnc-tech.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WNC-TECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App component
function App() {
  return (
    <RouterProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AppRouter />

        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;
