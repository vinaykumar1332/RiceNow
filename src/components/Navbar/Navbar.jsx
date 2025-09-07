import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import {
  RiHome5Line,
  RiInformationLine,
  RiStackLine,
  RiMailLine,
  RiSunLine,
  RiMoonLine,
  RiMenuLine,
  RiCloseLine,
  RiSearchLine,
} from "react-icons/ri";
import usePrefersColorScheme from "../../hooks/usePrefersColorScheme";

const NAV_LINKS = [
  { key: "home", label: "Home", icon: <RiHome5Line /> },
  { key: "about", label: "About", icon: <RiInformationLine /> },
  { key: "services", label: "Services", icon: <RiStackLine /> },
  { key: "contact", label: "Contact", icon: <RiMailLine /> },
];

export default function Navbar({ onSearch }) {
  const prefersDark = usePrefersColorScheme();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("home");
  const [query, setQuery] = useState("");
  const navLinksRef = useRef(null);
  const mobileBtnRef = useRef(null);
  const logoRef = useRef(null);

  // set initial theme based on saved or system
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else setTheme(prefersDark ? "dark" : "light");
  }, [prefersDark]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // robust outside-click handler using refs
  useEffect(() => {
    function handler(e) {
      if (!mobileOpen) return;
      // if click is inside navLinks or on mobile button, ignore
      if (
        navLinksRef.current?.contains(e.target) ||
        mobileBtnRef.current?.contains(e.target)
      ) {
        return;
      }
      setMobileOpen(false);
    }

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [mobileOpen]);

  // logo shine mousemove (same as before)
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;
    const onMove = (e) => {
      const bound = logo.getBoundingClientRect();
      const x = e.clientX - bound.left;
      const y = e.clientY - bound.top;
      logo.style.setProperty("--x", `${x}px`);
      logo.style.setProperty("--y", `${y}px`);
    };
    logo.addEventListener("mousemove", onMove);
    return () => logo.removeEventListener("mousemove", onMove);
  }, []);

  const toggleTheme = (e) => {
    e.stopPropagation(); // avoid closing mobile accidentally
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  const handleLinkClick = (key) => {
    setActiveKey(key);
    if (window.innerWidth <= 768) setMobileOpen(false);
  };

  const handleMenuToggle = (e) => {
    e.stopPropagation(); // prevent document click from immediately closing
    setMobileOpen((s) => !s);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
    else console.log("Search:", query);
    // If you want to close the mobile menu after search, uncomment below:
    // if (window.innerWidth <= 768) setMobileOpen(false)
  };

  return (
    <nav className="premium-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a
          href="#"
          className="nav-logo"
          ref={logoRef}
          aria-label="Ricenow logo"
        >
          <span className="logo-text">
            Rice
            <i className="fa-solid fa-wheat-awn wheat-icon"></i>
            now
          </span>
          <div className="logo-shine" />
        </a>

        {/* nav links + search (nav-links becomes a slide-down panel on mobile) */}
        <div
          className={`nav-links ${mobileOpen ? "active" : ""}`}
          ref={navLinksRef}
        >
          {NAV_LINKS.map((ln) => (
            <a
              key={ln.key}
              href="#"
              className={`nav-link ${activeKey === ln.key ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(ln.key);
              }}
            >
              <i aria-hidden="true" className="nav-icon">
                {ln.icon}
              </i>
              <span className="nav-label">{ln.label}</span>
            </a>
          ))}

          {/* SEARCH — visible on all screens; on mobile it appears inside the slide-down */}
          <div className="nav-search-wrapper">
            <form
              className="nav-search search-bar"
              role="search"
              onSubmit={handleSearchSubmit}
            >
              <RiSearchLine className="search-icon" aria-hidden />
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
                onClick={(e) =>
                  e.stopPropagation()
                } /* keep menu open when focusing */
              />
            </form>
          </div>
        </div>

        {/* actions */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            <RiSunLine className="sun-icon" />
            <RiMoonLine className="moon-icon" />
          </button>

          <button
            className="mobile-menu"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={handleMenuToggle}
            ref={mobileBtnRef}
          >
            {mobileOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>
    </nav>
  );
}
