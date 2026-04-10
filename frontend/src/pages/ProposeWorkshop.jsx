import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Pages.css';

/**
 * Propose Workshop Form Page
 * 
 * A semantic form interface allowing users to submit new workshop requests.
 * Features strict label mapping and accessibility-optimized touch targets.
 * 
 * @returns {JSX.Element} The Proposal form component.
 */
const ProposeWorkshop = () => {
  const [formData, setFormData] = useState({
    workshopType: '',
    date: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Workshop proposed successfully! (Mock Action)');
  };

  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>Propose Workshop | FOSSEE Workshop Booking</title>
        <meta name="description" content="Propose and organize a new technical workshop at your institute with FOSSEE." />
      </Helmet>
      <div className="hero-section glass">
        <h1>Propose a Workshop</h1>
        <p>Fill out the form below to request a new workshop at your institute.</p>
      </div>

      <div className="card glass form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="workshopType">Workshop Type</label>
            <select 
              id="workshopType" 
              name="workshopType" 
              value={formData.workshopType} 
              onChange={handleChange}
              required
            >
              <option value="">Select a type...</option>
              <option value="python">Python Programming</option>
              <option value="linux">Linux Administration</option>
              <option value="web">Web Development</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Proposed Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea 
              id="comments" 
              name="comments" 
              rows="4" 
              value={formData.comments} 
              onChange={handleChange}
              placeholder="Any specific requirements or notes?"
            />
          </div>
          
          <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <input type="checkbox" id="terms" required style={{ width: 'auto', padding: 0 }} />
            <label htmlFor="terms" style={{ cursor: 'pointer', fontWeight: 'normal', margin: 0, fontSize: '0.9rem' }}>
              I accept the terms and conditions
            </label>
          </div>

          <button type="submit" className="submit-btn" aria-label="Submit Workshop Proposal">Submit Proposal</button>
        </form>
      </div>
    </div>
  );
};

export default ProposeWorkshop;
