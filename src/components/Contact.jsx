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
              <svg
                className="h-8 w-8 text-yellow-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h1.5l1.5 5 2.25-6.75L9 12l2.25-6.75L12 10h6v11H3V10z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold ">Get in Touch</h3>
                <p className=" mt-2">
                  Feel free to reach out to us with any questions or inquiries. We're here to help!
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h2v12H3V7zM7 7h2v12H7V7zM11 7h2v12h-2V7zM15 7h2v12h-2V7zM19 7h2v12h-2V7z"
                  />
                </svg>
                <span className="">Mail: <a href="mailto:info@rhyno.in" className="text-blue-600 hover:underline">info@rhyno.in</a></span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-7-5-7 5v11l7 5 7-5V7z"
                  />
                </svg>
                <span className="">Mobile no.: <a href="tel:+919023987528" className="text-blue-600 hover:underline">+91-9023987528</a></span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9V3m0 0L5.4 8.6M12 3l6.6 5.6M6 21h12m-6-6v6"
                  />
                </svg>
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
              height="450"
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
