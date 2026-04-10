import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Info, Target, Users } from 'lucide-react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>About | FOSSEE Workshop Booking</title>
        <meta name="description" content="Learn more about the FOSSEE project and our mission to promote open-source software in education." />
      </Helmet>

      <header className="hero-section glass">
        <h1>About FOSSEE</h1>
        <p>Promoting Free and Open Source Software for Education.</p>
      </header>

      <section className="dashboard-grid">
        <div className="card glass">
          <Info className="card-icon" />
          <h2>The Project</h2>
          <p>FOSSEE project is part of the National Mission on Education through ICT with the aim to promote use of open source software in educational institutions.</p>
        </div>
        <div className="card glass">
          <Target className="card-icon" />
          <h2>Our Goal</h2>
          <p>To provide high-quality educational resources and software tools to students and teachers across India, bridging the digital divide.</p>
        </div>
        <div className="card glass">
          <Users className="card-icon" />
          <h2>Community</h2>
          <p>We are a community-driven initiative supported by IIT Bombay and funded by the Ministry of Education, Government of India.</p>
        </div>
      </section>

      <section className="glass content-section" style={{ padding: '2rem', marginTop: '1.5rem' }}>
        <h2>Workshops</h2>
        <p>We conduct regular workshops on various open-source tools like Python, Scilab, R, OpenFOAM, and more. Our workshops are designed to be hands-on and accessible to all.</p>
      </section>
    </div>
  );
};

export default About;
