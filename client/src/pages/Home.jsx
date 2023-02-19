import React from "react";
import SearchBar from "../components/SearchBar";
import ServicesList from "../components/ServicesList";
import FeaturedTours from "../components/FeaturedTours";
//import effe1ttower from "../assets/images/carousel_effel_tower.jpg";
//import tajmahal from "../assets/images/carousel_taj_mahal.jpg";
//import greatwallofchina from "../assets/images/carousel_great_wall_of_china.jpg";
//import egyptpyramid from "../assets/images/carousel_egypt_pyramid.jpg"
import ImageGallery from "../components/ImageGallery";
import NewsLetter from "../components/NewsLetter";


const Home = () => {
  return (
    <div>
      <div className="bg-hero w-full bg-cover h-96 object-cover bg-center mt-0">
      <div className="flex flex-col md:pl-6 justify-center" id="about">
        <div className="p-4">
          <p className="text-center md:text-2xl text-white font-shantell p-5">
            ExcursionEase! one-stop travel solution for all your tour and travel
            needs. Discover tour packages from all over the world with just a few clicks. 
            So what are you waiting for? Start
            planning your dream vacation today with Excursion Ease.
          </p>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      </div>
      <div className="p-6 text-center ">
        <h2 className="rounded-full p-6 text-2xl font-shantell"> <span className="text-3xl font-bold text-gray-800 bg-yellow-300 rounded-full">Explore </span>Our Featured Tours</h2>
        <FeaturedTours />
      </div>
      <div>
        <ServicesList />
      </div>
      <div className="p-2 text-center">
        <h2 className="rounded-full p-2 text-2xl"> <span className="text-3xl font-bold text-gray-800 bg-yellow-300 p-1 pl-2 pr-2 rounded-full">Explore</span> Our Customer image gallery</h2>
        <ImageGallery/>
      </div>
      <div className="pl-2 pr-2 rounded shadow-lg">
        <NewsLetter/>
      </div> 
    </div>
  );
};

export default Home;
