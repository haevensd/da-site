'use client'
import React, { useState, useEffect } from 'react';
import './nav.css'; // Add appropriate styles for the sidebar and hamburger
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href={'/'}>
        <img src='/Logo-da-footer.png' width={'160px'} height={'80px'} style={{marginTop: '20px', marginLeft: '10px'}}/>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#companies">Companies</a></li>
          <li><a href="#speaking">Speaking</a></li>
          <li><a href="/book">Free Book</a></li>
          <li><a href="/course">Free Course</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#companies">Companies</a></li>
        <li><a href="#speaking">Speaking</a></li>
        <li><a href="/book">Free Book</a></li>
        <li><a href="/course">Free Course</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
