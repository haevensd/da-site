'use client';
import React, { useState } from 'react';
import BookForm from '../get-book/book';
import './contact.css';

const Contact = () => {
  const styles = {
    container: {
        backgroundColor: 'black',
      minHeight: '100vh',
      position: 'relative',
    },
    backgroundImage: {
      position: 'absolute',
      // transform: 'scale(1.)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

    },
    backgroundImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    contentOverlay: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px',
    },
    heroText: {
      textAlign: 'center',
      color: 'black',
      marginBottom: '100px',
    },
    heroTitle: {
      color: 'white',
      
      fontSize: '48px',
      fontWeight: 'bold',
      fontFamily: 'Gotham Book Bold',
      lineHeight: '88px',
      marginBottom: '-50px',
    },
    threeColumnLayout: {
      display: 'grid',
      gridTemplateColumns: '2fr 2fr 2fr',
      gap: '10vw',
      marginTop: '120px !important',
    }, 
    column: {
      color: 'white',
      
      // padding: '50px'/,
      borderRadius: '25px',
      maxHeight: 'fit-content'
      
      // minWidth: '250px',
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Gotham Book Bold',
      marginBottom: '8px',
    },
    sectionText: {
      fontSize: '20px',
      marginBottom: '16px',
      fontFamily: 'Gotham',
      fontWeight: 800
    },
    starRating: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    platformButton: {
      width: '100%',
      padding: '8px 16px',
      marginBottom: '8px',
      border: '1px solid white',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    buttonIcon: {
      width: '20px',
      height: '20px',
      marginRight: '8px',
    },
    formGroup: {
      marginBottom: '16px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: 'white',
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: 'none',
    },
    submitButton: {
      width: '100%',
      padding: '8px 16px',
      backgroundColor: '#f97316',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    profileCard: {
      backgroundColor: '#111827',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
    },
    profileHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    profileImage: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
    },
    profileInfo: {
      color: 'white',
    },
    followButton: {
      width: '100%',
      marginTop: '8px',
      padding: '4px 16px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    socialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
    },
    socialButton: {
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
  };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('/api/email', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, name}),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSubmitted(true);
      setEmail('');
      setName('');
    } catch (err) {
      setEmail('');
      setName('');
      console.log('Failed to register. Please try again.');
    } 
  };
  const handleInputChange = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    } else {
      setName(e.target.value)
    }

  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundImage} className='bg-image'>
        <img 
          src="/contactbg.png" 
          alt="Landscape with hot air balloons" 
          style={styles.backgroundImg}
        />
      </div>

      <div style={styles.contentOverlay} className='coverlay'>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
          JOIN A GLOBAL
          COMMUNITY OF <span style={{ fontStyle: 'italic', fontSize: '54px', color: '#fff', backgroundColor: '#14439c', padding: '0 20px'  }}>ACHIEVERS</span>
          </h1>
        </div>

        <div className='three-column' style={styles.threeColumnLayout}>
          {/* Podcast Section */}
          <div style={styles.column}>
            <h2 style={styles.sectionTitle}>PROGRAMS</h2>
            <p style={styles.sectionText}>
              TAKE MY FREE
              PROGRAMS
            </p>
            
            {/* <div style={styles.starRating}>
              <span style={{ marginLeft: '8px' }}>(19,700+)</span>
            </div> */}

            {['Magnetic Messenger', 'Ascension'].map((platform) => (
              <button key={platform} style={styles.platformButton} className='platform-btn'>
                {/* <img 
                  src="/api/placeholder/20/20" 
                  alt={platform} 
                  style={styles.buttonIcon}
                /> */}
                <span>{platform}</span>
              </button>
            ))}
          </div>
          <div style={styles.column}>
            <h1 style={{color: 'white', fontFamily: 'Gotham Book Bold', fontSize: '32px'}}>WANT TO WORK TOGETHER?</h1>
            <p style={{color: 'white', fontWeight: 800, fontFamily: 'Gotham Book', fontSize: '18px'}}>Drop your info below to get connected and see
            how we can help support you!</p>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '1rem', width: '100%',marginTop: '20px', marginBottom: ''}}>
          <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={handleSubmit} className="login-form">
                <input type="email" value={email} name="email" onChange={handleInputChange} placeholder="Enter your email" required />
                <input type="text" value={name} name="name" onChange={handleInputChange} placeholder="Enter your name" required />
                <div className="terms-and-conditions"><input required id="terms_and_conditions_9rbq2dj9bto" value="terms_and_conditions" name="terms_and_conditions" type="checkbox" data-q="terms_and_conditions" data-required="true" /><span style={{fontFamily:'Roboto',marginLeft:'10px'}} htmlFor="terms_and_conditions_9rbq2dj9bto"><span style={{color: '#FFFFFFFF'}}><p>I agree to receive communications and agree to the <a style={{color: '#9BCAF6FF', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer nofollow" href="https://bradlea.com/terms-of-use/">terms</a> and <a style={{color: '#9BCAF6FF', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer nofollow" href="https://bradlea.com/privacy-policy/">privacy policy</a> </p></span></span></div>
                <button type='submit' className="mail-button contact-button">Contact</button>
                </form>
              </div>
              </div>
          {/* <BookForm showImage={false}></BookForm> */}

          {/* Email Signup Section */}
          {/* <div style={styles.column}>
            <h2 style={styles.sectionTitle}>JOIN THE GREATNESS COMMUNITY</h2>
            <p style={styles.sectionText}>
              GET INSPIRING GREATNESS CONTENT DELIVERED DIRECTLY TO YOUR EMAIL AND PHONE
            </p>
            
            <form>
              <div style={styles.formGroup}>
                <label style={styles.label}>First name*</label>
                <input 
                  type="text" 
                  style={styles.input}
                  required 
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email*</label>
                <input 
                  type="email" 
                  style={styles.input}
                  required 
                />
              </div>
              <button type="submit" style={styles.submitButton}>
                Submit
              </button>
            </form>
          </div> */}

          {/* Social Media Section */}
          <div style={styles.column}>
            <h2 style={styles.sectionTitle}>INSPIRE YOUR NEWSFEED</h2>
            
            {/* <div style={styles.profileCard}>
              <div style={styles.profileHeader}>
                <img 
                  src="/api/placeholder/50/50" 
                  alt="Profile" 
                  style={styles.profileImage}
                />
                <div style={styles.profileInfo}>
                  <h3 style={{ fontWeight: 'bold' }}>Darik Alexander</h3>
                </div>
              </div>
              <button style={styles.followButton}>
                Followed
              </button>
            </div> */}

            <div style={styles.socialGrid}>
              <a href="https://www.youtube.com/user/darikalexander">
                <div style={{ ...styles.socialButton, backgroundColor: '#dc2626' }}>
                  <img style={{ width:'45px ', height: '35px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/YouTube_full-color_icon_%282024%29.svg/1280px-YouTube_full-color_icon_%282024%29.svg.png" alt="YouTube"/>
                </div>
              </a>
              <a href="https://www.instagram.com/darik/">
                <div style={{ ...styles.socialButton, backgroundColor: '#db2777' }}>
                  <img style={{ width:'33px', height: '35px'}}src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                </div>
                </a>
              <a href="https://twitter.com/darikalexander">
                <div style={{ ...styles.socialButton, backgroundColor: '#fff' }}>
                  <img style={{ width:'30px', height: '35px'}}src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="X" />
                </div>
              </a>
              <a href="https://www.facebook.com/darik.alexander">
                <div style={{ ...styles.socialButton, backgroundColor: '#1A77F3' }}>
                  <img style={{ width:'30px', height: '35px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;