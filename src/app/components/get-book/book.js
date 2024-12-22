'use client';
import React, { useState } from "react";
import "./book.css";

const BookForm = ({showImage=true}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmitted(true); // Update the state to display the thank-you message
  };

  return (
      <div className="vault-content">
        {!submitted ? (
          <div className="vault-form">
            <h3>Unlock the Secrets to Success!</h3>
            <p>
              Fill out the form to receive your <strong>free</strong> copy of our exclusive
              book— packed with actionable strategies, insights, and
              inspiration to help you achieve your dreams.
              Don’t miss this opportunity to transform your life today!
            </p>
            <form onSubmit={handleSubmit}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" required />
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" required />
            </form>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <button type="submit">Download Now</button>
                </div>
          </div>
        ) : (
          <div className="vault-form">
            <h3>Congratulations!</h3>
            <p style={{marginTop: '20px'}}>
              You've taken the first step towards transforming your life—
              Now check your email to download your free book and begin your journey. We’re
              excited to join you on your road to success!
            </p>
          </div>
        )}
        {showImage && <div className="vault-image">
          <img
            src="http://darikalexander.com/wp-content/uploads/2017/07/11816979_10153647685917494_6933033594485994486_n.jpg" // Replace with an actual image of the book cover
            alt="Free Book"
          />
        </div>}
      </div>
  );
};

export default BookForm;
