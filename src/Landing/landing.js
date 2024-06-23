import './index.css';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <img src="./assets/logo.jpg" alt="Logo" className="logo" />
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Products</a></li>
                    <li><a href="#services">The Team</a></li>
                    <li><a href="#contact">About Us</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <div className="landing">
                <p className='welcome'>SUUBI is what your SACCO needs <br />
                    to move to the next level. <br />
                    Automate your SACCO now!</p>
                <button className=''>Get Started</button>
            </div>
        </>
    );
};

export default Navbar;
