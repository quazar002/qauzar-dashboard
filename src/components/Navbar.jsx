import React from 'react';
import '../styles/Navbar.css';
import { FiMail, FiBell } from 'react-icons/fi';

function Navbar() {
  return (
    <header className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <h1 className="navbar-logo">QUAZAR</h1>
      </div>

      {/* Center: Search Bar */}
      <div className="navbar-center">
        <input
          type="text"
          className="navbar-search"
          placeholder="검색"
        />
      </div>

      {/* Right: Icons */}
      <div className="navbar-right">
        <div className="navbar-icon-wrapper">
          <FiMail className="navbar-icon" />
          <span className="navbar-badge">2</span>
        </div>
        <FiBell className="navbar-icon" />
        <img
          src="https://i.pravatar.cc/32"
          alt="User"
          className="navbar-avatar"
        />
      </div>
    </header>
  );
}

export default Navbar;
