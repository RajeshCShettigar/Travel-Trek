import React from "react";
import experience from "../assets/images/experience.png";

const NewsLetter = () => {
  return (
    <div className="flex flex-row justify-center items-center p-8">
      <div className="w-full md:w-1/2 p-6 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">Subscribe now to get useful information about travelling</h1>
        <form className="flex flex-row">
          <input
            className="border border-gray-400 p-2 mb-4 mr-3 rounded-lg"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
