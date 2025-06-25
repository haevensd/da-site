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
          { threshold: 0.3 }
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
    <div style={styles.container} className='Speaking'>
        <div className='bg-image-speaking' style={{
            backgroundImage:
            'url("/stage.jpg")',
            height: '750px',
            backgroundPositionY: '45%',
            // backgroundPositionX: '-3university-title5%',
            backgroundSize: 'cover',
            backgroundSize: '100% 260%',
            backgroundRepeat: 'no-repeat',
            display: 'flex'
        }}>
            <span className='cover-header' style={{margin: 'auto', padding: '40px'}}>

            <h1  className="title cover-title"  style={{fontSize: '75px', textAlign: 'center', color: 'white', fontFamily: 'Gotham Book Light'}}><span className="title--speaking" style={{fontSize: '75px',fontFamily: 'Gotham Book Light', marginRight: '20px'}}>
                SPEAKING
                </span><br className='break' />
                OPPORTUNITIES</h1>
            <h3 className="subtitle cover-subtitle" style={{textAlign: 'center',fontSize: '50px',marginTop: '30px',color: 'white', fontFamily: 'Gotham Book Bold  '}}>INSPIRING A GENERATION OF <span className='acheivers-text' style={{ fontStyle: 'italic', fontSize: '', color: '#fff', backgroundColor: '#266BF8', padding: '10px'  }}>ACHIEVERS</span> ON YOUR STAGE NEXT</h3>
              {/* <span style={{ color: '#fff',padding: '5px', backgroundColor: '#266BF8'}}> */}
              {/* </span> */}
            </span>
        </div>
          {/* <div className='about-section-container' style={{display: 'flex',backgroundImage: 'url("/darik_about.jpg")',paddingTop: '70px', paddingBottom: '200px', backgroundPositionY: '85%',backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
              <div className='about-section' style={{marginLeft: 'auto',marginRight: '10%',minHeight: '550px',padding: '50px',maxWidth: '500px',marginTop: '50px', backgroundColor: 'white'}}>

                  <h1 className="title" style={{fontSize: '26px', color: 'black', fontFamily: 'Gotham Book Bold'}}>ABOUT</h1>
                  <h1 className="title" style={{fontSize: '26px', color: 'black',marginBottom: '10px'}}>DARIK ALEXANDER</h1>
                  <strong className="subtitle">.</strong><br></br>
                  <p className="subtitle" style={{marginTop: '0px', lineHeight: '35px'}}><strong style={{fontFamily: 'Gotham'}}>DARIK ALEXANDER</strong> is a highly profitable entrepreneur and trainer. As CEO of Ignite programs, he has worked with some of the top entrepreneurs in the world (including people like Gary Vaynerchuk, Darren Hardy, and Les Brown) and became a multiple six figure earner at the age of 20, generating millions of dollars in revenue using offline and online marketing strategies.</p>
              </div>
          </div> */}
        <section className="arrow"></section>
        <div className="speaking" style={{paddingLeft: '30px',paddingRight: '30px',minHeight: '1000px',display: 'flex', flexDirection: 'column',alignItems: 'center',backgroundImage: '', backgroundRepeat: 'no-repeat', backgroundPositionY: '38%',backgroundSize: 'cover',paddingBottom: '100px'}}>
            <h1 className="title footer-title" style={{maxWidth: '860px',fontSize: '2.917vw', color: 'black', fontFamily: 'Gotham Book Bold', paddingTop: '75px'}}>SEND ME A SPEAKING INQUIRY</h1>
            <h3 className="subtitle" style={{maxWidth: '860px',fontSize: '20px',textAlign:'center', color: '',marginBottom: '50px', marginTop: '10px', }}>If you’ve got an aligned stage or speaking opportunity that you think I’m the right fit for, this is the place for you to make the request.</h3>
            <div style={{display: 'flex', width: '100%'}}>
              <div style={{margin:'50px',border: 'solid 0px black',maxHeight: '700px',marginTop: '-7px', backgroundImage: 'url("/speaking1_3.jpg")',backgroundSize: 'cover',backgroundPosition:'center',backgroundRepeat: 'no-repeat',flex:'1'}}></div>
              <SpeakingForm showImage={false} style={{flex: '1' }}></SpeakingForm>
              <div style={{margin:'50px',border: 'solid 0px black',maxHeight: '700px',marginTop: '-7px', backgroundImage: 'url("/speaking1_2.jpg")',backgroundSize: 'cover',backgroundPosition:'center',backgroundRepeat: 'no-repeat', flex: '1'}}></div>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;