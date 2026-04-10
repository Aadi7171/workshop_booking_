import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, PlusCircle, Activity } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="glass navigation-container">
      <div className="nav-brand desktop-only">
        <h2>FOSSEE Workshops</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Home size={24} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'active' : '')}>
            <BarChart2 size={24} />
            <span>Stats</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/status" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Activity size={24} />
            <span>Status</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/propose" className={({ isActive }) => (isActive ? 'active' : '')}>
            <PlusCircle size={24} />
            <span>Propose</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
