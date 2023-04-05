import React, { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from '../hooks/useFetch';

const SearchBar = () => {
  const navigate = useNavigate();
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const [error,setError]=useState(false);
  
  const searchHandler = async () => {
  const location = locationRef.current.value;
  const distance = distanceRef.current.value;
  const maxGroupSize = maxGroupSizeRef.current.value;
    
  if (location === "" || distance === "" || maxGroupSize === 0) {
      return alert("Please fill all the fields");
  }
    
  const res = await useFetch(
      `http://localhost:9000/tours/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
   //alert(res.ok);
    if (!res.ok) {
       setError(true);
    }
      
    const result = await res.json();
    const data=result.data;
    console.log(data);
    //alert(result);
    if(data.length>0){
    navigate(
      `tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      {state: data});
    }else{
      setError(true);
    }
    alert(error);
  };

  return (
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
              ref={locationRef}
            />
          </div>
          <div className="flex flex-row mr-3 items-center justify-center mt-1">
            <i className="ri-pin-distance-line"></i>
            <h6>Distance</h6>
            <input
              type="number"
              name="distance"
              placeholder="Distance in km"
              className="bg-gray-100 rounded-full"
              ref={distanceRef}
            />
          </div>
          <div className="flex flex-row items-center mt-1">
            <i className="ri-group-line"></i>
            <h6>Max People</h6>
            <input
              type="number"
              name="numberofpeople"
              placeholder="0"
              className="bg-gray-100 rounded-full"
              ref={maxGroupSizeRef}
            />
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
  );
};

export default SearchBar;
