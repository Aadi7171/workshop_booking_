import React from 'react';
import Navigation from './Navigation';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import './Layout.css';

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
