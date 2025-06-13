'use client';
import React, { useState } from "react";
import BookFormm from "../components/get-book/book";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faCheckSquare, faQuoteLeft, faQuoteRight, faCheck, faQuestionCircle  } from '@fortawesome/free-solid-svg-icons'
import "./book.css";
import Testimonial from "../components/Testimonial/Testimonial";

const Book = ({showImage=true}) => {


  return (
    <div className="vault-container Book" style={{paddingBottom: ''}}>
      <div style={{display: 'flex', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(22,60,156,1) 0%, rgba(38,107,248,1) 30%, rgb(10, 199, 236) 95%)', color: 'white'}} className="hero-container" >
        <div style={{margin: 'auto', maxWidth: '100%',paddingTop: '4rem', }}>
          <h2 style={{color: 'orange', fontWeight: 'bold', fontSize: '42px',color: '#ffbb2a',marginTop: '50px', marginBottom: '5px', fontFamily: 'Gotham Book Bold'}}>The Exact Social Media Scripts That Built Teams of Tens of Thousands</h2>
          <h3 style={{textDecoration: 'italic', marginBottom: '50px', marginTop: '10px', fontSize:'24px',}}>I used these to build massive sales teams and generate millions in revenue — and I'm giving them to you 100% free.
          </h3>
          <hr></hr>
          <div style={{display: 'flex', paddingTop: '32px', gap: '10px'}} className="book-form-cont">
            
            <div id="form" style={{display: 'flex',  flexDirection: 'column', marginTop: '0px', maxWidth: '70%'}}>
             <div style={{minWidth:'600px',height:'700px', marginLeft: '20px'}} className="book-vid-cont">

              <div className="vid-contain" style={{position:'relative', minWidth: '100%', minHeight: '100%',marginTop: '2px'}}><iframe className="course-vid" src="https://player.vimeo.com/video/1070641708?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{minWidth: '300px', width: '817px', height: '460px'}} title="Magnetic Messenger Scripts v1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> 
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', paddingRight: '40px' }} className="book-container">
              <BookFormm  showImage={false}></BookFormm>
             </div>
          </div>
        </div>
      </div>

      <div className="testimonial-container" style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 55%, rgb(27, 34, 36) 100%)', maxHeight: '700px'}}>
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
      

        <div className="" style={{display: 'flex', flexDirection: 'column', marginTop: '40px', backgroundColor: 'rgb(246, 246, 246)', marginBottom: '50px'}}>
          <h2 style={{marginBottom: '50px',marginTop: '50px'}}>What’s inside Magnetic Messenger Scripts:</h2>
          <div className="mm-list" style={{display: 'flex', maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto',}}>
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
      
    </div>
  );
};

export default Book;