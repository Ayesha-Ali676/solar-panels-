

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null); // close dropdowns when toggling menu
  };

  const toggleDropdown = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div><i className="fas fa-phone"></i>  03137685006</div>
        <div><i className="fas fa-envelope"></i>  upskysolar@gmail.com</div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
            <span>UP<br /> <small>SKYSOLAR</small></span>
          </Link>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>

            {/* Services Dropdown */}
            <div className="dropdown">
              <span onClick={() => toggleDropdown("services")}>
                Services ▾
              </span>
              <div className={`dropdown-content ${activeDropdown === "services" ? "show" : ""}`}>
                <Link to="/residential" onClick={closeMenu}>Residential</Link>
                <Link to="/industrial" onClick={closeMenu}>Industrial</Link>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="dropdown">
              <span onClick={() => toggleDropdown("products")}>
                Products ▾
              </span>
              <div className={`dropdown-content ${activeDropdown === "products" ? "show" : ""}`}>
                <Link to="/longi" onClick={closeMenu}>Longi Solar</Link>
                <Link to="/jinko" onClick={closeMenu}>Jinko Solar</Link>
                <Link to="/canadian" onClick={closeMenu}>Canadian Solar</Link>
                <Link to="/ja" onClick={closeMenu}>JA Solar</Link>
              </div>
            </div>

            <Link to="/authenticity" onClick={closeMenu}>Module Authenticity</Link>
        
          </div>

          <div className="quote-button">
            <Link to="/contact" onClick={closeMenu}>Get a Quote</Link>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
