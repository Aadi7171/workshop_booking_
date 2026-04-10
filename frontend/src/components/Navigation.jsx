import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, PlusCircle, Activity, Info, HelpCircle } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="glass navigation-container">
      <div className="nav-brand desktop-only">
        <h2>FOSSEE Workshops</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" title="Home" aria-label="Navigate to Home" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Home size={24} aria-hidden="true" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" title="Statistics" aria-label="View Workshop Statistics" className={({ isActive }) => (isActive ? 'active' : '')}>
            <BarChart2 size={24} aria-hidden="true" />
            <span>Stats</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/status" title="Status" aria-label="Track Workshop Status" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Activity size={24} aria-hidden="true" />
            <span>Status</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/propose" title="Propose Workshop" aria-label="Submit a Workshop Proposal" className={({ isActive }) => (isActive ? 'active' : '')}>
            <PlusCircle size={24} aria-hidden="true" />
            <span>Propose</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" title="About" aria-label="Learn more about FOSSEE" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Info size={24} aria-hidden="true" />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" title="FAQ" aria-label="Frequently Asked Questions" className={({ isActive }) => (isActive ? 'active' : '')}>
            <HelpCircle size={24} aria-hidden="true" />
            <span>FAQ</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
