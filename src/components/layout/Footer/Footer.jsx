// Footer.jsx
import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  // Default: both "links" and "support" open
  const [openDropdowns, setOpenDropdowns] = useState(['links', 'support']);

  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) =>
      prev.includes(menu)
        ? prev.filter((m) => m !== menu) // close if open
        : [...prev, menu]               // add if closed
    );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo + Description */}
        <div className="footer-section footer-about">
          <img src="/assets/images/mainlogo.png" alt="Logo" className="footer-logo" />
          <p className="footer-desc">
            Rice Now delivers premium quality rice directly from Telugu farmers to
            your table. Authentic, trusted, and fresh — connecting tradition with modern needs.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link"><i className="pi pi-facebook"></i></a>
            <a href="#" className="social-link"><i className="pi pi-twitter"></i></a>
            <a href="#" className="social-link"><i className="pi pi-instagram"></i></a>
            <a href="#" className="social-link"><i className="pi pi-linkedin"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title" onClick={() => toggleDropdown('links')}>
            Quick Links
            <i
              className={`pi ${
                openDropdowns.includes('links') ? 'pi-chevron-up' : 'pi-chevron-down'
              }`}
            />
          </h4>
          <ul className={`footer-links ${openDropdowns.includes('links') ? 'open' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h4 className="footer-title" onClick={() => toggleDropdown('support')}>
            Customer Service
            <i
              className={`pi ${
                openDropdowns.includes('support') ? 'pi-chevron-up' : 'pi-chevron-down'
              }`}
            />
          </h4>
          <ul className={`footer-links ${openDropdowns.includes('support') ? 'open' : ''}`}>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping & Delivery</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rice Now. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
