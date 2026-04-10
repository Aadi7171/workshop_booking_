import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Pages.css';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I propose a workshop?",
      answer: "You can propose a workshop by navigating to the 'Propose' section and filling out the required details about the software, date, and venue."
    },
    {
      question: "Who can attend these workshops?",
      answer: "Most FOSSEE workshops are open to students, faculty, and working professionals. Specific eligibility criteria, if any, will be mentioned in the workshop details."
    },
    {
      question: "Is there a fee for participating?",
      answer: "Many of our introductory workshops are free of charge. Some specialized or certified workshops may have a nominal fee to cover administrative costs."
    },
    {
      question: "How do I check the status of my proposal?",
      answer: "You can check the status of your submitted proposals in the 'Status' section of the dashboard."
    }
  ];

  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>FAQ | FOSSEE Workshop Booking</title>
        <meta name="description" content="Frequently Asked Questions about FOSSEE workshops and the booking process." />
      </Helmet>

      <header className="hero-section glass">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our workshops.</p>
      </header>

      <section className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="card glass faq-item" style={{ marginBottom: '1rem', width: '100%' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{faq.question}</h3>
            <p style={{ margin: 0 }}>{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
