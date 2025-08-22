import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-circle">
            M<span className="logo-badge"></span>
          </div>
          <span className="logo-text">Meet Me</span>
          <span className="beta-tag">Beta</span>
        </div>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Discover
          </NavLink>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Events
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <button
            className="sign-in"
            onClick={() => {
              router("/auth"); // or your login page route
            }}
          >
            Sign In
          </button>

          <button
            className="get-started"
            onClick={() => {
              router("/get-started"); // change this to your actual route
            }}
          >
            Started as guest
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="#">Discover</a>
          <a href="#">Events</a>
          <a href="#">About</a>
          <hr />
          <button
            className="sign-in"
            onClick={() => {
              router("/auth"); // or your login page route
            }}
          >
            Sign In
          </button>
          <button
         className="get-started"
            onClick={() => {
              router("/get-started"); // change this to your actual route
            }}
          >
            Started as guest
          </button>
        </div>
      )}
    </nav>
  );
}
