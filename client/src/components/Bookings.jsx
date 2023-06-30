import React, { useState,useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Bookings = ({ price ,title}) => {
  const servicecharge = 10;

  const { currentUser } = useContext(AuthContext);

  const [error, setError] = useState(false);

  const [credentials, setCredentials] = useState({
    userEmail: currentUser?.data.email,
    tourName:title,
    fullName: "",
    guestSize: 1,
    phone:"",
    bookAt:"",
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(credentials);
   // console.log(title);
    //console.log(price);
  };

  const handleSubmit = async(e,tourName) => {
    e.preventDefault();
    console.log(credentials);
    if(currentUser!==null){
      if(credentials.fullname!==null&&credentials.email!==null&&credentials.bookAt!==null&&credentials.guestSize!==null){
        console.log({
          userEmail: credentials.userEmail,
          tourName: credentials.tourName,
          fullName: credentials.fullName,
          guestSize: credentials.guestSize,
          phone: credentials.phone,
          bookAt: credentials.bookAt
        });
        try {
          await axios.post(`https://traveltrek.onrender.com/booking/`, 
          {
            userEmail: credentials.userEmail,
            tourName: tourName, 
            fullName: credentials.fullName,
            guestSize: credentials.guestSize,
            phone: credentials.phone,
            bookAt: credentials.bookAt
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          navigate('/thankyou');
        } catch (error) {
          setError("Error.. Please try again later.");
        }
      }else
      {
        setError("Please complete all field")
      }
    }else
    {
      setError("Please login to complete booking")
    }
    // Removed the navigation from here
  };
  const [total, setTotal] = useState(Number(price) + Number(servicecharge));

  useEffect(() => {
    const newTotal = Number(price) * Number(credentials.guestSize) + Number(servicecharge);
    setTotal(newTotal);
  }, [credentials.guestSize, price]);

    return (
    <div className="shadow-md p-4 w-full h-full">
      <div className="p-2 text-2xl">
        <i className="ri-money-dollar-circle-line"></i>
        {price}/per person
      </div>
      <form onSubmit={(e) => handleSubmit(e, title)} className="p-3 shadow-md">
      <h3>Information</h3>
        <div className="relative z-0 w-full mb-6 group mt-3">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={(e) => handleChange(e)} value={credentials.fullName}
          />
          <label
            htmlFor="fullName"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={(e) => handleChange(e)} value={credentials.phone} 
          />
          <label
            htmlFor="phone"
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
              onChange={(e) => handleChange(e)} value={credentials.bookAt}
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
              onChange={(e) => handleChange(e)} value={credentials.guestSize}
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
        <div className="className"></div>
        <div className="flex justify-center items-start p-2">
          <div className="justify-center items-center">
          <button
          type="submit"
          className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-4">
          Submit
        </button>
        </div>
        </div>
        {
          error && <p className="text-center text-red-600">{error}</p>
        }
      </form>
    </div>
  );
};

export default Bookings;
