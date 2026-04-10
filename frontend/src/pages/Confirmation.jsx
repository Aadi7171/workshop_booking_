import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Calendar, Share2, Home } from 'lucide-react';
import './Pages.css';

const Confirmation = () => {
  return (
    <div className="page-container container fade-in">
      <Helmet>
        <title>Booking Confirmed | FOSSEE</title>
      </Helmet>

      <div className="confirmation-card animate-up">
        <div className="success-icon-wrapper">
          <CheckCircle size={80} color="var(--success)" />
        </div>
        
        <h1>You're all set!</h1>
        <p>Your workshop booking has been confirmed. We've sent the session details and joining instructions to your email.</p>

        <div className="glass action-stack">
          <h3>What's next?</h3>
          <div className="action-row">
            <Calendar size={20} />
            <div>
              <label>Add to Calendar</label>
              <span>Keep track of your upcoming session.</span>
            </div>
          </div>
          <div className="action-row">
            <Share2 size={20} />
            <div>
              <label>Tell your friends</label>
              <span>Help others discover this workshop.</span>
            </div>
          </div>
        </div>

        <div className="flex-buttons" style={{ marginTop: '3rem' }}>
          <Link to="/workshops" className="btn btn-secondary flex-grow">
            Browse More
          </Link>
          <Link to="/" className="btn btn-primary flex-grow">
            <Home size={18} /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
