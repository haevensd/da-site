'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'; // Create this CSS file for styling
import Testimonial from './components/Testimonial/Testimonial';
import About from './components/about/about';
import Image from 'next/image';
import HexagonSections from './components/triangle/triangle';
import TrainingSection from './components/training/training';
import './page.css'
import bgImage from '../../public/sec-bg.png'
import Footer from './components/footer/footer';
import BookForm from './components/get-book/book';
export default function Home() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 500); // Delay animation
  }, []);

  return (
<div className="dd_container">
      <section className={styles.banner}>
        <div className={styles.bannerOverlay}>
            <h1>It's Time to Make the Transition</h1>
            <p>Your path to success starts here</p>
          </div>
          <iframe className={styles.video} width="960" height="815" src="https://www.youtube.com/embed/9Vd4VZYE43M?si=ZxJnDWMzmNHIFqlO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            
            >
            </video> */}
          <div className={styles.topPageTestimonial}>
            <Testimonial></Testimonial>
          </div>
          <section className={styles.animatedSection}>
            <div
              className={`${styles.textContainer} ${
                animateText ? styles.slideIn : ''
              }`}
              >
              <h2>Join the Journey to Greatness</h2>
              <button className={styles.getInTouchBtn}>
                <a target="_blank" href="https://www.messenger.com/t/1977363389210514/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                  <p style={{padding: '20px'}}>Get in touch</p>
                </a>
              </button>
            </div>
          </section>
      </section>
          <About></About>
          <div className='hexagon-container'>
            
          <h2 className="elementor-heading-title elementor-size-default">
                Join the Movement to  <span className="stoneharbour-text-sec6">
                Become The Person</span><br></br>

         You Know You Were<span className="bold-gotham"> MADE TO BE</span>
         </h2>
          <HexagonSections></HexagonSections>
          <div className="hexagon-gradient"></div>
          <div className="hexagon-gradient-white"></div>
          </div>
          <div style={{position: 'relative',marginTop: '100px'}}>

          <TrainingSection></TrainingSection>

          <BookForm showImage={false}></BookForm>
          <section className={styles.animatedSection} style={{marginTop: '100px'}}>
            <div
              className={`${styles.textContainer} ${
                animateText ? styles.slideIn : ''
              }`}
              >
              <h2>Join the Journey to Greatness</h2>
              <button className={styles.getInTouchBtn}>
                <a target="_blank" href="https://www.messenger.com/t/1977363389210514/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                  <p style={{padding: '20px'}}>Get in touch</p>
                </a>
              </button>
            </div>
          </section>
        </div>
      
      </div>
  );
}
