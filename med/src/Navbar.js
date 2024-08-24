import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#our-services">Our Services</a>
        <a href="#contact-us">Contact Us</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
