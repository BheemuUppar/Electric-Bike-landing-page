import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import ProductMenu from "./ProductMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black-300 text-white-300 sticky w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="text-xl font-bold" >
          <strong className="text-white-300">RHyno <strong className="text-yellow-300">EV</strong> </strong>
        </NavLink>
        <div className=" links hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink to="/about"  className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>About Us</NavLink>
          <div className="relative inline-block">
            <ProductMenu />
          </div>
          <NavLink to="/contact"  className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>Contact Us</NavLink>
          <NavLink to="/pre-book"  className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }> Pre Book</NavLink>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 448 512">
           <path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 448 512">
            <path fill="#fff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
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
            isOpen ? "translate-x-0" : "translate-x-full"
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
            <NavLink to="/" onClick={toggleMenu} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              About Us
            </NavLink>
            <NavLink
              to="/product/seo3_lite"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              SE03 Lite
            </NavLink>
            <NavLink
              to="/product/seo3"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              SE03
            </NavLink>
            <NavLink
              to="/product/seo3_max"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              SE03 Max
            </NavLink>
            <NavLink
              to="/product/all"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              Compare All
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              Contact Us
            </NavLink>
            <a
              href="#pre-book"
              onClick={toggleMenu}
             
            >
              Pre-Book Now
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              
            >
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
