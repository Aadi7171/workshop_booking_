import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter } from 'lucide-react';
import { WORKSHOPS } from '../data/workshops';
import WorkshopCard from '../components/WorkshopCard';
import './Pages.css';

/**
 * Workshops Component
 * 
 * The main workshop discovery page. I added a real-time search 
 * filter here so students can find specific topics like 'Python' 
 * or 'Django' quickly without scrolling through a huge list.
 */
const Workshops = () => {
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Filtering logic: Matches search query against workshop title and category.
   * Case-insensitive for better UX.
   */
  const filteredWorkshops = WORKSHOPS.filter(w => 
    w.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container fade-in">
      <Helmet>
        <title>Find Workshops | FOSSEE</title>
        <meta name="description" content="Discover and book free technical workshops by IIT Bombay." />
      </Helmet>

      <section className="search-section animate-up">
        <h1>Find Your Next Workshop</h1>
        <p>Expert-led technical sessions delivered to your institute.</p>
        
        <div className="search-bar glass">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search topics (e.g. React, Linux...)" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <div className="workshops-layout container">
        <div className="discovery-grid">
          {filteredWorkshops.length > 0 ? (
            filteredWorkshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))
          ) : (
            <div className="empty-state glass">
              <h3>No workshops found</h3>
              <p>Try searching for a different topic or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
