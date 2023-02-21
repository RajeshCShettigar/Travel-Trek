import React, { useState,useContext } from "react";
import { Link ,useNavigate} from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate=useNavigate();
  
  const {user,dispatch}=useContext(AuthContext);

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
    navigate("/");
  }
  
  return (
    <>
      <nav className="bg-[#ffffff] border-gray-200 px-2 sm:px-4 rounded shadow-lg sticky top-0 z-10">
        <div className="container flex flex-wrap items-center justify-between">
          <a href="#" className="md:ml-12 flex items-center">
            <img src={logo} className="h-12 mr-3 sm:h-9" alt="logo" />

          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={` ${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 font-ubuntu md:text-md">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:hover:text-pink-600 md:p-2 "
                  aria-current="page"
                >
                  <i className="ri-home-4-line"></i>Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:border-1 md:rounded-full md:p-2 md:px-4"
                >
                  <i className="ri-login-box-line"></i>Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-600  md:border-1 md:rounded-full md:p-2 md:px-2"
                >
                 <i className="ri-login-box-fill"></i> Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
