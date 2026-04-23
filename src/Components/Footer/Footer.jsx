import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 px-4 sm:px-8 md:px-16 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP CALL SECTION */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 mb-16 shadow-xl">

          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm tracking-wide">
              Cardiac Care – Ramdurg
            </p>
            <p className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2 text-blue-400 mt-1">
              <IoCallSharp />
              <a href="tel:+918618757141" className="hover:underline">
                +91 8618757141
              </a>
            </p>
          </div>

          {/* Center */}
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-wide">
            Dr. Santosh V. Chikkodi
          </h1>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm tracking-wide">
              Heart Center – Bagalkot
            </p>
            <p className="text-xl font-semibold flex items-center justify-center md:justify-end gap-2 text-blue-400 mt-1">
              <IoCallSharp />
              <a href="tel:+919113689250" className="hover:underline">
                +91 9113689250 
              </a>
            </p>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-700 pt-12">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white border-b border-gray-600 pb-2 tracking-wide">
              About Us
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              We provide trusted cardiac care with advanced treatments and patient-focused services. Reach out to us for consultations and emergency support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white border-b border-gray-600 pb-2 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-base">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white border-b border-gray-600 pb-2 tracking-wide">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400 text-base">

              <p className="flex items-center gap-3 hover:text-blue-400 transition">
                <IoCallSharp size={20} />
                <a href="tel:+918618757141">+91 8618757141  -Ramdurg </a>
              </p>

              <p className="flex items-center gap-3 hover:text-blue-400 transition">
                <IoCallSharp size={20} />
                <a href="tel:+919113689250">+91 9113689250 -Bagalkot</a>
              </p>

              <p className="flex items-center gap-3 hover:text-blue-400 transition">
                <MdEmail size={20} />
                <a href="mailto:drchikkodicardio@gmail.com">drchikkodicardio@gmail.com</a>
              </p>

              <p className="flex items-center gap-3 hover:text-blue-400 transition">
                <FaLocationDot size={20} />
                <a href="https://www.google.com/maps/place/Daddenavar+Hospital">
                  Bagalkot Location
                </a>
              </p>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white border-b border-gray-600 pb-2 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-gray-400 text-base">
              <li className="hover:text-blue-400 transition">24x7 Emergency Care</li>
              <li className="hover:text-blue-400 transition">Primary Angioplasty</li>
              <li className="hover:text-blue-400 transition">Complex Angioplasty</li>
              <li className="hover:text-blue-400 transition">Coronary Angiogram</li>
              <li className="hover:text-blue-400 transition">Pacemaker Support</li>
              <li className="hover:text-blue-400 transition">Heart Failure Treatment</li>
            </ul>
          </div>

        </div>

        {/* SOCIAL */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <h3 className="text-lg text-gray-300 tracking-wide">Follow Us</h3>
          <div className="flex gap-6 text-3xl text-gray-400">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookSquare /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaTwitterSquare /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagramSquare /></a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Designed & Developed by Sohail L and Karthik Kalburgi. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;