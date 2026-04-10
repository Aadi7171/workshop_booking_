import React from 'react';
import Navigation from './Navigation';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import './Layout.css';

/**
 * Layout Component
 * 
 * Provides the structural framework for the application.
 * Manages semantic HTML5 landmarks (nav, main, footer) and provides 
 * a consistent container for all page-level content.
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
