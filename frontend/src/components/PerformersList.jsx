import React from 'react';
import { Trophy } from 'lucide-react';
import './PerformersList.css';

const PerformersList = ({ title = "Top Performers", performers = [] }) => {
  return (
    <div className="card glass highlight performers-container">
      <div className="performers-header">
        <Trophy size={20} className="trophy-icon" />
        <h2>{title}</h2>
      </div>
      <ul className="performers-list">
        {performers.map((performer, index) => (
          <li key={index} className="performer-item">
            <span className="performer-rank">{index + 1}</span>
            <span className="performer-name">{performer.name}</span>
            <span className="performer-count">{performer.count} Workshops</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformersList;
