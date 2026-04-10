import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Status from './pages/Status';
import ProposeWorkshop from './pages/ProposeWorkshop';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main className="content-area container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/status" element={<Status />} />
          <Route path="/propose" element={<ProposeWorkshop />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
