'use client'
import React, { useState, useEffect } from 'react';
import './nav.css';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1000
  );

  const toggleSidebar = (e) => {
    if (windowWidth < 1000) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className="navbar" onClick={toggleSidebar}>
      <div className="navbar-logo">
        <Link href={'/'}>
        <img src='/Logo-da-footer.png' width={'160px'} height={'80px'} style={{marginTop: '20px', marginLeft: '10px'}}/>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <Link style={{cursor: 'pointer'}} href="#about"><li>About</li></Link>
          <Link style={{cursor: 'pointer'}} href="#companies"><li>Companies</li></Link>
          <Link style={{cursor: 'pointer'}} href="#speaking"><li>Speaking</li></Link>
          <Link style={{cursor: 'pointer'}} href="/book"><li>Free Book</li></Link>
          <Link style={{cursor: 'pointer'}} href="/course"><li>Free Course</li></Link>
          <Link style={{cursor: 'pointer'}} href="#blog"><li>Blog</li></Link>
          <Link style={{cursor: 'pointer'}} href="#contact"><li>Contact</li></Link>
        </ul>
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links">
        <Link style={{cursor: 'pointer'}} href="#about"><li>About</li></Link>
        <Link style={{cursor: 'pointer'}} href="#companies"><li>Companies</li></Link>
        <Link style={{cursor: 'pointer'}} href="#speaking"><li>Speaking</li></Link>
        <Link style={{cursor: 'pointer'}} href="/book"><li>Free Book</li></Link>
        <Link style={{cursor: 'pointer'}} href="/course"><li>Free Course</li></Link>
        <Link style={{cursor: 'pointer'}} href="#blog"><li>Blog</li></Link>
        <Link style={{cursor: 'pointer'}} href="#contact"><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
