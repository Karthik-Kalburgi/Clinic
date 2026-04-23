import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mt-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION - UPDATED */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">

          {/* Left - Cardiac Center */}
          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400">
              Give us a Call for Cardiac Center <IoCallSharp className="text-xl" />
            </p>
            <p className="text-white hover:text-yellow-500 cursor-pointer">
              <a href="tel:+918618757141">+91 8618757141</a>
            </p>
          </div>

          {/* Center Name */}
          <h1 className="text-2xl font-semibold hover:text-blue-400 text-center">
            Dr. Santosh V. Chikkodi
          </h1>

          {/* Right - Bagalkot Center */}
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-2 hover:text-blue-400">
              <IoCallSharp className="text-xl" />
              For Bagalkot Center call
            </p>
            <p className="text-white hover:text-yellow-500 cursor-pointer">
              <a href="tel:+919113689250">+91 9113689250</a>
            </p>
          </div>

        </div>

        {/* GRID CONTENT */}
        <nav aria-label="Footer" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">About Us</h3>
            <p className="text-gray-400 hover:text-yellow-500">
              We are dedicated to providing the best healthcare and treatment. Contact us for any inquiries or assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/services" className="hover:text-yellow-500">Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Contact Info</h3>

            <p className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 mt-3">
              <IoCallSharp size={22} />
              <a href="tel:+918618757141">Cardiac Center: +91 8618757141</a>
            </p>

            <p className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 mt-3">
              <IoCallSharp size={22} />
              <a href="tel:+919113689250">Bagalkot Center: +91 9113689250</a>
            </p>

            <p className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 mt-3">
              <MdEmail size={22} />
              <a href="mailto:drchikkodicardio@gmail.com">drchikkodicardio@gmail.com</a>
            </p>

            <p className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 mt-3">
              <FaLocationDot size={22} />
              <a href="https://www.google.com/maps/place/Daddenavar+Hospital">
                Daddenavar Hospital Bagalkot
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500">24x7 Emergency care</li>
              <li className="hover:text-yellow-500">Primary angioplasty</li>
              <li className="hover:text-yellow-500">Complex angioplasty</li>
              <li className="hover:text-yellow-500">Coronary angiogram</li>
              <li className="hover:text-yellow-500">Temporary pacemaker</li>
              <li className="hover:text-yellow-500">Heart failure treatment</li>
              <li className="hover:text-yellow-500">OCT & IVUS imaging</li>
              <li className="hover:text-yellow-500">Stress tests</li>
            </ul>
          </div>
        </nav>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6 text-3xl">
            <a href="#" className="hover:text-blue-600"><FaFacebookSquare /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitterSquare /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-600"><FaInstagramSquare /></a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t pt-4 text-center text-gray-400">
          <p>&copy; 2025 Designed And Developed by Sohail L and Karthik Kalburgi. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;