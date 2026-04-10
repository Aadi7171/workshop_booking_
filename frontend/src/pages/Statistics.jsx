import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Pages.css';
import { BarChart2, PieChart } from 'lucide-react';
import StatCard from '../components/StatCard';
import PerformersList from '../components/PerformersList';

/**
 * Statistics Page
 * 
 * Displays graphical data and performance metrics for workshops.
 * Uses Lucide icons for visual representation of data categories.
 * 
 * @returns {JSX.Element} The Statistics page layout.
 */
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
        <StatCard 
          icon={BarChart2} 
          title="Monthly Count" 
          value={<span>Total workshops: <strong>12</strong></span>}
        >
          <div style={{ height: '150px', width: '100%', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)'}}>
            [ Bar Chart Placeholder ]
          </div>
        </StatCard>

        <StatCard 
          icon={PieChart} 
          title="Workshops by Type" 
          value="Distribution of topics"
        >
          <div style={{ height: '150px', width: '100%', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)'}}>
            [ Pie Chart Placeholder ]
          </div>
        </StatCard>
        
        </StatCard>
        
        <PerformersList 
          performers={[
            { name: "Prof. Smith", count: 5 },
            { name: "Dr. Ada", count: 3 },
            { name: "Ms. Johnson", count: 2 }
          ]}
        />
      </div>
    </div>
  );
};

export default Statistics;
