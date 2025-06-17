import React from "react";
import CountdownTimer from "./Counter";

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
                  src="/images/photo1.jpg"
                  alt="box1"
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-xl rotate-[-3deg] border-4 border-white absolute top-0 left-0"
                />
                <img
                  src="/images/photo3.jpg"
                  alt="box2"
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-xl rotate-6 border-4 border-white absolute top-14 left-24 lg:right-8 lg:bottom-8"
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
