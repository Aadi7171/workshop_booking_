import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Pages.css';
import { BarChart2, PieChart } from 'lucide-react';

const Statistics = () => {
  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>Statistics | FOSSEE Workshop Booking</title>
        <meta name="description" content="View technical workshop statistics, distribution formats, and top performing instructors." />
      </Helmet>
      <div className="hero-section glass">
        <h1>Workshop Statistics</h1>
        <p>Insights and data from our latest workshops across the country.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card glass">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            <BarChart2 size={24} />
            <h2 style={{ margin: 0 }}>Monthly Count</h2>
          </div>
          <p>Total workshops conducted this month: <strong>12</strong></p>
          <div style={{ height: '150px', width: '100%', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)'}}>
            [ Bar Chart Placeholder ]
          </div>
        </div>

        <div className="card glass">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            <PieChart size={24} />
            <h2 style={{ margin: 0 }}>Workshops by Type</h2>
          </div>
          <p>Distribution of topics</p>
          <div style={{ height: '150px', width: '100%', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)'}}>
            [ Pie Chart Placeholder ]
          </div>
        </div>
        
        <div className="card glass highlight">
          <h2>Top Performers</h2>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            <li>Prof. Smith - 5 Workshops</li>
            <li>Dr. Ada - 3 Workshops</li>
            <li>Ms. Johnson - 2 Workshops</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
