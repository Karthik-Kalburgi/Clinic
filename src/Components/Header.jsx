// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaLocationDot } from "react-icons/fa6";
// import logos from '../Images/Loogo.jpg'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="sm:max-xl items-center font-bold p-5 ">
//         {/* Menu Section */}
//         <div className="menu bg-white  p-5 w-full">
//           {/* Desktop and Tablet Navbar */}
//           <ul className="hidden md:flex justify-between items-center text-black font-semibold w-full">
//             {/* Logo on the Left */}
//             <div className="flex items-center gap-12">
//               <img src={logos} alt="Logo" className="w-[28%] rounded-lg " />
//             </div>

//             {/* Menu items on the Right */}
//             <div className="flex items-center gap-16 text-xl ">
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800"><Link to="/">Home</Link></li>
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800"><Link to="/about">About </Link></li>
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800"><Link to="/treatment">Treatment</Link></li>
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800"><Link to="/news">News</Link></li>
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800"><Link to="/testimonial">Testimonial</Link></li>
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800"><Link to="/gallery">Gallery</Link></li>
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800"><Link to="/blog">Blog</Link></li>
//               {/* Contact Button */}
//               <li className="mx-[10px] cursor-pointer hover:text-blue-800">
//                 <Link to="/contact">ContactUs</Link>
//               </li>
//             </div>
//           </ul>

//           {/* Hamburger Menu for Mobile */}
//           <div className="md:hidden flex justify-between items-center">
//             <img src={logos} alt="Logo" className="w-[80px] h-[40px] rounded-full" />
//             <button
//               onClick={toggleMenu}
//               className="text-4xl text-black"
//             >
//               &#8801;
//             </button>
//           </div>

//           {/* Mobile Navbar */}
//           <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
//             <ul className="flex flex-wrap bg-blue-400 p-4">
//               <li className="w-1/2 cursor-pointer text-black hover:text-blue-800"><Link to="/">Home</Link></li>
//               <li className="w-1/2 cursor-pointer text-black hover:text-blue-800"><Link to="/about">About Doctor</Link></li>
//               <li className="w-1/2 cursor-pointer text-black hover:text-blue-800"><Link to="/treatment">Treatment</Link></li>
//               <li className="w-1/2 cursor-pointer text-black hover:text-blue-800"><Link to="/news">News</Link></li>
//               <li className="w-1/2 cursor-pointer text-black hover:text-blue-800"><Link to="/testimonial">Testimonial</Link></li>
//               <li className="w-1/2 cursor-pointer text-black hover:text-blue-800"><Link to="/gallery">Gallery</Link></li>
//               <li className="w-1/2 cursor-pointer text-black hover:text-blue-800"><Link to="/blog">Blog</Link></li>
//               <li className="w-full cursor-pointer text-black">
//                 <button className="bg-gray-800 text-white p-1 px-4 ">
//                   <Link to="/contact">Contact</Link>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
