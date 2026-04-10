import React from 'react';
import Navigation from './Navigation';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import './Layout.css';

/**
 * Layout Component
 * 
 * This is the main frame for the SPA. It handles the 
 * standard navigation, the main content area, and the footer.
 * I used semantic tags like <main> for better accessibility.
 */
const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="content-area container">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
