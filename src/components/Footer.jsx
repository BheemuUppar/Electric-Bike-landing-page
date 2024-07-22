import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul>
              <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#refund-policy" className="hover:underline">Refund Policy</a></li>
              <li><a href="#website-policy" className="hover:underline">Website Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer" className="hover:underline">Career</a></li>
              <li><a href="#rentals" className="hover:underline">Rentals</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-yellow-500" />
              </a>
              <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-yellow-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        <p>&copy; {new Date().getFullYear()} Rhyno EV. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
