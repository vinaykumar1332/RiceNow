// navbar.jsx
import React, { useEffect, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import './navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'Products', icon: 'pi pi-shopping-cart', url: '/products' },
    { label: 'Orders', icon: 'pi pi-list', url: '/orders' },
    { label: 'About', icon: 'pi pi-info-circle', url: '/about' },
  ];

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <img src="/assets/images/mainlogo.png" alt="Company Logo" className="logo-image" />
          <span className="company-title">Rice now</span>
        </div>

        <ul className="menu-desktop">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.url} className="menu-item">
                <i className={item.icon} aria-hidden="true"></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${visible ? 'active' : ''}`}
          onClick={() => setVisible(v => !v)}
          aria-label={visible ? 'Close menu' : 'Open menu'}
          aria-expanded={visible}
          aria-controls="mobileNav"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <Sidebar
        id="mobileNav"
        visible={visible}
        onHide={() => setVisible(false)}
        baseZIndex={1000}
        className="mobile-sidebar"
        dismissable
        showCloseIcon={false}
        position="right"
        blockScroll
        modal
      >
        <div className="mobile-header">
          <span className="mobile-title">Menu</span>
          <button
            className="close-btn"
            onClick={() => setVisible(false)}
            aria-label="Close menu"
          >
            <i className="pi pi-times" aria-hidden="true"></i>
          </button>
        </div>

        <ul className="mobile-menu">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.url} className="menu-item" onClick={() => setVisible(false)}>
                <i className={item.icon} aria-hidden="true"></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Sidebar>
    </nav>
  );
};

export default Navbar;