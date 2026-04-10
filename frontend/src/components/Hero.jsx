import React from 'react';
import './Hero.css';

/**
 * Hero Component
 * 
 * A prominent header banner for pages, supporting a title, subtitle, and dynamic classes.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The main heading text
 * @param {string} props.subtitle - The supporting description text
 * @param {string} [props.className] - Optional additional CSS classes
 * @returns {JSX.Element} The rendered Hero component
 */
const Hero = ({ title, subtitle, className = "" }) => {
  return (
    <header className={`hero-section glass ${className}`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Hero;
