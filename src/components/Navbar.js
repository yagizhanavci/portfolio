import React from 'react';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="brand-logo">
                Yağızhan Avcı
            </div>
            <ul className="nav-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Download CV</a></li>
            </ul>
        </div>
    )
}

export default Navbar;