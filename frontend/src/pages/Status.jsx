import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import './Pages.css';

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
      <Hero 
        title="Workshop Status" 
        subtitle="Track the progress of your proposed or assigned workshops." 
      />

      <div className="dashboard-grid">
        <StatCard 
          icon={Clock} 
          title="Pending" 
          value="Python Programming"
        >
          <p className="stat-detail">Proposed for: Oct 25, 2026</p>
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <StatusBadge status="Pending" />
          </div>
        </StatCard>

        <StatCard 
          icon={CheckCircle} 
          title="Accepted" 
          value="Linux Administration"
        >
          <p className="stat-detail">Scheduled: Nov 10, 2026</p>
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <StatusBadge status="Approved" />
          </div>
        </StatCard>

        <StatCard 
          icon={XCircle} 
          title="Rejected" 
          value="Web Development"
        >
          <p className="stat-detail">Proposed for: Sep 15, 2026</p>
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <StatusBadge status="Rejected" />
          </div>
        </StatCard>
      </div>
    </div>
  );
};

export default Status;
