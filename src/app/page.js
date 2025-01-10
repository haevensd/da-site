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
import FeaturedIn from './components/featured-in/featured-in';
import Contact from './components/contact/contact'
import AutoplayCarousel from "./components/ImageGrid/ImageGrid";
export default function Home() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 500); // Delay animation
  }, []);

  return (
<div className="dd_container">
      <section className={styles.banner}>
        <div className={styles.bannerOverlay}>7
          <div className="content">

          <video autoPlay={true} width={'100%'} height={'100%'} src="http://darikalexander.com/wp-content/uploads/2017/06/website-loop-darik-1.m4v" loop="loop"  muted={true} id="mejs_376381418949159_html5"  >
        
          </video>
          </div>
          
          <div className="contact">
            <div style={{textAlign: 'left'}}>
              <h1 style={{fontFamily: 'Gotham Book Bold'}}>It's Time to Make the Transition</h1>
              <p style={{position: 'relative',fontFamily: 'Gotham Book Bold'}}>Your path to success starts here— jump on my mailing list <img style={{width: '12.5px', height: '15px', top: '7px', position: 'absolute', marginLeft: '10px', transform: 'scale(-1, 1)'}} src="/hand-pointing-down.png" /></p>
              <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '1rem', width: '100%',marginTop: '20px'}}>
                <input type="email" placeholder="Enter your email" required />
                <input type="text" placeholder="Enter your first name" required />
                <div className="terms-and-conditions"><input id="terms_and_conditions_9rbq2dj9bto" value="terms_and_conditions" name="terms_and_conditions" type="checkbox" data-q="terms_and_conditions" data-required="true" /><span style={{fontFamily:'Roboto',marginLeft:'10px'}} htmlFor="terms_and_conditions_9rbq2dj9bto"><span style={{color: '#FFFFFFFF'}}><p>I agree to receive communications and agree to the <a style={{color: '#9BCAF6FF', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer nofollow" href="https://bradlea.com/terms-of-use/">terms</a> and <a style={{color: '#9BCAF6FF', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer nofollow" href="https://bradlea.com/privacy-policy/">privacy policy</a> </p></span></span></div>
                <button className="mail-button">Jump on my list</button>
              </div>
            </div>
          </div>
          </div>
          {/* <iframe className={styles.video} width="960" height="815" src="https://www.youtube.com/embed/9Vd4VZYE43M?si=ZxJnDWMzmNHIFqlO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

          {/* <video
            autoPlay
            muted
            loop
            playsInline
            
            >
            </video> */}
          </section>
          <div className={styles.topPageTestimonial}>
            
            <FeaturedIn></FeaturedIn>
            
            <Testimonial></Testimonial>
            
            
            
          </div>
          
          <About></About>
          
          <section style={{backgroundColor: '#000', border: 'none'}} className={styles.animatedSection}>
            <div
              
              className={`${styles.textContainer} ${
                animateText ? styles.slideIn : ''
              }`}
              >
              <h2 className='site-text'>START YOUR JOURNEY TO GREATNESS</h2>
              <button className={styles.getInTouchBtn}>
                <a target="_blank" href="https://www.messenger.com/t/1977363389210514/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                  <p className='site-text' style={{padding: '15px',color: '#333232', fontFamily: 'GOTHAM BOOK LIGHT',fontWeight: 700}}>GET IN TOUCH</p>
                </a>
              </button>
            </div>
      </section>
      <AutoplayCarousel></AutoplayCarousel>
          <div className='hexagon-container' style={{height: '1130px', marginTop: '100px'}}>
            
          <h2 className="elementor-heading-title elementor-size-default" style={{ }}>
                JOIN THE MOVEMENT TO <span className="stoneharbour-text-sec6">
                BECOME THE PERSON</span><br></br>

         YOU WERE<span className="bold-gotham"> MADE TO BE</span>
         </h2>
          <HexagonSections></HexagonSections>
          
          <div className="hexagon-gradient"></div>
          <div className="hexagon-gradient-white"></div>
          </div>
          <div style={{position: 'relative',}}>

          <Contact></Contact>
<section style={{backgroundColor: '#fff', paddingBottom: '0', }}>

          {/* <BookForm showImage={false}></BookForm> */}
</section>
          <section style={{backgroundColor: '#000'}} className={styles.animatedSection} >
            <div
              
              className={`${styles.textContainer} ${
                animateText ? styles.slideIn : ''
              }`}

              >
              <h2 className='site-text'>START YOUR JOURNEY TO GREATNESS</h2>
              <button className={styles.getInTouchBtn} >
                <a target="_blank" href="https://www.messenger.com/t/1977363389210514/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                  <p className='site-text' style={{padding: '15px',color: '#333232', fontFamily: 'GOTHAM BOOK LIGHT',fontWeight: 700}}>GET IN TOUCH</p>
                </a>
              </button>
            </div>
          </section>
        </div>
      
      </div>
  );
}
