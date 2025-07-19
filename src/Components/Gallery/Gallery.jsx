import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';

import gal1 from '../../Images/gallery1.jpg';
import gal2 from '../../Images/gallery2.jpg';
import gal3 from '../../Images/gallery3.jpg';
import gal4 from '../../Images/gallery4.jpg';
import gal5 from '../../Images/gallery5.jpg';
import gal6 from '../../Images/gallery6.jpg';
import gal7 from '../../Images/gallery7.jpg';
import gal8 from '../../Images/gallery8.jpg';
import gal9 from '../../Images/gallery9.jpg';
import gal10 from '../../Images/gallery10.jpg';

const Gallery = () => {
  const [isImageGallery, setIsImageGallery] = useState(true);
  const [loading, setLoading] = useState(false);

  const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10];
  const videos = [
    "https://www.youtube.com/embed/O_gORx4L_Oc",
    "https://www.youtube.com/embed/xGUfA5wyNXk",
    "https://www.youtube.com/embed/5ECQtxnFESk"
  ];

  const handleGalleryChange = (showImageGallery) => {
    setLoading(true);
    setTimeout(() => {
      setIsImageGallery(showImageGallery);
      setLoading(false);
    }, 2000); // 2 seconds spinner
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-8">
      {/* Header */}
      <h1 className='text-center text-5xl font-poppins md:text-4xl font-extrabold mt-20 text-black bg-custom-blue py-8'>
        About the Doctor
      </h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-6 mb-14 mt-8">
        <button
          className="bg-yellow-500 rounded-2xl px-6 py-2 text-lg sm:text-xl text-black font-semibold transition-all duration-300 hover:bg-yellow-600"
          onClick={() => handleGalleryChange(true)}
        >
          Image Gallery
        </button>
        <button
          className="bg-yellow-500 rounded-2xl px-6 py-2 text-lg sm:text-xl text-black font-semibold transition-all duration-300 hover:bg-yellow-600"
          onClick={() => handleGalleryChange(false)}
        >
          Video Gallery
        </button>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <PacmanLoader color="#36d7b7" size={40} />
        </div>
      ) : (
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
            {isImageGallery ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
                />
              ))
            ) : (
              videos.map((video, index) => (
                <div key={index} className="w-full h-full mb-6">
                  <iframe
                    width="100%"
                    height="auto"
                    src={video}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className='w-[450px] h-[350px]'
                  ></iframe>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
