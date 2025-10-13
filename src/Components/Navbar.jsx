import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  // { name: "Get Involved", href: "/get-involved" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

const Navbar = () => {

  return (
    <div className="navbar-container select-none">
      <nav className="navbar-nav flex justify-between items-center px-6 py-4 text-white">
        <Link to="/" className="logo-link">
          <span className="logo-primary">CLEAN</span>
          <span className="logo-secondary">the</span>
          <span className="logo-primary">BLUE</span>
        </Link>

        <ul className="nav-links-list">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="nav-link">
                <span className="nav-link-text">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="auth-links-list">
          <li>
            <Link to="/login" className="login-button">
              Login / Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;