import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for Footer styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About Me</h3>
                    <p>I am a full-stack developer with over 1 year experience and have strong understanding in OOP, database design and follow MVC model for web development. I am eager to join innovative team.
                    </p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <p>Email: rafiul.faisal@gmail.com</p>
                    <p>Phone: 01793748277</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 M Rafiul Faisal. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
