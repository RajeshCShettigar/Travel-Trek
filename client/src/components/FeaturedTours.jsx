import React from 'react'
import TourCard from './TourCard'
import useFetch from '../hooks/useFetch';

const FeaturedTours = () => {

  const {data:featuredTours}=useFetch('http://localhost:8080/api/v1/tours/search/getFeaturedTours');
  //console.log(featuredTours);
  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
      featuredTours.map(tour =>(
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