import React, { useState } from 'react';

import gal1 from '../Images/gallery1.jpg';
import gal2 from '../Images/gallery2.jpg';
import gal3 from '../Images/gallery3.jpg';
import gal4 from '../Images/gallery4.jpg';
import gal5 from '../Images/gallery5.jpg';
import gal6 from '../Images/gallery6.jpg';
import gal7 from '../Images/gallery7.jpg';
import gal8 from '../Images/gallery8.jpg';
import gal9 from '../Images/gallery9.jpg';
import gal10 from '../Images/gallery10.jpg';
import wallpaper from '../Images/News1-picaai.png';

const Gallery = () => {
  // State to toggle between image and video gallery
  const [isImageGallery, setIsImageGallery] = useState(true);

  return (
    <div className="px-4 sm:px-6 md:px-12 py-8">

      {/* Gallery Header Section */}
      {/* <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden">
        <img src={} alt="Gallery Wallpaper" className="h-full w-full object-cover rounded-xl" />
        <h1 className="text-white absolute left-[4%] top-[10%] text-3xl sm:text-4xl font-bold">
          About The Doctor
        </h1>
      </div> */}

      {/* Certifications and achievement from about section to gallery section  */}
      <div>
        <h1 className=' text-center  text-5xl font-poppins  md:text-4xl font-extrabold  mt-20 text-black bg-custom-blue py-8  '>About the Doctor</h1>
      </div>

      {/* Gallery Buttons */}
      <div className="flex justify-center gap-6 mb-14 mt-8">
        <button
          className="bg-yellow-500 rounded-2xl px-6 py-2 text-lg sm:text-xl text-black font-semibold transition-all duration-300 hover:bg-yellow-600"
          onClick={() => setIsImageGallery(true)} // Set state to show image gallery
        >
          Image Gallery
        </button>
        <button
          className="bg-yellow-500 rounded-2xl px-6 py-2 text-lg sm:text-xl text-black font-semibold transition-all duration-300 hover:bg-yellow-600"
          onClick={() => setIsImageGallery(false)} // Set state to show video gallery
        >
          Video Gallery
        </button>
      </div>

      {/* Conditionally Render Image or Video Gallery */}
      <div className="px-4 sm:px-8 lg:px-16"> {/* Added padding to the left and right of the gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {isImageGallery ? (
            // Image Gallery
            <>
              <img src={gal1} alt="Gallery1" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal2} alt="Gallery2" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal3} alt="Gallery3" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal4} alt="Gallery4" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal5} alt="Gallery5" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal6} alt="Gallery6" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal7} alt="Gallery7" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal8} alt="Gallery8" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal9} alt="Gallery9" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
              <img src={gal10} alt="Gallery10" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
            </>
          ) : (
            // Video Gallery using iframe
            <>
              <div className="w-full h-full mb-6">
                <iframe 
                  width="100%" 
                  height="auto" 
                  src="https://www.youtube.com/embed/O_gORx4L_Oc" 
                  title="Video 1" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full h-full mb-6">
                <iframe 
                  width="100%" 
                  height="auto" 
                  src="https://www.youtube.com/embed/xGUfA5wyNXk" 
                  title="Video 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full h-full mb-6">
                <iframe 
                  width="100%" 
                  height="auto" 
                  src="https://www.youtube.com/embed/5ECQtxnFESk" 
                  title="Video 3" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              {/* Add more iframe elements for additional videos */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
