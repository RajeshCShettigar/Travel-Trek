import React, { useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import Bookings from "../components/Bookings";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const TourDetails = (tour) => {
  const { id } = useParams();
  //console.log(id);
  const {currentUser}=useContext(AuthContext)
  
  const [err, setError] = useState("");
  const [success,setSuccess]=useState("");
  const { data: tourDetails } = useFetch(`https://traveltrek.onrender.com/tours/${id}`);

  const {data:tourReviews}=useFetch(`https://traveltrek.onrender.com/reviews/${id}`); 
  
  const [tourRating,setTourRating]=useState(null);
  
  //console.log(tourReviews);
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
  } = tourDetails;

  const options = { day: "numeric", month: "long", year: "numeric" };

  const reviewMsgRef = useRef("");
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(currentUser!==null){
    const reviewText = reviewMsgRef.current.value;
    const rating = tourRating;
    const time = new Date().toLocaleDateString("en-US", options);
    const username = currentUser.data.username;
    await axios.post(`https://traveltrek.onrender.com/reviews/${id}`,{username,reviewText,rating,time},{
      headers:{
        "Content-Type":"application/json"
      } 
    });
    setSuccess("Reviews submitted successfully")
    //alert("Reviews submitted successfully");
    }else{
      //alert("Please Login to post a review");
      setError("Please Login to post a review")
    }
  };

  return (
    <div className="md:ml-6 md:mr-6 m-2 shadow-2xl flex md:flex-row flex-col font-shantell font-bold">
      <div className="bg-white shadow-lg overflow-hidden md:w-2/3">
        <div className="relative">
          <img
            className="h-96 object-cover object-center w-full"
            src={photo}
            alt="Tour Image"
          />
          {featured && (
            <span className="absolute bg-yellow-300 bottom-0 right-0 p-1 rounded-sm">
              Featured
            </span>
          )}
        </div>
        <div className="p-4 m-6">
          <div className="flex items-center justify-between mb-4 mr-6">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <span className="block text-amber-600 text-bold text-xl">
              <i className="ri-star-line"></i>
              {tourReviews.length === 0 ? (
                "Not Rated"
              ) : (
                <span>({tourReviews.length}) Ratings</span>
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
              {distance} km
            </div>
          </div>
          <div className="flex flex-col flex-wrap justify-between pb-4">
            <h3>Reviews ({tourReviews.length})</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex border-pink-200 shadow-sm rounded-lg ">
                <div className="relative z-0 w-full mb-2 group mt-2">
                  <input
                    type="text"
                    className="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    ref={reviewMsgRef}
                  />
                  <label
                    htmlFor="fullname"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Share your thoughts...
                  </label>
                </div>
                <div className="flex flex-row items-center ml-2 mr-2 text-amber-500">
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
                  <span className="ml-1 text-amber-500">({tourRating})</span>
                </div>
                <button
                  type="submit"
                  className="btn bg-teal-400 rounded-md ml-4 pl-3 pr-3 my-1"
                >
                  Share
                </button>
              </div>
              {err && <p className="text-red-500 p-2">{err}</p>}
              {success && <p className="text-green-500 p-2">{success}</p>}
            </form>
            <div className="user-reviews container flex flex-col flex-wrap">
              {
             tourReviews?.map((review) => {
                  return(
                  <div
                    className="mt-3 shadow-md flex flex-wrap flex-col p-3" key={review._id}>
                    <div className="flex items-center flex-row mr-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={avatar}
                          alt="Reviewer Image" 
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900 mr-5">
                        {review.username}
                      </div>
                      <div className="text-sm text-gray-500 mr-5" >
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
        </div>
      </div>
      <div className="md:w-1/3 md:ml-2">
        <Bookings price={price} title={title}/>
      </div>
    </div>
  );
};

export default TourDetails;
