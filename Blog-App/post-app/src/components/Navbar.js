// src/components/Navbar.js
import React from 'react';
import './styles/Navbar.css'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">MyBlogApp</a>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/BlogForm.js">Create Blog</a></li>
          <li><a href="/contact">View Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
