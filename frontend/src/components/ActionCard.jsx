import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ActionCard.css';

/**
 * ActionCard Component
 * 
 * An interactive card for dashboard actions with a title, description, and primary button.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the card
 * @param {string} props.description - Supporting text for the action
 * @param {string} props.buttonText - Text label for the button
 * @param {string} [props.to] - Internal route to navigate to on click
 * @param {Function} [props.onClick] - Optional callback function for custom actions
 * @param {boolean} [props.highlight=false] - If true, applies a distinctive style
 * @returns {JSX.Element} The rendered ActionCard component
 */
const ActionCard = ({ title, description, buttonText, to, onClick, highlight = false }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (to) navigate(to);
    if (onClick) onClick();
  };

  return (
    <div className={`card glass action-card ${highlight ? 'highlight' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleAction} className={highlight ? 'primary' : 'secondary'}>
        {buttonText}
      </button>
    </div>
  );
};

export default ActionCard;
