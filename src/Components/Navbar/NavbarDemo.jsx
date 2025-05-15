  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { FaLocationDot } from "react-icons/fa6";
  import logo from '../../Images/mainlogo.png'

  const NavbarDemo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (link) => {
      setActiveLink(link);
      setIsMenuOpen(false);
    };

    return (
      <>
        <nav className="bg-sky-50 p-7 relative">
          <div className='right-0 absolute top-0 mt-8 mr-2'>
            {/* Using Link instead of window.location.href */}
            <Link to='/info'>
  <button className='bg-custom-cyan rounded-lg mr-8 font-semibold font-poppins text-white p-2'>
    Dr Chikkodi Cardiac Center
  </button>
</Link>
          </div>
          
          {/* Desktop and Tablet Navbar */}
          <div className="menu bg-sky-50 p-5 w-full mt-12">
            <ul className="hidden md:flex justify-between items-center text-zinc-500 font-semibold w-full">
              {/* Logo on the Left */}
              <div className="flex items-center gap-12">
                <img src={logo} alt="Logo" className="w-[38%] rounded-lg" />
              </div>

              {/* Menu items on the Right */}
              <div className="flex items-center gap-16 text-xl font-poppins font-bold tracking-wide">
                {['/', '/about', '/treatment', '/news', '/testimonial', '/gallery', '/blog', '/contact'].map((link, index) => (
                  <li
                    key={index}
                    onClick={() => handleLinkClick(link)}
                    className={`mx-[10px] cursor-pointer hover:text-cyan-800 ${activeLink === link ? 'text-cyan-500 border-b-2 border-cyan-800' : ''}`}
                  >
                    <Link to={link}>{link === '/' ? 'Home' : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}</Link>
                  </li>
                ))}
              </div>
            </ul>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex justify-between items-center">
              <img src={logo} alt="Logo" className="w-[80px] h-[40px] rounded-full" />
              <button onClick={toggleMenu} className="text-4xl text-black" aria-label="Toggle menu">
  &#8801;
</button>

            </div>

            {/* Mobile Navbar */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-400 p-4`}>
              <ul className="flex flex-col items-center font-poppins">
                {['/', '/about', '/treatment', '/news', '/testimonial', '/gallery', '/blog', '/contact'].map((link, index) => (
                  <li
                    key={index}
                    onClick={() => handleLinkClick(link)}
                    className={`w-full text-center cursor-pointer text-black hover:text-cyan-800 ${activeLink === link ? 'text-cyan-500 border-b-2 border-cyan-800' : ''}`}
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

  export default NavbarDemo;
