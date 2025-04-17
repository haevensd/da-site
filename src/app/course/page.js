'use client';
import React, { useState } from "react";
import "./course.css";
import EnrollButton from "./EnrollButton";
import Testimonial from "./Testimonial";
import BookForm from "../components/get-book/book";
import CourseForm from "../components/course/course"
import {  faCheck,  } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FreeCourseForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  return (
    <div className="vault-container" style={{padding: '0', paddingBottom:'0', minHeight: '24800px'}}>
      <div style={{display: 'flex', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(22,60,156,1) 0%, rgba(38,107,248,1) 30%, rgb(10, 199, 236) 95%)', color: 'white'}} className="hero-container" >
        <div style={{margin: 'auto', maxWidth: '',paddingTop: '4rem', }}>
          <h2 style={{color: 'orange', fontWeight: 'bold', fontSize: '42px',maxWidth: '1170px',textAlign: 'center',color: '#ffbb2a',marginTop: '20px', marginBottom: '5px', marginLeft: 'auto', marginRight: 'auto',fontFamily: 'Gotham Book Bold'}}> I Built a Business From Home That <br />Generated Millions With Teams of Tens of Thousands—<br />Now I’m Giving You the Full Program Free</h2>
          <h3 style={{textDecoration: 'italic',  margin: 'auto',marginBottom: '50px', marginTop:'20px', fontSize:'24px',maxWidth: '1480px',}}>This is your step-by-step blueprint for building a successful affiliate marketing organization using fundamental strategies... whether you're a beginner or running a successful team.

          </h3>
          <hr></hr>
          <div style={{display: 'flex', marginTop: '10px', gap: '10px', alignItems: '', justifyContent: 'center'}}>
            <div id="form" style={{display: 'flex',  flexDirection: 'column', marginTop: '1rem', maxWidth: '70%'}}>
              {/* <h1 style={{textAlign: ''}}>3 Undeniable Truths of Network Marketing</h1>
              <p>that EVERY Single Top-Income Earner in Your Company Applies to their business which allows them to easily outperform, out-recruit, and out-duplicate everyone else...</p> */}
              <div style={{minWidth:'600px',height:'700px', marginLeft: '20px'}}>

              <div style={{position:'relative', minWidth: '100%', minHeight: '100%',marginTop: '15px'}}><iframe src="https://player.vimeo.com/video/1070642304?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{minWidth: '300px', width: '817px', height: '460px'}} title="Magnetic Messenger Scripts v1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> 
              </div>
            </div>
            <div className="course-container" style={{display: 'flex', flexDirection: 'column', paddingRight: '40px', marginTop: '-10px' }}>
              <CourseForm showImage={false}></CourseForm>
              </div>
          </div>
        </div>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', paddingTop: '0', alignItems: 'center', flexDirection: 'column', backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}>
        <p style={{ marginTop: '100px', fontSize: '18px' }}>Are You Leveraging The #1 Network Marketing System?</p>
        <h1 style={{ fontSize: '34px', fontWeight: 'bold', textAlign: 'center' }}>Introducing: The Most Powerful Way to Become THE Leader In Your Network Marketing Company by Creating Endless Enrollments with TRUE Duplication... 24/7!</h1>
        <div style={{minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center',}}><span style={{margin: 'auto'}}>
          insert video
          </span>
          </div>
        <p><i>This is your step-by-step blueprint for building a successful network marketing business using real strategies... whether you're a total beginner or currently running a successful team.</i></p>
        <EnrollButton showSavings={true}></EnrollButton>
      </div> */}

      <div className="container">
        <div className="">
          <div className="flex parent" style={{flexDirection:'column', overflow: 'visible'}}>

            <h1 style={{color: '#ffbb2a', fontSize:'48px',lineHeight:'65px', fontFamily: 'Gotham Book Bold', marginTop: '70px', textAlign: 'center'}}>HERE'S EVERYTHING THAT'S INCLUDED WITH <br />
            THE INTENSIVE COACHING PROGRAM</h1>
                {/* <img src="asce-top.png" width={"200px"} style={{margin: 'auto',marginTop:'20px', paddingLeft: '0px'}} /> */}
            <hr style={{color: '#ffbb2a', height: '', marginTop: '30px',marginBottom: '10px'}} />

            <img width="700px" style={{margin: 'auto'}} src="asc.png"/>

            <div className="flex" style={{gap: '40px', marginTop: '40px'}}>
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                  MODULE 1: MASTER THE AFFILIATE UNDERWORLD
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>The Real Reason 99% of People in Affiliate Marketing Never Make Big Money: </strong>
                      There is a psychological process to understanding why most people fail in network marketing, and once you understand it you will really know how to motivate properly.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Discern a Good Affiliate Marketing Company from a Bad One: </strong>How to properly evaluate companies that will last the test of time and ones that will not be around very long.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>The Affiliate Marketing Myths That Are Not Working Anymore: </strong>
                      Identifying all of the "old world' ideas about network marketing that simply put, are not working in the information age anymore.  
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>The Affiliate Marketing Truths That Must Be Known to Get Ahead: </strong>
                      Everything you need to know to about where this industry is going so you will have the foresight and wisdom to scale a lucrative team.  
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Sound like an Expert Without a Lot of Experience: </strong>
                      How to influence people with simple facts and knowledge about Affiliate marketing that the average person would not be aware of. 
                    </p>
                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-1.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'Becoming a Affiliate Marketing Legend' with Ray Higdon
                      </h2>

                    </div>
                </div>



            </div>
            <div className="flex bg-style" style={{flexDirection: 'row-reverse', gap: '40px', marginTop: '100px'}}>
              <div className="flex">
                <div className="flex vert" style={{minWidth: '50%'}}>
                  <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                  MODULE 2:
                  REPROGRAMMING THE SELF IMAGE
                  </h1>
                  <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                      <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                        <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Perceiving Yourself as a 7 Figure Earner: </strong>
                        There is a psychological process to understanding why most people fail in network marketing, and once you understand it you will really know how to motivate properly.
                      </p>
                      <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                        <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Growth Hacking Strategies with the 'Self Image Shifter':  </strong>
                        How to properly evaluate companies that will last the test of time and ones that will not be around very long.
                      </p>
                      <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                        <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Identifying Your Teams Core Values with the Commitment Checklist: </strong>
                        Identifying all of the "old world' ideas about network marketing that simply put, are not working in the information age anymore.  
                      </p>
                      <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                        <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Implementing Daily Exercises to Increase Your Expectations for Yourself: </strong>
                        How to apply these exercises into a daily routine that is measurable so you can track how your perception of your self has changed over time. 
                      </p>
                      
                  </div>
                </div>
                <div className="flex vert">

                    <img src="asc-2.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video2.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      '7 Figure Mindset Mastery' with Clift Braun
                      </h2>
                      <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                      
                    </div>
                </div>
              </div>
            </div>
            <div className="flex" style={{gap: '40px', marginTop: '120px'}}>
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                MODULE  3:
                THE GAMEPLAN ASSESSMENT
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Every Question Someone New To Your Team Should Get Answered: </strong>
                      There is a psychological process to understanding why most people fail in network marketing, and once you understand it you will really know how to motivate properly.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>The 7 Figure Launch Strategy to Earn Fast and Sustainably: </strong>
                      How to properly evaluate companies that will last the test of time and ones that will not be around very long.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Assess the Amount of Time You Should Delegate with Each New Enrollment: </strong>
                      Rather than playing the guessing game, use the assessment to identify exactly who is worth investing into quickly. 
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>The Affiliate Marketing Truths That Must Be Known to Get Ahead: </strong>
                      Ascended affiliate marketers are big earners, meaning you need to have an understanding of tax advantages, write-offs and incorporating your network marketing business so that you can take full advantage of being a business owner.  
                    </p>
                    
                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-1.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video3.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'Training for Momentum' with Jared & Sharaya Maples
                      </h2>
                       <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                    </div>
                </div>



            </div>
            <div className="flex bg-style" style={{flexDirection: 'row-reverse', gap: '40px', marginTop: '100px'}}>
            <div className="flex">
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                MODULE  4:
                STORY SEQUENCING
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Create the Perfect Affiliate Marketing Narrative: </strong>
                      There is a psychological process to understanding why most people fail in network marketing, and once you understand it you will really know how to motivate properly.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Discern a Good Affiliate Marketing Company from a Bad One: </strong>How to properly evaluate companies that will last the test of time and ones that will not be around very long.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Scripts That Top Earners Use When Telling Their Story That You Can Copy:  </strong>
                      How to use tone, inflection, and pauses to deliver your message in a powerful way. It's not just what you say, it's how you say it. 
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>An Entire Packet to Design Your Custom Story so That You Can Confidently Speak in Front of Thousands. </strong>
                      Growth comes from repetition, the sequencing packet is designed to let your story be broken down into parts so that it is easier to master quickly. 
                    </p>
                    
                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-2.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video4.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'Master Storytelling' with Bob Heilig
                      </h2>
                       <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                    </div>
                </div>

</div>

            </div>
            <div className="flex" style={{gap: '40px', marginTop: '120px'}}>
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                MODULE  5:
                CREATING LIMITLESS LUCRATIVE LEADS
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How To Qualify a Lucrative Lead: </strong>
                      How to define and target your leads for your business with our Perfect Avatar model.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Designing a Limitless List That Is Always Growing: </strong>
                      How to supercharge your list with our Memory Matcher so you can categorize your entire affiliate easily. 
                      </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Our Irresistible Invite Script so Your Leads Always Say "YES!" to Learning More: </strong>
                      Mastering the invitation process no matter who you are talking to or what the situation is.
                    </p>

                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-1.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video5.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'Never Run Out of Prospects on Social Media' with John & Nadya Melton
                      </h2>
                       <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                    </div>
                </div>



            </div>
            <div className="flex bg-style" style={{flexDirection: 'row-reverse', gap: '40px', marginTop: '100px'}}>
            <div className="flex">
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                MODULE  6:
                CREATING ENDLESS ENROLLMENTS
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Truly Create Endless Enrollments-Implementing Our Simple Enrolling Framework to Become a Recruiting Machine</strong>
                      <br/>How to think like an affiliate marketing pro when it comes to sales and understand how to take advantage of a MASSIVE opportunity because millions upon millions of new people are joining network marketing in the next 3-5 years.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Sales Psychology and Mastery-How to Easily Answer Every Question and Objection Your Prospect Has so That They Are Left Ready to Buy </strong>
                      <br />-How to handle any objection in a way that does not create animosity but actually makes them feel thankful they asked you.
                      <br />-Scripts that top Affiliate Marketers have used to take concerns to confidence, and turn skeptics into superstars.
                        -How to identify when someone is ready to be closed so you don’t have to play the guessing game.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Confident Closing-How to Subtly Yet Effectively Guide the Prospect to the Sale</strong>
                      <br />The words you should NEVER USE when closing that can kill the sale.
                      <br />-How to use a very simple set of closing questions that can be used no matter who you are talking to.
                      -How to convey a demeanor of confidence so that it seems as though not joining your affiliate marketing business would be weird.
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Create a Follow Up Calendar so Everyday You Stay Busy</strong>
                      <br />-What to say when someone says no but still may be interested eventually.
                      <br />-All of the information needed so that when you do follow up with a lead, you have everything you need to lock in that sale.
                      -How to use my simple Follow Up calendar so that you will never leave money on the table.
                    </p>
                    
                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-2.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video6.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'How to Enroll People on Social Media' with Tanya Aliza
                      </h2>
                       <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                    </div>
                </div>
</div>


            </div>
            <div className="flex" style={{gap: '40px', marginTop: '120px'}}>
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                MODULE  7:
                ELECTRIFYING EVENTS
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>The Electrifying Event Framework: </strong>
                      How to Scale a Living Room Event of Three People and Scale It to Rooms of ThousandsHow to Properly Promote An Event So It Is Filled with Qualified Buyers
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Keep the Momentum Going: </strong>
                      The point of having an event is to have another event after. This is where you will learn the right way and the wrong way to get the buzz going about your event. 
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Create an Engaged Energy at Your Event Where All of Your Team Knows How To Conduct Themselves So That the Leads Enjoy a Safe and Exciting Atmosphere: </strong>
                      Learn how top earners use live events as a very precise and structured way of creating large enrollments time after time. 
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Closing an Event-How to Make Sure That the Leads Sign up After the Meeting and No One Gets Left Behind: </strong>
                      Word for word what to say at live events so the meeting after the meeting is filled with results. 
                    </p>
                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-1.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video7.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'How to Build a Tribe on Facebook' with Frazer Brookes
                      </h2>
                       <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                    </div>
                </div>



            </div>
            <div className="flex bg-style" style={{flexDirection: 'row-reverse', gap: '40px', marginTop: '100px'}}>
            <div className="flex">
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                MODULE  8:
                THE GAMEPLAN INTERVIEW
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Properly Conduct an Interview With New Enrollments In Your Business</strong>
                      <br/>This advanced strategy uses everything from prior modules to build momentum, build your email list, and attract top-tier promotional partners to you so that you can reach the 6 or 7-figure sales mark, and generate thousands of leads in a 1 week period. </p>
                      
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>Simple Metrics for Evaluating Which New Enrollments Have Leadership Potential and Which One's Will Not Be as Serious </strong>
                      <br/>This is designed so that you can follow the 80/20 rule. Spending 80% of your time with the top 20% of your organization...while ensuring the 80% are retained in your organization. 
                      </p>
                      <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Use Our Simple Profile Template to Keep Track of All the New Enrollments in Your Business so That Your Leadership Abilities Will Scale</strong>
                      <br/>When you have a growing team, its about gathering data and measuring growth through each leader. This is when we dive into how to maintain sustainable momentum through our profile. 
                      </p>
                      
                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-2.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video8.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'How to Sort the Perfect Leads' with Todd Falcone
                      </h2>
                       <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                    </div>
                </div>

</div>

            </div>
            <div className="flex" style={{gap: '40px', marginTop: '120px'}}>
              <div className="flex vert" style={{minWidth: '50%'}}>
                <h1 style={{fontSize: '38px', fontFamily: 'Gotham Book Bold', marginBottom: '37px', textAlign: 'center'}}>
                MODULE  9:
                SYSTEMATIC DUPLICATION
                </h1>
                <div className="flex vert"  style={{fontFamily: 'Gotham', textAlign: 'left', gap: '20px', lineHeight:''}}>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>The Weekly Routine Top Earners Use to Create Predictable Income No Matter What Is Happening in the Industry: </strong>
                      In this module, we walk you through the exact process the top earners use to make sure their large teams consistently grow month after month. This is about carefully reviewing back office data.                     </p>
                   
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>​Simple Leadership Strategies That Make It Easier to Trust in Your Organizations Ability to Grow With or Without You:  </strong>
                      How to dial in your communication so nothing gets lost from leader to leader. We explain how you can keep the main message the main message so a powerful culture can be maintained.
                    
                    </p>
                    <p style={{fontSize: '21px', alignmentBaseline: 'baseline',lineHeight: '26px'}}>
                      <FontAwesomeIcon size="" style={{marginRight: '12px',paddingTop: '15px',marginTop: '',marginBottom: '-3px',fontSize: '30px'}} icon={faCheck} /><strong>How to Take All of the Information in This Program and Duplicate It Through Your Entire Organization so That There Is Structure and Scalability: </strong>
                      This is where we hold your hand and walk you through how all of these pieces connect so that you have one system you can rely on in your affiliate marketing business.
                       </p>

                </div>
              </div>
                <div className="flex vert">

                    <img src="asc-1.png" ></img>
                    <div className="flex vert">
                      <h2 style={{fontSize:'28px', fontFamily:'Gotham Book Bold',marginTop: '50px', marginBottom: '15px'}}>BONUS VIDEO: </h2>
                      <div style={{borderRadius:'50%', display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img className="circle-image" src="bonus-video9.jpg" />
                      </div>
                      <h2 style={{fontSize:'26px', fontFamily:'Gotham Book Bold', marginTop: '25px'}}>
                      'Duplicating Leaders' with Rob Sperry
                      </h2>
                       <div >
                        <button style={{background: 'linear-gradient(-8deg, #ffbb2a 10%, #ff7000 74%)', padding: '20px 50px', borderRadius: '16px',fontWeight: '900',fontFamily: 'Gotham', color: 'white', fontSize: '21px',marginTop:'35px'}}>

                        Get Ascension for FREE Now!
                        </button>
                      </div>
                    </div>
                </div>



            </div>


          </div>
        </div>
      </div>
      <div style={{marginTop: '120px'}}>
              <h1 style={{fontSize: '52px'}}>Here’s what people have to say</h1>
              <div style={{ display: 'flex', gap: '30px', minHeight: '', marginTop: '50px', justifyContent: 'center' }}>
            <div className="square-alt flex vert" style={{minHeight: '500px',minWidth: '350px', maxWidth: '220px'}}>
              <img src="testimonial.jpg" width="220" style={{ marginBottom: '28px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />
              <p style={{fontFamily: 'Gotham Book'}}>
                <strong>"What separates Darik from most trainer's is that he has actually done it. </strong>
                He has lived it. He knows it. I could not give a higher recommendation. Anything he touches turns to gold."
              </p>
              <div style={{marginTop: '10px'}}>

                <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}><strong>Rob Sperry</strong></p>
                <p style={{ textAlign: 'center' }}>
                  Author of "The Game of Networking"
                </p>
              </div>
            </div>
            <div className="square-alt flex vert" style={{minHeight: '500px', minWidth: '350px', padding: '20px 30px 48px',maxWidth: '220px' }}>
              <img src="testimonial2.jpg" width="220" style={{ marginBottom: '28px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', }} />
              <p style={{fontFamily: 'Gotham Book'}}>
                "Darik simply put is amazing. His strategies and frameworks are to the point and INCREDIBLY effective. I believe every Network Marker needs his training!"
              </p>
              <div style={{marginTop: '5px'}}>

              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}><strong>Tanya Aliza</strong></p>
              <p style={{ textAlign: 'center' }}>
                7 Figure Success Coach and Network Marketing Consultant
              </p>
              </div>
            </div>
            <div className="square-alt flex vert" style={{minHeight: '500px',minWidth: '350px', maxWidth: '220px'}}>
              <img src="testimonial3.jpg" width="220" style={{ marginBottom: '28px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />
              <p style={{fontFamily: 'Gotham Book'}}>
                “As top earner's in our company. It is safe to say we LOVE Darik's content and purpose driven value. He spends time making sure his training is exactly what people in network marketing NEED to be implementing to get results NOW!”
              </p>
              <div style={{marginTop: '5px'}}>

              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}>
                <strong>
                  Jared and Sharaya Maples
                </strong>
              </p>
              <p style={{ textAlign: 'center' }}>
                Network Marketing top earners and investors.
              </p>
              </div>
            </div>
          
          </div>
              <div style={{ display: 'flex', gap: '30px', minHeight: '', marginTop: '50px', justifyContent: 'center' }}>
          
              <div className="square-alt flex vert" style={{minHeight: '500px',minWidth: '350px', maxWidth: '220px'}}>
              <img src="case_studies1.jpg" width="220" style={{ marginBottom: '30px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />
              <p style={{fontFamily: 'Gotham Book'}}>
                "<strong>I implemented Darik's messenger scripts into my entire companies' sales process. </strong>
                The result was outstanding. Our company has done over $20 million in sales and I owe much of that to what I have learned from Darik."
                
              </p>
              <div style={{marginTop: '10px'}}>

              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}><strong>Zain Jan</strong></p>
              <p style={{ textAlign: 'center' }}>
                CEO of Better Earth
              </p>
              </div>
            </div>
            <div className="square-alt flex vert" style={{minHeight: '500px', minWidth: '350px', maxWidth: '220px',padding: '20px 30px 48px' }}>
              <img src="case_studies2.png" width="220" style={{ marginBottom: '30px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', }} />
              <p style={{fontFamily: 'Gotham Book'}}>
              "The strategies in these messenger scripts allowed me to close 3 high ticket clients within my first 30 days of implementing. I highly recommend them to anyone in the network marketing space!"    
              </p>
              <div style={{marginTop: '20px'}}>

              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}><strong>Kenneth Milosovic</strong></p>
              <p style={{ textAlign: 'center' }}>
              CEO at THe Climb Corporation
              </p>
              </div>
            </div>
            <div className="square-alt flex vert" style={{minHeight: '500px',minWidth: '350px', maxWidth: '220px'}}>
              <img src="case_studies3.jpg" width="220" style={{ marginBottom: '30px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />
              <p style={{fontFamily: 'Gotham Book'}}>
              "After using these messenger scripts I enrolled 5 people within the first two days of implementing them. Simply put, these WORK! Their easy, effective and get the job done!"
              </p>
              <div style={{marginTop: '15px'}}>

              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}>
                <strong>
                  Josh Miller
                </strong>
              </p>
              <p style={{ textAlign: 'center' }}>
              Chief Operating Officer at Invigor8
              </p>
              </div>
            </div>
              </div>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop: '50px' }}>
        <h4 style={{ color: 'rgb(7,91,183)', fontSize: '48px', fontWeight: '700', marginTop: '50px' }}>SO, JUST TO SUM IT ALL UP...</h4>
        <p style={{ marginBottom: '40px', fontSize: '32px' }}>Here's What's You're About To Get: </p>
        <hr style={{ marginBottom: '30px', color: 'inherit', width: '100%' }} />
        <div className="ascension-table" >
          <div className="ascension-cover" style={{}}>
            <img height={'161px'} style={{ maxHeight: '160px' }} width="300px" src="/ascension-cover.png" />
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              FULL ACCESS to The 9 Core Modules of Ascension
            </strong>
            </h1>
            <p>
              (How to use our proven system to scale your network marketing business no matter where you're at so you can create predictable cash flow month after month.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              New 12 BONUS Modules! Secret Interviews from the Best Network Marketers in the World <span style={{ fontSize: '18px' }}>(Value: $12,000)</span>
            </strong>
            </h1>
            <p>
              (I interviewed some of the most successful network marketers in the industry to discover the secrets they used to create the legacy incomes they have now!)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              FREE Sale's Scripts, Prospecting Scripts, Objections Scripts, Closing Scripts <span style={{ fontSize: '18px' }}>(Value: $297 per year)</span>
            </strong>
            </h1>
            <p>
              (I give you the word for word scripts that myself and my organization used to generate over $25 million in revenue. These scripts have worked time and time again.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              My Magnetic Messenger Scripts <span style={{ fontSize: '18px' }}>(Value: PRICELESS)</span>
            </strong>
            </h1>
            <p>
              (13 pages of scripts designed to master prospecting on Facebook messenger, Instagram messenger, and text messaging.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              The Gameplan Assessment Program Packet! (Value: <span style={{ color: 'rgb(190, 11, 13)', fontSize: '18px' }}> $97)</span>
            </strong>
            </h1>
            <p>
              (This is the exact packet we created for every new person who joins our organization to ensure that the whole team duplicates.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              The Story Sequencing Packet! (Value: <span style={{ color: 'rgb(190, 11, 13)', fontSize: '18px' }}> $97)</span>
            </strong>
            </h1>
            <p>
              (This packet teaches you exactly how to frame your story so that you have the most powerful network marketing narrative you can use to influence thousands on and off the stage!)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              BONUS <span style={{ color: 'rgb(190, 11, 13)', fontSize: '18px' }}>($97)</span>
            </strong>
            </h1>
            <p>
              (You get private videos I used to train my organization that were originally designed for only them that I am now releasing to all of you at no cost!)
            </p>
          </div>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px', color: 'rgb(39, 39, 39)' }}>YES! Darik Count Me In!</h1>

        <EnrollButton color={'rgb(39, 39, 39)'} showSaving={false}></EnrollButton>

        <a style={{ marginTop: '30px', marginBottom: '50px', color: 'rgb(65,139,189)' }} className="link">Save $194 -- Pay in Full</a>

        <div style={{ display: 'flex', gap: '15px', padding: '15px', flexDirection: 'column',  justifyContent: 'center',textAlign: 'center', border: '1px solid black', minWidth: '65%' }}>
          <p style={{ fontSize: '20px', }}>NEED HELP ORDERING OR HAVE QUESTIONS?</p>
          <p>Please contact us with questions at<br />
            info@darikalexander.com</p>
        </div>
      </div> */}
{/* 
      <div className="container">
        <div className="containerInner">
          <div className='flex' style={{ alignItems: 'center', gap: '50px', marginTop: '100px', marginBottom: '20px' }}>
            <div style={{ maxWidth: '60%', color: '#2e2e2e', marginTop: '70px', marginBottom: '20px', textAlign: 'left' }}>
              <h4 style={{ textAlign: 'center', color: 'rgb(7, 91, 183)', fontSize: '24px', marginBottom: '20px' }}>WHY YOU NEED MORE THAN JUST ENROLLMENTS...</h4>
              So even if you are enrolling tons of people into your business, if you don't have a <strong className="highlight">turnkey</strong> system in place that everyone can use....
              <br /><br />
              AND that they can <strong className="highlight">"Leverage"</strong> to become leaders on your team...
              <br /><br />
              Then you won't be able to grow long-term...
              <br /><br />
              This means going beyond making you the star of the show because let's face it...there is only so much you can do.
              <br /><br />
              But using our proven growth strategies to help your teams become the stars all while giving you more time freedom and leverage to do the things you LOVE to do not what you HAVE to do.
              <br /><br />
              Only then are you able to join the ranks of "top earners" who are taking advantage of the #1 network marketing system in the world, to build their lucrative empires...
              <br /><br />
              This is about more than just building your team so you can reach the next rank.
              <br /><br />
              This is about creating a <strong className="highlight">BUSINESS</strong> that adds massive value to the world and has the depth and sustainability to provide a great lifestyle for you and your family for years... or even decades to come.
            </div>
            <img style={{ width: '505px', minHeight: '290px' }} height={'200px'} src="d-green.png"></img>
          </div>
        </div>
      </div>

      <div className="container" style={{ backgroundColor: 'rgb(7, 91, 183)', height: '100px', display: 'flex', alignItems: 'center', minWidth: '100%', marginTop: '30px' }}>
        <div className="containerInner" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', color: 'white', fontSize: '22px' }}>
          "This is about more than you reaching the next rank on your team.
          This is about building a REAL business."<br />
          - Darik Alexander
        </div>
      </div>

      <div className="container">
        <div className="containerInner" style={{ marginTop: '70px', marginBottom: '120px', color: '#2e2e2e' }}>
          <h1 style={{ textAlign: 'center', fontSize: '24px', margin: '35px 0', color: 'rgb(7, 91, 183)' }}>MANY PEOPLE THINK THAT THE ANSWER IS SIMPLY BUILDING ALL ONLINE.</h1>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', textAlign:'left' }}>
            <p>
              However, the simple truth is that it's really hard to build a sustainable business with just 1 strategy or the other.
              <br /><br />
              In fact, the foundation of long-term success comes from building by using both <strong className="highlight">offline and online strategies</strong>.
              <br /><br />
              This means that you master both worlds while increasing your 'intrinsic value'.
              <br /><br />
              Positioning yourself this way in your market opens up a <strong className="highlight">world of opportunity</strong>, and improves the efficiency of the organization from front to back.
            </p>

            <p>
              The other "key to success" that most people aren't talking about is that you need every person on your team to be able to accurately share the company story without diluting it with their own opinions.
              <br /><br />
              In fact, the goal of someone new should be getting their prospects just to say 'yes' about learning more. Not even closing. That's it.
              <br /><br />
              However, when you have a powerful story that can explain the company no matter who is sharing it that is <strong className="highlight">proven, results begin to scale twice as fast</strong>.
              <br /><br />
              This strategy allows teams to build their organization with much more consistency and predictability because they know that everyone is sharing the exact same narrative that <strong className="highlight">works</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ background: "url('d-teach.png')", backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'cover', padding: '50px 0' }}>
        <div className="containerInner" >
          <div style={{ padding: '20px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.407843)', maxWidth: '50%' }} className="">
            <h4 style={{ fontSize: '28px', marginBottom: '10px' }}>AS A LEADER, YOU MUST PROTECT YOUR TEAM'S BELIEF...</h4>

            And that belief comes from experiencing success... one step at a time.
            <br /><br />
            It starts with a proven system.
            <br /><br />
            And grows, step-by-step, as you do "high leverage activities" that give you the biggest bang for your buck.
            <br /><br />
            <h4 style={{ textDecoration: 'italic', fontSize: '24px' }}><i>It's not just about getting the most out of your others.</i></h4>
            <br />
            It's also about making the best possible use of your time and energy.
            <br /><br />
            And NEVER before has there been a complete, A-Z system available for nettwork marketers like you to accomplish flexibilty and peace of mind when building your business!
            <br /><br />
            Using proven results that have been tested time and time again from many successful network marketers in the space who have predictable cash coming in again and again.
            <br /><br />
            You can have it all.
            <p>

            </p>
          </div>
        </div>
      </div> */}
{/* 
      <div className="container" style={{ backgroundColor: 'rgb(7, 91, 183)', margin: '50px 0', marginBottom: '75px', height: '75px', display: 'flex', alignItems: 'center', minWidth: '100%' }}>
        <div className="containerInner" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', color: 'white', fontSize: '22px' }}>
          <p style={{ fontSize: '24px', }}>HERE'S WHAT IT ALL COMES DOWN TO...</p>
        </div>
      </div>

      <div className="container">
        <div className="containerInner">
          <div className="flex " style={{ justifyContent: 'space-between' }}>
            <p style={{ width: '65%', gap: '50px', textAlign:'left' }}>
              Having a proven system in place to both build your "Leadership Leverage"  so you bring in enrollments, while automatically using a proven system that gives every new person who joins your team exactly what they need to know so they can create momentum quickly. Not to much, not to less.
              <br /><br />
              See, once you know the specific, high leverage activities you MUST do based on where you are right now...
              <h4 style={{ fontSize: '18px', color: 'rgb(7, 91, 183)', margin: '20px 0', fontWeight: 'bold' }} >Everything changes.</h4>
              You're building a real business that provides the lifestyle and freedom you desire…
              <br /><br />
              You're earning the income you want…
              <br /><br />
              And you're getting your message out there and creating the impact you want in the world.
              <br /><br />
              Other leaders in your space (maybe even people you've held up as your heroes in the past) are reaching out to YOU on a regular basis... wanting to work with you.
              <br /><br />
              Prospects line up to join your team faster and you make more money... (<i style={{ color: 'black', }}>without changing from company to company</i>)...
              <br /><br />
              And high-level partnerships, speaking, and promotional opportunities open up to you... (<i style={{ color: 'black', }}>that you would NEVER get access to without this kind of credibility, influence, and "Leadership Leverage"</i>).
            </p>
            <div className="flex vert" style={{ gap: '20px' }}>
              <img src="darik-teach.jpg" width="350px" height="auto" />
              <img src="darik-team.jpg" width="350px" height="auto" />
            </div>
          </div>


        </div>
      </div>
      <div className="container" style={{ backgroundImage: "url('black-geo.png')", paddingBottom: '50px', marginTop: '40px' }}>
        <div className="containerInner">
          <div style={{ display: 'flex', minWidth: '100%', flexDirection: 'column', marginTop: '' }}>
            <div style={{ color: 'white', backgroundColor: 'rgba(7, 91, 183, 0.741176)', minWidth: '75%', margin: 'auto', marginTop: '50px', marginBottom: '20px', display: 'flex', fontSize: '28px', padding: '20px' }}>
              <p style={{ margin: 'auto' }}>THE SINGLE BIGGEST MISTAKE<br />
                "NETWORK MARKETERS" MAKE</p>
            </div>
            <div style={{ padding: '20px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.407843)', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }} className="">
              <h4 style={{ textDecoration: 'italic', fontSize: '24px' }}>Is Building Without a Proven System!</h4>
              If you're a "beginner" or "intermediate network marketer, then the WORST thing you can do is to enroll tons of qualified leads without a giving them the tools they need to stay in your company…
              <br /><br />
              The simple truth is that most people who join your team will not be self motivated to do what is necessary to succeed.
              <br /><br />
              The last thing people want in their organization is a poor system where people are quitting just as fast as they are joining. This can create a ton of stress while you are building.
              <br /><br />
              This is why it is so important to have a very simple yet effective system in place to ensure that when your new members do face adversity, there is a set of procedures done to help them push towards success.
              <br /><br />
              And it’s only by serving people in this way that you can create an effective framework for your organization that will actually get results for your team.
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '50px', }}>
        <div className="containerInner">
          <div className='flex' style={{ gap: '30px', alignItems: 'center' }}>

            <div style={{ maxWidth: '100%', color: '#2e2e2e',  textAlign:'left'}}>
              <h4 style={{ textAlign: 'center', color: 'rgb(7, 91, 183)', fontSize: '24px', paddingTop: '75px', marginBottom: '20px'}}>WHAT IF YOU COULD START WITH YOUR "HIGHEST LEVERAGE MOVE" TODAY...</h4>
              Whether you're just starting out or an experienced network marketer...
              <br /><br />
              It's important to start with a strategy that will get you the <strong className="highlight">best results in the shortest amount of time...</strong>
              <br /><br />
              While at the same time building a foundation for your future success!
              <br /><br />
              What if you could wake up every day and be 100% clear and confident that what you're focusing on today will actually build your business!?
              <br /><br />
              What if you could KNOW that you're going to get more rank ups... And more leads and sales...
              <br /><br />
              ... Because everything you're doing is in alignment with a PROVEN formula!?
            </div>

            <img style={{ maxWidth: '480px', minHeight: '300px', marginTop: '50px' }} src="guy.png"></img>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '50px', marginBottom: '75px' }}>
        <div className="containerInner">
          <img />
          <div>
            <h4 style={{ textAlign: 'center', color: 'rgb(7, 91, 183)', fontSize: '24px', marginTop: '20px', marginBottom: '20px' }}>
              AND WHEN YOU DO THIS, YOU HAVE:
            </h4>
            <p>
              <ul style={{ listStyleType:'disc', display: 'flex', flexDirection: 'column', gap: '5px', textAlign:'left' }}>
                <li>
                  <b>A REAL, automated, and leveraged business</b> that has the ability to take care of you and your family for years... or even decades to come.
                </li>
                <li>

                  <b>A proven roadmap to success and rapid growth</b> that's tailored specifically for where you are TODAY.
                </li>
                <li>
                  <b>The lifestyle and impact you want</b>, with more time to cross off items from your bucket list and enjoy the experiences that make life worthwhile.
                </li>
                <li>
                  <b>The security of knowing you have an asset that runs like a well-oiled machine</b>, and can be duplicated and grow as fast as you want...
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ backgroundColor: 'rgb(7, 91, 183)', margin: '40px 0', height: '75px', display: 'flex', alignItems: 'center', minWidth: '100%' }}>
        <div className="containerInner" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', color: 'white', fontSize: '22px' }}>
          <p style={{ fontSize: '24px', }}>ABOUT DARIK ALEXANDER
          </p>
        </div>
      </div>

      <div className="container">
        <div className="containerInner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '44px', textAlign:'left', marginTop: '50px' }}>
            <img width="440px" src="/group1.png" />
            <p>
              Darik is highly profitable entrepreneur and trainer. As CEO of Ignite Programs, he has worked with some of the top entrepreneurs in the world (including people like Gary Vaynerchuk, Darren Hardy, and Les Brown) and became a multiple six figure earner at the age of 20, generating millions of dollars in revenue using offline and online marketing strategies.
              <br /><br />
              His training programs have helped students attract thousands of qualified leads, and sales through live events, online trainings, and coaching.
              <br /><br />
              But it wasn’t always this way for him. He was a broke college student 50k in debt… and putting in long hours each day only to make $9.00 an hour at a concession stand. When he finally found a job working at a call center, he quickly learned he was meant for entrepreneurship when he received an 80 cent raise after being the top producer in the entire call center for 6 months straight. This lesson taught Darik that he needed to find a way out of the rat race now or he would be stuck in it forever.
              <br /><br />
              This is where he started his business, and changed his life forever. Today, Darik has earned hundreds of thousands with a thriving business, amazing clients, and a dedicated team… and he’s committed to helping entrepreneurs build their businesses using his simple, proven, heart-centered strategies.
            </p>
          </div>
        </div>
      </div> */}
          {/* <div style={{ backgroundColor: 'rgb(7, 91, 183)', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', textAlign: 'center', color: 'white', minHeight: '75px', alignContent: 'center', maxWidth: '775px', margin: 'auto', marginTop: '50px', fontSize: '24px' }}>
            <p>EXPERT ENDORSEMENTS</p>
          </div>
          <div style={{ display: 'flex', gap: '50px', marginTop: '40px', alignItems:'center' }}>
            <img className="bob-point-img" width="550px" src="/bob-point.jpg" />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
              <p style={{ fontSize: '24px' }}>
                “I’ve known Darik for a long time. This man has a marvelous mind. When he offers you help, TAKE IT! Go for it! I’ve been in the business for over 53 years. This man impresses me.”
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h6 style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '28px' }}>Bob Proctor</h6>
                <p style={{ fontSize: '25px' }}>Best selling author, speaker, coach and pioneer of "The Secret" Large Call to Action Headline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: '50px 0' }} />
      <div className="container">
        <div className="containerInner">
          <div style={{ display: 'flex', gap: '30px', minHeight: '', marginTop: '50px', justifyContent: 'center' }}>
            <div className="square" style={{minWidth: '350px', maxWidth: '220px'}}>
              <img src="testimonial.jpg" width="120" style={{ marginBottom: '15px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />
              <p>
                <strong>"What separates Darik from most trainer's is that he has actually done it.</strong>
                He has lived it. He knows it. I could not give a higher recommendation. Anything he touches turns to gold."
              </p>
              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}><strong>Rob Sperry</strong></p>
              <p style={{ textAlign: 'center' }}>
                Author of "The Game of Networking"
              </p>
            </div>
            <div className="square" style={{ minWidth: '350px', maxWidth: '220px',padding: '20px 30px 48px' }}>
              <img src="testimonial2.jpg" width="120" style={{ marginBottom: '15px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', }} />
              <p>
                "Darik simply put is amazing. His strategies and frameworks are to the point and INCREDIBLY effective. I believe every Network Marker needs his training!"
              </p>
              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}><strong>Tanya Aliza</strong></p>
              <p style={{ textAlign: 'center' }}>
                7 Figure Success Coach and Network Marketing Consultant
              </p>
            </div>
            <div className="square" style={{minWidth: '350px', maxWidth: '220px'}}>
              <img src="testimonial3.jpg" width="120" style={{ marginBottom: '15px',borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />
              <p>
                “As top earner's in our company. It is safe to say we LOVE Darik's content and purpose driven value. He spends time making sure his training is exactly what people in network marketing NEED to be implementing to get results NOW!”
              </p>
              <p style={{ marginTop: '20px', textAlign: 'center',fontFamily: 'Gotham' }}>
                <strong>
                  Jared and Sharaya Maples
                </strong>
              </p>
              <p style={{ textAlign: 'center' }}>
                Network Marketing top earners and investors.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <hr style={{ margin: '50px 0' }} /> */}

      {/* <Testimonial></Testimonial> */}
{/* 
      <hr style={{ margin: '50px 0' }} />

      <div style={{ color: 'white', padding: '25px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(6, 73, 146, 0.88)' }}>
        <img width="370" src="ascension-cover.png" style={{ marginBottom: '25px' }} />
        <p style={{ fontSize: '22px', maxWidth: '1130px' }}>I've spent years developing and perfecting the most complete, proven system for scaling your network marketing business to ensure you get consistent results that create predictable cash flow in your business.</p>
      </div>

      <h6 style={{ fontSize: '28px', marginTop: '50px', marginBottom: '20px', textAlign: 'center' }}>Ascension Is Split Into <strong>9 Modules</strong> To Help You Duplicate Your Network <br /> Marketing Business NOW...</h6>

      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', backgroundColor: 'rgb(7, 91, 183)', color: 'white' }} className="blue-bg">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 1: MASTER THE MLM UNDERWORLD
              </h1>
              <img width="250" src="/module1-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px', display: 'flex', flexDirection: 'column' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: Know Which Companies to Join
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module1-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <h4 style={{ textAlign: 'center', color: 'rgb(7, 91, 183)', }}>
                AND WHEN YOU DO THIS, YOU HAVE:
              </h4>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham' }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      The Real Reason 99% of People in Network Marketing Never Make Big Money
                      <br />
                    </b>
                    There is a psychological process to understanding why most people fail in network marketing and once you understand it you will really know how to motivate properly.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Discern a Good Network Marketing Company from a Bad One
                      <br />
                    </b>
                    How to properly evaluate companies that will last the test of time and ones that will not be around very long.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      The Network Marketing Myths That Are Not Working Anymore
                      <br />
                    </b>
                    Identifying all of the "old world' ideas about network marketing that simply put are not working in the information age anymore.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      The Network Marketing Truths That Must Be Known to Get Ahead
                      <br />
                    </b>
                    Everything you need to know to about where this industry is going so you will have the foresight and wisdom to scale a lucrative team.
                  </li>
                  <li>
                    <b>
                    </b>
                    How to Sound like an Expert with out a Lot of Experience
                    How to influence people with simple facts and knowledge about network marketing that the average person would not be aware of.
                  </li>
                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'Becoming a Network Marketing Legend' with Ray Higdon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', backgroundColor: 'rgb(240, 240, 240)', color: 'black' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 2:
                REPROGRAMMING THE SELF IMAGE
              </h1>
              <img width="250" src="/module2-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: Become Worthy of 7 Figures
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module2-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Perceiving Yourself as a 7 Figure Earner
                      <br />
                    </b>
                    Identifying the real reason why your goals have not been met yet to the level you desire and how to create practical steps that will simplify the process of achieving them.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Growth Hacking Strategies with the 'Self Image Shifter'
                      <br />
                    </b>
                    Walking you through a simple series of exercises to do in the morning and at night that when done consistently...will have a dramatic change in your mindset.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Identifying Your Teams Core Values with the Commitment Checklist
                      <br />
                    </b>
                    The ultimate checklist that every successful network marketer commits to. Simply put this checklist is what the top 1% of network marketers do on a daily basis to get miraculous results.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Implementing Daily Exercises to Increase Your Expectations for Yourself
                      <br />
                    </b>
                    How to apply these exercises into a daily routine that is measurable so you can track how your perception of your self has changed over time.
                  </li>
                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video2.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'7 Figure Mindset Mastery' with Clift Braun</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', backgroundColor: 'rgb(7, 91, 183)', color: 'white' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 3: <br />
                THE GAMEPLAN ASSESSMENT
              </h1>
              <img width="250" src="/module3-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: The One Thing Every New Person Must Do
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module3-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Every Question Someone Knew to Your Team Should Answer
                      <br />
                    </b>
                    If you ever wondered what someone who joins your team should know and what they shouldn't know. This answers it. The Assessment is everything your new enrollment should be aware of without getting analysis paralysis to make sure they take action.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      The 7 Figure Launch Strategy to Earn Fast and Sustainably
                      <br />
                    </b>
                    How we simplified the entire building process with our basic blueprint that can be implemented no matter what network marketing company you are apart of to create momentum immediately after someone enrolls.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Asses the Level of Time You Should Delegate with Each New Enrollment
                      <br />
                    </b>
                    Rather then playing the guessing game, use the assessment to identify exactly who is worth investing into quickly.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Financial Planning and Tax Security
                      <br />
                    </b>
                    Ascended network marketers are big earners, meaning you need to have an understanding of tax advantages, write offs and incorporating your network marketing business so that you can take full advantage of being a business owner.
                  </li>
                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video3.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'Training for Momentum' with Jared & Sharaya Maples</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', backgroundColor: 'rgb(240, 240, 240)', color: 'black' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 4: <br />
                STORY SEQUENCING
              </h1>
              <img width="250" src="/module4-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: The Perfect Network Marketing Narrative
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module4-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Create the Perfect Network Marketing Narrative
                      <br />
                    </b>
                    How to sequence your own personal story in a way that will make people magnetized to learning more about your product or service while staying true to yourself.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Scripts That Top Earners Use When Telling Their Story That You Can Copy
                      <br />
                    </b>
                    Why reinvent the wheel when we have carefully curated the exact word for word scripts top earners have used when drafting up their story so their prospects become more likely to join their team.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Tips and Growth Hacks When Presenting so Your Audience Becomes More Engaged with Your Message
                      <br />
                    </b>
                    How to use tone, inflection, and pauses to deliver your message in a powerful way. It's not just what you say, it's how you say it.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      An Entire Packet to Design Your Custom Story so That You Can Confidently Speak in Front of Thousands.
                      <br />
                    </b>
                    Growth comes from repetition, the sequencing packet is designed to let your story be broken down into parts so that it is easier to master quickly.
                  </li>
                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video4.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'Master Storytelling' with Bob Heilig</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', backgroundColor: 'rgb(7, 91, 183)', color: 'white' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 5:
                CREATING LIMITLESS LUCRATIVE LEADS
              </h1>
              <img width="250" src="/module5-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: Leave Them Always Saying "YES' to Learning More!
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module5-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Qualify a Lucrative Lead
                      <br />
                    </b>
                    How to define and target your leads for your business with our Perfect Avatar model.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Designing a Limitless List That Is Always Growing
                      <br />
                    </b>
                    -How to handle any objection in a way that does not create animosity but actually makes them feel thankful they asked you.<br />
                    -Scripts that top Network Marketers have used to take concern to confidence and turn skeptics into superstars.<br />
                    -How to identify when someone is ready to be closed so you don’t have to play the guessing game.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Our Irresistible Invite Script so Your Leads Always Say YES! to Learning More
                      <br />
                    </b>
                    Mastering the invitation process no matter who you are talking to or what the situation is.<br />
                    -How to discover your authentic meaning, messaging, and story so that can easily grab people’s attention and appear as an authority.<br />
                    -The step by step process for getting more leads interested through curiosity marketing.<br />
                    -Exactly what to say to a stranger so you can get their contact information in a way where it never feels forced or awkward.
                  </li>
                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video5.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'Never Run Out of Prospects' with John & Nadya Melton</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', backgroundColor: 'rgb(240, 240, 240)', color: 'black' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 6:
                CREATING ENDLESS ENROLLMENTS
              </h1>
              <img width="250" src="/module6-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: The Proper Enrolling Etiquette
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module6-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Truly Create Endless Enrollments-Implementing Our Simple Enrolling Framework to Become a Recruiting Machine
                      <br />
                    </b>
                    How to think like a network marketing pro when it comes to sales and understand how to take advantage of a MASSIVE opportunity because millions upon millions of new people are joining network marketing in the next 3-5 years.

                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Sales Psychology and Mastery-How to Easily Answer Every Question and Objection Your Prospect Has so That They Are Left Ready to Buy
                      <br />
                    </b>
                    -How to handle any objection in a way that does not create animosity but actually makes them feel thankful they asked you.<br />
                    -Scripts that top Network Marketers have used to take concern to confidence and turn skeptics into superstars.<br />
                    -How to identify when someone is ready to be closed so you don’t have to play the guessing game.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Confident Closing-How to Subtly Yet Effectively Guide the Prospect to the Sale
                      <br />
                    </b>
                    The words you should NEVER USE when closing that can kill the sale.<br />
                    -How to use a very simple set of closing questions that can be used no matter who you are talking to.<br />
                    -How to convey a demeanor of confidence so that it seems as though not joining your network marketing business would be weird.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Create a Follow Up Calendar so Everyday You Stay Busy
                      <br />
                    </b>
                    -What to say when someone says no but still may be interested eventually.<br />
                    -All of the information needed so that when you do follow up with a lead, you have everything you need to lock in that sale.<br />
                    -How to use my simple Follow Up calendar so that you will never leave money on the table.
                  </li>
                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video6.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'Social Media Mastery' with Tanya Aliza</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', backgroundColor: 'rgb(7, 91, 183)', color: 'white' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 7:
                ELECTRIFYING EVENTS
              </h1>
              <img width="250" src="/module7-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: The Only Reason to Have an Event
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module7-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      The Electrifying Event Framework-How to Scale a Living Room Event of Three People and Scale It to Rooms of Thousands
                      <br />
                    </b>
                    How to continuously scale live events so that you can 10X enrollments and create some serious momentum.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Properly Promote an Event so It Is Filled with Qualified Buyers
                      <br />
                    </b>
                    The point of having an event is to have another event after. This is where you will learn the right way and the wrong way to get the buz going about your event.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Create an Engaged Energy at Your Event Where All of Your Team Knows How to Conduct Themselves so That the Leads Enjoy a Safe and Exciting Atmosphere
                      <br />
                    </b>
                    Learn how top earners use live events as a very precise and structured way of creating large enrollments time after time.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Closing an Event-How to Make Sure That the Leads Sign up After the Meeting and No One Gets Left Behind
                      <br />
                    </b>
                    Word for word what to say at live events so the meeting after the meeting is filled with results.
                  </li>
                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video7.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'How to Build a Tribe on Facebook' with Frazer Brookes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>
          <div style={{ display: 'flex', gap: '30px', minHeight: '', backgroundColor: 'rgb(240, 240, 240)', color: 'black' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 8:
                THE GAMEPLAN INTERVIEW
              </h1>
              <img width="250" src="/module8-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: Ensuring No One Gets Left Behind
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module8-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Properly Conduct an Interview With New Enrollments In Your Business
                      <br />
                    </b>
                    This advanced strategy uses everything from prior modules to build momentum, build your email list, and attract top-tier promotional partners to you so that you can reach the 6 or 7-figure sales mark and generate thousands of leads in a 1 week period.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Simple Metrics for Evaluating Which New Enrollments Have Leadership Potential and Which One's Will Not Be as Serious
                      <br />
                    </b>
                    This is designed to so that you can follow the 80/20 rule. Spending 80% of your time with the top 20% of your organization...while ensuring the 80% are retained in your organization.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Use Our Simple Profile Template to Keep Track of All the New Enrollments in Your Business so That You Your Leadership Abilities Will Scale
                      <br />
                    </b>
                    When you have a growing team, its about gathering data and measuring growth through each leader. This is when we dive into how to maintain sustainable momentum through our profile.
                  </li>

                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video8.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'How to Sort the Perfect Leads' with Todd Falcone</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginBottom: '100px' }}>
        <div className="containerInner" style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', }}>

          <div style={{ display: 'flex', gap: '30px', minHeight: '', backgroundColor: 'rgb(7, 91, 183)', color: 'white' }} className="blue-bg">
            <div>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px',marginBottom: '10px', fontFamily: 'Gotham' }}>
                MODULE 9:
                SYSTEMATIC DUPLICATION
              </h1>
              <img width="250" src="/module9-1.png" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '20px' }}>
              <i style={{marginBottom: '10px',fontFamily: 'Gotham'}}>
                Section: It Isn't About What Works...It's About What Duplicates
              </i>
              <hr  style={{marginTop: '5px'}}/>
              <img width="250" style={{marginTop: '10px'}} src="/module9-2.png" />
            </div>
            <div style={{ paddingLeft: '30px',marginTop: '15px' }}>
              <p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham', }}>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      The Weekly Routine Top Earners Use to Create Predictable Income No Matter What Is Happening in the Industry
                      <br />
                    </b>
                    In this module, we walk you through the exact process the top earners use to make sure their large teams consistently grow month after month. This is about carefully reviewing back office data.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      Simple Leadership Strategies That Make It Easier to Trust in Your Organizations Ability to Grow with or Without You
                      <br />
                    </b>
                    How to dial in your communication so nothing gets lost from leader to leader. We explain how you can keep the main message the main message so a powerful culture can be maintained.
                  </li>
                  <li style={{ marginBottom: '20px', fontSize: '14px' }}>
                    <b>
                      How to Take All of the Information in This Program and Duplicate It Through Your Entire Organization so That There Is Structure and Scalability
                      <br />
                    </b>
                    This is where we hold your hand and walk you through how all of these pieces connect so that you have one system you can rely on in your network marketing business
                  </li>

                </ul>
              </p>

              <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>BONUS VIDEO: </h1>

              <img className="bonus-video" width="250" src="/bonus-video9.jpg" />

              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>'Duplicating Leaders' with Rob Sperry</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="containerInner" style={{ display: 'flex', flexDirection: 'column', }}>
          <div style={{ backgroundColor: 'rgb(7, 91, 183)', fontSize: '40px', textAlign: 'center', color: 'white', fontWeight: 'bold', maxWidth: '70%', margin: 'auto', marginBottom: '30px' }}>
            YOU'LL ALSO GET ACCESS TO PRIVATE INTERVIEWS FEATURING...
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px' }}>
            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} src="bonus-video.jpg" className="also-access" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Becoming a Network Marketing Legend' with Ray Higdon
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video6.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Social Media Mastery' with Tanya Aliza
              </div>
            </span>


            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video4.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Master Storytelling' with Bob Heilig
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video5.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Never Run Out of Prospects' with John & Nadya Melton
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video9.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Duplicating Leaders' with Rob Sperry
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video7.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'How to Build a Tribe on Facebook's with Frazer Brookes
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video8.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'How to Sort the Perfect Leads' with Todd Falcone
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video2.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                '7 Figure Mindset Mastery' with Clift Braun
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video3.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Training for Momentum' with Jared & Sharaya Maples
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="bonus-video4.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Network Marketer to Full time Entrepreneur' with Luke Hessler
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="darren-fryer.png" width={'300px'} />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Building a Brand Beyond Your Company' with Darren Fryer
              </div>
            </span>

            <span style={{ textAlign: 'center', gap: '20px', }}>
              <img style={{ marginBottom: '10px' }} className="also-access" src="kai-lo.jpg" />

              <div style={{ backgroundColor: 'rgb(30, 94, 163)', color: 'white', fontSize: '23px', }}>
                'Choosing Your Network Marketing Company' with Kai Lo
              </div>
            </span>
          </div>
        </div>
      </div> */}

      {/* <div className="container" style={{ marginTop: '150px', marginBottom: '50px' }}>
        <div className="containerInner">
          <div style={{ color: 'white', backgroundColor: 'rgb(7, 91, 183)', maxWidth: '75%', textAlign: 'center', margin: 'auto', padding: '10px 0', fontSize: '24px  ' }}>
            OUR "DOING BUSINESS THE RIGHT WAY" GUARANTEE
          </div>
        </div>
      </div>

      <div className="container">
        <div className="containerInner">
          <div className="flex">

            <div className="flex vert" >

              <h6 style={{ fontSize: '28px', marginBottom: '20px' }}>
                100% MONEY BACK GUARANTEE
              </h6>
              <p style={{ maxWidth: '75%' }}>
                Join me and my team for a full 30 days, come on the coaching calls, use our templates and upload our “1 click funnels” and if for ANY reason you don’t like it…
                <br /><br />
                In fact, even if you don’t like the colors of our members site..
                <br /><br />
                I don’t care what the reason is… if you’re not happy, we’ll give you every single penny back and part as friends.
                <br /><br />
                "Doing business the right way" is our core value. And this guarantee is a big part of that.
              </p>
            </div>
            <img style={{ maxWidth: '300px' }} className="half" width="150px" src="30-day-guarantee.jpg" />
          </div>
        </div>
      </div>

      <hr style={{ marginTop: '20px', marginBottom: '30px' }}></hr>

      <div className="container">
        <div className="containerInner">
          <h4 style={{ fontSize: '28px', color: 'rgb(7, 91, 183)', textAlign: 'center', marginBottom: '50px' }}>FAQ's</h4>

          <ul style={{ listStyleType: 'disc', textAlign: 'left', fontFamily: 'Gotham' }}>
            <li className="flex vert" style={{ marginBottom: '20px' }}>
              <b style={{ fontSize: '20px' }}>How do I know this will work for my market?</b>
              If you're in the mlm-based business, then this will work for you. Ascension works for beginner, intermediate and advanced network marketers. We've seen this system work for people at all different levels despite where they came from.
            </li>

            <li className="flex vert" style={{ marginBottom: '20px' }}>
              <b style={{ fontSize: '20px' }}>How do I know this will work in my business?</b>
              Ascension was designed to help 3 different brackets. Those new to network marketing wanting to make sure they begin as smoothly as possible, those that have been in network marketing for a little bit and want to scale their team to the next level, and lastly those that have large teams but are not properly duplicating. By covering all 3 of these brackets it allows anyone to use Ascension despite where they are currently at to maximize results.
            </li>

            <li className="flex vert" style={{ marginBottom: '20px' }}>
              <b style={{ fontSize: '20px' }}>This sounds complicated. Is it really hard to do?</b>
              This system makes it as easy and simple as possible. Are you still going to have challenges? Yes. Are you still going to get frustrated at times? Absolutely. However, you'll be moving forward with a proven system and a big support team who genuinely cares about you and wants to see you succeed. There is a whole team of experts who are so passionate about this... and want to see you succeed. We'll do this together!
            </li>

            <li className="flex vert" style={{ marginBottom: '20px' }}>
              <b style={{ fontSize: '20px' }}>If everyone is doing this, will it continue to work?</b>
              Yes. In fact, the more people who become a part of this community, the better! That means more potential promotional partners. More "share for share" partners. And more customers who see buying "how-to" products online as normal. The opportunity has never been bigger!
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', marginTop: '50px', backgroundColor: 'white', color: 'white' }} /> */}

      {/* <div style={{ display: 'flex', justifyContent: 'center',paddingBottom:'525px', alignItems: 'center', flexDirection: 'column', }}>
        <h4 style={{ color: 'rgb(7,91,183)', fontSize: '24px', fontWeight: '700', marginTop: '50px', }}>SO, JUST TO SUM IT ALL UP...</h4>
        <p style={{ marginBottom: '40px', fontSize: '24px' }}>Here's What's You're About To Get: </p>
        <hr style={{ marginBottom: '30px', color: 'inherit', width: '100%' }} />
        <div className="ascension-table" >
          <div className="ascension-cover" style={{}}>
            <img height={'161px'} style={{ maxHeight: '160px' }} width="300px" src="/ascension-cover.png" />
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              FULL ACCESS to The 9 Core Modules of Ascension
            </strong>
            </h1>
            <p>
              (How to use our proven system to scale your network marketing business no matter where you're at so you can create predictable cash flow month after month.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              New 12 BONUS Modules! Secret Interviews from the Best Network Marketers in the World <span style={{ fontSize: '18px' }}>(Value: $12,000)</span>
            </strong>
            </h1>
            <p>
              (I interviewed some of the most successful network marketers in the industry to discover the secrets they used to create the legacy incomes they have now!)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              FREE Sale's Scripts, Prospecting Scripts, Objections Scripts, Closing Scripts <span style={{ fontSize: '18px' }}>(Value: $297 per year)</span>
            </strong>
            </h1>
            <p>
              (I give you the word for word scripts that myself and my organization used to generate over $25 million in revenue. These scripts have worked time and time again.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              My Magnetic Messenger Scripts <span style={{ fontSize: '18px' }}>(Value: PRICELESS)</span>
            </strong>
            </h1>
            <p>
              (13 pages of scripts designed to master prospecting on Facebook messenger, Instagram messenger, and text messaging.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              The Gameplan Assessment Program Packet! (Value: <span style={{ color: 'rgb(190, 11, 13)', fontSize: '18px' }}> $97)</span>
            </strong>
            </h1>
            <p>
              (This is the exact packet we created for every new person who joins our organization to ensure that the whole team duplicates.)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              The Story Sequencing Packet! (Value: <span style={{ color: 'rgb(190, 11, 13)', fontSize: '18px' }}> $97)</span>
            </strong>
            </h1>
            <p>
              (This packet teaches you exactly how to frame your story so that you have the most powerful network marketing narrative you can use to influence thousands on and off the stage!)
            </p>
          </div>
          <div className="ascension-table-row">
            <h1 style={{textAlign:'left'}}><strong>
              BONUS <span style={{ color: 'rgb(190, 11, 13)', fontSize: '18px' }}>($97)</span>
            </strong>
            </h1>
            <p>
              (You get private videos I used to train my organization that were originally designed for only them that I am now releasing to all of you at no cost!)
            </p>
          </div>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '30px', marginBottom: '20px', color: 'rgb(39, 39, 39)' }}>YES! Darik Count Me In!</h1>

        <EnrollButton color={'rgb(39, 39, 39)'} showSaving={false}></EnrollButton>

        <a style={{ marginTop: '30px', marginBottom: '50px', color: 'rgb(65,139,189)' }} className="link">Save $194 -- Pay in Full</a>

        <div style={{ display: 'flex', gap: '15px', padding: '15px', flexDirection: 'column', textAlign: 'center', border: '1px solid black', minWidth: '65%' }}>
          <p style={{ fontSize: '20px', }}>NEED HELP ORDERING OR HAVE QUESTIONS?</p>
          <p>Please contact us with questions at<br />
            info@darikalexander.com</p>
        </div>
      </div> */}
    </div>
  );
};

export default FreeCourseForm;