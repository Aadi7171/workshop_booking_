import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, ArrowLeft, User, Mail, School, BookOpen } from 'lucide-react';
import { WORKSHOPS } from '../data/workshops';
import './Pages.css';

/**
 * Booking Component
 * 
 * I built this as a 3-step form to make signing up easier on small screens.
 * 
 * Logic:
 * 1. Member Info (Name/Email)
 * 2. Academic stuff (College/Dept)
 * 3. Final Review before submitting
 */
const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const workshop = WORKSHOPS.find(w => w.id === parseInt(id));
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    department: '',
    interestReason: ''
  });

  if (!workshop) return <div>Workshop not found</div>;

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  /**
   * Handle booking submission
   * Micro-UX: Simulate network latency to prevent jarring transitions and 
   * demonstrate loading/feedback states for the user.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Artificial delay to simulate real-world API latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    navigate('/confirmation');
  };

  const progress = (step / 3) * 100;

  return (
    <div className="page-container container fade-in">
      <Helmet>
        <title>Booking: {workshop.title} | FOSSEE</title>
      </Helmet>

      <div className="booking-form-layout">
        <div className="stepper-header animate-up">
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="step-indicators">
            <span className={step >= 1 ? 'active' : ''}>1. Info</span>
            <span className={step >= 2 ? 'active' : ''}>2. Details</span>
            <span className={step >= 3 ? 'active' : ''}>3. Review</span>
          </div>
        </div>

        <div className="glass booking-form-card animate-up" style={{ animationDelay: '0.1s' }}>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="form-step">
                <h2>Member Information</h2>
                <p>Start with some basic details to reserve your spot.</p>
                <div className="input-group">
                  <User size={18} />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <Mail size={18} />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <button type="button" onClick={handleNext} className="btn btn-primary w-full">
                  Next Step <ArrowRight size={18} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Academic Details</h2>
                <p>Help us tailor the content to your background.</p>
                <div className="input-group">
                  <School size={18} />
                  <input 
                    type="text" 
                    placeholder="College/University" 
                    required 
                    value={formData.college}
                    onChange={e => setFormData({...formData, college: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <BookOpen size={18} />
                  <input 
                    type="text" 
                    placeholder="Department (e.g. CSE, EEE)" 
                    required 
                    value={formData.department}
                    onChange={e => setFormData({...formData, department: e.target.value})}
                  />
                </div>
                <div className="flex-buttons">
                  <button type="button" onClick={handleBack} className="btn btn-secondary">
                    Back
                  </button>
                  <button type="button" onClick={handleNext} className="btn btn-primary flex-grow">
                    Review <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Review & Confirm</h2>
                <p>Check your details before we finalize your booking.</p>
                <div className="review-box">
                  <div className="review-item">
                    <label>Workshop</label>
                    <span>{workshop.title}</span>
                  </div>
                  <div className="review-item">
                    <label>Delegate</label>
                    <span>{formData.fullName}</span>
                  </div>
                  <div className="review-item">
                    <label>Institution</label>
                    <span>{formData.college}</span>
                  </div>
                </div>
                <div className="flex-buttons">
                  <button type="button" onClick={handleBack} className="btn btn-secondary">
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary flex-grow" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : (
                      <>Confirm Booking <Check size={18} /></>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
