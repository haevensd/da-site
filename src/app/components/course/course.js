'use client';
import React, { useState } from "react";
import "./course.css";

const FreeCourseForm = (showImage) => {
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
    const { name, value } = e.target;
    let formattedValue = value;
  
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    }
  
    if (name === 'expiryDate') {
      formattedValue = value
        .replace(/\D/g, '')
        .slice(0, 4)
        .replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }
  
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }
  
    setFormData({
      ...formData,
      [name]: formattedValue
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
      const paymentData = {
        amount: '4.95',
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        email: formData.email
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


      
      const paymentRes = await fetch('/api/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      });
      
      const paymentJson = await paymentRes.json();
      
      if (!paymentRes.ok || !paymentJson.success) {
        alert('Payment failed: ' + paymentJson.error);
        return;
      }
      

      if (response.ok) {
        // Basic validations
        const isCardNumberValid = formData.cardNumber.replace(/\s/g, '').length === 16;
        const isExpiryValid = /^\d{2}\/\d{2}$/.test(formData.expiryDate);
        const isCVVValid = formData.cvv.length >= 3;

        if (!isCardNumberValid || !isExpiryValid || !isCVVValid) {
          alert("Please enter valid card details before submitting.");
          return;
        }

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
            <h3>Grab The Free Program Ascension<br/> Just Cover Shipping</h3>
            <p>
            
            We’ll rush yours to your door — just tell us where to send it.
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
            Welcome to the beginning of a new chapter. Check your email for
              all the details to access the course. Prepare to be inspired, 
              challenged, and equipped with the tools to craft your most 
              extraordinary life. Let’s make it happen!
            </p>
          </div>
        );
    }
  };

  return (
    <div className="vault-content">
      {
        renderStep()
      }
      {/* {showImage && (
        <div className="vault-image">
          <img
            src="http://darikalexander.com/wp-content/uploads/2017/07/11816979_10153647685917494_6933033594485994486_n.jpg"
            alt="Free Book"
          />
        </div>
      )} */}
    </div>
  );
};


export default FreeCourseForm;