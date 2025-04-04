'use client';
import React, { useState } from "react";
import "./course.css";

const FreeCourseForm = (showImage) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/orders', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vault-containerr">
      <h2 className="vault-title"></h2>
      <div className="vault-content">
        {!submitted ? (
          <div className="vault-form">
            <h3>LAUNCH INTO GREATNESS</h3>
            <p>
              This exclusive network marketing course, <strong>Ascension, </strong> 
              is your gateway to mastering network marketing. <br />
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
        {/* <div className="vault-image">
          <img
            src="https://s.yimg.com/ny/api/res/1.2/79si0K0Q8wKMu4psN_l.yA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTcwMDtjZj13ZWJw/https://lh5.googleusercontent.com/JpJDaGvxCPQbTRCyhBeRu6lAPR4AfS-9Bc6N6bACn_qaL-u9Wrp2g2MTGV2UW9xId626SEhfEKpm-3dJi8lmF4PpIjSXVS7k1Yk6phOY4Bhh3rTVBV8gQm_6TxPkCc8e37M7GqAM=s800" // Replace with course image URL
            alt="Free Course"
          />
        </div> */}
      </div>
    </div>
  );
};

export default FreeCourseForm;