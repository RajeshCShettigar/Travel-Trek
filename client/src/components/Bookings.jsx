import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const Bookings = ({ price }) => {
  const servicecharge=10
  const [credentials, setCredentials] = useState({
    id: "",
    userEmail: "raj@gmail.com",
    fullname: "",
    phoneno: "",
    bookAt: "",
    guestSize: 1,
  });
  
  const navigate=useNavigate();
  
  const handleChange = (e) => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
    console.log(credentials);
  };

  const handleSubmit = (e) => {
       e.preventDefault();
       console.log(credentials);
       navigate('/payment',{state:credentials});
  }
  const total = Number(price)*Number(credentials.guestSize)+Number(servicecharge);

    return (
    <div className="shadow-md p-4 w-full h-full">
      <div className="p-2 text-2xl">
        <i className="ri-money-dollar-circle-line"></i>
        {price}/per person
      </div>
      <form onSubmit={handleSubmit} className="p-3 shadow-md">
      <h3>Information</h3>
        <div className="relative z-0 w-full mb-6 group mt-3">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="fullname"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="phoneno"
            id="phoneno"
            placeholder=" "
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="phoneno"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="bookAt"
              id="bookAt"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Booking Date
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="guestSize"
              id="guestSize"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="guestSize"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Guests
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <h5 className="p-2">Service Charges :${servicecharge}</h5>
          <h5 className="p-2">Total Price :${total}</h5>
        </div>
        <button
          type="submit"
          className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Bookings;
