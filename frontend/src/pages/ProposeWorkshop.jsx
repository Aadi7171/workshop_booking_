import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import FormTextArea from '../components/FormTextArea';
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
      <Hero 
        title="Propose a Workshop" 
        subtitle="Fill out the form below to request a new workshop at your institute." 
      />

      <div className="card glass form-container">
        <form onSubmit={handleSubmit}>
          <FormSelect 
            label="Workshop Type" 
            id="workshopType" 
            value={formData.workshopType} 
            onChange={handleChange} 
            required 
            options={[
              { value: 'python', label: 'Python Programming' },
              { value: 'linux', label: 'Linux Administration' },
              { value: 'web', label: 'Web Development' }
            ]}
            helpText="Select the category that best fits your proposed session."
          />

          <FormInput 
            label="Proposed Date" 
            id="date" 
            type="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />

          <FormTextArea 
            label="Additional Comments" 
            id="comments" 
            value={formData.comments} 
            onChange={handleChange} 
            placeholder="Any specific requirements or notes?" 
          />
          
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
