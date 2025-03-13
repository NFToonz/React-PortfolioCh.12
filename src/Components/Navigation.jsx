import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutMe">About Me</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Resume">Resume</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;