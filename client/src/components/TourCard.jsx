import React from "react";
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  const { id, title,city, photo, price, featured,reviews } = tour;

  const totalRating = reviews.reduce((acc,item)=>acc+item.rating,0);
  const avgRating=totalRating===0?"":totalRating===1?totalRating:totalRating/reviews?.length;
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative">
        <img src={photo}
          alt="Sunset in the mountains"
        />
        {featured &&<span className="absolute bg-yellow-300 bottom-0 right-0 p-1 rounded-sm">Featured</span>}
        </div>
        <div className="px-6 py-4">
        <div className="flex flex-row justify-between">
         <div className="text-center">
          <span className=""><i className="ri-map-pin-line"></i>{city}</span>
          </div>
         <div className="text-center text-yellow-300 bg-gray-100">
          <span className=""><i className="ri-star-line"></i>{avgRating===0?null:avgRating}{totalRating===0?"Not Rated":(<span>({reviews.length})</span>)}</span>
          </div>
          </div>
          <div className="font-bold text-xl mb-2">
            <h5><Link to={`/tours/${id}`}>{title}</Link></h5>
          </div>
          <div className="flex flex-row justify-between">
          <h5 className="text-gray-700 text-base">
            ${price}<span>/per person</span>
          </h5>
          <button className="btn bg-gray-200 p-2 rounded-full"><Link to={`/tours/${id}`}>Book Now</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
