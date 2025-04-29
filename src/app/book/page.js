'use client';
import React, { useState } from "react";
import BookFormm from "../components/get-book/book";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faCheckSquare, faQuoteLeft, faQuoteRight, faCheck, faQuestionCircle  } from '@fortawesome/free-solid-svg-icons'
import "./book.css";
import Testimonial from "../components/Testimonial/Testimonial";

const BookForm = ({showImage=true}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const handleBackButton = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmitStep2 = async (e) => {
    e.preventDefault();
    
    try {
      // Initialize NMI payment
      const paymentData = {
        amount: '4.95', // Shipping cost
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv
      };
      
      // Process payment with NMI (implement according to NMI documentation)
      // const paymentResult = await processNMIPayment(paymentData);
      
      // Save order details
      const orderData = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        orderDate: new Date().toISOString()
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        setStep(3);
      }
    } catch (error) {
      console.error('Error processing order:', error);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="vault-form">
            <h3 >UNLOCK THE SECRETS TO SUCCESS!</h3>
            <p>
              Fill in the form to receive your <strong>free</strong> copy of our exclusive
              book— packed with actionable strategies, insights, and
              inspiration to help you achieve your dreams.
            </p>
            <form onSubmit={handleSubmitStep1}>
              <label>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                required 
              />
              <label>First Name</label>
              <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name" 
                required 
              />
              <label>Last Name</label>
              <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name" 
                required 
              />
              <div className="button-container">
                <button type="submit">Get my Free Scripts Now!</button>
              </div>
            </form>
          </div>
        );
      
      case 2:
        return (
          <div className="vault-form">
            <h3>Almost There!</h3>
            <p>Please enter your shipping details and payment information for the $4.95 shipping fee.</p>
            <form onSubmit={handleSubmitStep2}>
              <label>Shipping Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address"
                required
              />
              <div className="address-group">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="ZIP Code"
                  required
                />
              </div>
              
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number"
                required
              />
              
              <div className="card-details">
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="CVV"
                  required
                />
              </div>
              
              <div className="button-container">
                <button type="button" onClick={handleBackButton}>Back</button>
                <button type="submit">Complete Order</button>
              </div>
            </form>
          </div>
        );
      
      case 3:
        return (
          <div className="vault-form">
            <h3>Congratulations!</h3>
            <p>
              Your order has been processed successfully! Check your email for download
              instructions and shipping details. We're excited to join you on your
              road to success!
            </p>
          </div>
        );
    }
  };

  return (
    <div className="vault-container" style={{paddingBottom: ''}}>
      <div style={{display: 'flex', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(22,60,156,1) 0%, rgba(38,107,248,1) 30%, rgb(10, 199, 236) 95%)', color: 'white'}} className="hero-container" >
        <div style={{margin: 'auto', maxWidth: '',paddingTop: '4rem', }}>
          <h2 style={{color: 'orange', fontWeight: 'bold', fontSize: '42px',color: '#ffbb2a',marginTop: '50px', marginBottom: '5px', fontFamily: 'Gotham Book Bold'}}>The Exact Social Media Scripts That Built Teams of Tens of Thousands</h2>
          <h3 style={{textDecoration: 'italic', marginBottom: '50px', marginTop: '10px', fontSize:'24px',}}>I used these to build massive sales teams and generate millions in revenue — and I'm giving them to you 100% free.
          </h3>
          <hr></hr>
          <div style={{display: 'flex', paddingTop: '50px', gap: '10px'}}>
            {/* <div id="form" style={{display: 'flex',  flexDirection: 'column', marginTop: '0', maxWidth: '70%'}}> */}
              {/* <h1 style={{textAlign: ''}}>3 Undeniable Truths of Network Marketing</h1>
              <p>that EVERY Single Top-Income Earner in Your Company Applies to their business which allows them to easily outperform, out-recruit, and out-duplicate everyone else...</p> */}
              {/* <div style={{minWidth:'800px',height:'438px', marginLeft: '20px'}}>

              <div style={{position:'relative', minWidth: '100%', marginTop: '5px'}}><iframe src="https://player.vimeo.com/video/1070641708?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{minWidth: '300px', width: '800px', height: '460px'}} title="Magnetic Messenger Scripts v1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> 
              </div>
            </div> */}
            <div id="form" style={{display: 'flex',  flexDirection: 'column', marginTop: '0px', maxWidth: '70%'}}>
              {/* <h1 style={{textAlign: ''}}>3 Undeniable Truths of Network Marketing</h1>
              <p>that EVERY Single Top-Income Earner in Your Company Applies to their business which allows them to easily outperform, out-recruit, and out-duplicate everyone else...</p> */}
              <div style={{minWidth:'600px',height:'700px', marginLeft: '20px'}}>

              <div style={{position:'relative', minWidth: '100%', minHeight: '100%',marginTop: ''}}><iframe src="https://player.vimeo.com/video/1070641708?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{minWidth: '300px', width: '817px', height: '460px'}} title="Magnetic Messenger Scripts v1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> 
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', paddingRight: '40px' }} className="book-container">
              <BookFormm  showImage={false}></BookFormm>
             </div>
          </div>
        </div>
      </div>

      <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 55%, rgb(27, 34, 36) 100%)', maxHeight: '700px'}}>
        <Testimonial color={true} secondImage={true}></Testimonial>
      </div>

      <div className="secondary-container" style={{marginTop: '50px'}}>
        <h1 style={{textAlign:'center', marginTop: '50px', marginBottom: '-20px'}}>So I Gave Them My Scripts… Here’s What Happened</h1>
      </div>

      <div className="flex" style={{gap:"20px", marginBottom: '-110px',margin: '0 auto'}}>
        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/BFp87F9pF8o" className="test-vid" title="Matt Ward" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{marginTop: '70px', marginBottom: '50px'}} allowfullscreen></iframe>
        
        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/1VRNqRoh5Mw" className="test-vid" title="Donta Lewis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{marginTop: '70px', marginBottom: '50px'}} allowfullscreen></iframe>
        
        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/02z-YML-ucg" className="test-vid" title="Cameron Kerkar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{marginTop: '70px', marginBottom: '50px'}} allowfullscreen></iframe>
      </div>

      <div className="flex" style={{gap:"20px", marginBottom: '20px',margin: '0 auto'}}>
        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/eE5ylN05LEI" className="test-vid" title="Michael Manuel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{marginTop: '70px', marginBottom: '50px'}} allowfullscreen></iframe>

        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/tmyXhpbEX1M" className="test-vid" title="Victoria Czupta" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{marginTop: '70px', marginBottom: '50px'}} allowfullscreen></iframe>

        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/jqBxnGxpF0c" className="test-vid" title="Adrian Cupp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{marginTop: '70px', marginBottom: '50px'}} allowfullscreen></iframe>
      </div>

      <a className="yes-btn" href="#form" style={{marginTop: '10px', marginBottom: '20px'}}>
        <span>YES! I Want My FREE Copy Of The Magnetic Messenger Scripts</span>
      </a>
      {/* <div style={{backgroundImage: 'url("/img.jpeg")',width: '100%',height: '750px', backgroundRepeat: 'no-repeat',backgroundSize: 'cover', marginTop: '50px', }}>
          <div style={{marginLeft: 'auto', maxWidth: '50%', paddingTop: '20px', padding: '25px 20px'}}>
          <div className="col-inner bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin" style={{ padding: '0 10px' }}>
            <div className="de elHeadlineWrapper ui-droppable de-editable" id="headline-76267" data-de-type="headline" data-de-editing="false" data-title="sub-headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" data-gramm="false" style={{ marginTop: '0px', outline: 'none', cursor: 'pointer' }} aria-disabled="false">
              <h2 className="ne elHeadline hsSize2 lh3 elMargin0 elBGStyle0 hsTextShadow0" style={{ textAlign: 'center', fontSize: '23px', color: 'rgb(32, 22, 82)' }} data-bold="inherit" data-gramm="false" contentEditable="false">
                <b>You know that <i>"one day isn't a day of the week,"</i> so what exactly is holding you back?!</b>
              </h2>
            </div>
            <hr style={{marginTop: '15px', marginBottom: '15px'}} />
            <div className="de elHeadlineWrapper ui-droppable de-editable" id="headline-21013" data-de-type="headline" data-de-editing="false" data-title="Paragraph" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style={{ marginTop: '0px', outline: 'none', cursor: 'pointer', fontFamily: 'Roboto, Helvetica, sans-serif !important' }} data-google-font="Roboto" aria-disabled="false">
              <div className="ne elHeadline hsSize1 lh5 elMargin0 elBGStyle0 hsTextShadow0" data-bold="inherit" style={{ textAlign: 'right', fontSize: '20px', paddingLeft: '1rem' }} data-gramm="false" contentEditable="false">
                What's stopping you from having a team explode to the point you can't train all of the new faces fast enough?<span style={{ backgroundColor: 'initial', color: 'inherit' }}>&nbsp;</span>
              </div>
            </div>
            </div>
          <div className="de elHeadlineWrapper ui-droppable de-editable" id="tmp_headline1-48716" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style={{ marginTop: '0px', outline: 'none', cursor: 'pointer' }} aria-disabled="false">
            <h1 className="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0" style={{ textAlign: 'right', marginBottom: '-15px',fontSize: '32px' }} data-bold="inherit" data-gramm="false" contentEditable="false">
              <i className="fa_prepended fas fa-check" contentEditable="false" style={{ color: 'rgb(0, 237, 11)' }}></i>
              <FontAwesomeIcon  style={{ marginRight: '15px',color: 'rgb(0, 237, 11)' }} icon={faCheck} />
              <b>Endless leads!</b>
            </h1>
          </div>
          <div className="de elHeadlineWrapper ui-droppable de-editable" id="headline-45800" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style={{ marginTop: '15px', outline: 'none', cursor: 'pointer' }} aria-disabled="false">
            <h1 className="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0" style={{ textAlign: 'right', marginBottom: '-15px',fontSize: '32px' }} data-bold="inherit" data-gramm="false" contentEditable="false">
              <i className="fa_prepended fas fa-check" contentEditable="false" style={{ color: 'rgb(0, 237, 11)' }}></i>
              <FontAwesomeIcon  style={{ marginRight: '15px',color: 'rgb(0, 237, 11)' }} icon={faCheck} />
              <b>Packed out events!</b>
            </h1>
          </div>
          <div className="de elHeadlineWrapper ui-droppable de-editable" id="headline-60659" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style={{ marginTop: '15px', outline: 'none', cursor: 'pointer' }} aria-disabled="false">
            <h1 className="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0" style={{ textAlign: 'right', marginBottom: '-15px',fontSize: '32px', color: 'rgb(45, 45, 45)' }} data-bold="inherit" data-gramm="false" contentEditable="false">
              <i className="fa_prepended fas fa-check" contentEditable="false" style={{ color: 'rgb(0, 237, 11)' }}></i>
              <FontAwesomeIcon  style={{ marginRight: '15px',color: 'rgb(0, 237, 11)' }} icon={faCheck} />
              <b>And so much new cashflow</b>
            </h1>
          </div>
          <div className="de elHeadlineWrapper ui-droppable de-editable" id="headline-86044" data-de-type="headline" data-de-editing="false" data-title="Paragraph" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style={{ marginTop: '20px', outline: 'none', cursor: 'pointer', fontFamily: 'Roboto, Helvetica, sans-serif !important' }} data-google-font="Roboto" aria-disabled="false">
            <div className="ne elHeadline hsSize1 lh5 elMargin0 elBGStyle0 hsTextShadow0" data-bold="inherit" style={{ textAlign: 'right', fontSize: '20px' }} data-gramm="false" contentEditable="false">
              ...that you get a personal call from your bank because they're suspicious that you've entered the drug trade and became a kingpin.
            </div>
          </div>
          <div className="de elHeadlineWrapper ui-droppable de-editable" id="headline-13266" data-de-type="headline" data-de-editing="false" data-title="Paragraph" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style={{ marginTop: '20px', outline: 'none', cursor: 'pointer', fontFamily: 'Roboto, Helvetica, sans-serif !important' }} data-google-font="Roboto" aria-disabled="false">
            <div className="ne elHeadline hsSize1 lh5 elMargin0 elBGStyle0 hsTextShadow0" data-bold="inherit" style={{ textAlign: 'right', fontSize: '20px' }} data-gramm="false" contentEditable="false">
              You've seen people from every other nation, state, country, and even people you personally know walk across that stage to collect an award. Some worked really hard for it and deserve it, some got a bit lucky with their downlines, and some, well, their success still confuses you…you know? The person that somehow, someway, for better lack of terms, is literally dumber than you, and yet they make more money than you?
            </div>
          </div>
        </div> */}

       {/* </div>*/}
        {/* <div style={{display: 'flex', textAlign: 'left', backgroundImage: 'url("/ppl-bg.jpg")', color: 'white', padding: '50px', justifyContent: 'center'}}>
          <div style={{ padding: '50px', marginTop: '50px',  maxWidth: '1070px',}}>
              <p style={{textAlign: 'center'}}>I remember a long while ago, I asked a personal mentor of mine a question....</p> 
              <hr style={{marginTop: '5px', paddingBottom: '25px'}}/>
              He's considered a "Legend of Network Marketing" because he's earned $47 Million in his career...
              <br /><br />
              Darik: "So what was it? When did you finally see your breakthrough?" 
              <br /><br />
              He responded in a short manner like it was the easiest question he'd ever answered.
              <br /><br />
              Legend: "I had a personal friend who started making 10 thousand a month in the company we joined. He was making money, I wasn't. I just couldn't figure out what I was doing wrong, nothing seemed to really be working for me. Then for some reason when I saw him speak up on stage, a thought entered my mind and almost pissed me off. I know this guy! He's dumber than me. If that MotherF*cker can do it, I can too."
            </div>
            <img width="500" src="/val.png" style={{margin: '100px 0'}} />
          </div>
          <div style={{display: 'flex', backgroundColor: 'orange', padding: '30px',marginBottom: '30px', textAlign: 'center', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize: '50px', color: 'white'}}  />
            <h2 style={{margin: '0 50px', fontSize: '46px', color: 'white', lineHeight: '50px', textAlign: 'center'}}>He's dumber than me. If that MF*er can do it, I can too."</h2>
            <FontAwesomeIcon icon={faQuoteRight}  style={{fontSize: '50px', color: 'white'}} />
          </div>
        <div>

            <div style={{display: 'flex',  maxWidth: '1070px', margin: 'auto', marginTop: '10px',gap: '20px'}}>
          <div className='column1'>
              <div>
            <h3 style={{fontWeight: 'bold', marginTop: '0px', marginBottom: '32px'}}>TRUTH 1:
            You Are Enough Right NOW!</h3>
              </div>
            <img src='section3-img1.png' width={'4000px'}></img>
           
          </div>
          <div style={{fontSize: '18px', marginTop: '20px'}}>
        There are people in your company that know <i>less</i> than you and still make <strong><i>more</i></strong> money.<br/>
        <br/>
          There are people who just got started and out-earn you with...<br/>
          <strong><i>less</i></strong> information<br/>
          <strong><i>less</i></strong> skill and<br/>
          <strong><i>less</i></strong> strategy.<br/>
          You have to wonder why that is....<br/>
          <h4 style={{color: "orange", marginBottom: '25px', marginTop: '15px'}}>Is it possible that they simply believe they can?</h4>
          Adopting the belief that I AM ENOUGH changed my life and it will change yours. My name is Darik Alexander and I actually saw my first major income in network marketing at the age of 20 I hit the Ambassador rank in my company and was seeing $250,000 per year in monthly residuals.
          <br />
          <br />
          <img width="400px" style={{margin: 'auto', marginBottom: '50px'}} src="/section3-img3.jpeg" />
          I earned income at that level for a few years before our company went under. I was flying high and then all of a sudden, I was out in cold water.
          I thought going to a different company would be just as simple, I would smash ranks and make boatloads money again...but I didn't. For at least a few years there, no matter how hard I worked, things just didn't take off as they did before. It was grind time.
          It was then I realized that I had gotten what you would call a bit "lucky" in my first company. I joined at exactly the right time, I had the recruited the right leaders, they blew things up and I was at the helm, hosting events, trying to train people as quickly as they were joining. We'd hit a market of college students and high schoolers nationwide and then worldwide. It had become a bit of a phenomenon called the "YPR" or Young People Revolution.
          </div></div>
        </div>
        <div style={{display: 'flex',marginTop: '70px',backgroundColor: 'rgb(247, 239, 237)', padding: '20px', justifyContent: 'center' }}>
          <div style={{padding:'50px', textAlign: 'left', marginTop: '15px'}}> 
            I thought it'd last forever too. These were good problems to have but it didn't teach me much about the newest person and the struggles they actually go through. It wasn't until my income was completely gone that I knew I couldn't just get lucky as I did before.
            <br /><br />But more than anything, I began to realize that I was kind of an outlier in terms of my speaking abilities and mentality. If I had things easy with my stage presence, sales, running events, and speaking, it's because I grew up running events with my father.
            <br /><br />My whole life I watched my father host personal empowerment events and transformational meetings where he'd help people break through mental barriers, emotional barriers, and lifelong fears.
            <br /><br />He was a Pro Boxer, he trained Sylvester Stallone for the Rocky movies, he was featured on Oprah, he shared the stage with people like Tony Robbins and Robert Kiyosaki. So that was my sneaky advantage. I had stage presence because this "space" was all I knew.
            <br /><br />Network Marketing was SO similar because it's "Personal Development with a check attached." That also became my crutch...
          </div>
          <img src="/coowners.jpg" />
        </div>
        <div style={{display: 'flex',  marginTop: '50px', gap: '',paddingRight: '50px', justifyContent: 'center', }}>
          <img width={'auto'} height="auto" style={{maxHeight: '480px', marginTop: '75px'}} src="mm-img.png" />
          <div style={{display: 'flex', flexDirection: 'column', margin: '50px 0', textAlign: 'left', marginBottom: '100px'}}>

        I basically skipped stages that were ESSENTIAL to building a lifelong business and that hurt me during those few years. Since I was broke, in a new company, and virtually none of the people that had joined me the first time stuck around (they were burnt out or quit believing in the industry) I decided to start from scratch.<br /><br />
<p style={{fontSize: '32px', fontWeight: '800',color: 'orange', lineHeight: '40px'}}>I would try and forget everything I knew and do what my uplines told the newest recruit to do. Maybe you've been there before?</p><br /><br />
And so you start all over "make a list of EVERYBODY you know. Don't Pre-judge. Friends, family, acquaintances, your middle school teacher and your pastor. Everybody." Then, you reach out and invite them to a 3 way-call or a home event. At first, it works, for a few people. They get started because they bought into you and your excitement, probably more-so than the product or pitch. If they got started after an event, it's likely they FOMO'd (fear of missing out) into starting because they didn't want to be left behind or way down at the bottom of a leg.
          </div>
        </div> */}
        {/* <div style={{display:'flex', maxWidth: '1070px', marginLeft: 'auto', marginRight: 'auto', gap: '50px', marginBottom: '50px'}}>

          <div>
            <div>

              <p>By now I’m assuming you've burnt through your warm market like a wildfire in Cali and the majority of your friends/family have said no. I’m also willing to bet that the people who started didn't have the same level of desire as you? So 2 - 3 months in many of your personal enrollments drop off.
              <br /><br />This has become the constant experience for most peoople in the industry and if that's current;y you, no worries, it's not your fault, it's just how Top-Income earners train because if everyone in the company put just 1 person in per month in their downline, that would essentially double their income. But for you, its just one more person and does nothing for your income.
              </p>
            </div>
            <h3 style={{color: '#266BF8', textAlign: '', fontSize: '30px', margin: '30px 0'}}>You can't help but wonder when they're going to drop off just like the rest of them...</h3>
            <div className="yes-btn" href="#form" style={{minHeight: '115px',marginTop: '0px'}}>
                    <span>YES! I Want My FREE Copy Of The Magnetic Messenger Scripts</span>
                  </div>  
        </div>
        <img width="500px" src="/friends.jpg" />
      </div>
            <div style={{ maxWidth: '1070px', marginLeft: 'auto', marginRight: 'auto',marginBottom:'50px'}}>
             <p>
              The same happened for me at this point, I mean I was really, really trying here. I was treating this thing like a business but it wasn't paying me like a business and that's when a personal friend and mentor of mine decided I was 'broke and humbled enough' to share some vital information with me.
              </p> 
              <br /><br />
             <p>
              Like "life-support" information that saved me just before I was about to leave the industry for good. Is that you? Feeling like this industry isn’t for you, but for some damn reason, it keeps pulling you back in? Nagging you at the back of your mind, knowing what you know now, you just can’t go back to traditional thinking, you’ve been infected
              </p> 
              <br /><br />
             <p>
              This "new" information changed my perception so I changed my approach and made all of my money back and then some. I began smashing ranks once again, and I've been earning a FAT residual check because of this little-known secret...
              </p> 
            </div>

      <div style={{display: 'flex', flexDirection: 'row', backgroundImage: 'url("/group.png")', gap: '50px',color: 'white', padding: '50px 100px',}}>
        <div style={{display: 'flex', flexDirection: 'column', minWidth: '50%'}}>

          <h1 style={{textAlign: 'center'}}>TRUTH 2:<br ></br>
          It doesn't matter what works, it just matters what duplicates.</h1>
          <p>Maybe it's not so secret, I’m sure you’ve heard it before. I heard it, but I never really knew it. If I did, I wasn't doing it because it's one thing to hear something and another thing to KNOW something.
            <br /><br />They say you don't really know something until you experience it. Not once in my previous company was I, myself, duplicatable. I did things other people couldn't do, I spoke like I'd been doing it since I popped outta the womb. I was a bit of a brainiac and intensely passionate. So where I lacked skill, my passion would shine through and save the presentation.
            <br /><br />How is that duplicatable? My income in my next few companies suffered as a direct result. I knew too much and it hurt my organization's growth and success.
            <br /><br />In my experience, more information = more indecision. "Information Overwhelm, Paralysis by Analysis" whatever you want to call it. Knowing more doesn't grow your income, it helps, but a growing organization grows your income. Take that to the bank.</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginTop: '20px'}}>
          MOST personal development audios become what I like to call "Mental Mast*rbation." In other words, it's a good thing to listen to audios and to read books, but for the majority of people, this becomes an acceptable form of mental stimulation that feeds your mind but drains your bank account. Do you know how many folks in Network Marketing are complete quote junkies?! They can recite every pitch, every quote, every change to the company comp plan, every product and ingredient in it. Information.
          <br /><br />But that's the equivalent to a fella approaching the head coach of an NFL team and saying, "Hi, I want to be paid like a professional football player, I want to try out for the team." To which the head coach responds, "What makes you qualified?" "Well, I know every single play, I've watched every single game over the last decade." The head coach scratches his head, semi-impressed and says, "But do you have any experience? Have you played a game on the grid-iron? Do you know how to take a hit? Catch a ball? Sprint the routes? Get bruised and bloodied?” 
          <br /><br />At some point, the rubber's gotta meet the road and you've gotta eat the no's. That means, having a proper system in place for people to eat the no's and still win. "Systems are duplicatable, people are not." Knowing this information was the first step but how would I apply it?!
        </div>
      </div> */}

        {/* <div style={{display: 'flex', flexDirection: 'column', marginTop: '70px',  }}>
          <img width={'500px'} height="1000px" src="/truth3.jpg" style={{margin: 'auto',marginBottom: '50px'}} ></img>
          <div style={{display:'flex', textAlign: 'left', maxWidth: '1170px', marginLeft: 'auto',gap: '20px', marginRight: 'auto', gap: '40px', marginBottom: '50px'}}>
            <div>
              <p >I was ALL over the place, between personal meetings, 3-way calls, events, texts, trainings, and putting out fires, I was nothing more than a highly paid personal assistant, a chicken running around with its head cut off. So as you can imagine, if the newest recruit took one look at me and said "I want what that guy has" they had no clue what to do or where to start. I needed to cut the fluff, stop trying to do everything and be "the guy.”</p>
              <h2 style={{margin: '40px 0', fontSize: '40px'}}>K.I.S.S it, Keep It Stupid Simple.</h2>
              <p >
                I needed to simplify and dumb things down a bit, not because people are dumb, but because I was doing so many things, it left a poor example. Nobody knew where to start. Nobody could copy me and if they did, they too, were highly unorganized.
                I needed to K.I.S.S my Daily Method of Operation. I approached one of my mentors at the time who was making a 7-figure income. He was famously known to work 4 hours a day, 4 - 5 days a week. He’d wake up, pick up the phone, call his leads, close, enroll and that’s about it. For 7 figures per year? I’ll take it. (although you won't need to be doing that)
              </p>
            </div>
            <div>
              <p className="highlight-text" style={{marginBottom: '20px'}}>And for the kicker, he would follow an actual script (like a paper script) until he remembered and recited it from memory. He never strayed far from it, treating it like it was a sin to do anything that wasn’t on the script.</p>
              <p>And I remember thinking to myself, “WHY? Why does this guy still use a script, even though he’s far beyond them and doesn’t need to use them anymore.” His answer, “If I stick to the script all the time and then someone gets started because of it, they will think to themselves, ‘well, hmmm, I got started when he did this, I guess that’s how I’ll get other people started too.’” Consciously or unconsciously, its a “monkey see, monkey do” situation.</p>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto', gap: '75px', marginTop: '50px'}}>
          <div style={{}}>
            <img src="/top-bottom-rect.jpg" width={'4000'} />
          </div>
          <div>
            <p>I could tell this guy was particularly great at what he did, but if he was, he never showed it. He made an effort never to get too fancy with his pitch, he never used “high-level” sales tactics and even answered objections in a basic manner. Daily this is what he did for years until he worked for the sake of joy and not for the sake of necessity.</p>
            <h4 style={{fontSize: '32px', margin: '20px 0 40px 0'}} className="brown-highlight">People don’t do what they’re told, they do what they see, and in Network Marketing that seems to reign especially true.</h4>
            <p>So as a leader, you can never ask your people to do what you aren’t willing to do and you should <u><strong style={{color: 'orange'}}>never do something that the newest person can’t do, especially if you’re talented, or the best presenter this side of the Mississippi.</strong></u> Because then when people get started, they’ll have the wrong expectations on how to become successful.
            Now you don’t need to make cold calls like this particular fella, there are many ways up the mountain, whether you cold prospect on Facebook in groups, have an online lead system figured out, work the “3-foot rule” while you’re out in public, or slide in the DM’s, doesn’t matter. What matters is that you do the same thing, the same way, all the time.</p>
          </div>
        </div>
        <img style={{marginTop: '20px'}} src="/pnggroup.jpg">

        </img>
        <div style={{ background: 'rgb(1, 116, 199)', color: 'white', padding: '50px', marginBottom: '50px', paddingTop: '30px'}}>
          <h4>Toss Everything You Think You Know About Network Marketing Out The Window and ONLY Use This!</h4>
          <div style={{display: 'flex', marginTop: '30px',  gap: '50px'}}>
            <div style={{display: 'flex', flexDirection: 'column',}}>
              <p>In other words, don’t rely on your smarts or talent or even your abilities. It’ll relieve you of a major burden. Rely on the system and a system that’s proven to work. Do you realize how big this is? It was the key that I’d been missing through those tough years. It opened the door to bigger incomes, faster growth in my teams and the lifestyle I wanted to live.
              <br /><br />Sure I worked, but I actually worked less and got more results. That’s TRUE LEVERAGE and true freedom. The type of freedom that only residual income affords, the type they always talk about but so few people ever achieve in this industry. I want to share with you that key to leverage
              <br /><br />It’s a script. And I call this script my ultra-super-secret-despicably-awesome weapon. It’s something I use to this day and I share it with everyone on my personal teams. it's something that anyone can use, apply, and succeed with. This thing freakin’ duplicates.
              <br /><br />I don’t need to be present anymore. When the newest person gets started, you just have a quick goal-setting session, teach them the invite and then hand them my secret weapon. That’s it. Do things need to be more complicated? If it ain’t broke, don’t fix it. Think about it, how many folks do you believe can read and regurgitate words on a page? EVERYONE, unless they don’t know how to read.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'  }}>
              <p>It’s a script so effective and complete that you can use it for all situations and for any company (I made sure of that and handed it for use to my friends in other companies. They tested it out and the results came back positive, yay).
              <br /><br />Why does the script work so well? Well, beyond sharing it with hundreds of network marketers, they've used the material inside of it to recruit thousands of other people. See what they're saying. (TESTIMONIALS)
              <br /><br />We didn't want to just toss this out into the marketplace and hope it worked either, if we were going to charge even a penny for this resource, we had to GUARANTEE it worked for any network marketer in any company. So we ran it by some personal friends of ours that are 7-figure earners and asked them to read it over and to remove or change anything they see that would hinder someone from using it.</p>
              <h4 style={{color: 'orange', lineHeight: '35px', fontSize: "38px", marginBottom: '40px', marginTop: '40px'}}>They did and approved it as a universal Network Marketing Resource.</h4>
              <p>I call this masterpiece: <strong>Magnetic Messenger Scripts</strong></p>
            </div>
          </div>
        </div> */}
        {/* <div className="" style={{display: 'flex', gap: '70px', maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto',}}>
            <div style={{minWidth: '40%'}}>
              <h3 style={{color: 'orange', textAlign: 'center', lineHeight: '50px', marginBottom: '50px'}}>This ONE Document Will Solve ALL of Your Network Marketing Problems.</h3>
              <img src="/one-portrait.jpg">
              </img>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop:'10px'}}>
              <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '30px'}}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                  <span className="highlight-blue" style={{fontSize: '24px'}}><FontAwesomeIcon style={{marginRight: '10px'}} icon={faQuestionCircle} />Personal Belief?</span>
                  <p>
                    You will become a better recruiter. Words you can use to get your head out of the way and close more. What do you think will happen to your self-esteem if you’re consistently tossing people on the team and under your leaders? What do you think they’ll do when you’re building their teams faster than anyone ever has? They’ll thank you profusely and your uplines will have their jaws on the floor wondering how you do it.
                  </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span className="highlight-blue" style={{fontSize: '24px'}}><FontAwesomeIcon style={{marginRight: '10px'}} icon={faQuestionCircle} />Duplicatable?</span>
                  <p>
                    Everyone, even the person on your team who swears they can’t sell, can use this to recruit. The less skilled they are, the better. Don’t think, just read and follow. Enroll and hand them the same dang script. En-mass it works and it's deadly effective.
                  </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span className="highlight-blue" style={{fontSize: '24px'}}><FontAwesomeIcon style={{marginRight: '10px'}} icon={faQuestionCircle} />Daily Method of Operation?</span>
                  <p>
                    Not only do we share the most efficient DMO that the majority of 6 - 7 Figure earners use, but now you know exactly what to do daily and how to do it in order to make at least $2,500 monthly in your business, guaranteed.
                  </p>
                </div>

              </div>

              <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginTop: '20px', gap: '10px'}}>
                  <li style={{listStyleType: 'none', }}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faCheckSquare} />Magnetic Messenger Scripts is NOT designed to give you more information. It's NOT designed to overwhelm you or add more “tactics and techniques” to your plate.</li>
                  <li style={{listStyleType: 'none', }}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faCheckSquare} />It’s designed to help you simplify your approach so you out-recruit even the most seasoned of sales-dawgs in your company.</li>
                  <li style={{listStyleType: 'none', }}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faCheckSquare} />It’s designed to help you earn, at bare minimum, a full-time income in your network marketing company (between $2,500 - $5,000 monthly) and if you so desire, a 6+ figure income.</li>
                  <li style={{listStyleType: 'none', }}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faCheckSquare} />It’s designed to make you the fastest growing team in your company, not because you’re lucky or “outworking” anyone, but because your team duplicates better than everyone else’s.</li>
                  <li style={{listStyleType: 'none', }}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faCheckSquare} />It’s designed to remove the stress of success so you can just work the business and grow your team in a stupid simple way.</li>
              </div>
            </div>
          </div> */}

        <div className="" style={{display: 'flex', flexDirection: 'column', marginTop: '40px', backgroundColor: 'rgb(246, 246, 246)', marginBottom: '50px'}}>
          <h2 style={{marginBottom: '50px',marginTop: '50px'}}>What’s inside Magnetic Messenger Scripts:</h2>
          <div style={{display: 'flex', maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto',}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>
              <ul className="mm-list" style={{textAlign: 'left'}}>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} />How to <strong style={{}}>get your prospects to almost always ask you the question: "what do you do?"</strong> without having to force it or try too hard.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />How to position your company in a way that doesn't make you feel "icky" so you can <i><u>share your opportunity as a confidant and not a desperate salesman</u></i> trying to afford their next auto-ship.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} />A <strong>major mistake over 85% of Network Marketers make that's fatal</strong> and makes you look desperate and weak.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />Reveals <u><i>the most powerful way to connect with old friends</i></u> and acquaintances you haven't talked to in a long time.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} />Conversation starters to <strong>share your opportunity with ease</strong> for: Birthdays, friend requests, and strangers</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />A <u><i>sneaky way to rebuttal the inevitable “pyramid scheme” objection that will leave your prospect stuttering and stumbling</i></u> over their own words and how to answer that objection BEFORE it ever even comes up.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} />A list of <strong>30 Conversation starters that will position you in a powerful way</strong> before you ever bring up your company, making you in charge of the conversation</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />The proper amount of time to wait before you reach back out to follow up (after 200+ live recruiting tests on Facebook prospects for multiple companies, this method has proven to work better than all others.)</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} /><strong>Words you can use to get your prospect re-engaged and have them craving more info</strong> on your opportunity even if they left you on "read" or didn't respond to your presentation through messages.</li>
              </ul>
              <ul className="mm-list">
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />How to <u><i>follow up in way that positions you as a professional and not "salesy..."</i></u> (TIP: The last 8 words in this script make all of the difference here.)</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />How giving your prospect an "out" will become one of the most effective qualification tools in your toolkit and how to start applying that to your pitch right now.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />How to almost always start a new conversation to <u><i>have your prospect warm up to you instantaneously</i></u> by applying a tested psychological trick.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} />The this one approach can <strong>convert a skeptic into a buyer almost instantaneously</strong> like you flipped a stubborn switch.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />This 4-part acronym will <u><i>increase your presentation ratio by at least 25% or more.</i></u></li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />How to use your questions like a shovel and <u><i>dig "beneath the surface" level answers to gather data that help you close</i></u> them.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} />How to ask "open-ended questions" to <strong>learn everything you need about your prospect within 3 - 4 messages</strong> before sharing your opportunity.</li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} className="highlight-blue" icon={faAdjust} />How to subtly and skillfully <strong>build rapport with your prospect so they automatically and unconsciously trust everything you say.</strong></li>
                <li><FontAwesomeIcon style={{marginRight: '5px', }} icon={faAdjust} />How to <u><i>build mental bridges between your successful upline and your prospect to create deep curiosity and desire</i></u> to learn more about your business. (This one is dangerously effective when you leverage it correctly because it virtually removes all objections every time).</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        {/* <div style={{maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto',marginBottom: '50px'}}>
          <div style={{display: 'flex', }}>
            <img height={'100px'} width={"auto"} style={{maxWidth: 'auto', height: '300px', margin: '0 20px',}} src="coowner1.jpg" />
            <h4 style={{ color: 'orange', lineHeight: '48px'}}>MAGNETIC MESSENGER SCRIPTS IS YOUR COMPLETE RESOURCE FOR TURNING TOTAL STRANGERS INTO CUSTOMERS AND DISTRIBUTORS WITHIN DAYS OF PRESENTING YOUR BUSINESS.</h4>
            <img  height={'100px'} width={"auto"} style={{maxWidth: 'auto', height: '300px', margin: '0 20px', }} src="coowner2.jpg" />
          </div>
          <div>
            <div style={{display: 'flex', marginTop: '50px', gap: '50px'}}>
              <p>Is there a lot there? Yes but not a terrible amount. We counted, and in total, there are 101 scripts and 38 tips inside.<br /><br />
                They aren’t hard to remember and even easier to recite. You won’t be stuttering or "trying hard" because they use plain language anyone can understand. Plus, you’ll probably have them all memorized within a week. you know what that means? An easy system that your entire team can duplicate effortlessly.
                <br /><br />So why am I offering this resource to all network marketers in any company?
                I mean if I were you, I'd be a bit weary too. "What's his intention here? Is he trying to cross-recruit me into his company?"
                <br /><br />Nope, to be 100% transparent, I just want to build a name for myself in the industry like Ray Higdon & Eric Worre who currently hold positions as some of the most influential trainers in the space.
                <br /><br />I figure, if I help you build your current business, and actually smash some ranks, earn some dollars, walk the stage, maybe you'll come to an event I'm hosting or speaking at.
                <br /><br />In other words, is there a selfish desire here? Of course, but only in the name of proving that I can help you succeed. And if you use my resources and don't succeed, then drop me like your last relationship.</p>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <img style={{maxWidth: '350px'}} src="coowner3.jpg" />
                  <div className="yes-btn" href="#form" style={{minHeight: '130px',marginTop: '10px', textAlign: 'center'}}>
                    <span style={{marginTop: '-20px'}}>YES! I Want My FREE Copy Of The Magnetic Messenger Scripts</span>
                  </div>  
                </div>
            </div>
          </div>
          <div style={{marginTop: '50px'}}>
            <p>

          I want to prove I can help you by actually helping you and Magnetic Messenger Scripts is the first step to doing that.<br /><br />
          Also: There Are ZERO Links or Plugs Inside. No-upsells within Magnetic Messenger Scripts, It's 100% pure content (ad-free)<br />
          </p>
          </div>
        </div> */}

        {/* <div style={{display: 'flex', gap: '50px', marginTop: '50px', marginBottom: '50px', maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto',}}>
          <div style={{minWidth: '50%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column',  }}>
            <h4>Here's How To Get Your Very Own Copy of Magnetic Messenger Scripts:</h4>
            <img width={'400px'} style={{marginTop: '50px'}} src="mm-img.png"></img>
          </div>
          <div style={{marginTop: '25px'}}>
            <p>So all you have to do to get your copy for a measly 5.60 - 7 dollars and you can download your Digital Copy Right Now,<br /><br />
Why does this thing cost (AMOUNT?) Well, as you may have noticed, I paid money out of pocket to advertise this to you. It costs me close to 11 dollars to sell one copy of this product. So although it's costing me to get Magnetic Messenger Scripts in front of you, I'm just trying to recoup some of the ad costs to ensure I don't go broke building an audience and helping you grow your business.<br /><br />
And I won't be anal about you sharing it with your teams either. In fact, I encourage you to share it with anyone and everyone on your team, rent-free. You won't have to buy multiple copies, just print them out or send the download to them. I have ZERO references in the Document to my brand or name so you won't need to worry about your team looking to me as a leader. I even recommend you call it your own as long as you promise me to keep the sheet titled Magnetic Messenger Scripts out of respect for the amount of work I put into it.</p>
          </div>
        </div>

          <img style={{maxWidth: '1170px', margin: 'auto',marginBottom: '50px', marginTop: '0px', }} src="test-img.png" />
        <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}} className="standard-container">
          <div>
            <h1 style={{color: 'orange', fontWeight: 'bold', marginLeft: '0'}}>The Boldest Guarantee I've Ever Offered</h1>
            <p>You'll begin to notice you won't need all of the scripts inside of the document, that just a handful will become your ticket to a growing business.<br /><br />
However, if for whatever reason you aren't 110% happy with your purchase and after you apply just a few of the scripts, you still don't believe they're right for you and your team, just shoot me a quick email and I'll be happy to send your money back & let you keep the resource.<br /><br />
The 100% Money Back Guarantee is Good Forever. So if 2 years down the road, you check your documents and forgot to ask for a refund, please, reach out and I will 100% honor it, no questions asked.<br /><br />
I won't come hounding you down, asking you why, and I won't need proof that you tried it. I trust that you're able to make your own decisions about what's best for you and your team.<br /><br />
How's that for a guarantee? I'm so confident you'll not only love Magnetic Messenger Scripts, but that it will quickly become one of the most valuable resources in your toolkit that you'll reach out wanting to give me your own testimonial about how it worked for you.</p>
          </div>
          <div>
            <img width="2000px"  height="auto"src="collage.png" />
            <div className="yes-btn" href="#form" style={{minHeight: '115px',marginTop: '50px'}}>
        <span>YES! I Want My FREE Copy Of The Magnetic Messenger Scripts</span>
      </div>
          </div>
        </div> */}
        {/* <div className="standard-container" style={{display: 'flex', flexDirection: '', gap: '50px', marginTop: '50px'}}>
          <img width="800px" height="100px" style={{maxHeight: '800px'}} src="section-last.jpg" />
          <div >
            <h1 style={{color: 'orange', textAlign: 'left', fontWeight: 'bold', fontSize: '48px', }}>You've got to act fast:</h1>
            <p>
            Now, I won't go on some bogus rant on why I only have a limited supply of these things. I haven't printed them and don't plan on it (otherwise it'd cost me a fortune to send them all out and advertise). Nonetheless, it's still costing most close to 5 dollars with each copy I get out. In other words, I only want to spend 5k getting this resource into the hands of 1k people.
            <br /><br />
I can't offer Magnetic Messenger Scripts at $5.60 forever. I will need to eventually increase the price<br /><br />
So I've committed to run this offer to the first 1000 people who take action and grab their copy. For reference, we just launched our Facebook/YouTube campaigns and are putting this ad in front of 4 million people (we're spending a lot) I want to grow this audience quickly and believe what we have is good enough and priced well enough to sell like hotcakes to a starving crowd.<br /><br />
Afterward, I'll increase the price to just above what it costs me to advertise.<br /><br />
So hustle and grab your copy and I look forward to seeing you walk the stages at your company events!
            </p>  
            <div className="yes-btn" href="#form" style={{minHeight: '115px',marginTop: '50px'}}>
        <span>YES! I Want My FREE Copy Of The Magnetic Messenger Scripts</span>
      </div>
          </div>
        </div> */}
    </div>
  );
};

export default BookForm;