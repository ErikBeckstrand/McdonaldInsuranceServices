import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { companyInfo } from '../../data/companyInfo';
import logo from '../../assets/logo.png';
import './NavBar.css';

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenus = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenus}>
          <img 
            src={logo} 
            alt={companyInfo.name} 
            className="navbar__logo-img"
          />
        </Link>

        <button 
          className="navbar__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="navbar__hamburger"></span>
          <span className="navbar__hamburger"></span>
          <span className="navbar__hamburger"></span>
        </button>

        <div className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          <div className="navbar__dropdown">
            <button 
              className="navbar__link navbar__dropdown-toggle"
              onClick={toggleServicesMenu}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Services
              <span className={`navbar__dropdown-arrow ${isServicesOpen ? 'navbar__dropdown-arrow--open' : ''}`}>
                ▼
              </span>
            </button>
            <div className={`navbar__dropdown-menu ${isServicesOpen ? 'navbar__dropdown-menu--open' : ''}`}>
              <Link 
                to="/services" 
                className="navbar__dropdown-item"
                onClick={closeMenus}
              >
                Services
              </Link>
              <Link 
                to="/faq" 
                className="navbar__dropdown-item"
                onClick={closeMenus}
              >
                Frequently Asked Questions
              </Link>
              <Link 
                to="/helpful-info" 
                className="navbar__dropdown-item"
                onClick={closeMenus}
              >
                Helpful Info
              </Link>
            </div>
          </div>

          <Link 
            to="/meet-the-team" 
            className="navbar__link"
            onClick={closeMenus}
          >
            Meet the Team
          </Link>

          <Link 
            to="/contact" 
            className="navbar__link"
            onClick={closeMenus}
          >
            Contact Us
          </Link>

          <button 
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
