import React from 'react'
import TourCard from './TourCard'
import tourdata from '../assets/data/tours';


const FeaturedTours = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center item-center">
      {
      tourdata.map(tour =>(
        <div className="p-4" key={tour.id}>
          <TourCard tour={tour}/>
        </div>
      ))
      } 
      </div>
    </>
  )
}

export default FeaturedTours