import React from 'react'
import TourCard from './TourCard';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location=useLocation();
  const data = location.state || [];
  
  console.log(data);

  return (
    <div className="justify-center text-center align-items-center">
      <h1 className="text-center text-3xl text-green-400">Search Result</h1>
      <div className="flex flex-row justify-center">
        {data.length===0?(
          <h4 className="text-center text-3xl text-red-400">No Tours found</h4>
        ):(
          data?.map(tour=>(
            <div className="items center">
              <TourCard tour={tour}/>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SearchResult;