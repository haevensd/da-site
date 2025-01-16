'use client';
import React, { useEffect } from 'react';
import { Card, CardContent } from '../../../@/components/ui/card';
import './speaking.css'
import SpeakingForm from '../components/speaking-form';
import Contact from '../components/contact/contact';

const styles = {
    container: {
        paddingBottom: '500px'
    }
};

const AboutPage = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.1 }
        );
    
        const elementsToAnimate = document.querySelectorAll(
          ".title, .subtitle, .story-quote, .story-header h1"
        );
    
        elementsToAnimate.forEach((el) => observer.observe(el));
    
        return () => {
          elementsToAnimate.forEach((el) => observer.unobserve(el));
          observer.disconnect();
        };
      }, []);
  return (
    <div style={styles.container}>
        <div style={{
            backgroundImage:
            'url("https://lewishowes.com/wp-content/uploads/2020/10/rvaopnvheb1j3g7wqc0r.jpg")',
            height: '500px',
            display: 'flex'
        }}>
            <span style={{margin: 'auto', padding: '40px'}}>

            <h1  className="title"  style={{fontSize: '56px', textAlign: 'center', color: 'white'}}><span style={{fontSize: '69px',fontFamily: 'Permanent Marker', marginRight: '20px'}}>
                Speaking
                </span>
                OPPORTUNITIES</h1>
            <h3 className="subtitle" style={{textAlign: 'center',fontSize: '3vw',marginTop: '10px',color: 'white'}}>Inspiring a Generation of Achievers On Your Stage Next</h3>
            </span>
        </div>
        <div style={{display: 'flex',backgroundImage: 'url("/hawaii_cover-flipped.png")',paddingTop: '100px', paddingBottom: '300px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
            <div style={{marginLeft: 'auto',marginRight: '5%',minHeight: '570px',padding: '50px',maxWidth: '500px', backgroundColor: 'white'}}>

                <h1 className="title" style={{fontSize: '26px', color: 'black', fontFamily: 'Gotham Book Bold'}}>ABOUT</h1>
                <h1 className="title" style={{fontSize: '26px', color: 'black',marginBottom: '10px'}}>DARIK ALEXANDER</h1>
                <strong className="subtitle">DARIK ALEXANDER is a New York Times Bestselling author of the hit book, The School of Greatness.</strong><br></br>
                <p className="subtitle" style={{marginTop: '20px', lineHeight: '35px'}}>Darik is a highly profitable entrepreneur and trainer. As CEO of Ignite programs, he has worked with some of the top entrepreneurs in the world (including people like Gary Vaynerchuk, Darren Hardy, and Les Brown) and became a multiple six figure earner at the age of 20, generating millions of dollars in revenue using offline and online marketing strategies</p>
            </div>
        </div>
        <section className="arrow"></section>
        <div className="speaking" style={{paddingLeft: '30px',paddingRight: '30px',minHeight: '1000px',display: 'flex', flexDirection: 'column',alignItems: 'center',backgroundImage: 'url("https://lewishowes.com/wp-content/uploads/2020/10/grtlvs6zd6ehgnocvhbq.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',paddingBottom: '100px'}}>
            <h1 className="title" style={{maxWidth: '860px',fontSize: '2.917vw', color: 'white', fontFamily: 'Gotham Book Bold', paddingTop: '100px'}}>SEND ME A SPEAKING INQUIRY</h1>
            <h3 className="subtitle" style={{maxWidth: '860px',fontSize: '2.1vw', color: 'white',marginBottom: '10px', marginTop: '20px'}}>If you’ve got an aligned stage or speaking opportunity that you think I’m the right fit for, then this is the place for you to make the request.</h3>
            <SpeakingForm showImage={false}></SpeakingForm>
        </div>
            <Contact></Contact>
    </div>
  );
};

export default AboutPage;