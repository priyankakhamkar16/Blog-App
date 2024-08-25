// src/components/Footer.js
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        We provide the latest blog posts on various topics.
                        Stay tuned for more updates and interesting reads.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create">Create Blog</a></li>
                        <li><a href="/view">View Blog</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@blogsite.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 BlogSite. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
