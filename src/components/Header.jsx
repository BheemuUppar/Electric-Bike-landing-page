import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import ProductMenu from './ProductMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black-300 text-white-300 sticky w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">RHyno EV</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <div className="relative inline-block">
            <ProductMenu />
          </div>
          <Link to="/contact">Contact Us</Link>
          <Link to="/pre-book">Pre Book</Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* <Transition
      show={isOpen}
      enter="transition-opacity transition-transform duration-300"
      enterFrom="opacity-0 -translate-y-10"
      enterTo="opacity-100 translate-y-0"
      leave="transition-opacity transition-transform duration-200"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-10"
      as="div"
    > */}
      {isOpen && (
        <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-600`}
      >
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none absolute top-4 right-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav className="flex flex-col space-y-4 min-h-[300px] py-8 overflow-auto w-full text-center">
          <Link to="/" onClick={toggleMenu} className="text-white text-lg">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="text-white text-lg">
            About Us
          </Link>
          <Link to="/product/seo3_lite" onClick={toggleMenu} className="text-white text-lg">
            SE03 Lite
          </Link>
          <Link to="/product/seo3" onClick={toggleMenu} className="text-white text-lg">
            SE03
          </Link>
          <Link to="/product/seo3_max" onClick={toggleMenu} className="text-white text-lg">
            SE03 Max
          </Link>
          <Link to="/product/all" onClick={toggleMenu} className="text-white text-lg">
            Compare All
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="text-white text-lg">
            Contact Us
          </Link>
          <a href="#pre-book" onClick={toggleMenu} className="text-white text-lg">
            Pre-Book Now
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            LinkedIn
          </a>
        </nav>
      </div>
      )}
    {/* </Transition> */}
    </header>
  );
};

export default Header;
