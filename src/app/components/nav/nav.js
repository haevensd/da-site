'use client';
import styles from "./nav.module.css";
import { useEffect, useState } from "react";
import './nav.css'
export default function Nav() {
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
      } else {
        setIsTopPage(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${!isTopPage && 'opaque'}`}>
      <div className={styles.navbarContent}>
        <a className={styles.logoContainer} href="/">
          <div className={styles.logo}>
            <img src='/Logo-da-footer.png' alt="Logo" width={'100%'} />
          </div>
        </a>
        <div className={styles.links}>
          <a href="/book">Free Book</a>
          <a href="/course">Free Course</a>
        </div>
      </div>
    </nav>
  );
}
