'use client';
import React, { useState } from "react";
import "./course.css";

const FreeCourseForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmitted(true); // Update the state to display the thank-you message
  };

  return (
    <div className="vault-container">
      <h2 className="vault-title">Your Journey Begins Here</h2>
      <div className="vault-content">
        {!submitted ? (
          <div className="vault-form">
            <h3>Step Into Greatness</h3>
            <p>
              Are you ready to unlock the potential you’ve always known was
              within you? Our exclusive course, <strong>“Unlocking the Path to Excellence,”</strong> 
              is your gateway to mastering the art of success, leadership, and 
              living life with purpose. Fill out the form below and gain access to 
              life-changing insights from world-class mentors.
            </p>
            <form onSubmit={handleSubmit}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" required />
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" required />
              <button type="submit">Claim Your Spot</button>
            </form>
          </div>
        ) : (
          <div className="vault-form">
            <h3>Congratulations, You’re In!</h3>
            <p>
              Welcome to the beginning of a new chapter. Check your email for
              all the details to access the course. Prepare to be inspired, 
              challenged, and equipped with the tools to craft your most 
              extraordinary life. Let’s make it happen!
            </p>
          </div>
        )}
        <div className="vault-image">
          <img
            src="https://s.yimg.com/ny/api/res/1.2/79si0K0Q8wKMu4psN_l.yA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTcwMDtjZj13ZWJw/https://lh5.googleusercontent.com/JpJDaGvxCPQbTRCyhBeRu6lAPR4AfS-9Bc6N6bACn_qaL-u9Wrp2g2MTGV2UW9xId626SEhfEKpm-3dJi8lmF4PpIjSXVS7k1Yk6phOY4Bhh3rTVBV8gQm_6TxPkCc8e37M7GqAM=s800" // Replace with course image URL
            alt="Free Course"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeCourseForm;
