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
          <NavLink to="/" title="Home" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Home size={24} aria-hidden="true" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" title="Statistics" className={({ isActive }) => (isActive ? 'active' : '')}>
            <BarChart2 size={24} aria-hidden="true" />
            <span>Stats</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/status" title="Status" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Activity size={24} aria-hidden="true" />
            <span>Status</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/propose" title="Propose Workshop" className={({ isActive }) => (isActive ? 'active' : '')}>
            <PlusCircle size={24} aria-hidden="true" />
            <span>Propose</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" title="About" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Info size={24} aria-hidden="true" />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" title="FAQ" className={({ isActive }) => (isActive ? 'active' : '')}>
            <HelpCircle size={24} aria-hidden="true" />
            <span>FAQ</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
