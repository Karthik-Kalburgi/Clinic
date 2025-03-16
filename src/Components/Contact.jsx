import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
    console.log(formData);
  };

  return (
    <>
    <div className='bg-gray-200 sm:max-xl'>
      <div>
        <h1 className="text-center text-5xl text-yellow-800 mt-6">Have A Question? Get In Touch</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

        {/* Left Side - Basic Info Cards */}
        <div className="space-y-6">
          {/* Card 1 - General Information */}
          <div className="bg-white p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
            <img alt="profile picture" src="https://via.placeholder.com/150" className="w-24 h-24 rounded-full mt-4 mx-auto" />
            <p className="text-gray-700 mt-4 flex gap-2   "> <IoLocationSharp className='text-xl' /> #23 Dummy Nagar, Near Smart Point, Bangalore - 5811653</p>
            <p className="text-gray-700 flex gap-2 mt-2 "> <FaPhoneVolume /> Phone: 897463150000</p>
            <p className="text-gray-700 flex gap-2 mt-2 "> <MdEmail className='text-xl' /> Email: sfvbjvbsk@gmail.com</p>
          </div>

          {/* Card 2 - Working Hours */}
          <div className="bg-white p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 flex gap-2 mt-2 "> <IoTimeSharp /> Working Hours</h2>
            <p className="text-gray-700 mt-4">Monday – Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
            <p className="text-gray-700 mt-4">Emergency Services Available</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Gender Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
