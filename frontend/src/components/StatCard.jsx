import React from 'react';
import './StatCard.css';

/**
 * StatCard Component
 * 
 * A reusable card for displaying statistics and metrics.
 * Supports an optional icon, title, value, and custom children for charts or details.
 * 
 * @param {Object} props - Component props
 * @param {React.ElementType} [props.icon] - Lucide icon component to display
 * @param {string} props.title - The title of the statistic
 * @param {string|React.ReactNode} [props.value] - The primary value or metric to display
 * @param {React.ReactNode} [props.children] - Additional content (e.g., charts, lists)
 * @returns {JSX.Element} The rendered StatCard component
 */
const StatCard = ({ icon: Icon, title, value, children }) => {
  return (
    <div className="card glass stat-card">
      <div className="stat-card-header">
        {Icon && <Icon size={24} className="stat-icon" />}
        <h2 className="stat-title">{title}</h2>
      </div>
      <div className="stat-content">
        {value && <p className="stat-value">{value}</p>}
        {children}
      </div>
    </div>
  );
};

export default StatCard;
