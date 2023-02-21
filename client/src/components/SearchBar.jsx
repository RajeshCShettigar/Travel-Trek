import React,{useRef} from 'react'
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const navigate=useNavigate();

  const locationRef = useRef('');
  const distanceRef=useRef(0);
  const maxGroupSizeRef=useRef(0);

  const searchHandler=async()=>{
    const location=locationRef.current.value;
    const distance=distanceRef.current.value;
    const maxGroupSize=maxGroupSizeRef.current.value;
    if(location===''||distance===''||maxGroupSize===0){
     return alert('Please fill all the fields');
    }
    const res=await fetch(`http://localhost:5000/api/v1/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
    if(!res.ok){
      return alert('Something went wrong. Try again later');
    }
    const result=await res.json();
    navigate(`/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state:result.data});
  }

  return (
    <div className="backdrop-opacity-10 backdrop-invert bg-white/30 rounded-full items-center p-3 text-center ml-6 mr-16 text-pink-700 font-ubuntu pl-2 pr-2 shadow-xl">
       <form>
        <div className="flex flex-row flex-wrap items-center justify-center">
        <div className="flex flex-row mr-3 items-center pl-2">
        <i className="ri-map-pin-line"></i>
        <h6>Location</h6>
        <input type="text" name="location" placeholder="Where are you going?"className="bg-gray-100 rounded-full" ref={locationRef}/>
        </div>
        <div className="flex flex-row mr-3 items-center justify-center">
        <i className="ri-pin-distance-line"></i>
        <h6>Distance</h6>
        <input type="number" name="distance" placeholder="Distance k/m" className="bg-gray-100 rounded-full"
        ref={distanceRef}/>
        </div>
        <div className="flex flex-row items-center">
        <i className="ri-group-line"></i>
        <h6>Max People</h6>
        <input type="number" name="numberofpeople" placeholder="0"className="bg-gray-100 rounded-full" ref={maxGroupSizeRef}/>
        </div>
        <div className="flex flex-row items-center">
            <button className="bg-pink-700 rounded-full text-white shadow-sm ml-4 pl-4 pr-4 pt-2 pb-2"
            onClick={searchHandler}>Search</button>
        </div>
        </div>
       </form>
    </div>
  )
}

export default SearchBar;