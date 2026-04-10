import React, { useState } from 'react';
import './Pages.css';

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
          
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: 'normal' }}>
              <input type="checkbox" required />
              I accept the terms and conditions
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit Proposal</button>
        </form>
      </div>
    </div>
  );
};

export default ProposeWorkshop;
