'use client'
import React, { useState, useEffect } from 'react';
import './nav.css';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen_] = useState(false);
  const [showCompanies, setShowCompanies] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1000
  );
const setIsSidebarOpen = (val) => {
  setIsSidebarOpen_(val);
  if (!val) setShowCompanies(false);
};
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
    <nav className="navbar" >
      <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>

      <div className="navbar-logo" onClick={(e) => e.preventDefault()}>
        <Link href={'/'}>
        <img src='/Logo-da-footer.png' width={'140px'} height={'70px'} style={{marginTop: '20px', marginLeft: '10px'}}/>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <Link style={{cursor: 'pointer'}} href="/"><li>Home</li></Link>
          <Link style={{cursor: 'pointer'}} href="/about"><li>About</li></Link>
          {/* <Link style={{cursor: 'pointer'}}> */}
            <Link style={{cursor: 'pointer'}} href="/speaking"><li>Speaking</li></Link>
            <Link style={{cursor: 'pointer'}} href="/book"><li>Free Book</li></Link>
            <Link style={{cursor: 'pointer'}} href="/course"><li>Free Course</li></Link>
          <li style={{cursor: 'pointer'}} onClick={() => setShowCompanies(!showCompanies)}>
            <span style={{display: 'flex', fontSize: '20px'}}>

            <a> Companies</a>
            {showCompanies ?<img width="15px" height="5px" style={{transform: 'translateX(15px) translateY(0px) scale(0.35) rotate(90deg)'}} src='chevron-left.png' />
          : <img width="15px" height="5px" style={{transform: 'translateX(15px) translateY(0px) scale(0.35) rotate(-90deg)'}} src='chevron-left.png' />}
          </span>
          </li>
          {/* </Link> */}
          {showCompanies ?
          <>
          <Link style={{cursor: 'pointer', fontSize: '16px', }} href="https://merchants.fixmyfees.com/"><li>Fix My Fees</li></Link>
          <Link style={{cursor: 'pointer', fontSize: '16px', }} href="#companies"><li>Arcadia Technologies</li></Link>
          </>
          : null}

          
          <Link style={{cursor: 'pointer'}} href="/blog"><li>Blog</li></Link>
          <Link style={{cursor: 'pointer'}} href="/contact"><li>Contact</li></Link>
        </ul>
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links">

        <Link style={{cursor: 'pointer'}} href="/about"><li>About</li></Link>
        <Link style={{cursor: 'pointer', position: 'relative'}} href="#companies"
        onMouseEnter={() => setShowCompanies(true)}
        >
          <li>Companies</li>
          {showCompanies ?
          <div className="sublinks-container" style={{left: '-65px', position: 'absolute', top: '52px',width: '220px', height: '100px',backgroundColor: '#00000099', display: 'flex', flexDirection: 'column', padding: '15px'}} onMouseLeave={() => setShowCompanies(false)}>
          <Link className='sublinks' style={{cursor: 'pointer', fontSize: '16px',  }} href="https://merchants.fixmyfees.com/"><li style={{textAlign: 'left'}}>Fix My Fees</li></Link>
          <Link className='sublinks' style={{cursor: 'pointer', fontSize: '16px',  }} href="#companies"><li style={{textAlign: 'left'}}>Arcadia Technologies</li></Link>
          </div>
          : null}
          </Link>
        <Link style={{cursor: 'pointer'}} href="/speaking"><li>Speaking</li></Link>
        <Link style={{cursor: 'pointer'}} href="/book"><li>Free Book</li></Link>
        <Link style={{cursor: 'pointer'}} href="/course"><li>Free Course</li></Link>
        <Link style={{cursor: 'pointer'}} href="/blog"><li>Blog</li></Link>
        <Link style={{cursor: 'pointer'}} href="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
