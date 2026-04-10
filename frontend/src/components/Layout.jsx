import React from 'react';
import Navigation from './Navigation';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="content-area container">
        {children}
      </main>
    </div>
  );
};

export default Layout;
