import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact-us" className="bg-black-300 text-white-400 py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={contactRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-bold  mb-8 text-center"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-md mx-auto  shadow-lg rounded-lg p-8"
          >
            <div className="flex items-start mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-500 mr-3" height={50} width={50} viewBox="0 0 640 512">
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>
              <div>
                <h3 className="text-xl font-semibold ">Get in Touch</h3>
                <p className=" mt-2">
                  Feel free to reach out to us with any questions or inquiries. We're here to help!
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=" fill-yellow-500 mr-3" height={25} width={25} viewBox="0 0 512 512">
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
                <span className="">Mail: <a href="mailto:info@rhyno.in" className="text-blue-600 hover:underline">info@rhyno.in</a></span>
              </div>
              <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=" fill-yellow-500 mr-3" height={25} width={25} viewBox="0 0 512 512">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <span className="">Mobile no.: <a href="tel:+919023987528" className="text-blue-600 hover:underline">+91-9023987528</a></span>
              </div>
              <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg"className="fill-yellow-500 mr-3" height={50} width={50} viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <span className="">Location: <span className="text-blue-600 hover:underline">Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</span></span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: mapInView ? 1 : 0, x: mapInView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.2971044091831!2d72.66425120050944!3d23.158991204805435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81aa091b0f73%3A0xb8456d1d58827efd!2sPDPU%20UG%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1721586106475!5m2!1sen!2sin"
              width="100%"
              height="370"
              style={{ border: 0, background:'transparent' }}
              allowFullScreen=""
              
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
