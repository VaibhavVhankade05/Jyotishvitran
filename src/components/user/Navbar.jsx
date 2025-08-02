import React from 'react';
import logo from '../../assets/images/logoPng.png';
import { FaUserCircle, FaShoppingBag } from 'react-icons/fa';
import '../../styles/Navbar.css';

function Navbar() {
  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Horoscope', url: '/' },
    { title: 'Astrologers', url: '/' },
    { title: 'WhyUs', url: '/whyus' },
    { title: 'Contact Us', url: '/contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg px-4 py-2">
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img src={logo} alt="Logo" height="60" className="me-2" />
      </a>

      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMain"
        aria-controls="navbarMain"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Content */}
      <div className="collapse navbar-collapse justify-content-between" id="navbarMain">
        
        {/* Center Nav Links */}
        <ul className="navbar-nav mx-auto text-center">
          {navLinks.map((item) => (
            <li className="nav-item" key={item.title}>
              <a className="nav-link nav-text fw-bold" href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="d-flex align-items-center flex-column flex-md-row gap-2 mt-3 mt-md-0">
          
          {/* Login Button */}
          <a
            href="/login"
            className="btn btn-outline-light fw-bold px-4 py-2 rounded-pill shadow-sm d-none d-md-block"
          >
            Login
          </a>
          <a
            href="/login"
            className="text-white fw-semibold d-md-none"
          >
            Login
          </a>

          {/* Language Dropdown */}
          <div className="lang-dropdown ms-md-3">
            <select
              id="language-select"
              name="language"
              className="form-select form-select-sm bg-transparent text-white border-white"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
