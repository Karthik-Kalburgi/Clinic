import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import logos from '../Images/Loogo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Track the active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link when clicked
    setIsMenuOpen(false); // Close the menu after clicking a link on mobile
  };

  return (
    <>
      <nav className="bg-sky-50 p-7 relative">
        {/* Desktop and Tablet Navbar */}
        <div className="menu bg-sky-50 p-5 w-full">
          <ul className="hidden md:flex justify-between items-center text-zinc-500 font-semibold w-full">
            {/* Logo on the Left */}
            <div className="flex items-center gap-12">
              <img src={logos} alt="Logo" className="w-[28%] rounded-lg" />
            </div>

            {/* Menu items on the Right */}
            <div className="flex items-center gap-16 text-xl font-poppins font-bold tracking-wide">
              {['/', '/about', '/treatment', '/news', '/testimonial', '/gallery', '/blog', '/contact'].map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleLinkClick(link)} // Set active link on click
                  className={`mx-[10px] cursor-pointer hover:text-cyan-800 ${activeLink === link ? 'text-cyan-500 border-b-2 border-cyan-800' : ''}`} // Active state styling
                >
                  <Link to={link}>{link === '/' ? 'Home' : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}</Link>
                </li>
              ))}
            </div>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex justify-between items-center">
            <img src={logos} alt="Logo" className="w-[80px] h-[40px] rounded-full" />
            <button
              onClick={toggleMenu}
              className="text-4xl text-black"
            >
              &#8801; {/* Hamburger Icon */}
            </button>
          </div>

          {/* Mobile Navbar */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-400 p-4`}>
            <ul className="flex flex-col items-center font-poppins ">
              {['/', '/about', '/treatment', '/news', '/testimonial', '/gallery', '/blog', '/contact'].map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleLinkClick(link)} // Set active link on click
                  className={`w-full text-center cursor-pointer text-black hover:text-cyan-800 ${activeLink === link ? 'text-cyan-500 border-b-2 border-cyan-800' : ''}`} // Active state styling
                >
                  <Link to={link} className="block p-3">
                    {link === '/' ? 'Home' : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
