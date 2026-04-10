import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ActionCard from '../components/ActionCard';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>Home | FOSSEE Workshop Booking</title>
        <meta name="description" content="Welcome to the FOSSEE Workshops dashboard. Empowering education through free and open-source software." />
      </Helmet>
      <Hero 
        title="Welcome to FOSSEE Workshops" 
        subtitle="Empowering education through free and open-source software." 
      />

      <section className="dashboard-grid">
        <div className="card glass">
          <h2>Upcoming Workshops</h2>
          <p>3 Scheduled this month</p>
          <button>View Details</button>
        </div>
        <div className="card glass">
          <h2>Your Proposals</h2>
          <p>1 Pending approval</p>
          <button className="secondary">Check Status</button>
        </div>
        <div className="card glass highlight">
          <h2>Propose a Workshop</h2>
          <p>Organize a new event at your institute.</p>
          <button>Start Proposal</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
