import React from 'react';
import { Link } from 'react-router-dom';
// import './Navigation.css';
import "../index.css"; // Assuming you have a CSS file for global styles

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item"><Link to="/">Home</Link></li> 
                <li className="navigation-item"><Link to="/AboutMe">About Me</Link></li>
                <li className="navigation-item"><Link to="/Portfolio">Portfolio</Link></li>
                <li className="navigation-item"><Link to="/Contact">Contact</Link></li>
                <li className="navigation-item"><Link to="/Resume">Resume</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;