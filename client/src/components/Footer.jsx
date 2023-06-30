import React from 'react'
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="shadow-lg bg-[#ffffff] sm:p-6 ">
        <div className="md:flex md:justify-center">
        <div className="mb-6 md:mb-0 md:mr-96">
                <a href="#" className="flex items-center">
                    <img src={logo} className="h-14 mr-3" alt="FlowBite Logo" />
                </a>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:gap-4 sm:grid-cols-3">
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Discover</h2>
                    <ul className="text-gray-800 ">
                        <li className="mb-1">
                        <Link to="/home" className="hover:underline">Home</Link>
                        </li>
                        <li className="mb-1">
                            <a href="/home" className="hover:underline">About</a>
                        </li>
                        <li className="mb-1">
                            <a href="/tours" className="hover:underline">Tours</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Quick Links</h2>
                    <ul className="text-gray-800">
                        <li className="mb-1">
                            <Link to="/login" className="hover:underline">Login</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="/register" className="hover:underline">Register</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Contact</h2>
                    <ul className="text-gray-600 ">
                        <li className="mb-1">
                            <li className="hover:underline"><i className="ri-links-line"></i><span className="text-bold">Address :</span>4th block Bangalore</li>
                        </li>
                        <li className="mb-1">
                        <li href="#" className="hover:underline"><i className="ri-mail-line"></i><span className="text-bold">Email :</span>traveltrek245@gmail.com</li>
                        </li>
                        <li className="mb-1">
                        <li href="#" className="hover:underline"><i className="ri-phone-line"></i><span className="text-bold">Phone :</span>+043245623</li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm ml-16 text-gray-800 text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Travel-Trek™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:mr-16 text-bold">
                <a href="#" className="text-gray-800 hover:text-gray-900 ">
                    <i className="ri-facebook-fill"></i>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 ">
                    <i className="ri-instagram-line"></i>
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 ">
                    <i className="ri-twitter-line"></i>
                    <span className="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer