import React from 'react'
import TourCard from './TourCard'
//import tourdata from '../assets/data/tours';
import {useState,useEffect} from 'react';
import useFetch from '../hooks/useFetch';

const FeaturedTours = () => {

  const {data:featuredTours,loading,error}=useFetch('http://localhost:8080/tours/search/getFeaturedTours');

  console.log(featuredTours);

  return (
    <>
    <div className="flex flex-wrap">
      {loading**<h4>Loading....</h4>}
      {error&& <h4>{error}</h4>}
      {!loading&&!error&&
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