import React from "react";
import CountdownTimer from "./Counter";
import Navbar from "./Navbar";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-white to-purple-100 overflow-hidden">
      <div className="px-5 md:px-16 py-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="relative w-full md:w-1/2 text-center  z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
              We are getting ready to launch
              <span className="block relative text-purple-600 font-extrabold my-6">
                <span className="relative z-10 md:text-center">
                  Cord & Brushes
                </span>
                <span className="absolute -inset-3 rounded-full border-4 border-purple-300 z-0"></span>
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md mx-auto md:mx-0 ">
              “Art That Connects – From Our Hands to Your Home.”
            </p>

            <CountdownTimer targetDate="2025-07-01T00:00:00" />

            <div className="mt-6">
              <NavLink to="/products">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                  Live
                </button>
              </NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <svg
              className="w-full max-w-md md:max-w-max"
              viewBox="0 0 927 615"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <svg
                className="w-full max-w-md md:max-w-max"
                viewBox="0 0 927 615"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              > */}
              <path
                d="M64.9452 549.713L9.1822 488.577C7.99173 487.272 8.81637 485.039 10.4997 485.01L233.372 481.131C235.53 481.094 236.074 484.399 234.04 485.19L66.9304 550.204C66.2376 550.474 65.4651 550.282 64.9452 549.713Z"
                fill="#FFCFEC"
              />
              <path
                d="M857.306 461.85L632.955 438.033C631.065 437.833 629.872 440.001 631.146 441.32L648.217 458.999C648.425 459.215 648.683 459.38 648.972 459.484L892.449 546.734C894.136 547.338 895.809 545.674 895.104 544.093L858.907 462.981C858.628 462.355 858.02 461.926 857.306 461.85Z"
                fill="#D7CFFF"
              />
              <path
                d="M235.062 168.41L349.396 350.256C349.674 350.699 349.789 351.23 349.716 351.743L345.101 384.316C344.877 385.901 343.09 386.533 341.932 385.436L91.5545 148.212C90.0978 146.832 91.1195 144.354 93.0183 144.662L233.677 167.467C234.237 167.558 234.742 167.902 235.062 168.41Z"
                fill="#CFE2FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M306.693 361.45C306.95 361.064 306.847 360.514 306.465 360.235L19.2685 150.296C18.9017 150.028 18.4132 150.11 18.1665 150.481C17.9097 150.867 18.0128 151.416 18.3945 151.695L305.591 361.634C305.958 361.903 306.447 361.821 306.693 361.45Z"
                fill="#D7CFFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M627.65 297.936C627.952 298.289 628.458 298.302 628.76 297.964L870.733 27.9001C871.016 27.5841 871.017 27.0759 870.735 26.7456C870.433 26.3923 869.927 26.3795 869.625 26.7175L627.652 296.781C627.369 297.097 627.368 297.606 627.65 297.936Z"
                fill="#D7CFFF"
              />
              <path
                d="M763.86 450.557L832.763 444.682C834.754 444.512 835.361 441.86 833.623 440.925L807.078 426.637C806.523 426.338 805.853 426.325 805.272 426.601L762.914 446.764C760.889 447.728 761.642 450.746 763.86 450.557Z"
                fill="#FFE0CF"
              />
              <path
                d="M837.832 117.53L860.471 125.155C861.055 125.351 861.697 125.226 862.197 124.819L885.54 105.753C886.772 104.746 886.522 102.676 885.102 102.127L863.403 93.7336C862.802 93.5012 862.126 93.6177 861.604 94.0435L837.321 113.877C836.06 114.907 836.357 117.033 837.832 117.53Z"
                fill="#CFE2FF"
              />
              <path
                d="M710.589 181.177L701.608 144.762C701.47 144.203 701.551 143.615 701.832 143.138L727.968 98.7494C728.836 97.2766 730.94 97.6407 731.434 99.3491L741.456 133.995C741.625 134.579 741.552 135.204 741.255 135.707L714.078 181.863C713.19 183.371 711.025 182.945 710.589 181.177Z"
                fill="#FFE0CF"
              />
              <path
                d="M310.413 258.955L317.319 242.204C317.519 241.717 317.501 241.166 317.268 240.676L305.088 215.013C304.349 213.455 302.068 213.387 301.361 214.902L293.992 230.676C293.757 231.179 293.763 231.763 294.008 232.28L306.652 258.921C307.409 260.516 309.761 260.537 310.413 258.955Z"
                fill="#FFCFEC"
              />
              <path
                d="M814.504 562.741L814.724 583.62C814.731 584.297 815.073 584.927 815.634 585.297L835.245 598.228C836.546 599.085 838.262 598.179 838.307 596.612L838.882 576.256C838.901 575.552 838.556 574.886 837.972 574.5L817.566 561.045C816.236 560.169 814.487 561.137 814.504 562.741Z"
                fill="#CFE2FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M581.397 437.351C581.165 437.763 581.324 438.257 581.75 438.442L902.686 578.094C903.095 578.272 903.598 578.098 903.821 577.702C904.054 577.29 903.894 576.796 903.468 576.611L582.532 436.959C582.123 436.781 581.62 436.955 581.397 437.351Z"
                fill="#D7CFFF"
              />
            </svg>

            {/* Responsive Overlapping Images */}
            <div className="absolute w-full h-full top-[-6rem] left-0  flex items-center justify-center">
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px]">
                <img
                  src="/images/photo2.jpg"
                  alt="box1"
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-xl rotate-[-3deg] border-4 border-white absolute top-0 left-0"
                />
                <img
                  src="/images/photo1.jpg"
                  alt="box2"
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-xl rotate-6 border-4 border-white absolute top-14 left-24"
                />
              </div>{" "}
              {/* <div className="hidden md:flex flex-col items-center gap-6 fixed top-1/3 right-0 rounded z-50 bg-gradient-to-r from-purple-600 to-indigo-600 p-2 shadow text-purple-700 hover:text-white transition">
                <a
                  href="https://www.facebook.com/people/Cord-and-Brushes/100091734360086/?mibextid=hu50Ix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700  bg-white p-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="https://wa.me/+919109005499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-white p-2 rounded-full shadow-md text-purple-700 hover:bg-purple-700 hover:text-white transition"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a
                  href="https://www.instagram.com/cord_brushes/?igsh=bjAzZHJqOWt6OWxn#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-white p-2 rounded-full shadow-md text-purple-700 hover:bg-purple-700 hover:text-white transition"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/company/cord-brushes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-white p-2 rounded-full shadow-md text-purple-700 hover:bg-purple-700 hover:text-white transition"
                >
                  <FaLinkedinIn size={30} />
                </a>
              </div> */}
              <div className="hidden md:flex flex-col items-center gap-6 fixed top-1/3 right-0 rounded z-50 bg-gradient-to-r from-purple-600 to-indigo-600 p-2 shadow text-white">
                <a
                  href="https://www.facebook.com/people/Cord-and-Brushes/100091734360086/?mibextid=hu50Ix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-white transition transform hover:scale-110"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://wa.me/+919109005499" // replace with actual number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-white transition transform hover:scale-110"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="https://www.instagram.com/cord_brushes/?igsh=bjAzZHJqOWt6OWxn#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-white transition transform hover:scale-110"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/cord-brushes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-white transition transform hover:scale-110"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/* import React from "react";
import CountdownTimer from "./Counter";
import Navbar from "./Navbar";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/*  <div className="min-h-screen bg-gradient-to-tr from-white to-purple-100">
   
      <div className="px-5 md:px-16 relative overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 py-4">
       
          <div className="relative w-80 md:w-1/3 text-center z-10">
            <div className="hidden md:block absolute top-0 right-0 w-16 h-16 bg-purple-400 rotate-12 opacity-50 z-0"></div>
            <h1 className="text-2xl text-center sm:text-4xl md:text-4xl font-bold text-gray-900 leading-snug mb-4 sm:mt-2">
              We are getting ready to launch
              <br className="block sm:hidden" />
              <span className="block relative text-purple-600 text-center font-extrabold my-5 mt-5">
                <span className="relative z-10 sm:text-left">
                  Cord & Brushes
                </span>
                <span className="absolute -inset-3 rounded-full border-4 border-purple-300 z-0"></span>
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-md mx-auto md:mx-0">
              “Art That Connects – From Our Hands to Your Home.”
            </p>

            <CountdownTimer targetDate="2025-06-01T00:00:00" />

            <div className="mt-6 flex justify-center">
              <NavLink to="/products">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300">
                  Live
                </button>
              </NavLink>
            </div>
          </div>

       
          <div className="w-full md:w-2/3 flex justify-center md:justify-end">
            <svg
              className="w-full max-w-md md:max-w-max"
              viewBox="0 0 927 615"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
          
              <path
                d="M64.9452 549.713L9.1822 488.577C7.99173 487.272 8.81637 485.039 10.4997 485.01L233.372 481.131C235.53 481.094 236.074 484.399 234.04 485.19L66.9304 550.204C66.2376 550.474 65.4651 550.282 64.9452 549.713Z"
                fill="#FFCFEC"
              />
              <path
                d="M857.306 461.85L632.955 438.033C631.065 437.833 629.872 440.001 631.146 441.32L648.217 458.999C648.425 459.215 648.683 459.38 648.972 459.484L892.449 546.734C894.136 547.338 895.809 545.674 895.104 544.093L858.907 462.981C858.628 462.355 858.02 461.926 857.306 461.85Z"
                fill="#D7CFFF"
              />
              <path
                d="M235.062 168.41L349.396 350.256C349.674 350.699 349.789 351.23 349.716 351.743L345.101 384.316C344.877 385.901 343.09 386.533 341.932 385.436L91.5545 148.212C90.0978 146.832 91.1195 144.354 93.0183 144.662L233.677 167.467C234.237 167.558 234.742 167.902 235.062 168.41Z"
                fill="#CFE2FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M306.693 361.45C306.95 361.064 306.847 360.514 306.465 360.235L19.2685 150.296C18.9017 150.028 18.4132 150.11 18.1665 150.481C17.9097 150.867 18.0128 151.416 18.3945 151.695L305.591 361.634C305.958 361.903 306.447 361.821 306.693 361.45Z"
                fill="#D7CFFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M627.65 297.936C627.952 298.289 628.458 298.302 628.76 297.964L870.733 27.9001C871.016 27.5841 871.017 27.0759 870.735 26.7456C870.433 26.3923 869.927 26.3795 869.625 26.7175L627.652 296.781C627.369 297.097 627.368 297.606 627.65 297.936Z"
                fill="#D7CFFF"
              />
              <path
                d="M763.86 450.557L832.763 444.682C834.754 444.512 835.361 441.86 833.623 440.925L807.078 426.637C806.523 426.338 805.853 426.325 805.272 426.601L762.914 446.764C760.889 447.728 761.642 450.746 763.86 450.557Z"
                fill="#FFE0CF"
              />
              <path
                d="M837.832 117.53L860.471 125.155C861.055 125.351 861.697 125.226 862.197 124.819L885.54 105.753C886.772 104.746 886.522 102.676 885.102 102.127L863.403 93.7336C862.802 93.5012 862.126 93.6177 861.604 94.0435L837.321 113.877C836.06 114.907 836.357 117.033 837.832 117.53Z"
                fill="#CFE2FF"
              />
              <path
                d="M710.589 181.177L701.608 144.762C701.47 144.203 701.551 143.615 701.832 143.138L727.968 98.7494C728.836 97.2766 730.94 97.6407 731.434 99.3491L741.456 133.995C741.625 134.579 741.552 135.204 741.255 135.707L714.078 181.863C713.19 183.371 711.025 182.945 710.589 181.177Z"
                fill="#FFE0CF"
              />
              <path
                d="M310.413 258.955L317.319 242.204C317.519 241.717 317.501 241.166 317.268 240.676L305.088 215.013C304.349 213.455 302.068 213.387 301.361 214.902L293.992 230.676C293.757 231.179 293.763 231.763 294.008 232.28L306.652 258.921C307.409 260.516 309.761 260.537 310.413 258.955Z"
                fill="#FFCFEC"
              />
              <path
                d="M814.504 562.741L814.724 583.62C814.731 584.297 815.073 584.927 815.634 585.297L835.245 598.228C836.546 599.085 838.262 598.179 838.307 596.612L838.882 576.256C838.901 575.552 838.556 574.886 837.972 574.5L817.566 561.045C816.236 560.169 814.487 561.137 814.504 562.741Z"
                fill="#CFE2FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M581.397 437.351C581.165 437.763 581.324 438.257 581.75 438.442L902.686 578.094C903.095 578.272 903.598 578.098 903.821 577.702C904.054 577.29 903.894 576.796 903.468 576.611L582.532 436.959C582.123 436.781 581.62 436.955 581.397 437.351Z"
                fill="#D7CFFF"
              />
            </svg>
        <img
              src="/images/photo2.jpg"
              alt="box1"
              className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-lg shadow-xl absolute md:top-2/4 left-2/4 sm:w-40 sm:h-40 sm:top-24 rotate-[-3deg] border-8 border-whitesmoke"
            />{" "}
            <img
              src="/images/photo1.jpg"
              alt="box2"
              className="w-40 h-40 top-32 left-30 md:w-64 md:h-64 object-cover rounded-lg shadow-xl transform absolute md:top-1/4 md:left-2/3 rotate-6 z-20 border-8 border-whitesmoke sm:w-52 sm:h-52 sm:top-36 sm:left-1/4"
            />
       
            
          </div>
          <div className="hidden md:flex flex-col items-center gap-6 fixed top-1/3 right-0 rounded z-50 bg-gradient-to-r from-purple-600 to-indigo-600 p-2 shadow text-purple-700 hover:text-white transition">
            <a
              href="https://www.facebook.com/people/Cord-and-Brushes/100091734360086/?mibextid=hu50Ix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700  bg-white p-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://wa.me/+919109005499"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white p-2 rounded-full shadow-md text-purple-700 hover:bg-purple-700 hover:text-white transition"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.instagram.com/cord_brushes/?igsh=bjAzZHJqOWt6OWxn#"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white p-2 rounded-full shadow-md text-purple-700 hover:bg-purple-700 hover:text-white transition"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/cord-brushes/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white p-2 rounded-full shadow-md text-purple-700 hover:bg-purple-700 hover:text-white transition"
            >
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hero; */

/* import React from "react";
import CountdownTimer from "./Counter";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-white to-purple-100">
        <Navbar />
        <div className="px-6 md:px-16 relative overflow-hidden">
          <div className="flex flex-col-reverse my-5 md:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <div className="absolute mx-96 top-16 w-16 h-16 bg-purple-400 rotate-12 opacity-50 z-0"></div>
              <h1 className="relative text-4xl md:text-5xl text-center font-bold mt-15 text-gray-900 my-6 leading-snug mb-4 z-10">
                We are getting ready to launch
                <span className="relative text-purple-600 my-5 inline-block font-extrabold my-5">
                  <span className="relative z-10">Cord & Brushes</span>
                  <span className="absolute -inset-3  rounded-full border-4 border-purple-300 z-0"></span>
                </span>
              </h1>
              <p className="text-m text-gray-500 mb-8 max-w-sm text-center mx-auto">
                “Art That Connects – From Our Hands to Your Home.”
              </p>
              <CountdownTimer targetDate="2025-06-01T00:00:00" />
              <div className="flex justify-center mt-6">
                {/*<button className="bg-indigo-200 text-indigo-900 px-8 py-3 rounded-lg font-bold shadow-sm hover:shadow-lg hover:scale-110 transition-transform duration-300">
                      Live
                    </button> *
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300">
                  Live
                </button>
              </div>
            </div>
            <svg
              className="main-photo__fon_icon"
              width="927"
              height="615"
              viewBox="0 0 927 615"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.9452 549.713L9.1822 488.577C7.99173 487.272 8.81637 485.039 10.4997 485.01L233.372 481.131C235.53 481.094 236.074 484.399 234.04 485.19L66.9304 550.204C66.2376 550.474 65.4651 550.282 64.9452 549.713Z"
                fill="#FFCFEC"
              />
              <path
                d="M857.306 461.85L632.955 438.033C631.065 437.833 629.872 440.001 631.146 441.32L648.217 458.999C648.425 459.215 648.683 459.38 648.972 459.484L892.449 546.734C894.136 547.338 895.809 545.674 895.104 544.093L858.907 462.981C858.628 462.355 858.02 461.926 857.306 461.85Z"
                fill="#D7CFFF"
              />
              <path
                d="M235.062 168.41L349.396 350.256C349.674 350.699 349.789 351.23 349.716 351.743L345.101 384.316C344.877 385.901 343.09 386.533 341.932 385.436L91.5545 148.212C90.0978 146.832 91.1195 144.354 93.0183 144.662L233.677 167.467C234.237 167.558 234.742 167.902 235.062 168.41Z"
                fill="#CFE2FF"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M306.693 361.45C306.95 361.064 306.847 360.514 306.465 360.235L19.2685 150.296C18.9017 150.028 18.4132 150.11 18.1665 150.481C17.9097 150.867 18.0128 151.416 18.3945 151.695L305.591 361.634C305.958 361.903 306.447 361.821 306.693 361.45Z"
                fill="#D7CFFF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M627.65 297.936C627.952 298.289 628.458 298.302 628.76 297.964L870.733 27.9001C871.016 27.5841 871.017 27.0759 870.735 26.7456C870.433 26.3923 869.927 26.3795 869.625 26.7175L627.652 296.781C627.369 297.097 627.368 297.606 627.65 297.936Z"
                fill="#D7CFFF"
              />
              <path
                d="M763.86 450.557L832.763 444.682C834.754 444.512 835.361 441.86 833.623 440.925L807.078 426.637C806.523 426.338 805.853 426.325 805.272 426.601L762.914 446.764C760.889 447.728 761.642 450.746 763.86 450.557Z"
                fill="#FFE0CF"
              />
              <path
                d="M837.832 117.53L860.471 125.155C861.055 125.351 861.697 125.226 862.197 124.819L885.54 105.753C886.772 104.746 886.522 102.676 885.102 102.127L863.403 93.7336C862.802 93.5012 862.126 93.6177 861.604 94.0435L837.321 113.877C836.06 114.907 836.357 117.033 837.832 117.53Z"
                fill="#CFE2FF"
              />
              <path
                d="M710.589 181.177L701.608 144.762C701.47 144.203 701.551 143.615 701.832 143.138L727.968 98.7494C728.836 97.2766 730.94 97.6407 731.434 99.3491L741.456 133.995C741.625 134.579 741.552 135.204 741.255 135.707L714.078 181.863C713.19 183.371 711.025 182.945 710.589 181.177Z"
                fill="#FFE0CF"
              />
              <path
                d="M310.413 258.955L317.319 242.204C317.519 241.717 317.501 241.166 317.268 240.676L305.088 215.013C304.349 213.455 302.068 213.387 301.361 214.902L293.992 230.676C293.757 231.179 293.763 231.763 294.008 232.28L306.652 258.921C307.409 260.516 309.761 260.537 310.413 258.955Z"
                fill="#FFCFEC"
              />
              <path
                d="M814.504 562.741L814.724 583.62C814.731 584.297 815.073 584.927 815.634 585.297L835.245 598.228C836.546 599.085 838.262 598.179 838.307 596.612L838.882 576.256C838.901 575.552 838.556 574.886 837.972 574.5L817.566 561.045C816.236 560.169 814.487 561.137 814.504 562.741Z"
                fill="#CFE2FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M581.397 437.351C581.165 437.763 581.324 438.257 581.75 438.442L902.686 578.094C903.095 578.272 903.598 578.098 903.821 577.702C904.054 577.29 903.894 576.796 903.468 576.611L582.532 436.959C582.123 436.781 581.62 436.955 581.397 437.351Z"
                fill="#D7CFFF"
              />
            </svg>
            <div className="relative top-62 right-60 flex items-center justify-center space-x-4 w-full max-w-lg">
              <img
                src="/images/logo.jpg"
                alt="Macaroon Box"
                className="w-64 h-64 object-cover rounded-lg shadow-xl transform absolute top-0 left-0 rotate-[-5deg] z-30 border-8 border-whitesmoke"
              />
              <img
                src="/images/photo1.jpg"
                alt="Macaroon"
                className="w-72 h-72 object-cover rounded-lg shadow-xl transform absolute top-[-15rem] left-30 rotate-6 z-20 border-8 border-whitesmoke"
              />
              <img
                src="/images/photo2.jpg"
                alt="Macaroon Stack"
                className="w-64 h-64 object-cover rounded-lg shadow-xl transform absolute top-10  right-10 rotate-[10deg] z-20 border-8 border-whitesmoke"
              />
            </div>
            <div className="relative top-10 left-30 w-16 h-16 bg-purple-400 rotate-12 opacity-50"></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 bg-pink-200 rotate-12 opacity-60"></div>{" "}
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-pink-600 opacity-30 rotate-[-12deg]"></div>
            <div className="absolute top-30 left-20 w-16 h-16 bg-purple-400 rotate-12 opacity-50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; */

/* import React from "react";
import CountdownTimer from "./Counter";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-purple-100 px-6 md:px-16 py-12 relative overflow-hidden">
      <div className="flex flex-col-reverse my-5 md:flex-row items-center justify-between gap-12">
      
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
            We are getting ready to launch{" "}
            <span className="relative text-purple-600 inline-block font-extrabold">
              <span className="relative z-10">Code and Brushes</span>
              <span className="absolute -inset-3 rounded-full border-4 border-purple-300 z-0"></span>
            </span>
          </h1>
          <p className="text-sm text-gray-500 mb-8 max-w-sm">
            Mollis sit odio sit aliquet facilisi. Feugiat nullam bibendum suspendisse
            consequat morbi et scelerisque.
          </p>

          <CountdownTimer targetDate="2025-06-01T00:00:00" />

          <div className="flex justify-center mt-6">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300">
              Live
            </button>
          </div>
        </div>

      
        <svg
          className="hidden md:block"
          width="927"
          height="615"
          viewBox="0 0 927 615"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        
        </svg>

        
        <div className="absolute top-20 right-20 flex flex-col items-center justify-center w-full max-w-lg space-y-8 z-20">
          <img
            src="/images/image.png"
            alt="Macaroon Box"
            className="w-64 h-64 object-cover rounded-lg shadow-xl transform rotate-[-5deg] border-8 border-white"
          />
          <img
            src="/images/image2.png"
            alt="Macaroon"
            className="w-64 h-64 object-cover rounded-lg shadow-xl transform rotate-5 border-8 border-white"
          />
          <img
            src="/images/image3.png"
            alt="Macaroon Stack"
            className="w-64 h-64 object-cover rounded-lg shadow-xl transform rotate-[10deg] border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
 */

/* 
import React from "react";

const Hero = () => {
  return (
    /* <div className="min-h-screen bg-gradient-to-tr from-white to-purple-100 px-6 md:px-16 py-12 relative overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
    
        <div className="max-w-lg z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Coming Live Soon
            <span className="relative block text-purple-600 font-extrabold mt-2">
              <span className="relative z-10">Code and Brushes</span>
              <span className="absolute -inset-3 rounded-full border-4 border-purple-300 z-0"></span>
            </span>
          </h1>
          <p className="text-sm text-gray-500 mb-8 max-w-sm">
            Mollis sit odio sit aliquet facilisi. Feugiat nullam bibendum
            suspendisse consequat morbi et scelerisque.
          </p>
          <button className="bg-indigo-500 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition">
            Live
          </button>
        </div>
        
        <svg
          className="main-photo__fon_icon"
          width="927"
          height="615"
          viewBox="0 0 927 615"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.9452 549.713L9.1822 488.577C7.99173 487.272 8.81637 485.039 10.4997 485.01L233.372 481.131C235.53 481.094 236.074 484.399 234.04 485.19L66.9304 550.204C66.2376 550.474 65.4651 550.282 64.9452 549.713Z"
            fill="#FFCFEC"
          />
          <path
            d="M857.306 461.85L632.955 438.033C631.065 437.833 629.872 440.001 631.146 441.32L648.217 458.999C648.425 459.215 648.683 459.38 648.972 459.484L892.449 546.734C894.136 547.338 895.809 545.674 895.104 544.093L858.907 462.981C858.628 462.355 858.02 461.926 857.306 461.85Z"
            fill="#D7CFFF"
          />
          <path
            d="M235.062 168.41L349.396 350.256C349.674 350.699 349.789 351.23 349.716 351.743L345.101 384.316C344.877 385.901 343.09 386.533 341.932 385.436L91.5545 148.212C90.0978 146.832 91.1195 144.354 93.0183 144.662L233.677 167.467C234.237 167.558 234.742 167.902 235.062 168.41Z"
            fill="#CFE2FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M306.693 361.45C306.95 361.064 306.847 360.514 306.465 360.235L19.2685 150.296C18.9017 150.028 18.4132 150.11 18.1665 150.481C17.9097 150.867 18.0128 151.416 18.3945 151.695L305.591 361.634C305.958 361.903 306.447 361.821 306.693 361.45Z"
            fill="#D7CFFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M627.65 297.936C627.952 298.289 628.458 298.302 628.76 297.964L870.733 27.9001C871.016 27.5841 871.017 27.0759 870.735 26.7456C870.433 26.3923 869.927 26.3795 869.625 26.7175L627.652 296.781C627.369 297.097 627.368 297.606 627.65 297.936Z"
            fill="#D7CFFF"
          />
          <path
            d="M763.86 450.557L832.763 444.682C834.754 444.512 835.361 441.86 833.623 440.925L807.078 426.637C806.523 426.338 805.853 426.325 805.272 426.601L762.914 446.764C760.889 447.728 761.642 450.746 763.86 450.557Z"
            fill="#FFE0CF"
          />
          <path
            d="M837.832 117.53L860.471 125.155C861.055 125.351 861.697 125.226 862.197 124.819L885.54 105.753C886.772 104.746 886.522 102.676 885.102 102.127L863.403 93.7336C862.802 93.5012 862.126 93.6177 861.604 94.0435L837.321 113.877C836.06 114.907 836.357 117.033 837.832 117.53Z"
            fill="#CFE2FF"
          />
          <path
            d="M710.589 181.177L701.608 144.762C701.47 144.203 701.551 143.615 701.832 143.138L727.968 98.7494C728.836 97.2766 730.94 97.6407 731.434 99.3491L741.456 133.995C741.625 134.579 741.552 135.204 741.255 135.707L714.078 181.863C713.19 183.371 711.025 182.945 710.589 181.177Z"
            fill="#FFE0CF"
          />
          <path
            d="M310.413 258.955L317.319 242.204C317.519 241.717 317.501 241.166 317.268 240.676L305.088 215.013C304.349 213.455 302.068 213.387 301.361 214.902L293.992 230.676C293.757 231.179 293.763 231.763 294.008 232.28L306.652 258.921C307.409 260.516 309.761 260.537 310.413 258.955Z"
            fill="#FFCFEC"
          />
          <path
            d="M814.504 562.741L814.724 583.62C814.731 584.297 815.073 584.927 815.634 585.297L835.245 598.228C836.546 599.085 838.262 598.179 838.307 596.612L838.882 576.256C838.901 575.552 838.556 574.886 837.972 574.5L817.566 561.045C816.236 560.169 814.487 561.137 814.504 562.741Z"
            fill="#CFE2FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M581.397 437.351C581.165 437.763 581.324 438.257 581.75 438.442L902.686 578.094C903.095 578.272 903.598 578.098 903.821 577.702C904.054 577.29 903.894 576.796 903.468 576.611L582.532 436.959C582.123 436.781 581.62 436.955 581.397 437.351Z"
            fill="#D7CFFF"
          />
        </svg>
        
        <div className="absolute top-1/4 right-10 flex items-center justify-center w-full max-w-lg">
          <img
            src="/images/image.png"
            alt="Macaroon Box"
            className="w-64 h-64 object-cover rounded-lg shadow-xl transform rotate-[-5deg] z-30 border-8 border-white absolute top-0 left-0"
          />
          <img
            src="/images/image2.png"
            alt="Macaroon"
            className="w-64 h-64 object-cover rounded-lg shadow-xl transform rotate-5 z-20 border-8 border-white absolute top-[-10rem] left-[7.5rem]"
          />
          <img
            src="/images/image3.png"
            alt="Macaroon Stack"
            className="w-64 h-64 object-cover rounded-lg shadow-xl transform rotate-[10deg] z-10 border-8 border-white absolute top-10 right-0"
          />
        </div>

      
        <div className="absolute top-10 left-5 w-20 h-20 bg-purple-400 rotate-12 opacity-50 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-pink-200 rotate-12 opacity-60 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-pink-600 opacity-30 rotate-[-12deg] rounded-full"></div>
        <div className="absolute top-24 left-20 w-16 h-16 bg-purple-400 rotate-12 opacity-50 rounded-full"></div>
      </div>
    </div> 

    <div className="min-h-screen bg-gradient-to-tr from-white to-purple-100 px-6 md:px-16 py-12 relative overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 h-full md:h-[80vh]">
        <div className="max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Coming Live Soon
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-600 border-4 border-purple-400 inline-block px-2 py-1 mt-3 rounded-xl">
            Code and Brushes
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            Mollis sit odio sit aliquet facilisi. Feugiat nullam bibendum
            suspendisse consequat morbi et scelerisque.
          </p>
          <button className="mt-6 bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition">
            Live
          </button>
        </div>

        <svg
          className="main-photo__fon_icon"
          width="927"
          height="615"
          viewBox="0 0 927 615"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.9452 549.713L9.1822 488.577C7.99173 487.272 8.81637 485.039 10.4997 485.01L233.372 481.131C235.53 481.094 236.074 484.399 234.04 485.19L66.9304 550.204C66.2376 550.474 65.4651 550.282 64.9452 549.713Z"
            fill="#FFCFEC"
          />
          <path
            d="M857.306 461.85L632.955 438.033C631.065 437.833 629.872 440.001 631.146 441.32L648.217 458.999C648.425 459.215 648.683 459.38 648.972 459.484L892.449 546.734C894.136 547.338 895.809 545.674 895.104 544.093L858.907 462.981C858.628 462.355 858.02 461.926 857.306 461.85Z"
            fill="#D7CFFF"
          />
          <path
            d="M235.062 168.41L349.396 350.256C349.674 350.699 349.789 351.23 349.716 351.743L345.101 384.316C344.877 385.901 343.09 386.533 341.932 385.436L91.5545 148.212C90.0978 146.832 91.1195 144.354 93.0183 144.662L233.677 167.467C234.237 167.558 234.742 167.902 235.062 168.41Z"
            fill="#CFE2FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M306.693 361.45C306.95 361.064 306.847 360.514 306.465 360.235L19.2685 150.296C18.9017 150.028 18.4132 150.11 18.1665 150.481C17.9097 150.867 18.0128 151.416 18.3945 151.695L305.591 361.634C305.958 361.903 306.447 361.821 306.693 361.45Z"
            fill="#D7CFFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M627.65 297.936C627.952 298.289 628.458 298.302 628.76 297.964L870.733 27.9001C871.016 27.5841 871.017 27.0759 870.735 26.7456C870.433 26.3923 869.927 26.3795 869.625 26.7175L627.652 296.781C627.369 297.097 627.368 297.606 627.65 297.936Z"
            fill="#D7CFFF"
          />
          <path
            d="M763.86 450.557L832.763 444.682C834.754 444.512 835.361 441.86 833.623 440.925L807.078 426.637C806.523 426.338 805.853 426.325 805.272 426.601L762.914 446.764C760.889 447.728 761.642 450.746 763.86 450.557Z"
            fill="#FFE0CF"
          />
          <path
            d="M837.832 117.53L860.471 125.155C861.055 125.351 861.697 125.226 862.197 124.819L885.54 105.753C886.772 104.746 886.522 102.676 885.102 102.127L863.403 93.7336C862.802 93.5012 862.126 93.6177 861.604 94.0435L837.321 113.877C836.06 114.907 836.357 117.033 837.832 117.53Z"
            fill="#CFE2FF"
          />
          <path
            d="M710.589 181.177L701.608 144.762C701.47 144.203 701.551 143.615 701.832 143.138L727.968 98.7494C728.836 97.2766 730.94 97.6407 731.434 99.3491L741.456 133.995C741.625 134.579 741.552 135.204 741.255 135.707L714.078 181.863C713.19 183.371 711.025 182.945 710.589 181.177Z"
            fill="#FFE0CF"
          />
          <path
            d="M310.413 258.955L317.319 242.204C317.519 241.717 317.501 241.166 317.268 240.676L305.088 215.013C304.349 213.455 302.068 213.387 301.361 214.902L293.992 230.676C293.757 231.179 293.763 231.763 294.008 232.28L306.652 258.921C307.409 260.516 309.761 260.537 310.413 258.955Z"
            fill="#FFCFEC"
          />
          <path
            d="M814.504 562.741L814.724 583.62C814.731 584.297 815.073 584.927 815.634 585.297L835.245 598.228C836.546 599.085 838.262 598.179 838.307 596.612L838.882 576.256C838.901 575.552 838.556 574.886 837.972 574.5L817.566 561.045C816.236 560.169 814.487 561.137 814.504 562.741Z"
            fill="#CFE2FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M581.397 437.351C581.165 437.763 581.324 438.257 581.75 438.442L902.686 578.094C903.095 578.272 903.598 578.098 903.821 577.702C904.054 577.29 903.894 576.796 903.468 576.611L582.532 436.959C582.123 436.781 581.62 436.955 581.397 437.351Z"
            fill="#D7CFFF"
          />
        </svg>

        <div className="relative w-full max-w-md self-center">
          <img
            src="/images/image.png"
            alt="Art 1"
            className="absolute top-0 left-12 w-64 rounded-lg shadow-xl rotate-[-10deg] z-30"
          />
          <img
            src="/images/image2.png"
            alt="Art 2"
            className="absolute top-16 left-0 w-64 rounded-lg shadow-xl rotate-[-5deg] z-20"
          />
          <img
            src="/images/image3.png"
            alt="Art 3"
            className="absolute top-32 left-20 w-64 rounded-lg shadow-xl rotate-2 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
 */
