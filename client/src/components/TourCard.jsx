import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const TourCard = ( {tour }) => {
  const {_id, title,city, photo, price, featured,reviews } = tour;
  const {data:tourReviews}=useFetch(`https://traveltrek.onrender.com/reviews/${_id}`); 
  //const totalRating = reviews.reduce((acc,item)=>acc+item.rating,0);
  //const avgRating=totalRating===0?"":totalRating===1?totalRating:totalRating/reviews?.length;
  return (
    <>
      <div className="max-w-md rounded overflow-hidden shadow-md hover:shadow-2xl">
        <div className="relative">
        <img src={photo} className="w-full height-full object-cover"
          alt="Sunset in the mountains"
        />
        {featured &&<span className="absolute bg-yellow-300 bottom-0 right-0 p-1 rounded-sm">Featured</span>}
        </div>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-left hover:underline hover:text-pink-500">
            <h5><Link to={`/tours/${_id}`}>{title}</Link></h5>
          </div>
        <div className="flex flex-row justify-between">
         <div className="text-center">
          <span className=""><i className="ri-map-pin-line"></i>{city}</span>
          </div>
         <div className="text-center text-yellow-300 bg-gray-100">
          <span className=""><i className="ri-star-line"></i>{tourReviews.length===0?"Not Rated":(<span>({tourReviews.length})</span>)}</span>
          </div>
          </div>
          <div className="flex flex-row justify-between">
          <h5 className="text-gray-700 text-base">
            ${price}<span>/per person</span>
          </h5>
          <button className="btn bg-gray-200 p-1 rounded-full m-1 hover:shadow-md hover:bg-gray-300"><Link to={`/tours/${_id}`}>Book Now</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
