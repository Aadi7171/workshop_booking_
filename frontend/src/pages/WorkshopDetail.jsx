import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Clock, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { WORKSHOPS } from '../data/workshops';
import './Pages.css';

/**
 * WorkshopDetail Component
 * 
 * A conversion-optimized landing page for a specific workshop.
 * Features:
 * - High-impact content section with curriculum details.
 * - Glassmorphism sidebar with booking information.
 * - Sticky mobile CTA to ensure conversion accessibility on small screens.
 */
const WorkshopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const workshop = WORKSHOPS.find(w => w.id === parseInt(id));

  if (!workshop) {
    return (
      <div className="page-container container">
        <h1>Workshop not found</h1>
        <button onClick={() => navigate('/workshops')} className="btn btn-secondary">
          Back to Workshops
        </button>
      </div>
    );
  }

  const { title, category, date, seatsLeft, instructor, description, duration, level } = workshop;
  const isAvailable = seatsLeft > 0;

  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>{title} | FOSSEE</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container">
        <Link to="/workshops" className="detail-back">
          <ArrowLeft size={20} /> Back to discovery
        </Link>
        
        <div className="detail-layout">
          <section className="detail-content animate-up">
            <label className="card-badge">{category}</label>
            <h1>{title}</h1>
            <p className="description-text">{description}</p>
            
            <div className="info-grid">
              <div className="info-item">
                <Clock size={20} />
                <div>
                  <label>Duration</label>
                  <span>{duration}</span>
                </div>
              </div>
              <div className="info-item">
                <ShieldCheck size={20} />
                <div>
                  <label>Level</label>
                  <span>{level}</span>
                </div>
              </div>
            </div>

            <div className="curriculum-section">
              <h3>What you'll learn</h3>
              <ul>
                <li><CheckCircle size={16} /> Industry-standard practices</li>
                <li><CheckCircle size={16} /> Comprehensive hands-on labs</li>
                <li><CheckCircle size={16} /> Expert-led Q&A sessions</li>
              </ul>
            </div>
          </section>

          <aside className="detail-sidebar animate-up" style={{ animationDelay: '0.1s' }}>
            <div className="glass booking-card">
              <div className="booking-header">
                <span className="price">Free</span>
                <span className={`status ${isAvailable ? 'available' : 'full'}`}>
                  {isAvailable ? `${seatsLeft} seats left` : 'Waitlist Only'}
                </span>
              </div>
              
              <div className="booking-details">
                <div className="detail-row">
                  <Calendar size={18} />
                  <span>{date}</span>
                </div>
                <div className="detail-row">
                  <User size={18} />
                  <span>{instructor}</span>
                </div>
                <div className="detail-row">
                  <MapPin size={18} />
                  <span>Your Campus / Online</span>
                </div>
              </div>

              <Link 
                to={isAvailable ? `/book/${id}` : '#'} 
                className={`btn btn-primary w-full ${!isAvailable ? 'disabled' : ''}`}
              >
                {isAvailable ? 'Book Workshop' : 'Join Waitlist'}
              </Link>
              
              <p className="guarantee-text">Verified by IIT Bombay FOSSEE Team</p>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="mobile-cta glass-dark">
        <div className="mobile-cta-info">
          <span className="m-title">{title}</span>
          <span className="m-seats">{seatsLeft} seats remaining</span>
        </div>
        <Link to={`/book/${id}`} className="btn btn-primary">Book Now</Link>
      </div>
    </div>
  );
};

// Add ShieldCheck to imports if missing, but it was used in Home.jsx so it should be there.
// Wait, I used ShieldCheck in Home.jsx but I should check if I imported it here.
import { ShieldCheck } from 'lucide-react';

export default WorkshopDetail;
