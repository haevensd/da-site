'use client';
import React, { useState } from "react";

const FreeCourseForm = () => {
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Your Journey Begins Here</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {!submitted ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Step Into Greatness</h3>
            <p className="mb-6">
              Are you ready to unlock the potential you've always known was
              within you? Our exclusive course, <strong>"Unlocking the Path to Excellence,"</strong> 
              is your gateway to mastering the art of success.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Claim Your Spot'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Congratulations, You're In!</h3>
            <p>
              Welcome to the beginning of a new chapter. Check your email for
              access details. Get ready to start your journey!
            </p>
          </div>
        )}
        <div className="hidden md:block">
          <img
              src="https://s.yimg.com/ny/api/res/1.2/79si0K0Q8wKMu4psN_l.yA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTcwMDtjZj13ZWJw/https://lh5.googleusercontent.com/JpJDaGvxCPQbTRCyhBeRu6lAPR4AfS-9Bc6N6bACn_qaL-u9Wrp2g2MTGV2UW9xId626SEhfEKpm-3dJi8lmF4PpIjSXVS7k1Yk6phOY4Bhh3rTVBV8gQm_6TxPkCc8e37M7GqAM=s800"
            alt="Free Course"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeCourseForm;