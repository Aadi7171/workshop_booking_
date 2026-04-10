import React from 'react';
import './StatCard.css';

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
