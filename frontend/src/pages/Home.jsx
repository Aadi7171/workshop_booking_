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
        <ActionCard 
          title="Upcoming Workshops" 
          description="3 Scheduled this month" 
          buttonText="View Details" 
          to="/status" 
        />
        <ActionCard 
          title="Your Proposals" 
          description="1 Pending approval" 
          buttonText="Check Status" 
          to="/status" 
        />
        <ActionCard 
          title="Propose a Workshop" 
          description="Organize a new event at your institute." 
          buttonText="Start Proposal" 
          to="/propose" 
          highlight 
        />
      </section>
    </div>
  );
};

export default Home;
