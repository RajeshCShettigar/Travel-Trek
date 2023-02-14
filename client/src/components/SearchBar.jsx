import React,{useState,useRef} from 'react'

const SearchBar = () => {
  const locationRef = useRef('');
  const distanceRef=useRef(0);
  const maxGroupSizeRef=useRef(0);

  const searchHandler=()=>{
    const location=locationRef.current.value;
    const distance=distanceRef.current.value;
    const maxGroupSize=maxGroupSizeRef.current.value;
    if(location===''||distance===''||maxGroupSize===0){
     return alert('Please fill all the fields');
    }

  }

  return (
    <div className="bg-gray-200 rounded-full items-center p-6 text-center shadow-sm ml-4 mr-8 text-pink-500">
       <form>
        <div className="flex flex-row flex-wrap">
        <div className="flex flex-row mr-2">
        <i className="ri-map-pin-line"></i>
        <h6>Location</h6>
        <input type="text" name="location" placeholder="Where are you going?"className="bg-gray-100 rounded-full" ref={locationRef}/>
        </div>
        <div className="flex flex-row mr-2">
        <i className="ri-pin-distance-line"></i>
        <h6>Distance</h6>
        <input type="number" name="distance" placeholder="Distance k/m" className="bg-gray-100 rounded-full"
        ref={distanceRef}/>
        </div>
        <div className="flex flex-row">
        <i className="ri-group-line"></i>
        <h6>Max People</h6>
        <input type="number" name="numberofpeople" placeholder="0"className="bg-gray-100 rounded-full" ref={maxGroupSizeRef}/>
        </div>
        <div className="flex flex-row">
            <button className="bg-pink-500 rounded-full p-2 text-white shadow-sm ml-4 pl-4 pr-4"
            onClick={searchHandler}>Search</button>
        </div>
        </div>
       </form>
    </div>
  )
}

export default SearchBar