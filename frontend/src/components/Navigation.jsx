import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Calendar, PlusCircle, Info } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="glass navigation-container">
      <div className="nav-brand desktop-only">
        <h2>FOSSEE</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" title="Home" aria-label="Navigate to Home" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Home size={24} aria-hidden="true" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/workshops" title="Find Workshops" aria-label="Browse Available Workshops" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Compass size={24} aria-hidden="true" />
            <span>Find</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/status" title="My Bookings" aria-label="View current bookings" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Calendar size={24} aria-hidden="true" />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/propose" title="Organize" aria-label="Propose a Workshop" className={({ isActive }) => (isActive ? 'active' : '')}>
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
      </ul>
    </nav>
  );
};

export default Navigation;
