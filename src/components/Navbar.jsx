/* import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <span role="img" aria-label="gift">
            <img src="" alt="" />
          </span>{" "}
          Cord<span className="text-purple-500">Brushes</span>
        </div>
        <ul className="hidden md:flex gap-8 text-m font-medium text-gray-700">
          <li className="border-b-2 border-purple-500 pb-1">Products</li>
          <li>Category</li>
          <li>About</li>
          <li>Posts</li>
        </ul>
        <div className="text-sm text-purple-600 font-semibold flex flex-col sm:flex-row justify-center mt-6 mx-6 gap-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300">
            Sign Up
          </button>
          <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
 */
/* 
import React, { useState } from "react";
import { Link } from "react-router-dom"; // assuming you're using React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 shadow-md px-10">
      <div className="flex items-center flex-shrink-0 text-2xl font-bold text-gray-900">
        <img src="" alt="" className="w-8 h-8 mr-2" />
        Cord<span className="text-purple-500">Brushes</span>
      </div>

      
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-purple-600 border-purple-600 hover:text-purple-800 hover:border-purple-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

     
      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-gray-700 md:flex md:gap-8 md:text-md font-medium">
          <li
            onClick={() => setIsOpen(false)}
            className="border-b-2 md:border-b-0 border-purple-500 pb-1 md:pb-0 cursor-pointer"
          >
            <Link to="/">Products</Link>
          </li>
          <li onClick={() => setIsOpen(false)} className="cursor-pointer">
            <Link to="/">Category</Link>
          </li>
          <li onClick={() => setIsOpen(false)} className="cursor-pointer">
            <Link to="/">About</Link>
          </li>
          <li onClick={() => setIsOpen(false)} className="cursor-pointer">
            <Link to="/">Posts</Link>
          </li>
        </ul>

        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 md:ml-6 text-sm font-semibold text-purple-600">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 w-full sm:w-auto">
            Sign Up
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 w-full sm:w-auto">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 */
/* 
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass =
    "border-b-4 border-purple-500 pb-1 tracking-wide text-purple-600";
  const defaultClass = "tracking-wide text-gray-700 hover:text-purple-600";

  return (
    <nav className="flex items-center justify-between flex-wrap p-2 shadow-md px-6 md:px-10 ">
     
      <div className="flex items-center flex-shrink-0  md:text-2xl font-bold text-gray-900 cursor-pointer select-none">
        <img
          src="\images\logo.jpg"
          alt="logo"
          className="w-14 h-14 object-cover rounded-lg shadow-xl z-30"
        />
        Cord&<span className="text-purple-500">Brushes</span>
      </div>

      
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-purple-600 border-purple-600 hover:text-purple-800 hover:border-purple-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

  
      <div
        className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="text-gray-700 md:flex md:gap-8 md:text-md font-medium">
          <li
            onClick={() => setIsOpen(false)}
            className="pb-1 md:pb-0 cursor-pointer"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              Home{" "}
            </NavLink>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="mt-3 md:mt-0 cursor-pointer"
          >
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              Products
            </NavLink>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="mt-3 md:mt-0 cursor-pointer"
          >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              About
            </NavLink>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="mt-3 md:mt-0 cursor-pointer"
          >
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0 md:ml-6 text-sm font-semibold text-purple-600">
          {/*   <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9ljC9X4SIN-2-fEcY-pkgY4KrKXZmzwylEpaMZIVNnR51yQ/viewform?usp=header"> *

          <NavLink to="/subscribe">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 w-full sm:w-auto">
              Subscribe{" "}
            </button>
          </NavLink>
       
        </div>
      </div>
      <div className="absolute top-3 left-8 w-14 h-14 rounded-lg bg-purple-400 rotate-12 opacity-50 z-10"></div>
    </nav>
  );
};

export default Navbar; */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass =
    "border-b-4 border-purple-500 pb-1 tracking-wide text-purple-600";
  const defaultClass = "tracking-wide text-gray-700 hover:text-purple-600";

  return (
    <nav className="relative z-50 flex items-center justify-between flex-wrap p-3 shadow-md px-6 md:px-10">
      {/* Purple background blob */}
      <div className="absolute top-3 left-8 w-14 h-14 rounded-lg bg-purple-400 rotate-12 opacity-50 -z-10"></div>

      {/* Logo */}
      <div className="flex items-center flex-shrink-0 md:text-2xl font-bold text-gray-900 cursor-pointer select-none z-30">
        <img
          src="/images/logo.jpg"
          alt="logo"
          className="w-12 h-12 object-cover rounded-lg shadow-xl mr-2"
        />
        <p className="hidden sm:flex">
          Cord&<span className="text-purple-500">Brushes</span>
        </p>
      </div>

      {/* Hamburger */}
      <div className="block md:hidden z-30">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-purple-600 border-purple-600 hover:text-purple-800 hover:border-purple-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "block mt-4" : "hidden"
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 md:text-md text-gray-700 font-medium text-base items-start md:items-center">
          {[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contactus" },
          ].map((item, idx) => (
            <li
              key={idx}
              onClick={() => setIsOpen(false)}
              className="py-2 md:py-0"
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Subscribe Button */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 md:ml-6 text-sm font-semibold text-purple-600 w-full md:w-auto">
          <NavLink to="/subscribe" onClick={() => setIsOpen(false)}>
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
