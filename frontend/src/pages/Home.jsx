import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Zap } from 'lucide-react';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>FOSSEE | Expert Workshops on Demand</title>
        <meta name="description" content="Discover, explore, and book technical workshops curated by IIT Bombay." />
      </Helmet>

      <section className="hero-section animate-up">
        <label className="card-badge">Open-Source Education</label>
        <h1>Master New Skills with FOSSEE Workshops</h1>
        <p>Expert-led technical training delivered directly to your campus. High impact, zero friction.</p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
          <Link to="/workshops" className="btn btn-primary">
            Find Workshops <ArrowRight size={20} />
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="container dashboard-grid animate-up" style={{ animationDelay: '0.1s' }}>
        <div className="glass card">
          <Zap className="icon" size={32} color="var(--primary)" />
          <h3>Fast Booking</h3>
          <p>Find and book your next session in under 20 seconds. Optimized for mobile ease.</p>
        </div>
        <div className="glass card">
          <ShieldCheck className="icon" size={32} color="var(--primary)" />
          <h3>IIT Bombay Verified</h3>
          <p>Curated content and certified instructors from India's premier technical institute.</p>
        </div>
        <div className="glass card">
          <Compass className="icon" size={32} color="var(--primary)" />
          <h3>Wide Range</h3>
          <p>From Python to Linux Administration, explore workshops across various domains.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
