import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/mainlogo.png';

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

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/treatment', label: 'Treatment' },
    { path: '/services', label: 'Services' },
    { path: '/news', label: 'News' },
    { path: '/testimonial', label: 'Testimonials' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-sky-50 p-7 relative shadow-md z-50">
      {/* Top Right Button */}
      <div className="absolute top-4 right-4">
        <Link to="/info">
          <button className="bg-custom-cyan text-white font-poppins font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-cyan-600 transition">
            Doctor Chikkodi's Cardiac Center
          </button>
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center mt-12 px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Clinic Logo" className="w-[150px] rounded-lg" />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-xl font-poppins font-bold tracking-wide text-zinc-600">
          {links.map(({ path, label }) => (
            <li
              key={path}
              onClick={() => handleLinkClick(path)}
              className={`cursor-pointer hover:text-cyan-800 transition ${
                activeLink === path ? 'text-cyan-500 border-b-2 border-cyan-800' : ''
              }`}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4">
        <img src={logo} alt="Clinic Logo" className="w-[90px] h-[40px]  rounded-full" />

        <button
          onClick={toggleMenu}
          className="text-4xl text-black mt-16"
          aria-label="Toggle menu"
        >
          &#8801;
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-400 text-white px-4 py-4 rounded-lg mt-2">
          <ul className="flex flex-col items-center space-y-4 font-poppins font-medium">
            {links.map(({ path, label }) => (
              <li
                key={path}
                onClick={() => handleLinkClick(path)}
                className={`w-full text-center text-white hover:text-yellow-300 transition ${
                  activeLink === path ? 'text-yellow-300 border-b border-white' : ''
                }`}
              >
                <Link to={path} className="block py-2 w-full">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarDemo;
