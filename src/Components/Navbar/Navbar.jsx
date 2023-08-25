import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-items-left">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </div>
            <div className="navbar-items-right">
                <button className="nav-button">Home</button>
                <button className="nav-button highlighted">Show your creativity!</button>
            </div>
        </nav>
    );
}

export default Navbar;
