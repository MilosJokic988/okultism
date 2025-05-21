import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";  // novo - za stilove

const PentagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pentagram-icon"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 
                    5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <PentagramIcon />
        <span className="brand-text ms-2">Okultism</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/demonology">Demonology</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/alchemy">Alchemy</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rituals">Rituals</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signs-and-symbols">Signs & Symbols</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/seals">Seals</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
