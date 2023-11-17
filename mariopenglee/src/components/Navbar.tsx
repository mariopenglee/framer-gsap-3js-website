// Navbar component
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/interests">Interests</Link>
          </div>
        </nav>
    );
};

export default Navbar;
