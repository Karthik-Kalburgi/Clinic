import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import logo from '../Images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sm:max-xl items-center">
        {/* Logo and Location Section */}
        <div className="flex justify-between items-center p-2 rounded-md h-8">
          {/* Location Information */}
          <p className="flex gap-2 mt-1 ml-2 bg-yellow-200 text-sm flex-grow">
            Some random nagar near dominos Bangalore 587123512
            <FaLocationDot className="mt-1" />
          </p>
        </div>

        {/* Menu Section */}
        <div className="menu bg-blue-400 p-3 w-full rounded-md">
          {/* Desktop and Tablet Navbar */}
          <ul className="hidden md:flex justify-between items-center text-black font-bold w-full">
            <div className="flex items-center gap-12">
              <li className="mx-[10px] cursor-pointer"><Link to="/">Home</Link></li>
              <li className="mx-[10px] cursor-pointer"><Link to="/about">About Doctor</Link></li>
              <li className="mx-[10px] cursor-pointer"><Link to="/treatment">Treatment</Link></li>
              <li className="mx-[10px] cursor-pointer"><Link to="/news">News</Link></li>
              <li className="mx-[10px] cursor-pointer"><Link to="/testimonial">Testimonial</Link></li>
              <li className="mx-[10px] cursor-pointer"><Link to="/gallery">Gallery</Link></li>
              <li className="mx-[10px] cursor-pointer"><Link to="/blog">Blog</Link></li>
              {/* Move Contact button here after Blog */}
              <li className="cursor-pointer">
                <button className="bg-gray-800 text-white p-1 px-4 rounded-lg">
                  <Link to="/contact">Contact</Link>
                </button>
              </li>
            </div>
            {/* Logo on the Right */}
            <img src={logo} alt="Logo" className="w-[100px] h-[50px] rounded-full " />
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-4xl text-black"
            >
              &#8801;
            </button>
          </div>

          {/* Mobile Navbar */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <ul className="flex flex-wrap bg-blue-400 p-4">
              <li className="w-1/2 cursor-pointer text-white hover:text-yellow-500"><Link to="/">Home</Link></li>
              <li className="w-1/2 cursor-pointer text-white hover:text-yellow-500"><Link to="/about">About Doctor</Link></li>
              <li className="w-1/2 cursor-pointer text-white hover:text-yellow-500"><Link to="/treatment">Treatment</Link></li>
              <li className="w-1/2 cursor-pointer text-white hover:text-yellow-500"><Link to="/news">News</Link></li>
              <li className="w-1/2 cursor-pointer text-white hover:text-yellow-500"><Link to="/testimonial">Testimonial</Link></li>
              <li className="w-1/2 cursor-pointer text-white hover:text-yellow-500"><Link to="/gallery">Gallery</Link></li>
              <li className="w-1/2 cursor-pointer text-white hover:text-yellow-500"><Link to="/blog">Blog</Link></li>
              {/* Move Contact button here after Blog */}
              <li className="w-full cursor-pointer text-white">
                <button className="bg-gray-800 text-white p-1 px-4 rounded-lg">
                  <Link to="/contact">Contact</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
