import React from "react";
import { Carousel } from "flowbite-react/lib/cjs/components/Carousel";
import SearchBar from "../components/SearchBar";
import ServicesList from "../components/ServicesList";
import FeaturedTours from "../components/FeaturedTours";
import effe1ttower from "../assets/images/carousel_effel_tower.jpg";
import tajmahal from "../assets/images/carousel_taj_mahal.jpg";
import greatwallofchina from "../assets/images/carousel_great_wall_of_china.jpg";
import egyptpyramid from "../assets/images/carousel_egypt_pyramid.jpg"

const Home = () => {
  return (
    <div>
      <div className="h-150 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="rounded-none object-cover">
          <img
            src={tajmahal}
            alt="tajmahal"
          />
          <img
            src={effe1ttower}
            alt="effel tower"

          />
          <img
            src={greatwallofchina}
            alt="great wall of china"
          />
          <img
            src={egyptpyramid}
            alt="egypt pyramid"
          />
        </Carousel>
      </div>
      <div className="flex flex-col md:pl-6 justify-center" id="about">
        <div className="p-4">
          <p>
            ExcursionEase! one-stop travel solution for all your tour and travel
            needs. We understand that planning a trip can be overwhelming,
            especially when it comes to finding the right tour package. With
            Excursion Ease, you can discover tour packages from all over the
            world with just a few clicks. So what are you waiting for? Start
            planning your dream vacation today with Excursion Ease.
          </p>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div>
        <ServicesList />
      </div>
      <div>
        <span className="text-3xl font-bold text-gray-800 bg-yellow-300 p-1 pl-2 pr-2 rounded-full">Explore</span>
        <h2 className="rounded-full p-2 text-2xl">Our Featured Tours</h2>
        <FeaturedTours />
      </div>

    </div>
  );
};

export default Home;
