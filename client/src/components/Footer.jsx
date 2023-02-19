import React from 'react'
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="">
    <footer className="shadow-lg bg-slate-800 sm:p-6 ">
        <div className="md:flex md:justify-center">
        <div className="mb-6 md:mb-0 md:mr-96">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">ExcursionEase</span>
                </a>
            </div>
            <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Discover</h2>
                    <ul className="text-gray-600 ">
                        <li className="mb-1">
                            <a href="https://flowbite.com/" className="hover:underline">Home</a>
                        </li>
                        <li className="mb-1">
                            <a href="https://tailwindcss.com/" className="hover:underline">About</a>
                        </li>
                        <li className="mb-1">
                            <a href="https://tailwindcss.com/" className="hover:underline">Tours</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Quick Links</h2>
                    <ul className="text-gray-600 ">
                        <li className="mb-1">
                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Gallery</a>
                        </li>
                        <li className="mb-1">
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Login</a>
                        </li>
                        <li className="mb-1">
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Register</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Contact</h2>
                    <ul className="text-gray-600 ">
                        <li className="mb-1">
                            <a href="#" className="hover:underline"><i className="ri-links-line"></i><span className="text-bold">Address :</span>4th block Bangalore</a>
                        </li>
                        <li className="mb-1">
                        <a href="#" className="hover:underline"><i className="ri-mail-line"></i><span className="text-bold">Email :</span>excursionease@gmail.com</a>
                        </li>
                        <li className="mb-1">
                        <a href="#" className="hover:underline"><i className="ri-phone-line"></i><span className="text-bold">Phone :</span>+043245623</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm ml-16 text-gray-500 text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">ExcursionEase™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:mr-16">
                <a href="#" className="text-gray-500 hover:text-gray-900 ">
                    <i className="ri-facebook-fill"></i>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 ">
                    <i className="ri-instagram-line"></i>
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 ">
                    <i className="ri-twitter-line"></i>
                    <span className="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer