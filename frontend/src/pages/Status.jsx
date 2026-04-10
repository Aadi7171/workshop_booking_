import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Pages.css';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

/**
 * Workshop Status Tracking Page
 * 
 * Provides real-time visibility into the lifecycle of workshop proposals.
 * Uses color-coded cards and icons to represent state (Pending, Accepted, Rejected).
 * 
 * @returns {JSX.Element} The Status tracking page.
 */
const Status = () => {
  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>Workshop Status | FOSSEE Workshop Booking</title>
        <meta name="description" content="Track the progress and status of your proposed and scheduled FOSSEE workshops." />
      </Helmet>
      <div className="hero-section glass">
        <h1>Workshop Status</h1>
        <p>Track the progress of your proposed or assigned workshops.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card glass">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#EAB308' }}>
            <Clock size={24} />
            <h2 style={{ margin: 0 }}>Pending</h2>
          </div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Python Programming</h3>
          <p>Proposed for: Oct 25, 2026</p>
          <div style={{ marginTop: '1rem' }}>
            <span style={{ background: 'rgba(234, 179, 8, 0.2)', color: '#A16207', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>Awaiting Instructor</span>
          </div>
        </div>

        <div className="card glass">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#10B981' }}>
            <CheckCircle size={24} />
            <h2 style={{ margin: 0 }}>Accepted</h2>
          </div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Linux Administration</h3>
          <p>Scheduled: Nov 10, 2026</p>
          <div style={{ marginTop: '1rem' }}>
            <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#047857', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>Confirmed</span>
          </div>
        </div>

        <div className="card glass">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#EF4444' }}>
            <XCircle size={24} />
            <h2 style={{ margin: 0 }}>Rejected</h2>
          </div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Web Development</h3>
          <p>Proposed for: Sep 15, 2026</p>
          <div style={{ marginTop: '1rem' }}>
            <span style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#B91C1C', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>Declined by Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
