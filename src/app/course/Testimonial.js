'use client';
import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
    return <div style={{display: 'flex', gap: '100px', flexDirection: 'column', maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto',marginTop: '40px'}}>
                  <div style={{backgroundColor: 'rgb(237, 237, 237)', marginBottom: '-70px',padding: '10px 0', marginTop: '',marginBottom: '20px'}}>
            
            <div style={{backgroundColor: 'rgb(7, 91, 183)', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.4)', textAlign: 'center', color: 'white', minHeight: '75px', alignContent: 'center',  maxWidth: '775px', margin: 'auto',fontSize: '24px', }}>
              <p>CASE STUDIES</p>
            </div>
            </div>
        <div style={{display: 'flex', gap: '50px', justifyContent: 'space-around'}}>
            <div >
                <img width="300" src="case_studies1.jpg" style={{borderRadius: '50%', marginBottom: '15px', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)'}} />
                <p style={{ textAlign: 'center' }}><strong>
                    Zain Jan</strong></p>
                <p  style={{ textAlign: 'center' }}>Founder of Sungrade Solar</p>
            </div>



            <p style={{ 
                padding: '50px',
                paddingTop: '75px',
                width: '50%',
                fontSize: '22px'
             }}>
                "I implemented Darik's messenger scripts into my entire companies' sales process. The result was outstanding. Our company has done over $20 million in sales and I owe much of that to what I have learned from Darik."
            </p>
        </div>
        <div style={{display: 'flex', gap: '50px', justifyContent: 'space-around'}}>
            <p style={{ 
                padding: '50px',
                paddingTop: '75px',
                width: '50%',
                fontSize: '22px'
             }}>
                "The strategies in these messenger scripts allowed me to close 3 high ticket clients within my first 30 days of implementing. I highly recommend them to anyone in the network marketing space!"    
            </p>
                <div >
                    <img width="300" src="case_studies2.png" style={{borderRadius: '50%', marginBottom: '15px', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)'}} />
                    <p style={{ textAlign: 'center' }}><strong>Kenneth Milosovic</strong></p>
                    <p  style={{ textAlign: 'center' }}>CEO at THe Climb Corporation</p>
                </div>
        </div>

        <div style={{display: 'flex', gap: '50px', justifyContent: 'space-around'}}>
            <div >
                <img width="300" src="case_studies3.jpg" style={{borderRadius: '50%', marginBottom: '15px', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)'}} />
                <p style={{ textAlign: 'center' }}><strong>Josh Miller</strong></p>
                <p  style={{ textAlign: 'center' }}>Chief Operating Officer at Invigor8</p>
            </div>
            <p style={{         
                padding: '50px',
                paddingTop: '75px',
                width: '50%',
                fontSize: '22px'
             }}>
                After using these messenger scripts I enrolled 5 people within the first two days of implementing them. Simply put, these WORK! Their easy, effective and get the job done!
            </p>
        </div>
    </div>
}

export default Testimonial;