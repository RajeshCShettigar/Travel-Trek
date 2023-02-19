import React from 'react'
import TourCard from './TourCard'
import tourdata from '../assets/data/tours';
import {useState,useEffect} from 'react';

const FeaturedTours = () => {

  const [pageCount,setPageCount]=useState(0);
  const [page,setPage]=useState(0);
  useEffect(()=>{
   const pages=Math.ceil(5/2);
   setPageCount(pages);   
  },[page]);

  return (
    <>
    <div className="flex flex-wrap justify-center item-center">
      {
      tourdata.map(tour =>(
        <div className="pb-3 p-1 object-cover" key={tour.id}>
          <TourCard tour={tour}/>
        </div>
      ))
      } 
      </div>
      <div className="flex justify-center items-center mt-2">
      <div className="mt-2">{[...Array(pageCount).keys()].map(number=>(
        <span key={number} onClick={()=>setPage(number)} className={page===number?"cursor-pointer scale-105 mr-2 pr-2 pl-2 rounded-full bg-amber-400 border-2 border-slate-900 shadow-2xl":"shadow-md cursor-pointer scale-75 mr-2 pr-2 pl-2 rounded-full bg-amber-400 border-2 border-slate-900"}>{number+1}</span>
      ))}</div>
      </div>
    </>
  )
}

export default FeaturedTours