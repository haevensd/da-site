'use client';
import React, { useState } from "react";
import "./book.css";

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
            <h3>UNLOCK THE SECRETS TO SUCCESS!</h3>
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
                <button type="submit">Next Step</button>
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
    <div className="vault-content">
      {renderStep()}
      {showImage && (
        <div className="vault-image">
          <img
            src="http://darikalexander.com/wp-content/uploads/2017/07/11816979_10153647685917494_6933033594485994486_n.jpg"
            alt="Free Book"
          />
        </div>
      )}
    </div>
  );
};

export default BookForm;