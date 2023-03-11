import React from 'react'
import TourCard from './TourCard'
import { useState,useEffect } from "react";
import axios from 'axios';
import useFetch from '../hooks/useFetch';

const FeaturedTours = () => {
  
  //const [TourData,setTourData]=useState([]);
  /*
  const TourDetails=async()=>{
    try{
        const Data=await axios.get(
         "http://localhost:9000/tours/getAllTours"
        );
        console.log(Data);
       setTourData(Data.data.data)
    }catch(e){
        console.log(e);
        alert("failed to fetch");
    }
  };  
  useEffect(()=>{
    TourDetails();
  },[]);
  */
   const {data:TourData}=useFetch("http://localhost:9000/tours/getAllTours");
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