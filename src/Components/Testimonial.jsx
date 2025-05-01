import React from 'react';

const Testimonial = ({ photo, name, stars, title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
      <img
        src={photo}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
      />
      <h3 className="text-lg font-bold text-center text-gray-800">{name}</h3>
      <div className="flex justify-center mt-1 mb-2">
        {Array.from({ length: stars }).map((_, index) => (
          <span key={index} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>
      <h4 className="text-center text-black font-semibold truncate">{title}</h4>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{content}</p>
    </div>
  );
};

export default Testimonial;
