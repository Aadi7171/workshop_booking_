import React from 'react';
import './StatusBadge.css';

/**
 * StatusBadge Component
 * 
 * Displays a color-coded status label with consistent styling.
 * 
 * @param {Object} props - Component props
 * @param {'pending'|'approved'|'rejected'|'completed'|string} props.status - The status value to display
 * @param {string} [props.className] - Optional additional CSS classes
 * @returns {JSX.Element} The rendered StatusBadge component
 */
const StatusBadge = ({ status, className = "" }) => {
  const normalizedStatus = status.toLowerCase();
  
  return (
    <span className={`status-badge ${normalizedStatus} ${className}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
