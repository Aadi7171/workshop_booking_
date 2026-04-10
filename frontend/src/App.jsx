import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Layout from './components/Layout';

import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Status from './pages/Status';
import ProposeWorkshop from './pages/ProposeWorkshop';
import About from './pages/About';
import FAQ from './pages/FAQ';

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/status" element={<Status />} />
          <Route path="/propose" element={<ProposeWorkshop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
