"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Alert,Spin, Switch } from 'antd';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [loading,setLoading]=useState(false)

  // Email validation regex (simple pattern)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Phone validation regex (simple pattern for international numbers)
  const phoneRegex = /^[0-9+\-()]{7,15}$/;

  // Handle form submission
  const handleSubmit = async (e) => {
    
    e.preventDefault();

    // Reset the status before validating the form
    setStatus(null); // Clear any previous status message before the new validation

    // Basic client-side validation
    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill all the fields.' });
      return;
    }

    if (name.length < 3) {
      setStatus({ type: 'error', message: 'Name should be at least 3 characters.' });
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!phoneRegex.test(phone)) {
      setStatus({ type: 'error', message: 'Please enter a valid phone number.' });
      return;
    }

    if (message.length < 15) {
      setStatus({ type: 'error', message: 'Message should be at least 15 characters long.' });
      return;
    }

    try {
      // Send form data to the backend
      setLoading(true)
      const response = await axios.post('/api/sendEmail', {
        name,
        phone,
        email,
        message,
      });
  

      // Check the response from the backend
      if (response.data.success) {
        setStatus({ type: 'success', message: 'Your message has been sent!' });
        setName('')
        setMessage('')
        setEmail('')
        setPhone('')
        setLoading(false)
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        setLoading(false)
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ type: 'error', message: 'Failed to send email. Please try again.' });
      setLoading(false)
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 max-w-6xl">
      <div className="mb-8 lg:mb-0 lg:mr-16">
        <h1 className="text-5xl lg:text-8xl font-unbounded tracking-tight">
          Let's
          <br />
          <span className="text-blue-900 text-9xl lg:text-8xl font-unbounded tracking-tight">
            Talk!
          </span>
        </h1>
      </div>

      <div className="w-full max-w-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
          />

          <textarea
            placeholder="Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded-md focus:outline-none resize-none"
          />
 <Spin spinning={loading} delay={500}>
          <button
            
            type={loading?undefined:"submit"}
            className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            Send
          </button>
          </Spin>
        </form>

      
        {status && (
          <div className="mt-4">
            <Alert
              message={status.message}
              type={status.type}
              showIcon
              
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
