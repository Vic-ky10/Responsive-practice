// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
      <div>
    <nav className="navbar">
      <div className="nav-logo">Instagram</div>
      <ul className="nav-links">
        <li><i className="bi bi-house"></i><span>Home</span></li>
        <li><i className="bi bi-search"></i><span>Search</span></li>
        <li><i className="bi bi-compass"></i><span>Explore</span></li>
        <li><i className="bi bi-chat"></i><span>Messages</span></li>
        <li><i className="bi bi-person-circle"></i><span>Profile</span></li>
      </ul>
    </nav>
  

    </div>
    
  );
}

export default Navbar;
