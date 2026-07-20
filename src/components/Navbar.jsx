import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Navbar.css';

function Navbar() {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    if (!navRef.current) return;

    const navbar = navRef.current.querySelector('.navbar');
    const navItems = navRef.current.querySelectorAll('.nav-item');

    // Animate navbar on load
    if (navbar) {
      gsap.from(navbar, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
    }

    // Animate nav items with stagger
    if (navItems.length > 0) {
      gsap.from(navItems, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.8
      });
    }
  }, { scope: navRef });

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to('.mobile-menu', {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.mobile-menu', {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection('#hero')}>
          <img src="/logo.png" alt="Logo" />
          <span className="logo-text">Fermiro</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a onClick={() => scrollToSection('#hero')} className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('#about')} className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('#services')} className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('#portfolio')} className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('#contact')} className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('#hero')} className="mobile-nav-link">
          Home
        </a>
        <a onClick={() => scrollToSection('#about')} className="mobile-nav-link">
          About
        </a>
        <a onClick={() => scrollToSection('#services')} className="mobile-nav-link">
          Services
        </a>
        <a onClick={() => scrollToSection('#portfolio')} className="mobile-nav-link">
          Portfolio
        </a>
        <a onClick={() => scrollToSection('#contact')} className="mobile-nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
