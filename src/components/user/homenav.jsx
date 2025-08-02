import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for dropdown toggle behavior

const Homenav = () => {
  // Enable dropdown on hover
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', () => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance(toggle);
        dropdownInstance.show();
      });

      dropdown.addEventListener('mouseleave', () => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance(toggle);
        dropdownInstance.hide();
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-2 px-4 subnav-bg border-top border-bottom shadow-sm">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav d-flex flex-row gap-4">
          {/* Kundli Dropdown */}
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle subnav-link text-black" role="button" data-bs-toggle="dropdown">
              Kundli
            </span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Free Kundli</Link></li>
              <li><Link className="dropdown-item" to="#">Kundli Matching</Link></li>
              <li><Link className="dropdown-item" to="#">Love</Link></li>
              <li><Link className="dropdown-item" to="#">Marriage</Link></li>
            </ul>
          </li>

          {/* Book Puja */}
          <li className="nav-item">
            <Link className="nav-link subnav-link text-black" to="#">Book Puja</Link>
          </li>

          {/* Panchang Dropdown */}
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle subnav-link text-black" role="button" data-bs-toggle="dropdown">
              Panchang
            </span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Panchang Calendar</Link></li>
              <li><Link className="dropdown-item" to="#">Today's Panchang</Link></li>
              <li><Link className="dropdown-item" to="#">Today's Tithi</Link></li>
              <li><Link className="dropdown-item" to="#">Today's Shubh Muhurat</Link></li>
              <li><Link className="dropdown-item" to="#">Today's Nakshatra</Link></li>
              <li><Link className="dropdown-item" to="#">Today's Rahukal</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Homenav;
