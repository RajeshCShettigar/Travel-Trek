import React from 'react';
import TourCard from './TourCard';
import useFetch from '../hooks/useFetch';

const FeaturedTours = () => {
  
   const {data:TourData}=useFetch("https://traveltrek.onrender.com/tours/getAllTours");
   //console.log(TourData);
      
  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
      TourData?.map(tour =>(
        <div className="pb-3 p-1 object-cover" key={tour._id}>
          <TourCard tour={tour}/>
        </div>
      ))
      } 
      </div>
    </>
  )
}

export default FeaturedTours