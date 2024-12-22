'use client';
import React, { useState } from "react";
import "./book.css";

const FreeBookForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmitted(true); // Update the state to display the thank-you message
  };

  return (
    <div className="vault-container">
      <h2 className="vault-title">Get Your Free Book Today!</h2>
      <div className="vault-content">
        {!submitted ? (
          <div className="vault-form">
            <h3>Unlock the Secrets to Success!</h3>
            <p>
              Fill out the form below to receive your free copy of our exclusive
              book. This book is packed with actionable strategies, insights, and
              inspiration to help you achieve your dreams. Don’t miss out on this
              opportunity to start transforming your life today!
            </p>
            <form onSubmit={handleSubmit}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" required />
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" required />
              <button type="submit">Download Now</button>
            </form>
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
        <div className="vault-image">
          <img
            src="http://darikalexander.com/wp-content/uploads/2017/07/11816979_10153647685917494_6933033594485994486_n.jpg" // Replace with an actual image of the book cover
            alt="Free Book"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeBookForm;
