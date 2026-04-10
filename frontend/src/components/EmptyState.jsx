import React from 'react';
import { PackageOpen } from 'lucide-react';
import './EmptyState.css';

const EmptyState = ({ 
  title = "No data found", 
  message = "There's nothing to display here at the moment.",
  actionLabel,
  onAction
}) => {
  return (
    <div className="empty-state glass">
      <div className="empty-state-icon">
        <PackageOpen size={48} />
      </div>
      <h2>{title}</h2>
      <p>{message}</p>
      {actionLabel && (
        <button onClick={onAction} className="empty-state-btn">
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
