import React, { useRef, useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import profile from '../../Images/ContactProfile.jpg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  // Function to send email (auto-reply + notification to the admin)
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    // Send the email to the user as an auto-reply
    emailjs
      .sendForm('service_k8h3jh3', 'template_odtrfvk', form.current, 'KlO73PmloElJU-C1p')
      .then(
        () => {
          toast.success("Your response has been submitted successfully!");
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Something went wrong, please try again.");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <div className="bg-gray-100 py-12 sm:px-8 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-yellow-700 font-poppins">Have A Question? Get In Touch</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Basic Info Cards */}
          <div className="space-y-8">
            {/* Card 1 - General Information */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
              <img alt="profile" src={profile} className="w-32 h-32 rounded-full mt-4 mx-auto" />
              <p className="text-gray-700 mt-4 flex items-center gap-3">
                <IoLocationSharp className='text-2xl text-blue-500' />
                #23 Dummy Nagar, Near Smart Point, Bangalore - 5811653
              </p>
              <p className="text-gray-700 flex items-center gap-3 mt-2">
                <FaPhoneVolume className='text-2xl text-blue-500' />
                Phone: 897463150000
              </p>
              <p className="text-gray-700 flex items-center gap-3 mt-2">
                <MdEmail className='text-2xl text-blue-500' />
                Email: sfvbjvbsk@gmail.com
              </p>
            </div>

            {/* Card 2 - Working Hours */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                <IoTimeSharp className='text-2xl text-blue-500' />
                Working Hours
              </h2>
              <p className="text-gray-700 mt-4">Monday – Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
              <p className="text-gray-700 mt-4">Emergency Services Available</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Contact Form</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                  required
                  aria-label="Your Name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                  required
                  aria-label="Your Email"
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-12 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                  placeholder='Enter your phone number to book an appointment with the cardiologist.'
                  required
                  aria-label="Your Message"
                />
              </div>

              {/* Submit Button */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toastify Notifications */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={true} />
    </>
  );
};

export default Contacts;
