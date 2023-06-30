import React,{useState,useRef} from "react";
//import SearchBar from "../components/SearchBar";
import FeaturedTours from "../components/FeaturedTours";
//import useFetch from '../hooks/useFetch';
import axios from "axios";

const Home = () => {

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const [error,setError]=useState(false);

  //const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const searchHandler = async () => {
  const location = locationRef.current.value;
  const distance = distanceRef.current.value;
  const maxGroupSize = maxGroupSizeRef.current.value;
    
  if (location === "" || distance === "" || maxGroupSize === 0) {
      alert("Please fill all the fields");
  }
  else{  
  const res = await axios.get(
      `https://traveltrek.onrender.com/tours/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      {headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}
      );
      const result = await res.json();
      const data=result.data;
      if (data.length===0) {
       alert("No data found")
       setError(true);
      }
      else{
      console.log(data);
      setSearchResults(data);
      }
    }
  };

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
            <div className="backdrop-opacity-10 backdrop-invert bg-white/30 rounded-full items-center md:p-3 text-center ml-6 mr-16 text-pink-700 font-ubuntu pl-2 pr-2 shadow-xl flex flex-col flex-wrap font-light">
              <form>
                <div className="flex flex-row flex-wrap items-center justify-center">
                  <div className="flex flex-row mr-3 items-center pl-2 mt-1">
                    <i className="ri-map-pin-line"></i>
                    <h6>Location</h6>
                    <input
                      type="text"
                      name="location"
                      placeholder="Where are you going?"
                      className="bg-gray-100 rounded-full"
                      ref={locationRef} />
                  </div>
                  <div className="flex flex-row mr-3 items-center justify-center mt-1">
                    <i className="ri-pin-distance-line"></i>
                    <h6>Distance</h6>
                    <input
                      type="number"
                      name="distance"
                      placeholder="Distance in km"
                      className="bg-gray-100 rounded-full"
                      ref={distanceRef} />
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <i className="ri-group-line"></i>
                    <h6>Max People</h6>
                    <input
                      type="number"
                      name="numberofpeople"
                      placeholder="0"
                      className="bg-gray-100 rounded-full"
                      ref={maxGroupSizeRef} />
                  </div>
                  <div className="flex flex-row items-center">
                    <button
                      className="bg-pink-700 rounded-full text-white shadow-sm ml-4 pl-4 pr-4 pt-2 pb-2"
                      onClick={searchHandler}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              {error && <p className="text-pink-500 text-center">No tours found</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        <div className="justify-center text-center align-items">
          {searchResults.length > 0 ? (
            <>
              <h1 className="text-center">Search Result</h1>
              {searchResults?.map(tour => (
                <div className="items center">
                  <TourCard tour={tour} />
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
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
