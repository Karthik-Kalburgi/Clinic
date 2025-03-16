import React, { useState } from 'react';
import wallpaper from '../Images/gallerywallpaper.jpg';
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

const Gallery = () => {
  // State to toggle between image and video gallery
  const [isImageGallery, setIsImageGallery] = useState(true);

  return (
    <div>
      <div className="relative w-full h-[250px] overflow-hidden">
        <img src={wallpaper} alt="Gallery Wallpaper" className="w-full h-[250px]" />
        <h1 className="text-blue-800 absolute right-[20%] top-[50%] text-3xl font-bold">
          About The Doctor
        </h1>
      </div>

      {/* Gallery Buttons */}
      <div className="relative flex p-12">
        <button
          className="bg-yellow-500 rounded-2xl absolute items-center mx-[50%] right-12 px-4 top-6"
          onClick={() => setIsImageGallery(true)} // Set state to show image gallery
        >
          Image Gallery
        </button>
        <button
          className="bg-yellow-500 rounded-2xl absolute items-center mx-[50%] right-18 px-4 top-6"
          onClick={() => setIsImageGallery(false)} // Set state to show video gallery
        >
          Video Gallery
        </button>
      </div>

      {/* Conditionally Render Image or Video Gallery */}
      <div className="grid grid-cols-3 gap-4 w-full h-[40%]">
        {isImageGallery ? (
          // Image Gallery
          <>
            <img src={gal1} alt="Gallery1" className="w-full h-full object-cover" />
            <img src={gal2} alt="Gallery2" className="w-full h-full object-cover" />
            <img src={gal3} alt="Gallery3" className="w-full h-full object-cover" />
            <img src={gal4} alt="Gallery4" className="w-full h-full object-cover" />
            <img src={gal5} alt="Gallery5" className="w-full h-full object-cover" />
            <img src={gal6} alt="Gallery6" className="w-full h-full object-cover" />
            <img src={gal7} alt="Gallery7" className="w-full h-full object-cover" />
            <img src={gal8} alt="Gallery8" className="w-full h-full object-cover" />
            <img src={gal9} alt="Gallery9" className="w-full h-full object-cover" />
            <img src={gal10} alt="Gallery10" className="w-full h-full object-cover" />
          </>
        ) : (
          // Video Gallery using iframe
          <>
          
            {/* Embed YouTube videos using iframe */}
            <div className="w-full h-full object-cover">
              <iframe 
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/O_gORx4L_Oc"
                title="Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full h-full object-cover">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xGUfA5wyNXk"
                title="Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full h-full object-cover">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5ECQtxnFESk"
                title="Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div></div>

            {/* Add more iframe elements for additional videos */}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
