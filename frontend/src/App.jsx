import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Layout from './components/Layout';

import Home from './pages/Home';
import Workshops from './pages/Workshops';
import WorkshopDetail from './pages/WorkshopDetail';
import Booking from './pages/Booking';
import Statistics from './pages/Statistics';
import Status from './pages/Status';
import ProposeWorkshop from './pages/ProposeWorkshop';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshop/:id" element={<WorkshopDetail />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/status" element={<Status />} />
          <Route path="/propose" element={<ProposeWorkshop />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
