import React from "react";
import SearchBar from "../components/SearchBar";
import FeaturedTours from "../components/FeaturedTours";

const Home = () => {
  return (
    <div>
      <div className="bg-hero bg-opacity-100 w-full bg-cover h-[28rem] object-cover bg-center mt-0">
        <div className="flex flex-col md:pl-6 justify-center" id="about">
          <div className="p-12">
            <p className="bg-transparent text-center md:text-2xl text-white font-shantell p-5 rounded-full shadow-sm">
              Travel trek! one-stop travel solution for all your tour and travel
              needs. Discover tour packages from all over the world with just a few clicks.
              So what are you waiting for? Start
              planning your dream vacation today with Travel trek.
            </p>
          </div>
          <div className="md:p-2">
           <SearchBar/>
          </div>
        </div>
      </div>
    <div className="pr-6 pl-6 pb-6 text-center shadow-md">
        <h2 className="rounded-full text-2xl font-shantell pb-6"> <span className="text-3xl font-bold text-gray-800 bg-yellow-300 rounded-full">Explore </span>Our Featured Tours</h2>
        <FeaturedTours />
      </div>
    </div>
  );
};

export default Home;
