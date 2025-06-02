import React from "react";

const SubscribeForm = () => {
  return (
    <form
      action="https://formspree.io/f/mwpogdyv"
      method="POST"
      target="_blank"
      className="max-w-md mx-auto p-4 bg-white justify-center items-center rounded-lg shadow space-y-4 mt-10"
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">
        Subscribe to our Newsletter
      </h2>
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;
