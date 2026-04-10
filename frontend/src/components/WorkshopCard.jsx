import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkshopCard.css';

/**
 * WorkshopCard Component
 * 
 * A scannable, card-based representation of a workshop.
 * Features a category badge, key details (Date, Instructor), 
 * and a dynamic 'seats left' indicator that highlights low availability.
 * 
 * @param {Object} props
 * @param {Object} props.workshop - The workshop data object.
 */
const WorkshopCard = ({ workshop }) => {
  const { id, title, category, date, seatsLeft, instructor } = workshop;
  
  const isLowSeats = seatsLeft < 5;

  return (
    <div className="workshop-card glass animate-up">
      <div className="card-badge">{category}</div>
      <h3>{title}</h3>
      
      <div className="card-details">
        <div className="detail-item">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className="detail-item">
          <User size={16} />
          <span>{instructor}</span>
        </div>
      </div>

      <div className="card-footer">
        <div className={`seats-indicator ${isLowSeats ? 'low' : ''}`}>
          {seatsLeft} seats left
        </div>
        <Link to={`/workshop/${id}`} className="btn btn-primary btn-sm btn-icon">
          View <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCard;
