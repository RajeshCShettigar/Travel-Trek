import React from 'react'
import TourCard from './TourCard'
import useFetch from '../hooks/useFetch';

const FeaturedTours = () => {

  const {data:Tours}=useFetch('http://localhost:8000/tours/getAllTours');
  console.log(Tours);
  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
      Tours?.map(tour =>(
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