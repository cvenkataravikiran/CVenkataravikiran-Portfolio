import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={closeMenu}>
          Challa Venkata Ravi Kiran Portfolio
        </a>
        <button
          className="navbar-toggler" type="button" onClick={toggleMenu}
          aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Resume', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-2">
              <button
                className="btn btn-link nav-link p-0 d-flex align-items-center theme-toggle-btn"
                onClick={() => { toggleTheme(); closeMenu(); }}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;