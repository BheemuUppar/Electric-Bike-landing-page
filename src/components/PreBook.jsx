import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function PreBook() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_dquSzQyEVSnT9X', // Your Razorpay Key ID
      amount: 39900, // Amount is in currency subunits. Default currency is INR. Hence, 39900 means 399.00 INR
      currency: 'INR',
      name: 'RHYNO EV',
      description: 'Pre-Book Charge',
      image: 'https://your-logo-url.com', // Replace with your logo URL
      handler: function (response) {
        alert('Payment successful!');
        setFormData({
          name: '',
          email: '',
          phoneNumber: ''
        });
        setIsSubmitting(false);

        // After payment, send email
        sendEmail(response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phoneNumber
      },
      notes: {
        address: 'Banglore'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert('Payment failed. Please try again.');
      setIsSubmitting(false);
    });
    rzp1.open();
  };

  const sendEmail = (paymentResponse) => {
    const emailParams = {
      to_email: formData.email, // Replace with your email address
      from_email: formData.email,
      subject: 'New Pre-Booking',
      message: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}

      Payment Details:
      - Payment ID: ${paymentResponse.razorpay_payment_id}
      - Order ID: ${paymentResponse.razorpay_order_id}
      - Signature: ${paymentResponse.razorpay_signature}

      Pre-Book Charge: ₹399`
          
    };

    emailjs.send('service_gvun9p8', 'template_26r76wk', emailParams, '9qUyubIEugfDsLzF_')
      .then((response) => {
        alert("Prebooking Done, Check Your Email!")
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    handlePayment();
  };

  return (
    <div className='bg-black-300 text-white-400'>
      <motion.div
        className="max-w-lg mx-auto p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Pre-Book Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 bg-black-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 bg-black-300"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-white-400">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 bg-black-300"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white-400">Pre-Book Charge: ₹399</span>
            <button
              type="submit"
              className={`py-2 px-4 rounded-lg font-bold text-white ${isSubmitting ? 'bg-dark-500' : 'bg-blue-500'} transition-colors duration-300`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Booking...' : 'Book Now'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
