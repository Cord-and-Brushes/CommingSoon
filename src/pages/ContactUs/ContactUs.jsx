import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-start pt-4 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-6xl rounded-2xl shadow-2xl px-4 sm:px-6 md:px-10 py-6 bg-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-700 mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form
              className="space-y-5"
              action="https://formspree.io/f/xwpogdav"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullname"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-inner flex flex-col items-center w-full">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
              Contact Information
            </h2>
            <ul className="space-y-4 text-gray-700 text-center">
              <li className="flex items-center justify-center gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-purple-600"
                />
                <span>123 Ecommerce St, City, Country</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-purple-600" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-purple-600"
                />
                <span>info@ecommerce.com</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <a
                href="https://www.facebook.com/people/Cord-and-Brushes/100091734360086/?mibextid=hu50Ix"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-100 text-purple-700 hover:bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full hover:text-white transition-all shadow"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://wa.me/+919109005499"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-purple-700 hover:bg-gradient-to-r from-purple-600 to-indigo-600 hover:text-white transition-all shadow"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.instagram.com/cord_brushes/?igsh=bjAzZHJqOWt6OWxn#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-purple-700 hover:bg-gradient-to-r from-purple-600 to-indigo-600 hover:text-white transition-all shadow"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/cord-brushes/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-purple-700 hover:bg-gradient-to-r from-purple-600 to-indigo-600 hover:text-white transition-all shadow"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
