import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import tours from "../assets/data/tours";
import avatar from "../assets/images/avatar.jpg";
import Bookings from "../components/Bookings";

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    featured,
    address,
  } = tour;

  const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : totalRating / reviews?.length;

  const options = { day: "numeric", month: "long", year: "numeric" };

  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewText=reviewMsgRef.current.value;
    const rating=tourRating;
    const time=new Date().toLocaleDateString("en-US", options);  
    alert(reviewText);
    alert(rating);
    alert(time);
  }
  return (
    <div className="md:ml-8 md:mr-8 m-2 shadow-2xl flex md:flex-row">
      <div className="bg-white shadow-lg overflow-hidden w-3/5">
        <img
          className="h-96 object-cover object-center w-full"
          src={photo}
          alt="Tour Image"
        />
        <div className="p-4 m-6">
          <div className="flex items-center justify-between mb-4 mr-6">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <span className="block text-amber-300">
              <i className="ri-star-line"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <p className="text-gray-700 text-base mb-4">{desc}</p>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="p-2">
              <i className="ri-map-pin-user-fill"></i>
              {address}
            </div>
            <div className="p-2">
              <i className="ri-map-pin-2-line"></i>
              {city}
            </div>
            <div className="p-2">
              <i className="ri-group-line"></i>
              {maxGroupSize} people
            </div>
            <div className="p-2">
              <i className="ri-map-pin-user-fill"></i>
              {distance} k/m
            </div>
          </div>
          <div className="flex flex-col flex-wrap justify-between pb-4">
            <h3>Reviews ({reviews?.length} reviews)</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex border-pink-200 shadow-md rounded-lg">
                <input
                  ref={reviewMsgRef}
                  type="text"
                  placeholder="share your thoughts..."
                  className="w-full rounded-lg"
                  required
                />
                <div className="flex flex-row items-center ml-2 mr-2">
                  <span onClick={() => setTourRating(1)}>
                    <i className="ri-star-line"></i>
                  </span>
                  <span onClick={() => setTourRating(2)}>
                    <i className="ri-star-line"></i>
                  </span>
                  <span onClick={() => setTourRating(3)}>
                    <i className="ri-star-line"></i>
                  </span>
                  <span onClick={() => setTourRating(4)}>
                    <i className="ri-star-line"></i>
                  </span>
                  <span onClick={() => setTourRating(5)}>
                    <i className="ri-star-line"></i>
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn border-2 bg-teal-400 p-2 rounded-full ml-4"
                >
                  Share
                </button>
              </div>
            </form>
            <div className="user-reviews container flex flex-col flex-wrap">
              {reviews.map((review) => {
                return (
                  <div className="mt-3 shadow-sm flex flex-wrap flex-col p-3">
                    <div className="flex items-center flex-row mr-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={avatar}
                          alt="Reviewer Image"
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900 mr-5">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-500 mr-5">
                        {new Date(review.createdAt).toLocaleDateString(
                          "en-us",
                          options
                        )}
                      </div>
                      <div className="text-sm font-medium text-gray-900 mr-5">
                        {review.rating}
                        <i className="ri-star-s-fill"></i>
                      </div>
                    </div>
                    <div className="mt-3 text-base text-gray-700 mr-5">
                      <p>{review.reviewText}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="items-center justify-between">
            <a href="#"
            className="bg-pink-700 text-white text-sm font-semibold rounded hover:bg-green-400 p-3">
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="w-2/5 ml-2">
        <Bookings price={price}/>
      </div>
    </div>
  );
};

export default TourDetails;
