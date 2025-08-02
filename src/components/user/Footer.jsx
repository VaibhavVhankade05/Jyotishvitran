import React from 'react';
import '../../styles/Footer.css';
import logo from '../../assets/images/logoPng.png';
import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Logo + Social Icons */}
          <div className="col-md-3 text-center text-md-start d-flex flex-column align-items-center">
            <img src={logo} alt="Logo" height="150" width="150" className="mb-3" />
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="#"><FaFacebookF className="social-icon" /></a>
              <a href="#"><FaWhatsapp className="social-icon" /></a>
              <a href="#"><FaYoutube className="social-icon" /></a>
              <a href="#"><FaInstagram className="social-icon" /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <h5 className="footer-heading">Astrological Services</h5>
            <p>Astrological services for accurate answers and a better future.</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-2">
            <h5 className="footer-heading">Categories</h5>
            <ul className="footer-list">
              <li>Kundli/Birth Chart</li>
              <li>Kundli Matching</li>
              <li>Panchang</li>
              <li>Horoscope</li>
              <li>Festivals</li>
              <li>Register as Astrologer</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-2">
            <h5 className="footer-heading">General Links</h5>
            <ul className="footer-list">
              <li>Home</li>
              <li>Astrology</li>
              <li>Free Reports</li>
              <li>KP</li>
              <li>Astro Store</li>
              <li>Book Pooja</li>
              <li>Mobile Pooja</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-md-2">
            <h5 className="footer-heading">Online Consultations</h5>
            <ul className="footer-list">
              <li>Kundli Matching</li>
              <li>Horoscope Reading</li>
              <li>Numerology Consultation</li>
              <li>Tarot Card Reading</li>
              <li>Face Reading</li>
              <li>Palmistry</li>
              <li>Vedic Astrology Reading</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-4 text-center">
          <small>&copy; {new Date().getFullYear()} JyotishVitran. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
